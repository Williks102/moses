import { Calendar, Heart, ShieldAlert, Award, Star, Compass } from 'lucide-react';

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
              src="/assets/images/cocoa_beans_upload_1789393923659.jpg"
              alt="Actualités phares"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="text-[10px] font-sans font-bold px-3 py-1 bg-[#00A14C]/10 text-[#00A14C] border border-[#00A14C]/25 rounded-full uppercase tracking-wider">
                À la Une • Actualité de la Coopérative
              </span>
              <span className="text-xs font-sans text-[#7C7265] flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>22 Août 2024</span>
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#5C3E35] hover:text-[#00A14C] transition-colors leading-snug">
              Engagement Terrain : Soutien constant et appui technique de proximité à Doba et Duékoué
            </h2>
            
            <p className="text-xs md:text-sm font-sans text-[#5C544C] leading-relaxed">
              Nos conseillers techniques parcourent quotidiennement les sections pour former les producteurs aux exigences de l'Union Européenne (non-déforestation) et distribuer des kits de sécurité ainsi que des plants d'ombrage. Grâce à cette implication étroite, nous renforçons l'autonomie financière et structurelle des planteurs.
            </p>

            <div className="flex items-center space-x-2.5 pt-2 text-[#8E4D31] text-xs font-sans font-bold uppercase tracking-wider">
              <Star className="w-4 h-4 text-[#C99A49] fill-current" />
              <span>Plus de 3 000 planteurs accompagnés cette saison.</span>
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

                <p className="text-xs font-sans text-[#5C544C] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center space-x-2.5 mt-8 pt-4 border-t border-[#EAE5DF]">
                <div className="w-8 h-8 rounded-full bg-[#F2ECE4] flex items-center justify-center">
                  {getIcon(item.id)}
                </div>
                <span className="text-[10px] font-sans uppercase tracking-widest text-[#5C3E35] font-bold">
                  Action terrain • {item.id === 'independence' ? 'Cohésion' : item.id === 'phytosanitary' ? 'Appui' : 'Éthique'}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
