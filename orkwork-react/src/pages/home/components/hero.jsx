import React from 'react';
import { ShieldCheck, Sparkles, ThumbsUp, ArrowRight, Phone } from 'lucide-react';

const COLORS = {
  accent: '#F2B705',
  dark: '#161616',
  cream: '#FAF9F5',
};

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Kvalitetni materijali',
    desc: 'Koristimo proverene boje i materijale.',
  },
  {
    icon: Sparkles,
    title: 'Preciznost i čistoća',
    desc: 'Radove izvodimo uredno i ostavljamo prostor čistim.',
  },
  {
    icon: ThumbsUp,
    title: 'Poštujemo rokove',
    desc: 'Dogovor je dogovor. Uvek na vreme.',
  },
];

export default function Hero() {
  return (
    <section id="pocetna" style={{ backgroundColor: COLORS.cream }}>
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div>
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-950 leading-[1.05]">
              Jednostavno.
              <br />
              Čisto. Kvalitetno.
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-md">
              Molerski radovi za domove, stanove i poslovne prostore u
              Staroj Pazovi i okolini.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-bold tracking-wide text-gray-950 transition-transform hover:scale-[1.03]"
                style={{ backgroundColor: COLORS.accent }}
              >
                ZATRAŽITE PONUDU
              </a>
              <a
                href="tel:063456789"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-6 py-3.5 text-sm font-bold tracking-wide text-gray-900 hover:border-gray-900 transition-colors"
              >
                <Phone className="w-4 h-4" />
                POZOVITE NAS
              </a>
            </div>

            <div className="mt-12 grid sm:grid-cols-3 gap-6">
              {FEATURES.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex flex-col gap-2">
                  <Icon className="w-5 h-5 text-gray-900" strokeWidth={2} />
                  <p className="text-sm font-bold text-gray-950">{title}</p>
                  <p className="text-sm text-gray-500 leading-snug">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-200">
            <img
              src="/images/hero-room.jpg"
              alt="Molerski radovi u toku - merdevine, boja i valjak u sobi"
              className="w-full h-full object-cover"
            />
            {/* TODO: zamenite /images/hero-room.jpg vašom fotografijom prostora u radu */}
          </div>
        </div>
      </div>
    </section>
  );
}