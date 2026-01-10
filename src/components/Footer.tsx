import { useLanguage } from '../contexts/LanguageContext';
import Logo from './Logo';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <Logo className="mb-4 mx-auto md:mx-0" />
            <p className="text-gray-600 text-sm">
              {t('aboutDesc')}
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-black font-bold mb-4">{t('contact')}</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone size={16} />
                <a href="tel:+212600051612" className="hover:text-yellow-400 transition-colors">+212 600 051 612</a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail size={16} />
                <a href="mailto:Mediaprestige.official@gmail.com" className="hover:text-yellow-400 transition-colors">Mediaprestige.official@gmail.com</a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MapPin size={24} />
                <span>30 Rue Abou Al Mahassine Royani, El Maarif 20100, Casablanca, Maroc</span>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-black font-bold mb-4">{t('followUs')}</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://www.instagram.com/mediaprestige.official?igsh=MW9zczh0aHczMHFzZw=="
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Instagram size={20} className="text-black" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61584927844886&mibextid=ZbWKwL"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Facebook size={20} className="text-black" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center space-y-2">
          <p className="text-gray-600 text-sm">
            {t('privacyNotice')}
          </p>
          <p className="text-gray-600 text-sm">
            {t('footerText')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
