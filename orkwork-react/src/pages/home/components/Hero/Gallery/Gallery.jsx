import gallery01 from '../../../../../assets/photos/gallery-01.jpg';
import gallery02 from '../../../../../assets/photos/gallery-02.jpg';
import gallery03 from '../../../../../assets/photos/gallery-03.jpg';
import gallery04 from '../../../../../assets/photos/gallery-04.jpg';
import gallery05 from '../../../../../assets/photos/gallery-05.jpg';

const GALLERY_IMAGES = [
  { src: gallery01, alt: 'Okrečena dnevna soba' },
  { src: gallery02, alt: 'Žuti zid u dnevnoj sobi' },
  { src: gallery03, alt: 'Svetla dnevna soba nakon farbanja' },
  { src: gallery04, alt: 'Dekorativni sivi malter na zidu' },
  { src: gallery05, alt: 'Okrečena fasada kuće' },
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
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}