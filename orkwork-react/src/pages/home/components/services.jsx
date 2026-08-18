import React from 'react';
import { PaintRoller, Layers, Home, Sparkles, SprayCan } from 'lucide-react';

const COLORS = {
  accent: '#F2B705',
  cream: '#FAF9F5',
};

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
    <section id="usluge" style={{ backgroundColor: COLORS.cream }} className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950">
            Naše usluge
          </h2>
          <p className="mt-3 text-gray-500">
            Nudimo kompletne molerske usluge za svaki prostor.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <span
                className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5"
                style={{ backgroundColor: `${COLORS.accent}22` }}
              >
                <Icon className="w-6 h-6 text-gray-900" strokeWidth={1.75} />
              </span>
              <h3 className="font-bold text-gray-950">{title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}