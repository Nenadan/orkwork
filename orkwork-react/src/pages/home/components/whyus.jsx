import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Tag } from 'lucide-react';

const COLORS = {
  accent: '#F2B705',
  dark: '#111113',
};

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
    <section style={{ backgroundColor: COLORS.dark }} className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Zašto baš mi?
          </h2>
          <span
            className="block w-12 h-1 rounded-full mx-auto mt-4"
            style={{ backgroundColor: COLORS.accent }}
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`text-center px-6 py-6 ${
                i !== 0 ? 'lg:border-l lg:border-white/10' : ''
              }`}
            >
              <span
                className="inline-flex items-center justify-center w-14 h-14 rounded-full border mb-5"
                style={{ borderColor: `${COLORS.accent}66` }}
              >
                <Icon className="w-6 h-6" style={{ color: COLORS.accent }} strokeWidth={1.75} />
              </span>
              <h3 className="font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}