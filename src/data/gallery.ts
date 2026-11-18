export interface GalleryImage {
  id: string;
  title: string;
  category: 'Treatment Rooms' | 'Interiors' | 'Atmosphere' | 'Rituals';
  description: string;
  image: string;
}

export const galleryData: GalleryImage[] = [
  {
    id: 'room-couple-jacuzzi-1',
    title: 'Executive Couple Sanctuary & Jacuzzi',
    category: 'Treatment Rooms',
    description: 'Spacious dual-bed suite featuring a private hydrotherapy jacuzzi, swan towel art, and soothing ambient lighting.',
    image: '/images/n15.webp'
  },
  {
    id: 'room-circular-1',
    title: 'Signature Circular Therapy Suite',
    category: 'Treatment Rooms',
    description: 'Specially designed circular therapy bed with blue ambient ceiling cove and premium botanical oils.',
    image: '/images/n4.webp'
  },
  {
    id: 'jacuzzi-lounge-1',
    title: 'In-Suite Jacuzzi & Relaxation Chairs',
    category: 'Interiors',
    description: 'Warm hydrotherapy jacuzzi tub paired with high-back plush velvet relaxation armchairs.',
    image: '/images/n16.webp'
  },
  {
    id: 'ritual-hydrotherapy',
    title: 'Hydrotherapy Jacuzzi Ritual',
    category: 'Rituals',
    description: 'Warm hydro-massage session promoting deep muscle relaxation and stress release before massage therapy.',
    image: '/images/n18.webp'
  },
  {
    id: 'room-couple-swan',
    title: 'Couple Massage Suite with Swan Art',
    category: 'Treatment Rooms',
    description: 'Harmonious twin beds with folded swan towel arrangements, fresh flowers, and backlit vanity mirror.',
    image: '/images/n6.webp'
  },
  {
    id: 'room-single-glow',
    title: 'Private Suite with Under-Bed LED Glow',
    category: 'Treatment Rooms',
    description: 'Comfort massage bed with calming blue LED perimeter glow, fresh towels, and aromatic therapy tray.',
    image: '/images/n13.webp'
  },
  {
    id: 'interior-vanity',
    title: 'Gold Basin Vanity & Refreshment Station',
    category: 'Interiors',
    description: 'Designer gold wash basin, fluted wall accents, and organic botanical lotions for guest refreshment.',
    image: '/images/n19.webp'
  },
  {
    id: 'atmosphere-blue-cove',
    title: 'Mood Therapy Ambient Lighting',
    category: 'Atmosphere',
    description: 'Soft therapeutic blue ceiling cove and wall sconces designed to calm the nervous system.',
    image: '/images/n8.webp'
  },
  {
    id: 'room-attached-shower',
    title: 'En-Suite Therapy Suite with Glass Shower',
    category: 'Treatment Rooms',
    description: 'Private room with attached sanitized glass shower cubicle, plush bathrobes, and vanity mirror.',
    image: '/images/n7.webp'
  },
  {
    id: 'room-couple-ambience',
    title: 'Twin Bed Suite with Ambient Glow',
    category: 'Treatment Rooms',
    description: 'Deluxe couple room setting with custom floral ceiling accents and ambient lighting.',
    image: '/images/n10.webp'
  },
  {
    id: 'atmosphere-glow-platform',
    title: 'Tranquil Blue LED Platform Bed',
    category: 'Atmosphere',
    description: 'Soft blue under-lighting highlighting the clean therapy platform and private suite sanctuary.',
    image: '/images/n11.webp'
  },
  {
    id: 'interior-shower-dressing',
    title: 'Private Shower & Dressing Corner',
    category: 'Interiors',
    description: 'Dedicated dressing space with plush robes, soft rugs, and private glass shower.',
    image: '/images/n17.webp'
  },
  {
    id: 'room-dual-bed-care',
    title: 'Dual Treatment Suite with Linens',
    category: 'Treatment Rooms',
    description: 'Spotlessly sanitised twin beds with red cushions, fresh linens, and air conditioning.',
    image: '/images/n14.webp'
  },
  {
    id: 'room-single-floral-ceiling',
    title: 'Floral Ceiling Single Therapy Room',
    category: 'Treatment Rooms',
    description: 'A quiet, personal therapy room featuring soft ceiling artwork, AC, and private vanity.',
    image: '/images/n20.webp'
  },
  {
    id: 'room-twin-vanity',
    title: 'Twin Therapy Suite Mirror View',
    category: 'Treatment Rooms',
    description: 'Warm-toned couple therapy suite with vanity counter and prepared massage beds.',
    image: '/images/n21.webp'
  },
  {
    id: 'room-couple-jacuzzi-wide',
    title: 'Panoramic Couple Suite & Jacuzzi',
    category: 'Interiors',
    description: 'Wide perspective of the couple treatment suite featuring twin beds and private jacuzzi.',
    image: '/images/n2.webp'
  },
  {
    id: 'room-circular-wide',
    title: 'Circular Treatment Suite Layout',
    category: 'Treatment Rooms',
    description: 'Panoramic view of the circular bed therapy suite with modern amenities and calm ambiance.',
    image: '/images/n5.webp'
  },
  {
    id: 'atmosphere-night-calm',
    title: 'Evening Sanctuary Atmosphere',
    category: 'Atmosphere',
    description: 'Acoustic quietude and gentle glow creating a peaceful escape from Bengaluru city life.',
    image: '/images/n12.webp'
  },
  {
    id: 'interior-jacuzzi-suite-full',
    title: 'Private Hydrotherapy Suite',
    category: 'Interiors',
    description: 'Full suite view showing the seamless combination of jacuzzi, massage beds, and relaxation armchairs.',
    image: '/images/n3.webp'
  },
  {
    id: 'ritual-prep-tray',
    title: 'Massage Preparations & Aromatherapy Tray',
    category: 'Rituals',
    description: 'Fresh rose petals, aromatic essential massage oils, and sterilized towels prepared for your session.',
    image: '/images/n1.jpg'
  }
];
