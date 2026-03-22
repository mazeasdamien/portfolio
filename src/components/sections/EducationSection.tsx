import React from 'react';
import { Award } from 'lucide-react';

export const EducationSection: React.FC = () => {
    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center gap-4">
                <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-800 flex-shrink-0">
                    Education
                </h2>
                <span className="h-px flex-grow bg-neutral-200"></span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {/* Ph.D. Diploma Card */}
                <div className="relative group p-5 rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-md shadow-sm transition-all duration-300 flex items-center hover:border-neutral-300 hover:bg-white overflow-hidden">
                    <div className="flex items-center gap-4 w-full relative z-10">
                        <div className="w-14 h-14 rounded-xl bg-white/90 p-2 flex items-center justify-center shadow-sm shrink-0 overflow-hidden">
                            <img src="/images/logos/cranfield.webp" alt="Cranfield University" className="w-full h-full object-contain" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] leading-none mb-1.5">Cranfield University</p>
                            <h4 className="text-sm font-bold text-neutral-900 leading-tight">Ph.D. in Robotic Telepresence (Telexistence)</h4>
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1.5 text-[11px] text-neutral-500 font-medium">
                                <span>April 2024</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Master's Diploma Card */}
                <div className="relative group p-5 rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-md shadow-sm transition-all duration-300 flex items-center hover:border-neutral-300 hover:bg-white overflow-hidden">
                    <div className="flex items-center gap-4 w-full relative z-10">
                        <div className="w-14 h-14 rounded-xl bg-white/90 p-2 flex items-center justify-center shadow-sm shrink-0 overflow-hidden">
                            <img src="/images/logos/artsetmetiers.svg" alt="Arts et Métiers" className="w-full h-full object-contain" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] leading-none mb-1.5">Arts et Métiers</p>
                            <h4 className="text-sm font-bold text-neutral-900 leading-tight">M.Sc. in Digital Engineering</h4>
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1.5 text-[11px] text-neutral-500 font-medium">
                                <span>Sept 2019</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
