import React, { useState, useEffect, useRef } from 'react';
interface Experiment {
    id: string;
    title: string;
    description: string;
    gifUrl: string;
    youtubeUrl?: string;
    linkUrl?: string;
    tags: string[];
    date: string; // ISO format: YYYY-MM-DD
    hideMeta?: boolean;
    isShort?: boolean;
}

const EXPERIMENTS: Experiment[] = [
    {
        id: 'yt-q1DMvdakKb4',
        title: 'Testing Vision–Language Model (VLM) to Unity 6',
        description: 'Exploring the integration of a Vision-Language Model (VLM) within Unity 6.',
        gifUrl: 'https://i.ytimg.com/vi/q1DMvdakKb4/hqdefault.jpg',
        youtubeUrl: 'https://youtu.be/q1DMvdakKb4',
        tags: ['Unity 6', 'VLM', 'AI', 'Integration'],
        date: '2026-05-01'
    },
    {
        id: 'github-ik-ur16e',
        title: 'Inverse-Kinematics-Universal-Robot-Unity',
        description: 'Inverse Kinematics for UR16e Robot in unity.',
        gifUrl: 'https://opengraph.githubassets.com/1/mazeasdamien/Inverse-Kinematics-Universal-Robot-Unity',
        linkUrl: 'https://github.com/mazeasdamien/Inverse-Kinematics-Universal-Robot-Unity',
        tags: ['Unity 3D', 'Robotics', 'C#', 'Open Source'],
        date: '2023-04-01',
        hideMeta: true
    },
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
        date: '2026-03-20',
        isShort: true
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

declare global {
    interface Window {
        YT: any;
        onYouTubeIframeAPIReady: () => void;
    }
}

const YouTubeHoverPlayer = ({ youtubeId, isHovered }: { youtubeId: string, isHovered: boolean }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<any>(null);

    useEffect(() => {
        const initPlayer = () => {
            if (!containerRef.current || playerRef.current) return;
            playerRef.current = new window.YT.Player(containerRef.current, {
                videoId: youtubeId,
                playerVars: {
                    autoplay: isHovered ? 1 : 0,
                    controls: 0,
                    disablekb: 1,
                    fs: 0,
                    modestbranding: 1,
                    playsinline: 1,
                    rel: 0,
                    mute: 1,
                    iv_load_policy: 3
                },
                events: {
                    onReady: (event: any) => {
                        event.target.mute();
                        if (isHovered) {
                            event.target.playVideo();
                        }
                    },
                    onStateChange: (event: any) => {
                        if (event.data === 0) { // ENDED
                            event.target.seekTo(0);
                            event.target.playVideo();
                        }
                    }
                }
            });
        };

        if (window.YT && window.YT.Player) {
            initPlayer();
        } else {
            if (!document.getElementById('youtube-api-script')) {
                const tag = document.createElement('script');
                tag.id = 'youtube-api-script';
                tag.src = 'https://www.youtube.com/iframe_api';
                const firstScriptTag = document.getElementsByTagName('script')[0];
                if (firstScriptTag && firstScriptTag.parentNode) {
                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                } else {
                    document.head.appendChild(tag);
                }
                
                window.onYouTubeIframeAPIReady = () => {
                    window.dispatchEvent(new Event('youtube-api-ready'));
                };
            }
            const listener = () => initPlayer();
            window.addEventListener('youtube-api-ready', listener);
            return () => window.removeEventListener('youtube-api-ready', listener);
        }
    }, [youtubeId]);

    useEffect(() => {
        if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
            if (isHovered) {
                playerRef.current.playVideo();
            } else {
                playerRef.current.pauseVideo();
            }
        }
    }, [isHovered]);

    return (
        <div className="absolute w-[120%] h-[120%] top-[-10%] left-[-10%] pointer-events-none">
            <div ref={containerRef} className="w-full h-full pointer-events-none" />
        </div>
    );
};

interface ExperimentCardProps {
    exp: Experiment;
    globalIndex: number;
}

