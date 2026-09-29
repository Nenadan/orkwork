import { Clock, Mail, MapPin, MessageCircle, Phone, PhoneCall } from 'lucide-react';
import { BUSINESS } from '../../../../data/business';
import './Contact.css';

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: 'Telefon',
    value: BUSINESS.phone,
    href: BUSINESS.phoneHref,
  },
  {
    icon: Mail,
    label: 'Email',
    value: BUSINESS.email,
    href: `mailto:${BUSINESS.email}`,
  },
  {
    icon: MapPin,
    label: 'Adresa',
    value: BUSINESS.address,
    href: null,
  },
  {
    icon: Clock,
    label: 'Radno vreme',
    value: 'Svakog dana 08h - 20h',
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="kontakt-informacije" className="contact-section">
      <div className="contact-container section-container">
        <div className="contact-callout">
          <span className="contact-callout-icon" aria-hidden="true">
            <PhoneCall />
          </span>
          <div className="contact-callout-copy">
            <p className="contact-callout-title">Zainteresovani ste?</p>
            <p className="contact-callout-text">
              Pozovite nas ili nam pišite i dobićete brzu ponudu.
            </p>
          </div>
          <div className="contact-callout-actions">
            <a href={BUSINESS.phoneHref} className="contact-call-button button button--primary">
              <Phone aria-hidden="true" /> Pozovite
            </a>
            <a href={`mailto:${BUSINESS.email}`} className="contact-message-link button button--inverse-text">
              <MessageCircle aria-hidden="true" /> Pošaljite poruku
            </a>
          </div>
        </div>

        <div className="contact-details">
          <div className="contact-heading">
            <p className="section-eyebrow">Tu smo za vas</p>
            <h2 className="section-title">Kontaktirajte nas</h2>
            <p className="section-subtitle">Izaberite način koji vam najviše odgovara.</p>
          </div>
          <div className="contact-grid">
            {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <>
                  <span className="contact-card-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="contact-card-copy">
                    <span className="contact-card-label">{label}</span>
                    <span className="contact-card-value">{value}</span>
                  </span>
                </>
              );

              return href ? (
                <a key={label} className="contact-card surface-card" href={href}>
                  {content}
                </a>
              ) : (
                <div key={label} className="contact-card surface-card">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
