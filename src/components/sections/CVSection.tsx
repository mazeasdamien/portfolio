import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
// @ts-ignore
import experienceData from '../../data/experience_steps.json';

interface ExperienceStep {
    id: string;
    type: string;
    title: string;
    organization: string;
    location: string;
    startDate: string;
    endDate: string | null;
    researchInterests: string[];
    logo: string;
}

const STEPS = [...experienceData]
    .filter((step: any) => step.type !== 'education')
    .reverse() as ExperienceStep[];

export const CVSection: React.FC = () => {
    return (
        <section>
            <div className="flex flex-col gap-2">
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

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
        >
            <div className="group flex items-center gap-4 px-5 py-3 rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-neutral-300 hover:bg-white">
                {/* Logo inside card */}
                <div className="w-12 h-12 rounded-xl bg-white/90 p-1.5 flex items-center justify-center shadow-sm shrink-0 overflow-hidden border border-neutral-100">
                    {step.logo ? (
                        <img
                            src={step.logo}
                            alt={step.organization}
                            className="w-full h-full object-contain"
                        />
                    ) : (
                        <div className="w-full h-full rounded-lg bg-neutral-200 flex items-center justify-center">
                            <span className="text-[10px] font-black text-neutral-500 uppercase">
                                {step.organization.slice(0, 2)}
                            </span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div className="min-w-0">
                            <h3 className="text-sm font-bold text-neutral-900 leading-tight truncate">
                                {step.title}
                            </h3>
                            <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 mt-0.5">
                                <span className="text-blue-600 font-bold uppercase tracking-wider text-[10px]">
                                    {step.organization}
                                </span>
                                <span>•</span>
                                <span>{step.location}</span>
                            </div>
                        </div>

                        <div className="shrink-0 flex items-center gap-1 px-2 py-1 rounded-full bg-neutral-100/50 border border-neutral-200 shadow-sm">
                            <Calendar size={9} className="text-neutral-500" />
                            <span className="text-[9px] font-bold text-neutral-700 uppercase tracking-wide whitespace-nowrap">
                                {formatDate(step.startDate)} — {formatDate(step.endDate)}
                            </span>
                        </div>
                    </div>

                    {/* Tags */}
                    {step.researchInterests.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                            {step.researchInterests.map((interest, i) => (
                                <span key={i} className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-neutral-100 border border-neutral-200 text-neutral-600 uppercase tracking-wider">
                                    {interest}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};
