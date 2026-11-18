import { GuideArticle } from '../types';
import { siteImages } from './images';

export const GUIDES_DATA: GuideArticle[] = [
  {
    id: 'guide-01',
    slug: 'fine-dining-etiquette-bangalore',
    title: 'The Art of Fine Dining Companionship in Bengaluru',
    summary: 'A curated handbook on selecting the ideal culinary venue, wine ordering etiquette, and conversational decorum for memorable evenings.',
    readTime: '6 min read',
    category: 'Etiquette & Dining',
    date: 'February 2025',
    image: siteImages.guides.fineDiningEtiquette,
    content: [
      'Bengaluru has emerged as one of the culinary capitals of South Asia, featuring Michelin-experienced chefs, experimental modern Indian tasting menus, and secret rooftop speakeasies. When dining with a companion, the experience is not simply about exquisite food, but about the cadence of dialogue and unhurried ease.',
      'Selecting the appropriate venue sets the tone. Venues like Lavelle Road’s boutique bistros or UB City’s operatic rooftop terraces offer the ideal acoustic environment where speech remains private and natural without raising one’s voice.',
      'Punctuality is the cornerstone of high-society etiquette. Confirming reservations at least 48 hours prior and informing the venue of any dietary preferences ensures a seamless evening from arrival to the closing digestif.'
    ],
    tips: [
      'Choose venues with comfortable acoustic dampening for unhurried conversation.',
      'Always confirm wine pairings and dietary preferences in advance.',
      'Maintain respectful, attentive eye contact and listen generously.'
    ]
  },
  {
    id: 'guide-02',
    slug: 'executive-companion-conventions',
    title: 'Navigating Corporate Galas & Tech Summits with a Delegate Companion',
    summary: 'How corporate leaders and visiting overseas founders can leverage polished professional companionship for international conclaves.',
    readTime: '8 min read',
    category: 'Corporate & Networking',
    date: 'January 2025',
    image: siteImages.guides.corporateConventions,
    content: [
      'In high-stakes corporate environments like the Bangalore Tech Summit or closed-door angel investor dinners, arriving with a confident, articulate partner amplifies your hosting capability. Professional companions bring diplomatic fluency and astute social poise.',
      'A pre-briefing session is always beneficial. Sharing key details regarding visiting delegates, industry terminology, and conversation goals allows your companion to support social dynamics effortlessly.',
      'Professional discretion is absolute. Clear boundaries and mutual understanding guarantee that business reputations and corporate intelligence remain inviolable.'
    ],
    tips: [
      'Schedule a 15-minute alignment call before the event to discuss attendees.',
      'Ensure dress codes are clearly specified (Black-tie, Business Formal, or Smart Casual).',
      'Respect professional boundaries and non-disclosure standards.'
    ]
  },
  {
    id: 'guide-03',
    slug: 'weekend-getaways-from-bengaluru',
    title: 'Curating a Luxury Weekend Retreat: Coorg, Kabini & Beyond',
    summary: 'Essential guidelines for organizing respectful, platonic travel companionship across South India’s most scenic retreats.',
    readTime: '7 min read',
    category: 'Travel & Retreats',
    date: 'February 2025',
    image: siteImages.guides.luxuryRetreats,
    content: [
      'Karnataka boasts some of the most spectacular biodiversity and luxury heritage retreats in the country. From the misty coffee plantations of Chikmagalur and Coorg to the tranquil wildlife lodges of Kabini, exploring with an engaging travel companion transforms travel into a shared discovery.',
      'Our primary principle for travel companionship is transparent planning. Both parties must have independent accommodations (private adjoining villas or separate luxury suites), structured daily itineraries, and designated moments of personal downtime.',
      'Coordinate transportation with verified luxury chauffeured services to ensure comfort throughout scenic mountain passes and national park reserves.'
    ],
    tips: [
      'Independent private suites are mandatory without exception.',
      'Balance shared activities (safaris, tastings) with individual quiet time.',
      'Finalize travel insurance and logistics at least one week in advance.'
    ]
  },
  {
    id: 'guide-04',
    slug: 'safety-and-consent-standards',
    title: 'Safety, Consent & Mutual Respect: The Love Standard',
    summary: 'Why consent, privacy, and transparent platform rules form the foundation of a modern, ethical companionship platform.',
    readTime: '5 min read',
    category: 'Safety & Trust',
    date: 'January 2025',
    image: siteImages.guides.safetyStandards,
    content: [
      'The modern companionship ecosystem thrives only when safety, mutual consent, and absolute respect are treated as non-negotiable foundations. Love was conceived to elevate this standard across Karnataka.',
      'We enforce public meeting protocols for all initial rendezvous. Five-star lounges and reputable public clubs provide the secure atmosphere needed for both parties to connect naturally with total peace of mind.',
      'Any departure from platonic, respectful conduct results in instant revocation of directory privileges. Integrity and safety remain our singular priority.'
    ],
    tips: [
      'Always meet in verified public venues for first encounters.',
      'Report any communication discrepancies immediately to our support desk.',
      'Verify 18+ age criteria and read platform guidelines before enquiry.'
    ]
  }
];
