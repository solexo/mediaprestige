import Header from '../components/Header';
import Footer from '../components/Footer';

const Solutions = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <section className="py-20 pt-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-white mb-12 font-orbitron">Nos Solutions</h1>
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
      <Footer />
    </div>
  );
};

export default Solutions;