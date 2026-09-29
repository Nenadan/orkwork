import { useLayoutEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import posao01 from '../../../../assets/posao/posao_1.jpg';
import posao02 from '../../../../assets/posao/posao_2.jpg';
import posao03 from '../../../../assets/posao/posao_3.jpg';
import posao04 from '../../../../assets/posao/posao_4.jpg';
import posao05 from '../../../../assets/posao/posao_5.jpg';
import './Gallery.css';

const GALLERY_IMAGES = [
  { src: posao01, alt: 'Oslikani motiv Srbije sa zastavom na belom zidu' },
  { src: posao02, alt: 'Dečji zidni mural sa medvedićem i pčelama' },
  { src: posao03, alt: 'Dekorativni braon zid sa teksturom u dnevnoj sobi' },
  { src: posao04, alt: 'Sveže okrečen beli zid i plafon u sobi' },
  { src: posao05, alt: 'Dečji mural sa jelenčetom i šumskim životinjama' },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const isOpen = activeIndex !== null;
  const activeImage = isOpen ? GALLERY_IMAGES[activeIndex] : null;

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) return;

    const opener = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
      if (opener instanceof HTMLElement && opener.isConnected) opener.focus();
    };
  }, [isOpen]);

  function showPrevious() {
    setActiveIndex((current) => (current === 0 ? GALLERY_IMAGES.length - 1 : current - 1));
  }

  function showNext() {
    setActiveIndex((current) => (current === GALLERY_IMAGES.length - 1 ? 0 : current + 1));
  }

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
          {GALLERY_IMAGES.map((img, index) => (
            <button
              key={img.src}
              type="button"
              className="gallery-image-wrap"
              aria-label={`Uvećaj fotografiju ${index + 1} od ${GALLERY_IMAGES.length}`}
              onClick={(event) => {
                event.currentTarget.focus();
                setActiveIndex(index);
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
              />
              <span className="gallery-image-action" aria-hidden="true">
                <Maximize2 size={18} />
              </span>
            </button>
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="gallery-lightbox"
        aria-label="Pregled fotografija radova"
        onClick={(event) => {
          if (event.target === dialogRef.current) setActiveIndex(null);
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') {
            event.preventDefault();
            showPrevious();
          } else if (event.key === 'ArrowRight') {
            event.preventDefault();
            showNext();
          }
        }}
        onClose={() => setActiveIndex(null)}
      >
        {activeImage && (
          <div
            className="gallery-lightbox-content"
            onClick={(event) => {
              if (event.target === event.currentTarget) setActiveIndex(null);
            }}
          >
            <img className="gallery-lightbox-image" src={activeImage.src} alt={activeImage.alt} />

            <button
              ref={closeButtonRef}
              type="button"
              className="gallery-lightbox-control gallery-lightbox-close"
              aria-label="Zatvori fotografiju"
              onClick={() => setActiveIndex(null)}
            >
              <X size={22} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="gallery-lightbox-control gallery-lightbox-previous"
              aria-label="Prethodna fotografija"
              onClick={showPrevious}
            >
              <ChevronLeft size={24} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="gallery-lightbox-control gallery-lightbox-next"
              aria-label="Sledeća fotografija"
              onClick={showNext}
            >
              <ChevronRight size={24} aria-hidden="true" />
            </button>
            <p className="gallery-lightbox-count" aria-live="polite">
              {activeIndex + 1} / {GALLERY_IMAGES.length}
            </p>
          </div>
        )}
      </dialog>
    </section>
  );
}
