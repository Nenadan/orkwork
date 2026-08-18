import React from 'react';

const GALLERY_IMAGES = [
  { src: '/images/gallery-1.jpg', alt: 'Okrečena dnevna soba' },
  { src: '/images/gallery-2.jpg', alt: 'Žuti zid u dnevnoj sobi' },
  { src: '/images/gallery-3.jpg', alt: 'Svetla dnevna soba nakon farbanja' },
  { src: '/images/gallery-4.jpg', alt: 'Dekorativni sivi malter na zidu' },
  { src: '/images/gallery-5.jpg', alt: 'Okrečena fasada kuće' },
];

export default function Gallery() {
  return (
    <section id="galerija" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950">
            Galerija radova
          </h2>
          <a
            href="#galerija"
            className="text-sm font-bold border border-gray-300 rounded-md px-5 py-2.5 hover:border-gray-900 transition-colors"
          >
            POGLEDAJTE VIŠE
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.src}
              className="rounded-xl overflow-hidden aspect-square bg-gray-100"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              {/* TODO: zamenite putanju vašom stvarnom fotografijom radova */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}