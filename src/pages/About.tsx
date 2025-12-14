import { Award, Users, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-400">
              {t('aboutTitle')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700/50 shadow-2xl">
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12 text-center">
                {t('aboutDesc')}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-500/50">
                    <Award size={36} className="text-black" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Premium Quality</h3>
                  <p className="text-gray-400 text-sm">Bose & JBL Official Partners</p>
                </div>

                <div className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-500/50">
                    <Users size={36} className="text-black" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Expert Team</h3>
                  <p className="text-gray-400 text-sm">Professional Audio Specialists</p>
                </div>

                <div className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-500/50">
                    <Sparkles size={36} className="text-black" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Luxury Service</h3>
                  <p className="text-gray-400 text-sm">Tailored to Your Needs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-2">
                500+
              </div>
              <div className="text-gray-400 text-sm">Events</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-2">
                100+
              </div>
              <div className="text-gray-400 text-sm">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-2">
                10+
              </div>
              <div className="text-gray-400 text-sm">Years</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-2">
                24/7
              </div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;