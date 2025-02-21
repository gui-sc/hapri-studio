import React, { useState } from 'react';
import { Menu, X, Instagram, Linkedin, MessageCircle, Ambulance as BehanceLogo } from 'lucide-react';
import { ContactForm } from './components/ContactForm';
import { PortfolioGallery } from './components/PortfolioGallery';
import { Differentials } from './components/Differentials';

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
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">NOVA</div>
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className={`${isMenuOpen ? 'fixed inset-0 bg-gray-900 flex flex-col items-center justify-center space-y-8 lg:hidden' : 'hidden'} lg:flex lg:items-center lg:space-x-8`}>
            {isMenuOpen && <X className="absolute top-6 right-6" size={24} onClick={() => setIsMenuOpen(false)} />}
            <button onClick={() => scrollToSection('home')} className="hover:text-purple-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-purple-400 transition-colors">Sobre</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-purple-400 transition-colors">Portfólio</button>
            <button onClick={() => scrollToSection('differentials')} className="hover:text-purple-400 transition-colors">Diferenciais</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-purple-400 transition-colors">Contato</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transformamos Ideias em Resultados Digitais
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Marketing digital que impulsiona seu negócio ao próximo nível
          </p>
          <button onClick={() => scrollToSection('contact')} className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
            Fale Comigo
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100 text-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Quem Somos
          </h2>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Somos uma agência de marketing digital apaixonada por criar experiências únicas e resultados extraordinários. Com uma equipe de especialistas criativos, transformamos desafios em oportunidades e ideias em realidade.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nosso Portfólio
          </h2>
          <PortfolioGallery />
        </div>
      </section>

      {/* Differentials Section */}
      <section id="differentials" className="py-20 bg-gray-100 text-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nossos Diferenciais
          </h2>
          <Differentials />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Vamos Criar Algo Incrível Juntos
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12">
            Transforme sua presença digital hoje mesmo
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ContactForm />
            
            <div className="flex flex-col justify-center items-center md:items-start space-y-6">
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