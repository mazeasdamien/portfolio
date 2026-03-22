import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../contexts/LanguageContext';

interface SEOProps {
    title: string;
    description: string;
    image?: string;
    type?: 'website' | 'article';
    path?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    image = '/images/profil.jpg',
    type = 'website',
    path = ''
}) => {
    const { t } = useLanguage();
    const siteTitle = "Damien Mazeas";
    const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;
    const url = `https://mazeasdamien.github.io/My-portfolio${path}`;

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    );
};

export default SEO;
