import { useState } from 'react';
import { Leaf, Award, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [logoError, setLogoError] = useState(false);

  const scrollToTop = () => {
    onNavigate('home');
  };

  return (
    <footer className="bg-[#FAF8F5] border-t border-[#EAE5DF] pt-16 pb-8 text-xs font-sans text-[#7C7265]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-[#EAE5DF]">
        
        {/* Brand block */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center space-x-3 text-left">
            <div className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center bg-[#FAF8F5] border border-[#EAE5DF]/40 flex-shrink-0">
              {!logoError ? (
                <img
                  src="/logo.png"
                  alt="Moses Commodities"
                  referrerPolicy="no-referrer"
                  onError={() => setLogoError(true)}
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <div className="w-full h-full bg-[#00A14C] flex items-center justify-center text-[#F5F2EB]">
                  <Leaf className="w-4.5 h-4.5 text-[#C99A49]" />
                </div>
              )}
            </div>
            <div>
              <span className="block text-base font-serif font-bold tracking-wider text-[#1C1814] uppercase leading-none">
                Moses
              </span>
              <span className="block text-[10px] font-sans tracking-widest text-[#8E4D31] font-bold uppercase mt-0.5">
                Commodities
              </span>
            </div>
          </div>
          <p className="text-xs font-sans text-[#5C544C] leading-relaxed max-w-sm">
            Coopérative agricole engagée pour la durabilité et l'équité des filières Cacao, Café et Cajou en Côte d'Ivoire. Nous garantissons une traçabilité à 100% de la parcelle paysanne au port d'exportation de San-Pedro.
          </p>
        </div>

        {/* Links block */}
        <div className="md:col-span-4 grid grid-cols-2 gap-4">
          <div className="space-y-3">
            <h4 className="text-xs font-sans font-bold text-[#1C1814] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#00A14C] text-left cursor-pointer transition-colors">
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#00A14C] text-left cursor-pointer transition-colors">
                  À Propos & Gouvernance
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-[#00A14C] text-left cursor-pointer transition-colors">
                  Nos Produits
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-sans font-bold text-[#1C1814] uppercase tracking-wider">
              Communauté & Engagement
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('sustainability')} className="hover:text-[#00A14C] text-left cursor-pointer transition-colors">
                  Durabilité & RSE
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('news')} className="hover:text-[#00A14C] text-left cursor-pointer transition-colors">
                  Actualités & Stories
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#00A14C] text-left cursor-pointer transition-colors">
                  Contact & Partenariats
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications block */}
        <div className="md:col-span-3 space-y-4">
          <div className="flex items-center space-x-1.5 text-[#00A14C]">
            <Award className="w-4.5 h-4.5 text-[#C99A49]" />
            <h4 className="text-xs font-sans font-bold text-[#1C1814] uppercase tracking-wider">
              Nos Certifications
            </h4>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="px-2.5 py-1 rounded bg-[#F2ECE4] border border-[#E4DDD3] text-[#00A14C] text-[10px] font-sans font-semibold uppercase tracking-wider">
              Rainforest Alliance
            </span>
            <span className="px-2.5 py-1 rounded bg-[#F2ECE4] border border-[#E4DDD3] text-[#00A14C] text-[10px] font-sans font-semibold uppercase tracking-wider">
              Fairtrade Max Havelaar
            </span>
            <span className="px-2.5 py-1 rounded bg-[#F2ECE4] border border-[#E4DDD3] text-[#00A14C] text-[10px] font-sans font-semibold uppercase tracking-wider">
              EUDR Compliant
            </span>
          </div>
          <p className="text-[10px] text-[#8C8275] leading-relaxed">
            Audits réguliers par des tiers certificateurs certifiant l'absence de déforestation et le versement intégral des primes de développement communautaire.
          </p>
        </div>

      </div>

      {/* Subfooter */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-[11px] text-[#8C8275]">
        <div>
          © {new Date().getFullYear()} Moses Commodities S.A. Coop. Tous droits réservés. San-Pedro, Côte d'Ivoire.
        </div>
        
        <div className="flex items-center space-x-6">
          <span className="hover:text-[#00A14C] cursor-pointer">Mentions Légales</span>
          <span className="hover:text-[#00A14C] cursor-pointer">Charte de Confidentialité</span>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full bg-[#F2ECE4] hover:bg-[#00A14C] hover:text-[#FAF8F5] transition-colors flex items-center justify-center cursor-pointer text-[#00A14C] border border-[#E4DDD3]"
            aria-label="Retour en haut"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
