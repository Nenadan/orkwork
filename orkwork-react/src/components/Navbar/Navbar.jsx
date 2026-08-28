import { useState, useEffect } from 'react';
import { Phone, Menu, X, PaintRoller } from 'lucide-react';
import { BUSINESS } from '../../data/business';
import './Navbar.css';

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
    <>
      <header className="navbar-header">
        <div className="navbar-container">
          <div className="navbar-row">
            {/* Logo */}
            <a href="#pocetna" className="navbar-logo">
              <span className="navbar-logo-circle">
                <PaintRoller strokeWidth={2.25} />
              </span>
              <span className="navbar-wordmark">
                <span className="navbar-wordmark-small">MOLERSKI RADOVI ORKWORK</span>
                <span className="navbar-wordmark-bold">STARA PAZOVA</span>
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="navbar-nav-desktop">
              {NAV_LINKS.map((link) => {
                const isActive = activeId === link.href.slice(1);
                return (
                  <a key={link.label} href={link.href} className="navbar-link">
                    {link.label}
                    {isActive && <span className="navbar-link-underline" />}
                  </a>
                );
              })}
            </nav>

            {/* Phone CTA */}
            <a href={BUSINESS.phoneHref} className="navbar-phone-cta">
              <Phone strokeWidth={2.25} />
              {BUSINESS.phone}
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="navbar-mobile-toggle"
              aria-label="Otvori meni"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu - namerno VAN <header>, da njegov backdrop-filter ne blokira ovaj */}
      {open && (
        <div className="navbar-mobile-menu">
          <nav className="navbar-mobile-nav">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`navbar-mobile-link${isActive ? ' active' : ''}`}
                >
                  {link.label}
                </a>
              );
            })}
            <a href={BUSINESS.phoneHref} className="navbar-mobile-cta">
              <Phone />
              {BUSINESS.phone}
            </a>
          </nav>
        </div>
      )}
    </>
  );
}