export interface GalleryImage {
  id: string;
  title: string;
  category: 'Treatment Rooms' | 'Interiors' | 'Atmosphere' | 'Rituals';
  description: string;
  image: string;
  alt: string;
  width: number;
  height: number;
}

export const galleryData: GalleryImage[] = [
  {
    id: 'room-couple-jacuzzi-1',
    title: 'Executive Couple Sanctuary & Jacuzzi',
    category: 'Treatment Rooms',
    description: 'Spacious dual-bed suite featuring a private hydrotherapy jacuzzi, swan towel art, and soothing ambient lighting.',
    image: '/images/couple-spa-room-jacuzzi-koramangala.webp',
    alt: 'Executive couple spa room with private hydrotherapy jacuzzi and twin massage beds at Nikita Spa Koramangala Bengaluru',
    width: 1360,
    height: 628
  },
  {
    id: 'room-circular-1',
    title: 'Signature Circular Therapy Suite',
    category: 'Treatment Rooms',
    description: 'Specially designed circular therapy bed with blue ambient ceiling cove and premium botanical oils.',
    image: '/images/circular-bed-therapy-suite-bengaluru.webp',
    alt: 'Signature circular massage bed in private treatment room with ambient cove lighting at Nikita Spa Bengaluru',
    width: 1360,
    height: 628
  },
  {
    id: 'jacuzzi-lounge-1',
    title: 'In-Suite Jacuzzi & Relaxation Chairs',
    category: 'Interiors',
    description: 'Warm hydrotherapy jacuzzi tub paired with high-back plush velvet relaxation armchairs.',
    image: '/images/in-suite-jacuzzi-relaxation-lounge-bengaluru.webp',
    alt: 'In-suite hydrotherapy jacuzzi tub paired with plush velvet relaxation chairs at Nikita Spa Koramangala',
    width: 476,
    height: 1020
  },
  {
    id: 'ritual-hydrotherapy',
    title: 'Hydrotherapy Jacuzzi Ritual',
    category: 'Rituals',
    description: 'Warm hydro-massage session promoting deep muscle relaxation and stress release before massage therapy.',
    image: '/images/spa-hydrotherapy-jacuzzi-ritual-koramangala.webp',
    alt: 'Hydro-massage jacuzzi session for deep muscle relaxation at Nikita Spa in Koramangala Bengaluru',
    width: 488,
    height: 1020
  },
  {
    id: 'room-couple-swan',
    title: 'Couple Massage Suite with Swan Art',
    category: 'Treatment Rooms',
    description: 'Harmonious twin beds with folded swan towel arrangements, fresh flowers, and backlit vanity mirror.',
    image: '/images/couple-massage-room-swan-art-koramangala.webp',
    alt: 'Harmonious couple massage suite with decorative swan towel art and fresh floral accents at Nikita Spa Koramangala',
    width: 1360,
    height: 628
  },
  {
    id: 'room-single-glow',
    title: 'Private Suite with Under-Bed LED Glow',
    category: 'Treatment Rooms',
    description: 'Comfort massage bed with calming blue LED perimeter glow, fresh towels, and aromatic therapy tray.',
    image: '/images/body-massage-spa-room-bengaluru.webp',
    alt: 'Private full body massage treatment bed with serene under-bed LED glow at Nikita Spa Bengaluru',
    width: 1360,
    height: 628
  },
  {
    id: 'interior-vanity',
    title: 'Gold Basin Vanity & Refreshment Station',
    category: 'Interiors',
    description: 'Designer gold wash basin, fluted wall accents, and organic botanical lotions for guest refreshment.',
    image: '/images/spa-vanity-gold-basin-amenities-bengaluru.webp',
    alt: 'Designer gold wash basin vanity and botanical refreshment amenities at Nikita Spa Koramangala',
    width: 471,
    height: 1020
  },
  {
    id: 'atmosphere-blue-cove',
    title: 'Mood Therapy Ambient Lighting',
    category: 'Atmosphere',
    description: 'Soft therapeutic blue ceiling cove and wall sconces designed to calm the nervous system.',
    image: '/images/aromatherapy-massage-room-bengaluru.webp',
    alt: 'Soothing blue ambient cove illumination in aromatherapy massage suite at Nikita Spa Bengaluru',
    width: 471,
    height: 1020
  },
  {
    id: 'room-attached-shower',
    title: 'En-Suite Therapy Suite with Glass Shower',
    category: 'Treatment Rooms',
    description: 'Private room with attached sanitized glass shower cubicle, plush bathrobes, and vanity mirror.',
    image: '/images/deep-tissue-massage-suite-koramangala.webp',
    alt: 'En-suite massage therapy room with attached private glass shower cubicle at Nikita Spa Koramangala',
    width: 1360,
    height: 628
  },
  {
    id: 'room-couple-ambience',
    title: 'Twin Bed Suite with Ambient Glow',
    category: 'Treatment Rooms',
    description: 'Deluxe couple room setting with custom floral ceiling accents and ambient lighting.',
    image: '/images/twin-massage-suite-ambient-glow-koramangala.webp',
    alt: 'Twin bed couple therapy suite with floral ceiling accents and warm lighting at Nikita Spa Koramangala',
    width: 471,
    height: 1020
  },
  {
    id: 'atmosphere-glow-platform',
    title: 'Tranquil Blue LED Platform Bed',
    category: 'Atmosphere',
    description: 'Soft blue under-lighting highlighting the clean therapy platform and private suite sanctuary.',
    image: '/images/thai-massage-platform-suite-koramangala.webp',
    alt: 'Supportive Thai massage platform bed with tranquil blue under-bed illumination at Nikita Spa Koramangala',
    width: 476,
    height: 1020
  },
  {
    id: 'interior-shower-dressing',
    title: 'Private Shower & Dressing Corner',
    category: 'Interiors',
    description: 'Dedicated dressing space with plush robes, soft rugs, and private glass shower.',
    image: '/images/private-shower-dressing-corner-koramangala.webp',
    alt: 'Private ensuite dressing space with plush bathrobes and clean glass shower at Nikita Spa Koramangala',
    width: 476,
    height: 1020
  },
  {
    id: 'room-dual-bed-care',
    title: 'Dual Treatment Suite with Linens',
    category: 'Treatment Rooms',
    description: 'Spotlessly sanitised twin beds with red cushions, fresh linens, and air conditioning.',
    image: '/images/dual-therapy-room-fresh-linens-koramangala.webp',
    alt: 'Twin massage treatment beds prepared with sanitized crisp linens at Nikita Spa Koramangala Bengaluru',
    width: 476,
    height: 1020
  },
  {
    id: 'room-single-floral-ceiling',
    title: 'Floral Ceiling Single Therapy Room',
    category: 'Treatment Rooms',
    description: 'A quiet, personal therapy room featuring soft ceiling artwork, AC, and private vanity.',
    image: '/images/swedish-massage-room-bengaluru.webp',
    alt: 'Quiet single massage treatment suite with floral ceiling design at Nikita Spa Koramangala Bengaluru',
    width: 471,
    height: 1020
  },
  {
    id: 'room-twin-vanity',
    title: 'Twin Therapy Suite Mirror View',
    category: 'Treatment Rooms',
    description: 'Warm-toned couple therapy suite with vanity counter and prepared massage beds.',
    image: '/images/twin-treatment-suite-vanity-mirror-koramangala.webp',
    alt: 'Warm couple treatment room with vanity counter and prepared massage tables at Nikita Spa Koramangala',
    width: 471,
    height: 1020
  },
  {
    id: 'room-couple-jacuzzi-wide',
    title: 'Panoramic Couple Suite & Jacuzzi',
    category: 'Interiors',
    description: 'Wide perspective of the couple treatment suite featuring twin beds and private jacuzzi.',
    image: '/images/luxury-couple-spa-suite-koramangala.webp',
    alt: 'Panoramic perspective of luxury couple massage suite and private jacuzzi at Nikita Spa Koramangala',
    width: 1360,
    height: 635
  },
  {
    id: 'room-circular-wide',
    title: 'Circular Treatment Suite Layout',
    category: 'Treatment Rooms',
    description: 'Panoramic view of the circular bed therapy suite with modern amenities and calm ambiance.',
    image: '/images/spa-treatment-room-circular-layout-bengaluru.webp',
    alt: 'Wide-angle layout view of circular bed wellness treatment room at Nikita Spa Koramangala Bengaluru',
    width: 1360,
    height: 635
  },
  {
    id: 'atmosphere-night-calm',
    title: 'Evening Sanctuary Atmosphere',
    category: 'Atmosphere',
    description: 'Acoustic quietude and gentle glow creating a peaceful escape from Bengaluru city life.',
    image: '/images/spa-relaxation-room-evening-ambiance-bengaluru.webp',
    alt: 'Tranquil evening mood lighting in relaxation room at Nikita Spa Koramangala Bengaluru',
    width: 476,
    height: 1020
  },
  {
    id: 'interior-jacuzzi-suite-full',
    title: 'Private Hydrotherapy Suite',
    category: 'Interiors',
    description: 'Full suite view showing the seamless combination of jacuzzi, massage beds, and relaxation armchairs.',
    image: '/images/private-hydrotherapy-suite-bengaluru.webp',
    alt: 'Full view of private hydrotherapy suite with jacuzzi and massage beds at Nikita Spa Bengaluru',
    width: 1360,
    height: 635
  },
  {
    id: 'ritual-prep-tray',
    title: 'Massage Preparations & Aromatherapy Tray',
    category: 'Rituals',
    description: 'Fresh rose petals, aromatic essential massage oils, and sterilized towels prepared for your session.',
    image: '/images/nikita-spa-aromatherapy-preparation-tray.webp',
    alt: 'Aromatherapy treatment preparation tray with organic botanical oils, fresh rose petals, and clean towels at Nikita Spa Koramangala',
    width: 221,
    height: 368
  }
];
