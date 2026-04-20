import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Mail, Copy, Check } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const { t } = useLanguage();
    const [copied, setCopied] = useState(false);
    const [mounted, setMounted] = useState(false);
    const email = "damien.mazeas@dmzs-lab.com";

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!isOpen || !mounted) return null;

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-neutral-100/60 backdrop-blur-sm animate-fade-in"
                onClick={onClose}
            />

            <div className="relative w-full max-w-lg bg-white/95 backdrop-blur-xl border border-neutral-200 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">

                <div className="p-6 border-b border-neutral-200 flex justify-between items-center bg-neutral-50">
                    <div>
                        <h2 className="text-2xl font-bold text-neutral-900">
                            {t('contact.title')}
                        </h2>

                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-neutral-200 text-neutral-500 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="p-6 flex flex-col gap-6">

                    <div className="flex items-center gap-2 p-1 bg-neutral-100 rounded-xl border border-neutral-200">
                        <div className="flex-1 px-4 py-3 font-mono text-base sm:text-lg text-neutral-800 overflow-hidden text-ellipsis whitespace-nowrap">
                            {email}
                        </div>
                        <button
                            onClick={handleCopy}
                            className="p-3 bg-white rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors shadow-sm border border-neutral-300"
                            title="Copy email"
                        >
                            {copied ? <Check size={20} className="text-emerald-500" /> : <Copy size={20} />}
                        </button>
                    </div>

                    <a
                        href={`mailto:${email}`}
                        className="w-full py-4 px-6 bg-neutral-900 text-white font-bold rounded-xl hover:bg-neutral-800 transition-all duration-200 text-center flex items-center justify-center gap-2"
                    >
                        <Mail size={20} />
                        <span>{t('contact.sendEmail')}</span>
                    </a>
                </div>
            </div>
        </div>,
        document.body
    );
};

