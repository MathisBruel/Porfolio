"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-black relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Me Contacter</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
                    <p className="mt-4 text-gray-400">
                        Un projet ? Une opportunité ? Discutons-en.
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
                        <h3 className="text-2xl font-bold mb-6">Parlons de votre projet</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Je suis actuellement à la recherche d'une alternance en développement ou DevOps.
                            Disponible également pour des missions freelance via Deva2.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center border border-white/10 text-blue-400">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <a href="mailto:mathis.bruel17700@gmail.com" className="hover:text-blue-400 transition-colors">
                                        mathis.bruel17700@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center border border-white/10 text-purple-400">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Téléphone</p>
                                    <a href="tel:0768363222" className="hover:text-purple-400 transition-colors">
                                        07.68.36.32.22
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center border border-white/10 text-green-400">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Localisation</p>
                                    <p>35135, Chantepie (Mobilité 35)</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-8">
                            <a
                                href="https://github.com/MathisBruel"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-white/10 hover:bg-white hover:text-black transition-all"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mathis-bruel"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-white/10 hover:bg-[#0077b5] hover:text-white transition-all"
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
                        className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5"
                    >
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Nom</label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder="Votre nom"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                                        placeholder="votre@email.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Sujet</label>
                                <input
                                    type="text"
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="Proposition de projet..."
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                    placeholder="Votre message..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                Envoyer <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Footer */}
                <div className="mt-20 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Mathis Bruel. Tous droits réservés.</p>
                    <p className="mt-2">
                        Développé avec <span className="text-white">Next.js</span>, <span className="text-white">TailwindCSS</span> & <span className="text-white">Framer Motion</span>.
                    </p>
                </div>
            </div>
        </section>
    );
}
