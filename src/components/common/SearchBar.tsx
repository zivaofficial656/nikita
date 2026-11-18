import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Tag, ArrowRight } from 'lucide-react';
import { LOCATIONS_DATA } from '../../data/locations';
import { CATEGORIES_DATA } from '../../data/categories';

interface SearchBarProps {
  initialLocation?: string;
  initialCategory?: string;
  initialQuery?: string;
  variant?: 'hero' | 'compact';
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  initialLocation = 'all',
  initialCategory = 'all',
  initialQuery = '',
  variant = 'hero',
  className = '',
}) => {
  const navigate = useNavigate();
  const [location, setLocation] = useState(initialLocation);
  const [category, setCategory] = useState(initialCategory);
  const [query, setQuery] = useState(initialQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location && location !== 'all') params.append('location', location);
    if (category && category !== 'all') params.append('category', category);
    if (query.trim()) params.append('q', query.trim());

    navigate(`/companions?${params.toString()}`);
  };

  if (variant === 'compact') {
    return (
      <form
        onSubmit={handleSubmit}
        className={`bg-white p-3 rounded-2xl border border-gold-300/80 shadow-md flex flex-col md:flex-row gap-3 ${className}`}
      >
        <div className="flex-1 relative flex items-center">
          <Search className="w-4 h-4 text-[#555555] absolute left-3.5 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by keyword, language, or interest..."
            className="w-full pl-10 pr-3 py-2.5 bg-ivory-100 rounded-xl text-xs sm:text-sm text-black placeholder:text-[#555555] focus:outline-none focus:ring-1 focus:ring-burgundy"
          />
        </div>
        <div className="w-full md:w-48 relative flex items-center">
          <MapPin className="w-4 h-4 text-burgundy absolute left-3.5 pointer-events-none" />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full pl-10 pr-8 py-2.5 bg-ivory-100 rounded-xl text-xs sm:text-sm text-black appearance-none focus:outline-none focus:ring-1 focus:ring-burgundy cursor-pointer font-medium"
          >
            <option value="all">All Enclaves</option>
            {LOCATIONS_DATA.map((loc) => (
              <option key={loc.id} value={loc.slug}>
                {loc.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full md:w-48 relative flex items-center">
          <Tag className="w-4 h-4 text-burgundy absolute left-3.5 pointer-events-none" />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full pl-10 pr-8 py-2.5 bg-ivory-100 rounded-xl text-xs sm:text-sm text-black appearance-none focus:outline-none focus:ring-1 focus:ring-burgundy cursor-pointer font-medium"
          >
            <option value="all">All Categories</option>
            {CATEGORIES_DATA.map((cat) => (
              <option key={cat.id} value={cat.slug}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="px-6 py-2.5 bg-burgundy hover:bg-burgundy-900 border border-gold-400 text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
        >
          <Search className="w-4 h-4" />
          <span>Filter</span>
        </button>
      </form>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-3xl border border-gold-300 shadow-luxury max-w-4xl w-full mx-auto ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
        {/* Keyword Search */}
        <div className="md:col-span-4 relative flex items-center">
          <Search className="w-5 h-5 text-burgundy absolute left-4 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Companion name, interest, language..."
            className="w-full pl-12 pr-4 py-3.5 bg-ivory-50 border border-borderCream rounded-2xl text-xs sm:text-sm text-black placeholder:text-[#555555] focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-all"
          />
        </div>

        {/* Location Dropdown */}
        <div className="md:col-span-3 relative flex items-center">
          <MapPin className="w-5 h-5 text-burgundy absolute left-4 pointer-events-none" />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full pl-12 pr-8 py-3.5 bg-ivory-50 border border-borderCream rounded-2xl text-xs sm:text-sm text-black appearance-none focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-all cursor-pointer truncate font-medium"
          >
            <option value="all">Bangalore Locations</option>
            {LOCATIONS_DATA.map((loc) => (
              <option key={loc.id} value={loc.slug}>
                {loc.name}
              </option>
            ))}
          </select>
        </div>

        {/* Category Dropdown */}
        <div className="md:col-span-3 relative flex items-center">
          <Tag className="w-5 h-5 text-burgundy absolute left-4 pointer-events-none" />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full pl-12 pr-8 py-3.5 bg-ivory-50 border border-borderCream rounded-2xl text-xs sm:text-sm text-black appearance-none focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-all cursor-pointer truncate font-medium"
          >
            <option value="all">Companionship Category</option>
            {CATEGORIES_DATA.map((cat) => (
              <option key={cat.id} value={cat.slug}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Search Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full py-3.5 px-5 bg-burgundy hover:bg-burgundy-900 border border-gold-400 text-white rounded-2xl text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all shadow-md hover:shadow-glow-burgundy flex items-center justify-center gap-2 group"
          >
            <span>Search</span>
            <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </form>
  );
};
