import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, PaintRoller } from 'lucide-react';

const COLORS = {
  accent: '#F2B705',
  dark: '#161616',
};

const NAV_LINKS = [
  { label: 'Početna', href: '#pocetna' },
  { label: 'Usluge', href: '#usluge' },
  { label: 'O nama', href: '#o-nama' },
  { label: 'Galerija', href: '#galerija' },
  { label: 'Proces', href: '#proces' },
  { label: 'Kontakt', href: '#kontakt-informacije' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState('pocetna');

  useEffect(() => {
    // Pronadji sve sekcije na koje nav linkovi pokazuju (preskace one koje ne postoje)
    const sections = NAV_LINKS
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        // Suzava "vidno polje" na tanku traku blizu sredine ekrana -
        // sekcija postaje aktivna tek kad ta traka prodje kroz nju,
        // umesto da se aktivira cim se i pola sekcije pojavi na dnu ekrana.
        rootMargin: '-45% 0px -50% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

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
                MOLERSKI RADOVI ORKWORK
              </span>
              <span className="block text-lg font-extrabold tracking-tight text-gray-900 -mt-0.5">
                STARA PAZOVA
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-sm font-medium text-gray-700 hover:text-gray-950 transition-colors pb-1"
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full"
                      style={{ backgroundColor: COLORS.accent }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Phone CTA */}
          <a
            href="tel:0611351362"
            className="hidden sm:flex items-center gap-2 rounded-full pl-4 pr-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: COLORS.dark }}
          >
            <Phone className="w-4 h-4" strokeWidth={2.25} />
            061 135 1362
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
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium"
                  style={{ color: isActive ? COLORS.dark : '#374151', fontWeight: isActive ? 700 : 500 }}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="tel:0611351362"
              className="mt-2 flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold text-white"
              style={{ backgroundColor: COLORS.dark }}
            >
              <Phone className="w-4 h-4" />
              061 135 1362
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}