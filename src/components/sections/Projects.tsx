"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Folder, Star, Terminal, Box, Globe } from "lucide-react";

type Project = {
    title: string;
    category: string;
    description: string;
    tags: string[];
    links: { web?: string; github?: string };
    featured?: boolean;
};

const projects: Project[] = [
    // --- FEATURED PROJECTS ---
    {
        title: "Deva2",
        category: "Pro",
        description: "Co-fondateur d'une entreprise de services numériques. Développement web, infrastructure et services gérés.",
        tags: ["Entrepreneur", "DevOps", "Fullstack"],
        links: { web: "https://deva2.fr" },
        featured: true,
    },
    {
        title: "CGR Cinémas - Digital Twins",
        category: "Pro",
        description: "Conception d'outils d'administration internes pour la gestion internationale des cinémas ICE.",
        tags: ["Java", "Angular", "Interne"],
        links: { web: "https://www.cgrcinemas.fr" },
        featured: true,
    },
    {
        title: "Endorah Responsable Dev",
        category: "Associatif",
        description: "Coordination technique et développement de services pour divers clients tel que des agences de communication.",
        tags: ["SysAdmin", "Docker", "TCPShield", "Java", "Management"],
        links: { web: "https://endorah.net" },
        featured: true,
    },
    {
        title: "Azion AdminTools",
        category: "Personal",
        description: "Suite d'outils d'administration pour des serveurs de jeux.",
        tags: ["Java", "Spigot API"],
        links: { github: "https://github.com/MathisBruel/Azion-AdminTools" },
    },
    {
        title: "API SpaceCube",
        category: "School",
        description: "API principale pour le réseau de serveurs SpaceCube.",
        tags: ["Java", "Redis", "MongoDB"],
        links: { github: "https://github.com/MathisBruel/SpaceCube-Api" },
        featured: true,
    },
    {
        title: "SpaceCube BedWars",
        category: "School",
        description: "Implémentation de BedWars pour SpaceCube.",
        tags: ["Java", "Spigot"],
        links: { github: "https://github.com/MathisBruel/SpaceCube-BedWars" },
    },
    {
        title: "MoonBlockBot",
        category: "Personal",
        description: "Bot Discord multifonction pour la communauté MoonBlock.",
        tags: ["Node.js", "Discord.js"],
        links: { github: "https://github.com/MathisBruel/MoonBlockBot" },
    },
    {
        title: "Bot Azion",
        category: "Personal",
        description: "Bot Discord pour le serveur Azion.",
        tags: ["Java", "Discord API"],
        links: { github: "https://github.com/MathisBruel/Azion-Bot" },
    },
    {
        title: "Launcheur Azion",
        category: "Personal",
        description: "Launcheur personnalisé pour le serveur Azion.",
        tags: ["Java", "Electron", "JavaFX"],
        links: { github: "https://github.com/MathisBruel/Azion-Launcheur" },
    },
    {
        title: "Marmitonne",
        category: "School",
        description: "Site web de recettes de cuisine (Projet PIA au lycée).",
        tags: ["HTML", "CSS", "JS"],
        links: { github: "https://github.com/MathisBruel/Ecole-Marmitonne" },
    },
    {
        title: "Syracus",
        category: "School",
        description: "Visualisation de la conjecture de Collatz.",
        tags: ["Python", "Matplotlib"],
        links: { github: "https://github.com/MathisBruel/Ecole-Syracus" },
    },
    {
        title: "Alarme Arduino",
        category: "School",
        description: "Système d'alarme connecté en Arduino. Projet d'étude en première année d'études supérieures.",
        tags: ["C++", "Arduino", "IoT"],
        links: { github: "https://github.com/MathisBruel/Ecole-Alarme-Arduino" },
    },
    {
        title: "TodoList React",
        category: "School",
        description: "Application de gestion de tâches.",
        tags: ["React", "TypeScript"],
        links: { github: "https://github.com/MathisBruel/Ecole-TodoList-React" },
    },
    {
        title: "Build BlockPlaceBreak",
        category: "Associative",
        description: "Plugin de statistiques de construction pour Endorah.",
        tags: ["Java", "Spigot"],
        links: { github: "https://github.com/MathisBruel/Endorah-Build-BlockPlaceBreak" },
    },
    {
        title: "Inscription U24",
        category: "Associative",
        description: "Système d'inscription pour l'événement MineSalt.",
        tags: ["Java", "Spigot"],
        links: { github: "https://github.com/MathisBruel/Endorah-MineSalt-Register" },
    },
    {
        title: "Timer Joyca",
        category: "Associative",
        description: "Plugin pour un Timer intégré dans le jeu à la style Hunger Games pour Minecraft HORREUR 2024 de Joyca.",
        tags: ["Java", "Spigot"],
        links: { github: "https://github.com/MathisBruel/Endorah-Timer" },
    },
    {
        title: "Équilibrage de charge Velocity",
        category: "Associative",
        description: "Système d'équilibrage de charge pour le proxy Velocity.",
        tags: ["Java", "Velocity"],
        links: { github: "https://github.com/MathisBruel/Endorah-VelocityLoadBalancing" },
    },
    {
        title: "Decathlon GAHE",
        category: "Associative",
        description: "Mini-jeux pour la Gamers Assembly Halloween Edition.",
        tags: ["Java", "Spigot"],
        links: { github: "https://github.com/MathisBruel/Endorah-GA-Decathlon" },
        featured: true,
    },
    {
        title: "Classement Joueurs GA",
        category: "Associative",
        description: "Interface web de classement pour la Gamers Assembly.",
        tags: ["Web", "API"],
        links: { github: "https://github.com/MathisBruel/Endorah-GA-Classement-Player" },
    },
    {
        title: "Triathlon GA",
        category: "Associative",
        description: "Plugin pour le triathlon Gamers Assembly.",
        tags: ["Java", "Spigot"],
        links: { github: "https://github.com/MathisBruel/Endorah-GA-Triathlon" },
    },
    {
        title: "PlayerJoin",
        category: "Associative",
        description: "Gestion de la connexion des joueurs pour Endorah.",
        tags: ["Java", "Spigot"],
        links: { github: "https://github.com/MathisBruel/Endorah-GA-PlayerJoin" },
    },
    {
        title: "MineBot",
        category: "Personal",
        description: "Bot Discord pour MineEvent.",
        tags: ["Java", "JDA"],
        links: { github: "https://github.com/MathisBruel/MineEvent-MineBot" },
    },
    {
        title: "PermsManager",
        category: "Personal",
        description: "Gestionnaire de permissions avancé.",
        tags: ["Java", "Spigot"],
        links: { github: "https://github.com/MathisBruel/MineEvent-PermsManager" },
    },
    {
        title: "StealTheGold",
        category: "Personal",
        description: "Mode de jeu PvP pour MineEvent.",
        tags: ["Java", "Spigot"],
        links: { github: "https://github.com/MathisBruel/MineEvent-StealTheGold" },
    },
    {
        title: "Bingo",
        category: "Personal",
        description: "Mode de jeu Bingo pour Minecraft.",
        tags: ["Java", "Spigot"],
        links: { github: "https://github.com/MathisBruel/MineEvent-Bingo" },
    },
    {
        title: "ProtectTheKing",
        category: "Personal",
        description: "Mode de jeu de ProtectTheKing pour Minecraft.",
        tags: ["Java", "Spigot"],
        links: { github: "https://github.com/MathisBruel/MineEvent-ProtectTheKing" },
        featured: true,
    },
    {
        title: "SkyDefender",
        category: "Personnel",
        description: "Mode de jeu SkyDefender pour Minecraft.",
        tags: ["Java", "Spigot"],
        links: { github: "https://github.com/MathisBruel/MineEvent-SkyDefender" },
    },
];

