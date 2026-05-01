import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export const PublicationsSection: React.FC = () => {
    return (
        <section className="w-full">
            <div className="flex items-center gap-4 mb-4">
                <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-800 flex-shrink-0">
                    Publications
                </h2>
                <span className="h-px flex-grow bg-neutral-200"></span>
            </div>

            <div className="flex flex-col gap-3">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35 }}
                >
                    <div className="relative group w-full">
                        {/* Outer wireframe */}
                        <div className="absolute inset-0 rounded-2xl border border-neutral-400 transition-opacity duration-300 ease-out opacity-0 group-hover:opacity-100 group-hover:shadow-sm pointer-events-none z-0"></div>
                        {/* Intermediate wireframe */}
                        <div className="absolute inset-0 rounded-2xl border border-neutral-400 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 group-hover:-translate-x-[3px] group-hover:-translate-y-[3px] group-hover:shadow-sm pointer-events-none z-0"></div>
                        {/* Lines container (Static origins, growing lines) */}
                        <div className="absolute inset-0 z-0 pointer-events-none">
                            {/* Top-Right connection */}
                            <div className="absolute w-[8.5px] h-[1px] bg-neutral-400 rounded-full transition-transform duration-300 ease-out origin-left -rotate-[135deg] scale-x-0 group-hover:scale-x-100" style={{ top: '5.5px', left: 'calc(100% - 5.5px)', marginTop: '-0.5px' }}></div>
                            {/* Bottom-Left connection */}
                            <div className="absolute w-[8.5px] h-[1px] bg-neutral-400 rounded-full transition-transform duration-300 ease-out origin-left -rotate-[135deg] scale-x-0 group-hover:scale-x-100" style={{ top: 'calc(100% - 5.5px)', left: '5.5px', marginTop: '-0.5px' }}></div>
                            {/* Bottom-Right connection */}
                            <div className="absolute w-[8.5px] h-[1px] bg-neutral-400 rounded-full transition-transform duration-300 ease-out origin-left -rotate-[135deg] scale-x-0 group-hover:scale-x-100" style={{ top: 'calc(100% - 5.5px)', left: 'calc(100% - 5.5px)', marginTop: '-0.5px' }}></div>
                        </div>

                        <a href="https://www.mdpi.com/2813-2084/4/2/17" target="_blank" rel="noopener noreferrer" className="relative z-10 block overflow-hidden flex items-center gap-4 px-4 py-3 rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-neutral-400 hover:bg-white hover:shadow-lg hover:-translate-x-[6px] hover:-translate-y-[6px] min-h-[80px]">

                            {/* Publication Details */}
                            <div className="flex-1 flex flex-col relative z-10 min-w-0 pr-4">
                                <div className="inline-block truncate whitespace-normal line-clamp-2">
                                    <h3 className="text-[15px] font-bold text-neutral-800 leading-snug group-hover:text-blue-600 transition-colors inline">
                                        Study of visualization modalities on Industrial robot teleoperation for inspection in a virtual co-existence space
                                    </h3>
                                </div>
                                <div className="flex items-center flex-wrap gap-x-2 mt-1">
                                    <p className="text-[13px] font-medium text-neutral-600">
                                        <span className="text-blue-600 font-bold">D Mazeas</span>, B Namoano
                                    </p>
                                </div>
                                <p className="text-[12px] text-neutral-500 italic mt-0.5">
                                    2025 • Virtual Worlds 4 (2), 17
                                </p>
                            </div>

                            {/* SCImago Badge */}
                            <div className="shrink-0 w-[75px] md:w-[90px] flex items-center justify-end relative z-20">
                                <img src="https://www.scimagojr.com/journal_img.php?id=21101321448" alt="SCImago Journal & Country Rank" className="w-full h-auto object-contain mix-blend-multiply" />
                            </div>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
