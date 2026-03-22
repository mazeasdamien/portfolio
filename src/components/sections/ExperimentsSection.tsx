import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Experiment {
    id: string;
    title: string;
    description: string;
    gifUrl: string;
    youtubeUrl?: string;
    linkUrl?: string;
    tags: string[];
    date: string; // ISO format: YYYY-MM-DD
}

const EXPERIMENTS: Experiment[] = [
    {
        id: 'exp-elastic-grid',
        title: 'Elastic Grid',
        description: 'An interactive elastic grid prototype in Unity 3D.',
        gifUrl: '/Prototypes/elastic grid.gif',
        youtubeUrl: 'https://youtu.be/lgKNr5rx5Ds',
        tags: ['Prototype', 'Interaction', 'Unity 3D'],
        date: '2026-03-19'
    },
    {
        id: 'exp-botany',
        title: 'Semantic Space Colonization',
        description: 'Implementing a Semantic Space Colonization Algorithm, simulating plant growth while adhering to semantic masking zones.',
        gifUrl: '/Prototypes/space_colonization_growth.gif',
        tags: ['Procedural Generation', 'Semantic Masking'],
        date: '2026-03-15'
    },
    {
        id: 'exp-elastic-grid-2',
        title: 'Elastic Grid',
        description: 'Interactive elastic grid prototype.',
        gifUrl: '/Prototypes/elastic grid 2.gif',
        tags: ['Prototype', 'Interaction', 'Unity 3D'],
        date: '2026-03-20'
    },
];

const SORTED_EXPERIMENTS = [...EXPERIMENTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

interface ExperimentCardProps {
    exp: Experiment;
    globalIndex: number;
    setSelectedImage: React.Dispatch<React.SetStateAction<string | null>>;
}

const ExperimentCard: React.FC<ExperimentCardProps> = ({ exp, globalIndex, setSelectedImage }) => {
    const [isLoading, setIsLoading] = useState(true);

    const content = (
        <>
            {/* Media Container */}
            <div
                className={`relative w-full overflow-hidden bg-neutral-100 min-h-[200px] ${(!exp.youtubeUrl && !exp.linkUrl) ? 'cursor-pointer' : ''}`}
                onClick={() => {
                    if (!exp.youtubeUrl && !exp.linkUrl) {
                        setSelectedImage(exp.gifUrl);
                    }
                }}
            >
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-neutral-200/50 animate-pulse z-10 transition-opacity duration-300">
                        <div className="w-8 h-8 rounded-full border-4 border-neutral-300 border-t-neutral-500 animate-spin"></div>
                    </div>
                )}
                <img
                    src={exp.gifUrl}
                    alt={exp.title}
                    className={`w-full h-auto object-cover transform transition-all duration-700 group-hover:scale-105 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                    loading="lazy"
                    onLoad={() => setIsLoading(false)}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <div className="flex flex-wrap items-center gap-2 mb-3 z-20">
                        <span className="px-2.5 py-1 bg-blue-600/20 text-blue-100 text-[10px] uppercase tracking-widest font-bold rounded-md border border-blue-400/30">
                            {new Date(exp.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        </span>
                        {exp.tags.map(tag => (
                            <span key={tag} className="px-2.5 py-1 backdrop-blur-md bg-white/10 text-white text-[10px] uppercase tracking-widest font-bold rounded-md border border-white/20">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h3 className="text-white font-bold text-lg leading-tight mb-1 z-20">{exp.title}</h3>
                    <p className="text-neutral-200 text-xs font-medium leading-relaxed line-clamp-3 z-20">
                        {exp.description}
                    </p>
                </div>
            </div>
        </>
    );

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: globalIndex * 0.1 }}
            className="w-full group relative rounded-2xl overflow-hidden bg-white border border-neutral-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
        >
            {(exp.youtubeUrl || exp.linkUrl) ? (
                <a href={exp.youtubeUrl || exp.linkUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                    {content}
                </a>
            ) : (
                content
            )}
        </motion.div>
    );
};

const ExperimentsSection: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [columns, setColumns] = useState(() => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth >= 1024) return 3;
            if (window.innerWidth >= 768) return 2;
        }
        return 1;
    });

    useEffect(() => {
        const updateColumns = () => {
            if (window.innerWidth >= 1024) setColumns(3);
            else if (window.innerWidth >= 768) setColumns(2);
            else setColumns(1);
        };

        window.addEventListener('resize', updateColumns);
        return () => window.removeEventListener('resize', updateColumns);
    }, []);

    const getColumns = () => {
        const cols: Experiment[][] = Array.from({ length: columns }, () => []);
        SORTED_EXPERIMENTS.forEach((exp, i) => {
            cols[i % columns].push(exp);
        });
        return cols;
    };

    return (
        <div className="flex flex-col mt-8 mb-8">
            {/* Header */}
            <div className="flex flex-col mb-16 max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral-900 mb-6 drop-shadow-sm">
                    Prototypes <span className="text-neutral-400 font-light">&</span> Archives
                </h2>
            </div>

            {/* Masonry Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                {getColumns().map((col, colIndex) => (
                    <div key={colIndex} className="flex flex-col gap-6">
                        {col.map((exp) => {
                            const globalIndex = SORTED_EXPERIMENTS.findIndex(e => e.id === exp.id);
                            return (
                                <ExperimentCard 
                                    key={exp.id} 
                                    exp={exp} 
                                    globalIndex={globalIndex} 
                                    setSelectedImage={setSelectedImage} 
                                />
                            );
                        })}
                    </div>
                ))}
            </div>

            {/* Full Screen Image Zoom Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm cursor-pointer"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50 p-2"
                        >
                            <X size={32} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            src={selectedImage}
                            alt="Expanded view"
                            className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ExperimentsSection;
