import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Star, 
  CheckCircle2, 
  Clock, 
  Globe, 
  BookOpen, 
  Sparkles, 
  PhoneCall, 
  ArrowLeft,
  AlertCircle,
  MessageCircle,
  Phone
} from 'lucide-react';
import { COMPANIONS_DATA } from '../../data/companions';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { ProfileCard } from '../../components/profiles/ProfileCard';
import { EnquiryModal } from '../../components/forms/EnquiryModal';

export const ProfileDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const companion = COMPANIONS_DATA.find((c) => c.id === id);

  if (!companion) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="font-serif text-3xl font-bold text-black mb-4">Profile Unavailable</h2>
        <p className="text-black text-sm mb-6 font-normal">The companion profile you requested is not listed or has been archived.</p>
        <Link
          to="/companions"
          className="px-6 py-3 bg-burgundy text-white rounded-full text-xs font-bold uppercase tracking-widest"
        >
          Return to Directory
        </Link>
      </div>
    );
  }

  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(companion.whatsappMessage)}`;

  // Active gallery images
  const galleryImages = companion.gallery && companion.gallery.length > 0
    ? companion.gallery
    : [companion.image];

  // Related companions in the same location or category
  const relatedCompanions = COMPANIONS_DATA.filter(
    (c) => c.id !== companion.id && (c.locationSlug === companion.locationSlug || c.categorySlugs.some((cat) => companion.categorySlugs.includes(cat)))
  ).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: 'Directory', path: '/companions' },
          { label: companion.name },
        ]}
      />

      <div className="mt-4 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-burgundy hover:text-burgundy-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-gold-500" />
          <span>Return to Companions Gallery</span>
        </button>
      </div>

      {/* Main Magazine Profile Spread */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Large Editorial Gallery & Status (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Portrait (No Cropping, Full Model Image Visible) */}
          <div className="relative rounded-3xl overflow-hidden bg-neutral-900 border border-gold-400 shadow-2xl aspect-[4/5] flex items-center justify-center">
            <img
              src={galleryImages[activeImageIndex] || companion.image}
              alt={companion.name}
              className="w-full h-full object-contain object-center transition-all duration-300"
            />

            {/* Top Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start pointer-events-none z-10">
              {companion.isAvailableToday && (
                <span className="px-3 py-1 rounded-full bg-emerald-950/90 backdrop-blur-md border border-emerald-400/80 text-emerald-300 font-bold uppercase tracking-wider text-[10px] shadow-md flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Available Today</span>
                </span>
              )}
              <span className="px-3 py-1 rounded-full bg-burgundy/95 backdrop-blur-md border border-gold-400/80 text-gold-300 font-bold uppercase tracking-wider text-[10px] shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>Fictional Demo Entry</span>
              </span>
            </div>

            <div className="absolute top-4 right-4 px-3.5 py-1.5 bg-white backdrop-blur-md rounded-full text-xs font-bold text-black flex items-center gap-1.5 shadow-md border border-gold-300 pointer-events-none z-10">
              <Star className="w-3.5 h-3.5 text-gold-500 fill-gold-500" />
              <span>{companion.rating.toFixed(2)}</span>
              <span className="text-black font-semibold text-[10px]">({companion.reviewCount} reviews)</span>
            </div>
          </div>

          {/* Gallery Thumbnails (Uncropped) */}
          {galleryImages.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`rounded-2xl overflow-hidden aspect-square border-2 transition-all bg-neutral-900 flex items-center justify-center p-1 ${
                    activeImageIndex === idx
                      ? 'border-burgundy ring-2 ring-gold-400 shadow-md scale-102'
                      : 'border-borderCream opacity-80 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${companion.name} thumbnail ${idx + 1}`}
                    className="w-full h-full object-contain object-center"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Quick Contact Box on Left */}
          <div className="p-4 rounded-3xl bg-white border border-gold-300 shadow-md space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-burgundy block text-center">
              Direct Concierge Booking
            </span>
            <div className="flex items-center gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="tel:+919876543210"
                className="p-3 rounded-full bg-burgundy hover:bg-burgundy-900 border border-gold-400 text-white flex items-center justify-center shadow-sm"
                title="Call Concierge"
              >
                <Phone className="w-4 h-4 text-gold-300" />
              </a>
            </div>
          </div>

          {/* Verification Transparency Box */}
          <div className="bg-ivory-100 rounded-3xl p-5 border border-gold-300 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-burgundy uppercase tracking-wider">
              <img
                src="/images/nikita-spa-logo.png"
                alt="Love"
                className="w-5 h-5 object-contain object-center"
              />
              <span>Directory Status: {companion.verificationStatus}</span>
            </div>
            <p className="text-xs text-black leading-relaxed font-normal">
              This profile is a clearly labeled design demonstration. Love will only display real verified badges once full in-person government ID inspection is completed for listed consenting adults.
            </p>
          </div>
        </div>

        {/* Right Column: Editorial Biography, Details, Rates, and Booking (7 Cols) */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-black bg-ivory-200 px-3.5 py-1 rounded-full border border-borderCream uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-burgundy" />
                <span>{companion.location}, Bengaluru</span>
              </span>
              <span className="text-xs font-bold text-black bg-ivory-200 px-3.5 py-1 rounded-full border border-borderCream uppercase tracking-wider">
                {companion.age} Yrs (Adult 18+)
              </span>
              <span className="text-xs font-bold text-black bg-ivory-200 px-3.5 py-1 rounded-full border border-borderCream">
                {companion.experienceYears} Yrs Hostess Experience
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
              {companion.name}
            </h1>
            <p className="text-base sm:text-lg text-burgundy font-medium italic mt-1.5">
              "{companion.tagline}"
            </p>
          </div>

          {/* Comprehensive Rate Card Table */}
          <div className="bg-white rounded-3xl p-6 border border-gold-300 shadow-luxury space-y-4">
            <div className="flex items-center justify-between border-b border-borderCream pb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-burgundy flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                <span>Honorarium Schedule</span>
              </span>
              <span className="text-xs text-black font-semibold">Non-sexual platonic companionship</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 rounded-2xl bg-ivory-100 border border-borderCream">
                <span className="text-[10px] uppercase font-bold text-black block mb-1">2 Hours</span>
                <span className="font-serif text-lg font-bold text-black">{companion.rateCard.twoHours}</span>
              </div>
              <div className="p-3 rounded-2xl bg-ivory-100 border border-borderCream">
                <span className="text-[10px] uppercase font-bold text-black block mb-1">4 Hours</span>
                <span className="font-serif text-lg font-bold text-black">{companion.rateCard.fourHours}</span>
              </div>
              <div className="p-3 rounded-2xl bg-burgundy-50 border border-burgundy-200">
                <span className="text-[10px] uppercase font-bold text-burgundy block mb-1">Evening Dinner</span>
                <span className="font-serif text-lg font-bold text-burgundy">{companion.rateCard.eveningDinner}</span>
              </div>
              <div className="p-3 rounded-2xl bg-ivory-100 border border-borderCream">
                <span className="text-[10px] uppercase font-bold text-black block mb-1">Weekend Day</span>
                <span className="font-serif text-lg font-bold text-black">{companion.rateCard.weekendRetreat}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Book via WhatsApp</span>
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex-1 py-3.5 px-6 rounded-full bg-burgundy hover:bg-burgundy-900 border border-gold-400 text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-gold-300" />
                <span>Submit Confidential Form</span>
              </button>
            </div>
          </div>

          {/* Biography */}
          <div className="space-y-3">
            <h3 className="font-serif text-2xl font-bold text-black flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-burgundy" />
              <span>Personal Biography & Presence</span>
            </h3>
            <p className="text-sm sm:text-base text-black leading-relaxed whitespace-pre-line font-normal">
              {companion.bio}
            </p>
          </div>

          {/* Attributes Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-borderCream shadow-sm space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-burgundy flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-burgundy" />
                <span>Languages Spoken</span>
              </span>
              <p className="text-sm font-bold text-black">
                {companion.languages.join(' • ')}
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-borderCream shadow-sm space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-burgundy flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-burgundy" />
                <span>Calendar Availability</span>
              </span>
              <p className="text-sm font-bold text-black">
                {companion.availability}
              </p>
            </div>

            {companion.education && (
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-borderCream shadow-sm space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-burgundy">Academic Background</span>
                <p className="text-sm font-bold text-black">
                  {companion.education}
                </p>
              </div>
            )}

            {companion.height && (
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-borderCream shadow-sm space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-burgundy">Height Metric</span>
                <p className="text-sm font-bold text-black">
                  {companion.height}
                </p>
              </div>
            )}
          </div>

          {/* Engagement Formats */}
          <div className="space-y-3">
            <h3 className="font-serif text-2xl font-bold text-black flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-burgundy" />
              <span>Engagement Formats</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {companion.servicesOffered.map((service, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white border border-borderCream shadow-sm text-xs font-semibold text-black"
                >
                  <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interests & Passions */}
          <div className="space-y-3">
            <h3 className="font-serif text-2xl font-bold text-black">
              Aesthetic Passions & Conversation Topics
            </h3>
            <div className="flex flex-wrap gap-2">
              {companion.interests.map((interest, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full bg-white border border-borderCream text-xs text-black font-semibold shadow-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Etiquette & Consent Boundaries Box */}
          <div className="p-6 rounded-3xl bg-burgundy-50 border border-burgundy-200 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-burgundy-800">
              <AlertCircle className="w-4 h-4 text-burgundy" />
              <span>Etiquette Standards & Platform Boundaries</span>
            </div>
            <ul className="space-y-2 text-xs text-black leading-relaxed font-normal">
              {companion.etiquetteNotes.map((note, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-burgundy font-bold">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Similar Profiles In Bengaluru */}
      {relatedCompanions.length > 0 && (
        <div className="mt-20 pt-12 border-t border-borderCream">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-black">
                Similar Editorial Profiles in Bangalore
              </h3>
              <p className="text-xs sm:text-sm text-black mt-1 font-medium">
                Discover more companions in {companion.location} and related categories.
              </p>
            </div>
            <Link
              to="/companions"
              className="text-xs font-bold uppercase tracking-wider text-burgundy hover:text-burgundy-900"
            >
              Browse All Profiles →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {relatedCompanions.map((rel) => (
              <ProfileCard key={rel.id} companion={rel} />
            ))}
          </div>
        </div>
      )}

      {/* Modal instance */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        companionId={companion.id}
        companionName={companion.name}
        defaultLocation={companion.locationSlug}
      />
    </div>
  );
};
