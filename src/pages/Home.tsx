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
    <section className="md:hidden py-20 bg-white">
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
      <section className="py-20 bg-gradient-to-b from-white via-gray-100 to-white relative overflow-hidden">
        {/* Animated background effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-yellow-400 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-yellow-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-black to-yellow-600 mb-4 font-orbitron">Nos Solutions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full" />
          </div>

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
                className="group relative bg-gradient-to-br from-white via-gray-50 to-white backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 hover:border-yellow-400/60 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-yellow-400/30 overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-transparent to-yellow-600/0 group-hover:from-yellow-400/10 group-hover:to-yellow-600/10 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="text-yellow-400 mb-6 group-hover:scale-110 group-hover:animate-pulse transition-all duration-300">
                    <svg className="w-16 h-16 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4 font-orbitron group-hover:text-yellow-600 transition-colors duration-300">{solution}</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-400/10 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <AnimationSection />
      <Services />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">{t('expertiseTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-black">{t('expertiseSubtitle')}</h3>
              <p className="text-gray-700 mb-6">
                {t('expertiseDesc')}
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• {t('expertiseList1')}</li>
                <li>• {t('expertiseList2')}</li>
                <li>• {t('expertiseList3')}</li>
                <li>• {t('expertiseList4')}</li>
              </ul>
            </div>
            <div className="text-black">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow-lg border border-gray-200">
                  <img src="/logos/bose.png" alt="Bose" className="h-16 w-auto" />
                </div>
                <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow-lg border border-gray-200">
                  <img src="/logos/jbl.png" alt="JBL" className="h-16 w-auto" />
                </div>
                <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow-lg border border-gray-200">
                  <img src="/logos/sony.png" alt="Sony" className="h-16 w-auto" />
                </div>
                <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow-lg border border-gray-200">
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