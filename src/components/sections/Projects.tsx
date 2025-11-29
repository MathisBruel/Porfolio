"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Folder, Star } from "lucide-react";

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
        description: "Co-fondateur de la société de services numériques. Développement web, infrastructure et infogérance.",
        tags: ["Entrepreneur", "DevOps", "Fullstack"],
        links: { web: "https://deva2.fr" },
        featured: true,
    },
    {
        title: "CGR Cinémas - Jumeau Numérique",
        category: "Pro",
        description: "Conception d'outils d'administration interne pour la gestion des salles ICE à l'international.",
        tags: ["Java", "Angular", "Interne"],
        links: { web: "https://www.cgrcinemas.fr" },
        featured: true,
    },
    {
        title: "Endorah Directeur développement",
        category: "Associatif",
        description: "Coordination technique et développement de services pour agence de communication.",
        tags: ["SysAdmin", "Docker", "TCPShield", "Java", "Management"],
        links: { web: "https://endorah.net" },
        featured: true,
    },
    {
        title: "Azion AdminTools",
        category: "Perso",
        description: "Suite d'outils d'administration pour serveurs de jeux.",
        tags: ["Java", "Spigot API"],
        links: { github: "https://github.com/MathisBruel/Azion-AdminTools" },
    },
    {
        title: "SpaceCube API",
        category: "Perso",
        description: "API Core pour le réseau de serveurs SpaceCube.",
        tags: ["Java", "Redis", "MongoDB"],
        links: { github: "https://github.com/MathisBruel/SpaceCube-Api" },
        featured: true,
    },

    // --- OTHER PROJECTS (Migrated) ---
    {
        title: "MoonBlockBot",
        category: "Perso",
        description: "Bot Discord multifonction pour la communauté MoonBlock.",
        tags: ["Node.js", "Discord.js"],
        links: { github: "https://github.com/MathisBruel/MoonBlockBot" },
    },
    {
        title: "Azion Bot",
        category: "Perso",
        description: "Bot Discord pour le serveur Azion.",
        tags: ["Java", "Discord API"],
        links: { github: "https://github.com/MathisBruel/Azion-Bot" },
    },
    {
        title: "Azion Launcheur",
        category: "Perso",
        description: "Launcher personnalisé pour le serveur Azion.",
        tags: ["Java", "Electron"],
        links: { github: "https://github.com/MathisBruel/Azion-Launcheur" },
    },
    {
        title: "Marmitonne",
        category: "Ecole",
        description: "Site de recettes de cuisine (Projet étudiant).",
        tags: ["HTML", "CSS", "JS"],
        links: { github: "https://github.com/MathisBruel/Ecole-Marmitonne" },
    },
    {
        title: "Syracus",
        category: "Ecole",
        description: "Visualisation de la conjecture de Syracuse.",
        tags: ["Python", "Matplotlib"],
        links: { github: "https://github.com/MathisBruel/Ecole-Syracus" },
    },
    {
        title: "Alarme Arduino",
        category: "Ecole",
        description: "Système d'alarme connecté avec Arduino.",
        tags: ["C++", "Arduino", "IoT"],
        links: { github: "https://github.com/MathisBruel/Ecole-Alarme-Arduino" },
    },
    {
        title: "TodoList React",
        category: "Ecole",
        description: "Application de gestion de tâches.",
        tags: ["React", "TypeScript"],
        links: { github: "https://github.com/MathisBruel/Ecole-TodoList-React" },
    },
    {
        title: "Build BlockPlaceBreak",
        category: "Associatif",
        description: "Plugin de statistiques de construction pour Endorah.",
        tags: ["Java", "Spigot"],
        links: { github: "https://github.com/MathisBruel/Endorah-Build-BlockPlaceBreak" },
    },
    {
        title: "Register U24",
        category: "Associatif",
        description: "Système d'inscription pour l'événement MineSalt.",
        tags: ["Java", "Spigot"],
        links: { github: "https://github.com/MathisBruel/Endorah-MineSalt-Register" },
    },
    {
        title: "Timer Endorah",
        category: "Associatif",
        description: "Plugin de gestion de temps pour événements.",
        tags: ["Java", "Spigot"],
        links: { github: "https://github.com/MathisBruel/Endorah-Timer" },
    },
    {
        title: "Velocity LoadBalancing",
        category: "Associatif",
        description: "Système d'équilibrage de charge pour proxy Velocity.",
        tags: ["Java", "Velocity"],
        links: { github: "https://github.com/MathisBruel/Endorah-VelocityLoadBalancing" },
    },
    {
        title: "Decathlon GAHE",
        category: "Associatif",
        description: "Mini-jeux pour la Gamers Assembly Halloween Edition.",
        tags: ["Java", "Spigot"],
        links: { github: "https://github.com/MathisBruel/Endorah-GA-Decathlon" },
        featured: true,
    },
    {
        title: "GA Classement Player",
        category: "Associatif",
        description: "Interface web de classement pour la GA.",
        tags: ["Web", "API"],
        links: { github: "https://github.com/MathisBruel/Endorah-GA-Classement-Player" },
    },
    {
        title: "GA Triathlon",
        category: "Associatif",
        description: "Plugin pour le triathlon de la Gamers Assembly.",
        tags: ["Java", "Spigot"],
        links: { github: "https://github.com/MathisBruel/Endorah-GA-Triathlon" },
    },
    {
        title: "PlayerJoin",
        category: "Associatif",
        description: "Gestion des connexions joueurs pour Endorah.",
        tags: ["Java", "Spigot"],
        links: { github: "https://github.com/MathisBruel/Endorah-GA-PlayerJoin" },
    },
    {
        title: "MineBot",
        category: "Associatif",
        description: "Bot Discord pour MineEvent.",
        tags: ["Java", "JDA"],
        links: { github: "https://github.com/MathisBruel/MineEvent-MineBot" },
    },
    {
        title: "PermsManager",
        category: "Associatif",
        description: "Gestionnaire de permissions avancé.",
        tags: ["Java", "Spigot"],
        links: { github: "https://github.com/MathisBruel/MineEvent-PermsManager" },
    },
    {
        title: "StealTheGold",
        category: "Associatif",
        description: "Mode de jeu PvP pour MineEvent.",
        tags: ["Java", "Spigot"],
        links: { github: "https://github.com/MathisBruel/MineEvent-StealTheGold" },
    },
    {
        title: "Bingo",
        category: "Associatif",
        description: "Mode de jeu Bingo pour Minecraft.",
        tags: ["Java", "Spigot"],
        links: { github: "https://github.com/MathisBruel/MineEvent-Bingo" },
    },
    {
        title: "Protect The King",
        category: "Associatif",
        description: "Mode de jeu défense de roi.",
        tags: ["Java", "Spigot"],
        links: { github: "https://github.com/MathisBruel/MineEvent-ProtectTheKing" },
        featured: true,
    },
    {
        title: "SkyDefender",
        category: "Associatif",
        description: "Mode de jeu SkyDefender.",
        tags: ["Java", "Spigot"],
        links: { github: "https://github.com/MathisBruel/MineEvent-SkyDefender" },
    },
    {
        title: "SpaceCube BedWars",
        category: "Perso",
        description: "Implémentation du BedWars pour SpaceCube.",
        tags: ["Java", "Spigot"],
        links: { github: "https://github.com/MathisBruel/SpaceCube-BedWars" },
    },
];

