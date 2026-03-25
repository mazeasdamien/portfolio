import { Language } from '../contexts/LanguageContext';

export const uiTranslations: Record<string, Record<Language, string>> = {
    // Common
    "common.present": { en: "Present", fr: "Présent", zh: "现在" },

    // Footer
    "footer.uniqueVisitors": { en: "Unique Visitors", fr: "Visiteurs Uniques", zh: "独立访客" },

    "home.bio.description": {
        en: "Researcher with a PhD in Robotic Telexistence for Maintenance, expert in human factors, and 3D immersive technologies. Proven expertise in developing and deploying user-centred Digital Engineering solutions for industrial design and remote robotics. Skilled in the research lifecycle, including user study design, usability testing, asset creation, and application development.",
        fr: "Chercheur titulaire d'un PhD in Robotic Telexistence for Maintenance, expert en facteurs humains et en technologies immersives 3D. Expertise prouvée dans le développement et le déploiement de solutions Digital Engineering centrées sur l'utilisateur pour le design industriel et la robotique à distance. Compétent dans le cycle de vie de la recherche, y compris la conception d'études utilisateurs, les tests d'utilisabilité, la création d'actifs et le développement d'applications.",
        zh: "拥有 PhD in Robotic Telexistence for Maintenance 的研究员，专门从事人为因素和 3D 沉浸式技术。在为工业设计和远程机器人开发和部署以用户为中心的 Digital Engineering 解决方案方面拥有丰富的专业知识。熟练掌握研究生命周期，包括用户研究设计、可用性测试、资源制作和应用程序开发。"
    },

    // Contact
    "contact.title": { en: "Get in touch", fr: "Contactez-moi", zh: "联系我" },
    "contact.sendEmail": { en: "Send me an Email", fr: "M'envoyer un Email", zh: "给我发邮件" }
};
