import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    home: 'Accueil',
    products: 'Produits',
    services: 'Services',
    solutions: 'Nos Solutions',
    about: 'À Propos',
    contact: 'Contact',
    heroTitle: 'MEDIA PRESTIGE',
    heroSubtitle: 'Solutions Audio Professionnelles Haut de Gamme',
    heroDescription: 'Pionnier de l\'avenir de la technologie avec des solutions de pointe',
    viewProducts: 'Voir les produits',
    requestQuote: 'Demander un devis',
    productsTitle: 'Nos Produits Premium',
    buy: 'Acheter',
    quote: 'Demander un devis',
    servicesTitle: 'Nos Services',
    service1Title: 'Installation Audio Professionnelle',
    service1Desc: 'Installation experte pour tous vos besoins audio',
    service2Title: 'Événementiel',
    service2Desc: 'Mariages, soirées, concerts, anniversaires',
    service3Title: 'Location de Matériel',
    service3Desc: 'Équipement premium Bose / JBL',
    service4Title: 'Maintenance & Optimisation',
    service4Desc: 'Service après-vente et optimisation sonore',
    service5Title: 'Services de Conférence',
    service5Desc: 'Solutions audio pour conférences et réunions professionnelles',
    service6Title: 'Événements Majeurs',
    service6Desc: 'Support technique et installation audio pour grands événements',
    aboutTitle: 'À Propos de Nous',
    aboutDesc: 'Media Prestige accompagne particuliers et professionnels avec des solutions audio haut de gamme adaptées à tous les événements.',
    contactTitle: 'Contactez-Nous',
    phone: 'Téléphone',
    email: 'Email',
    address: 'Adresse',
    name: 'Nom',
    message: 'Message',
    send: 'Envoyer',
    followUs: 'Suivez-nous',
    footerText: '© 2025 MEDIA PRESTIGE — Tous droits réservés',
    whatsappMessage: 'Bonjour, je suis intéressé par',
    whatsappMessage2: 'Merci de m\'envoyer plus d\'informations.',
    whatsappBuyMessage: 'Bonjour, je suis intéressé par l\'achat de',
    whatsappQuoteMessage: 'Bonjour, je souhaite demander un devis pour',
    contactSubject: 'Contact depuis le site web Media Prestige',
    contactBodyPrefix: 'Nom: ',
    contactBodyEmail: 'Email: ',
    contactBodyMessage: 'Message: ',
    expertiseTitle: 'Notre Expertise',
    expertiseSubtitle: 'Technologie de Pointe',
    expertiseDesc: 'Chez MEDIA PRESTIGE, nous combinons innovation et expertise pour livrer des solutions audio inégalées. Notre équipe de professionnels assure que chaque projet répond aux normes les plus élevées de qualité et de performance.',
    expertiseList1: 'Équipement de pointe',
    expertiseList2: 'Services d\'installation professionnelle',
    expertiseList3: 'Support technique 24/7',
    expertiseList4: 'Solutions personnalisées pour tous vos besoins',
    partnerBrands: 'Marques Partenaires',
    backToHome: 'Retour à l\'accueil',
    privacyNotice: 'Ce site ne suit pas les utilisateurs, ne collecte aucune donnée et assure la protection de votre vie privée.',
  },
  en: {
    home: 'Home',
    products: 'Products',
    services: 'Services',
    solutions: 'Solutions',
    about: 'About',
    contact: 'Contact',
    heroTitle: 'MEDIA PRESTIGE',
    heroSubtitle: 'Premium Professional Audio Solutions',
    heroDescription: 'Pioneering the future of technology with cutting-edge solutions',
    viewProducts: 'View Products',
    requestQuote: 'Request a Quote',
    productsTitle: 'Our Premium Products',
    buy: 'Buy',
    quote: 'Request a Quote',
    servicesTitle: 'Our Services',
    service1Title: 'Professional Audio Installation',
    service1Desc: 'Expert installation for all your audio needs',
    service2Title: 'Event Services',
    service2Desc: 'Weddings, parties, concerts, birthdays',
    service3Title: 'Equipment Rental',
    service3Desc: 'Premium Bose / JBL equipment',
    service4Title: 'Maintenance & Optimization',
    service4Desc: 'After-sales service and sound optimization',
    service5Title: 'Conference Services',
    service5Desc: 'Audio solutions for conferences and professional meetings',
    service6Title: 'Major Events',
    service6Desc: 'Technical support and audio setup for major events',
    aboutTitle: 'About Us',
    aboutDesc: 'Media Prestige provides high-end audio solutions for both private and professional events.',
    contactTitle: 'Contact Us',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    name: 'Name',
    message: 'Message',
    send: 'Send',
    followUs: 'Follow Us',
    footerText: '© 2025 MEDIA PRESTIGE — All rights reserved',
    whatsappMessage: 'Hello, I am interested in',
    whatsappMessage2: 'Please send me more information.',
    whatsappBuyMessage: 'Hello, I am interested in buying',
    whatsappQuoteMessage: 'Hello, I would like to request a quote for',
    contactSubject: 'Contact from Media Prestige website',
    contactBodyPrefix: 'Name: ',
    contactBodyEmail: 'Email: ',
    contactBodyMessage: 'Message: ',
    expertiseTitle: 'Our Expertise',
    expertiseSubtitle: 'Cutting-Edge Technology',
    expertiseDesc: 'At MEDIA PRESTIGE, we combine innovation with expertise to deliver unparalleled audio solutions. Our team of professionals ensures that every project meets the highest standards of quality and performance.',
    expertiseList1: 'State-of-the-art equipment',
    expertiseList2: 'Professional installation services',
    expertiseList3: '24/7 technical support',
    expertiseList4: 'Custom solutions for every need',
    partnerBrands: 'Partner Brands',
    backToHome: 'Back to Home',
    privacyNotice: 'This site does not track users, collects no data, and ensures your privacy is protected.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
