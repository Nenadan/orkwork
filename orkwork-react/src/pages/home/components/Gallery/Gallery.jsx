import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import galleryData from '../../../../data/gallery.json';
import './Gallery.css';

const galleryAssets = import.meta.glob('../../../../assets/posao/**/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
});

function getImageSource(asset) {
  return galleryAssets[`../../../../assets/posao/${asset}`];
}

function GalleryCard({ item }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [leavingIndex, setLeavingIndex] = useState(null);
  const [direction, setDirection] = useState('next');
  const imageCount = item.images.length;
  const activeImage = item.images[activeIndex];

  function showImage(index, nextDirection) {
    if (index === activeIndex) return;

    setLeavingIndex(activeIndex);
    setDirection(nextDirection);
    setActiveIndex(index);
  }

  function showPrevious() {
    showImage(activeIndex === 0 ? imageCount - 1 : activeIndex - 1, 'previous');
  }

  function showNext() {
    showImage(activeIndex === imageCount - 1 ? 0 : activeIndex + 1, 'next');
  }

  return (
    <article
      className="gallery-card surface-card"
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          showPrevious();
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          showNext();
        }
      }}
    >
      <div className="gallery-carousel">
        {leavingIndex !== null && (
          <img
            className={`gallery-carousel-image is-leaving-${direction}`}
            src={getImageSource(item.images[leavingIndex].asset)}
            alt=""
            aria-hidden="true"
          />
        )}
        <img
          key={activeImage.asset}
          className={`gallery-carousel-image is-entering-${direction}`}
          src={getImageSource(activeImage.asset)}
          alt={activeImage.alt}
          loading="lazy"
          onAnimationEnd={() => setLeavingIndex(null)}
        />

        {imageCount > 1 && (
          <>
            <button
              type="button"
              className="gallery-carousel-control gallery-carousel-previous"
              aria-label={`Prethodna fotografija: ${item.name}`}
              onClick={showPrevious}
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              className="gallery-carousel-control gallery-carousel-next"
              aria-label={`Sledeća fotografija: ${item.name}`}
              onClick={showNext}
            >
              <ChevronRight aria-hidden="true" />
            </button>
            <div className="gallery-carousel-dots" aria-label={`Fotografije: ${item.name}`}>
              {item.images.map((image, index) => (
                <button
                  key={image.asset}
                  type="button"
                  className={`gallery-carousel-dot${index === activeIndex ? ' is-active' : ''}`}
                  aria-label={`Prikaži fotografiju ${index + 1} od ${imageCount}: ${item.name}`}
                  aria-current={index === activeIndex ? 'true' : undefined}
                  onClick={() => showImage(index, index > activeIndex ? 'next' : 'previous')}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="gallery-card-copy">
        <h3 className="gallery-card-title">{item.name}</h3>
        <p className="gallery-card-description">{item.description}</p>
      </div>
    </article>
  );
}

function GalleryGroup({ group }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasMoreItems = group.items.length > 3;
  const visibleItems = isExpanded ? group.items : group.items.slice(0, 3);

  return (
    <div className="gallery-group">
      <div className="gallery-group-header">
        <p className="section-eyebrow">{group.eyebrow}</p>
        <h2 className="gallery-heading section-title">{group.title}</h2>
        <p className="gallery-description section-subtitle">{group.description}</p>
      </div>
      <div className="gallery-grid">
        {visibleItems.map((item) => (
          <GalleryCard key={item.name} item={item} />
        ))}
      </div>
      {hasMoreItems && (
        <button
          type="button"
          className="gallery-show-more button button--outline"
          onClick={() => setIsExpanded((current) => !current)}
        >
          {isExpanded ? 'Prikaži manje' : 'Prikaži više'}
        </button>
      )}
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="galerija" className="gallery-section">
      <div className="gallery-container section-container">
        <GalleryGroup group={galleryData.projects} />
        <GalleryGroup group={galleryData.services} />
      </div>
    </section>
  );
}
