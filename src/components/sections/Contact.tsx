"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Radio } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const [captchaError, setCaptchaError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCaptchaChange = (token: string | null) => {
        setCaptchaToken(token);
        setCaptchaError(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!captchaToken) {
            setCaptchaError(true);
            setStatus({ type: 'error', message: 'Veuillez valider le captcha.' });
            return;
        }

        setIsSubmitting(true);
        setStatus({ type: null, message: "" });

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, captchaToken }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus({ type: 'success', message: 'Transmission réussie. Message reçu.' });
                setFormData({ name: "", email: "", subject: "", message: "" });
                setCaptchaToken(null);
                // @ts-ignore
                window.grecaptcha.reset();
            } else {
                setStatus({ type: 'error', message: data.error || 'Erreur de transmission.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Échec de la connexion au serveur.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
                        <Radio size={14} className="text-neon-green" />
                        <span className="text-xs font-mono text-neon-green">/etc/transmission</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">ÉTABLIR LA LIAISON</h2>
                    <p className="mt-4 text-gray-400 font-mono text-sm">
                        &gt; Prêt à recevoir la transmission. Force du signal: 100%.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-white">Canaux de Transmission</h3>
                        <p className="text-gray-400 leading-relaxed border-l-2 border-neon-purple/50 pl-4">
                            Actuellement en recherche de nouvelles opportunités en Développement ou DevOps.
                            <br />
                            Disponible pour missions freelance via Deva2.
                        </p>

                        <div className="space-y-6">
                            <div className="glass-panel p-4 rounded-lg border border-white/5 flex items-center gap-4 hover:border-neon-cyan/30 transition-colors group">
                                <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center text-neon-cyan group-hover:scale-110 transition-transform">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-gray-500">EMAIL_PROTOCOL</p>
                                    <a href="mailto:mathis.bruel17700@gmail.com" className="text-white hover:text-neon-cyan transition-colors font-mono text-sm break-all">
                                        mathis.bruel17700@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="glass-panel p-4 rounded-lg border border-white/5 flex items-center gap-4 hover:border-neon-purple/30 transition-colors group">
                                <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center text-neon-purple group-hover:scale-110 transition-transform">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-gray-500">VOICE_LINK</p>
                                    <a href="tel:0768363222" className="text-white hover:text-neon-purple transition-colors font-mono text-sm">
                                        07.68.36.32.22
                                    </a>
                                </div>
                            </div>

                            <div className="glass-panel p-4 rounded-lg border border-white/5 flex items-center gap-4 hover:border-neon-green/30 transition-colors group">
                                <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center text-neon-green group-hover:scale-110 transition-transform">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-gray-500">COORDINATES</p>
                                    <p className="text-white font-mono text-sm">35000, Rennes (Mobilité 35)</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-8">
                            <a
                                href="https://github.com/MathisBruel"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white hover:text-black transition-all hover:scale-110"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mathis-bruel"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded bg-white/5 flex items-center justify-center border border-white/10 hover:bg-[#0077b5] hover:text-white transition-all hover:scale-110"
                            >
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-panel p-6 md:p-8 rounded-xl border border-white/5 relative"
                    >
                        {/* Decorative scanline */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-cyan opacity-50" />

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-gray-500">USER_ID</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-neon-cyan text-white font-mono text-sm transition-colors"
                                        placeholder="Nom"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-gray-500">RETURN_ADDRESS</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-neon-cyan text-white font-mono text-sm transition-colors"
                                        placeholder="email@domain.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-gray-500">SUBJECT_HEADER</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-neon-cyan text-white font-mono text-sm transition-colors"
                                    placeholder="Proposition de projet..."
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-gray-500">PAYLOAD</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-neon-cyan text-white font-mono text-sm transition-colors resize-y"
                                    placeholder="Contenu du message..."
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono text-gray-500">SECURITY_PROTOCOL</label>
                                <div className="flex justify-center md:justify-start">
                                    {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ? (
                                        <ReCAPTCHA
                                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                            onChange={handleCaptchaChange}
                                            theme="dark"
                                        />
                                    ) : (
                                        <div className="p-4 border border-red-500/50 bg-red-500/10 rounded text-red-400 text-xs font-mono">
                                            Erreur de configuration : Clé reCAPTCHA manquante.
                                            <br />
                                            Vérifiez .env.local et redémarrez le serveur.
                                        </div>
                                    )}
                                </div>
                                {captchaError && (
                                    <p className="text-red-400 text-xs font-mono">Veuillez valider le captcha.</p>
                                )}
                            </div>

                            {status.message && (
                                <div className={`p-3 rounded text-sm font-mono ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                                    {status.message}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-neon-cyan/10 hover:bg-neon-cyan/20 border border-neon-cyan/50 text-neon-cyan font-mono py-3 rounded transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(0,243,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'TRANSMISSION...' : 'ENVOYER_TRANSMISSION'} <Send size={16} />
                            </button>
                        </form>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
