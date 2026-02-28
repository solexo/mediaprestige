import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, MessageCircle, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const product = products.find(p => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-100 to-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 mb-8 text-black hover:text-yellow-400 transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            {t('backToHome')}
          </button>
          <div className="bg-gradient-to-br from-white via-gray-50 to-white backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50 relative">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-blue-400/5 pointer-events-none" />

            <div className="md:flex relative z-10">
              <div className="md:w-1/2 relative">
                <div className="relative h-96 md:h-full overflow-hidden bg-gradient-to-br from-gray-50 to-white">
                  {/* Floating badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {t('new') || 'PRO'}
                    </div>
                  </div>

                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-contain p-8 transform hover:scale-105 transition-transform duration-700"
                  />

                  {/* Subtle shadow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                </div>
              </div>

              <div className="md:w-1/2 p-10 lg:p-12">
                <div className="space-y-6">
                  <div>
                    <h1 className="text-5xl lg:text-6xl font-bold text-black mb-4 leading-tight font-orbitron">{product.name}</h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" />
                  </div>

                  <p className="text-gray-600 text-xl leading-relaxed font-light">
                    {language === 'fr' ? product.descriptionFr : product.descriptionEn}
                  </p>

                  {/* Feature highlights */}
                  <div className="grid grid-cols-2 gap-4 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                      <span className="text-gray-700 font-medium">Premium Quality</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                      <span className="text-gray-700 font-medium">Professional Grade</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                      <span className="text-gray-700 font-medium">Reliable Performance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                      <span className="text-gray-700 font-medium">Expert Support</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <button
                      onClick={() => {
                        const message = `${t('whatsappBuyMessage')} ${product.name}. ${t('whatsappMessage2')}`;
                        const encodedMessage = encodeURIComponent(message);
                        window.open(`https://wa.me/212600051612?text=${encodedMessage}`, '_blank');
                      }}
                      className="flex-1 flex items-center justify-center gap-3 bg-black hover:bg-gray-800 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
                    >
                      <ShoppingCart size={24} />
                      {t('buy')}
                    </button>

                    <button
                      onClick={() => {
                        const message = `${t('whatsappQuoteMessage')} ${product.name}. ${t('whatsappMessage2')}`;
                        const encodedMessage = encodeURIComponent(message);
                        window.open(`https://wa.me/212600051612?text=${encodedMessage}`, '_blank');
                      }}
                      className="flex-1 flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-black px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-yellow-400 transform hover:-translate-y-1 cursor-pointer"
                    >
                      <MessageCircle size={24} />
                      {t('quote')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;