const ExperimentCard: React.FC<ExperimentCardProps> = ({ exp, globalIndex }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [hasHovered, setHasHovered] = useState(false);

    useEffect(() => {
        if (isHovered) setHasHovered(true);
    }, [isHovered]);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Extract YouTube video ID from youtubeUrl
    const getYoutubeId = (url?: string): string | null => {
        if (!url) return null;
        const match = url.match(/youtu\.be\/([^?&]+)/) || url.match(/v=([^?&]+)/);
        return match ? match[1] : null;
    };
    const youtubeId = getYoutubeId(exp.youtubeUrl);
    
    const isShortVideo = exp.isShort || (exp.youtubeUrl && exp.youtubeUrl.includes('shorts'));
    const use16x9 = youtubeId && !isShortVideo;

    const mediaSection = (
        <div
            className={`relative w-full overflow-hidden bg-transparent ${use16x9 ? 'aspect-video' : 'min-h-[200px]'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Spinner while thumbnail loads */}
            {isLoading && !isHovered && (
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-200/50 animate-pulse z-10">
                    <div className="w-8 h-8 rounded-full border-4 border-neutral-300 border-t-neutral-500 animate-spin"></div>
                </div>
            )}

            {/* Static frame canvas for GIFs */}
            <canvas
                ref={canvasRef}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 pointer-events-none ${(!exp.gifUrl.endsWith('.gif') || isLoading) ? 'hidden' : ''} ${isHovered ? 'opacity-0' : 'opacity-100'}`}
            />

            {/* Main Image / Animated GIF */}
            <img
                src={exp.gifUrl}
                alt={exp.title}
                className={`w-full ${use16x9 ? 'h-full' : 'h-auto'} object-cover transition-all duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} ${(isHovered && youtubeId) || (!isHovered && exp.gifUrl.endsWith('.gif')) ? 'opacity-0' : 'opacity-100'}`}
                loading="lazy"
                crossOrigin="anonymous"
                onLoad={(e) => {
                    setIsLoading(false);
                    if (exp.gifUrl.endsWith('.gif') && canvasRef.current) {
                        const img = e.currentTarget;
                        canvasRef.current.width = img.naturalWidth;
                        canvasRef.current.height = img.naturalHeight;
                        canvasRef.current.getContext('2d')?.drawImage(img, 0, 0);
                    }
                }}
            />

            {/* YouTube iframe — loaded via API on first hover */}
            {youtubeId && hasHovered && (
                <div className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <YouTubeHoverPlayer youtubeId={youtubeId} isHovered={isHovered} />
                    <a
                        href={exp.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-10 cursor-pointer"
                        aria-label={`Watch ${exp.title} on YouTube`}
                    />
                </div>
            )}

            {/* Link overlay for non-YouTube external links */}
            {exp.linkUrl && !youtubeId && (
                <a
                    href={exp.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10 cursor-pointer"
                    aria-label={`Visit ${exp.title}`}
                />
            )}

            {/* Hover overlay (tags + title) — shown when not YouTube hover */}
            {(!isHovered || !youtubeId) && (
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    {!exp.hideMeta && (
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
                    )}
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
        <div className="w-full relative group">
            {/* Outer offset outline (Static, revealed when card pops out) */}
            <div className="absolute inset-0 rounded-[16px] border-[1.5px] border-neutral-400 transition-opacity duration-500 ease-out opacity-0 group-hover:opacity-100 group-hover:shadow-md pointer-events-none z-0"></div>
            
            {/* Intermediate offset outline (Translates half the distance) */}
            <div className="absolute inset-0 rounded-[16px] border-[1.5px] border-neutral-400 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 group-hover:-translate-x-[6px] group-hover:-translate-y-[6px] group-hover:shadow-md pointer-events-none z-0"></div>
            
            {/* Corner Connecting Lines Container (Static) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Top-Right connection */}
                <div className="absolute w-[17px] h-[1.5px] bg-neutral-400 rounded-full transition-transform duration-500 ease-out origin-left -rotate-[135deg] scale-x-0 group-hover:scale-x-100" style={{ top: '5.5px', left: 'calc(100% - 5.5px)', marginTop: '-0.75px' }}></div>
                {/* Bottom-Left connection */}
                <div className="absolute w-[17px] h-[1.5px] bg-neutral-400 rounded-full transition-transform duration-500 ease-out origin-left -rotate-[135deg] scale-x-0 group-hover:scale-x-100" style={{ top: 'calc(100% - 5.5px)', left: '5.5px', marginTop: '-0.75px' }}></div>
                {/* Bottom-Right connection */}
                <div className="absolute w-[17px] h-[1.5px] bg-neutral-400 rounded-full transition-transform duration-500 ease-out origin-left -rotate-[135deg] scale-x-0 group-hover:scale-x-100" style={{ top: 'calc(100% - 5.5px)', left: 'calc(100% - 5.5px)', marginTop: '-0.75px' }}></div>
            </div>

            {/* Main Card */}
            <div className="relative z-10 w-full rounded-[16px] overflow-hidden bg-[#fafafa] border border-neutral-200/60 shadow-sm transition-all duration-500 ease-out group-hover:-translate-x-[12px] group-hover:-translate-y-[12px] group-hover:border-black group-hover:shadow-2xl">
                {mediaSection}
            </div>
        </div>
    );
};


const ExperimentsSection: React.FC = () => {
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
            <div className="flex items-center gap-4 mb-2">
                <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-800 flex-shrink-0">
                    Experiments
                </h2>
                <span className="h-px flex-grow bg-neutral-200"></span>
            </div>
            <p className="text-xs text-neutral-400 mb-8 italic">
                * Note: Experiment videos are hosted on YouTube and may not work in some regions without a VPN.
            </p>

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
                                />
                            );
                        })}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ExperimentsSection;
