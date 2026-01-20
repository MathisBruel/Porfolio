import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const rateLimit = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000;
const MAX_REQUESTS = 5;

function escapeHtml(text: string): string {
    const map: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
    };
    return text.replace(/[&<>"']/g, (char) => map[char]);
}

function sanitizeForEmailHeader(text: string): string {
    return text.replace(/[\r\n\t]/g, ' ').substring(0, 100);
}

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const record = rateLimit.get(ip);

    if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
        rateLimit.set(ip, { count: 1, timestamp: now });
        return true;
    }

    if (record.count >= MAX_REQUESTS) {
        return false;
    }

    record.count++;
    return true;
}

const contactSchema = z.object({
    name: z
        .string()
        .min(2, 'Le nom doit contenir au moins 2 caractères')
        .max(100, 'Le nom ne peut pas dépasser 100 caractères')
        .regex(/^[a-zA-ZÀ-ÿ\s\-']+$/, 'Le nom contient des caractères invalides'),
    email: z
        .string()
        .email('Adresse email invalide')
        .max(254, 'Email trop long'),
    subject: z
        .string()
        .min(3, 'Le sujet doit contenir au moins 3 caractères')
        .max(200, 'Le sujet ne peut pas dépasser 200 caractères'),
    message: z
        .string()
        .min(10, 'Le message doit contenir au moins 10 caractères')
        .max(5000, 'Le message ne peut pas dépasser 5000 caractères'),
    captchaToken: z
        .string()
        .min(1, 'Token captcha requis'),
});

async function verifyCaptcha(token: string): Promise<boolean> {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!secretKey) {
        console.error('RECAPTCHA_SECRET_KEY non configurée');
        return false;
    }

    try {
        const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}`,
        });

        const data = await response.json();
        return data.success === true;
    } catch (error) {
        console.error('Erreur de vérification reCAPTCHA:', error);
        return false;
    }
}

export async function POST(request: Request) {
    try {
        const forwardedFor = request.headers.get('x-forwarded-for');
        const ip = forwardedFor?.split(',')[0]?.trim() || 'unknown';

        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { error: 'Trop de requêtes. Réessayez dans une minute.' },
                { status: 429 }
            );
        }

        let body;
        try {
            body = await request.json();
        } catch {
            return NextResponse.json(
                { error: 'Format de requête invalide.' },
                { status: 400 }
            );
        }

        const validationResult = contactSchema.safeParse(body);

        if (!validationResult.success) {
            const errors = validationResult.error.errors.map(e => e.message).join(', ');
            return NextResponse.json(
                { error: errors },
                { status: 400 }
            );
        }

        const { name, email, subject, message, captchaToken } = validationResult.data;

        const isCaptchaValid = await verifyCaptcha(captchaToken);
        if (!isCaptchaValid) {
            return NextResponse.json(
                { error: 'Vérification captcha échouée. Veuillez réessayer.' },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const safeName = sanitizeForEmailHeader(name);
        const safeSubject = sanitizeForEmailHeader(subject);
        const safeEmail = email.toLowerCase();
        const safeMessage = escapeHtml(message);

        const mailOptions = {
            from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
            replyTo: safeEmail,
            to: process.env.SMTP_USER,
            subject: `[PORTFOLIO] ${safeSubject}`,
            text: `
Nom: ${safeName}
Email: ${safeEmail}
Sujet: ${safeSubject}

Message:
${message}
            `.trim(),
            html: `
<h3>Nouveau message de votre Portfolio</h3>
<p><strong>Nom:</strong> ${escapeHtml(safeName)}</p>
<p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
<p><strong>Sujet:</strong> ${escapeHtml(safeSubject)}</p>
<br/>
<p><strong>Message:</strong></p>
<p>${safeMessage.replace(/\n/g, '<br>')}</p>
            `.trim(),
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email envoyé avec succès !' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        return NextResponse.json(
            { error: 'Une erreur est survenue. Veuillez réessayer plus tard.' },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json(
        { error: 'Méthode non autorisée' },
        { status: 405 }
    );
}
