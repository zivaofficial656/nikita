import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, ArrowUpRight, MessageCircle, Phone } from 'lucide-react';
import { Companion } from '../../types';

interface ProfileCardProps {
  companion: Companion;
  className?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ companion, className = '' }) => {
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(companion.whatsappMessage)}`;

  return (
    <article
      className={`group relative bg-white rounded-3xl overflow-hidden border border-borderCream hover:border-gold-400 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col ${className}`}
    >
      {/* Complete Image Container (No Cropping, Neutral Background) */}
      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900 flex items-center justify-center">
        <img
          src={companion.image}
          alt={`Editorial portrait of ${companion.name}`}
          loading="lazy"
          className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-102"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
          <div className="flex flex-col gap-1 items-start">
            {companion.isAvailableToday ? (
              <span className="px-2.5 py-1 rounded-full bg-emerald-950/95 backdrop-blur-md border border-emerald-400 text-emerald-300 font-bold tracking-wider uppercase text-[9px] shadow-md flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Available Today</span>
              </span>
            ) : (
              <span className="px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase text-[9px]">
                Pre-Booking
              </span>
            )}
            <span className="px-2 py-0.5 rounded-full bg-burgundy/95 backdrop-blur-md border border-gold-400/70 text-gold-300 font-bold tracking-wider uppercase text-[9px] flex items-center gap-1">
              <img
                src="/images/Love Lady Heart Silhouette Logo.png"
                alt="Love"
                className="w-3 h-3 object-contain object-center"
              />
              <span>Fictional Demo</span>
            </span>
          </div>

          <span className="px-2.5 py-1 rounded-full bg-white backdrop-blur-md border border-gold-300 text-xs font-bold text-black flex items-center gap-1 shadow-md">
            <Star className="w-3.5 h-3.5 text-gold-500 fill-gold-500" />
            <span>{companion.rating.toFixed(2)}</span>
            <span className="text-[10px] text-black font-semibold">({companion.reviewCount})</span>
          </span>
        </div>
      </div>

      {/* Card Content & Details (100% Black Text for Maximum Readability) */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-white">
        <div>
          {/* Location & Age Bar */}
          <div className="flex items-center justify-between gap-2 mb-1.5 text-xs text-black font-semibold">
            <div className="flex items-center gap-1 text-black font-bold">
              <MapPin className="w-3.5 h-3.5 text-burgundy flex-shrink-0" />
              <span>{companion.location}, Bangalore</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-ivory-200 border border-borderCream text-black font-bold text-[10px]">
              {companion.age} Yrs (18+)
            </span>
          </div>

          {/* Card Title - Pure Black Heading */}
          <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-black group-hover:text-burgundy transition-colors leading-tight mb-1">
            <Link to={`/companions/${companion.id}`}>
              {companion.name}
            </Link>
          </h3>

          <p className="text-xs text-black line-clamp-1 italic mb-3 font-medium">
            "{companion.tagline}"
          </p>

          {/* Quick Rate Matrix */}
          <div className="grid grid-cols-2 gap-2 mb-3 p-2.5 rounded-2xl bg-ivory-100 border border-borderCream text-center">
            <div>
              <span className="text-[9px] uppercase font-bold tracking-wider text-black block">Hourly Guide</span>
              <span className="text-xs font-bold text-burgundy">{companion.hourlyRate}</span>
            </div>
            <div className="border-l border-borderCream">
              <span className="text-[9px] uppercase font-bold tracking-wider text-black block">Dinner Session</span>
              <span className="text-xs font-bold text-black">{companion.rateCard.eveningDinner}</span>
            </div>
          </div>

          {/* Categories Pill list */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {companion.categories.slice(0, 2).map((cat, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded-full bg-ivory-200 border border-borderCream text-[10px] text-black font-bold"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Short Introduction */}
          <p className="text-xs text-black leading-relaxed line-clamp-2 mb-3.5 font-normal">
            {companion.bio}
          </p>
        </div>

        {/* Action Buttons: Direct WhatsApp + View Profile */}
        <div className="pt-3 border-t border-borderCream space-y-2">
          <div className="flex items-center gap-2">
            {/* Direct WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-[11px] font-bold uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-1.5"
              title={`WhatsApp inquiry for ${companion.name}`}
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp</span>
            </a>

            {/* Direct Call Concierge */}
            <a
              href="tel:+919876543210"
              className="p-2.5 rounded-full border border-gold-300 bg-ivory-100 hover:bg-beige text-black transition-colors flex items-center justify-center"
              title="Call Concierge Desk"
            >
              <Phone className="w-3.5 h-3.5 text-burgundy" />
            </a>

            {/* View Full Profile */}
            <Link
              to={`/companions/${companion.id}`}
              className="py-2.5 px-4 rounded-full bg-burgundy hover:bg-burgundy-900 border border-gold-400 text-white text-[11px] font-bold uppercase tracking-wider transition-all shadow-sm flex items-center justify-center gap-1"
            >
              <span>Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold-300" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
