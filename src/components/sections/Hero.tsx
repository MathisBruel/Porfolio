"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black z-0" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center md:text-left"
                >
                    <div className="inline-block px-3 py-1 mb-4 border border-blue-500/30 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium">
                        Disponible pour alternance
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Mathis <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Bruel</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
                        Développeur & DevOps <br className="hidden md:block" />
                        <span className="font-semibold text-white">Entrepreneur</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Co-fondateur de <span className="text-blue-400 font-semibold">Deva2</span>.
                        Je conçois des architectures scalables et des solutions d'infrastructure performantes.
                        Passionné par le DevOps, le SysAdmin et l'innovation.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link
                            href="#projects"
                            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all flex items-center justify-center gap-2 group"
                        >
                            Voir mes projets
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-3 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white rounded-full font-medium transition-all"
                        >
                            Me contacter
                        </Link>
                    </div>

                    <div className="mt-12 flex items-center justify-center md:justify-start gap-6 text-gray-400">
                        <a href="https://github.com/MathisBruel" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/mathis-bruel" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:mathis.bruel17700@gmail.com" className="hover:text-white transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        {/* Glow effect behind image */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse" />

                        {/* Image Container with border */}
                        <div className="relative w-full h-full rounded-full border-4 border-white/10 overflow-hidden shadow-2xl">
                            <Image
                                src="/profile-v2.jpg"
                                alt="Mathis Bruel"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Floating Badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-sm font-medium text-white">Deva2 Founder</span>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-4 -left-4 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl"
                        >
                            <div className="text-sm font-medium text-white">
                                <span className="text-blue-400 font-bold">5+</span> Années d'XP
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
