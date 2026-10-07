import { Clock, Mail, MapPin, MessageCircle, Phone, PhoneCall } from 'lucide-react';
import { BUSINESS } from '../../../../data/business';
import './Contact.css';

function ViberIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.1 3.5c-1.7.2-2.8 1.4-3 3.2-.4 3.5.7 7.4 3.6 10.3 2.9 2.9 6.8 4 10.3 3.6 1.8-.2 3-1.3 3.2-3l.2-1.6-4.5-2.1-2.1 2.1c-2.3-.9-4.1-2.7-5-5l2.1-2.1-2.1-4.5-1.7.1Z"
        fill="currentColor"
      />
      <path d="M14.1 3.1a7 7 0 0 1 6.8 6.8M14 6.3a3.8 3.8 0 0 1 3.6 3.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20.1 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4.1a8 8 0 1 1 14.8-4.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 8.1c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2 0 .4-.1.6l-.5.6c-.2.2-.2.4-.1.6.5.9 1.2 1.6 2.1 2.1.2.1.4.1.6-.1l.6-.5c.2-.2.4-.2.6-.1l1.7.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.5.3-1.2.5-2 .4-1.1-.2-2.5-.9-3.8-2.2s-2-2.7-2.2-3.8c-.1-.8.1-1.5.4-2Z"
        fill="currentColor"
      />
    </svg>
  );
}

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
            <a href={BUSINESS.viberHref} className="contact-viber-button button">
              <ViberIcon /> Pišite na Viber
            </a>
            <a href={BUSINESS.whatsappHref} className="contact-whatsapp-button button">
              <WhatsAppIcon /> Pišite na WhatsApp
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
