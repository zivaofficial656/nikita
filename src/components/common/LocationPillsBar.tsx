import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Sparkles } from 'lucide-react';
import { LOCATIONS_DATA } from '../../data/locations';

interface LocationPillsBarProps {
  activeLocation?: string;
  onSelectLocation?: (slug: string) => void;
  className?: string;
}

export const LocationPillsBar: React.FC<LocationPillsBarProps> = ({
  activeLocation = 'all',
  onSelectLocation,
  className = '',
}) => {
  const navigate = useNavigate();

  const handleSelect = (slug: string) => {
    if (onSelectLocation) {
      onSelectLocation(slug);
    } else {
      if (slug === 'all') {
        navigate('/companions');
      } else {
        navigate(`/companions?location=${slug}`);
      }
    }
  };

  return (
    <div className={`w-full overflow-x-auto no-scrollbar py-2.5 ${className}`}>
      <div className="flex items-center gap-2 min-w-max px-1">
        <button
          onClick={() => handleSelect('all')}
          className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm ${
            activeLocation === 'all'
              ? 'bg-burgundy text-white border border-gold-400 shadow-glow-burgundy'
              : 'bg-white border border-borderCream text-black hover:border-gold-400 hover:text-burgundy'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span>All Enclaves</span>
        </button>

        {LOCATIONS_DATA.map((loc) => {
          const isActive = activeLocation === loc.slug;
          return (
            <button
              key={loc.id}
              onClick={() => handleSelect(loc.slug)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm ${
                isActive
                  ? 'bg-burgundy text-white border border-gold-400 shadow-glow-burgundy'
                  : 'bg-white border border-borderCream text-black hover:border-gold-400 hover:text-burgundy'
              }`}
            >
              <MapPin className={`w-3.5 h-3.5 ${isActive ? 'text-gold-400' : 'text-burgundy'}`} />
              <span>{loc.name}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-burgundy-900 text-gold-300' : 'bg-beige/60 text-black font-semibold'}`}>
                {loc.companionCount}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
