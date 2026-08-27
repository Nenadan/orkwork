import React from 'react';
import { ShieldCheck, Sparkles, ThumbsUp, Phone } from 'lucide-react';
import './Hero.css';
import heroImg from '../../../../assets/photos/hero-room-ladder-gradient.png';

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Kvalitetni materijali',
    desc: 'Koristimo proverene boje i materijale.',
  },
  {
    icon: Sparkles,
    title: 'Preciznost i čistoća',
    desc: 'Radove izvodimo uredno i ostavljamo prostor čistim.',
  },
  {
    icon: ThumbsUp,
    title: 'Poštujemo rokove',
    desc: 'Dogovor je dogovor. Uvek na vreme.',
  },
];

export default function Hero() {
  return (
    <section id="pocetna" className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          {/* Left column */}
          <div>
            <h1 className="hero-heading">
              Jednostavno.
              <br />
              Čisto. Kvalitetno.
            </h1>
            <p className="hero-paragraph">
              Molerski radovi za domove, stanove i poslovne prostore u
              Staroj Pazovi i okolini.
            </p>
            <div className="stat-row">
              <div className="stat">
                <b>5+</b>
                <span>godina iskustva</span>
              </div>
              <div className="stat">
                <b>80+</b>
                <span>završenih radova</span>
              </div>
              <div className="stat">
                <b>100%</b>
                <span>poštovanje rokova</span>
              </div>
            </div>

            <div className="hero-actions">
              <a href="#kontakt-informacije" className="hero-btn hero-btn-primary">
                <Phone className="hero-feature-icon" style={{ width: '1rem', height: '1rem', marginTop: 0 }} />
                KONTAKTIRAJTE NAS
              </a>
            </div>

            <div className="hero-features">
              {FEATURES.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="hero-feature">
                  <Icon className="hero-feature-icon" strokeWidth={2} />
                  <div>
                    <p className="hero-feature-title">{title}</p>
                    <p className="hero-feature-desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-image-wrap">
            <img
              src={heroImg}
              alt="Molerski radovi u toku - merdevine, boja i valjak u sobi"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}