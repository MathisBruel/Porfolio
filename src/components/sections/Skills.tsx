"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Server, Database, Terminal, PenTool, Cpu, Gamepad2, Layers } from "lucide-react";

const skillCategories = [
    {
        title: "Langages",
        icon: Code2,
        color: "text-neon-cyan",
        skills: ["Java", "Python", "TypeScript", "JavaScript", "C++", "C#", "PHP", "Bash", "SQL"],
    },
    {
        title: "Web & App",
        icon: Globe,
        color: "text-blue-400",
        skills: ["Next.js", "React", "Node.js", "Electron", "Flask", "Bootstrap"],
    },
    {
        title: "Game Dev & Immersif",
        icon: Gamepad2,
        color: "text-neon-purple",
        skills: ["Godot Engine", "Spigot API", "Paper API", "JavaFX", "DMX"],
    },
    {
        title: "DevOps & Cloud",
        icon: Server,
        color: "text-green-400",
        skills: ["Docker", "Linux", "Git", "GitHub/GitLab", "Apache", "Nginx", "RabbitMQ", "PM2", "Gradle"],
    },
    {
        title: "Data & IoT",
        icon: Database,
        color: "text-yellow-400",
        skills: ["MySQL", "MariaDB", "Redis", "MongoDB", "Arduino", "Raspberry Pi"],
    },
    {
        title: "Design & Outils",
        icon: PenTool,
        color: "text-pink-400",
        skills: ["Figma", "Postman", "Wireshark", "Canva", "Trello", "Taiga", "Jetbrains", "Google workspace"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-neon-cyan/15 rounded-full blur-[140px]" />
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
                        <Cpu size={14} className="text-neon-purple" />
                        <span className="text-xs font-mono text-neon-purple">/usr/bin/skills</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">MODULES TECHNIQUES</h2>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto font-mono text-sm">
                        &gt; Chargement des packages et dépendances installés...
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-all group border border-white/5 hover:border-neon-cyan/30"
                        >
                            <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                                <div className={`p-2 rounded bg-white/5 ${category.color} group-hover:scale-110 transition-transform`}>
                                    <category.icon size={20} />
                                </div>
                                <h3 className="font-bold text-lg text-white font-mono">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-2 py-1 bg-black/50 border border-white/10 rounded text-xs font-mono text-gray-400 hover:text-white hover:border-neon-cyan/50 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
