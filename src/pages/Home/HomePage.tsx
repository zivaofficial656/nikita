import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, MapPin, MessageCircle } from 'lucide-react';
import { HeroSection } from '../../components/home/HeroSection';
import { WhyChooseUs } from '../../components/home/WhyChooseUs';
import { HowItWorks } from '../../components/home/HowItWorks';
import { TestimonialsSection } from '../../components/home/TestimonialsSection';
import { FAQAccordion } from '../../components/home/FAQAccordion';
import { ContactCTA } from '../../components/home/ContactCTA';
import { SectionHeading } from '../../components/common/SectionHeading';
import { ProfileCard } from '../../components/profiles/ProfileCard';
import { LocationCard } from '../../components/locations/LocationCard';
import { CategoryCard } from '../../components/categories/CategoryCard';
import { LocationPillsBar } from '../../components/common/LocationPillsBar';
import { EnquiryModal } from '../../components/forms/EnquiryModal';
import { COMPANIONS_DATA } from '../../data/companions';
import { LOCATIONS_DATA } from '../../data/locations';
import { CATEGORIES_DATA } from '../../data/categories';
import { FAQ_DATA } from '../../data/faq';
import { IMAGE_MANIFEST, TOTAL_MANIFEST_IMAGES } from '../../data/imageManifest';

export const HomePage: React.FC = () => {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('all');

  // Filter companions by location pill if clicked
  const displayedCompanions = selectedLocation === 'all'
    ? COMPANIONS_DATA
    : COMPANIONS_DATA.filter((c) => c.locationSlug === selectedLocation);

  return (
    <div className="space-y-12 sm:space-y-20">
      {/* 1. Cinematic Editorial Hero Section */}
      <HeroSection />

      {/* 2. Instant Location Pills Bar (adaah.life style quick selector) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-3.5 sm:p-4 rounded-3xl border border-gold-300 shadow-luxury">
          <div className="flex items-center justify-between mb-2 px-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-burgundy flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-burgundy" />
              <span>Filter by Bangalore Enclave:</span>
            </span>
            <Link to="/locations" className="text-[11px] font-bold text-gold-700 hover:text-burgundy uppercase tracking-wider">
              All 8 Enclaves →
            </Link>
          </div>
          <LocationPillsBar
            activeLocation={selectedLocation}
            onSelectLocation={(slug) => setSelectedLocation(slug)}
          />
        </div>
      </section>

      {/* 3. Primary Companions Directory Feed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1px] bg-gold-500"></span>
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-burgundy-700">
                Curated Bangalore Roster
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
              {selectedLocation === 'all' ? 'Featured Companions' : `Companions in ${LOCATIONS_DATA.find((l) => l.slug === selectedLocation)?.name}`}
            </h2>
            <p className="text-sm sm:text-base text-black font-normal mt-1.5 max-w-xl">
              Distinguished, articulate companions for high-society galas, fine dining, cultural evenings, and weekend travel in Bengaluru.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919876543210?text=Hello%20Love,%20I%20would%20like%20to%20check%20availability%20for%20today."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Instant WhatsApp</span>
            </a>
            <Link
              to="/companions"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-burgundy hover:bg-burgundy-900 border border-gold-400 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold-300" />
            </Link>
          </div>
        </div>

        {/* Directory Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {displayedCompanions.map((comp) => (
            <ProfileCard key={comp.id} companion={comp} />
          ))}
        </div>
      </section>

      {/* 4. VIP Callout Banner (Concierge Direct) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-gradient-to-r from-burgundy-950 via-burgundy to-burgundy-900 p-8 sm:p-12 border border-gold-500/40 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-gold-300 text-[10px] font-bold uppercase tracking-widest border border-gold-400/40">
                <Sparkles className="w-3 h-3 text-gold-400" />
                <span>The Sovereign Standard</span>
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Discretion. Charisma. Intellectual Resonance.
              </h3>

              <p className="text-sm sm:text-base text-beige/90 leading-relaxed max-w-2xl font-light">
                Whether hosting global technology founders at the Leela Palace or savoring vintage wine on Lavelle Road, our roster provides dignified, magnetic accompaniment across Bengaluru.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/919876543210?text=Hello%20Love%20Concierge,%20I%20would%20like%20to%20consult%20regarding%20an%20upcoming%20engagement."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-md flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>
                <button
                  onClick={() => setIsEnquiryModalOpen(true)}
                  className="px-7 py-3.5 bg-gold-500 hover:bg-gold-600 border border-gold-300 text-black font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-md"
                >
                  Request Consultation
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:flex justify-end">
              <div className="w-40 h-40 rounded-full border-2 border-gold-400/60 flex items-center justify-center p-2">
                <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center text-center p-3 border border-gold-300 shadow-xl overflow-hidden">
                  <img
                    src="/images/Love Lady Heart Silhouette Logo.png"
                    alt="Love"
                    className="w-20 h-20 object-contain object-center"
                  />
                  <span className="text-[9px] uppercase tracking-wider text-black font-bold mt-1">Love</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bangalore Locations (Enclaves) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Bengaluru Enclaves"
          title="Explore by Neighborhood"
          description="From the colonial avenues and UB City rooftops of Central MG Road to the vibrant nightlife corridors of Indiranagar and Koramangala."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LOCATIONS_DATA.slice(0, 8).map((loc) => (
            <LocationCard key={loc.id} location={loc} />
          ))}
        </div>
      </section>

      {/* 6. Companionship Categories */}
      <section className="bg-gradient-to-b from-beige/20 via-ivory to-beige/20 py-20 border-y border-borderCream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Diverse Engagements"
            title="Curated Companionship Categories"
            description="Our directory focuses strictly on lawful, non-sexual adult companionship tailored to your social, culinary, and professional itineraries."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {CATEGORIES_DATA.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Editorial Visual Archive Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1px] bg-gold-500"></span>
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-burgundy-700">
                Visual Portfolio Archive
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
              Complete Editorial Gallery
            </h2>
            <p className="text-sm sm:text-base text-black font-normal mt-1.5 max-w-xl">
              Preview our dynamic collection of all {TOTAL_MANIFEST_IMAGES} local high-fashion portraits, galas, and fine dining lifestyle captures across Bengaluru.
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 bg-burgundy hover:bg-burgundy-900 border border-gold-400 text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md flex-shrink-0"
          >
            <span>View All {TOTAL_MANIFEST_IMAGES} Images in Gallery</span>
            <ArrowRight className="w-4 h-4 text-gold-300" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {IMAGE_MANIFEST.slice(0, 6).map((img) => (
            <Link
              key={img.id}
              to="/gallery"
              className="group block rounded-2xl overflow-hidden aspect-[3/4] bg-neutral-900 border border-gold-300/80 relative shadow-sm hover:border-gold-400 transition-all"
            >
              <img
                src={img.path}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-bold text-white block truncate">
                  {img.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 8. Why Choose Love */}
      <WhyChooseUs />

      {/* 8. How It Works */}
      <HowItWorks />

      {/* 9. Sample Testimonials UI Showcase */}
      <TestimonialsSection />

      {/* 10. Frequently Asked Questions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <SectionHeading
          subtitle="Clarity & Discretion"
          title="Frequently Asked Questions"
          description="Transparent guidance regarding safety protocols, 18+ adult compliance, booking procedures, and our non-sexual platonic code of conduct."
        />
        <FAQAccordion items={FAQ_DATA} />
      </section>

      {/* 11. Contact CTA */}
      <ContactCTA onOpenEnquiry={() => setIsEnquiryModalOpen(true)} />

      {/* Global Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
      />
    </div>
  );
};
