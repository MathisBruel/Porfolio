"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Terminal, Cpu, Shield, Activity, Wifi } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const GlitchText = ({ text }: { text: string }) => {
    return (
        <span className="relative inline-block group">
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-neon-cyan opacity-0 group-hover:opacity-100 animate-glitch">
                {text}
            </span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-neon-purple opacity-0 group-hover:opacity-100 animate-glitch [animation-delay:0.1s]">
                {text}
            </span>
        </span>
    );
};

const Typewriter = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            let i = 0;
            const interval = setInterval(() => {
                setDisplayedText(text.substring(0, i + 1));
                i++;
                if (i > text.length) clearInterval(interval);
            }, 50);
            return () => clearInterval(interval);
        }, delay);
        return () => clearTimeout(timeout);
    }, [text, delay]);

    return <span>{displayedText}<span className="animate-blink">_</span></span>;
};

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-x-hidden bg-background pt-20 pb-20">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

            {/* Colorful gradient orbs */}
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-neon-cyan/15 rounded-full blur-[140px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Command Center Interface */}
                    <div className="space-y-8">
                        {/* System Status */}
                        <motion.div
                            className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-500"
                        >
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span>SYSTÈME EN LIGNE</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Wifi size={14} className="text-neon-cyan" />
                                <span>LATENCE: 12ms</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Activity size={14} className="text-neon-purple" />
                                <span>CPU: OPTIMAL</span>
                            </div>
                        </motion.div>

                        <div className="space-y-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h2 className="text-neon-purple font-mono text-sm tracking-widest mb-2 flex items-center gap-3">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-purple opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-purple"></span>
                                    </span>
                                    <Typewriter text="> STATUS: RECHERCHE D'ALTERNANCE (DEV/DEVOPS)" />
                                </h2>
                                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-2">
                                    MATHIS <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple text-glow">
                                        BRUEL
                                    </span>
                                </h1>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-xl md:text-2xl text-gray-400 font-light max-w-lg border-l-2 border-neon-purple/50 pl-6"
                            >
                                <p>
                                    Concevoir des systèmes <GlitchText text="robustes" /> & <br />
                                    développer des solutions <GlitchText text="innovantes" />.
                                </p>
                            </motion.div>
                        </div>

                        {/* Tech Modules */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="grid grid-cols-2 md:grid-cols-3 gap-4"
                        >
                            {[
                                { icon: Terminal, label: "DevOps", color: "text-neon-cyan" },
                                { icon: Cpu, label: "Fullstack", color: "text-neon-purple" },
                                { icon: Shield, label: "Système sécurisé", color: "text-neon-green" },
                            ].map((item, index) => (
                                <div key={index} className="glass-panel p-4 rounded-lg flex items-center gap-3 hover:bg-white/5 transition-colors group cursor-default">
                                    <item.icon className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform`} />
                                    <span className="text-sm font-mono text-gray-300">{item.label}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <button
                                onClick={() => window.lenis?.scrollTo("#projects")}
                                className="px-8 py-3 bg-neon-cyan/10 border border-neon-cyan/50 text-neon-cyan font-mono rounded-sm hover:bg-neon-cyan/20 hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all cursor-pointer"
                            >
                                ./VOIR_PROJETS
                            </button>
                            <div className="flex items-center gap-4 px-6">
                                <Link href="https://github.com/MathisBruel" target="_blank" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                                    <Github size={24} />
                                </Link>
                                <Link href="https://linkedin.com/in/mathis-bruel" target="_blank" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                                    <Linkedin size={24} />
                                </Link>
                                <Link href="mailto:contact@mathisbruel.com" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                                    <Mail size={24} />
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Holographic Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="relative flex justify-center lg:justify-end mt-16 lg:mt-0"
                    >
                        <div className="relative w-48 h-48 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px]">
                            {/* Rotating Rings */}
                            <div className="absolute inset-0 border border-neon-cyan/20 rounded-full animate-spin-slow" />
                            <div className="absolute inset-4 border border-neon-purple/20 rounded-full animate-spin-reverse-slow" />
                            <div className="absolute inset-0 border-t border-neon-cyan/50 rounded-full animate-spin-slow opacity-50" />

                            {/* Main Image Container */}
                            <div className="absolute inset-10 bg-black rounded-full overflow-hidden border-2 border-white/10 relative group">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/profile-final.png"
                                    alt="Mathis Bruel"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />

                                {/* Scanline Effect */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/20 to-transparent h-[10%] w-full animate-scanline opacity-50 pointer-events-none" />

                                {/* Glitch Overlay */}
                                <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />
                            </div>

                            {/* Floating Data Points */}
                            <div className="absolute -top-4 -right-4 md:top-0 md:right-10 glass-panel p-2 rounded text-[10px] md:text-xs font-mono text-neon-cyan animate-float">
                                CIBLE: VERROUILLÉE
                            </div>
                            <div className="absolute -bottom-4 -left-4 md:bottom-10 md:left-0 glass-panel p-2 rounded text-[10px] md:text-xs font-mono text-neon-purple animate-float-delayed">
                                MODE: SÉCURISÉ
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
