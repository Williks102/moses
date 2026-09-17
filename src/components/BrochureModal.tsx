import { useEffect } from 'react';
import { X, Download, Printer, Leaf, Award, MapPin, Phone, Mail, BookOpen, Users, HelpCircle, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  autoDownload?: boolean;
}

export default function BrochureModal({ isOpen, onClose, autoDownload }: BrochureModalProps) {
  useEffect(() => {
    if (isOpen && autoDownload) {
      handleDownloadPDF();
    }
  }, [isOpen, autoDownload]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    try {
      // Fetch the file as a blob to bypass iframe third-party cookie restrictions in Safari/iOS
      const response = await fetch('/doc/depliant.pdf');
      if (!response.ok) throw new Error('Erreur de téléchargement');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'depliant.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Erreur lors du téléchargement direct du PDF:', error);
      // Fallback: direct navigation in case fetch is blocked
      const link = document.createElement('a');
      link.href = '/doc/depliant.pdf';
      link.target = '_blank';
      link.download = 'depliant.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 print:bg-white print:p-0">
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative bg-[#FAF8F5] border border-[#EAE5DF] rounded-3xl shadow-2xl w-full max-w-5xl overflow-hidden z-10 max-h-[90vh] flex flex-col print:border-0 print:shadow-none print:max-h-full print:rounded-none print:w-full print:max-w-none print:overflow-visible print:relative"
      >
        
        {/* Header toolbar */}
        <div className="p-5 md:p-6 bg-white border-b border-[#EAE5DF] flex items-center justify-between flex-shrink-0 print:hidden">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#00A14C]/10 flex items-center justify-center text-[#00A14C]">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-serif font-bold text-[#5C3E35]">Brochure Officielle</h2>
              <p className="text-xs font-sans text-[#7C7265]">Moses Commodities — Document d'Information Institutionnel</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-lg bg-[#FAF8F5] border border-[#EAE5DF] hover:bg-[#F2ECE4] text-[#5C3E35] text-xs font-sans font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Imprimer / Enregistrer PDF</span>
            </button>
            <button
              onClick={handleDownloadPDF}
              className="px-4 py-2 rounded-lg bg-[#00A14C] hover:bg-[#008A41] text-white text-xs font-sans font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Télécharger PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#FAF8F5] text-[#7C7265] transition-colors cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable/Scrollable Content */}
        <div id="brochure-print-section" className="overflow-y-auto p-6 md:p-10 space-y-12 text-[#5C3E35] print:overflow-visible print:p-0">
          
          {/* Cover & Title banner */}
          <div className="text-center space-y-4 pb-8 border-b border-[#EAE5DF] max-w-3xl mx-auto">
            <div className="flex justify-center mb-2">
              <div className="w-16 h-16 rounded-full bg-white border border-[#EAE5DF] p-2 flex items-center justify-center">
                <img src="/logo.png" alt="Moses Commodities Logo" className="max-h-full max-w-full object-contain" />
              </div>
            </div>
            <span className="text-xs font-sans font-bold tracking-widest text-[#8E4D31] uppercase block">
              SOCIÉTÉ COOPÉRATIVE AGRICOLE AVEC CONSEIL D'ADMINISTRATION
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-black text-[#5C3E35] leading-tight">
              Moses Commodities S.A. Coop.
            </h1>
            <p className="text-base md:text-lg font-serif italic text-[#7C7265] max-w-2xl mx-auto">
              « Valuing our lands, feeding the world » • Valoriser nos terres, nourrir le monde.
            </p>
          </div>

          {/* Interactive Panels Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            
            {/* Panel 1: Identity & Mission */}
            <div className="space-y-8 bg-white border border-[#EAE5DF] rounded-2xl p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 pb-2 border-b border-[#FAF8F5]">
                  <Leaf className="w-5 h-5 text-[#00A14C]" />
                  <h3 className="text-xl font-serif font-bold">Who Are We ?</h3>
                </div>
                <p className="text-xs font-sans text-[#5C544C] leading-relaxed">
                  Créée en Côte d'Ivoire le <strong>19 Octobre 2022</strong> dans la région de San-Pedro, et étendue aux départements de Duékoué, Guiglo, Bloléquin et Toulépleu en Novembre 2022.
                </p>
                <ul className="space-y-2.5 text-xs font-sans text-[#5C544C]">
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A14C] mt-1.5 flex-shrink-0" />
                    <span>Une coopérative unissant les producteurs de café et de cacao.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A14C] mt-1.5 flex-shrink-0" />
                    <span>Activités : Production, transformation locale et commercialisation.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A14C] mt-1.5 flex-shrink-0" />
                    <span>Membres engagés pour la durabilité et l'éthique.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#EAE5DF]/60">
                <div className="flex items-center space-x-2 pb-2 border-b border-[#FAF8F5]">
                  <Award className="w-5 h-5 text-[#8E4D31]" />
                  <h3 className="text-xl font-serif font-bold">Our Mission</h3>
                </div>
                <ul className="space-y-2.5 text-xs font-sans text-[#5C544C]">
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8E4D31] mt-1.5 flex-shrink-0" />
                    <span>Promouvoir une agriculture durable et un commerce équitable.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8E4D31] mt-1.5 flex-shrink-0" />
                    <span>Améliorer concrètement les revenus et la vie des producteurs.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8E4D31] mt-1.5 flex-shrink-0" />
                    <span>Fournir un café et un cacao d'une qualité d'excellence constante.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8E4D31] mt-1.5 flex-shrink-0" />
                    <span>Valoriser et exporter avec fierté le terroir ivoirien.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Panel 2: Strengths & Products */}
            <div className="space-y-8 bg-white border border-[#EAE5DF] rounded-2xl p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 pb-2 border-b border-[#FAF8F5]">
                  <CheckCircle className="w-5 h-5 text-[#C99A49]" />
                  <h3 className="text-xl font-serif font-bold">Our Strengths</h3>
                </div>
                <ul className="space-y-2.5 text-xs font-sans text-[#5C544C]">
                  <li className="flex items-start space-x-2">
                    <span className="font-bold text-[#00A14C] mr-1">✓</span>
                    <span>Coopérative 100% ivoirienne, ancrée localement.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="font-bold text-[#00A14C] mr-1">✓</span>
                    <span>Traçabilité complète physique de la plantation à l'export.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="font-bold text-[#00A14C] mr-1">✓</span>
                    <span>Transformation locale (création de valeur ajoutée directe).</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="font-bold text-[#00A14C] mr-1">✓</span>
                    <span>Encadrement technique de proximité rigoureux.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="font-bold text-[#00A14C] mr-1">✓</span>
                    <span>Cacao certifié Rainforest Alliance pour une éthique prouvée.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#EAE5DF]/60">
                <div className="flex items-center space-x-2 pb-2 border-b border-[#FAF8F5]">
                  <Leaf className="w-5 h-5 text-[#00A14C]" />
                  <h3 className="text-xl font-serif font-bold">Our Products</h3>
                </div>
                <div className="space-y-3 text-xs font-sans text-[#5C544C]">
                  <div>
                    <span className="font-semibold text-[#8E4D31] block">Café (MosesCafé) :</span>
                    <span className="text-[11px] block text-[#7C7265]">Café vert, café torréfié, café moulu d'exception.</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#00A14C] block">Cacao :</span>
                    <span className="text-[11px] block text-[#7C7265]">Fèves de cacao haut de gamme, sélectionnées et séchées au soleil.</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#5C3E35] block">Formats :</span>
                    <span className="text-[11px] block text-[#7C7265]">Vrac, sacs de jute traditionnels de 65kg, sachets d'origine, sticks.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 3: Key Figures & HSE */}
            <div className="space-y-8 bg-white border border-[#EAE5DF] rounded-2xl p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 pb-2 border-b border-[#FAF8F5]">
                  <Users className="w-5 h-5 text-[#8E4D31]" />
                  <h3 className="text-xl font-serif font-bold">Our Key Figures</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="bg-[#FAF8F5] p-2.5 rounded-xl border border-[#EAE5DF]/40">
                    <span className="block text-sm font-bold text-[#00A14C] font-serif">11 417,69 ha</span>
                    <span className="block text-[9px] font-sans text-[#7C7265] uppercase">Superficie</span>
                  </div>
                  <div className="bg-[#FAF8F5] p-2.5 rounded-xl border border-[#EAE5DF]/40">
                    <span className="block text-sm font-bold text-[#8E4D31] font-serif">10 421 t</span>
                    <span className="block text-[9px] font-sans text-[#7C7265] uppercase">Cacao / an</span>
                  </div>
                  <div className="bg-[#FAF8F5] p-2.5 rounded-xl border border-[#EAE5DF]/40">
                    <span className="block text-sm font-bold text-[#C99A49] font-serif">3 427</span>
                    <span className="block text-[9px] font-sans text-[#7C7265] uppercase">Producteurs</span>
                  </div>
                  <div className="bg-[#FAF8F5] p-2.5 rounded-xl border border-[#EAE5DF]/40">
                    <span className="block text-sm font-bold text-[#5C3E35] font-serif">625 t</span>
                    <span className="block text-[9px] font-sans text-[#7C7265] uppercase">Café vert / an</span>
                  </div>
                </div>
                <div className="text-[10px] text-[#7C7265] leading-snug space-y-1">
                  <div>• <strong>Membres hommes :</strong> 3 258 producteurs</div>
                  <div>• <strong>Membres femmes :</strong> 169 productrices</div>
                  <div>• <strong>Partenaires industriels :</strong> OLAM, CNEK, ICP, CARGILL, IVCOM, AFRICA SOURCING, IVCAO, SUCDEN</div>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#EAE5DF]/60">
                <div className="flex items-center space-x-2 pb-2 border-b border-[#FAF8F5]">
                  <Users className="w-5 h-5 text-[#00A14C]" />
                  <h3 className="text-xl font-serif font-bold">HSE Commitments</h3>
                </div>
                <ul className="space-y-2 text-xs font-sans text-[#5C544C]">
                  <li>• <strong>Social :</strong> Formations, égalité des chances, employabilité des jeunes de San-Pedro.</li>
                  <li>• <strong>Environnement :</strong> Agroforesterie, lutte stricte contre la déforestation (conformité EUDR).</li>
                  <li>• <strong>Économie :</strong> Rémunération équitable des planteurs, traçabilité des primes.</li>
                  <li>• <strong>Protection :</strong> Politique stricte de tolérance zéro contre le travail des enfants.</li>
                </ul>
              </div>
            </div>

          </div>

          {/* Strategic Projects & Collaboration Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[#EAE5DF]">
            
            {/* Ambitions */}
            <div className="space-y-4 bg-white border border-[#EAE5DF] rounded-2xl p-6">
              <h3 className="text-xl font-serif font-bold text-[#5C3E35] border-b border-[#F2ECE4] pb-2 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C99A49]" />
                <span>Projects & Ambitions</span>
              </h3>
              <ul className="space-y-2 text-xs font-sans text-[#5C544C]">
                <li className="flex items-start space-x-2">
                  <span className="text-[#C99A49] font-bold">•</span>
                  <span>Accroître la capacité de transformation locale du café vert.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#C99A49] font-bold">•</span>
                  <span>Exporter des fèves de cacao haut de gamme en direct.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#C99A49] font-bold">•</span>
                  <span>Semi-transformer le cacao en beurre de cacao, pâte et poudre.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#C99A49] font-bold">•</span>
                  <span>Déployer la marque de café <strong>MosesCafé</strong> et lancer <strong>MosesChoco</strong>.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#C99A49] font-bold">•</span>
                  <span>Obtenir de nouvelles certifications (Fairtrade Max Havelaar, Bio).</span>
                </li>
              </ul>
            </div>

            {/* Why Collaborate */}
            <div className="space-y-4 bg-white border border-[#EAE5DF] rounded-2xl p-6">
              <h3 className="text-xl font-serif font-bold text-[#5C3E35] border-b border-[#F2ECE4] pb-2 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00A14C]" />
                <span>Why Collaborate with Us ?</span>
              </h3>
              <ul className="space-y-2 text-xs font-sans text-[#5C544C]">
                <li className="flex items-start space-x-2">
                  <span className="text-[#00A14C] font-bold">•</span>
                  <span>Des produits agricoles authentiques, sains et 100% traçables.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#00A14C] font-bold">•</span>
                  <span>Un impact social et environnemental positif mesurable dans les plantations.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#00A14C] font-bold">•</span>
                  <span>Un partenaire rigoureux, digne de confiance et engagé sur le long terme.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#00A14C] font-bold">•</span>
                  <span>Une alliance parfaite de la qualité produit et du respect de la nature.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Legal / Contact section matching the back of the brochure exactly */}
          <div className="bg-[#5C3E35] text-[#FAF8F5] rounded-2xl p-8 md:p-10 space-y-6">
            <h3 className="text-2xl font-serif font-bold border-b border-white/20 pb-4 text-center">
              Contacts & Mentions Institutionnelles
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="space-y-3">
                <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#C99A49]">Siège & Coordonnées</h4>
                <div className="space-y-2.5 text-xs font-sans text-white/80">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-[#C99A49] flex-shrink-0 mt-0.5" />
                    <span>DOBA, SAN-PEDRO, Côte d'Ivoire</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-[#C99A49] flex-shrink-0 mt-0.5" />
                    <span>Boîte Postale : 01 BP1263 San-Pedro 01, M-COMMODITIES</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#C99A49]">Contact Direct</h4>
                <div className="space-y-2.5 text-xs font-sans text-white/80">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-[#C99A49]" />
                    <span>+225 07 00 70 70 16</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-[#C99A49]" />
                    <span>+225 07 08 17 80 07</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-[#C99A49]" />
                    <span>moussa@mcommodities.ci</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#C99A49]">Mentions Légales</h4>
                <div className="space-y-2 text-xs font-sans text-white/80">
                  <div><strong>N°RCCM :</strong> CI-SAP-2022-Co-048</div>
                  <div><strong>Compte Contribuable (CC) :</strong> 2244696 G</div>
                  <div><strong>Statut juridique :</strong> Société Coopérative (COOP-CA)</div>
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-white/10 text-center text-[10px] text-white/60">
              Coopérative M-Commodities • Valuing our lands, feeding the world • Document officiel imprimable d'information.
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
