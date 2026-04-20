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
        id: 'yt-Z_F308DV2rU',
        title: 'Semantic-to-Motion Digital Twin Framework',
        description: 'A hierarchical framework translating natural language prompts into expressive robotic trajectories using Vision-Language Models.',
        gifUrl: 'https://i.ytimg.com/vi/Z_F308DV2rU/hqdefault.jpg',
        youtubeUrl: 'https://youtu.be/Z_F308DV2rU',
        tags: ['Digital Twin', 'Robotics', 'AI', 'LLM'],
        date: '2026-04-01'
    },
    {
        id: 'yt-KQpWBGlAK90',
        title: 'Physics Simulation Unity 3D',
        description: 'An elastic grid simulation built in Unity 3D exploring real-time physics interactions.',
        gifUrl: '/Prototypes/elastic grid 2.gif',
        youtubeUrl: 'https://youtu.be/KQpWBGlAK90',
        tags: ['Unity 3D', 'Physics', 'Simulation'],
        date: '2026-03-20'
    },
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
        id: 'yt-aGiFJXDC3IA',
        title: 'Quest 3 Mixed Reality: Dual Niryo Robot Control',
        description: 'Remotely controlling two Niryo Ned robotic arms simultaneously using the Meta Quest 3 in Mixed Reality.',
        gifUrl: 'https://i.ytimg.com/vi/aGiFJXDC3IA/hqdefault.jpg',
        youtubeUrl: 'https://youtu.be/aGiFJXDC3IA',
        tags: ['Mixed Reality', 'Robotics', 'Quest 3', 'Teleoperation'],
        date: '2026-03-03'
    },
    {
        id: 'yt-h7QRFDIivqA',
        title: 'Universal Robots in Unity: IK Setup',
        description: 'Setting up Inverse Kinematics for Universal Robots UR8/UR15 in Unity 3D with a live WebGL demo.',
        gifUrl: 'https://i.ytimg.com/vi/h7QRFDIivqA/hqdefault.jpg',
        youtubeUrl: 'https://youtu.be/h7QRFDIivqA',
        tags: ['Unity 3D', 'Robotics', 'Inverse Kinematics', 'WebGL'],
        date: '2025-10-10'
    },
    {
        id: 'yt-FDd-eLMpXmE',
        title: 'Blender: Unparent Without Moving',
        description: 'Quick Blender tip — how to unparent objects the right way while keeping their world transformation.',
        gifUrl: 'https://i.ytimg.com/vi/FDd-eLMpXmE/hqdefault.jpg',
        youtubeUrl: 'https://youtu.be/FDd-eLMpXmE',
        tags: ['Blender', 'Tutorial', '3D'],
        date: '2025-10-10'
    },
    {
        id: 'yt-Yl22YEUcAQw',
        title: 'Fix Unity 6 Scene Lag & Stuttering',
        description: 'A fix for poor performance, lag, and stuttering in Unity 6 projects using the DirectX 12 graphics API.',
        gifUrl: 'https://i.ytimg.com/vi/Yl22YEUcAQw/hqdefault.jpg',
        youtubeUrl: 'https://youtu.be/Yl22YEUcAQw',
        tags: ['Unity 3D', 'Tutorial', 'Performance'],
        date: '2025-09-30'
    },
    {
        id: 'yt-SFfLPbs9-ws',
        title: 'FANUC Pick and Place',
        description: 'Demonstration of a FANUC industrial robot performing a pick and place task.',
        gifUrl: 'https://i.ytimg.com/vi/SFfLPbs9-ws/hqdefault.jpg',
        youtubeUrl: 'https://youtu.be/SFfLPbs9-ws',
        tags: ['Robotics', 'FANUC', 'Industrial'],
        date: '2025-09-05'
    },
    {
        id: 'yt-3zTs_7LXH3Y',
        title: 'FANUC Roboguide to Unity',
        description: 'Bridging FANUC Roboguide simulations with Unity 3D for a real-time digital twin.',
        gifUrl: 'https://i.ytimg.com/vi/3zTs_7LXH3Y/hqdefault.jpg',
        youtubeUrl: 'https://youtu.be/3zTs_7LXH3Y',
        tags: ['Unity 3D', 'FANUC', 'Digital Twin'],
        date: '2025-08-11'
    },
    {
        id: 'yt-m4l9wxIvU98',
        title: 'HoloLens 2 + ROS: AR Robot Control',
        description: 'Controlling a Turtlebot with HoloLens 2 augmented reality and ROS integration.',
        gifUrl: 'https://i.ytimg.com/vi/m4l9wxIvU98/hqdefault.jpg',
        youtubeUrl: 'https://youtu.be/m4l9wxIvU98',
        tags: ['AR', 'HoloLens', 'ROS', 'Robotics'],
        date: '2025-08-11'
    },
    {
        id: 'yt-8DLa6tv0GCw',
        title: 'VR Control of a Real FANUC Robot',
        description: 'Controlling a physical FANUC industrial robot through a Virtual Reality digital twin interface.',
        gifUrl: 'https://i.ytimg.com/vi/8DLa6tv0GCw/hqdefault.jpg',
        youtubeUrl: 'https://youtu.be/8DLa6tv0GCw',
        tags: ['VR', 'Digital Twin', 'FANUC', 'Teleoperation'],
        date: '2025-08-11'
    },
    {
        id: 'yt-_0pQWwQOZT0',
        title: 'Hybrid Simulation: Universal Robot in VR',
        description: 'Hybrid physical-virtual simulation of a Universal Robot arm controlled through Virtual Reality.',
        gifUrl: 'https://i.ytimg.com/vi/_0pQWwQOZT0/hqdefault.jpg',
        youtubeUrl: 'https://youtu.be/_0pQWwQOZT0',
        tags: ['VR', 'Robotics', 'Simulation', 'Digital Twin'],
        date: '2025-08-11'
    },
    {
        id: 'yt-pjlTcweo_lg',
        title: 'Remote Robotics Collaboration in VR',
        description: 'The future of work — demonstrating remote expert collaboration for industrial robotics through immersive VR.',
        gifUrl: 'https://i.ytimg.com/vi/pjlTcweo_lg/hqdefault.jpg',
        youtubeUrl: 'https://youtu.be/pjlTcweo_lg',
        tags: ['VR', 'Teleoperation', 'Remote Work', 'HCI'],
        date: '2025-08-11'
    },
    {
        id: 'yt-rr5yVkSXkZw',
        title: 'Controlling a Universal Robot from VR',
        description: 'Real-time teleoperation of a Universal Robots arm using a Virtual Reality interface built in Unity.',
        gifUrl: 'https://i.ytimg.com/vi/rr5yVkSXkZw/hqdefault.jpg',
        youtubeUrl: 'https://youtu.be/rr5yVkSXkZw',
        tags: ['VR', 'Robotics', 'Unity 3D', 'Teleoperation'],
        date: '2025-08-11'
    },
    {
        id: 'yt-9upypT6OWwk',
        title: 'Inverse Kinematics: Universal Robot in Unity',
        description: 'Implementing Inverse Kinematics for a Universal Robot arm directly inside Unity 3D.',
        gifUrl: 'https://i.ytimg.com/vi/9upypT6OWwk/hqdefault.jpg',
        youtubeUrl: 'https://youtu.be/9upypT6OWwk',
        tags: ['Unity 3D', 'Robotics', 'Inverse Kinematics'],
        date: '2022-11-05'
    },
    {
        id: 'yt-ZlUxXn57M8Y',
        title: 'Program Industrial Robots in Unity',
        description: 'C# and Inverse Kinematics demo for programming and simulating industrial robots inside Unity 3D.',
        gifUrl: 'https://i.ytimg.com/vi/ZlUxXn57M8Y/hqdefault.jpg',
        youtubeUrl: 'https://youtu.be/ZlUxXn57M8Y',
        tags: ['Unity 3D', 'Robotics', 'C#', 'Inverse Kinematics'],
        date: '2022-02-02'
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
    const [isHovered, setIsHovered] = useState(false);

    // Extract YouTube video ID from youtubeUrl
    const getYoutubeId = (url?: string): string | null => {
        if (!url) return null;
        const match = url.match(/youtu\.be\/([^?&]+)/) || url.match(/v=([^?&]+)/);
        return match ? match[1] : null;
    };
    const youtubeId = getYoutubeId(exp.youtubeUrl);

    const mediaSection = (
        <div
            className={`relative w-full overflow-hidden bg-neutral-100 min-h-[200px] ${(!exp.youtubeUrl && !exp.linkUrl) ? 'cursor-pointer' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => {
                if (!exp.youtubeUrl && !exp.linkUrl) {
                    setSelectedImage(exp.gifUrl);
                }
            }}
        >
            {/* Spinner while thumbnail loads */}
            {isLoading && !isHovered && (
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-200/50 animate-pulse z-10">
                    <div className="w-8 h-8 rounded-full border-4 border-neutral-300 border-t-neutral-500 animate-spin"></div>
                </div>
            )}

            {/* Static thumbnail */}
            <img
                src={exp.gifUrl}
                alt={exp.title}
                className={`w-full h-auto object-cover transform transition-all duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} ${isHovered && youtubeId ? 'opacity-0 scale-105' : 'scale-100'}`}
                loading="lazy"
                onLoad={() => setIsLoading(false)}
            />

            {/* YouTube iframe — fades in on hover */}
            {youtubeId && (
                <div className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    {isHovered && (
                        <>
                            <iframe
                                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&iv_load_policy=3`}
                                className="absolute"
                                style={{
                                    width: '120%',
                                    height: '120%',
                                    top: '-10%',
                                    left: '-10%',
                                    border: 'none',
                                    pointerEvents: 'none',
                                }}
                                allow="autoplay; encrypted-media"
                                allowFullScreen={false}
                                title={exp.title}
                            />
                            <a
                                href={exp.youtubeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 z-10 cursor-pointer"
                                aria-label={`Watch ${exp.title} on YouTube`}
                            />
                        </>
                    )}
                </div>
            )}

            {/* Hover overlay (tags + title) — shown when not YouTube hover */}
            {!isHovered && (
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
            )}

            {/* YouTube hover: title badge slides up from bottom */}
            {isHovered && youtubeId && (
                <div
                    className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none"
                    style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
                        padding: '2.5rem 1.25rem 1rem',
                        animation: 'slideUpFadeIn 0.3s ease-out both',
                    }}
                >
                    <p className="text-white/60 text-[10px] uppercase tracking-widest font-semibold mb-1">
                        {new Date(exp.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </p>
                    <h3 className="text-white font-bold text-base leading-snug drop-shadow-lg">
                        {exp.title}
                    </h3>
                </div>
            )}
        </div>
    );

    return (
        <div className="w-full group relative rounded-2xl overflow-hidden bg-white border border-neutral-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
            {mediaSection}
        </div>
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
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-800 flex-shrink-0">
                    Prototypes
                </h2>
                <span className="h-px flex-grow bg-neutral-200"></span>
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
