import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { galleryData, GalleryImage } from '../data/gallery';
import { Sparkles, Eye, X, MessageSquare } from 'lucide-react';
import { getLocalBusinessSchema, getBreadcrumbSchema } from '../utils/seoSchema';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [modalImage, setModalImage] = useState<GalleryImage | null>(null);

  const categories = ['All', 'Treatment Rooms', 'Interiors', 'Atmosphere', 'Rituals'];

  const gallerySchemas = [
    getLocalBusinessSchema(),
    getBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Gallery', path: '/gallery' }
    ])
  ];

  const filteredImages = galleryData.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  return (
    <>
      <SEOHead
        title="Spa Gallery & Ambience in Koramangala Bengaluru | Nikita Spa"
        description="Tour Nikita Spa's serene luxury suites, calm reception lounge, sanitized massage rooms, and tranquil wellness atmosphere in Koramangala, Bengaluru."
        keywords="spa in koramangala, luxury spa in bangalore, best spa in bangalore, spa interior koramangala, private massage suites bengaluru, nikita spa gallery"
        canonical="/gallery"
        ogImage="/images/og-image.jpg"
        schema={gallerySchemas}
      />

      <main className="pt-28 pb-20">
        
        {/* Header */}
        <section className="py-16 sm:py-20 bg-cream/40 border-b border-cream-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage/15 text-olive text-xs font-medium tracking-wide uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              Visual Sanctuary Tour
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-olive-dark font-normal tracking-tight mb-6">
              The Beauty of Calm
            </h1>
            
            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-light max-w-2xl mx-auto">
              Immerse yourself in the warm, ambient textures and private therapy suites of Nikita Spa, Koramangala, Bengaluru.
            </p>

            {/* Category Filter Pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-olive text-ivory shadow-sm'
                      : 'bg-white border border-cream-dark text-charcoal-muted hover:text-charcoal'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredImages.map((img) => (
                <div
                  key={img.id}
                  onClick={() => setModalImage(img)}
                  className="group relative rounded-3xl overflow-hidden cursor-pointer bg-cream border border-cream-dark shadow-soft hover:shadow-premium transition-all duration-300"
                >
                  <div className="h-80 overflow-hidden relative">
                    <img
                      src={img.image}
                      alt={img.alt || img.title}
                      width={img.width}
                      height={img.height}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-ivory/95 backdrop-blur-sm text-olive text-xs font-medium tracking-wide">
                      {img.category}
                    </span>

                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-charcoal/60 backdrop-blur-sm text-ivory flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-4 h-4" />
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-ivory">
                      <h3 className="font-serif text-lg font-medium leading-snug mb-1 group-hover:text-gold transition-colors">
                        {img.title}
                      </h3>
                      <p className="text-xs text-ivory/80 line-clamp-1 font-light">
                        {img.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Lightbox Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/85 backdrop-blur-md animate-fade-in"
          onClick={() => setModalImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-ivory rounded-3xl overflow-hidden shadow-elevated border border-cream-dark"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-charcoal/60 text-ivory hover:bg-charcoal transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[75vh] overflow-hidden bg-charcoal">
              <img
                src={modalImage.image}
                alt={modalImage.alt || modalImage.title}
                width={modalImage.width}
                height={modalImage.height}
                className="w-full h-full object-contain max-h-[75vh]"
              />
            </div>
            <div className="p-6 bg-ivory flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gold mb-1 block">
                  {modalImage.category}
                </span>
                <h4 className="font-serif text-xl font-medium text-olive-dark">
                  {modalImage.title}
                </h4>
                <p className="text-xs text-charcoal-muted mt-1">
                  {modalImage.description}
                </p>
              </div>
              <a
                href="https://wa.me/919693264878?text=Hello%20Nikita%20Spa%2C%20I%20would%20like%20to%20visit%20your%20spa."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-olive text-ivory text-xs font-medium hover:bg-olive-light transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-gold" />
                <span>Book This Experience</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
