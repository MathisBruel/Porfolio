"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Server, Database, Terminal, PenTool } from "lucide-react";

const skillCategories = [
    {
        title: "Développement & Scripting",
        icon: Code2,
        color: "text-blue-400",
        skills: ["Java", "Python", "C++", "C#", "C", "TypeScript", "JavaScript", "Bash", "PHP"],
    },
    {
        title: "DevOps & Infrastructure",
        icon: Server,
        color: "text-green-400",
        skills: ["Docker", "Linux", "GitHub", "Git", "GitLab", "Nginx", "Apache", "Cloudflare", "OVH", "Raspberry Pi", "PiHole", "Gradle"],
    },
    {
        title: "Bases de Données",
        icon: Database,
        color: "text-red-400",
        skills: ["MariaDB", "MySQL", "MongoDB", "Redis", "SQLite"],
    },
    {
        title: "Web & Frameworks",
        icon: Globe,
        color: "text-purple-400",
        skills: ["Next.js", "React", "Node.js", "NestJS", "Flask", "Laravel", "Jinja", "Bootstrap", "TailwindCSS", "WordPress", "Joomla"],
    },
    {
        title: "Outils & Création",
        icon: PenTool,
        color: "text-yellow-400",
        skills: ["Postman", "Figma", "Canva", "Gimp", "Trello", "Taiga"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-black relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Compétences Techniques</h2>
                    <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full" />
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Une expertise technique large, avec un focus particulier sur le développement backend, l'infrastructure et l'automatisation.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:bg-zinc-800/50 transition-colors group"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`p-3 rounded-lg bg-white/5 ${category.color} group-hover:scale-110 transition-transform`}>
                                    <category.icon size={24} />
                                </div>
                                <h3 className="font-bold text-lg">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/5 rounded-full text-sm text-gray-300 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
