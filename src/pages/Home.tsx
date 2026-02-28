import Header from '../components/Header';
import Hero3D from '../components/Hero3D';
import Products from '../components/Products';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { categories } from '../data/categories';
import SolutionsCarousel from '../components/SolutionsCarousel';

const Home = () => {
  const { language, t } = useLanguage();
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero3D />
      <Products />
      
      {/* Solutions Particulier Section - Animated */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-left mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-left text-black mb-4 font-orbitron">Solutions complètes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full" />
            <p className="text-gray-600 mt-4 max-w-2xl">Découvrez nos solutions complètes pour votre domicile : bundles, home cinéma et home theater avec spécifications techniques détaillées.</p>
          </div>

          <SolutionsCarousel />
        </div>
      </section>

      {/* Experience Personaliser Section */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-100 to-white relative overflow-hidden">
        {/* Animated background effects */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gray-300 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gray-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-left mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-left text-black mb-4 font-orbitron">Adapter à vos projets</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="group relative bg-gradient-to-br from-white via-gray-50 to-white backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 will-change-transform border border-gray-200/50 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image section */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
                  <img
                    src={category.image}
                    alt={language === 'fr' ? category.nameFr : category.nameEn}
                    className="w-full h-full object-contain p-4"
                    loading="lazy"
                  />
                  {/* Subtle shadow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                </div>

                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-yellow-600 transition-colors duration-300 font-orbitron">
                    {language === 'fr' ? category.nameFr : category.nameEn}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {language === 'fr' ? category.descriptionFr : category.descriptionEn}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {(language === 'fr' ? category.featuresFr : category.featuresEn).slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Importation et Distribution Section */}
      <section className="py-16 bg-white text-left">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 font-orbitron">{t('expertiseTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-black">Importation et Distribution</h3>
              <p className="text-gray-700 mb-6">
                Spécialiste de l’importation et de la distribution de solutions audiovisuelles haut de gamme, MEDIA PRESTIGE propose aux professionnels des équipements sélectionnés avec rigueur auprès de marques internationales de référence.
              </p>
              <h2 className="text-2xl font-semibold mb-6 text-black">Savoir-faire et engagement</h2>
                <p className="text-gray-700 mb-6">
                Forts de plusieurs années d’expérience, nous sélectionnons avec exigence des équipements de référence, en garantissant un équilibre optimal entre performance, fiabilité et compétitivité.
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

      {/* Partnerships Section */}
      <section className="py-20 bg-gradient-to-b from-teal-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-left mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-left text-black mb-4 font-orbitron">Partenariats</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full" />
            <p className="text-gray-600 mt-4 max-w-2xl">Rejoignez notre réseau de partenaires : commerciaux freelances, architectes, paysagistes et professionnels du secteur.</p>
          </div>

          <div className="text-left">
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
            <h3 className="text-2xl font-bold text-left text-black mb-8">Partenaires Validés</h3>
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
