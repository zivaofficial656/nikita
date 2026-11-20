import { ServiceItem } from '../data/services';
import { faqData } from '../data/faq';

export const CANONICAL_DOMAIN = 'https://nikita.online';

/**
 * HealthAndBeautyBusiness / DaySpa Schema
 */
export const getLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['HealthAndBeautyBusiness', 'DaySpa'],
  '@id': `${CANONICAL_DOMAIN}/#business`,
  name: 'Nikita Spa',
  alternateName: 'Nikita Spa Koramangala Bengaluru',
  url: `${CANONICAL_DOMAIN}/`,
  logo: `${CANONICAL_DOMAIN}/images/Elegant%20Nitiya%20Spa%20Logo%20with%20Lotus%20Accents.png`,
  image: [
    `${CANONICAL_DOMAIN}/images/og-image.jpg`,
    `${CANONICAL_DOMAIN}/images/n15.webp`,
    `${CANONICAL_DOMAIN}/images/n13.webp`
  ],
  telephone: '+919693264878',
  email: 'contact@nikita.online',
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Credit Card, UPI, Debit Card',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Koramangala',
    addressLocality: 'Koramangala, Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560034',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 12.93401024156366,
    longitude: 77.63006964588301
  },
  hasMap: 'https://www.google.com/maps/search/?api=1&query=12.93401024156366,77.63006964588301',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '10:00',
      closes: '22:00'
    }
  ],
  areaServed: [
    {
      '@type': 'City',
      name: 'Bengaluru'
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Koramangala'
    }
  ],
  description: 'Premium luxury wellness and massage spa in Koramangala, Bengaluru. Specializing in authentic Full Body Massage, Swedish Massage, Deep Tissue, Thai Massage, Aromatherapy, and Couple Massages.'
});

/**
 * WebSite Schema with SearchAction
 */
export const getWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${CANONICAL_DOMAIN}/#website`,
  url: `${CANONICAL_DOMAIN}/`,
  name: 'Nikita Spa',
  description: 'Luxury Wellness & Massage Spa in Koramangala, Bengaluru',
  publisher: {
    '@id': `${CANONICAL_DOMAIN}/#business`
  },
  inLanguage: 'en-IN'
});

/**
 * BreadcrumbList Schema
 */
export const getBreadcrumbSchema = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.path.startsWith('http') ? item.path : `${CANONICAL_DOMAIN}${item.path.startsWith('/') ? item.path : `/${item.path}`}`
  }))
});

/**
 * Service Schema for Individual Therapy Pages
 */
export const getServiceSchema = (service: ServiceItem) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${CANONICAL_DOMAIN}/services/${service.id}#service`,
  serviceType: 'Massage Therapy & Spa Treatment',
  name: service.name,
  description: service.fullDescription,
  image: `${CANONICAL_DOMAIN}${service.image}`,
  provider: {
    '@id': `${CANONICAL_DOMAIN}/#business`
  },
  areaServed: {
    '@type': 'City',
    name: 'Bengaluru'
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    url: `${CANONICAL_DOMAIN}/services/${service.id}`
  }
});

/**
 * FAQPage Schema
 */
export const getFAQSchema = (faqs = faqData) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});
