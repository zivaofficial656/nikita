/**
 * Centralized Image Configuration for Nikita Spa
 * Location: Koramangala, Bengaluru, Karnataka, India
 * All assets reference verified local WebP and PNG files from /public/images/
 */

export const BRAND_LOGO_PNG = '/images/nikita-spa-logo.png';
export const BRAND_LOGO_WEBP = '/images/nikita-spa-logo.webp';
export const OG_IMAGE_JPG = '/images/og-image.jpg';
export const OG_IMAGE_WEBP = '/images/og-image.webp';

const defaultImg = '/images/couple-spa-room-jacuzzi-koramangala.webp';

export const siteImages = {
  // Brand Identity
  logo: BRAND_LOGO_PNG,
  logoWebp: BRAND_LOGO_WEBP,
  ogImage: OG_IMAGE_JPG,
  ogImageWebp: OG_IMAGE_WEBP,

  // Key Section Showcases
  hero: '/images/couple-spa-room-jacuzzi-koramangala.webp',
  introduction: '/images/circular-bed-therapy-suite-bengaluru.webp',
  about: '/images/luxury-couple-spa-suite-koramangala.webp',
  finalCta: '/images/private-hydrotherapy-suite-bengaluru.webp',

  // Genuine Spa Services
  services: {
    fullBodyMassage: '/images/body-massage-spa-room-bengaluru.webp',
    swedishMassage: '/images/swedish-massage-room-bengaluru.webp',
    deepTissueMassage: '/images/deep-tissue-massage-suite-koramangala.webp',
    thaiMassage: '/images/thai-massage-platform-suite-koramangala.webp',
    aromatherapyMassage: '/images/aromatherapy-massage-room-bengaluru.webp',
    coupleMassage: '/images/couple-spa-room-jacuzzi-koramangala.webp',
    relaxationTherapy: '/images/spa-hydrotherapy-jacuzzi-ritual-koramangala.webp',
    fineDining: defaultImg,
    socialGalas: defaultImg,
    corporateHospitality: defaultImg,
    culturalHeritage: defaultImg,
    weekendRetreats: defaultImg,
    privateCelebrations: defaultImg,
  },

  // Complete Gallery Showcase
  gallery: [
    '/images/couple-spa-room-jacuzzi-koramangala.webp',
    '/images/circular-bed-therapy-suite-bengaluru.webp',
    '/images/in-suite-jacuzzi-relaxation-lounge-bengaluru.webp',
    '/images/spa-hydrotherapy-jacuzzi-ritual-koramangala.webp',
    '/images/couple-massage-room-swan-art-koramangala.webp',
    '/images/body-massage-spa-room-bengaluru.webp',
    '/images/spa-vanity-gold-basin-amenities-bengaluru.webp',
    '/images/aromatherapy-massage-room-bengaluru.webp',
    '/images/deep-tissue-massage-suite-koramangala.webp',
    '/images/twin-massage-suite-ambient-glow-koramangala.webp',
    '/images/thai-massage-platform-suite-koramangala.webp',
    '/images/private-shower-dressing-corner-koramangala.webp',
    '/images/dual-therapy-room-fresh-linens-koramangala.webp',
    '/images/swedish-massage-room-bengaluru.webp',
    '/images/twin-treatment-suite-vanity-mirror-koramangala.webp',
    '/images/luxury-couple-spa-suite-koramangala.webp',
    '/images/spa-treatment-room-circular-layout-bengaluru.webp',
    '/images/spa-relaxation-room-evening-ambiance-bengaluru.webp',
    '/images/private-hydrotherapy-suite-bengaluru.webp',
    '/images/nikita-spa-aromatherapy-preparation-tray.webp',
  ],

  // Fallbacks for legacy template files
  spotlight: defaultImg,
  companions: {
    aanya: { primary: defaultImg, gallery: [defaultImg] },
    mira: { primary: defaultImg, gallery: [defaultImg] },
    suhana: { primary: defaultImg, gallery: [defaultImg] },
    rhea: { primary: defaultImg, gallery: [defaultImg] },
    tara: { primary: defaultImg, gallery: [defaultImg] },
    kavya: { primary: defaultImg, gallery: [defaultImg] },
    natasha: { primary: defaultImg, gallery: [defaultImg] },
    ananya: { primary: defaultImg, gallery: [defaultImg] },
  },
  categories: {
    independent: defaultImg,
    social: defaultImg,
    travel: defaultImg,
    dinner: defaultImg,
    event: defaultImg,
    professional: defaultImg,
  },
  locations: {
    indiranagar: defaultImg,
    koramangala: defaultImg,
    hsrLayout: defaultImg,
    whitefield: defaultImg,
    mgRoad: defaultImg,
    jayanagar: defaultImg,
    marathahalli: defaultImg,
    electronicCity: defaultImg,
  },
  guides: {
    fineDiningEtiquette: defaultImg,
    corporateConventions: defaultImg,
    luxuryRetreats: defaultImg,
    safetyStandards: defaultImg,
  },
  allAvailableImages: [defaultImg],
};
