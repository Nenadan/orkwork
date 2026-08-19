import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: 'Telefon',
    value: '061 135 1362',
    href: 'tel:0611351362',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'theywhereartist.notturtles@gmail.com',
    href: 'mailto:theywhereartist.notturtles@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Adresa',
    value: 'Stara Pazova, Srbija',
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
    <section id="kontakt-informacije" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950">
            Kontaktirajte nas
          </h2>
          <p className="mt-3 text-gray-500">
            Tu smo za sva pitanja i ponude — javite nam se na način koji vama
            odgovara.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <div className="bg-white rounded-xl border border-gray-100 p-6 text-center shadow-sm hover:shadow-md transition-shadow h-full">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#F2B70522] mb-5">
                  <Icon className="w-6 h-6 text-gray-900" strokeWidth={1.75} />
                </span>
                <p className="font-bold text-gray-950">{label}</p>
                <p className="mt-2 text-sm text-gray-500">{value}</p>
              </div>
            );

            return href ? (
              <a key={label} href={href}>
                {content}
              </a>
            ) : (
              <div key={label}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}