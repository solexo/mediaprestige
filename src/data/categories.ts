export interface Category {
  id: string;
  name: string;
  nameFr: string;
  nameEn: string;
  descriptionFr: string;
  descriptionEn: string;
  image: string;
  suitableProducts: string[];
  features: string[];
  featuresFr: string[];
  featuresEn: string[];
}

export const categories: Category[] = [
  {
    id: 'hotels',
    name: 'Hotels',
    nameFr: 'Hôtels',
    nameEn: 'Hotels',
    descriptionFr: 'Solutions audio professionnelles pour hôtels et établissements d\'hébergement',
    descriptionEn: 'Professional audio solutions for hotels and accommodation establishments',
    image: '/products/hotel.webp',
    suitableProducts: ['l1pro8', 'l1-pro16', 'smart-ultra-soundbar', 'iza2120', 'za250'],
    features: ['Background Music', 'Public Announcements', 'Conference Rooms', 'Lobbies', 'Restaurants'],
    featuresFr: ['Musique d\'ambiance', 'Annonces publiques', 'Salles de conférence', 'Lobbys', 'Restaurants'],
    featuresEn: ['Background Music', 'Public Announcements', 'Conference Rooms', 'Lobbies', 'Restaurants']
  },
  {
    id: 'villas',
    name: 'Villas',
    nameFr: 'Villas',
    nameEn: 'Villas',
    descriptionFr: 'Systèmes audio haut de gamme pour villas et résidences privées',
    descriptionEn: 'High-end audio systems for villas and private residences',
    image: '/products/home.webp',
    suitableProducts: ['l1pro8', 'smart-ultra-soundbar', 'smart-ultra-caisson-700', 'bose-music-amplifier'],
    features: ['Home Cinema', 'Outdoor Entertainment', 'Multi-room Audio', 'Smart Integration', 'Weather Resistant'],
    featuresFr: ['Home Cinéma', 'Divertissement extérieur', 'Audio multi-pièces', 'Intégration intelligente', 'Résistant aux intempéries'],
    featuresEn: ['Home Cinema', 'Outdoor Entertainment', 'Multi-room Audio', 'Smart Integration', 'Weather Resistant']
  },
  {
    id: 'conference-rooms',
    name: 'Conference Rooms',
    nameFr: 'Salles de Conférence',
    nameEn: 'Conference Rooms',
    descriptionFr: 'Équipements audio professionnels pour salles de réunion et conférences',
    descriptionEn: 'Professional audio equipment for meeting rooms and conferences',
    image: '/products/conference.webp',
    suitableProducts: ['iza2120', 'za250', 'dm2c', 'dm3-flush', 'dm5-flush'],
    features: ['Crystal Clear Audio', 'Microphone Integration', 'Video Conferencing', 'Wireless Connectivity', 'Noise Reduction'],
    featuresFr: ['Audio cristallin', 'Intégration microphone', 'Visioconférence', 'Connectivité sans fil', 'Réduction du bruit'],
    featuresEn: ['Crystal Clear Audio', 'Microphone Integration', 'Video Conferencing', 'Wireless Connectivity', 'Noise Reduction']
  },
  {
    id: 'restaurants-cafes',
    name: 'Restaurants & Cafes',
    nameFr: 'Restaurants & Cafés',
    nameEn: 'Restaurants & Cafes',
    descriptionFr: 'Solutions audio pour restaurants, cafés et établissements de restauration',
    descriptionEn: 'Audio solutions for restaurants, cafes and food establishments',
    image: '/products/restau.webp',
    suitableProducts: ['l1pro8', 'smart-ultra-soundbar', 'bose-music-amplifier', 'fs2c', 'fs2se'],
    features: ['Background Music', 'Ambient Sound', 'Customer Experience', 'Staff Communication', 'Volume Control'],
    featuresFr: ['Musique d\'ambiance', 'Son ambiant', 'Expérience client', 'Communication personnel', 'Contrôle du volume'],
    featuresEn: ['Background Music', 'Ambient Sound', 'Customer Experience', 'Staff Communication', 'Volume Control']
  },
  {
    id: 'showrooms-retail',
    name: 'Showrooms & Retail',
    nameFr: 'Showrooms & Commerce',
    nameEn: 'Showrooms & Retail',
    descriptionFr: 'Systèmes audio pour showrooms, boutiques et espaces commerciaux',
    descriptionEn: 'Audio systems for showrooms, shops and commercial spaces',
    image: '/products/showroom.webp',
    suitableProducts: ['smart-ultra-soundbar', 'dm8c-flush', 'dm2c', 'satellite-flush', 'iza2120'],
    features: ['Product Demonstrations', 'Customer Engagement', 'Brand Experience', 'Ceiling Speakers', 'Discreet Installation'],
    featuresFr: ['Démonstrations produits', 'Engagement client', 'Expérience de marque', 'Haut-parleurs plafond', 'Installation discrète'],
    featuresEn: ['Product Demonstrations', 'Customer Engagement', 'Brand Experience', 'Ceiling Speakers', 'Discreet Installation']
  },
  {
    id: 'guesthouses',
    name: 'Guest Houses',
    nameFr: 'Maisons d\'Hôtes',
    nameEn: 'Guest Houses',
    descriptionFr: 'Solutions audio élégantes pour maisons d\'hôtes et chambres d\'hôtes',
    descriptionEn: 'Elegant audio solutions for guest houses and bed & breakfasts',
    image: '/products/maisondhote.webp',
    suitableProducts: ['smart-ultra-soundbar', 'smart-ultra-caisson-700', 'bose-music-amplifier', 'fs2c'],
    features: ['Guest Comfort', 'Ambient Music', 'Reception Areas', 'Dining Areas', 'Outdoor Spaces'],
    featuresFr: ['Confort des invités', 'Musique d\'ambiance', 'Zones réception', 'Espaces repas', 'Espaces extérieurs'],
    featuresEn: ['Guest Comfort', 'Ambient Music', 'Reception Areas', 'Dining Areas', 'Outdoor Spaces']
  }
];