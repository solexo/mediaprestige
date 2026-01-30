import Header from '../components/Header';
import Hero3D from '../components/Hero3D';
import Products from '../components/Products';
import Services from '../components/Services';
import Footer from '../components/Footer';
import AnimatedProductBar from '../components/AnimatedProductBar';
import { useLanguage } from '../contexts/LanguageContext';
import { categories } from '../data/categories';
import { Link } from 'react-router-dom';

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
  const { language, t } = useLanguage();
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero3D />
      <Products />
      <AnimatedProductBar />
      <section className="py-20 bg-gradient-to-b from-white via-gray-100 to-white relative overflow-hidden">
        {/* Animated background effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gray-300 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gray-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-4 font-orbitron">Matériel adapté à</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                to={`/categories`}
                className="group relative bg-gradient-to-br from-white via-gray-50 to-white backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 hover:border-green-400/60 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-green-400/30 overflow-hidden block"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-300/0 via-transparent to-blue-300/0 group-hover:from-teal-300/10 group-hover:to-blue-300/10 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="text-teal-400 mb-6 group-hover:scale-110 group-hover:animate-pulse transition-all duration-300">
                    <svg className="w-16 h-16 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4 font-orbitron group-hover:text-teal-600 transition-colors duration-300">{category.nameFr}</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-teal-400/10 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <AnimationSection />
      {/* Services removed as per requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">{t('expertiseTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-black">Importation et Distribution</h3>
              <p className="text-gray-700 mb-6">
                Chez MEDIA PRESTIGE, nous nous spécialisons dans l'importation et la distribution de matériel de sonorisation et audiovisuel haut de gamme. Visitez notre showroom pour découvrir nos produits et discuter de nos partenariats avec les revendeurs et installateurs.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Équipement de pointe</li>
                <li>• Solutions personnalisées pour tous vos besoins</li>
                <li>• Visite de showroom disponible</li>
                <li>• Partenariats avec revendeurs et installateurs</li>
              </ul>
            </div>
            <div className="text-black">
              <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
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
                <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg shadow-lg border border-gray-200">
                  <img src="/logos/dolbyatmos.gif" alt="Dolby Atmos" className="h-16 w-auto object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Particulier Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-4 font-orbitron">Solutions Particulier</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto rounded-full" />
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Découvrez nos solutions complètes pour votre domicile : bundles, home cinéma et home theater avec spécifications techniques détaillées.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
              <div className="text-teal-400 mb-6 flex items-center justify-center">
                <img src="/logos/ttenun.jpg" alt="Bundles Complets" className="h-16 w-auto object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Bundles Complets</h3>
              <p className="text-gray-600 mb-6">Solutions tout-en-un pour sonorisation domestique avec amplificateurs, enceintes et caissons intégrés.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Amplificateur Bose IZA 2120-HZ (2x120W)</li>
                <li>• Enceintes Bose DM8C (plafond)</li>
                <li>• Caisson de basses Acoustimass 3</li>
                <li>• Connectivité multi-room</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
              <div className="text-teal-400 mb-6 flex items-center justify-center">
                <img src="/logos/dolbyatmos.gif" alt="Dolby Atmos" className="h-16 w-auto object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Home Cinéma</h3>
              <p className="text-gray-600 mb-6">Systèmes de home cinéma immersifs avec Dolby Atmos pour une expérience cinématographique exceptionnelle.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Barre de son Bose Smart Ultra (Dolby Atmos)</li>
                <li>• Caisson Ultra 700 sans fil (300W)</li>
                <li>• Enceintes surround Bose 251</li>
                <li>• Streaming multi-plateforme</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
              <div className="text-teal-400 mb-6 flex items-center justify-center">
                <img src="/logos/hometheater.jpg" alt="Home Theater" className="h-16 w-auto object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Home Theater</h3>
              <p className="text-gray-600 mb-6">Configurations avancées pour théâtres domestiques avec équipements professionnels et acoustique optimisée.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Système L1 Pro16 Bose (16 canaux)</li>
                <li>• Enceintes Bose 360P EC (360°)</li>
                <li>• Amplificateur ZA 250-LA (DSP intégré)</li>
                <li>• Calibration acoustique automatique</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-20 bg-gradient-to-b from-teal-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-4 font-orbitron">Partenariats</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto rounded-full" />
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Rejoignez notre réseau de partenaires : commerciaux freelances, architectes, paysagistes et professionnels du secteur.</p>
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                const message = "Bonjour, je suis intéressé par un partenariat avec Media Prestige. Pouvez-vous m'envoyer plus d'informations ?";
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/212600051612?text=${encodedMessage}`, '_blank');
              }}
              className="bg-gradient-to-r from-teal-400 to-blue-400 hover:from-teal-500 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Devenir Partenaire
            </button>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-black mb-8">Partenaires Validés</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="text-teal-400 mb-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-black mb-2">Architectes & Designers</h4>
                <p className="text-gray-600 text-sm">Professionnels de l'architecture et du design d'intérieur intégrant nos solutions.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="text-teal-400 mb-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-black mb-2">Paysagistes</h4>
                <p className="text-gray-600 text-sm">Experts en aménagement extérieur pour installations piscine et jardin.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="text-teal-400 mb-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-black mb-2">Installateurs Agréés</h4>
                <p className="text-gray-600 text-sm">Techniciens certifiés pour l'installation et la maintenance de nos équipements.</p>
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