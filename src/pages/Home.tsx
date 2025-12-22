import Header from '../components/Header';
import Hero3D from '../components/Hero3D';
import Products from '../components/Products';
import Services from '../components/Services';
import Footer from '../components/Footer';
import AnimatedProductBar from '../components/AnimatedProductBar';
import { useLanguage } from '../contexts/LanguageContext';

const AnimationSection = () => {
  const { t } = useLanguage();

  return (
    <section className="md:hidden py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <img
          src="/1212.gif"
          className="w-full h-auto rounded-lg"
          alt="animation"
        />
      </div>
    </section>
  );
};

const Home = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero3D />
      <Products />
      <AnimatedProductBar />
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 font-orbitron">Nos Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Sonorisation de Villa',
              'Cafés et Restaurants',
              'Commerce et Showrooms',
              'Salles de Réunions',
              'Hôtels',
              'Maisons d\'Hôte'
            ].map((solution, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20 group"
              >
                <div className="text-yellow-400 mb-4 group-hover:animate-pulse">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 font-orbitron">{solution}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AnimationSection />
      <Services />
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">{t('expertiseTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">{t('expertiseSubtitle')}</h3>
              <p className="text-gray-300 mb-6">
                {t('expertiseDesc')}
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• {t('expertiseList1')}</li>
                <li>• {t('expertiseList2')}</li>
                <li>• {t('expertiseList3')}</li>
                <li>• {t('expertiseList4')}</li>
              </ul>
            </div>
            <div className="text-white">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-lg">
                  <img src="/logos/bose.png" alt="Bose" className="h-16 w-auto" />
                </div>
                <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-lg">
                  <img src="/logos/jbl.png" alt="JBL" className="h-16 w-auto" />
                </div>
                <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-lg">
                  <img src="/logos/sony.png" alt="Sony" className="h-16 w-auto" />
                </div>
                <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-lg">
                  <img src="/logos/harman.png" alt="Harman" className="h-16 w-auto object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;