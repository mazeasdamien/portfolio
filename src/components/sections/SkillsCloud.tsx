import React from 'react';
import { motion } from 'framer-motion';
import {
    MousePointer2,
    Zap,
    MessageSquare,
    Code2,
    Cpu,
    Share2,
    Layers,
    Box,
    Bot,
    BrainCircuit,
    ShieldCheck,
    Eye,
    Network
} from 'lucide-react';

const SKILLS = [
    { name: 'Embodied AI', icon: BrainCircuit, color: 'text-indigo-600' },
    { name: 'Human-Robot Interaction', icon: Share2, color: 'text-blue-600' },
    { name: 'Vision-Language-Action (VLA)', icon: Zap, color: 'text-sky-500' },
    { name: 'Semantic-to-Motion', icon: MessageSquare, color: 'text-indigo-500' },
    { name: 'Telexistence', icon: Eye, color: 'text-sky-600' },
    { name: 'Digital Twins', icon: Layers, color: 'text-blue-500' },
    { name: 'Spatial Computing', icon: Box, color: 'text-indigo-400' },
    { name: 'ROS / DDS', icon: Cpu, color: 'text-slate-600' },
    { name: 'Cognitive Safety', icon: ShieldCheck, color: 'text-indigo-700' },
    { name: 'Human-in-the-Loop', icon: MousePointer2, color: 'text-blue-700' },
    { name: 'PyTorch & TensorFlow', icon: Network, color: 'text-sky-700' },
    { name: 'Unity 3D / C#', icon: Code2, color: 'text-blue-400' },
];

export const SkillsCloud: React.FC = () => {
    return (
        <div className="w-full mb-2 py-2" style={{ perspective: '1200px' }}>
            <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto px-4">
                {SKILLS.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.4,
                            delay: index * 0.02,
                        }}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2, ease: "easeOut" }
                        }}
                        className={`
                            group px-5 py-2.5 rounded-full cursor-default
                            bg-white border border-neutral-200
                            flex items-center gap-2.5
                            text-[11px] md:text-[12px] font-bold tracking-wide text-neutral-700
                            shadow-sm
                            hover:shadow-md hover:border-blue-700/50
                            transition-all duration-300
                            relative overflow-hidden
                        `}
                    >
                        <skill.icon size={14} className={`${skill.color} opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`} />

                        <span className="tracking-tight text-neutral-600 group-hover:text-neutral-900 transition-colors">
                            {skill.name}
                        </span>

                    </motion.div>
                ))}
            </div>
        </div>
    );
};
