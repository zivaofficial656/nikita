import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionHeading } from '../../components/common/SectionHeading';
import { IMAGE_MANIFEST, ManifestImage, TOTAL_MANIFEST_IMAGES } from '../../data/imageManifest';
import {
  Search,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Eye,
  Layers,
  Image as ImageIcon
} from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  // Filter images
  const filteredImages = useMemo(() => {
    return IMAGE_MANIFEST.filter((img) => {
      const matchesCategory = selectedCategory === 'all' || img.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        img.title.toLowerCase().includes(q) ||
        img.filename.toLowerCase().includes(q) ||
        img.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Categories count
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: IMAGE_MANIFEST.length };
    IMAGE_MANIFEST.forEach((img) => {
      counts[img.category] = (counts[img.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Lightbox navigation
  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setActiveLightboxIndex(null);
    document.body.style.overflow = 'auto';
  }, []);

  const goToNext = useCallback(() => {
    if (activeLightboxIndex !== null && filteredImages.length > 0) {
      setActiveLightboxIndex((prev) => ((prev! + 1) % filteredImages.length));
    }
  }, [activeLightboxIndex, filteredImages.length]);

  const goToPrev = useCallback(() => {
    if (activeLightboxIndex !== null && filteredImages.length > 0) {
      setActiveLightboxIndex((prev) => ((prev! - 1 + filteredImages.length) % filteredImages.length));
    }
  }, [activeLightboxIndex, filteredImages.length]);

  // Keyboard accessibility for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, closeLightbox, goToNext, goToPrev]);

  const activeImage: ManifestImage | null =
    activeLightboxIndex !== null ? filteredImages[activeLightboxIndex] : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumb items={[{ label: 'Editorial Archive Gallery' }]} />

      <div className="mt-4 mb-10">
        <SectionHeading
          subtitle="Complete Visual Archive"
          title="The Love High-Society Gallery"
          description={`An exhaustive, dynamic showcase of all ${TOTAL_MANIFEST_IMAGES} local editorial portraits, lifestyle moments, and luxury styling assets in Bengaluru. Every single image is rendered in full without cropping.`}
          align="left"
        />
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-5 sm:p-6 rounded-3xl border border-gold-300 shadow-luxury mb-8 space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-burgundy absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by portrait number, title, or filename (e.g. s63, s21, portrait)..."
              className="w-full pl-11 pr-4 py-3 bg-ivory-50 border border-borderCream rounded-2xl text-xs sm:text-sm text-black placeholder:text-[#555555] focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-black font-semibold hover:text-burgundy"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Counter */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-ivory-100 rounded-2xl border border-borderCream text-xs text-black font-bold flex-shrink-0">
            <Layers className="w-4 h-4 text-burgundy" />
            <span>
              Showing <strong className="text-burgundy">{filteredImages.length}</strong> of {TOTAL_MANIFEST_IMAGES} assets
            </span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 flex-shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-burgundy text-white border border-gold-400 shadow-glow-burgundy'
                : 'bg-white border border-borderCream text-black hover:border-gold-400 hover:text-burgundy'
            }`}
          >
            <span>All Assets</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${selectedCategory === 'all' ? 'bg-burgundy-900 text-gold-300' : 'bg-ivory-200 text-black'}`}>
              {categoryCounts.all}
            </span>
          </button>

          {(['portraits', 'editorial', 'lifestyle', 'branding'] as const).map((cat) => {
            const count = categoryCounts[cat] || 0;
            const isActive = selectedCategory === cat;
            const labels: Record<string, string> = {
              portraits: 'Portraits',
              editorial: 'Editorial',
              lifestyle: 'Lifestyle',
              branding: 'Branding & Logo'
            };
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 flex-shrink-0 ${
                  isActive
                    ? 'bg-burgundy text-white border border-gold-400 shadow-glow-burgundy'
                    : 'bg-white border border-borderCream text-black hover:border-gold-400 hover:text-burgundy'
                }`}
              >
                <span>{labels[cat]}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-burgundy-900 text-gold-300' : 'bg-ivory-200 text-black'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Gallery Grid: 1 col on mobile, 2 on sm, 3 on md, 4 on lg */}
      {filteredImages.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredImages.map((img, index) => (
            <div
              key={img.id}
              onClick={() => openLightbox(index)}
              className="bg-white rounded-3xl overflow-hidden border border-gold-300 shadow-luxury hover:border-gold-400 transition-all duration-300 flex flex-col group cursor-pointer"
            >
              {/* Image Frame with dark neutral letterboxing & 100% complete visibility */}
              <div className="relative aspect-[4/5] bg-neutral-900 flex items-center justify-center overflow-hidden">
                <img
                  src={img.path}
                  alt={img.alt}
                  loading="lazy"
                  
                  className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-102"
                />

                {/* Top Badge: Asset Index */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  #{img.order}
                </div>

                {/* Top Right: Zoom hint */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-gold-400 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <Maximize2 className="w-3.5 h-3.5 text-burgundy" />
                </div>

                {/* Category tag */}
                <div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full bg-burgundy/90 backdrop-blur-md border border-gold-400/60 text-gold-300 text-[9px] font-bold uppercase tracking-wider">
                  {img.category}
                </div>
              </div>

              {/* Card Footer: Pure Black Typography */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <h3 className="font-serif text-base font-bold text-black line-clamp-1 group-hover:text-burgundy transition-colors">
                    {img.title}
                  </h3>
                  <span className="text-[11px] text-black font-medium block truncate mt-0.5">
                    {img.filename}
                  </span>
                </div>

                <div className="mt-3 pt-3 border-t border-borderCream flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-burgundy">
                    View Fullscreen
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-black font-semibold">
                    <Eye className="w-3.5 h-3.5 text-gold-600" />
                    <span>Expand</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-white rounded-3xl border border-gold-300 shadow-luxury p-8">
          <div className="w-16 h-16 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy flex items-center justify-center mx-auto mb-4">
            <ImageIcon className="w-7 h-7" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-black mb-2">No Images Match Criteria</h3>
          <p className="text-sm text-black max-w-md mx-auto mb-6 font-normal">
            No image files matched your query "{searchQuery}". Clear your search or change the category filter to view our full collection of {TOTAL_MANIFEST_IMAGES} assets.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="px-6 py-3 bg-burgundy hover:bg-burgundy-900 border border-gold-400 text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {activeImage && activeLightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fade-in"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white pb-3 border-b border-white/15">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-burgundy border border-gold-400 text-gold-300 font-bold text-xs">
                Asset {activeLightboxIndex + 1} of {filteredImages.length}
              </span>
              <span className="text-xs sm:text-sm font-semibold hidden sm:inline text-white/90">
                {activeImage.title} ({activeImage.filename})
              </span>
            </div>

            <button
              onClick={closeLightbox}
              className="p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Center Display with Previous & Next controls */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/60 hover:bg-burgundy text-white border border-gold-400/40 transition-colors shadow-2xl"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Complete Image - object-contain, no cropping whatsoever */}
            <div className="max-h-[75vh] max-w-[90vw] flex items-center justify-center">
              <img
                src={activeImage.path}
                alt={activeImage.alt}
                className="max-h-[75vh] max-w-[90vw] object-contain object-center rounded-2xl shadow-2xl"
              />
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/60 hover:bg-burgundy text-white border border-gold-400/40 transition-colors shadow-2xl"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar: Caption, Controls & WhatsApp Consultation */}
          <div className="pt-3 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-white text-xs">
            <div>
              <p className="font-serif text-sm sm:text-base font-bold text-white">
                {activeImage.title}
              </p>
              <p className="text-white/70 text-[11px]">
                File: {activeImage.filename} • Category: {activeImage.category}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/919876543210?text=${encodeURIComponent(
                  `Hello Love Concierge, I am inquiring regarding visual asset #${activeImage.order} (${activeImage.filename}) from the gallery.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold uppercase tracking-wider text-xs transition-all shadow-md flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Enquire via WhatsApp</span>
              </a>

              <button
                onClick={closeLightbox}
                className="px-5 py-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white font-bold uppercase tracking-wider text-xs transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
