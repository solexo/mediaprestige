import React, { useEffect } from 'react';
import { ShoppingCart, MessageCircle, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { products } from '../data/products';

const Products = React.memo(() => {
  const { language, t } = useLanguage();

  useEffect(() => {
    // Preload the first product image
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = products[0].image;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const handleWhatsAppClick = (productName: string, isBuy: boolean = true) => {
    const message = isBuy
      ? `${t('whatsappBuyMessage')} ${productName}. ${t('whatsappMessage2')}`
      : `${t('whatsappQuoteMessage')} ${productName}. ${t('whatsappMessage2')}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/212600051612?text=${encodedMessage}`;

    // Use window.location.href to navigate to WhatsApp
    window.location.href = whatsappUrl;
  };

  const handleQuoteClick = (productName: string) => {
    handleWhatsAppClick(productName, false);
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-400">
            {t('productsTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-yellow-600/0 group-hover:from-yellow-400/10 group-hover:to-yellow-600/10 transition-all duration-500 pointer-events-none" />

              <div className="relative h-64 overflow-hidden">
                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="eager"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={`w-full h-full ${(product.id === 'l1-pro16' || product.id === 'l1pro8') ? 'object-contain' : 'object-cover'} transform group-hover:scale-110 transition-transform duration-700`}
                  />
                </Link>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{product.name}</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {language === 'fr' ? product.descriptionFr : product.descriptionEn}
                </p>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => {
                      const message = `${t('whatsappBuyMessage')} ${product.name}. ${t('whatsappMessage2')}`;
                      const encodedMessage = encodeURIComponent(message);
                      window.open(`https://wa.me/212600051612?text=${encodedMessage}`, '_blank');
                    }}
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 cursor-pointer"
                  >
                    <Play size={18} />
                    {t('buy')}
                  </button>

                  <button
                    onClick={() => {
                      const message = `${t('whatsappQuoteMessage')} ${product.name}. ${t('whatsappMessage2')}`;
                      const encodedMessage = encodeURIComponent(message);
                      window.open(`https://wa.me/212600051612?text=${encodedMessage}`, '_blank');
                    }}
                    className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50 cursor-pointer"
                  >
                    <Play size={18} />
                    {t('quote')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Products.displayName = 'Products';

export default Products;
