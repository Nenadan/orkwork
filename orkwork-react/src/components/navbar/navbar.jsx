import React, { useState } from 'react';
import { Phone, Menu, X, PaintRoller } from 'lucide-react';

const COLORS = {
  accent: '#F2B705',
  dark: '#161616',
};

const NAV_LINKS = [
  { label: 'Početna', href: '#pocetna', active: true },
  { label: 'Usluge', href: '#usluge' },
  { label: 'Galerija', href: '#galerija' },
  { label: 'O nama', href: '#o-nama' },
  { label: 'Proces', href: '#proces' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#pocetna" className="flex items-center gap-3">
            <span
              className="flex items-center justify-center w-11 h-11 rounded-full shrink-0"
              style={{ backgroundColor: COLORS.accent }}
            >
              <PaintRoller className="w-5 h-5 text-white" strokeWidth={2.25} />
            </span>
            <span className="leading-none">
              <span className="block text-[11px] font-semibold tracking-[0.2em] text-gray-500">
                PAZOVA
              </span>
              <span className="block text-lg font-extrabold tracking-tight text-gray-900 -mt-0.5">
                MOLERAJ
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-gray-700 hover:text-gray-950 transition-colors pb-1"
              >
                {link.label}
                {link.active && (
                  <span
                    className="absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full"
                    style={{ backgroundColor: COLORS.accent }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Phone CTA */}
          <a
            href="tel:063456789"
            className="hidden sm:flex items-center gap-2 rounded-full pl-4 pr-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: COLORS.dark }}
          >
            <Phone className="w-4 h-4" strokeWidth={2.25} />
            063 456 789
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200"
            aria-label="Otvori meni"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-gray-700"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:063456789"
              className="mt-2 flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold text-white"
              style={{ backgroundColor: COLORS.dark }}
            >
              <Phone className="w-4 h-4" />
              063 456 789
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}