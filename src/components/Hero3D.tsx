import { useLanguage } from '../contexts/LanguageContext';

const Hero3D = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative hero-section flex items-center justify-center bg-black overflow-hidden pt-20 md:pt-0 min-h-screen">
      <video
        className="absolute inset-0 w-full h-full object-cover hidden md:block will-change-auto"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/1210.webm" type="video/webm" />
        <source src="/1210.mp4" type="video/mp4" />
        <track kind="captions" />
      </video>
      <img
        src="/1211.gif"
        className="absolute inset-0 w-full h-full object-cover md:hidden"
        alt="background"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />

      <div className="relative z-10 flex flex-col justify-between h-full px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-20">
        <h1 className="text-white text-lg sm:text-xl md:text-2xl font-orbitron font-light tracking-wide leading-relaxed text-center">
          Solutions audio professionnelles haut de gamme pour vos espaces
        </h1>
        <div className="text-center">
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-6 font-orbitron">
            Importateur et spécialiste de marques d'exception telles que JBL, Bose, Sonos et Yamaha. Nous concevons des expériences sonores sur mesure pour les professionnels et les particuliers exigeants.
          </p>
          <button
            onClick={() => {
              const message = "Bonjour, je souhaite demander un devis pour des solutions audio professionnelles.";
              const encodedMessage = encodeURIComponent(message);
              window.open(`https://wa.me/212600051612?text=${encodedMessage}`, '_blank');
            }}
            className="bg-white hover:bg-gray-100 text-black font-bold py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Demander un devis
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-slow-bounce">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400"
        >
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero3D;
