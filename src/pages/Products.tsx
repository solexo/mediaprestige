import React, { useEffect } from 'react';
import { ShoppingCart, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { products } from '../data/products';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Products = React.memo(() => {
  const { language, t } = useLanguage();
  const location = useLocation();

  // Segment configuration
  const segments = [
    {
      id: 'residential',
      titleFr: 'RÉSIDENTIEL — Pour votre maison',
      titleEn: 'RESIDENTIAL — For your home',
      color: 'from-blue-400 to-cyan-400',
    },
    {
      id: 'professional',
      titleFr: 'PROFESSIONNEL — Pour votre établissement',
      titleEn: 'PROFESSIONAL — For your establishment',
      color: 'from-purple-400 to-pink-400',
    },
    {
      id: 'portable',
      titleFr: 'PORTABLE & DJ — Pour vos événements',
      titleEn: 'PORTABLE & DJ — For your events',
      color: 'from-orange-400 to-red-400',
    },
  ];

  const getProductsBySegment = (segmentId: string) => {
    return products.filter(p => p.segment === segmentId);
  };

  // Scroll to segment when hash changes
  useEffect(() => {
    if (location.hash) {
      const segmentId = location.hash.replace('#', '');
      const element = document.getElementById(segmentId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="py-20 bg-gradient-to-b from-white via-gray-100 to-white pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-black font-orbitron">
              {t('productsTitle')}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto rounded-full mt-6" />
          </div>

          {/* Segments */}
          {segments.map((segment) => {
            const segmentProducts = getProductsBySegment(segment.id);
            if (segmentProducts.length === 0) return null;

            return (
              <div key={segment.id} id={segment.id} className="mb-20 scroll-mt-32">
                {/* Segment Header */}
                <div className="mb-12">
                  <div className="inline-flex items-center gap-4 mb-3">
                    <div className={`h-1 w-12 bg-gradient-to-r ${segment.color} rounded-full`} />
                    <h3 className="text-3xl md:text-4xl font-bold text-black font-orbitron">
                      {language === 'fr' ? segment.titleFr : segment.titleEn}
                    </h3>
                  </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {segmentProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="group relative bg-gradient-to-br from-white via-gray-50 to-white backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 will-change-transform border border-gray-200/50 overflow-hidden"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {/* Decorative gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 via-transparent to-blue-400/5 group-hover:from-teal-400/10 group-hover:to-blue-400/10 transition-all duration-500 pointer-events-none" />

                      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
                        {/* Floating badge */}
                        <div className="absolute top-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-teal-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                            {t('inStock')}
                          </div>
                        </div>

                        <Link to={`/products/${product.id}`}>
                          <img
                            src={product.image}
                            alt={product.name}
                            loading="lazy"
                            className="w-full h-full object-contain p-6 transform group-hover:scale-110 transition-transform duration-700"
                          />
                        </Link>

                        {/* Subtle shadow effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                      </div>

                      <div className="p-6 relative z-10">
                        <h3 className="text-xl font-bold text-black mb-2 group-hover:text-teal-600 transition-colors duration-300">{product.name}</h3>
                        {product.typeFr && (
                          <div className="text-teal-600 font-semibold text-xs mb-2">
                            {language === 'fr' ? product.typeFr : product.type}
                          </div>
                        )}
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3">
                          {language === 'fr' ? product.descriptionFr : product.descriptionEn}
                        </p>

                        <div className="flex flex-col gap-3">
                          <button
                            onClick={() => {
                              const message = `${t('whatsappBuyMessage')} ${product.name}. ${t('whatsappMessage2')}`;
                              const encodedMessage = encodeURIComponent(message);
                              window.open(`https://wa.me/212600051612?text=${encodedMessage}`, '_blank');
                            }}
                            className="flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 cursor-pointer"
                          >
                            <ShoppingCart size={18} />
                            {t('buy')}
                          </button>

                          <button
                            onClick={() => {
                              const message = `${t('whatsappQuoteMessage')} ${product.name}. ${t('whatsappMessage2')}`;
                              const encodedMessage = encodeURIComponent(message);
                              window.open(`https://wa.me/212600051612?text=${encodedMessage}`, '_blank');
                            }}
                            className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-black px-4 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200 hover:border-yellow-400 transform hover:-translate-y-1 cursor-pointer"
                          >
                            <MessageCircle size={18} />
                            {t('quote')}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
});

Products.displayName = 'Products';

export default Products;