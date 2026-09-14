import { Crop, RegionInfo, Achievement, CorporateProfile } from './types';

export const CROPS_DATA: Crop[] = [
  {
    id: 'cocoa',
    name: 'Cacao d\'Origine d\'Exception',
    scientificName: 'Theobroma cacao',
    image: '/src/assets/images/cocoa_beans_upload_1789393923659.jpg',
    description: 'Nos fèves de cacao proviennent de parcelles durables certifiées. Elles font l\'objet d\'une fermentation méticuleuse de 6 jours sous feuilles de bananier, suivie d\'un séchage naturel au soleil sur claies de bambou pour libérer des arômes floraux et boisés d\'une pureté exceptionnelle.',
    varieties: ['Forastero (Amelonado)', 'Trinitario', 'Hybrides durables'],
    harvestSeason: 'Octobre à Mars (Grande récolte), Mai à Août (Petite récolte)',
    certifications: ['Rainforest Alliance', 'Fairtrade Max Havelaar', 'Agriculture Biologique'],
    keyStats: [
      { label: 'Taux d\'humidité', value: '< 7.5%' },
      { label: 'Fèves défectueuses', value: '< 3%' },
      { label: 'Traçabilité', value: '100% Parcelle' }
    ]
  },
  {
    id: 'cashew',
    name: 'Noix de Cajou Brutes',
    scientificName: 'Anacardium occidentale',
    image: '/src/assets/images/m_commodities_cashew_1788199509590.jpg',
    description: 'La Côte d\'Ivoire est le premier producteur mondial de noix de cajou. Notre coopérative collecte et sélectionne des noix de cajou brutes de premier choix, caractérisées par un excellent "Outturn" (rendement en amandes) et un faible taux de défauts, garantissant une qualité optimale pour les transformateurs.',
    varieties: ['Noix brutes de calibre supérieur', 'Sélection locale Premium'],
    harvestSeason: 'Février à Mai',
    certifications: ['Commerce Équitable', 'Traçabilité Garantie'],
    keyStats: [
      { label: 'Rendement (KOR)', value: '48 - 52 lbs' },
      { label: 'Nombre de noix/kg', value: '180 - 200' },
      { label: 'Taux d\'humidité', value: '< 8%' }
    ]
  },
  {
    id: 'coffee',
    name: 'Café Robusta d\'Altitude',
    scientificName: 'Coffea canephora',
    image: '/src/assets/images/m_commodities_coffee_1788199522255.jpg',
    description: 'Cultivé à l\'ombre d\'essences forestières locales dans le cadre de nos programmes d\'agroforesterie, notre café Robusta révèle un corps puissant, une amertume équilibrée et des notes de chocolat noir. Les cerises sont cueillies manuellement à maturité parfaite.',
    varieties: ['Robusta Sélectionné', 'Clones d\'élite locaux'],
    harvestSeason: 'Décembre à Mars',
    certifications: ['Rainforest Alliance', 'Origine Côte d\'Ivoire'],
    keyStats: [
      { label: 'Cueillette', value: 'Manuelle sélective' },
      { label: 'Séchage', value: 'Solaire homogène' },
      { label: 'Densité', value: 'Grains calibrés' }
    ]
  }
];

