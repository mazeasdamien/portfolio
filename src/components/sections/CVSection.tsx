import React from 'react';
import { Briefcase, MapPin, GraduationCap, Calendar, ExternalLink, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
// @ts-ignore
import experienceData from '../../data/experience_steps.json';

interface Project {
    id: string;
    title: string;
    url: string;
    thumbnail?: string;
}

interface ExperienceStep {
    id: string;
    type: string;
    title: string;
    organization: string;
    location: string;
    startDate: string;
    endDate: string | null;
    description: string;
    researchInterests: string[];
    projects?: Project[];
    teaching?: string[];
    sponsor?: string;
    logo: string;
}

const STEPS = [...experienceData]
    .filter((step: any) => step.type !== 'education')
    .reverse() as ExperienceStep[];

export const CVSection: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section>


            <div className="relative space-y-4 before:absolute before:inset-0 before:ml-[41px] before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-200 before:to-transparent">
                {STEPS.map((step, index) => (
                    <ExperienceNode key={step.id} step={step} index={index} />
                ))}
            </div>
        </section>
    );
};

const ExperienceNode: React.FC<{ step: ExperienceStep; index: number }> = ({ step, index }) => {
    const { t } = useLanguage();

    const formatDate = (dateString: string | null) => {
        if (!dateString) return t('common.present');
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    };

    const isEducation = step.type === 'education';
    const accentColor = isEducation ? 'text-indigo-500' : 'text-blue-600';
    const accentBg = isEducation ? 'bg-indigo-500' : 'bg-blue-500';

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative pl-28 sm:pl-32 w-full"
        >
            {/* Icon on the timeline - Positioned Absolutely */}
            <div className="absolute left-[3px] top-6 flex items-center justify-center w-[76px] h-[76px] z-10 transition-transform duration-300 group-hover:scale-110">
                {step.id === 'exp-bnbu' && (
                     <div className="absolute top-1/2 left-1/2 -translate-x-[calc(50%-1px)] -translate-y-[calc(50%-1px)] w-14 h-14 bg-[#fafafa] rounded-full z-0"></div>
                )}
                <img
                    src={step.logo}
                    alt={step.organization}
                    className={`relative z-10 object-contain drop-shadow-md ${step.id === 'exp-bnbu' ? 'w-24 h-24 scale-110 translate-x-[1px]' : 'w-16 h-16'}`}
                />
            </div>

            {/* Content Card */}
            <div className="relative group block w-full p-6 rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-neutral-300 hover:bg-white">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                        <div>
                            <h3 className="text-base font-bold text-neutral-900 leading-tight">
                                {step.title}
                            </h3>
                            <div className="flex items-center gap-2 text-sm font-medium text-neutral-500 mt-0.5">
                                <span className="text-blue-600 font-bold uppercase tracking-wider text-xs">
                                    {step.organization}
                                </span>
                                <span>•</span>
                                <span>{step.location}</span>
                            </div>
                        </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-100/50 border border-neutral-200 shadow-sm">
                        <Calendar size={10} className="text-neutral-500" />
                        <span className="text-[10px] font-bold text-neutral-700 uppercase tracking-wide">
                            {formatDate(step.startDate)} — {formatDate(step.endDate)}
                        </span>
                    </div>
                </div>

                <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                    {step.description.split(/(\[.*?\]\(.*?\))/g).map((part, index) => {
                        const match = part.match(/\[(.*?)\]\((.*?)\)/);
                        if (match) {
                            return (
                                <a
                                    key={index}
                                    href={match[2]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-700 font-medium underline decoration-blue-300 underline-offset-2 transition-colors"
                                >
                                    {match[1]}
                                </a>
                            );
                        }
                        return <React.Fragment key={index}>{part}</React.Fragment>;
                    })}
                </p>

                {step.sponsor && (
                    <div className="mb-4 text-xs font-medium text-neutral-500">
                        {step.sponsor}
                    </div>
                )}

                {/* Academic Involvement */}
                {(step.teaching && step.teaching.length > 0) && (
                    <div className="mb-4 pt-2 border-t border-neutral-200">
                        <ul className="grid grid-cols-1 gap-y-2">
                            {step.teaching.map((course, i) => (
                                <li key={i} className="text-sm text-neutral-700 flex items-center gap-2 font-normal">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                    <span>{course}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Research Interests Tags (Smaller) */}

                {step.researchInterests.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
                        {step.researchInterests.map((interest, i) => (
                            <span key={i} className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-neutral-100 border border-neutral-200 text-neutral-600 uppercase tracking-wider">
                                {interest}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};
