"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Radio } from "lucide-react";
import { trackEvent } from "@/utils/plausible";

export default function Contact() {
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
                    <p className="mt-4 text-gray-400 font-mono text-sm max-w-2xl mx-auto">
                        &gt; Prêt à recevoir la transmission. Utilisez les canaux sécurisés ci-dessous pour me contacter directement.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-panel p-8 md:p-12 rounded-2xl border border-white/5 relative bg-black/20 backdrop-blur-sm overflow-hidden"
                    >
                        {/* Decorative scanline */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-cyan opacity-50" />
                        
                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="glass-panel p-6 rounded-xl border border-white/5 flex flex-col items-center text-center gap-4 hover:border-neon-cyan/30 transition-all hover:bg-white/5 group">
                                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-neon-cyan group-hover:scale-110 transition-transform border border-white/5">
                                    <Mail size={24} />
                                </div>
                                <div className="w-full">
                                    <p className="text-[10px] font-mono text-gray-500 mb-1">EMAIL_PROTOCOL</p>
                                    <a 
                                        href="mailto:mathis.bruel17700@gmail.com" 
                                        onClick={() => trackEvent('Contact Click', { type: 'email' })} 
                                        className="text-white hover:text-neon-cyan transition-colors font-mono text-sm break-all"
                                    >
                                        mathis.bruel17700@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="glass-panel p-6 rounded-xl border border-white/5 flex flex-col items-center text-center gap-4 hover:border-neon-purple/30 transition-all hover:bg-white/5 group">
                                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-neon-purple group-hover:scale-110 transition-transform border border-white/5">
                                    <Phone size={24} />
                                </div>
                                <div className="w-full">
                                    <p className="text-[10px] font-mono text-gray-500 mb-1">VOICE_LINK</p>
                                    <a 
                                        href="tel:0768363222" 
                                        onClick={() => trackEvent('Contact Click', { type: 'phone' })} 
                                        className="text-white hover:text-neon-purple transition-colors font-mono text-sm"
                                    >
                                        07.68.36.32.22
                                    </a>
                                </div>
                            </div>

                            <div className="glass-panel p-6 rounded-xl border border-white/5 flex flex-col items-center text-center gap-4 hover:border-neon-green/30 transition-all hover:bg-white/5 group">
                                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-neon-green group-hover:scale-110 transition-transform border border-white/5">
                                    <MapPin size={24} />
                                </div>
                                <div className="w-full">
                                    <p className="text-[10px] font-mono text-gray-500 mb-1">COORDINATES</p>
                                    <p className="text-white font-mono text-sm">35000, Rennes (Mobilité 35)</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-white/5">
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-bold text-white mb-2">Canaux de Transmission</h3>
                                <p className="text-gray-400 text-sm font-mono">
                                    Recherche active d'opportunités en Développement ou DevOps.
                                </p>
                            </div>
                            
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/MathisBruel"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => trackEvent('Social Click', { platform: 'github' })}
                                    className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white hover:text-black transition-all hover:scale-110"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/mathis-bruel"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => trackEvent('Social Click', { platform: 'linkedin' })}
                                    className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 hover:bg-[#0077b5] hover:text-white transition-all hover:scale-110"
                                >
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
