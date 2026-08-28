import { Phone, ClipboardList, Calculator, PaintRoller } from 'lucide-react';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import './Process.css';

const STEPS = [
  {
    icon: Phone,
    title: 'Kontaktirate nas',
    desc: 'Pozovite nas ili popunite formular. Javljamo se brzo.',
  },
  {
    icon: ClipboardList,
    title: 'Izlazak na teren',
    desc: 'Dolazimo na dogovoreni termin i procenjujemo radove.',
  },
  {
    icon: Calculator,
    title: 'Ponuda i dogovor',
    desc: 'Šaljemo ponudu i nakon vašeg odobrenja dogovaramo početak radova.',
  },
  {
    icon: PaintRoller,
    title: 'Izvođenje radova',
    desc: 'Radove izvodimo profesionalno, uredno i u dogovorenom roku.',
  },
];

export default function Process() {
  return (
    <section id="proces" className="process-section">
      <div className="process-container">
        <SectionHeading
          prefix="process"
          heading="Kako sarađujemo?"
          subtitle="Jednostavan proces od prvog poziva do savršeno završenog posla."
        />

        <div className="process-grid">
          {/* connecting dashed line, desktop only */}
          <div className="process-line" aria-hidden="true" />

          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="process-step">
              <span className="process-icon-circle">
                <Icon className="process-icon" strokeWidth={1.75} />
              </span>
              <h3 className="process-title">
                {i + 1}. {title}
              </h3>
              <p className="process-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
