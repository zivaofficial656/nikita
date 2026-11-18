import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, MapPin, Tag, SlidersHorizontal, RefreshCcw } from 'lucide-react';
import { COMPANIONS_DATA } from '../../data/companions';
import { LOCATIONS_DATA } from '../../data/locations';
import { CATEGORIES_DATA } from '../../data/categories';
import { ProfileCard } from '../../components/profiles/ProfileCard';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Companion } from '../../types';

export const CompanionsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const locationParam = searchParams.get('location') || 'all';
  const categoryParam = searchParams.get('category') || 'all';
  const queryParam = searchParams.get('q') || '';

  const [selectedLocation, setSelectedLocation] = useState(locationParam);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [searchQuery, setSearchQuery] = useState(queryParam);
  const [filteredCompanions, setFilteredCompanions] = useState<Companion[]>(COMPANIONS_DATA);

  // Sync state when URL params change
  useEffect(() => {
    setSelectedLocation(locationParam);
    setSelectedCategory(categoryParam);
    setSearchQuery(queryParam);
  }, [locationParam, categoryParam, queryParam]);

  // Apply filters
  useEffect(() => {
    let list = [...COMPANIONS_DATA];

    if (selectedLocation && selectedLocation !== 'all') {
      list = list.filter((c) => c.locationSlug === selectedLocation);
    }

    if (selectedCategory && selectedCategory !== 'all') {
      list = list.filter((c) => c.categorySlugs.includes(selectedCategory));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.location.toLowerCase().includes(q) ||
          c.bio.toLowerCase().includes(q) ||
          c.tagline.toLowerCase().includes(q) ||
          c.interests.some((i) => i.toLowerCase().includes(q)) ||
          c.languages.some((l) => l.toLowerCase().includes(q))
      );
    }

    setFilteredCompanions(list);
  }, [selectedLocation, selectedCategory, searchQuery]);

  const handleApplyFilter = (e: React.FormEvent) => {
    e.preventDefault();
    const newParams = new URLSearchParams();
    if (selectedLocation !== 'all') newParams.set('location', selectedLocation);
    if (selectedCategory !== 'all') newParams.set('category', selectedCategory);
    if (searchQuery.trim()) newParams.set('q', searchQuery.trim());
    setSearchParams(newParams);
  };

  const handleReset = () => {
    setSelectedLocation('all');
    setSelectedCategory('all');
    setSearchQuery('');
    setSearchParams(new URLSearchParams());
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumb items={[{ label: 'Exclusive Companions Directory' }]} />

      <div className="mt-4 mb-10">
        <SectionHeading
          subtitle="VIP Adult Portfolio (18+)"
          title="Bangalore Companions Directory"
          description="Browse our glamorous collection of articulate, cultured adult companions available for high-society galas, chef degustations, diplomatic gatherings, and weekend plantation retreats in Bengaluru. Strictly platonic and lawful."
          align="left"
        />
      </div>

      {/* Filter and Search Bar Container */}
      <div className="bg-white p-5 sm:p-6 rounded-3xl border border-gold-300 shadow-luxury mb-10">
        <form onSubmit={handleApplyFilter} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Query input */}
          <div className="md:col-span-4 relative flex items-center">
            <Search className="w-4 h-4 text-burgundy absolute left-3.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search companion, language, interest, cuisine..."
              className="w-full pl-10 pr-3 py-3 bg-ivory-50 border border-borderCream rounded-2xl text-xs sm:text-sm text-black placeholder:text-[#555555] focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
            />
          </div>

          {/* Location Dropdown */}
          <div className="md:col-span-3 relative flex items-center">
            <MapPin className="w-4 h-4 text-burgundy absolute left-3.5 pointer-events-none" />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full pl-10 pr-8 py-3 bg-ivory-50 border border-borderCream rounded-2xl text-xs sm:text-sm text-black appearance-none focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy cursor-pointer truncate font-medium"
            >
              <option value="all">All Bangalore Enclaves</option>
              {LOCATIONS_DATA.map((loc) => (
                <option key={loc.id} value={loc.slug}>
                  {loc.name}
                </option>
              ))}
            </select>
          </div>

          {/* Category Dropdown */}
          <div className="md:col-span-3 relative flex items-center">
            <Tag className="w-4 h-4 text-burgundy absolute left-3.5 pointer-events-none" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-10 pr-8 py-3 bg-ivory-50 border border-borderCream rounded-2xl text-xs sm:text-sm text-black appearance-none focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy cursor-pointer truncate font-medium"
            >
              <option value="all">All Engagement Categories</option>
              {CATEGORIES_DATA.map((cat) => (
                <option key={cat.id} value={cat.slug}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Filter Action Buttons */}
          <div className="md:col-span-2 flex items-center gap-2">
            <button
              type="submit"
              className="flex-1 py-3 px-4 bg-burgundy hover:bg-burgundy-900 border border-gold-400 text-white rounded-2xl text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-1.5"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-gold-400" />
              <span>Filter</span>
            </button>
            <button
              type="button"
              onClick={handleReset}
              title="Reset Filters"
              className="p-3 border border-borderCream hover:bg-ivory-100 text-black rounded-2xl transition-colors"
            >
              <RefreshCcw className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>

      {/* Results Counter and Tags */}
      <div className="flex items-center justify-between mb-8 text-xs sm:text-sm text-black font-medium">
        <div className="flex flex-wrap items-center gap-2">
          <span>Showing <strong className="text-burgundy font-bold">{filteredCompanions.length}</strong> glamorous profiles</span>
          {selectedLocation !== 'all' && (
            <span className="px-3 py-1 rounded-full bg-burgundy-50 text-burgundy-800 border border-burgundy-200 text-xs font-semibold">
              Enclave: {LOCATIONS_DATA.find((l) => l.slug === selectedLocation)?.name}
            </span>
          )}
          {selectedCategory !== 'all' && (
            <span className="px-3 py-1 rounded-full bg-burgundy-50 text-burgundy-800 border border-burgundy-200 text-xs font-semibold">
              Category: {CATEGORIES_DATA.find((c) => c.slug === selectedCategory)?.name}
            </span>
          )}
        </div>
        <span className="text-xs text-burgundy-800 font-bold uppercase tracking-widest hidden sm:inline">
          Adult-Only Directory (18+)
        </span>
      </div>

      {/* Large Editorial Portrait Grid */}
      {filteredCompanions.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredCompanions.map((companion) => (
            <ProfileCard key={companion.id} companion={companion} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-gold-300 shadow-luxury p-8">
          <div className="w-16 h-16 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy flex items-center justify-center mx-auto mb-4">
            <Search className="w-7 h-7" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-black mb-2">No Profiles Match Criteria</h3>
          <p className="text-sm text-black max-w-md mx-auto mb-6 font-normal">
            We couldn't locate any companions matching your exact combination. Try clearing filters to view our full collection.
          </p>
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-burgundy hover:bg-burgundy-900 border border-gold-400 text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
};
