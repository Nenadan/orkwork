import { Award, ShieldCheck, HeartHandshake, Tag } from 'lucide-react';
import whyUsImg from '../../../../assets/hero/hero_3.png';
import './WhyUs.css';

const REASONS = [
  {
    icon: Award,
    title: 'Iskustvo',
    desc: 'Višegodišnje iskustvo na terenu i veliki broj zadovoljnih klijenata.',
  },
  {
    icon: ShieldCheck,
    title: 'Kvalitet',
    desc: 'Koristimo kvalitetne boje i materijale koje garantuju dugotrajnost.',
  },
  {
    icon: HeartHandshake,
    title: 'Pouzdanost',
    desc: 'Poštujemo dogovore i rokove. Transparentna komunikacija.',
  },
  {
    icon: Tag,
    title: 'Povoljne cene',
    desc: 'Odličan odnos cene i kvaliteta. Fer i korektne ponude.',
  },
];

export default function WhyUs() {
  return (
    <section className="whyus-section" id="o-nama">
      <div className="whyus-container section-container">
        <div className="whyus-feature">
          <div className="whyus-feature-image-wrap">
            <img src={whyUsImg} alt="Ruka molera nanosi plavu boju valjkom" loading="lazy" />
          </div>
          <div className="whyus-feature-copy">
            <p className="section-eyebrow">Zašto Orkwork?</p>
            <h2 className="whyus-feature-heading section-title section-title--feature">Iskustvo i poverenje</h2>
            <p className="whyus-feature-description">
              Orkwork je lokalna firma iz Stare Pazove koja se bavi molerajem sa dugogodišnjim
              iskustvom. Naš cilj je da svaki prostor koji uređujemo dobije nov, svež izgled i da
              zadovoljstvo klijenata bude na prvom mestu.
            </p>
          </div>
        </div>

        <div className="whyus-grid surface-card">
          {REASONS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="whyus-item">
              <span className="whyus-icon-circle">
                <Icon strokeWidth={1.75} />
              </span>
              <h3 className="whyus-title">{title}</h3>
              <p className="whyus-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
