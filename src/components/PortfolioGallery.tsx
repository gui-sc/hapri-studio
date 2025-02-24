import React, { useState } from 'react';
import { motion } from 'framer-motion';
const portfolioItems = [
  {
    type: 'image',
    title: 'Vestuário',
    urls: ['./vestuario.png']
  },
  {
    type: 'image',
    title: 'Team Manaus',
    urls: ['./esportes.png']
  },
  {
    type: 'image',
    title: 'Perfor',
    urls: ['./divulgacao.png', './empresarial.png','./anuncios.png', './dicas.png']
  },
  {
    type: 'video',
    title: 'Motion Design',
    urls: ['https://player.vimeo.com/video/123456789']
  },
];

export function PortfolioGallery() {
  const [selectedItem, setSelectedItem] = useState<null | typeof portfolioItems[0]>(null);
  const [index, setIndex] = useState(0);

  const handleSelectItem = (item: typeof portfolioItems[0]) => {
    setSelectedItem(item);
    setIndex(0);
  }
  return (
    <>
    <div className='w-full flex justify-center items-center flex-col'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative group cursor-pointer overflow-hidden rounded-lg"
            onClick={() => handleSelectItem(item)}
          >
            {/* focar na parte de cima da imagem */}
            {item.type === 'image' ? (
              <img
                src={item.urls[0]}
                alt={item.title}
                className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110 object-top"
              />
            ) : (
              <iframe
                src={item.urls[0]}
                className="w-full h-96"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Modal com botões para passar as fotos*/}
      {selectedItem && (
        <div
          className="h-screen fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-around p-4"
          onClick={() => setSelectedItem(null)}
        >
          <button
            className="text-white text-3xl"
            onClick={(e) => {
              e.stopPropagation();
              if(index > 0) setIndex(index-1)
            }}
          >
            {'<'}
          </button>
          <div className="max-w-6xl w-auto max-h-[100vh]">
            {selectedItem.type === 'image' ? (
              <img
                src={selectedItem.urls[index]}
                alt={selectedItem.title}
                className="w-auto max-h-[95vh] object-contain"
              />
            ) : (
              <iframe
                src={selectedItem.urls[index]}
                className="w-full h-[80vh]"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            )}
          </div>
          <button
            className="text-white text-3xl"
            onClick={(e) => {
              e.stopPropagation();
              if((index +1) < selectedItem.urls.length) setIndex(index+1)
            }}
          >
            {'>'}
          </button>
        </div>
      )}

    </div>
    </>
  );
}