const categories = [
    { key: "All", label: "Tous" },
    { key: "Featured", label: "Sélection" },
    { key: "Pro", label: "Pro" },
    { key: "Personal", label: "Perso" },
    { key: "Associative", label: "Associatif" },
    { key: "School", label: "École" }
];

export default function Projects() {
    const [filter, setFilter] = useState("Featured");

    const filteredProjects = projects.filter((project) => {
        if (filter === "All") return true;
        if (filter === "Featured") return project.featured;
        return project.category === filter;
    });

    return (
        <section id="projects" className="py-20 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/15 rounded-full blur-[140px]" />
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
                        <Box size={14} className="text-neon-cyan" />
                        <span className="text-xs font-mono text-neon-cyan">/home/projects</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">DÉPLOIEMENTS</h2>
                    <p className="mt-4 text-gray-400">
                        &gt; Liste des dépôts actifs et builds de production...
                    </p>
                </motion.div>

                {/* Filters */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => setFilter(cat.key)}
                            className={`px-6 py-2 rounded-sm text-sm font-mono transition-all border ${filter === cat.key
                                ? "bg-neon-cyan/10 border-neon-cyan text-neon-cyan shadow-[0_0_10px_rgba(0,243,255,0.2)]"
                                : "bg-transparent border-white/10 text-gray-500 hover:border-white/30 hover:text-white"
                                }`}
                        >
                            {cat.key === "Featured" ? <span className="flex items-center gap-2"><Star size={14} /> {cat.label.toUpperCase()}</span> : cat.label.toUpperCase()}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="min-h-[50vh]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={filter}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {filteredProjects.map((project) => (
                                <div
                                    key={project.title}
                                    className={`glass-panel border rounded-lg overflow-hidden transition-all duration-300 group hover:-translate-y-1 relative ${project.featured ? 'border-neon-purple/30' : 'border-white/5 hover:border-neon-cyan/30'}`}
                                >
                                    {/* Corner Accents */}
                                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/10 group-hover:border-neon-cyan transition-colors" />
                                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/10 group-hover:border-neon-cyan transition-colors" />

                                    <div className="p-6 h-full flex flex-col">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border ${project.featured ? 'border-neon-purple/50 text-neon-purple bg-neon-purple/10' : 'border-white/10 text-gray-500'}`}>
                                                        {project.category}
                                                    </span>
                                                </div>
                                                <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors font-mono">
                                                    {project.title}
                                                </h3>
                                            </div>
                                            <Folder className="text-zinc-700 group-hover:text-neon-cyan/50 transition-colors" />
                                        </div>

                                        <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow border-l border-white/5 pl-3">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="px-2 py-1 bg-black/50 rounded text-[10px] font-mono text-gray-500 border border-white/5">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex gap-4 pt-4 border-t border-white/5 mt-auto">
                                            {project.links.github && (
                                                <a
                                                    href={project.links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors"
                                                >
                                                    <Github size={14} /> CODE
                                                </a>
                                            )}
                                            {project.links.web && (
                                                <a
                                                    href={project.links.web}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors"
                                                >
                                                    <Globe size={14} /> SITE WEB
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section >
    );
}
