export type VerificationStatus = 
  | 'Demo Profile (Unverified)'
  | 'Pending Verification'
  | 'Identity Review In Progress';

export interface RateCard {
  twoHours: string;
  fourHours: string;
  eveningDinner: string;
  weekendRetreat: string;
}

export interface Companion {
  id: string;
  name: string;
  tagline: string;
  age: number; // 18+ adult age confirmation
  location: string;
  locationSlug: string;
  rating: number;
  reviewCount: number;
  hourlyRate: string;
  rateCard: RateCard;
  image: string;
  gallery: string[];
  categories: string[];
  categorySlugs: string[];
  languages: string[];
  bio: string;
  experienceYears: number;
  interests: string[];
  servicesOffered: string[];
  verificationStatus: VerificationStatus;
  isDemo: boolean;
  isAvailableToday: boolean;
  whatsappMessage: string;
  availability: string;
  height?: string;
  education?: string;
  etiquetteNotes: string[];
  bookingNotice: string;
}

export interface LocationItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  companionCount: number;
  vibe: string;
  popularVenues: string[];
  highlight: string;
}

export interface CategoryItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  image: string;
  features: string[];
  idealFor: string[];
  overview: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  idealFor: string;
  pricingEstimate: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  location: string;
  date: string;
  rating: number;
  quote: string;
  companionName: string;
  category: string;
  isSamplePlaceholder: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface GuideArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  readTime: string;
  category: string;
  date: string;
  image: string;
  content: string[];
  tips: string[];
}
