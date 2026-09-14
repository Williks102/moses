import { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HelpingHand } from 'lucide-react';

interface Partner {
  name: string;
  logo: string;
  role: string;
  initials: string;
}

export default function PartnersSection() {
  const [brokenLogos, setBrokenLogos] = useState<Record<string, boolean>>({});

  const partners: Partner[] = [
    {
      name: 'Le Conseil du Café-Cacao',
      logo: '/ccc-300x145.jpg',
      role: 'Organe de Régulation',
      initials: 'CCC'
    },
    {
      name: 'Rainforest Alliance',
      logo: '/LOGO-RA-300x300.png',
      role: 'Certification Durable',
      initials: 'RA'
    },
    {
      name: 'OLAM (ofi)',
      logo: '/LOGO-OLAM-300x285.png',
      role: 'Négoce & Exportation',
      initials: 'OLAM'
    },
    {
      name: 'CARGILL',
      logo: '/1-300x145.jpg',
      role: 'Partenaire Commercial',
      initials: 'CARGILL'
    },
    {
      name: 'CNEK Coop-Ca',
      logo: '/cropped-logo-cnek-300x68.png',
      role: 'Alliance Coopérative',
      initials: 'CNEK'
    },
    {
      name: 'AFRICA SOURCING',
      logo: '/LOGO-AFRICA-SOURCING-300x99.png',
      role: 'Exportateur International',
      initials: 'AS'
    },
    {
      name: 'IVCOM',
      logo: '/ivcom_logo_placeholder.png',
      role: 'Partenaire Commercial',
      initials: 'IVCOM'
    },
    {
      name: 'IVCAO',
      logo: '/ivcao_logo_placeholder.png',
      role: 'Partenaire Commercial',
      initials: 'IVCAO'
    },
    {
      name: 'ICP',
      logo: '/icp_logo_placeholder.png',
      role: 'Partenaire Commercial',
      initials: 'ICP'
    },
    {
      name: 'CAP',
      logo: '/cap_logo_placeholder.png',
      role: 'Partenaire Commercial',
      initials: 'CAP'
    }
  ];

  // Duplicate the array to create a seamless infinite loop
  const doublePartners = [...partners, ...partners, ...partners];

  return (
    <section id="partners" className="py-16 bg-[#FAF8F5] border-t border-[#EAE5DF] overflow-hidden">
      {/* Scope-specific marquee style */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33333%);
          }
        }
        .animate-marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-sans font-bold tracking-widest text-[#8E4D31] uppercase mb-1.5 block">
            Écosystème & Confiance
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1C1814] leading-tight mb-4">
            Nos Partenaires de Confiance
          </h2>
          <p className="text-base font-sans text-[#5C544C] leading-relaxed">
            Nous collaborons étroitement avec les institutions étatiques, les organismes de certification internationaux et les grands acteurs industriels pour garantir la qualité, la traçabilité et la durabilité de chaque récolte.
          </p>
        </div>
      </div>

      {/* Marquee Outer Container with Gradient Overlays */}
      <div className="relative w-full py-4 bg-[#FAF8F5]">
        {/* Left gradient overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#FAF8F5] to-transparent z-10 pointer-events-none" />
        {/* Right gradient overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#FAF8F5] to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="animate-marquee-track gap-6 md:gap-8 px-4">
          {doublePartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center space-x-4 bg-white border border-[#EAE5DF]/60 rounded-xl px-6 py-4 h-20 w-64 md:w-72 flex-shrink-0 transition-all duration-300 hover:border-[#00A14C]/30"
            >
              {/* Logo wrapper */}
              <div className="w-20 h-12 flex items-center justify-center bg-white overflow-hidden flex-shrink-0">
                {!brokenLogos[partner.name] ? (
                  <img
                    src={partner.logo}
                    alt={`Logo de ${partner.name}`}
                    referrerPolicy="no-referrer"
                    onError={() => setBrokenLogos(prev => ({ ...prev, [partner.name]: true }))}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  <div className="w-full h-full rounded-md bg-[#F2ECE4] flex flex-col items-center justify-center border border-[#EAE5DF]/40 text-center px-1">
                    <span className="text-[9px] font-sans font-bold text-[#8E4D31] leading-none tracking-tight">
                      {partner.initials}
                    </span>
                    <ShieldCheck className="w-3 h-3 text-[#00A14C] mt-1" />
                  </div>
                )}
              </div>

              {/* Text info */}
              <div className="flex-1 min-w-0">
                <span className="block font-serif font-semibold text-xs text-[#1C1814] truncate">
                  {partner.name}
                </span>
                <span className="block text-[10px] font-sans text-[#7C7265] uppercase tracking-wider font-medium mt-0.5 truncate">
                  {partner.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
