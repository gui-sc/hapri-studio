import React, { useState } from 'react';

const portfolioItems = [
  {
    type: 'image',
    title: 'Campanha Digital',
    url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    type: 'image',
    title: 'Design Gráfico',
    url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    type: 'video',
    title: 'Motion Design',
    url: 'https://player.vimeo.com/video/123456789'
  },
  {
    type: 'image',
    title: 'Branding',
    url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    type: 'image',
    title: 'Social Media',
    url: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    type: 'image',
    title: 'Web Design',
    url: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }
];

export function PortfolioGallery() {
  const [selectedItem, setSelectedItem] = useState<null | typeof portfolioItems[0]>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedItem(item)}
          >
            {item.type === 'image' ? (
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            ) : (
              <iframe
                src={item.url}
                className="w-full h-64"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div className="max-w-6xl w-full max-h-[90vh]">
            {selectedItem.type === 'image' ? (
              <img
                src={selectedItem.url}
                alt={selectedItem.title}
                className="w-full h-full object-contain"
              />
            ) : (
              <iframe
                src={selectedItem.url}
                className="w-full h-[80vh]"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}