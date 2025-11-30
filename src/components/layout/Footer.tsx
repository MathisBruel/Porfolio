"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Terminal, Cpu, Code } from "lucide-react";
import { trackEvent } from "@/utils/plausible";

export default function Footer() {
    const scrollToTop = () => {
        if (window.lenis) {
            window.lenis.scrollTo(0);
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <footer className="bg-black border-t border-white/10 relative overflow-hidden pt-16 pb-8">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Column 1: Identity */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-xl font-bold text-white">
                            <Terminal className="text-neon-cyan" size={24} />
                            <span>MATHIS_BRUEL</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Développeur Fullstack & DevOps passionné par la création d'architectures robustes et d'expériences utilisateur immersives.
                        </p>
                        <div className="flex items-center gap-2 text-xs font-mono text-neon-green bg-neon-green/10 px-3 py-1 rounded-full w-fit border border-neon-green/20">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
                            </span>
                            SYSTEM_ONLINE
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div className="space-y-4">
                        <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                            <Code size={16} className="text-neon-purple" /> NAVIGATION
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-400 font-mono">
                            <li>
                                <button onClick={() => window.lenis?.scrollTo("#hero")} className="hover:text-neon-cyan transition-colors hover:translate-x-1 inline-block">
                                    &gt; ./home
                                </button>
                            </li>
                            <li>
                                <button onClick={() => window.lenis?.scrollTo("#about")} className="hover:text-neon-cyan transition-colors hover:translate-x-1 inline-block">
                                    &gt; ./about
                                </button>
                            </li>
                            <li>
                                <button onClick={() => window.lenis?.scrollTo("#skills")} className="hover:text-neon-cyan transition-colors hover:translate-x-1 inline-block">
                                    &gt; ./skills
                                </button>
                            </li>
                            <li>
                                <button onClick={() => window.lenis?.scrollTo("#projects")} className="hover:text-neon-cyan transition-colors hover:translate-x-1 inline-block">
                                    &gt; ./projects
                                </button>
                            </li>
                            <li>
                                <button onClick={() => window.lenis?.scrollTo("#contact")} className="hover:text-neon-cyan transition-colors hover:translate-x-1 inline-block">
                                    &gt; ./contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Connect */}
                    <div className="space-y-4">
                        <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                            <Cpu size={16} className="text-neon-cyan" /> CONNEXION
                        </h4>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/MathisBruel"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackEvent('Social Click', { platform: 'github' })}
                                className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white hover:text-black transition-all hover:scale-110 group"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mathis-bruel"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackEvent('Social Click', { platform: 'linkedin' })}
                                className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/10 hover:bg-[#0077b5] hover:text-white transition-all hover:scale-110 group"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="mailto:mathis.bruel17700@gmail.com"
                                onClick={() => trackEvent('Social Click', { platform: 'email' })}
                                className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/10 hover:bg-neon-cyan hover:text-black transition-all hover:scale-110 group"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                        <p className="text-xs text-gray-500 mt-4">
                            Basé à Rennes, France.
                            <br />
                            Disponible pour freelance.
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-xs font-mono">
                        © {new Date().getFullYear()} Mathis Bruel. Tous droits réservés.
                    </p>

                    <div className="flex items-center gap-6 text-xs text-gray-600 font-mono">
                        <span>v2.0.0 [STABLE]</span>
                        <button
                            onClick={scrollToTop}
                            className="flex items-center gap-2 text-neon-cyan hover:text-white transition-colors group"
                        >
                            RETOUR_HAUT <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
