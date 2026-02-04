import { useLanguage } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/Services';

const ServicesPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
            {t('servicesTitle')}
          </h1>
          <Services />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;