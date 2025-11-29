import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Validation simple
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Tous les champs sont requis.' },
                { status: 400 }
            );
        }

        // Configuration du transporteur SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: process.env.SMTP_SECURE === 'true', // true pour 465, false pour les autres ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Contenu de l'email
        const mailOptions = {
            from: `"${name}" <${process.env.SMTP_USER}>`, // L'expéditeur doit souvent être le même que l'utilisateur authentifié
            replyTo: email, // Pour pouvoir répondre directement à la personne
            to: process.env.SMTP_USER, // Vous recevez l'email
            subject: `[PORTFOLIO] ${subject}`,
            text: `
Nom: ${name}
Email: ${email}
Sujet: ${subject}

Message:
${message}
            `,
            html: `
<h3>Nouveau message de votre Portfolio</h3>
<p><strong>Nom:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Sujet:</strong> ${subject}</p>
<br/>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
            `,
        };

        // Envoi de l'email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email envoyé avec succès !' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        return NextResponse.json(
            { error: 'Erreur lors de l\'envoi du message.' },
            { status: 500 }
        );
    }
}
