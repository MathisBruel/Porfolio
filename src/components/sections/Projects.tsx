"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Folder, Star, Terminal, Box, Globe } from "lucide-react";
import { trackEvent } from "@/utils/plausible";

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
        description: "Président & Co-fondateur. Pilotage de la stratégie d'entreprise et gestion de projets clients. Conception d'architectures web et logicielles sur mesure, supervision administrative et juridique. Garant de la qualité technique et de l'innovation.",
        tags: ["Entrepreneur", "Management", "Fullstack", "DevOps"],
        links: { web: "https://deva2.fr" },
        featured: true,
    },
    {
        title: "CGR Cinémas - Digital Twin",
        category: "Pro",
        description: "Développement d'un jumeau numérique des salles ICE sous Godot Engine. Simulation temps réel de l'éclairage via protocole DMX (DataEnabler) et virtualisation de chaque panneau lumineux via Docker pour une gestion granulaire de l'environnement.",
        tags: ["Godot", "Docker", "DMX", "Digital Twin"],
        links: { web: "https://www.cgrcinemas.fr" },
        featured: true,
    },
    {
        title: "CGR Cinémas - Data Warehouse",
        category: "Pro",
        description: "Architecture d'un Data Warehouse pour la centralisation des contenus des salles ICE à l'international. Gestion unifiée des assets médias et supervision des inventaires par salle pour garantir la conformité et la disponibilité des contenus à l'échelle mondiale.",
        tags: ["Data Warehouse", "Architecture", "RabbitMQ", "International"],
        links: { web: "https://www.cgrcinemas.fr" },
        featured: true,
    },
    {
        title: "Endorah - Lead Dev",
        category: "Associative",
        description: "Responsable du pôle développement. Management d'une équipe pour la création d'expériences Minecraft immersives (Agences de com, Influenceurs, ...). Architecture de plugins complexes et gestion d'infrastructure serveur.",
        tags: ["Team Lead", "Java", "Infrastructure", "Event"],
        links: { web: "https://endorah.net" },
        featured: true,
    },
    {
        title: "MineSalt (United24)",
        category: "Associative",
        description: "Développement du système d'inscription et de validation pour l'événement caritatif MineSalt (United24). Gestion sécurisée des données participants et intégration avec l'API Paper/Spigot.",
        tags: ["Java", "Security", "Spigot API"],
        links: { github: "https://github.com/MathisBruel/Endorah-MineSalt-Register" },
        featured: true,
    },
    {
        title: "Velocity LoadBalancing",
        category: "Associative",
        description: "Solution d'infrastructure pour la répartition de charge sur les proxys Velocity. Algorithmes de load balancing (Round-Robin, Least-Conn) et failover automatique pour haute disponibilité.",
        tags: ["Java", "Velocity", "Networking", "High Availability"],
        links: { github: "https://github.com/MathisBruel/Endorah-VelocityLoadBalancing" },
    },
    {
        title: "SkyDefender",
        category: "Personal",
        description: "Mode de jeu compétitif complexe (Attaque/Défense verticale). Gestion d'états de jeu, téléportations asynchrones et mécaniques de capture de zone. Architecture événementielle robuste.",
        tags: ["Java", "Game Design", "Spigot API"],
        links: { github: "https://github.com/MathisBruel/MineEvent-SkyDefender" },
        featured: false,
    },
    {
        title: "PermsManager",
        category: "Personal",
        description: "Système de gestion de permissions granulaire pour l'administration d'événements. Contrôle dynamique des interactions (Crafts, Items, Enchantements) via injection de paquets et listeners.",
        tags: ["Java", "Security", "Packet Injection"],
        links: { github: "https://github.com/MathisBruel/MineEvent-PermsManager" },
    },
    {
        title: "SpaceCube API",
        category: "School",
        description: "Bibliothèque centrale de gestion de données pour SpaceCube. Gestion unifiée des statistiques joueurs par mode de jeu, abstraction de la couche de persistance et orchestration des connexions bases de données (SQL).",
        tags: ["Java", "Data Management", "SQL"],
        links: { github: "https://github.com/MathisBruel/SpaceCube-Api" },
    },
    {
        title: "SpaceCube BedWars",
        category: "School",
        description: "Réimplémentation fidèle du mode BedWars. Gestion complexe des états de jeu, IA de marchands PNJ et système de générateurs de ressources synchronisés.",
        tags: ["Java", "Game Logic", "AI", "Spigot"],
        links: { github: "https://github.com/MathisBruel/SpaceCube-BedWars" },
    },
    {
        title: "MoonBlockBot",
        category: "Personal",
        description: "Bot Discord d'administration communautaire. Système de tickets avec génération de transcripts HTML, automodération et commandes utilitaires pour le staff.",
        tags: ["Node.js", "Discord.js", "Automation"],
        links: { github: "https://github.com/MathisBruel/MoonBlockBot" },
    },
    {
        title: "Bot Azion",
        category: "Personal",
        description: "Bot officiel du serveur Azion. Système musical avancé (Queue, Lyrics), gestion des sondages, giveaways et modération automatisée.",
        tags: ["Node.js", "Discord.js", "Music Bot"],
        links: { github: "https://github.com/MathisBruel/Azion-Bot" },
    },
    {
        title: "Azion AdminTools",
        category: "Personal",
        description: "Plugin 'Couteau Suisse' pour l'administration serveur. Centralise la modération (Vanish, Freeze, Report), la gestion du chat et les outils de maintenance.",
        tags: ["Java", "Spigot API", "Administration"],
        links: { github: "https://github.com/MathisBruel/Azion-AdminTools" },
    },
    {
        title: "Azion Launcher",
        category: "Personal",
        description: "Lanceur de jeu personnalisé en JavaFX. Gestion des mises à jour différentielles, authentification Microsoft et installation automatique des mods.",
        tags: ["JavaFX", "Electron", "Auto-update"],
        links: { github: "https://github.com/MathisBruel/Azion-Launcheur" },
    },
    {
        title: "Marmitonne",
        category: "School",
        description: "Premier projet web scolaire (PIA). Site de partage de recettes de cuisine avec catalogue et fiches détaillées. Full HTML/CSS/JS sans framework.",
        tags: ["HTML", "CSS", "JS", "First Project"],
        links: { github: "https://github.com/MathisBruel/Ecole-Marmitonne" },
    },
    {
        title: "Syracus Viz",
        category: "School",
        description: "Outil de visualisation de la conjecture de Syracuse. Interface PyQt5 et graphiques interactifs Plotly pour l'analyse des temps de vol et altitudes.",
        tags: ["Python", "PyQt5", "Plotly", "Maths"],
        links: { github: "https://github.com/MathisBruel/Ecole-Syracus" },
    },
    {
        title: "Alarme IoT",
        category: "School",
        description: "Système d'alarme connecté sur Arduino Mega. Interface tactile, communication Série/Python et contrôle distant via Bot Telegram.",
        tags: ["C++", "Arduino", "Python", "IoT"],
        links: { github: "https://github.com/MathisBruel/Ecole-Alarme-Arduino" },
    },
    {
        title: "TodoList React",
        category: "School",
        description: "Application de gestion de tâches pour l'apprentissage de React. CRUD complet, filtrage dynamique et persistance via LocalStorage.",
        tags: ["React", "TypeScript", "State Mgmt"],
        links: { github: "https://github.com/MathisBruel/Ecole-TodoList-React" },
    },
    {
        title: "Build BlockPlaceBreak",
        category: "Associative",
        description: "Outil analytique pour Endorah. Tracking temps réel des blocs posés/cassés par joueur pour générer des KPI de productivité des builders.",
        tags: ["Java", "Spigot", "Analytics", "KPI"],
        links: { github: "https://github.com/MathisBruel/Endorah-Build-BlockPlaceBreak" },
    },
    {
        title: "Timer Joyca",
        category: "Associative",
        description: "Plugin Timer style Hunger Games développé pour l'événement 'Minecraft HORREUR 2024' du Youtuber Joyca.",
        tags: ["Java", "Spigot", "Event"],
        links: { github: "https://github.com/MathisBruel/Endorah-Timer" },
    },
    {
        title: "Decathlon GAHE",
        category: "Associative",
        description: "Développement de mini-jeux exclusifs pour la Gamers Assembly Halloween Edition. Optimisation pour forte charge. Avec API afin d'intégrer les classements dans un site web.",
        tags: ["Java", "Event", "Optimization", "API"],
        links: { github: "https://github.com/MathisBruel/Endorah-GA-Decathlon" },
    },
    {
        title: "Classement Joueurs GA",
        category: "Associative",
        description: "Interface web de classement en temps réel pour la Gamers Assembly (Decathlon GAHE). API REST et Frontend réactif.",
        tags: ["Web", "API", "Real-time"],
        links: { github: "https://github.com/MathisBruel/Endorah-GA-Classement-Player" },
    },
    {
        title: "Triathlon GA",
        category: "Associative",
        description: "Plugin central pour la gestion du Triathlon Gamers Assembly. Orchestration des épreuves et comptage des points. Gestion des classements.",
        tags: ["Java", "Spigot", "Event Logic", "Analytics"],
        links: { github: "https://github.com/MathisBruel/Endorah-GA-Triathlon" },
    },
    {
        title: "PlayerJoin",
        category: "Associative",
        description: "Système de gestion de flux pour LAN (Gamers Assembly). Matchmaking manuel, dispatch dynamique vers les serveurs de jeu et rotation des joueurs.",
        tags: ["Java", "Spigot", "Networking", "LAN"],
        links: { github: "https://github.com/MathisBruel/Endorah-GA-PlayerJoin" },
    },
    {
        title: "MineBot",
        category: "Personal",
        description: "Bot Discord d'organisation pour MineEvent. Automatisation des inscriptions, synchronisation des rangs et génération de cartes de profil.",
        tags: ["Java", "JDA", "Integration"],
        links: { github: "https://github.com/MathisBruel/MineEvent-MineBot" },
    },
    {
        title: "StealTheGold",
        category: "Personal",
        description: "Mode de jeu PvP stratégique. Infiltration de base, vol de trésor et capture de drapeau avec gestion de kits et d'économie.",
        tags: ["Java", "Spigot", "PvP", "Game Design"],
        links: { github: "https://github.com/MathisBruel/MineEvent-StealTheGold" },
    },
    {
        title: "Bingo",
        category: "Personal",
        description: "Adaptation du Bingo dans Minecraft. Génération procédurale de grilles d'objectifs et détection automatique des achievements/items.",
        tags: ["Java", "Spigot", "Procedural", "Mini-game"],
        links: { github: "https://github.com/MathisBruel/MineEvent-Bingo" },
    },
    {
        title: "ProtectTheKing",
        category: "Personal",
        description: "Mode de jeu PvP 'Protect The King'. Mécaniques de classes, rôles VIP (Roi) et gestion d'équipe pour la survie.",
        tags: ["Java", "Spigot", "Teamplay", "PvP"],
        links: { github: "https://github.com/MathisBruel/MineEvent-ProtectTheKing" },
        featured: true,
    }
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
        <section id="projects" className="py-20 bg-gradient-to-b from-background via-background-alt to-background relative overflow-hidden">
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
                            onClick={() => {
                                setFilter(cat.key);
                                trackEvent('Project Category Click', { category: cat.key });
                            }}
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

                                        <p className="text-gray-400 text-sm mb-6 flex-grow border-l border-white/5 pl-3">
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
                                                    onClick={() => trackEvent('Project Github Click', { project: project.title })}
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
                                                    onClick={() => trackEvent('Project Website Click', { project: project.title })}
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
