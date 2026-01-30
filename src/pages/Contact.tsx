import { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
    const mailtoLink = `mailto:contact@mediaprestige.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
    <div className="min-h-screen bg-white">
      <Header />
      <section className="py-20 bg-gradient-to-b from-white via-gray-100 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-600 rounded-full filter blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-black">
              {t('contactTitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white via-gray-50 to-white backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 hover:border-green-400/60 transition-all duration-300 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-black font-bold mb-2">{t('phone')}</h3>
                    <a href="tel:+212600051612" className="block text-gray-600 hover:text-green-400 transition-colors duration-300">+212 600 051 612</a>
                    <p className="text-gray-600"></p>
                    <a href="tel:+212522253434" className="block text-gray-600 hover:text-green-400 transition-colors duration-300">+212 522 253 434</a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white via-gray-50 to-white backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 hover:border-green-400/60 transition-all duration-300 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-black font-bold mb-2">{t('email')}</h3>
                    <p className="text-gray-600">contact@mediaprestige.com</p>
                    <p className="text-gray-600">info@mediaprestige.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white via-gray-50 to-white backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 hover:border-green-400/60 transition-all duration-300 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-black font-bold mb-2">{t('address')}</h3>
                    <a href="https://www.google.com/maps/place/M%C3%A9dia+Prestige/data=!4m2!3m1!1s0x0:0x28a8bc05bea361b9?sa=X&ved=1t:2428&ictx=111" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-green-400 transition-colors duration-300">
                      <p className="text-gray-600">30 Rue Abou Al Mahassine Royani</p>
                      <p className="text-gray-600">El Maarif 20100, Casablanca, Maroc</p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white via-gray-50 to-white backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 shadow-xl">
                <h3 className="text-black font-bold mb-4">{t('followUs')}</h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <Instagram size={24} className="text-black" />
                  </a>
                  <a
                    href="https://facebook.com"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <Facebook size={24} className="text-black" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white via-gray-50 to-white backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-black font-medium mb-2">
                    {t('name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-green-400 transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-black font-medium mb-2">
                    {t('email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-green-400 transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-black font-medium mb-2">
                    {t('message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-green-400 transition-colors duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-400 to-green-600 text-black font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>{t('send')}</span>
                  <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;