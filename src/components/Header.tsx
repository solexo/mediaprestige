import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo className="cursor-pointer" />

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-yellow-400 transition-colors duration-200 font-orbitron font-medium tracking-wider"
            >
              {t('home')}
            </Link>
            <Link
              to="/products"
              className="text-white hover:text-yellow-400 transition-colors duration-200 font-orbitron font-medium tracking-wider"
            >
              {t('products')}
            </Link>
            <Link
              to="/services"
              className="text-white hover:text-yellow-400 transition-colors duration-200 font-orbitron font-medium tracking-wider"
            >
              {t('services')}
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-yellow-400 transition-colors duration-200 font-orbitron font-medium tracking-wider"
            >
              {t('about')}
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-yellow-400 transition-colors duration-200 font-orbitron font-medium tracking-wider"
            >
              {t('contact')}
            </Link>
          </nav>

          <div className="flex items-center gap-6">

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5">
              <button
                onClick={() => setLanguage('fr')}
                className={`text-sm font-medium px-2 py-1 rounded-full transition-all duration-200 ${
                  language === 'fr'
                    ? 'bg-yellow-400 text-black'
                    : 'text-white hover:text-yellow-400'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`text-sm font-medium px-2 py-1 rounded-full transition-all duration-200 ${
                  language === 'en'
                    ? 'bg-yellow-400 text-black'
                    : 'text-white hover:text-yellow-400'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md rounded-lg mt-2 py-4 px-4 mb-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-white hover:text-yellow-400 transition-colors duration-200 text-left font-orbitron font-medium tracking-wider"
              >
                {t('home')}
              </Link>
              <Link
                to="/products"
                className="text-white hover:text-yellow-400 transition-colors duration-200 text-left font-orbitron font-medium tracking-wider"
              >
                {t('products')}
              </Link>
              <Link
                to="/services"
                className="text-white hover:text-yellow-400 transition-colors duration-200 text-left font-orbitron font-medium tracking-wider"
              >
                {t('services')}
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-yellow-400 transition-colors duration-200 text-left font-orbitron font-medium tracking-wider"
              >
                {t('about')}
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-yellow-400 transition-colors duration-200 text-left font-orbitron font-medium tracking-wider"
              >
                {t('contact')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
