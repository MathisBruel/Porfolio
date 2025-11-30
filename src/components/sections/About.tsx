"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase, GraduationCap, Terminal } from "lucide-react";

const experiences = [
    {
        year: "2024 - 2029",
        title: "Master en Informatique",
        company: "Ecole Sup De Vinci Rennes",
        description: "Formation d'expert en développement et architecture logicielle.",
        icon: GraduationCap,
        color: "text-neon-green",
    },
    {
        year: "Été 2025",
        title: "Développeur",
        company: "CGR Cinémas",
        description: "Conception d'outils d'administration pour les salles de cinéma ICE à l'international.",
        icon: Briefcase,
        color: "text-neon-purple",
    },
    {
        year: "Depuis 2024",
        title: "Responsable développement",
        company: "Endorah",
        description: "Coordination technique et développement de projets de clients autour de Minecraft.",
        icon: Briefcase,
        color: "text-yellow-400",
    },
    {
        year: "Depuis 2025",
        title: "Co-fondateur",
        company: "Deva2",
        description: "Société de services numériques : DevOps, infrastructure Linux, déploiement de serveurs.",
        icon: Briefcase,
        color: "text-neon-cyan",
    },
];

export default function About() {
    return (
        <section id="about" className="py-20 bg-gradient-to-b from-background via-background-alt to-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/15 rounded-full blur-[140px]" />
            {/* Background Elements */}
            <div className="absolute left-0 top-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
                        <Terminal size={14} className="text-neon-cyan" />
                        <span className="text-xs font-mono text-neon-cyan">/var/log/history</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">JOURNAL D'EXÉCUTION</h2>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto font-mono text-sm">
                        &gt; Traçage du parcours d'étudiant à entrepreneur...
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative border-l-2 border-white/20 ml-4 md:ml-0 space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative pl-8 md:pl-12 group"
                            >
                                {/* Connector */}
                                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-background border border-white/20 rounded-full group-hover:border-neon-cyan group-hover:bg-neon-cyan transition-colors shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10" />

                                <div className="glass-panel p-6 rounded-lg border border-white/5 hover:border-neon-cyan/30 transition-colors relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(0,243,255,0.05)]">
                                    {/* Hover Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 relative z-10">
                                        <div className="flex items-center gap-3">
                                            <div className={`p-2 rounded bg-white/5 ${exp.color}`}>
                                                <exp.icon size={18} />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors">{exp.title}</h3>
                                                <div className="text-sm text-gray-400 font-mono">{exp.company}</div>
                                            </div>
                                        </div>
                                        <div className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                                            [{exp.year}]
                                        </div>
                                    </div>

                                    <p className="text-gray-400 text-sm leading-relaxed relative z-10 border-l-2 border-white/5 pl-4">
                                        {exp.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
