import { LocationItem } from '../types';
import { siteImages } from './images';

export const LOCATIONS_DATA: LocationItem[] = [
  {
    id: 'indiranagar',
    slug: 'indiranagar',
    name: 'Indiranagar',
    tagline: 'Cosmopolitan Nightlife & Gastronomy',
    description: '100 Feet Road and 12th Main: candlelit cocktail sanctuaries, European speakeasies, and designer boutiques. The epicenter of Bangalore’s chic evening scene.',
    image: siteImages.locations.indiranagar,
    companionCount: 14,
    vibe: 'Chic, Seductive & Vibrant',
    popularVenues: ['Toit Private Mezzanine', 'Smoke House Deli', 'Windmills Taproom', '12th Main Cocktail Bars'],
    highlight: 'Curated dinner dates & stylish midnight socializing'
  },
  {
    id: 'koramangala',
    slug: 'koramangala',
    name: 'Koramangala',
    tagline: 'High-Society Lounges & Culinary Prestige',
    description: 'Trendy rooftop gardens, private clubs, and culinary sanctuaries. Perfect for spirited conversation, wine tastings, and elegant social evenings.',
    image: siteImages.locations.koramangala,
    companionCount: 12,
    vibe: 'Glamorous, Energetic & Social',
    popularVenues: ['Koramangala Club', 'Oia Rooftop', 'Fenny’s Lounge', 'Secret Speakeasies'],
    highlight: 'Rooftop gastronomy & energetic luxury evenings'
  },
  {
    id: 'hsr-layout',
    slug: 'hsr-layout',
    name: 'HSR Layout',
    tagline: 'Tree-Lined Avenues & Private Sanctuaries',
    description: 'Expansive boulevards, quiet green avenues, and bespoke artisan bistros. Ideal for intimate afternoon tea, confidential dinners, and relaxed evening strolls.',
    image: siteImages.locations.hsrLayout,
    companionCount: 9,
    vibe: 'Discreet, Serene & Modern',
    popularVenues: ['Sector 4 Artisan Cafes', 'Brotherhood Lounge', 'Agara Lake Promenade'],
    highlight: 'Discreet rendezvous & tranquil luxury coffee salons'
  },
  {
    id: 'whitefield',
    slug: 'whitefield',
    name: 'Whitefield',
    tagline: 'Grand Five-Star Ballrooms & Executive Hotels',
    description: 'Bangalore’s international hotel district with sprawling five-star resorts, private golf clubs, and grand ballrooms. Suited for corporate gala accompaniment and executive dining.',
    image: siteImages.locations.whitefield,
    companionCount: 16,
    vibe: 'Opulent, International & Corporate Elite',
    popularVenues: ['The Leela Palace East', 'Marriott Whitefield', 'Windmills Craftworks', 'Sheraton Grand'],
    highlight: 'Five-star ballroom galas & executive delegations'
  },
  {
    id: 'mg-road',
    slug: 'mg-road',
    name: 'MG Road & Central District',
    tagline: 'UB City Glamour & Heritage Grandeur',
    description: 'Lavelle Road, UB City luxury mall, and colonial avenues. Flagship designer boutiques, operatic dining terraces, and five-star luxury suites. Bangalore’s peak glamour address.',
    image: siteImages.locations.mgRoad,
    companionCount: 18,
    vibe: 'Ultra-Luxury, Prestigious & Haute Couture',
    popularVenues: ['UB City Skyye Lounge', 'The Ritz-Carlton', 'JW Marriott Vittal Mallya', 'Lavelle Road Bistro Terrace'],
    highlight: 'Designer fashion shopping & operatic champagne dinners'
  },
  {
    id: 'jayanagar',
    slug: 'jayanagar',
    name: 'Jayanagar',
    tagline: 'Classical Heritage & Cultural Aristocracy',
    description: 'Classical South Indian elegance, leafy canopies, historic theatre institutions, and private cultural salons. Ideal for cultural companion tours and literary evenings.',
    image: siteImages.locations.jayanagar,
    companionCount: 8,
    vibe: 'Aristocratic, Cultured & Timeless',
    popularVenues: ['Ranga Shankara Theatre', 'Jayanagar 4th Block Boulevard', 'Traditional South Dining Halls'],
    highlight: 'Theatre galas, classical recitals & cultural salons'
  },
  {
    id: 'marathahalli',
    slug: 'marathahalli',
    name: 'Marathahalli & ORR',
    tagline: 'Cosmopolitan Hub & Sky Lounge Dining',
    description: 'Dynamic corridor connecting East and South Bangalore. Packed with fusion gastronomy, private rooftop lounges, and prime business hotels.',
    image: siteImages.locations.marathahalli,
    companionCount: 10,
    vibe: 'Fast-Paced, Contemporary & Urban Glamour',
    popularVenues: ['ORR Sky Bars', 'Radisson Blu Lounge', 'Innovative VIP Cinema Suites'],
    highlight: 'Post-summit cocktail lounges & relaxed evening bistros'
  },
  {
    id: 'electronic-city',
    slug: 'electronic-city',
    name: 'Electronic City',
    tagline: 'Tech Conclaves & Exclusive Executive Retreats',
    description: 'The epicenter of global tech enterprise. Featuring sprawling corporate convention suites, luxury business resorts, and private weekend retreats.',
    image: siteImages.locations.electronicCity,
    companionCount: 7,
    vibe: 'Tech-Forward, Sleek & Modern',
    popularVenues: ['Otium By The Oterra', 'Crowne Plaza Convention Suite', 'Electronic City Flyover Skyline'],
    highlight: 'Summit delegate accompaniment & corporate hospitality'
  }
];
