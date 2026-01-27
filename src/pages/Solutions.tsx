import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const Solutions = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-4 font-orbitron">Particulier</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full" />
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Découvrez nos solutions complètes pour votre domicile : bundles, home cinéma et home theater avec spécifications techniques détaillées.</p>
            </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
              <div className="text-teal-400 mb-6">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
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
              <div className="text-teal-400 mb-6">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 3v3a2 2 0 0 1-2 2H3v11a2 2 0 0 0 2 2h5.5l-1-1H5V8h3a2 2 0 0 0 2-2V5h6v2a2 2 0 0 0 2 2h3v11h-2.5l-1 1H19a2 2 0 0 0 2-2V8a2 2 0 0 0 2-2V3H8z"/>
                </svg>
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
              <div className="text-teal-400 mb-6">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
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
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full" />
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Rejoignez notre réseau de partenaires : commerciaux freelances, architectes, paysagistes et professionnels du secteur.</p>
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                const message = "Bonjour, je suis intéressé par un partenariat avec Media Prestige. Pouvez-vous m'envoyer plus d'informations ?";
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/212600051612?text=${encodedMessage}`, '_blank');
              }}
              className="bg-gradient-to-r from-green-400 to-green-600 hover:from-teal-500 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
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
                <h4 className="font-bold text-black mb-2">Commerciaux Freelance</h4>
                <p className="text-gray-600 text-sm">Professionnels indépendants spécialisés dans la vente et la distribution de nos produits.</p>
              </div>

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
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Solutions;