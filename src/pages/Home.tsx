import { motion } from 'motion/react';
import { ArrowRight, Leaf, Shield, Heart, Trees, Award, Landmark, TrendingUp, Calendar } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data';
import PartnersSection from '../components/PartnersSection';

interface HomeProps {
  onNavigate: (pageId: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="pt-20">
      {/* Premium Hero Carousel-style Section */}
      <section className="relative min-h-[90vh] flex items-center bg-[#1C1814] text-white overflow-hidden">
        {/* Deep luxurious background image with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/cocoa_beans_upload_1789393923659.jpg"
            alt="Champs de cacao de Côte d'Ivoire"
            className="w-full h-full object-cover opacity-35 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1814] via-[#1C1814]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1814]/90 via-[#1C1814]/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 py-12">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-sans font-bold tracking-widest text-[#C99A49] uppercase bg-[#C99A49]/10 border border-[#C99A49]/30 px-3.5 py-1.5 rounded-full w-fit block">
              Coopérative MCOMMODITIES COOP-CA
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-extrabold leading-tight text-[#FAF8F5]">
              L'Excellence Agricole Durable de Côte d'Ivoire
            </h1>
            <p className="text-base md:text-lg font-sans text-white/80 leading-relaxed max-w-2xl">
              Leader dans la production, la collecte et la valorisation du cacao certifié Rainforest Alliance, du café Robusta d'altitude et de noix de cajou premium à San-Pedro et dans le Cavally.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => onNavigate('products')}
                className="px-6 py-3.5 rounded-full bg-[#D32F2F] hover:bg-[#B71C1C] text-white text-xs font-sans font-bold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] flex items-center space-x-2"
              >
                <span>Découvrir Nos Produits</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('sustainability')}
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-sans font-bold tracking-wider uppercase transition-all duration-300 backdrop-blur-sm"
              >
                Notre Modèle RSE
              </button>
            </div>
          </div>
        </div>
      </section>
 
      {/* Barry-Callebaut Style Activity Blocks Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-sans font-bold tracking-widest text-[#8E4D31] uppercase mb-2 block">
              Filières & Savoir-Faire
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#5C3E35] leading-tight">
              Au Cœur de la Chaîne de Valeur
            </h2>
            <div className="h-1 w-20 bg-[#00A14C] mx-auto rounded-full mt-4 mb-6" />
            <p className="text-base font-sans text-[#5C544C]">
              Nous cultivons et façonnons des matières premières de premier choix, en garantissant une traçabilité totale de la plantation de nos 3 427 membres jusqu'aux transformateurs mondiaux.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cocoa Activity Block */}
            <div className="group bg-white border border-[#EAE5DF] rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-56 relative overflow-hidden">
                  <img
                    src="/assets/images/cocoa_beans_upload_1789393923659.jpg"
                    alt="Cacao fin"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-[#00A14C] text-[#FAF8F5] text-[10px] font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Cacao Fin & Certifié
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-xl font-serif font-bold text-[#5C3E35] group-hover:text-[#D32F2F] transition-colors">
                    Fèves de Cacao d'Exception
                  </h3>
                  <p className="text-sm font-sans text-[#5C544C] leading-relaxed">
                    Fèves sélectionnées, fermentées sous feuilles de bananier et séchées au soleil. Certifiées Rainforest Alliance pour un chocolat d'origine pure.
                  </p>
                </div>
              </div>
              <div className="p-8 pt-0">
                <button
                  onClick={() => onNavigate('products')}
                  className="text-xs font-sans font-bold text-[#D32F2F] uppercase tracking-wider flex items-center space-x-2 group-hover:translate-x-1.5 transition-transform"
                >
                  <span>Spécifications & Variétés</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Coffee Activity Block */}
            <div className="group bg-white border border-[#EAE5DF] rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-56 relative overflow-hidden">
                  <img
                    src="/assets/images/m_commodities_coffee_1788199522255.jpg"
                    alt="Café Robusta"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-[#8E4D31] text-[#FAF8F5] text-[10px] font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Robusta d'Altitude
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-xl font-serif font-bold text-[#5C3E35] group-hover:text-[#D32F2F] transition-colors">
                    Café Robusta & Torréfaction
                  </h3>
                  <p className="text-sm font-sans text-[#5C544C] leading-relaxed">
                    Cerises cueillies manuellement à maturité et valorisées localement à travers notre marque grand public exclusive MosesCafé.
                  </p>
                </div>
              </div>
              <div className="p-8 pt-0">
                <button
                  onClick={() => onNavigate('products')}
                  className="text-xs font-sans font-bold text-[#D32F2F] uppercase tracking-wider flex items-center space-x-2 group-hover:translate-x-1.5 transition-transform"
                >
                  <span>En savoir plus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Cashew Activity Block */}
            <div className="group bg-white border border-[#EAE5DF] rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="h-56 relative overflow-hidden">
                  <img
                    src="/assets/images/m_commodities_cashew_1788199509590.jpg"
                    alt="Noix de Cajou"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-[#C99A49] text-[#FAF8F5] text-[10px] font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Anacarde de Choix
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-xl font-serif font-bold text-[#5C3E35] group-hover:text-[#D32F2F] transition-colors">
                    Noix de Cajou Brutes
                  </h3>
                  <p className="text-sm font-sans text-[#5C544C] leading-relaxed">
                    Noix de cajou sélectionnées pour leur excellent Outturn (KOR) et calibrage, collectées et expédiées directement depuis San-Pedro.
                  </p>
                </div>
              </div>
              <div className="p-8 pt-0">
                <button
                  onClick={() => onNavigate('products')}
                  className="text-xs font-sans font-bold text-[#D32F2F] uppercase tracking-wider flex items-center space-x-2 group-hover:translate-x-1.5 transition-transform"
                >
                  <span>Spécifications & Rendements</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Corporate Summary & Big Figures Block */}
      <section className="py-20 bg-white border-t border-[#EAE5DF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-sans font-bold tracking-widest text-[#8E4D31] uppercase block">
                Notre Impact en un Coup d'Œil
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#5C3E35] leading-tight">
                Quelques Chiffres Clés de Notre Coopérative
              </h2>
              <p className="text-base font-sans text-[#5C544C] leading-relaxed">
                Notre engagement est visible au quotidien à travers la croissance de nos infrastructures territoriales et le soutien à nos coopérateurs à travers le Cavally et le Bas-Sassandra.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="border-l-4 border-[#00A14C] pl-4 py-2">
                  <span className="block text-3xl font-serif font-bold text-[#5C3E35]">3 427</span>
                  <span className="block text-xs font-sans text-[#7C7265] uppercase tracking-wider font-semibold">Membres engagés</span>
                </div>
                <div className="border-l-4 border-[#8E4D31] pl-4 py-2">
                  <span className="block text-3xl font-serif font-bold text-[#5C3E35]">11 417 Ha</span>
                  <span className="block text-xs font-sans text-[#7C7265] uppercase tracking-wider font-semibold">Superficie cultivée</span>
                </div>
                <div className="border-l-4 border-[#C99A49] pl-4 py-2">
                  <span className="block text-3xl font-serif font-bold text-[#5C3E35]">11 046 T</span>
                  <span className="block text-xs font-sans text-[#7C7265] uppercase tracking-wider font-semibold">Production annuelle</span>
                </div>
                <div className="border-l-4 border-[#00A14C] pl-4 py-2">
                  <span className="block text-3xl font-serif font-bold text-[#5C3E35]">100%</span>
                  <span className="block text-xs font-sans text-[#7C7265] uppercase tracking-wider font-semibold">Traçabilité parcelle</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-5 py-3 rounded-full bg-[#D32F2F] hover:bg-[#B71C1C] text-[#FAF8F5] text-xs font-sans font-bold tracking-wider uppercase transition-all duration-300"
                >
                  Consulter la Gouvernance
                </button>
              </div>
            </div>

            {/* Visual block */}
            <div className="relative rounded-[32px] overflow-hidden border border-[#EAE5DF] shadow-md h-[450px]">
              <img
                src="/pca.jpg"
                alt="PCA Soumahoro Moussa"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs font-sans font-semibold text-[#C99A49] uppercase tracking-wider">Message du PCA</span>
                <p className="font-serif font-bold text-lg leading-snug">
                  « Nous bâtissons une chaîne d'approvisionnement transparente et pleinement conforme aux exigences internationales. »
                </p>
                <span className="block text-[11px] text-white/70 font-sans uppercase mt-1">M. Soumahoro Moussa • Président MCOMMODITIES</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Actualités Section */}
      <section className="py-24 bg-[#FAF8F5] border-t border-[#EAE5DF]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-sans font-bold tracking-widest text-[#8E4D31] uppercase block">
                Actualités & Impact Terrain
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#5C3E35] leading-tight font-bold">
                Dernières Nouvelles de Nos Communautés
              </h2>
              <p className="text-sm md:text-base font-sans text-[#7C7265] leading-relaxed">
                Retrouvez les récentes initiatives de M-Commodities Coop-Ca en faveur de la durabilité, de l'éducation et de l'appui direct aux producteurs de nos régions.
              </p>
            </div>
            <button
              onClick={() => onNavigate('news')}
              className="mt-6 md:mt-0 px-6 py-3 rounded-full border border-[#D32F2F] hover:bg-[#D32F2F] text-[#D32F2F] hover:text-[#FAF8F5] text-xs font-sans font-bold tracking-wider uppercase transition-all duration-300 flex items-center space-x-2 w-fit shrink-0"
            >
              <span>Voir toutes les actualités</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Actu 1 */}
            <div className="group bg-white rounded-2xl border border-[#EAE5DF] hover:border-[#C99A49] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-sans font-semibold text-[#00A14C] bg-[#00A14C]/10 border border-[#00A14C]/25 px-2.5 py-1 rounded-full">
                    Vie Sociale & Communauté
                  </span>
                  <div className="flex items-center text-[11px] font-sans text-[#7C7265] space-x-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#8E4D31]" />
                    <span>22 Août 2024</span>
                  </div>
                </div>
                <h3 className="text-lg font-serif font-bold text-[#5C3E35] group-hover:text-[#D32F2F] transition-colors leading-snug">
                  Célébration de la Fête Nationale à Duékoué
                </h3>
                <p className="text-xs md:text-sm font-sans text-[#5C544C] leading-relaxed line-clamp-3">
                  M-Commodities Coop-Ca a activement participé aux festivités de la fête nationale de l'indépendance dans le département de Duékoué. Une occasion de renforcer la cohésion sociale entre nos producteurs membres et les leaders communautaires.
                </p>
              </div>
              <div className="p-6 pt-0">
                <button
                  onClick={() => onNavigate('news')}
                  className="text-xs font-sans font-bold text-[#D32F2F] uppercase tracking-wider flex items-center space-x-1.5 group-hover:translate-x-1 transition-transform"
                >
                  <span>Lire la suite</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Actu 2 */}
            <div className="group bg-white rounded-2xl border border-[#EAE5DF] hover:border-[#C99A49] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-sans font-semibold text-[#8E4D31] bg-[#8E4D31]/10 border border-[#8E4D31]/25 px-2.5 py-1 rounded-full">
                    Soutien Agricole
                  </span>
                  <div className="flex items-center text-[11px] font-sans text-[#7C7265] space-x-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#8E4D31]" />
                    <span>17 Août 2024</span>
                  </div>
                </div>
                <h3 className="text-lg font-serif font-bold text-[#5C3E35] group-hover:text-[#D32F2F] transition-colors leading-snug">
                  Donations de Produits aux Producteurs Membres
                </h3>
                <p className="text-xs md:text-sm font-sans text-[#5C544C] leading-relaxed line-clamp-3">
                  Dans le cadre de notre programme d'appui aux planteurs, nous avons procédé à une importante distribution de produits phytosanitaires homologués et d'équipements de protection individuelle (EPI) à Doba et Duékoué.
                </p>
              </div>
              <div className="p-6 pt-0">
                <button
                  onClick={() => onNavigate('news')}
                  className="text-xs font-sans font-bold text-[#D32F2F] uppercase tracking-wider flex items-center space-x-1.5 group-hover:translate-x-1 transition-transform"
                >
                  <span>Lire la suite</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Actu 3 */}
            <div className="group bg-white rounded-2xl border border-[#EAE5DF] hover:border-[#C99A49] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-sans font-semibold text-[#C99A49] bg-[#C99A49]/10 border border-[#C99A49]/25 px-2.5 py-1 rounded-full">
                    Droits & Sensibilisation
                  </span>
                  <div className="flex items-center text-[11px] font-sans text-[#7C7265] space-x-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#8E4D31]" />
                    <span>17 Août 2024</span>
                  </div>
                </div>
                <h3 className="text-lg font-serif font-bold text-[#5C3E35] group-hover:text-[#D32F2F] transition-colors leading-snug">
                  Campagne de Sensibilisation sur la Durabilité
                </h3>
                <p className="text-xs md:text-sm font-sans text-[#5C544C] leading-relaxed line-clamp-3">
                  Tenue d'ateliers de sensibilisation communautaire axés sur la lutte contre le travail des enfants, la promotion de l'égalité des chances et la sécurité au travail dans nos sections de Doba, Guiglo et Bloléquin.
                </p>
              </div>
              <div className="p-6 pt-0">
                <button
                  onClick={() => onNavigate('news')}
                  className="text-xs font-sans font-bold text-[#D32F2F] uppercase tracking-wider flex items-center space-x-1.5 group-hover:translate-x-1 transition-transform"
                >
                  <span>Lire la suite</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Sustainable High-Impact Grid Block */}
      <section className="py-24 bg-[#00A14C] text-[#FAF8F5] relative overflow-hidden">
        <div className="absolute top-12 right-12 w-64 h-64 bg-white/5 rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest bg-white/20 text-[#FAF8F5] px-3.5 py-1.5 rounded-full w-fit block">
                Notre Engagement RSE
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-extrabold leading-tight">
                Pour un Avenir Durable de l'Agriculture Ivoirienne
              </h2>
              <p className="text-sm md:text-base text-white/80 font-sans leading-relaxed">
                Chez Moses Commodities, notre performance économique soutient directement la prospérité rurale et la préservation de l'environnement : agroforesterie, non-deforestation (EUDR) et lutte contre le travail des enfants.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={() => onNavigate('sustainability')}
                className="px-6 py-4 rounded-full bg-white text-[#00A14C] hover:bg-[#FAF8F5] text-xs font-sans font-bold tracking-wider uppercase transition-all duration-300 shadow-md hover:scale-[1.03]"
              >
                Découvrir Notre Politique RSE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners scrolling section */}
      <PartnersSection />
    </div>
  );
}
