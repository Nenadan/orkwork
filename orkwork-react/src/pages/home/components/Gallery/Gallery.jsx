import gallery01 from '../../../../assets/photos/gallery-01.jpg';
import gallery02 from '../../../../assets/photos/gallery-02.jpg';
import gallery03 from '../../../../assets/photos/gallery-03.jpg';
import gallery04 from '../../../../assets/photos/gallery-04.jpg';
import gallery05 from '../../../../assets/photos/gallery-05.jpg';
import './Gallery.css';

const GALLERY_IMAGES = [
  { src: gallery01, alt: 'Okrečena dnevna soba' },
  { src: gallery02, alt: 'Žuti zid u dnevnoj sobi' },
  { src: gallery03, alt: 'Svetla dnevna soba nakon farbanja' },
  { src: gallery04, alt: 'Dekorativni sivi malter na zidu' },
  { src: gallery05, alt: 'Okrečena fasada kuće' },
];

export default function Gallery() {
  return (
    <section id="galerija" className="gallery-section">
      <div className="gallery-container section-container">
        <div className="gallery-heading-row">
          <div>
            <p className="section-eyebrow">Naši radovi</p>
            <h2 className="gallery-heading section-title">Galerija radova</h2>
          </div>
          <a href="#kontakt-informacije" className="gallery-link button button--outline">Zatražite ponudu</a>
        </div>

        <div className="gallery-grid">
          {GALLERY_IMAGES.map((img) => (
            <div key={img.src} className="gallery-image-wrap">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
