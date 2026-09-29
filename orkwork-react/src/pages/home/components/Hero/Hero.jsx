import { ArrowRight, Clock3, House, MapPin, PaintRoller, ShieldCheck } from 'lucide-react';
import './Hero.css';
import heroImg from '../../../../assets/hero/hero_1.png';

const BENEFITS = [
  { icon: ShieldCheck, label: 'Kvalitetan rad' },
  { icon: Clock3, label: 'Držimo se dogovora' },
  { icon: House, label: 'Čiste i uredne prostorije' },
  { icon: PaintRoller, label: 'Profesionalna oprema' },
];

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
            <p className="hero-location">
              <MapPin aria-hidden="true" />
              Stara Pazova
            </p>
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
