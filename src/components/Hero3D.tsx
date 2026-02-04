import { useLanguage } from '../contexts/LanguageContext';

const Hero3D = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative hero-section flex items-start md:items-center justify-center bg-black overflow-hidden pt-20 md:pt-0">
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

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
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
