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
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 mb-8 text-white hover:text-yellow-400 transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            {t('backToHome')}
          </button>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="relative h-96 md:h-full overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className={`w-full h-full ${product.id === 'l1-pro16' ? 'object-contain' : 'object-cover'}`}
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <h1 className="text-4xl font-bold text-white mb-4">{product.name}</h1>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                  {language === 'fr' ? product.descriptionFr : product.descriptionEn}
                </p>

                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => {
                      const message = `${t('whatsappBuyMessage')} ${product.name}. ${t('whatsappMessage2')}`;
                      const encodedMessage = encodeURIComponent(message);
                      window.open(`https://wa.me/212600051612?text=${encodedMessage}`, '_blank');
                    }}
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 cursor-pointer"
                  >
                    <Play size={20} />
                    {t('buy')}
                  </button>

                  <button
                    onClick={() => {
                      const message = `${t('whatsappQuoteMessage')} ${product.name}. ${t('whatsappMessage2')}`;
                      const encodedMessage = encodeURIComponent(message);
                      window.open(`https://wa.me/212600051612?text=${encodedMessage}`, '_blank');
                    }}
                    className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50 cursor-pointer"
                  >
                    <Play size={20} />
                    {t('quote')}
                  </button>
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