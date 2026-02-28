import Header from '../components/Header';
import Footer from '../components/Footer';

const Solutions = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Partenariats Section */}
      <section className="py-20 bg-gradient-to-b from-teal-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-left text-black mb-4 font-orbitron">Partenariats</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full" />
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Rejoignez notre réseau de partenaires et travaillez avec nous sur des projets de sonorisation professionnelle.</p>
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
            <h3 className="text-2xl font-bold text-left text-black mb-8">Nos Partenaires</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="text-green-400 mb-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-black mb-2">Installateurs</h4>
                <p className="text-gray-600 text-sm">Techniciens certifiés pour l'installation et la maintenance de nos équipements audio.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="text-blue-400 mb-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-black mb-2">Revendeurs</h4>
                <p className="text-gray-600 text-sm">Magasins et distribueurs spécialisés dans la vente de matériel audio professionnel.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="text-purple-400 mb-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-black mb-2">Commerçants</h4>
                <p className="text-gray-600 text-sm">Commerçants souhaitant proposer nos solutions audio à leur clientèle.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="text-orange-400 mb-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-black mb-2">Promoteurs</h4>
                <p className="text-gray-600 text-sm">Promoteurs immobiliers intégrant nos solutions audio dans leurs projets.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="text-teal-400 mb-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-black mb-2">Architectes</h4>
                <p className="text-gray-600 text-sm">Professionnels de l'architecture intégrant nos solutions dans leurs designs.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="text-indigo-400 mb-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-black mb-2">Paysagistes</h4>
                <p className="text-gray-600 text-sm">Experts en aménagement extérieur pour installations piscine et jardin.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="text-pink-400 mb-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-black mb-2">Intégrateurs</h4>
                <p className="text-gray-600 text-sm">Spécialistes en intégration de systèmes audio et domotique.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="text-gray-400 mb-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-black mb-2">Autres</h4>
                <p className="text-gray-600 text-sm">Autres professionnels intéressés par la sonorisation professionnelle.</p>
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
