import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { categories } from '../data/categories';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Categories = React.memo(() => {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="py-20 bg-gradient-to-b from-white via-gray-100 to-white pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-black font-orbitron">
              Adapter à vos projets
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full" />
            <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
              {language === 'fr'
                ? 'Nos équipements audiovisuels s’intègrent avec précision dans des environnements professionnels et résidentiels exigeants.'
                : 'Our audiovisual equipment integrates precisely into demanding professional and residential environments.'
              }
            </p>
             <p className="text-gray-700 mb-6">
                Hôtellerie, restauration, commerces, bureaux ou résidences privées : chaque espace bénéficie d’une sélection adaptée à ses contraintes techniques et à son niveau d’exigence.
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              return (
                <div
                  key={category.id}
                  className="group relative bg-gradient-to-br from-white via-gray-50 to-white backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 will-change-transform border border-gray-200/50 overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 via-transparent to-green-600/5 group-hover:from-green-400/10 group-hover:to-green-600/10 transition-all duration-500 pointer-events-none" />

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
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">
                        {language === 'fr' ? 'Applications:' : 'Applications:'}
                      </h4>
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
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
});

Categories.displayName = 'Categories';

export default Categories;