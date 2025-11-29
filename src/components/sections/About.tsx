"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase, GraduationCap } from "lucide-react";

const experiences = [
    {
        year: "2025",
        title: "Co-Fondateur & Président",
        company: "Deva2",
        description: "Société de services numériques : DevOps, infra Linux, déploiement serveurs.",
        icon: Briefcase,
        color: "text-blue-400",
    },
    {
        year: "2025",
        title: "Développeur",
        company: "CGR Cinémas",
        description: "Conception d'outils d'administration pour les salles ICE à l'international.",
        icon: Briefcase,
        color: "text-purple-400",
    },
    {
        year: "2024 - 2029",
        title: "Master Informatique",
        company: "Ecole Sup De Vinci Rennes",
        description: "Formation d'expert en développement et architecture logicielle.",
        icon: GraduationCap,
        color: "text-green-400",
    },
    {
        year: "Depuis 2024",
        title: "Directeur Développement",
        company: "Endorah",
        description: "Coordination technique et développement de services pour agence de communication.",
        icon: Briefcase,
        color: "text-yellow-400",
    },
];

export default function About() {
    return (
        <section id="about" className="py-20 bg-zinc-900/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Mon Parcours</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        De l'étudiant passionné à l'entrepreneur, voici les étapes clés qui ont façonné mon expertise.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0 mb-12 last:mb-0 group"
                        >
                            {/* Timeline Line */}
                            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 -ml-px md:mx-auto hidden md:block" />

                            <div className={`md:flex items-center justify-between ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                                {/* Empty space for timeline alignment */}
                                <div className="hidden md:block w-5/12" />

                                {/* Center Icon */}
                                <div className="absolute left-0 md:left-1/2 w-8 h-8 -ml-4 rounded-full bg-zinc-900 border-2 border-blue-500/30 flex items-center justify-center z-10 group-hover:border-blue-500 transition-colors">
                                    <exp.icon size={14} className={exp.color} />
                                </div>

                                {/* Content Card */}
                                <div className="md:w-5/12 bg-zinc-900/80 border border-white/5 p-6 rounded-xl hover:bg-zinc-800/80 transition-colors">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className={`text-sm font-mono ${exp.color}`}>{exp.year}</span>
                                        <span className="text-gray-600 text-xs">•</span>
                                        <span className="text-gray-400 text-sm">{exp.company}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
