import React from 'react';
import { PaintRoller, MapPin, Phone, Mail } from 'lucide-react';

// lucide-react v1.0+ je uklonio brend ikonice (Facebook, Instagram...),
// pa su ovde ručno dodate kao mali inline SVG-ovi u istom stilu.
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const COLORS = {
  accent: '#F2B705',
  dark: '#111113',
};

const QUICK_LINKS = ['Početna', 'Usluge', 'Galerija', 'O nama', 'Kontakt'];
const SERVICES = [
  'Molerski radovi',
  'Gletovanje',
  'Fasadni radovi',
  'Dekorativne tehnike',
  'Dodatne usluge',
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: COLORS.dark }} className="text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span
                className="flex items-center justify-center w-10 h-10 rounded-full"
                style={{ backgroundColor: COLORS.accent }}
              >
                <PaintRoller className="w-5 h-5 text-white" strokeWidth={2.25} />
              </span>
              <span className="leading-none">
                <span className="block text-[10px] font-semibold tracking-[0.2em] text-gray-400">
                  MOLERSKI RADOVI ORKWORK
                </span>
                <span className="block text-base font-extrabold text-white -mt-0.5">
                  STARA PAZOVA
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Mala firma iz Stare Pazove koja se bavi molerskim radovima sa
              fokusom na kvalitet, čistoću i zadovoljstvo klijenata.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-white/40 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-white/40 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold mb-4">Brzi linkovi</h4>
            <ul className="space-y-3 text-sm">
              {QUICK_LINKS.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Usluge</h4>
            <ul className="space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a href="#" className="hover:text-white transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                Stara Pazova, Srbija
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                063 456 789
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                pazova.moleraj@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© 2024 Pazova Moleraj. Sva prava zadržana.</p>
          <p>Dizajn i izrada: Vaš Web Studio</p>
        </div>
      </div>
    </footer>
  );
}