const categories = ["Tous", "Featured", "Pro", "Perso", "Associatif", "Ecole"];

export default function Projects() {
    const [filter, setFilter] = useState("Featured");

    const filteredProjects = projects.filter((project) => {
        if (filter === "Tous") return true;
        if (filter === "Featured") return project.featured;
        return project.category === filter;
    });

    return (
        <section id="projects" className="py-20 bg-zinc-900/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Projets</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
                    <p className="mt-4 text-gray-400">
                        Une collection exhaustive de mes travaux, des projets d'entreprise aux expérimentations personnelles.
                    </p>
                </motion.div>

                {/* Filters */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                                : "bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white"
                                }`}
                        >
                            {cat === "Featured" ? <span className="flex items-center gap-2"><Star size={14} /> À la une</span> : cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.title}
                                className={`bg-zinc-900 border rounded-xl overflow-hidden transition-all group hover:-translate-y-1 hover:shadow-xl ${project.featured ? 'border-blue-500/30 shadow-blue-900/10' : 'border-white/5 hover:border-blue-500/30'}`}
                            >
                                <div className="p-6 h-full flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">
                                                    {project.category}
                                                </span>
                                                {project.featured && <Star size={12} className="text-yellow-400 fill-yellow-400" />}
                                            </div>
                                            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <Folder className="text-zinc-700 group-hover:text-blue-500/50 transition-colors" />
                                    </div>

                                    <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-500 border border-white/5">
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
                                                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                            >
                                                <Github size={16} /> Code
                                            </a>
                                        )}
                                        {project.links.web && (
                                            <a
                                                href={project.links.web}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                            >
                                                <ExternalLink size={16} /> Site web
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
