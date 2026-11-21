import React, { useState } from 'react';
import { galleryData, GalleryImage } from '../data/gallery';
import { Sparkles, ArrowRight, Eye, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackWhatsAppClick } from '../utils/analytics';

export const GallerySection: React.FC = () => {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  // Take top 6 for the homepage editorial grid
  const previewImages = galleryData.slice(0, 6);

  return (
    <section className="py-20 sm:py-28 bg-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/15 text-olive text-xs font-medium tracking-wide uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              Sanctuary Ambiance
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-olive-dark font-normal tracking-tight">
              An Atmosphere Crafted for Peace
            </h2>
            <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-light mt-3">
              Step inside our serene private suites, calming relaxation alcoves, and mindfully designed wellness interiors in Koramangala.
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-sm font-medium text-olive-dark hover:text-gold transition-colors mt-6 md:mt-0"
          >
            <span>View Full Spa Gallery</span>
            <ArrowRight className="w-4 h-4 text-gold" />
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewImages.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-cream border border-cream-dark shadow-soft hover:shadow-premium transition-all duration-300 ${
                idx === 0 || idx === 3 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="h-72 sm:h-80 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.alt || item.title}
                  width={item.width}
                  height={item.height}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Category Pill */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-ivory/90 backdrop-blur-sm text-olive text-xs font-medium tracking-wide">
                  {item.category}
                </span>

                {/* Inspect icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-charcoal/60 backdrop-blur-sm text-ivory flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Bottom title & description */}
                <div className="absolute bottom-4 left-4 right-4 text-ivory">
                  <h3 className="font-serif text-lg font-medium leading-snug mb-1 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-ivory/80 line-clamp-1 font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/85 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-ivory rounded-3xl overflow-hidden shadow-elevated border border-cream-dark"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-charcoal/60 text-ivory hover:bg-charcoal transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[75vh] overflow-hidden bg-charcoal">
              <img
                src={activeImage.image}
                alt={activeImage.alt || activeImage.title}
                width={activeImage.width}
                height={activeImage.height}
                className="w-full h-full object-contain max-h-[75vh]"
              />
            </div>
            <div className="p-6 bg-ivory flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gold mb-1 block">
                  {activeImage.category}
                </span>
                <h4 className="font-serif text-xl font-medium text-olive-dark">
                  {activeImage.title}
                </h4>
                <p className="text-xs text-charcoal-muted mt-1">
                  {activeImage.description}
                </p>
              </div>
              <a
                href="https://wa.me/919693264878?text=Hello%20Nikita%20Spa%2C%20I%20would%20like%20to%20visit%20your%20spa."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('gallery_modal')}
                className="hidden sm:inline-flex px-5 py-2.5 rounded-full bg-olive text-ivory text-xs font-medium hover:bg-olive-light transition-colors"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
