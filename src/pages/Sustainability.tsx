import { motion } from 'motion/react';
import { ACHIEVEMENTS_DATA, TIMELINE_TRACEABILITY } from '../data';
import { Users, Trees, GraduationCap, QrCode, Sparkles, Heart, Leaf, CheckCircle2, MapPin, FlameKindling, Sun, ShieldCheck, Ship } from 'lucide-react';

export default function Sustainability() {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-6 h-6 text-[#00A14C]" />;
      case 'Land':
      case 'Trees':
        return <Trees className="w-6 h-6 text-[#8E4D31]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#C99A49]" />;
      case 'QrCode':
        return <QrCode className="w-6 h-6 text-[#00A14C]" />;
      default:
        return <Users className="w-6 h-6" />;
    }
  };

  const getTraceIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#8E4D31]" />;
      case 'FlameKindling':
        return <FlameKindling className="w-5 h-5 text-[#C99A49]" />;
      case 'Sun':
        return <Sun className="w-5 h-5 text-[#C99A49]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#00A14C]" />;
      case 'Ship':
        return <Ship className="w-5 h-5 text-[#00A14C]" />;
      default:
        return <MapPin className="w-5 h-5 text-[#8E4D31]" />;
    }
  };

  const socialPoints = [
    'Formation continue des producteurs aux bonnes pratiques',
    'Autonomisation active des femmes productrices',
    'Création d\'emplois décents pour les jeunes en milieu rural',
    'Accès aux soins de santé et à l\'éducation scolaire des enfants',
    'Lutte active et permanente contre le travail des enfants'
  ];

  const envPoints = [
    'Transition vers des modèles d\'agroécologie performants',
    'Déploiement intensif de systèmes d\'agroforesterie',
    'Lutte active contre la déforestation (cartographie EUDR) et reboisement',
    'Économie durable : revenus équitables, circuits courts et durables'
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-sans font-bold tracking-widest text-[#8E4D31] uppercase mb-2 block">
            Impact & Valeur Partagée
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-[#5C3E35] leading-tight mb-4">
            Durabilité & RSE
          </h1>
          <p className="text-base font-sans text-[#5C544C] leading-relaxed">
            Pour Moses Commodities, la performance commerciale est indissociable du progrès social, de la juste rémunération de nos membres et de la régénération forestière.
          </p>
        </div>

        {/* 1. Nos Chiffres-clés Grid */}
        <div className="mb-20">
          <h3 className="text-lg font-serif font-bold text-[#5C3E35] uppercase tracking-wider mb-8 flex items-center space-x-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#00A14C]" />
            <span>Nos Chiffres-clés d'Impact</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACHIEVEMENTS_DATA.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#EAE5DF] rounded-[16px] p-6 flex flex-col justify-between hover:shadow-sm transition-all duration-300 hover:border-[#00A14C]/30"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#F2ECE4] flex items-center justify-center">
                    {getIconComponent(item.icon)}
                  </div>
                  <h4 className="text-base font-serif font-semibold text-[#5C3E35] leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs font-sans text-[#5C544C] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EAE5DF]">
                  <span className="block text-2xl font-serif font-bold text-[#00A14C]">
                    {item.metric}
                  </span>
                  <span className="block text-[10px] font-sans text-[#7C7265] uppercase tracking-wider font-semibold">
                    {item.metricLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Engagement RSE Panel */}
        <div className="bg-[#F2ECE4]/30 border border-[#EAE5DF] rounded-[24px] p-8 md:p-12 mb-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-sans font-bold tracking-widest text-[#8E4D31] uppercase mb-1.5 block">
              Responsabilité Sociétale des Entreprises
            </span>
            <h3 className="text-2xl md:text-3xl font-serif text-[#5C3E35] leading-tight">
              Notre Engagement RSE
            </h3>
            <p className="text-xs md:text-sm font-sans text-[#5C544C] mt-2">
              Nous traduisons nos valeurs en actions concrètes au bénéfice de nos communautés locales et du patrimoine écologique ivoirien.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
            
            {/* Social Panel */}
            <div className="bg-white border border-[#EAE5DF] rounded-2xl p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100 flex-shrink-0">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#5C3E35]">
                      Volet Social & Communautaire
                    </h4>
                    <span className="text-[10px] font-sans text-rose-600 uppercase tracking-wider font-semibold">
                      Progrès & Humain
                    </span>
                  </div>
                </div>

                <ul className="space-y-4">
                  {socialPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-xs md:text-sm font-sans text-[#5C544C] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-[#EAE5DF] text-xs font-sans text-[#7C7265] italic">
                Soutenir les familles de nos 3 427 membres coopérateurs au quotidien.
              </div>
            </div>

            {/* Environmental Panel */}
            <div className="bg-white border border-[#EAE5DF] rounded-2xl p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#00A14C] flex items-center justify-center border border-emerald-100 flex-shrink-0">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#5C3E35]">
                      Volet Environnemental & Écologique
                    </h4>
                    <span className="text-[10px] font-sans text-[#00A14C] uppercase tracking-wider font-semibold">
                      Durabilité & Restauration
                    </span>
                  </div>
                </div>

                <ul className="space-y-4">
                  {envPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-xs md:text-sm font-sans text-[#5C544C] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#00A14C] mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-[#EAE5DF] text-xs font-sans text-[#7C7265] italic">
                Veiller sur nos 11 417,69 Hectares de parcelles avec rigueur et intégrité.
              </div>
            </div>

          </div>
        </div>

        {/* 3. Cocoa Traceability Flow (Timeline) */}
        <div>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-sans font-bold tracking-widest text-[#8E4D31] uppercase mb-1.5 block">
              Transparence & Origine
            </span>
            <h3 className="text-2xl md:text-3xl font-serif text-[#5C3E35] leading-tight">
              100% Traçable : De la parcelle au conteneur
            </h3>
            <p className="text-xs md:text-sm font-sans text-[#5C544C] mt-2">
              Grâce à notre protocole de scellage QR code et de cartographie polygone GPS par nos équipes à Doba, nous garantissons l'absence totale de déforestation pour chaque tonne exportée.
            </p>
          </div>

          <div className="relative border-l border-[#EAE5DF] ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
            {TIMELINE_TRACEABILITY.map((step) => (
              <div key={step.step} className="relative">
                {/* Icon wrapper badge */}
                <div className="absolute -left-[54px] md:-left-[70px] top-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-[#EAE5DF] flex items-center justify-center shadow-sm">
                  {getTraceIcon(step.icon)}
                </div>
                
                <div className="space-y-1.5 max-w-3xl">
                  <span className="inline-block text-[9px] font-sans font-bold tracking-wider text-[#00A14C] bg-[#00A14C]/10 border border-[#00A14C]/25 px-2.5 py-0.5 rounded-full">
                    Étape {step.step} • {step.location}
                  </span>
                  <h4 className="text-base md:text-lg font-serif font-bold text-[#5C3E35]">
                    {step.label}
                  </h4>
                  <p className="text-xs md:text-sm font-sans text-[#5C544C] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Small brand claim */}
        <div className="mt-16 flex items-center justify-center space-x-2 text-[11px] font-sans text-[#7C7265] italic">
          <Sparkles className="w-3.5 h-3.5 text-[#C99A49]" />
          <span>Notre objectif : Atteindre 100% de conformité aux règlements de non-déforestation de l'Union Européenne (EUDR).</span>
        </div>

      </div>
    </div>
  );
}
