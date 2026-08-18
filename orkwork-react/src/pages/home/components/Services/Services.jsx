import React from 'react';
import { PaintRoller, Layers, Home, Sparkles, SprayCan } from 'lucide-react';
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
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-heading">Naše usluge</h2>
          <p className="services-subtitle">
            Nudimo kompletne molerske usluge za svaki prostor.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="service-card">
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