import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LOCATIONS_DATA } from '../../data/locations';
import { COMPANIONS_DATA } from '../../data/companions';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { ProfileCard } from '../../components/profiles/ProfileCard';
import { EnquiryModal } from '../../components/forms/EnquiryModal';
import { MapPin, CheckCircle2, ArrowRight, PhoneCall, Sparkles } from 'lucide-react';

export const LocationDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const location = LOCATIONS_DATA.find((l) => l.slug === slug);

  if (!location) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="font-serif text-3xl font-bold text-black mb-4">Location Not Found</h2>
        <p className="text-black text-sm mb-6 font-normal">The requested Bangalore location could not be located.</p>
        <Link
          to="/locations"
          className="px-6 py-3 bg-burgundy text-white rounded-full text-xs font-bold uppercase tracking-widest"
        >
          View All Bangalore Locations
        </Link>
      </div>
    );
  }

  const companionsInLocation = COMPANIONS_DATA.filter((c) => c.locationSlug === location.slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: 'Locations', path: '/locations' },
          { label: location.name },
        ]}
      />

      {/* Hero Header */}
      <div className="mt-4 mb-12 bg-white rounded-3xl p-6 sm:p-10 border border-gold-300 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-xs font-bold text-burgundy uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-burgundy" />
            <span>Bengaluru Enclave Guide</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Companions in {location.name}
          </h1>

          <p className="text-sm sm:text-base font-semibold text-burgundy italic">
            "{location.tagline}"
          </p>

          <p className="text-sm sm:text-base text-black leading-relaxed font-normal">
            {location.description}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3.5 bg-burgundy hover:bg-burgundy-900 border border-gold-400 text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-glow-burgundy flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-gold-400" />
              <span>Enquire in {location.name}</span>
            </button>

            <span className="text-xs text-black font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>Atmosphere: {location.vibe}</span>
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 relative rounded-3xl overflow-hidden aspect-[16/11] bg-neutral-900 border border-borderCream shadow-md flex items-center justify-center">
          <img
            src={location.image}
            alt={location.name}
            className="w-full h-full object-contain object-center"
          />
        </div>
      </div>

      {/* Recommended Spots in this Enclave */}
      <div className="bg-ivory-100 rounded-3xl p-6 sm:p-8 border border-borderCream mb-16">
        <h3 className="font-serif text-2xl font-bold text-black mb-3">
          Recommended Rendezvous Venues in {location.name}
        </h3>
        <p className="text-xs sm:text-sm text-black mb-6 font-normal">
          We encourage public, refined environments for first introductions:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {location.popularVenues.map((venue, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white border border-borderCream flex items-center gap-3 text-xs sm:text-sm font-semibold text-black shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4 text-burgundy flex-shrink-0" />
              <span className="text-black">{venue}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Companions in this Location */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-black">
              Available Profiles in {location.name}
            </h2>
            <p className="text-xs sm:text-sm text-black mt-1 font-medium">
              Showing {companionsInLocation.length} profile(s) serving {location.name}
            </p>
          </div>
          <Link
            to="/companions"
            className="text-xs font-bold uppercase tracking-wider text-burgundy hover:text-burgundy-900 flex items-center gap-1"
          >
            <span>View Full Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {companionsInLocation.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {companionsInLocation.map((comp) => (
              <ProfileCard key={comp.id} companion={comp} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-3xl border border-borderCream p-8">
            <p className="text-sm text-black font-medium">No demo companions currently listed specifically in {location.name}.</p>
          </div>
        )}
      </div>

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultLocation={location.slug}
      />
    </div>
  );
};
