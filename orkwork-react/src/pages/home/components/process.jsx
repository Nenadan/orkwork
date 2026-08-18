import React from 'react';
import { Phone, ClipboardList, Calculator, PaintRoller } from 'lucide-react';

const COLORS = {
  cream: '#FAF9F5',
};

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
    <section id="proces" style={{ backgroundColor: COLORS.cream }} className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950">
            Kako sarađujemo?
          </h2>
          <p className="mt-3 text-gray-500">
            Jednostavan proces od prvog poziva do savršeno završenog posla.
          </p>
        </div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {/* connecting dashed line, desktop only */}
          <div
            className="hidden lg:block absolute top-8 left-[12%] right-[12%] border-t-2 border-dashed border-gray-300"
            aria-hidden="true"
          />

          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative z-10 text-center px-4">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border border-gray-300 mb-5">
                <Icon className="w-6 h-6 text-gray-900" strokeWidth={1.75} />
              </span>
              <h3 className="font-bold text-gray-950">
                {i + 1}. {title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed max-w-[220px] mx-auto">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}