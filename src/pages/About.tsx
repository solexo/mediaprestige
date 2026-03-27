import { Award, Users, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="py-20 bg-gradient-to-b from-white via-gray-100 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-black">
              À propos de nous
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white via-gray-50 to-white backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-200/50 shadow-2xl">
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 text-center">
                Media Prestige est un distributeur spécialisé en solutions audio premium. Nous proposons nos produits en gros, semi-gros et détail.
              </p>

              <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 text-center">
                Media Prestige Maarif incarne l'excellence dans l'univers du son haut de gamme au Maroc. Basés à Casablanca, nous sommes distributeur spécialisé d'équipements audio premium, sélectionnés parmi les marques les plus prestigieuses au monde telles que JBL, Bose, Sonos et Yamaha.
              </p>

              <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 text-center">
                Animés par une exigence de qualité absolue, nous proposons des solutions audio alliant performance acoustique, design raffiné et innovation technologique. Chaque produit que nous distribuons est choisi avec rigueur pour offrir une expérience sonore immersive, répondant aux standards les plus élevés.
              </p>

              <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 text-center">
                Notre équipe met son expertise au service d'une clientèle exigeante, en offrant un accompagnement personnalisé, du conseil à l'installation.
              </p>

              <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 text-center">
                Media Prestige Maarif, c'est bien plus qu'un distributeur : c'est une signature, une référence pour les passionnés de son d'exception.
              </p>

              <p className="text-gray-800 text-xl md:text-2xl font-bold text-center mt-12">
                L'art du son, à son plus haut niveau.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-2">
                500+
              </div>
              <div className="text-gray-600 text-sm">Events</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-2">
                100+
              </div>
              <div className="text-gray-600 text-sm">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-2">
                10+
              </div>
              <div className="text-gray-600 text-sm">Years</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600 text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
