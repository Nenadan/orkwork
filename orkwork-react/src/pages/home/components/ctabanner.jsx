import React from 'react';
import { PaintRoller, ArrowRight, Phone } from 'lucide-react';

const COLORS = {
  accent: '#F2B705',
  dark: '#161616',
  bg: '#F1EFE9',
};

export default function CTABanner() {
  return (
    <section style={{ backgroundColor: COLORS.bg }} className="py-14">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left */}
        <div className="flex items-center gap-5 text-center lg:text-left">
          <span
            className="hidden sm:inline-flex items-center justify-center w-14 h-14 rounded-full shrink-0"
            style={{ backgroundColor: `${COLORS.accent}33` }}
          >
            <PaintRoller className="w-6 h-6 text-gray-900" strokeWidth={1.75} />
          </span>
          <div>
            <h2 className="text-2xl font-extrabold text-gray-950">
              Spremni da osvežite svoj prostor?
            </h2>
            <p className="mt-1 text-gray-500 text-sm">
              Zatražite besplatnu procenu i ponudu već danas.
            </p>
          </div>
        </div>

        {/* Middle: button */}
        <a
          href="#kontakt"
          className="inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-bold tracking-wide text-white shrink-0"
          style={{ backgroundColor: COLORS.dark }}
        >
          ZATRAŽITE PONUDU
          <ArrowRight className="w-4 h-4" />
        </a>

        {/* Right: phone */}
        <div className="flex items-center gap-3 border-l border-gray-300 pl-8 lg:pl-8">
          <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white border border-gray-200 shrink-0">
            <Phone className="w-5 h-5 text-gray-900" strokeWidth={1.75} />
          </span>
          <div>
            <p className="font-bold text-gray-950">061 135 1362</p>
            <p className="text-xs text-gray-500">Pozovite nas svakog dana od 08h do 20h</p>
          </div>
        </div>
      </div>
    </section>
  );
}