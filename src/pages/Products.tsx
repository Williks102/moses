import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crop } from '../types';
import { CROPS_DATA } from '../data';
import { Calendar, Award, CheckCircle2, Target, Coffee, Shovel, Compass, FlameKindling, ShieldCheck } from 'lucide-react';

export default function Products() {
  const [selectedCrop, setSelectedCrop] = useState<Crop>(CROPS_DATA[0]);

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-sans font-bold tracking-widest text-[#8E4D31] uppercase mb-2 block">
            Notre Catalogue Agricole
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-[#5C3E35] leading-tight mb-4">
            Cultures d'Origine & Marques
          </h1>
          <p className="text-base font-sans text-[#5C544C] leading-relaxed">
            Nous cultivons et transformons les plus belles matières premières de Côte d'Ivoire dans le respect de chartes de durabilité rigoureuses et d'un savoir-faire artisanal de pointe.
          </p>
        </div>

        {/* Dynamic Spotlight Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Side: Crop Selectors */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            {CROPS_DATA.map((crop) => {
              const isSelected = selectedCrop.id === crop.id;
              return (
                <button
                  key={crop.id}
                  onClick={() => setSelectedCrop(crop)}
                  className={`group text-left p-6 rounded-[16px] transition-all duration-300 border cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? 'bg-[#00A14C] border-[#00A14C] shadow-md'
                      : 'bg-white border-[#EAE5DF] hover:border-[#00A14C]/40 hover:bg-[#F5F2EB]'
                  }`}
                >
                  <div className="relative z-10">
                    <span
                      className={`block text-xs font-sans font-bold tracking-widest uppercase mb-1.5 transition-colors ${
                        isSelected ? 'text-[#C99A49]' : 'text-[#8E4D31]'
                      }`}
                    >
                      {crop.scientificName}
                    </span>
                    <span
                      className={`block text-lg md:text-xl font-serif font-medium transition-colors ${
                        isSelected ? 'text-white' : 'text-[#1C1814] group-hover:text-[#00A14C]'
                      }`}
                    >
                      {crop.name.split(" d'")[0]}
                    </span>
                    <span
                      className={`block text-xs font-sans mt-3 transition-colors ${
                        isSelected ? 'text-white/85' : 'text-[#7C7265]'
                      }`}
                    >
                      Récolte : {crop.harvestSeason.split(' (')[0]}
                    </span>
                  </div>

                  {!isSelected && (
                    <div className="absolute top-0 right-0 w-2 h-full bg-[#8E4D31] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </button>
              );
            })}

            <div className="p-6 rounded-[16px] bg-[#F2ECE4] border border-[#EAE5DF]">
              <span className="block text-xs font-sans font-bold tracking-wider text-[#8E4D31] uppercase mb-2 flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#00A14C]" />
                <span>Normes d'Excellence</span>
              </span>
              <p className="text-xs font-sans text-[#5C544C] leading-relaxed">
                Toutes nos fèves et amandes de cajou sont soumises à un séchage naturel homogène et à des tests de coupe (Cut Test) stricts avant scellage des sacs dans nos magasins de Doba.
              </p>
            </div>
          </div>

          {/* Right Side: Crop Showcase */}
          <div className="lg:col-span-8 bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCrop.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-[#EAE5DF] rounded-[20px] overflow-hidden shadow-sm"
              >
                {/* High-Resolution Picture Frame */}
                <div className="w-full h-[320px] md:h-[400px] relative overflow-hidden bg-[#EAE5DF]">
                  <img
                    src={selectedCrop.image}
                    alt={selectedCrop.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#00A14C]/5 mix-blend-multiply" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1C1814]/90 via-[#1C1814]/30 to-transparent p-6 md:p-8 flex flex-col justify-end">
                    <span className="text-xs font-sans font-bold tracking-widest text-[#C99A49] uppercase mb-1">
                      {selectedCrop.scientificName}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif text-white font-medium leading-tight">
                      {selectedCrop.name}
                    </h3>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 md:p-8 space-y-8">
                  {/* Description */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#5C3E35]">
                      À Propos de la Culture
                    </h4>
                    <p className="text-sm font-sans text-[#5C544C] leading-relaxed">
                      {selectedCrop.description}
                    </p>
                  </div>

                  {/* Quick Specs / Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 border-y border-[#EAE5DF] py-6">
                    {selectedCrop.keyStats.map((stat, idx) => (
                      <div key={idx} className="text-center md:text-left">
                        <span className="block text-[10px] md:text-xs font-sans text-[#7C7265] uppercase tracking-wider mb-1">
                          {stat.label}
                        </span>
                        <span className="block text-base md:text-xl font-serif font-semibold text-[#8E4D31]">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Varieties & Certifications */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Target className="w-4 h-4 text-[#C99A49]" />
                        <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#5C3E35]">
                          Variétés Cultivées
                        </h4>
                      </div>
                      <ul className="space-y-1.5">
                        {selectedCrop.varieties.map((item, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-xs font-sans text-[#5C544C]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#8E4D31]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-[#C99A49]" />
                        <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-[#5C3E35]">
                          Certifications & Labels
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedCrop.certifications.map((cert, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#F2ECE4] border border-[#E4DDD3] text-[#00A14C] text-[10px] font-sans font-semibold uppercase tracking-wider"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#C99A49]" />
                            <span>{cert}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-4 rounded-xl bg-white border border-[#EAE5DF] text-[#5C544C]">
                    <Calendar className="w-5 h-5 text-[#8E4D31] flex-shrink-0" />
                    <div className="text-xs font-sans">
                      <strong className="text-[#5C3E35] font-semibold">Période de récolte principale :</strong>{' '}
                      {selectedCrop.harvestSeason}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Consumer Brands Section - Torrefied Coffee / Chocolates (MosesCafé, MosesChoco) */}
        <div className="bg-white border-t border-[#EAE5DF] pt-16">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-sans font-bold tracking-widest text-[#8E4D31] uppercase mb-1.5 block">
              Valorisation Locale & Marques Grand Public
            </span>
            <h2 className="text-2xl md:text-4xl font-serif text-[#5C3E35] leading-tight">
              Nos Marques de Consommation Directe
            </h2>
            <p className="text-xs md:text-sm font-sans text-[#5C544C] mt-2">
              Nous portons fièrement le savoir-faire ivoirien auprès des consommateurs à travers des marques d'exception valorisant l'origine locale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* MosesCafé */}
            <div className="bg-white border border-[#EAE5DF] rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row">
              <div className="w-full md:w-2/5 h-48 md:h-auto relative bg-[#F2ECE4]">
                {/* Fallback image of Coffee package */}
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <div className="space-y-2">
                    <Coffee className="w-12 h-12 text-[#8E4D31] mx-auto" />
                    <span className="block font-serif font-bold text-lg text-[#5C3E35]">MosesCafé</span>
                    <span className="block text-[9px] font-sans text-[#8E4D31] uppercase tracking-wider font-semibold">Café Moulu 100% Robusta</span>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-sans font-bold text-[#8E4D31] uppercase tracking-wider">Commercialisé</span>
                  <h3 className="text-xl font-serif font-bold text-[#5C3E35]">MosesCafé - L'Arôme de nos Racines</h3>
                  <p className="text-xs md:text-sm font-sans text-[#5C544C] leading-relaxed">
                    Un café expresso d'Afrique de l'Ouest puissant et corsé, cultivé à l'ombre d'essences locales et torréfié artisanalement pour exprimer un parfum d'une rare intensité.
                  </p>
                </div>
                <div className="border-t border-[#EAE5DF] pt-4 text-xs font-sans font-semibold text-[#8E4D31]">
                  Disponible en sachet hermétique de 250g and 500g.
                </div>
              </div>
            </div>

            {/* MosesChoco */}
            <div className="bg-white border border-[#EAE5DF] rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row">
              <div className="w-full md:w-2/5 h-48 md:h-auto relative bg-[#F2ECE4]">
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <div className="space-y-2">
                    <FlameKindling className="w-12 h-12 text-[#00A14C] mx-auto" />
                    <span className="block font-serif font-bold text-lg text-[#5C3E35]">MosesChoco</span>
                    <span className="block text-[9px] font-sans text-[#00A14C] uppercase tracking-wider font-semibold">Chocolat Fin de Terroir</span>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-sans font-bold text-[#00A14C] uppercase tracking-wider">Projet en cours de lancement</span>
                  <h3 className="text-xl font-serif font-bold text-[#5C3E35]">MosesChoco - L'Inspiration Cacao</h3>
                  <p className="text-xs md:text-sm font-sans text-[#5C544C] leading-relaxed">
                    Notre prochaine marque de chocolat fin de terroir, issue de fèves sélectionnées de nos sections de Doba, travaillées à 100% localement pour retenir toute la valeur en Côte d'Ivoire.
                  </p>
                </div>
                <div className="border-t border-[#EAE5DF] pt-4 text-xs font-sans font-semibold text-[#00A14C]">
                  Lancement prévu prochainement (Marché local et export).
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
