import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Target, Calendar, MapPin, Sparkles, ShieldCheck, Heart, Building, Landmark, Scale, TrendingUp, Award, Globe, CheckCircle2, Map, Users, ArrowRight, Leaf } from 'lucide-react';
import { CORPORATE_PROFILE, REGIONS_DATA } from '../data';
import { RegionInfo } from '../types';

export default function About() {
  const profile = CORPORATE_PROFILE;
  const [selectedRegion, setSelectedRegion] = useState<RegionInfo>(REGIONS_DATA[0]);

  const values = [
    {
      title: 'Transparence Absolue',
      description: 'Nous garantissons une traçabilité intégrale de nos fèves, du champ du producteur jusqu\'au port d\'exportation de San-Pedro, grâce à une cartographie GPS polygone stricte.',
      icon: <Eye className="w-5 h-5 text-[#00A14C]" />
    },
    {
      title: 'Solidarité & Équité',
      description: 'Le soutien direct aux familles de nos 3 427 coopérateurs se traduit par le versement de primes équitables, le préfinancement des intrants et la valorisation du travail des femmes.',
      icon: <Heart className="w-5 h-5 text-rose-500" />
    },
    {
      title: 'Intégrité & Conformité',
      description: 'Nous respectons rigoureusement les réglementations nationales du Conseil du Café-Cacao et anticipons les exigences environnementales internationales (Norme européenne EUDR).',
      icon: <ShieldCheck className="w-5 h-5 text-[#8E4D31]" />
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-sans font-bold tracking-widest text-[#8E4D31] uppercase mb-2 block">
            Qui Sommes-Nous ?
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-[#5C3E35] leading-tight mb-4">
            Groupe & Gouvernance
          </h1>
          <p className="text-base font-sans text-[#5C544C] leading-relaxed">
            Une structure coopérative solide, agréée par l'État de Côte d'Ivoire pour l'exportation et la valorisation durable de nos ressources agricoles.
          </p>
        </div>

        {/* Qui Sommes-Nous Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif text-[#5C3E35]">
              Notre Histoire & Identité
            </h2>
            <p className="text-sm md:text-base font-sans text-[#5C544C] leading-relaxed">
              Fondée le <strong className="text-[#5C3E35]">19 Octobre 2022</strong>, la société coopérative <strong className="text-[#5C3E35]">MCOMMODITIES COOP-CA</strong> s’est rapidement imposée comme un pilier de la filière agricole ivoirienne. 
              Notre siège est stratégiquement situé à <strong className="text-[#5C3E35]">Doba</strong>, dans le département de San-Pedro, au cœur du premier bassin mondial de production de cacao.
            </p>
            <p className="text-sm md:text-base font-sans text-[#5C544C] leading-relaxed">
              Grâce à un réseau d'établissements secondaires à <strong className="text-[#5C3E35]">Duékoué</strong>, et des sections opérationnelles réparties sur tout le grand ouest (Guiglo, Bloléquin, Toulepleu), nous offrons un accompagnement technique et logistique de premier plan à nos coopérateurs, garantissant des matières premières pures et éthiques.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center space-x-2 text-xs font-sans text-[#1C1814] font-semibold bg-white border border-[#EAE5DF] px-4 py-2.5 rounded-full">
                <Calendar className="w-4 h-4 text-[#00A14C]" />
                <span>Créé le 19 Octobre 2022</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-sans text-[#1C1814] font-semibold bg-white border border-[#EAE5DF] px-4 py-2.5 rounded-full">
                <MapPin className="w-4 h-4 text-[#8E4D31]" />
                <span>Siège à Doba, San-Pedro</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-[32px] overflow-hidden border border-[#EAE5DF] shadow-md h-[400px]">
            <img
              src="/assets/images/cocoa_beans_upload_1789393923659.jpg"
              alt="Histoire Moses Commodities"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#C99A49]">Agriculture Durable</span>
              <p className="font-serif font-bold text-xl">De la plantation aux marchés d'exportation mondiaux</p>
            </div>
          </div>
        </div>

        {/* Mot du PCA & Fiche d'Identité */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-20">
          
          {/* Mot du PCA */}
          <div className="lg:col-span-7 bg-[#F2ECE4]/30 border border-[#EAE5DF] rounded-[24px] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#8E4D31]/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#8E4D31] bg-white border border-[#EAE5DF] px-3 py-1 rounded-full w-fit block">
                Le Mot de la Présidence
              </span>

              <blockquote className="font-serif text-lg md:text-xl text-[#5C3E35] italic leading-relaxed relative">
                <span className="absolute -top-6 -left-3 text-5xl text-[#8E4D31]/30 font-serif pointer-events-none">“</span>
                {profile.pcaMessage}
              </blockquote>
            </div>

            <div className="flex items-center space-x-4 mt-8 pt-6 border-t border-[#EAE5DF]">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#00A14C]/30 bg-white">
                <img
                  src={profile.pcaImage}
                  alt={profile.pcaName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="block font-serif font-bold text-sm text-[#5C3E35]">
                  {profile.pcaName}
                </span>
                <span className="block text-[11px] font-sans text-[#5C544C] uppercase tracking-wide font-medium">
                  {profile.pcaTitle} • Analyste Paix & Sécurité
                </span>
              </div>
            </div>
          </div>

          {/* Fiche d'identité */}
          <div className="lg:col-span-5 bg-white border border-[#EAE5DF] rounded-[24px] p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center space-x-2.5">
                <Building className="w-5 h-5 text-[#00A14C]" />
                <h3 className="text-base font-serif font-semibold text-[#5C3E35]">
                  Fiche d'Identité Légale
                </h3>
              </div>

              <div className="space-y-4 text-xs font-sans">
                <div className="flex justify-between items-start py-2 border-b border-[#EAE5DF]">
                  <span className="text-[#7C7265] uppercase text-[10px] tracking-wider">Statut Juridique :</span>
                  <span className="font-semibold text-[#5C3E35] text-right max-w-[240px]">{profile.legalStatus}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-[#EAE5DF]">
                  <span className="text-[#7C7265] uppercase text-[10px] tracking-wider">Capital Social :</span>
                  <span className="font-mono font-bold text-[#8E4D31]">{profile.capitalSocial}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-[#EAE5DF]">
                  <span className="text-[#7C7265] uppercase text-[10px] tracking-wider">Durée de Société :</span>
                  <span className="font-semibold text-[#5C3E35]">{profile.registrationDuration}</span>
                </div>

                <div className="flex justify-between items-start py-2 border-b border-[#EAE5DF]">
                  <span className="text-[#7C7265] uppercase text-[10px] tracking-wider">Siège Social :</span>
                  <span className="font-semibold text-[#5C3E35] text-right">{profile.mainOffice}</span>
                </div>

                <div className="flex justify-between items-start py-2 border-b border-[#EAE5DF]">
                  <span className="text-[#7C7265] uppercase text-[10px] tracking-wider">Établissement Secondaire :</span>
                  <span className="font-semibold text-[#5C3E35] text-right">{profile.secondaryOffice}</span>
                </div>

                <div className="flex justify-between items-start py-2">
                  <span className="text-[#7C7265] uppercase text-[10px] tracking-wider">Agrément National :</span>
                  <span className="font-semibold text-[#00A14C] text-right flex items-center space-x-1 justify-end">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C99A49] inline mr-1" />
                    <span>Exportateur Agréé Café-Cacao</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#00A14C]/5 border border-[#00A14C]/10 mt-6 text-[11px] font-sans text-[#5C544C] flex items-start space-x-2.5">
              <Landmark className="w-4.5 h-4.5 text-[#00A14C] flex-shrink-0 mt-0.5" />
              <span>
                Inscrite au Registre des Sociétés Coopératives de Côte d'Ivoire. Agréments délivrés par le Conseil du Café-Cacao pour l'exportation directe depuis le port de San-Pedro.
              </span>
            </div>
          </div>
        </div>

        {/* Territory Map Section */}
        <div className="mb-24 bg-white border border-[#EAE5DF] rounded-[24px] p-8 md:p-12 shadow-sm">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-sans font-bold tracking-widest text-[#8E4D31] uppercase mb-1.5 block">
              Notre Territoire d'Action
            </span>
            <h3 className="text-2xl md:text-3xl font-serif text-[#5C3E35] leading-tight mb-4">
              Ancrage Local & Sections Régionales
            </h3>
            <p className="text-sm font-sans text-[#5C544C] leading-relaxed">
              MCOMMODITIES est ancrée au cœur des zones agricoles les plus fertiles de l'ouest et du sud-ouest de la Côte d'Ivoire. De notre pôle de stockage à Doba aux sections de montagne du Cavally et du Guémon, nous accompagnons nos producteurs partenaires sur tout le territoire.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Interactive Vector Map */}
            <div className="lg:col-span-6 bg-[#F2ECE4]/30 border border-[#EAE5DF] rounded-[20px] p-8 relative overflow-hidden flex flex-col items-center justify-center min-h-[440px]">
              <div className="absolute inset-0 bg-[radial-gradient(#8E4D31_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
              
              <svg viewBox="0 0 100 100" className="w-full max-w-[360px] h-auto relative z-10 text-[#00A14C]/10 animate-pulse" fill="none">
                <path
                  d="M 8,35 L 14,45 L 22,52 L 42,80 M 35,40 L 22,52"
                  stroke="#8E4D31"
                  strokeWidth="0.75"
                  strokeDasharray="2 3"
                  className="opacity-50"
                />
                <path
                  d="M 5,20 C 15,30 5,45 10,65 C 15,80 30,95 45,95"
                  stroke="#00A14C"
                  strokeWidth="0.5"
                  className="opacity-20"
                />
                <path
                  d="M 35,95 Q 55,90 75,95"
                  stroke="#00A14C"
                  strokeWidth="1.5"
                  className="opacity-30"
                />
              </svg>

              {REGIONS_DATA.map((region) => {
                const isSelected = selectedRegion.id === region.id;
                return (
                  <button
                    key={region.id}
                    onClick={() => setSelectedRegion(region)}
                    style={{ left: `${region.coordinates.x}%`, top: `${region.coordinates.y}%` }}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer"
                    aria-label={`Région de ${region.name}`}
                  >
                    <span className="relative flex h-10 w-10 items-center justify-center">
                      {isSelected && (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8E4D31]/20 opacity-75"></span>
                      )}
                      <span
                        className={`relative inline-flex rounded-full h-5 w-5 items-center justify-center transition-all duration-300 ${
                          isSelected
                            ? 'bg-[#8E4D31] scale-125 shadow-md'
                            : 'bg-[#00A14C] group-hover:bg-[#8E4D31] scale-100'
                        }`}
                      >
                        <MapPin className="w-3 h-3 text-[#FAF8F5]" />
                      </span>
                    </span>
                    
                    <span className={`absolute top-6 left-1/2 transform -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-sans font-semibold tracking-wider whitespace-nowrap shadow-sm border pointer-events-none transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#00A14C] text-[#FAF8F5] border-[#00A14C] scale-105'
                        : 'bg-[#FAF8F5] text-[#5C544C] border-[#EAE5DF] opacity-70 group-hover:opacity-100'
                    }`}>
                      {region.name.split(' (')[0]}
                    </span>
                  </button>
                );
              })}

              <div className="absolute bottom-6 left-6 flex items-center space-x-1 text-[#8C8275] text-[10px] font-sans tracking-widest uppercase">
                <Map className="w-3.5 h-3.5" />
                <span>Golfe de Guinée / Port San-Pedro</span>
              </div>
            </div>

            {/* Region Details */}
            <div className="lg:col-span-6 bg-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedRegion.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-6"
                >
                  <div>
                    <span className="text-xs font-sans font-bold tracking-widest text-[#8E4D31] uppercase">
                      Département de {selectedRegion.department}
                    </span>
                    <h4 className="text-2xl md:text-3xl font-serif text-[#1C1814] font-medium mt-1">
                      {selectedRegion.name}
                    </h4>
                  </div>

                  <p className="text-sm font-sans text-[#5C544C] leading-relaxed">
                    {selectedRegion.description}
                  </p>

                  <div className="grid grid-cols-2 gap-6 border-y border-[#EAE5DF] py-6">
                    <div className="flex items-center space-x-3.5">
                      <div className="w-10 h-10 rounded-full bg-[#00A14C]/10 flex items-center justify-center text-[#00A14C]">
                        <Users className="w-5 h-5 text-[#00A14C]" />
                      </div>
                      <div>
                        <span className="block text-[10px] font-sans text-[#7C7265] uppercase">Producteurs actifs</span>
                        <span className="block text-base font-serif font-semibold text-[#1C1814]">
                          {selectedRegion.farmersCount} Membres
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3.5">
                      <div className="w-10 h-10 rounded-full bg-[#8E4D31]/10 flex items-center justify-center text-[#8E4D31]">
                        <Leaf className="w-5 h-5 text-[#8E4D31]" />
                      </div>
                      <div>
                        <span className="block text-[10px] font-sans text-[#7C7265] uppercase">Cultures cultivées</span>
                        <span className="block text-base font-serif font-semibold text-[#1C1814]">
                          {selectedRegion.mainCrops.join(' & ')}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#F2ECE4]/30 border border-[#EAE5DF] text-xs font-sans text-[#5C544C] space-y-2">
                    <strong className="text-[#1C1814] block font-semibold uppercase tracking-wider text-[11px]">
                      Impact & Traçabilité Locale
                    </strong>
                    <p className="leading-relaxed">
                      Chaque pôle régional de MCOMMODITIES dispose d'un technicien agronomique dédié, équipé d'une application mobile de cartographie pour enregistrer les récoltes et s'assurer que les parcelles respectent les forêts classées environnantes.
                    </p>
                  </div>

                  <span className="block text-[11px] text-[#8C8275] font-sans italic flex items-center">
                    * Cliquez sur les points de la carte pour faire défiler nos autres zones de collecte.
                    <ArrowRight className="w-3.5 h-3.5 ml-1 text-[#8E4D31]" />
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Piliers Fondamentaux Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-serif text-[#5C3E35]">
              Nos Piliers Fondamentaux
            </h3>
            <p className="text-xs md:text-sm font-sans text-[#5C544C] mt-2">
              Des valeurs morales et opérationnelles ancrées au cœur de chacun de nos projets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, index) => (
              <div
                key={index}
                className="bg-white border border-[#EAE5DF] rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:shadow-sm transition-shadow duration-300"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full bg-[#F2ECE4] flex items-center justify-center">
                    {val.icon}
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#5C3E35]">
                    {val.title}
                  </h4>
                  <p className="text-xs md:text-sm font-sans text-[#5C544C] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projets et Ambitions Block */}
        <div className="bg-[#F2ECE4]/20 border border-[#EAE5DF] rounded-[24px] p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C99A49]/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-sans font-bold tracking-widest text-[#8E4D31] uppercase mb-1.5 block">
              Futur & Perspectives
            </span>
            <h3 className="text-2xl md:text-4xl font-serif text-[#5C3E35] leading-tight">
              Projets & Ambitions
            </h3>
            <p className="text-xs md:text-sm font-sans text-[#5C544C] mt-2">
              Une vision industrielle et commerciale ambitieuse pour ancrer durablement la valeur ajoutée de nos matières premières au cœur de nos terroirs de Côte d'Ivoire.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
            
            {/* Transformation & Export */}
            <div className="space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#8E4D31] flex items-center justify-center border border-amber-100 flex-shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#5C3E35]">
                      Transformation & Volumétrie
                    </h4>
                    <span className="text-[10px] font-sans text-[#8E4D31] uppercase tracking-wider font-semibold">
                      Objectifs Industriels
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-sans font-semibold text-[#5C3E35]">
                    <span>Exportation directe des fèves de cacao</span>
                    <span className="text-[#00A14C]">Objectif : 50%</span>
                  </div>
                  <div className="h-2 bg-[#F2ECE4] rounded-full overflow-hidden">
                    <div className="h-full bg-[#00A14C] rounded-full" style={{ width: '50%' }} />
                  </div>
                  <p className="text-[11px] font-sans text-[#7C7265]">
                    Maximiser l'export direct vers nos partenaires internationaux sans intermédiaire.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-sans font-semibold text-[#5C3E35]">
                    <span>Semi-transformation de la production de cacao</span>
                    <span className="text-[#8E4D31]">Objectif : 25%</span>
                  </div>
                  <div className="h-2 bg-[#F2ECE4] rounded-full overflow-hidden">
                    <div className="h-full bg-[#8E4D31] rounded-full" style={{ width: '25%' }} />
                  </div>
                  <p className="text-[11px] font-sans text-[#7C7265]">
                    Produire du beurre, de la poudre et de la pâte de cacao destinés aux marchés nationaux et mondiaux.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-sans font-semibold text-[#5C3E35]">
                    <span>Transformation locale du café</span>
                    <span className="text-[#C99A49]">Capacité accrue</span>
                  </div>
                  <div className="h-2 bg-[#F2ECE4] rounded-full overflow-hidden">
                    <div className="h-full bg-[#C99A49] rounded-full" style={{ width: '75%' }} />
                  </div>
                  <p className="text-[11px] font-sans text-[#7C7265]">
                    Torréfaction et mouture locale premium de nos cerises de café d'altitude.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#EAE5DF] flex items-center space-x-2 text-xs font-sans text-[#7C7265]">
                <Globe className="w-4 h-4 text-sky-600 flex-shrink-0" />
                <span>Exportation vers la sous-région, l'Europe, l'Amérique et l'Asie.</span>
              </div>
            </div>

            {/* Branding & Modernization */}
            <div className="bg-white border border-[#EAE5DF] rounded-2xl p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#00A14C] flex items-center justify-center border border-emerald-100 flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#5C3E35]">
                      Marques & Infrastructures
                    </h4>
                    <span className="text-[10px] font-sans text-[#00A14C] uppercase tracking-wider font-semibold">
                      Valeur & Innovation
                    </span>
                  </div>
                </div>
 
                <ul className="space-y-4 text-xs md:text-sm font-sans text-[#5C544C]">
                  <li className="flex items-start space-x-3 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#00A14C] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-[#5C3E35]">Développement de marques propres</strong> : 
                      <p className="mt-0.5">Renforcer la notoriété de <strong className="text-[#8E4D31]">MosesCafé</strong> et lancer très prochainement notre nouvelle marque de chocolat fin <strong className="text-[#8E4D31]">MosesChoco</strong>.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#00A14C] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-[#5C3E35]">Agriculture durable & labellisation</strong> :
                      <p className="mt-0.5">Participation élargie aux programmes de certification internationale de premier plan (*Fairtrade*, *Agriculture Biologique*, etc.).</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#00A14C] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-[#5C3E35]">Infrastructures technologiques</strong> :
                      <p className="mt-0.5">Installation d'un site de fermentation et de séchage contrôlé du cacao pour garantir un profil organoleptique haut de gamme.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EAE5DF] text-xs font-sans text-[#7C7265] italic">
                Construire une chaîne de valeur moderne et pérenne de bout en bout.
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
