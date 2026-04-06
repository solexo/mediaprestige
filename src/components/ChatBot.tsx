import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { products } from '../data/products';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  options?: string[];
  image?: string;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState('greeting');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greetingMessage: Message = {
        id: '1',
        text: language === 'fr'
          ? 'Bonjour 👋 et bienvenue chez Media Prestige ! Comment puis-je vous aider aujourd\'hui ?'
          : 'Hello 👋 and welcome to Media Prestige! How can I help you today?',
        isBot: true,
        options: [
          language === 'fr' ? 'Voir les produits' : 'View Products',
          language === 'fr' ? 'Demander un devis' : 'Request Quote',
          language === 'fr' ? 'Qui sommes-nous ?' : 'About Us',
          language === 'fr' ? 'Contact' : 'Contact'
        ],
        timestamp: new Date()
      };
      setMessages([greetingMessage]);
    }
  }, [isOpen, language]);

  const handleOptionClick = (option: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: option,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      let botResponse: Message;

      if (option.includes('produits') || option.includes('Products')) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: language === 'fr'
            ? 'Voici notre sélection de produits audio professionnels Bose, JBL et Harman. Lequel vous intéresse ?'
            : 'Here is our selection of professional audio products from Bose, JBL and Harman. Which one interests you?',
          isBot: true,
          options: products.slice(0, 6).map(p => p.name).concat([language === 'fr' ? 'Voir plus' : 'See More', language === 'fr' ? 'Retour' : 'Back']),
          timestamp: new Date()
        };
      } else if (option.includes('Acheter maintenant') || option.includes('Buy Now')) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: language === 'fr'
            ? 'Excellent choix ! Pour compléter votre commande, contactez-nous maintenant :\n\nNotre équipe vous aidera à finaliser votre achat et répondra à toutes vos questions. 😊'
            : 'Great choice! To complete your order, contact us now:\n\nOur team will help you finalize your purchase and answer all your questions. 😊',
          isBot: true,
          options: ['WhatsApp', language === 'fr' ? 'Téléphone' : 'Phone', language === 'fr' ? 'Retour' : 'Back'],
          timestamp: new Date()
        };
      } else if (option.includes('devis') || option.includes('Quote')) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: language === 'fr'
            ? 'Parfait ! Pour recevoir un devis immédiat et personnalisé, contactez-nous directement :\n\nWhatsApp 👉 https://wa.me/212600051612\n\nTéléphone 📞 +212600051612\n\nNotre équipe vous répondra dans les plus brefs délais ! 😊'
            : 'Perfect! To receive an immediate and personalized quote, contact us directly:\n\nWhatsApp 👉 https://wa.me/212600051612\n\nPhone 📞 +212600051612\n\nOur team will respond as soon as possible! 😊',
          isBot: true,
          options: ['WhatsApp', language === 'fr' ? 'Téléphone' : 'Phone', language === 'fr' ? 'Retour' : 'Back'],
          timestamp: new Date()
        };
      } else if (option.includes('Qui sommes-nous') || option.includes('About Us')) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: language === 'fr'
            ? 'Media Prestige est une entreprise spécialisée dans la présentation et la vente de produits audio de qualité. Nous proposons une sélection soigneusement choisie d\'équipements Bose, JBL et Harman, et nous accompagnons chaque client depuis l\'information jusqu\'à l\'achat final, avec un service rapide et professionnel. 🎧✨'
            : 'Media Prestige is a company specialized in the presentation and sale of quality audio products. We offer a carefully selected range of Bose, JBL and Harman equipment, and we accompany each client from information to final purchase, with fast and professional service. 🎧✨',
          isBot: true,
          options: [
            language === 'fr' ? 'Voir les produits' : 'View Products',
            language === 'fr' ? 'Voir les services' : 'View Services',
            language === 'fr' ? 'Retour' : 'Back'
          ],
          timestamp: new Date()
        };
      } else if (option.includes('Contact') || option.includes('contact')) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: language === 'fr'
            ? 'Contactez-nous pour toute question ou devis :\n\n📞 Téléphone : +212 600 051 612\n📧 Email : contact@mediaprestige.ma\n💬 WhatsApp : https://wa.me/212600051612\n\nNous sommes là pour vous aider ! 😊'
            : 'Contact us for any questions or quotes:\n\n📞 Phone: +212 600 051 612\n📧 Email: contact@mediaprestige.ma\n💬 WhatsApp: https://wa.me/212600051612\n\nWe are here to help you! 😊',
          isBot: true,
          options: ['WhatsApp', language === 'fr' ? 'Téléphone' : 'Phone', language === 'fr' ? 'Retour' : 'Back'],
          timestamp: new Date()
        };
      } else if (option === 'WhatsApp') {
        window.open('https://wa.me/212600051612', '_blank');
        return;
      } else if (option.includes('Téléphone') || option.includes('Phone')) {
        window.open('tel:+212600051612', '_blank');
        return;
      } else if (products.some(p => p.name === option)) {
        const product = products.find(p => p.name === option);
        if (product) {
          botResponse = {
            id: (Date.now() + 1).toString(),
            text: language === 'fr'
              ? `Voici ${product.name} :\n\n📝 ${product.descriptionFr}\n\n✨ Points forts :\n• Équipement professionnel Bose/JBL/Harman\n• Qualité audio exceptionnelle\n• Installation et support technique\n\n💰 Prix sur devis\n\nSouhaitez-vous un devis ou finaliser votre achat ? 😊`
              : `Here is ${product.name}:\n\n📝 ${product.descriptionEn}\n\n✨ Key Features:\n• Professional Bose/JBL/Harman equipment\n• Exceptional audio quality\n• Installation and technical support\n\n💰 Price on quote\n\nWould you like a quote or finalize your purchase? 😊`,
            image: product.image,
            isBot: true,
            options: [
              language === 'fr' ? 'Acheter maintenant' : 'Buy Now',
              language === 'fr' ? 'Demander un devis' : 'Request Quote',
              language === 'fr' ? 'Voir plus de produits' : 'See More Products',
              language === 'fr' ? 'Retour' : 'Back'
            ],
            timestamp: new Date()
          };
        } else {
          botResponse = {
            id: (Date.now() + 1).toString(),
            text: language === 'fr' ? 'Produit non trouvé. Voulez-vous voir notre sélection complète ?' : 'Product not found. Would you like to see our complete selection?',
            isBot: true,
            options: [language === 'fr' ? 'Voir les produits' : 'View Products', language === 'fr' ? 'Retour' : 'Back'],
            timestamp: new Date()
          };
        }
      } else if (option.includes('Voir plus') || option.includes('See More')) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: language === 'fr'
            ? 'Voici plus de produits de notre catalogue :'
            : 'Here are more products from our catalog:',
          isBot: true,
          options: products.slice(6, 12).map(p => p.name).concat([language === 'fr' ? 'Retour' : 'Back']),
          timestamp: new Date()
        };
      } else if (option.includes('Retour') || option.includes('Back')) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: language === 'fr'
            ? 'Que puis-je faire d\'autre pour vous aider ? 😊'
            : 'What else can I help you with? 😊',
          isBot: true,
          options: [
            language === 'fr' ? 'Voir les produits' : 'View Products',
            language === 'fr' ? 'Demander un devis' : 'Request Quote',
            language === 'fr' ? 'Qui sommes-nous ?' : 'About Us',
            language === 'fr' ? 'Contact' : 'Contact'
          ],
          timestamp: new Date()
        };
      } else {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: language === 'fr'
            ? 'Merci de votre intérêt pour Media Prestige ! Notre équipe est là pour vous accompagner dans votre projet audio. N\'hésitez pas à nous contacter. 😊'
            : 'Thank you for your interest in Media Prestige! Our team is here to accompany you in your audio project. Don\'t hesitate to contact us. 😊',
          isBot: true,
          options: [language === 'fr' ? 'Contact' : 'Contact', language === 'fr' ? 'Retour' : 'Back'],
          timestamp: new Date()
        };
      }

      setMessages(prev => [...prev, botResponse]);
    }, 500);
  };


  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-teal-400 hover:bg-teal-500 text-black p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50"
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">MP</span>
              </div>
              <div>
                <h3 className="text-black font-semibold text-sm">Media Prestige</h3>
                <p className="text-gray-600 text-xs">Assistant virtuel</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] ${message.isBot ? 'bg-gray-800' : 'bg-teal-400'} rounded-2xl px-4 py-2`}>
                  {message.image && (
                    <div className="mb-3">
                      <img
                        src={message.image}
                        alt="Product"
                        className="w-full max-w-32 h-32 object-contain rounded-lg bg-white/10"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <p className={`text-sm ${message.isBot ? 'text-white' : 'text-black'} whitespace-pre-line`}>
                    {message.text}
                  </p>
                  {message.options && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {message.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleOptionClick(option)}
                          className="bg-teal-400 hover:bg-teal-500 text-black text-xs px-3 py-1 rounded-full transition-colors"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

        </div>
      )}
    </>
  );
};

export default ChatBot;