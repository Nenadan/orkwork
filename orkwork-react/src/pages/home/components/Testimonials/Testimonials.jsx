import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    rating: 5,
    quote:
      'Došli su tačno na dogovoreni termin, radili uredno i pokrili sav nameštaj. Stan je ostao čist kao da nije bilo radova.',
    name: 'Nenad R.',
    location: 'Zemun',
    initials: 'NR',
  },
  {
    rating: 5,
    quote:
      'Fasada izgleda kao nova. Poštena cena, brz odgovor na poruke i posao završen tačno u dogovorenom roku.',
    name: 'Alen Č.',
    location: 'Nova Pazova',
    initials: 'AČ',
  },
  {
    rating: 5,
    quote:
      'Preporučujem svima koji traže ozbiljnog i preciznog molera. Gletovanje i krečenje na najvišem nivou.',
    name: 'Zoran U.',
    location: 'Golubinci',
    initials: 'ZU',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-heading">Šta kažu klijenti</h2>
          <p className="testimonials-subtitle">
            Nekoliko utisaka ljudi sa kojima smo sarađivali.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map(({ rating, quote, name, location, initials }) => (
            <div key={name} className="testimonial-card">
              <div className="testimonial-stars">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="testimonial-quote">&ldquo;{quote}&rdquo;</p>
              <div className="testimonial-author">
                <span className="testimonial-avatar">{initials}</span>
                <div>
                  <p className="testimonial-name">{name}</p>
                  <p className="testimonial-location">{location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}