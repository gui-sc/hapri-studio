import React, { useState } from 'react';
import { Menu, X, Instagram, Linkedin, MessageCircle, Ambulance as BehanceLogo } from 'lucide-react';
import { ContactForm } from './components/ContactForm';
import { PortfolioGallery } from './components/PortfolioGallery';
import { Differentials } from './components/Differentials';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-700 text-white relative">
      <nav className="fixed w-full bg-gray-700/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            <img src="./logo.png" alt="Logo Hapri Studio" className='w-10' />
          </div>
          <div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-white">
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
    </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-600 to-gray-900 text-white flex flex-col items-center justify-center space-y-16 z-50"
          >
            <X
              className="absolute top-6 right-6 text-white cursor-pointer"
              size={36}
              onClick={() => setIsMenuOpen(false)}
            />
            {['home', 'about', 'portfolio', 'differentials', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-5xl font-extrabold hover:text-purple-300 transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

          

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-600 to-gray-900 pt-16">
        <div className="container mx-auto px-4 text-center">
          <img src="./nome.png" alt="Logo Hapri Studio" className="w-60 lg:w-80 mx-auto mb-4" />
          <h1 className="text-2xl md:text-4xl font-bold mb-6">
          Transforme sua marca, aumente seu engajamento e conquiste mais clientes com estratégias criativas e eficazes.
          </h1>
          <button onClick={() => scrollToSection('contact')} 
          className="bg-gradient-to-br from-yellow-800 via-yellow-300 to-yellow-800 hover:bg-gradient-to-tr hover:from-yellow-800 hover:via-yellow-500 hover:to-yellow-800 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg">
            Fale Comigo
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100 text-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Nós somos a Hapri Studio</h2>
          <p className="text-xl text-center max-w-3xl mx-auto">
          Uma agencia de Marketing e Social Media, que busca a estratégia perfeita para alcançar os resultados que a sua empresa necessita!
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-700">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nosso Portfólio</h2>
          <PortfolioGallery />
        </div>
      </section>

      {/* Differentials Section */}
      <section id="differentials" className="py-20 bg-gray-100 text-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nossos Diferenciais</h2>
          <Differentials />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-700">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">A sua empresa precisa se posicionar da maneira correta!</h2>
          <p className="text-xl text-center text-gray-300 mb-12">
          Entre em contato
          </p>
          <div className="grid gap-12 w-full sm:w-1/2 mx-auto">
            <ContactForm />
            <div className="w-full flex flex-col justify-center items-center space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Conecte-se Conosco</h3>
              <div className="flex space-x-6">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  <Instagram size={32} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  <Linkedin size={32} />
                </a>
                <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  <BehanceLogo size={32} />
                </a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  <MessageCircle size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
