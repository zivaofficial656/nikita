import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, ArrowRight, Sparkles } from 'lucide-react';
import { LocationItem } from '../../types';

interface LocationCardProps {
  location: LocationItem;
  className?: string;
}

export const LocationCard: React.FC<LocationCardProps> = ({ location, className = '' }) => {
  return (
    <Link
      to={`/locations/${location.slug}`}
      className={`group relative rounded-3xl overflow-hidden border border-borderCream hover:border-gold-400 bg-white shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col ${className}`}
    >
      {/* Complete Image Container (No Cropping) */}
      <div className="relative aspect-[16/11] overflow-hidden bg-neutral-900 flex items-center justify-center">
        <img
          src={location.image}
          alt={`Bangalore companionship in ${location.name}`}
          loading="lazy"
          className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-102"
        />

        <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-burgundy/95 backdrop-blur-md border border-gold-400/60 text-gold-300 text-xs font-semibold flex items-center gap-1.5 shadow-md">
          <Users className="w-3.5 h-3.5 text-gold-400" />
          <span>{location.companionCount} Profiles</span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between bg-white">
        <div>
          <div className="flex items-center gap-1.5 text-[10px] text-burgundy uppercase tracking-widest font-bold mb-1">
            <MapPin className="w-3 h-3 text-burgundy" />
            <span>Bangalore Enclave</span>
          </div>

          <h3 className="font-serif text-2xl font-bold text-black group-hover:text-burgundy transition-colors leading-tight mb-1">
            {location.name}
          </h3>

          <span className="text-xs font-bold text-burgundy block mb-2 uppercase tracking-wider">
            {location.tagline}
          </span>

          <p className="text-xs sm:text-sm text-black line-clamp-2 leading-relaxed font-normal">
            {location.description}
          </p>
        </div>

        <div className="mt-4 pt-3.5 border-t border-borderCream flex items-center justify-between text-xs font-medium text-black group-hover:text-burgundy">
          <span className="text-[11px] text-black font-semibold italic flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-gold-600" />
            <span>{location.vibe}</span>
          </span>
          <span className="inline-flex items-center gap-1 font-bold text-black group-hover:text-burgundy">
            <span>Explore Enclave</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold-600 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
};
