import { Award, ShieldCheck, HeartHandshake, Tag } from 'lucide-react';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
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
      <div className="whyus-container">
        <SectionHeading prefix="whyus" heading="Zašto baš mi?" underline />

        <div className="whyus-grid">
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
