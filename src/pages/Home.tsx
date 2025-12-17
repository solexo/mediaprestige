import Header from '../components/Header';
import Hero3D from '../components/Hero3D';
import Products from '../components/Products';
import Services from '../components/Services';
import Footer from '../components/Footer';
import AnimatedProductBar from '../components/AnimatedProductBar';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Play } from 'lucide-react';

const AnimationSection = () => {
  const { t } = useLanguage();

  return (
    <section className="md:hidden py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <img
          src="/1212.gif"
          className="w-full h-auto rounded-lg"
          alt="animation"
        />
      </div>
    </section>
  );
};

const Home = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero3D />
      <Products />
      <AnimatedProductBar />
      <AnimationSection />
      <Services />
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">{t('expertiseTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">{t('expertiseSubtitle')}</h3>
              <p className="text-gray-300 mb-6">
                {t('expertiseDesc')}
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• {t('expertiseList1')}</li>
                <li>• {t('expertiseList2')}</li>
                <li>• {t('expertiseList3')}</li>
                <li>• {t('expertiseList4')}</li>
              </ul>
            </div>
            <div className="text-white">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-lg">
                  <img src="/logos/bose.png" alt="Bose" className="h-16 w-auto" width="64" height="64" />
                </div>
                <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-lg">
                  <img src="/logos/jbl.png" alt="JBL" className="h-16 w-auto" width="64" height="64" />
                </div>
                <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-lg">
                  <img src="/logos/sony.png" alt="Sony" className="h-16 w-auto" width="64" height="64" />
                </div>
                <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-lg">
                  <img src="/logos/harman.png" alt="Harman" className="h-16 w-auto" width="64" height="64" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;