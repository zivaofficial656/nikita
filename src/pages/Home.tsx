import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Hero } from '../components/Hero';
import { Introduction } from '../components/Introduction';
import { ServicesSection } from '../components/ServicesSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { GallerySection } from '../components/GallerySection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { LocationSection } from '../components/LocationSection';
import { FAQSection } from '../components/FAQSection';
import { FinalCTA } from '../components/FinalCTA';
import { getLocalBusinessSchema, getWebsiteSchema, getFAQSchema } from '../utils/seoSchema';

interface HomeProps {
  onOpenBooking: () => void;
  onBookService: (serviceName: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenBooking, onBookService }) => {
  const homeSchemas = [
    getLocalBusinessSchema(),
    getWebsiteSchema(),
    getFAQSchema()
  ];

  return (
    <>
      <SEOHead
        title="Nikita Spa | Best Luxury Wellness & Body Massage Spa in Koramangala Bengaluru"
        description="Escape the everyday at Nikita Spa in Koramangala, Bengaluru. Experience top-rated full body massage, deep tissue, Swedish, Thai, and couple spa therapies in private sanitized suites."
        keywords="spa in bangalore, best spa in bangalore, spa near me, body massage in bangalore, body massage near me, couple spa in bangalore, luxury spa in bangalore, thai massage in bangalore, full body massage in bangalore, spa in koramangala, spa in koramangala bengaluru, body massage in koramangala bengaluru, couple spa in koramangala bengaluru, luxury spa in koramangala bengaluru, thai massage in koramangala bengaluru, full body massage in koramangala bengaluru, body massage spa in koramangala"
        canonical="/"
        ogImage="/images/og-image.jpg"
        schema={homeSchemas}
      />

      {/* Main Homepage Sections */}
      <main>
        {/* B. Hero Section */}
        <Hero onOpenBooking={onOpenBooking} />

        {/* C. Introduction Section */}
        <Introduction onOpenBooking={onOpenBooking} />

        {/* D. Services Section */}
        <ServicesSection onBookService={onBookService} />

        {/* E. Why Choose Nikita Spa */}
        <WhyChooseUs />

        {/* F. Experience / Gallery Preview */}
        <GallerySection />

        {/* G. Customer Testimonials Placeholders */}
        <TestimonialsSection />

        {/* H. Location Section & Google Maps */}
        <LocationSection />

        {/* I. FAQ Section */}
        <FAQSection />

        {/* J. Final CTA Section */}
        <FinalCTA onOpenBooking={onOpenBooking} />
      </main>
    </>
  );
};
