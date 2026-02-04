import { ShoppingCart, MessageCircle, Play } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  descriptionFr: string;
  descriptionEn: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 'l1pro8',
    name: 'L1 PRO 8',
    descriptionFr: 'Système de sonorisation portable Bose L1 Pro8 pour musiciens et événements',
    descriptionEn: 'Bose L1 Pro8 portable sound system for musicians and events',
    image: '/products/L1pro8.webp',
  },
  {
    id: 'l1-pro16',
    name: 'L1 PRO 16',
    descriptionFr: 'Système Bose L1 Pro16 pour performances exceptionnelles',
    descriptionEn: 'Bose L1 Pro16 system for exceptional performances',
    image: '/products/L1_Pro16.webp',
  },
  {
    id: 'smart-ultra-soundbar',
    name: 'Smart Ultra Soundbar',
    descriptionFr: 'Barre de son Bose Smart Ultra avec Dolby Atmos',
    descriptionEn: 'Bose Smart Ultra soundbar with Dolby Atmos',
    image: '/products/Smart Ultra Soundbar.webp',
  },
  {
    id: 'smart-ultra-caisson-700',
    name: 'Smart Ultra Caisson 700',
    descriptionFr: 'Caisson Bose Smart Ultra 700 sans fil haute performance',
    descriptionEn: 'Bose Smart Ultra 700 wireless high-performance subwoofer',
    image: '/products/Smart Ultra Caisson 700.webp',
  },
  {
    id: 'caisson-de-bass-acoustimass3',
    name: 'Caisson de Bass Acoustimass3',
    descriptionFr: 'Module de basses Bose Acoustimass 3 pour home cinéma',
    descriptionEn: 'Bose Acoustimass 3 bass module for home theater',
    image: '/products/Caisson de Bass Acoustimass3.webp',
  },
  {
    id: 'iza2120',
    name: 'IZA2120',
    descriptionFr: 'Amplificateur Bose IZA 2120-HZ 2x120W professionnel',
    descriptionEn: 'Bose IZA 2120-HZ professional 2x120W amplifier',
    image: '/products/IZA2120.webp',
  },
  {
    id: 'za250',
    name: 'ZA250',
    descriptionFr: 'Amplificateur Bose ZA 250-LA avec DSP intégré',
    descriptionEn: 'Bose ZA 250-LA amplifier with integrated DSP',
    image: '/products/ZA250.webp',
  },
  {
    id: 'dm8c-flush',
    name: 'DM8C Flush',
    descriptionFr: 'Haut-parleurs Bose DM8C d\'encastrément pour plafond',
    descriptionEn: 'Bose DM8C flush ceiling speakers',
    image: '/products/DM8C_Flush.webp',
  },
  {
    id: '251',
    name: '251',
    descriptionFr: 'Haut-parleurs Bose 251 environnementaux',
    descriptionEn: 'Bose 251 environmental speakers',
    image: '/products/251.webp',
  },
  {
    id: '360p-ec',
    name: '360P EC',
    descriptionFr: 'Haut-parleurs Bose 360P EC environnementaux 360 degrés',
    descriptionEn: 'Bose 360P EC 360-degree environmental speakers',
    image: '/products/360P_EC.webp',
  },
  {
    id: 'bose-music-amplifier',
    name: 'Bose Music Amplifier',
    descriptionFr: 'Amplificateur Bose Music pour installations audio',
    descriptionEn: 'Bose Music Amplifier for audio installations',
    image: '/products/Bose Music Amplifier.webp',
  },
  {
    id: 'dm2c',
    name: 'DM2C',
    descriptionFr: 'Haut-parleurs Bose DM2C de plafond 2 voies',
    descriptionEn: 'Bose DM2C 2-way ceiling speakers',
    image: '/products/DM2C.webp',
  },
  {
    id: 'dm3-flush',
    name: 'DM3 Flush',
    descriptionFr: 'Haut-parleurs Bose DM3 d\'encastrément 3 voies',
    descriptionEn: 'Bose DM3 3-way flush speakers',
    image: '/products/DM3_Flush.webp',
  },
  {
    id: 'dm5-flush',
    name: 'DM5 Flush',
    descriptionFr: 'Haut-parleurs Bose DM5 d\'encastrément 5 pouces',
    descriptionEn: 'Bose DM5 5-inch flush speakers',
    image: '/products/DM5_Flush.webp',
  },
  {
    id: 'smart-sound-bar',
    name: 'Smart Sound Bar',
    descriptionFr: 'Barre de son Bose Smart avec connectivité multi-room',
    descriptionEn: 'Bose Smart soundbar with multi-room connectivity',
    image: '/products/Smart Sound Bar.webp',
  },
  {
    id: 'fs2c',
    name: 'FS2C',
    descriptionFr: 'Haut-parleurs Bose FS2C de surface 2 voies',
    descriptionEn: 'Bose FS2C 2-way surface speakers',
    image: '/products/FS2C.webp',
  },
  {
    id: 'satellite-flush',
    name: 'Satellite flush',
    descriptionFr: 'Haut-parleurs satellites Bose d\'encastrément',
    descriptionEn: 'Bose flush satellite speakers',
    image: '/products/Satellite_flush.webp',
  },
  {
    id: 'caisson-de-bass-flush',
    name: 'Caisson de bass flush',
    descriptionFr: 'Caisson de basses Bose d\'encastrément',
    descriptionEn: 'Bose flush bass module',
    image: '/products/Caisson de bass flush.webp',
  },
  {
    id: 'fs2se',
    name: 'FS2SE',
    descriptionFr: 'Haut-parleurs Bose FS2SE environnementaux',
    descriptionEn: 'Bose FS2SE environmental speakers',
    image: '/products/FS2SE.webp',
  },
  {
    id: 'acoustimass',
    name: 'Acoustimass',
    descriptionFr: 'Module de basses Bose Acoustimass pour systèmes audio',
    descriptionEn: 'Bose Acoustimass bass module for audio systems',
    image: '/products/Acoustimass.webp',
  },
];