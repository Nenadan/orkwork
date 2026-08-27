import React, { useEffect, useRef, useState } from 'react';
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

const STATS = [
  { value: 5, suffix: '+', label: 'godina iskustva' },
  { value: 80, suffix: '+', label: 'završenih radova' },
  { value: 100, suffix: '%', label: 'poštovanje rokova' },
];

// Animira broj od 0 do target-a, samo kad je 'trigger' true (kad sekcija
// udje u vidno polje) - ease-out krivulja, brzo krene pa uspori pred kraj.
function useCountUp(target, trigger, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = null;
    let raf;

    function step(timestamp) {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [trigger, target, duration]);

  return value;
}

function Stat({ value, suffix, label, trigger }) {
  const count = useCountUp(value, trigger);
  return (
    <div className="stat">
      <b>
        {count}
        {suffix}
      </b>
      <span>{label}</span>
    </div>
  );
}

function StatRow() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // animira se samo jednom
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [inView]);

  return (
    <div className="stat-row" ref={ref}>
      {STATS.map((stat) => (
        <Stat key={stat.label} {...stat} trigger={inView} />
      ))}
    </div>
  );
}

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
              Molerski radovi za domove, stanove i poslovne prostore u Staroj Pazovi i okolini — gletovanje, krečenje i fasade, uredno i na vreme.
            </p>

            <StatRow />

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