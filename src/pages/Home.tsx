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

interface HomeProps {
  onOpenBooking: () => void;
  onBookService: (serviceName: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenBooking, onBookService }) => {
  return (
    <>
      <SEOHead
        title="Nikita Spa | Luxury Wellness & Massage Spa in Koramangala, Bengaluru"
        description="Discover peaceful relaxation at Nikita Spa, Koramangala, Bengaluru. Experience premium full body massage, deep tissue, Swedish, Thai, and aromatherapy therapies in private, hygienic suites."
        keywords="Spa in Koramangala, Best Spa in Koramangala Bengaluru, Spa in Bangalore, Massage Centre in Koramangala, Full Body Massage in Koramangala, Luxury Spa in Bengaluru, Massage Services in Bangalore"
        canonical="https://nikitaspa.com/"
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
