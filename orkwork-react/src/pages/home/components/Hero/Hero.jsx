import { useEffect, useState } from 'react';
import { ArrowRight, Clock3, House, PaintRoller, ShieldCheck } from 'lucide-react';
import './Hero.css';
import heroImg from '../../../../assets/hero/hero_1.png';

const BENEFITS = [
  { icon: ShieldCheck, label: 'Kvalitetan rad' },
  { icon: Clock3, label: 'Držimo se dogovora' },
  { icon: House, label: 'Čiste i uredne prostorije' },
  { icon: PaintRoller, label: 'Profesionalna oprema' },
];

const HERO_STATS = [
  { value: 5, suffix: '+', label: 'godina iskustva' },
  { value: 80, suffix: '+', label: 'završenih poslova' },
  { value: 100, suffix: '%', label: 'poštovanje rokova' },
];

function HeroStat({ value, suffix, label }) {
  const [count, setCount] = useState(() => {
    if (typeof window === 'undefined') return 0;

    return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? value : 0;
  });

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (motionPreference.matches) return undefined;

    let animationFrame;
    let startTime;
    const duration = 1200;

    const animateCount = (timestamp) => {
      if (startTime === undefined) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;

      setCount(Math.round(value * easedProgress));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(animateCount);
      }
    };

    animationFrame = window.requestAnimationFrame(animateCount);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [value]);

  return (
    <div className="hero-stat">
      <span className="hero-stat-value">
        {count}
        {suffix}
      </span>
      <span className="hero-stat-label">{label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="pocetna" className="hero-section">
      <div className="hero-main">
        <img
          src={heroImg}
          alt="Moler valjkom nanosi boju na zid u svetloj sobi"
          className="hero-background-image"
          fetchPriority="high"
        />
        <div className="hero-copy-wrap section-container">
          <div className="hero-copy">
            <p className="hero-eyebrow">Kvalitetan moleraj</p>
            <h1 className="hero-heading">Sve boje za lepši dom</h1>
            <p className="hero-paragraph">
              Profesionalni moleraj stambenih i poslovnih prostora. Precizno, kvalitetno i na vreme.
            </p>
            <a href="#kontakt-informacije" className="hero-btn button button--primary">
              Kontaktirajte nas <ArrowRight aria-hidden="true" />
            </a>
            <div className="hero-stats" role="group" aria-label="Iskustvo i kvalitet rada">
              {HERO_STATS.map((stat) => (
                <HeroStat key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hero-benefits" aria-label="Prednosti naše usluge">
        <div className="hero-benefits-inner section-container">
          {BENEFITS.map(({ icon: Icon, label }) => (
            <div key={label} className="hero-benefit">
              <Icon aria-hidden="true" strokeWidth={1.7} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
