import { useState, useEffect } from 'react';

const solutions = [
  {
    id: 1,
    title: 'Bundles Complets',
    description: 'Solutions tout-en-un pour sonorisation domestique avec amplificateurs, enceintes et caissons intégrés.',
    features: ['Amplificateur Bose IZA 2120-HZ (2x120W)', 'Enceintes Bose DM8C (plafond)', 'Caisson de basses Acoustimass 3', 'Connectivité multi-room'],
    logo: '/logos/ttenun.jpg',
    logoAlt: 'Bundles Complets'
  },
  {
    id: 2,
    title: 'Home Cinéma',
    description: 'Systèmes de home cinéma immersifs avec Dolby Atmos pour une expérience cinématographique exceptionnelle.',
    features: ['Barre de son Bose Smart Ultra (Dolby Atmos)', 'Caisson Ultra 700 sans fil (300W)', 'Enceintes surround Bose 251', 'Streaming multi-plateforme'],
    logo: '/logos/dolbyatmos.gif',
    logoAlt: 'Dolby Atmos'
  },
  {
    id: 3,
    title: 'Home Theater',
    description: 'Configurations avancées pour théâtres domestiques avec équipements professionnels et acoustique optimisée.',
    features: ['Système L1 Pro16 Bose (16 canaux)', 'Enceintes Bose 360P EC (360°)', 'Amplificateur ZA 250-LA (DSP intégré)', 'Calibration acoustique automatique'],
    logo: '/logos/hometheater.jpg',
    logoAlt: 'Home Theater'
  }
];

const SolutionsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % solutions.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentSolution = solutions[currentIndex];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-200 p-8 min-h-[400px] flex items-center justify-center">
        {/* Animated slide */}
        <div 
          className={`transition-all duration-500 ease-in-out transform ${
            isAnimating 
              ? 'opacity-0 translate-x-20 scale-95' 
              : 'opacity-100 translate-x-0 scale-100'
          }`}
        >
          <div className="text-center">
            <div className="mb-6 flex items-center justify-center">
              <img 
                src={currentSolution.logo} 
                alt={currentSolution.logoAlt} 
                className="h-24 w-auto object-contain"
              />
            </div>
            <h3 className="text-3xl font-bold text-black mb-4 font-orbitron">{currentSolution.title}</h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">{currentSolution.description}</p>
            <ul className="space-y-2 text-sm text-gray-700 max-w-lg mx-auto">
              {currentSolution.features.map((feature, idx) => (
                <li key={idx} className="flex items-center justify-center">
                  <span className="w-2 h-2 bg-teal-400 rounded-full mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {solutions.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex 
                  ? 'bg-teal-400 scale-125' 
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionsCarousel;
