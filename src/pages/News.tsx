import { Calendar, Heart, ShieldAlert, Award, Star, Compass, Trees } from 'lucide-react';
 
interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  badgeColor: string;
}
 
export default function News() {
  const news: NewsItem[] = [
    {
      id: 'reforestation',
      title: 'Planting et distribution de plants d\'ombrage aux producteurs',
      date: '15 Septembre 2026',
      category: 'Agroforesterie & Environnement',
      description: 'Lancement officiel de notre grand programme d\'agroforesterie avec le planting et la distribution gratuite de milliers de plants d\'ombrage (essences forestières locales) à nos producteurs membres de Doba, Duékoué, Guiglo et Bloléquin. Cette initiative clé renforce la biodiversité, protège les cacaoyers du stress hydrique et garantit la pleine conformité aux nouvelles exigences environnementales internationales.',
      badgeColor: 'bg-[#00A14C]/10 text-[#00A14C] border-[#00A14C]/25'
    },
    {
      id: 'independence',
      title: 'Célébration de la Fête Nationale de l\'Indépendance à Duékoué',
      date: '22 Août 2024',
      category: 'Vie Sociale & Communauté',
      description: 'M-Commodities Coop-Ca a activement participé aux festivités de la fête nationale de l\'indépendance dans le département de Duékoué. Une occasion de renforcer la cohésion sociale entre nos producteurs membres, les leaders communautaires et les autorités administratives du Guémon pour un développement agricole harmonieux.',
      badgeColor: 'bg-[#00A14C]/10 text-[#00A14C] border-[#00A14C]/20'
    },
    {
      id: 'phytosanitary',
      title: 'Donations de Produits Phytosanitaires aux Producteurs Membres',
      date: '17 Août 2024',
      category: 'Soutien Agricole',
      description: 'Dans le cadre de notre programme annuel d\'appui aux planteurs, nous avons procédé à une importante distribution de produits phytosanitaires homologués et d\'équipements de protection individuelle (EPI) à Doba et Duékoué. Cet appui vise à protéger les vergers contre les maladies tout en enseignant les bonnes pratiques d\'application sécurisée.',
      badgeColor: 'bg-[#8E4D31]/10 text-[#8E4D31] border-[#8E4D31]/20'
    },
    {
      id: 'awareness',
      title: 'Campagne de Sensibilisation sur la Durabilité et les Droits Humains',
      date: '17 Août 2024',
      category: 'Droits & Sensibilisation',
      description: 'Tenue d\'ateliers de sensibilisation communautaire axés sur la lutte contre le travail des enfants, la promotion de l\'égalité des chances et la sécurité au travail dans nos sections de Doba, Guiglo et Bloléquin. M-Commodities réaffirme son engagement pour un cacao éthique et exempt de toute exploitation humaine.',
      badgeColor: 'bg-[#C99A49]/10 text-[#C99A49] border-[#C99A49]/20'
    }
  ];
 
  const getIcon = (id: string) => {
    switch (id) {
      case 'reforestation':
        return <Trees className="w-5 h-5 text-[#00A14C]" />;
      case 'independence':
        return <Award className="w-5 h-5 text-[#00A14C]" />;
      case 'phytosanitary':
        return <Heart className="w-5 h-5 text-[#8E4D31]" />;
      case 'awareness':
        return <ShieldAlert className="w-5 h-5 text-[#C99A49]" />;
      default:
        return <Award className="w-5 h-5" />;
    }
  };
 
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
         
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-sans font-bold tracking-widest text-[#8E4D31] uppercase mb-2 block">
            Actualités & Actions de Terrain
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-[#5C3E35] leading-tight mb-4">
            Actualités & Stories
          </h1>
          <p className="text-base font-sans text-[#5C544C] leading-relaxed">
            Découvrez nos actions sur le terrain, nos partenariats locaux et les avancées sociales menées auprès de nos communautés agricoles en Côte d'Ivoire.
          </p>
        </div>
 
        {/* Featured News Article (Big Hero card style) */}
        <div className="bg-white border border-[#EAE5DF] rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:p-10 mb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 h-64 md:h-80 rounded-2xl overflow-hidden bg-emerald-50 relative">
            <div className="absolute inset-0 bg-[#00A14C]/5" />
            <img
              src="/assets/images/shade_tree_planting_1789501486182.jpg"
              alt="Planting et distribution de plants d'ombrage"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
           
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="text-[10px] font-sans font-bold px-3 py-1 bg-[#00A14C]/10 text-[#00A14C] border border-[#00A14C]/25 rounded-full uppercase tracking-wider">
                À la Une • Agroforesterie durable
              </span>
              <span className="text-xs font-sans text-[#7C7265] flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>15 Septembre 2026</span>
              </span>
            </div>
 
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#5C3E35] hover:text-[#00A14C] transition-colors leading-snug">
              Grand Succès : Planting et distribution de plants d'ombrage dans nos sections
            </h2>
            
            <p className="text-xs md:text-sm font-sans text-[#5C544C] leading-relaxed">
              M-Commodities Coop-Ca intensifie ses efforts environnementaux. Cette semaine, nos équipes techniques de terrain ont supervisé la distribution gratuite et le planting de milliers de plants d'ombrage d'essences forestières précieuses auprès de nos producteurs membres à Doba, Duékoué, Guiglo et Bloléquin. Cette action stratégique favorise la biodiversité, améliore la résilience climatique des plantations de cacaoyers et de caféiers face à la sécheresse, et assure la conformité absolue des parcelles à la réglementation européenne (EUDR).
            </p>
 
            <div className="flex items-center space-x-2.5 pt-2 text-[#8E4D31] text-xs font-sans font-bold uppercase tracking-wider">
              <Star className="w-4 h-4 text-[#C99A49] fill-current" />
              <span>Agroforesterie active pour la préservation de la forêt ivoirienne.</span>
            </div>
          </div>
        </div>

        {/* Dedicated Photos Gallery for the Featured Article */}
        <div className="bg-[#FAF8F5] border border-[#EAE5DF] rounded-[24px] p-6 md:p-10 mb-16 space-y-8">
          <div className="space-y-2">
            <span className="text-[10px] font-sans font-bold px-3 py-1 bg-[#8E4D31]/10 text-[#8E4D31] border border-[#8E4D31]/25 rounded-full uppercase tracking-wider w-fit block">
              Reportage Photo Terrain
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#5C3E35]">
              Galerie Photos : La distribution & le planting en images
            </h3>
            <p className="text-xs md:text-sm font-sans text-[#7C7265] max-w-3xl">
              Retrouvez en images les moments forts de la distribution gratuite des plants d'ombrage et des sessions de plantation supervisées par les agents de terrain de M-Commodities Coop-Ca dans nos sections.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Photo 1 */}
            <div className="group relative rounded-xl overflow-hidden border border-[#EAE5DF] bg-white shadow-sm hover:shadow-md transition-all duration-300 h-64 flex flex-col">
              <div className="relative flex-1 overflow-hidden">
                <img
                  src="/assets/images/IMG-20260915-WA0004.jpg"
                  alt="Préparation et chargement des plants"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-3 bg-white border-t border-[#F2ECE4]">
                <p className="text-[11px] font-sans font-semibold text-[#5C3E35] leading-tight">
                  Chargement des jeunes plants
                </p>
                <p className="text-[10px] font-sans text-[#7C7265] mt-0.5">
                  Départ de la pépinière
                </p>
              </div>
            </div>

            {/* Photo 2 */}
            <div className="group relative rounded-xl overflow-hidden border border-[#EAE5DF] bg-white shadow-sm hover:shadow-md transition-all duration-300 h-64 flex flex-col">
              <div className="relative flex-1 overflow-hidden">
                <img
                  src="/assets/images/IMG-20260915-WA0007.jpg"
                  alt="Tri et préparation des plants d'ombrage"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-3 bg-white border-t border-[#F2ECE4]">
                <p className="text-[11px] font-sans font-semibold text-[#5C3E35] leading-tight">
                  Tri méticuleux des plants
                </p>
                <p className="text-[10px] font-sans text-[#7C7265] mt-0.5">
                  Sélection pour la robustesse
                </p>
              </div>
            </div>

            {/* Photo 3 */}
            <div className="group relative rounded-xl overflow-hidden border border-[#EAE5DF] bg-white shadow-sm hover:shadow-md transition-all duration-300 h-64 flex flex-col">
              <div className="relative flex-1 overflow-hidden">
                <img
                  src="/assets/images/IMG-20260915-WA0003.jpg"
                  alt="Nursery et regroupement"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-3 bg-white border-t border-[#F2ECE4]">
                <p className="text-[11px] font-sans font-semibold text-[#5C3E35] leading-tight">
                  Nursery sous ombrage
                </p>
                <p className="text-[10px] font-sans text-[#7C7265] mt-0.5">
                  Regroupement des plants
                </p>
              </div>
            </div>

            {/* Photo 4 */}
            <div className="group relative rounded-xl overflow-hidden border border-[#EAE5DF] bg-white shadow-sm hover:shadow-md transition-all duration-300 h-64 flex flex-col">
              <div className="relative flex-1 overflow-hidden">
                <img
                  src="/assets/images/IMG-20260915-WA0002.jpg"
                  alt="Mise en terre des plants forestiers"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-3 bg-white border-t border-[#F2ECE4]">
                <p className="text-[11px] font-sans font-semibold text-[#5C3E35] leading-tight">
                  Mise en terre active
                </p>
                <p className="text-[10px] font-sans text-[#7C7265] mt-0.5">
                  Agroforesterie en pratique
                </p>
              </div>
            </div>

            {/* Photo 5 */}
            <div className="group relative rounded-xl overflow-hidden border border-[#EAE5DF] bg-white shadow-sm hover:shadow-md transition-all duration-300 h-64 flex flex-col">
              <div className="relative flex-1 overflow-hidden">
                <img
                  src="/assets/images/IMG-20260915-WA0005.jpg"
                  alt="Équipe technique et planteurs"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-3 bg-white border-t border-[#F2ECE4]">
                <p className="text-[11px] font-sans font-semibold text-[#5C3E35] leading-tight">
                  L'équipe de distribution
                </p>
                <p className="text-[10px] font-sans text-[#7C7265] mt-0.5">
                  Doba & Duékoué mobilisés
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Primary News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#EAE5DF] rounded-[20px] p-6 md:p-8 flex flex-col justify-between hover:shadow-sm hover:border-[#00A14C]/30 transition-all duration-300 group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-sans font-bold px-3 py-1 rounded-full border uppercase tracking-wider ${item.badgeColor}`}>
                    {item.category}
                  </span>
                  <div className="flex items-center space-x-1.5 text-[11px] font-sans text-[#7C7265]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>
                </div>
 
                <h3 className="text-lg font-serif font-semibold text-[#5C3E35] leading-snug group-hover:text-[#00A14C] transition-colors">
                  {item.title}
                </h3>
 
                <p className="text-xs font-sans text-[#5C544C] leading-relaxed line-clamp-4">
                  {item.description}
                </p>
              </div>
 
              <div className="flex items-center space-x-2.5 mt-8 pt-4 border-t border-[#EAE5DF]">
                <div className="w-8 h-8 rounded-full bg-[#F2ECE4] flex items-center justify-center">
                  {getIcon(item.id)}
                </div>
                <span className="text-[10px] font-sans uppercase tracking-widest text-[#5C3E35] font-bold">
                  Action terrain • {item.id === 'reforestation' ? 'Durable' : item.id === 'independence' ? 'Cohésion' : item.id === 'phytosanitary' ? 'Appui' : 'Éthique'}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
