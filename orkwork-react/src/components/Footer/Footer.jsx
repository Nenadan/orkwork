import { PaintRoller, MapPin, Phone, Mail } from 'lucide-react';
import { BUSINESS } from '../../data/business';
import './Footer.css';

// lucide-react v1.0+ je uklonio brend ikonice (Facebook, Instagram...),
// pa su ovde ručno dodate kao mali inline SVG-ovi u istom stilu.
function FacebookIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

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
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-brand-header">
              <span className="footer-logo-circle">
                <PaintRoller strokeWidth={2.25} />
              </span>
              <span className="footer-wordmark">
                <span className="footer-wordmark-small">MOLERSKI RADOVI ORKWORK</span>
                <span className="footer-wordmark-bold footer-city-name">STARA PAZOVA</span>
              </span>
            </div>
            <p className="footer-desc">
              Mala firma iz Stare Pazove koja se bavi molerskim radovima sa fokusom na kvalitet,
              čistoću i zadovoljstvo klijenata.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="footer-heading">Brzi linkovi</h4>
            <ul className="footer-list">
              {QUICK_LINKS.map((l) => (
                <li key={l}>
                  <a href="#" className="footer-link">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-heading">Usluge</h4>
            <ul className="footer-list">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a href="#" className="footer-link">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-heading">Kontakt</h4>
            <ul className="footer-list">
              <li className="footer-contact-item">
                <MapPin />
                {BUSINESS.address}
              </li>
              <li className="footer-contact-item">
                <Phone />
                {BUSINESS.phone}
              </li>
              <li className="footer-contact-item">
                <Mail />
                {BUSINESS.email}
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Orkwork. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
}
