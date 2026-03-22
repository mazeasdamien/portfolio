import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type Language = 'en' | 'fr' | 'zh';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

interface LanguageProviderProps {
    children: ReactNode;
    translations: Record<string, Record<Language, string>>;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children, translations }) => {
    const [language, setLanguageState] = useState<Language>('en');

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') as Language;
        if (savedLanguage && ['en', 'fr', 'zh'].includes(savedLanguage)) {
            setLanguageState(savedLanguage);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    const t = (key: string): string => {
        if (!translations[key]) {
            console.warn(`Translation missing for key: ${key}`);
            return key;
        }
        return translations[key][language] || translations[key]['en'] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
