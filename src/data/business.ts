/**
 * Nikita Spa - Centralized Business Information
 * Single source of truth for business details, address, contacts, and map links across the site.
 */

export const BUSINESS_INFO = {
  name: 'Nikita Spa',
  tagline: 'Your Relaxation Destination in Koramangala, Bengaluru',
  phone: '9693264878',
  phoneFormatted: '+91 9693264878',
  phoneTel: 'tel:+919693264878',
  whatsappNumber: '919693264878',
  whatsappUrl: 'https://wa.me/919693264878',
  email: 'contact@nikita.online',
  website: 'https://nikita.online',
  address: {
    building: 'Indiqube Octa',
    block: '4th Block',
    streetAddress: 'Indiqube Octa, 4th Block, Koramangala',
    locality: 'Koramangala, Bengaluru',
    city: 'Bengaluru',
    state: 'Karnataka',
    postalCode: '560034',
    country: 'India',
    countryCode: 'IN',
    full: 'Indiqube Octa, 4th Block, Koramangala, Bengaluru, Karnataka 560034, India',
    short: 'Indiqube Octa, 4th Block, Koramangala, Bengaluru',
    landmark: '80 Feet Road, 4th Block, Koramangala',
  },
  geo: {
    latitude: 12.9348,
    longitude: 77.6256,
  },
  maps: {
    searchUrl: 'https://www.google.com/maps/search/?api=1&query=Indiqube+Octa,+4th+Block,+Koramangala,+Bengaluru,+Karnataka+560034',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Indiqube+Octa,+4th+Block,+Koramangala,+Bengaluru,+Karnataka+560034',
    embedUrl: 'https://maps.google.com/maps?q=Indiqube+Octa,+4th+Block,+Koramangala,+Bengaluru,+Karnataka+560034&t=&z=16&ie=UTF8&iwloc=&output=embed',
  },
  hours: {
    display: 'Monday - Sunday: 10:00 AM - 09:00 PM',
    schema: 'Mo-Su 10:00-21:00',
  },
} as const;
