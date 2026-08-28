import { MapPin } from 'lucide-react';
import SectionHeading from '../../../../components/SectionHeading/SectionHeading';
import './ServiceAreas.css';

const AREAS = ['Stara Pazova', 'Beograd', 'Novi Sad', 'Inđija', 'Ruma', 'Sremska Mitrovica'];

export default function ServiceAreas() {
  return (
    <section id="lokacije" className="areas-section">
      <div className="areas-container">
        <SectionHeading
          prefix="areas"
          heading="Mesta koja pokrivamo"
          subtitle="Naši moleri redovno rade u Staroj Pazovi i okolnim mestima."
        />

        <div className="areas-grid">
          {/* Leva strana - lista mesta */}
          <div className="areas-list-col">
            <ul className="areas-list">
              {AREAS.map((area) => (
                <li key={area} className="area-item">
                  <span className="area-pin">
                    <MapPin strokeWidth={2} />
                  </span>
                  {area}
                </li>
              ))}
            </ul>

            <p className="areas-note">
              Niste sigurni da li pokrivamo vašu lokaciju? Pozovite nas —
              dogovaramo se i za mesta van liste, u zavisnosti od obima posla.
            </p>
          </div>

          {/* Desna strana - mapa */}
          <div className="areas-map-col">
            <div className="areas-map-wrap">
              <iframe
                title="Sedište - Stara Pazova"
                src="https://maps.google.com/maps?q=Stara%20Pazova%2C%20Srbija&z=11&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="areas-map-iframe"
              />
            </div>
            <p className="areas-map-caption">
              <MapPin strokeWidth={2} />
              Sedište: Stara Pazova
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}