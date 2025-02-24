import React, { useState } from "react";
import { ContactForm } from "./components/ContactForm";
import { PortfolioGallery } from "./components/PortfolioGallery";
import { Differentials } from "./components/Differentials";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark as X } from "react-icons/fa6";
import {
    FaBars as Menu,
    FaInstagram as Instagram,
    FaWhatsapp as Whatsapp,
    FaBehance as Behance,
} from "react-icons/fa";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-gray-700 text-white relative">
            <nav className="fixed w-full bg-gray-700/95 backdrop-blur-sm z-50">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold text-white">
                        <img
                            src="./logo.png"
                            alt="Logo Hapri Studio"
                            className="w-10"
                        />
                    </div>
                    <div>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-white"
                        >
                            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </nav>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-600 to-gray-900 text-white flex flex-col items-center justify-center space-y-16 z-50"
                    >
                        <X
                            className="absolute top-6 right-6 text-white cursor-pointer"
                            size={36}
                            onClick={() => setIsMenuOpen(false)}
                        />
                        {[
                            "home",
                            "sobre",
                            "portfolio",
                            "diferenciais",
                            "contato",
                        ].map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className="text-5xl font-extrabold hover:text-orange-300 transition-colors"
                            >
                                {section.charAt(0).toUpperCase() +
                                    section.slice(1)}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section com animação de entrada */}
            <section
                id="home"
                className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-600 to-gray-900 pt-16 "
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="container mx-auto px-4 text-center"
                        {...fadeIn}
                    >
                        <img
                            src="./nome.png"
                            alt="Logo Hapri Studio"
                            className="w-60 lg:w-80 mx-auto mb-4"
                        />
                        <h1 className="text-2xl md:text-4xl font-bold mb-6">
                            Transforme sua marca, aumente seu engajamento e
                            conquiste mais clientes com estratégias criativas e
                            eficazes.
                        </h1>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <button
                                onClick={() => scrollToSection("contato")}
                                className="relative overflow-hidden text-white px-4 py-3 rounded-full text-lg font-semibold transition-all duration-700 group w-36  "
                            >
                                <span className="absolute inset-y-0 left-0 bg-orange-500 rounded-e-full w-1/3 transition-all duration-700 group-hover:w-full"></span>
                                <span className="relative z-10">
                                    Fale Conosco
                                </span>
                            </button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* sobre Section */}
            <section id="sobre" className="py-20 bg-gray-100 text-gray-900">
                <motion.div
                    className="container mx-auto px-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        Nós somos a Hapri Studio
                    </h2>
                    <p className="text-xl text-center max-w-3xl mx-auto">
                        Uma agencia de Marketing e Social Media, que busca a
                        estratégia perfeita para alcançar os resultados que a
                        sua empresa necessita!
                    </p>
                </motion.div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="py-20 bg-gray-700">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
                        Nosso Portfólio
                    </h2>
                    <p className="text-xl sm:text-2xl font-semibold text-center mb-12">
                        Clique para ampliar
                    </p>
                    <PortfolioGallery />
                </div>
            </section>

            {/* diferenciais Section */}
            <section
                id="diferenciais"
                className="py-20 bg-gray-100 text-gray-900"
            >
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Nossos Diferenciais
                    </h2>
                    <Differentials />
                </div>
            </section>

            {/* contato Section */}
            <section id="contato" className="py-20 bg-gray-700">
                <motion.div
                    className="container mx-auto px-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                        A sua empresa precisa se posicionar da maneira correta!
                    </h2>
                    <p className="text-xl text-center text-gray-300 mb-12">
                        Entre em contato
                    </p>
                    <div className="grid gap-12 w-full sm:w-1/2 mx-auto">
                        <ContactForm />
                        <div className="w-full flex flex-col justify-center items-center space-y-6">
                            <h3 className="text-2xl font-semibold mb-4">
                                Conecte-se Conosco
                            </h3>
                            <div className="flex space-x-6">
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-orange-400 transition-colors"
                                >
                                    <Instagram size={32} />
                                </a>
                                <a
                                    href="https://behance.net"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-orange-400 transition-colors"
                                >
                                    <Behance size={32} />
                                </a>
                                <a
                                    href="https://wa.me/1234567890"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-orange-400 transition-colors"
                                >
                                    <Whatsapp size={32} />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}

export default App;
