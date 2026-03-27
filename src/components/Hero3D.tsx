import { useLanguage } from '../contexts/LanguageContext';

const Hero3D = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative hero-section flex flex-col justify-between bg-black overflow-hidden pt-20 md:pt-28 pb-16 md:pb-32">
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

      {/* Title at the top */}
      <div className="relative z-10 w-full text-center px-6 sm:px-6 lg:px-8 pt-8 md:pt-16">
        <h1 className="text-white text-base sm:text-xl md:text-2xl lg:text-3xl font-orbitron font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
          {t('heroValueProposition')}
        </h1>
      </div>

      {/* Description and CTA at the bottom */}
      <div className="relative z-10 w-full text-center px-6 sm:px-6 lg:px-8">
        <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl font-orbitron font-light tracking-wide max-w-3xl mx-auto leading-relaxed mb-8">
          {t('heroSubtitle')}
        </p>
        <button
          onClick={() => {
            const message = t('whatsappQuoteMessage');
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/212600051612?text=${encodedMessage}`, '_blank');
          }}
          className="bg-white hover:bg-gray-100 text-black font-orbitron font-medium py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm"
        >
          {t('requestQuote')}
        </button>
      </div>
    </section>
  );
};

export default Hero3D;
