import { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = t('contactSubject');
    const body = `${t('contactBodyPrefix')}${formData.name}\n${t('contactBodyEmail')}${formData.email}\n\n${t('contactBodyMessage')}\n${formData.message}`;
    const mailtoLink = `mailto:Mediaprestige.official@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-600 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-400">
            {t('contactTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">{t('phone')}</h3>
                  <p className="text-gray-400">+212 600 051 612</p>
                  <p className="text-gray-400">+212 600 051 613</p>
                  <p className="text-gray-400">05222-53434</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">{t('email')}</h3>
                  <p className="text-gray-400">Mediaprestige.official@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">{t('address')}</h3>
                  <a href="https://share.google/eAkMdHNN6qihs5Zpv" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                    <p>30 Rue Abou Al Mahassine Royani</p>
                    <p>El Maarif 20100, Casablanca, Maroc</p>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-white font-bold mb-4">{t('followUs')}</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/mediaprestige.official?igsh=MW9zczh0aHczMHFzZw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={24} className="text-black" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61584927844886&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={24} className="text-black" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  {t('name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  {t('email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  {t('message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-colors duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>{t('send')}</span>
                <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
