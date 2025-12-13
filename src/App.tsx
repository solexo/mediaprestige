import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import ChatBot from './components/ChatBot';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Products = lazy(() => import('./pages/Products'));
const Services = lazy(() => import('./pages/Services'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </Suspense>
        <ChatBot />
      </Router>
    </LanguageProvider>
  );
}

export default App;
