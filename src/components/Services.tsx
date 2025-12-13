import { Settings, PartyPopper, Package, Wrench, Mic, Music } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Settings,
      titleKey: 'service1Title',
      descKey: 'service1Desc',
      gradient: 'from-yellow-400 to-yellow-600',
    },
    {
      icon: PartyPopper,
      titleKey: 'service2Title',
      descKey: 'service2Desc',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Package,
      titleKey: 'service3Title',
      descKey: 'service3Desc',
      gradient: 'from-yellow-400 to-yellow-500',
    },
    {
      icon: Wrench,
      titleKey: 'service4Title',
      descKey: 'service4Desc',
      gradient: 'from-yellow-600 to-yellow-700',
    },
    {
      icon: Mic,
      titleKey: 'service5Title',
      descKey: 'service5Desc',
      gradient: 'from-yellow-300 to-yellow-400',
    },
    {
      icon: Music,
      titleKey: 'service6Title',
      descKey: 'service6Desc',
      gradient: 'from-orange-400 to-red-400',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-400">
            {t('servicesTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-yellow-600/0 group-hover:from-yellow-400/5 group-hover:to-yellow-600/5 rounded-2xl transition-all duration-500" />

                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon size={32} className="text-black" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">
                    {t(service.titleKey)}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {t(service.descKey)}
                  </p>
                </div>

                <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