export const REGIONS_DATA: RegionInfo[] = [
  {
    id: 'doba',
    name: 'Doba (Siège social)',
    department: 'San-Pedro',
    coordinates: { x: 42, y: 80 },
    farmersCount: 1150,
    mainCrops: ['Cacao', 'Café'],
    description: 'Notre quartier général opérationnel et centre d\'excellence technique. Situé au cœur de la boucle du cacao, Doba abrite nos pépinières agroforestières phares et notre plateforme logistique principale de traitement des fèves.'
  },
  {
    id: 'duekoue',
    name: 'Duékoué',
    department: 'Guémon',
    coordinates: { x: 35, y: 40 },
    farmersCount: 700,
    mainCrops: ['Cacao', 'Noix de Cajou'],
    description: 'Une zone dynamique alliant cacao de haute qualité et diversification avec l\'anacarde (noix de cajou). Nos équipes y animent des ateliers réguliers sur les pratiques agricoles intelligentes face au climat.'
  },
  {
    id: 'guiglo',
    name: 'Guiglo',
    department: 'Cavally',
    coordinates: { x: 22, y: 52 },
    farmersCount: 720,
    mainCrops: ['Cacao', 'Café'],
    description: 'Zone forestière historique d\'une grande fertilité. Guiglo est le pilier de nos programmes d\'agroforesterie active, où nous distribuons des arbres d\'ombrage indigènes pour restaurer le couvert forestier.'
  },
  {
    id: 'blolequin',
    name: 'Bloléquin',
    department: 'Cavally',
    coordinates: { x: 14, y: 45 },
    farmersCount: 500,
    mainCrops: ['Cacao'],
    description: 'Situé près de la frontière, Bloléquin rassemble des petits producteurs engagés dans une démarche de traçabilité stricte par géolocalisation de leurs parcelles, en accord avec les nouvelles normes environnementales européennes (EUDR).'
  },
  {
    id: 'toulepleu',
    name: 'Toulepleu',
    department: 'Cavally',
    coordinates: { x: 8, y: 35 },
    farmersCount: 357,
    mainCrops: ['Café', 'Noix de Cajou'],
    description: 'Une région montagneuse idéale pour la culture du café Robusta. Nos coopérateurs y développent également des vergers de cajou hautement productifs tout en protégeant les bassins versants locaux.'
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: 'farmers',
    title: 'Membres Coopérateurs',
    description: 'Une communauté soudée et engagée pour un développement équitable, comprenant 3 258 hommes producteurs et 169 femmes productrices.',
    metric: '3 427',
    metricLabel: 'Membres (3258 H / 169 F)',
    icon: 'Users'
  },
  {
    id: 'land',
    title: 'Superficie Cultivée',
    description: 'Une gestion durable des sols et des parcelles pour maximiser le rendement agricole dans le respect des chartes de durabilité.',
    metric: '11 417,69 Ha',
    metricLabel: 'Hectares de cultures durables',
    icon: 'Trees'
  },
  {
    id: 'production',
    title: 'Production Annuelle Estimée',
    description: 'Une récolte abondante de matières premières de qualité supérieure comprenant 10 421 tonnes de cacao et 625 tonnes de café.',
    metric: '11 046 T',
    metricLabel: '10421T Cacao / 625T Café',
    icon: 'GraduationCap'
  },
  {
    id: 'partners_count',
    title: 'Alliances Commerciales',
    description: 'Collaboration directe avec les plus grands exportateurs et chocolatiers mondiaux (OLAM, CARGILL, CNEK, IVCOM, etc.).',
    metric: '8 Acteurs',
    metricLabel: 'Partenaires Export & Négoce',
    icon: 'QrCode'
  }
];

export const TIMELINE_TRACEABILITY: { step: number; label: string; location: string; description: string; icon: string }[] = [
  {
    step: 1,
    label: 'Cartographie & Récolte',
    location: 'Doba & Guiglo (Aux Champs)',
    description: 'Les parcelles des producteurs sont cartographiées par GPS pour certifier l\'absence de déforestation. Les cabosses de cacao mûres sont récoltées manuellement avec soin.',
    icon: 'MapPin'
  },
  {
    step: 2,
    label: 'Fermentation Naturelle',
    location: 'Centres de fermentation villageois',
    description: 'Les fèves de cacao fraîches sont fermentées pendant 6 jours dans des bacs en bois recouverts de feuilles de bananier sauvages. Cette étape développe les précurseurs d\'arômes.',
    icon: 'FlameKindling'
  },
  {
    step: 3,
    label: 'Séchage Solaire',
    location: 'Claies de séchage individuelles',
    description: 'Les fèves fermentées sont étalées au soleil sur des claies surélevées en bambou. Elles sont retournées régulièrement pour atteindre un taux d\'humidité idéal et homogène.',
    icon: 'Sun'
  },
  {
    step: 4,
    label: 'Contrôle Qualité & Enregistrement',
    location: 'Magasins de section',
    description: 'Chaque lot de fèves fait l\'objet d\'un test de coupe rigoureux. Les sacs sont scellés et étiquetés avec un QR code unique contenant le code producteur, garantissant la traçabilité.',
    icon: 'ShieldCheck'
  },
  {
    step: 5,
    label: 'Centralisation & Exportation',
    location: 'Entrepôt central, Port de San-Pedro',
    description: 'Les sacs traçables sont expédiés vers le port de San-Pedro. Les acheteurs internationaux peuvent scanner le code pour retracer l\'histoire complète et l\'origine exacte des fèves.',
    icon: 'Ship'
  }
];

export const CORPORATE_PROFILE: CorporateProfile = {
  pcaName: 'M. Soumahoro Moussa',
  pcaTitle: 'Président du Conseil d\'Administration (PCA)',
  pcaImage: '/pca.jpg', // L'image réelle de M. Soumahoro Moussa (PCA)
  pcaMessage: 'Notre ambition est de faire de M-Commodities Coop-Ca un modèle de durabilité et d\'excellence opérationnelle en Côte d\'Ivoire. En valorisant le travail de nos producteurs à Doba, Duékoué et à travers tout le Cavally, nous bâtissons une chaîne d\'approvisionnement transparente, certifiée Rainforest Alliance et pleinement conforme aux exigences internationales (EUDR). Nous ne faisons pas que collecter du cacao, du café et des noix de cajou ; nous cultivons l\'avenir et la prospérité de nos communautés locales.',
  legalStatus: 'Société Coopérative avec Conseil d\'Administration (COOP-CA)',
  capitalSocial: '50 000 000 FCFA',
  registrationDuration: '99 ans d\'existence légale',
  mainOffice: 'Doba, Département de San-Pedro, Côte d\'Ivoire',
  secondaryOffice: 'Duékoué (Guémon), Côte d\'Ivoire'
};

