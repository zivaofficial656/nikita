/**
 * Image Manifest for Nikita Spa
 * Location: Koramangala, Bengaluru, Karnataka, India
 */

export interface ManifestImage {
  id: string;
  filename: string;
  path: string;
  title: string;
  alt: string;
  category: 'treatment-rooms' | 'interiors' | 'atmosphere' | 'rituals' | 'branding';
  order: number;
}

export const IMAGE_MANIFEST: ManifestImage[] = [
  {
    id: "nikita-spa-logo",
    filename: "nikita-spa-logo.png",
    path: "/images/nikita-spa-logo.png",
    title: "Nikita Spa Official Logo",
    alt: "Nikita Spa Logo - Luxury Spa in Koramangala Bengaluru",
    category: "branding",
    order: 1
  },
  {
    id: "couple-spa-room-jacuzzi",
    filename: "couple-spa-room-jacuzzi-koramangala.webp",
    path: "/images/couple-spa-room-jacuzzi-koramangala.webp",
    title: "Executive Couple Sanctuary & Jacuzzi",
    alt: "Executive couple spa room with private hydrotherapy jacuzzi at Nikita Spa Koramangala Bengaluru",
    category: "treatment-rooms",
    order: 2
  },
  {
    id: "circular-bed-therapy-suite",
    filename: "circular-bed-therapy-suite-bengaluru.webp",
    path: "/images/circular-bed-therapy-suite-bengaluru.webp",
    title: "Signature Circular Therapy Suite",
    alt: "Signature circular massage bed in private treatment room with ambient cove lighting at Nikita Spa Bengaluru",
    category: "treatment-rooms",
    order: 3
  },
  {
    id: "body-massage-spa-room",
    filename: "body-massage-spa-room-bengaluru.webp",
    path: "/images/body-massage-spa-room-bengaluru.webp",
    title: "Private Full Body Massage Suite",
    alt: "Private full body massage treatment bed with serene under-bed LED glow at Nikita Spa Bengaluru",
    category: "treatment-rooms",
    order: 4
  },
  {
    id: "deep-tissue-massage-suite",
    filename: "deep-tissue-massage-suite-koramangala.webp",
    path: "/images/deep-tissue-massage-suite-koramangala.webp",
    title: "Deep Tissue Massage En-Suite",
    alt: "En-suite massage therapy room with attached private glass shower cubicle at Nikita Spa Koramangala",
    category: "treatment-rooms",
    order: 5
  },
  {
    id: "swedish-massage-room",
    filename: "swedish-massage-room-bengaluru.webp",
    path: "/images/swedish-massage-room-bengaluru.webp",
    title: "Swedish Massage Room with Floral Ceiling",
    alt: "Quiet single massage treatment suite with floral ceiling design at Nikita Spa Koramangala Bengaluru",
    category: "treatment-rooms",
    order: 6
  },
  {
    id: "thai-massage-platform-suite",
    filename: "thai-massage-platform-suite-koramangala.webp",
    path: "/images/thai-massage-platform-suite-koramangala.webp",
    title: "Thai Massage Platform Bed Suite",
    alt: "Supportive Thai massage platform bed with tranquil blue under-bed illumination at Nikita Spa Koramangala",
    category: "treatment-rooms",
    order: 7
  },
  {
    id: "aromatherapy-massage-room",
    filename: "aromatherapy-massage-room-bengaluru.webp",
    path: "/images/aromatherapy-massage-room-bengaluru.webp",
    title: "Aromatherapy Massage Suite",
    alt: "Soothing blue ambient cove illumination in aromatherapy massage suite at Nikita Spa Bengaluru",
    category: "treatment-rooms",
    order: 8
  },
  {
    id: "spa-hydrotherapy-jacuzzi-ritual",
    filename: "spa-hydrotherapy-jacuzzi-ritual-koramangala.webp",
    path: "/images/spa-hydrotherapy-jacuzzi-ritual-koramangala.webp",
    title: "Hydrotherapy Jacuzzi Ritual",
    alt: "Hydro-massage jacuzzi session for deep muscle relaxation at Nikita Spa in Koramangala Bengaluru",
    category: "rituals",
    order: 9
  },
  {
    id: "luxury-couple-spa-suite",
    filename: "luxury-couple-spa-suite-koramangala.webp",
    path: "/images/luxury-couple-spa-suite-koramangala.webp",
    title: "Panoramic Couple Suite & Jacuzzi",
    alt: "Panoramic perspective of luxury couple massage suite and private jacuzzi at Nikita Spa Koramangala",
    category: "interiors",
    order: 10
  },
  {
    id: "private-hydrotherapy-suite",
    filename: "private-hydrotherapy-suite-bengaluru.webp",
    path: "/images/private-hydrotherapy-suite-bengaluru.webp",
    title: "Private Hydrotherapy Suite",
    alt: "Full view of private hydrotherapy suite with jacuzzi and massage beds at Nikita Spa Bengaluru",
    category: "interiors",
    order: 11
  },
  {
    id: "nikita-spa-aromatherapy-preparation-tray",
    filename: "nikita-spa-aromatherapy-preparation-tray.webp",
    path: "/images/nikita-spa-aromatherapy-preparation-tray.webp",
    title: "Massage Preparations & Aromatherapy Tray",
    alt: "Aromatherapy treatment preparation tray with organic botanical oils, fresh rose petals, and clean towels at Nikita Spa Koramangala",
    category: "rituals",
    order: 12
  }
];

export const TOTAL_MANIFEST_IMAGES = IMAGE_MANIFEST.length;

export const getImageByFilename = (filename: string): ManifestImage | undefined => {
  return IMAGE_MANIFEST.find((img) => img.filename === filename);
};

export const getImagesByCategory = (category: ManifestImage['category']): ManifestImage[] => {
  return IMAGE_MANIFEST.filter((img) => img.category === category);
};
