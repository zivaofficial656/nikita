import { CategoryItem } from '../types';
import { siteImages } from './images';

export const CATEGORIES_DATA: CategoryItem[] = [
  {
    id: 'independent-companions',
    slug: 'independent-companions',
    name: 'Independent Companions',
    tagline: 'Self-governed, articulate individuals for private bespoke engagements',
    description: 'Autonomous individuals managing their schedules directly with complete discretion. Each companion sets their own social parameters, ensuring personal authenticity and bespoke attention for discerning clients.',
    iconName: 'UserCheck',
    image: siteImages.categories.independent,
    features: [
      'Direct communication and custom schedule alignment',
      'Articulate professionals from diverse academic backgrounds',
      'Strict commitment to client discretion and mutual boundaries',
      'Curated experiences tailored to your personal social itinerary'
    ],
    idealFor: [
      'Private museum & gallery walk-throughs',
      'Discreet high-society gatherings',
      'Bespoke city discovery walks in Bangalore'
    ],
    overview: 'Independent companions on Love are autonomous, cultivated adults offering polite, engaging, and strictly platonic companionship for clients who value intellectual resonance and personal charm.'
  },
  {
    id: 'social-companions',
    slug: 'social-companions',
    name: 'Social Companions',
    tagline: 'Charming, personable partners for cocktail soirees and social mixers',
    description: 'Expertise in high-society social decorum and effortless conversation. Never feel solitary at an art opening, diplomatic reception, or weekend vineyard excursion.',
    iconName: 'Wine',
    image: siteImages.categories.social,
    features: [
      'Poise and charisma suited to diverse crowd demographics',
      'Natural conversationalists knowledgeable in arts, culture & media',
      'Impeccable dress sense aligned with upscale dress codes',
      'Effortless social adaptability among high-net-worth circles'
    ],
    idealFor: [
      'Cocktail galas and charity fundraisers',
      'Art gallery vernissages and private auctions',
      'Weekend polo club matches and sports clubs'
    ],
    overview: 'Designed for individuals seeking an elegant, witty, and polished presence by their side during vibrant social gatherings across Bangalore’s premier social clubs.'
  },
  {
    id: 'travel-companions',
    slug: 'travel-companions',
    name: 'Travel Companions',
    tagline: 'Cultured travel partners for luxury weekend getaways and retreats',
    description: 'Venture beyond Bengaluru with an adventurous, worldly companion. Perfect for weekend getaways to Coorg coffee estates, Kabini wildlife reserves, Chikmagalur plantations, or coastal Gokarna.',
    iconName: 'Compass',
    image: siteImages.categories.travel,
    features: [
      'Experienced in luxury resort etiquette and international travel standards',
      'Multi-lingual with deep appreciation for nature and regional history',
      'Supportive, easy-going temperament during long itineraries',
      'Strict adherence to separate accommodations and mutual respect'
    ],
    idealFor: [
      'Coorg & Chikmagalur luxury plantation retreats',
      'Heritage explorations in Hampi & Mysore Palaces',
      'Wellness retreats at Ayurveda sanctuaries'
    ],
    overview: 'Travel companions bring warmth, curiosity, and companionship to domestic and regional itineraries, ensuring your journeys are enriched with memorable conversation and shared adventures.'
  },
  {
    id: 'dinner-companions',
    slug: 'dinner-companions',
    name: 'Dinner Companions',
    tagline: 'Gourmet conversationalists for five-star dining and culinary journeys',
    description: 'Elevate your culinary adventures. Whether savoring a 12-course tasting menu at a Michelin-caliber restaurant or exploring Bangalore’s clandestine microbreweries, dine in radiant company.',
    iconName: 'Utensils',
    image: siteImages.categories.dinner,
    features: [
      'Appreciation for fine wines, single malts, and culinary nuances',
      'Refined table manners and classic dining etiquette',
      'Engaging dialogue spanning philosophy, global affairs, and literature',
      'Attire curated specifically for white-tablecloth environments'
    ],
    idealFor: [
      'Michelin-curated degustation dinners',
      'Romantic-style gourmet anniversaries (platonic)',
      'Chef-table experiences and boutique wine tastings'
    ],
    overview: 'Dining is best enjoyed with an attentive, eloquent companion who appreciates fine culinary craftsmanship and the art of unhurried, engaging conversation over candlelight.'
  },
  {
    id: 'event-companions',
    slug: 'event-companions',
    name: 'Event Companions',
    tagline: 'Stately and charismatic attendance for weddings, red carpets, and galas',
    description: 'Make a refined statement at high-profile functions. From extravagant Indian weddings to film festivals and awards nights, arrive with an impeccably attired and gracious companion.',
    iconName: 'Sparkles',
    image: siteImages.categories.event,
    features: [
      'Versatile wardrobe from regal traditional Indian sarees to black-tie gowns',
      'Respectful understanding of diverse family and cultural traditions',
      'High adaptability to formal photography and media attendance',
      'Attentive presence that enhances your confidence and enjoyment'
    ],
    idealFor: [
      'Grand wedding receptions & Sangeet ceremonies',
      'Black-tie charity balls and gala dinners',
      'Film premieres and fashion week exhibitions'
    ],
    overview: 'High-profile public events require composure and grace. Our event companions ensure you navigate formal expectations with effortless elegance and magnetic charisma.'
  },
  {
    id: 'professional-companions',
    slug: 'professional-companions',
    name: 'Professional Companions',
    tagline: 'Astute, corporate-savvy partners for conferences and executive hospitality',
    description: 'For business leaders, founders, and overseas delegates seeking a sophisticated partner for corporate conventions, industry summits, and business lunches where intellect is paramount.',
    iconName: 'Briefcase',
    image: siteImages.categories.professional,
    features: [
      'Fluent in business terminology, tech industry dynamics & global economics',
      'Executive-level professional demeanor and polished boardroom decorum',
      'Discretion regarding proprietary or corporate discussions',
      'Professional host capabilities for international delegation visits'
    ],
    idealFor: [
      'Bangalore Tech Summit and global conferences',
      'Executive hospitality for visiting overseas board members',
      'Formal corporate banquets and awards ceremonies'
    ],
    overview: 'Professional companions bridge the gap between high-level social grace and commercial fluency, allowing you to host clients and colleagues with unmatched poise.'
  }
];
