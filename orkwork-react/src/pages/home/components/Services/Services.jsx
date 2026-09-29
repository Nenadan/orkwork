import { ArrowRight, PaintRoller, Layers, Home, Sparkles, SprayCan } from 'lucide-react';
import servicesImg from '../../../../assets/hero/hero_2.png';
import './Services.css';

const SERVICES = [
  {
    icon: PaintRoller,
    title: 'Molerski radovi',
    desc: 'Gletovanje, krečenje, bojenje zidova i plafona svih vrsta.',
  },
  {
    icon: Layers,
    title: 'Gletovanje',
    desc: 'Profesionalno gletovanje zidova i priprema za završne radove.',
  },
  {
    icon: Home,
    title: 'Fasadni radovi',
    desc: 'Krečenje fasada, zaštita i obnova spoljnih površina.',
  },
  {
    icon: Sparkles,
    title: 'Dekorativne tehnike',
    desc: 'Dekorativni malteri, teksture, efekti po vašoj želji.',
  },
  {
    icon: SprayCan,
    title: 'Dodatne usluge',
    desc: 'Skidanje tapeta, bojenje šarki, vrata, radijatora i drugo.',
  },
];

export default function Services() {
  return (
    <section id="usluge" className="services-section">
      <div className="services-container section-container">
        <div className="services-feature">
          <div className="services-feature-copy">
            <p className="section-eyebrow">Naše usluge</p>
            <h2 className="services-feature-heading section-title section-title--feature">Šta radimo?</h2>
            <p className="services-feature-description">
              Nudimo kompletne molerske usluge za stanove, kuće, poslovne prostore i objekte u
              Staroj Pazovi i okolini.
            </p>
            <a className="services-feature-link button button--dark" href="#services-grid">
              Pogledajte sve usluge <ArrowRight aria-hidden="true" />
            </a>
          </div>
          <div className="services-feature-image-wrap">
            <img src={servicesImg} alt="Valjak i kanta pripremljeni za molerske radove" loading="lazy" />
          </div>
        </div>

        <div className="services-grid" id="services-grid">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="service-card surface-card">
              <span className="service-icon-circle">
                <Icon strokeWidth={1.75} />
              </span>
              <h3 className="service-title">{title}</h3>
              <p className="service-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
