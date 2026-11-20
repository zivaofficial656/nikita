import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { servicesData, ServiceItem } from '../data/services';
import { Sparkles, Clock, CheckCircle2, MessageSquare, ArrowUpRight, Search } from 'lucide-react';
import { getLocalBusinessSchema, getBreadcrumbSchema, getServiceSchema } from '../utils/seoSchema';
import { trackBookingOpen, trackWhatsAppClick } from '../utils/analytics';

interface ServicesProps {
  onBookService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onBookService }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const tags = ['All', 'Signature', 'Relaxation', 'Therapeutic', 'Suites'];

  const servicesSchemas = [
    getLocalBusinessSchema(),
    getBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' }
    ]),
    ...servicesData.map(getServiceSchema)
  ];

  const filteredServices = servicesData.filter((svc) => {
    const matchesSearch =
      svc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      svc.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
      svc.recommendedFor.toLowerCase().includes(searchTerm.toLowerCase());

    if (selectedTag === 'All') return matchesSearch;
    if (selectedTag === 'Signature') return matchesSearch && svc.tag.includes('Signature');
    if (selectedTag === 'Relaxation') return matchesSearch && (svc.tag.includes('Relaxation') || svc.tag.includes('Aromatic'));
    if (selectedTag === 'Therapeutic') return matchesSearch && (svc.tag.includes('Therapeutic') || svc.tag.includes('Mobility'));
    if (selectedTag === 'Suites') return matchesSearch && (svc.tag.includes('Sanctuary') || svc.tag.includes('Restorative'));
    return matchesSearch;
  });

  return (
    <>
      <SEOHead
        title="Massage & Spa Treatments in Koramangala Bengaluru | Nikita Spa"
        description="Explore luxury spa treatments at Nikita Spa, Koramangala, Bengaluru. Full body massage, deep tissue, Swedish, Thai, and couple massage therapies in private suites."
        keywords="spa in bangalore, best spa in bangalore, body massage in bangalore, full body massage in bangalore, thai massage in bangalore, couple spa in bangalore, luxury spa in bangalore, spa in koramangala, body massage in koramangala bengaluru, thai massage in koramangala bengaluru, couple spa in koramangala bengaluru"
        canonical="/services"
        ogImage="/images/og-image.jpg"
        schema={servicesSchemas}
      />

      <main className="pt-28 pb-20">
        
        {/* Header */}
        <section className="py-16 sm:py-20 bg-cream/40 border-b border-cream-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage/15 text-olive text-xs font-medium tracking-wide uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              Comprehensive Treatment Menu
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-olive-dark font-normal tracking-tight mb-6">
              Therapies Tailored to Your Body
            </h1>
            
            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-light max-w-2xl mx-auto">
              Every body carries its own story and unique areas of tension. Our licensed therapies in Koramangala are customized to your preferred cadence and pressure.
            </p>

            {/* Search & Tag Filter Bar */}
            <div className="mt-8 max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <Search className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search therapies, benefits..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-cream-dark text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
              </div>
              <div className="flex items-center justify-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3.5 py-2 rounded-full text-xs font-medium transition-colors shrink-0 ${
                      selectedTag === tag
                        ? 'bg-olive text-ivory'
                        : 'bg-white border border-cream-dark text-charcoal-muted hover:text-charcoal'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Services List / Detailed Cards */}
        <section className="py-16 bg-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="space-y-12">
              {filteredServices.map((service: ServiceItem, idx: number) => {
                const whatsappUrl = `https://wa.me/919693264878?text=Hello%20Nikita%20Spa%2C%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(service.name)}%20at%20your%20Koramangala%20branch.`;
                const isEven = idx % 2 === 0;

                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-cream-dark shadow-soft hover:shadow-premium transition-all duration-300 scroll-mt-32"
                  >
                    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}>
                      
                      {/* Image side */}
                      <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className="rounded-2xl overflow-hidden relative h-64 sm:h-80 shadow-soft">
                          <img
                            src={service.image}
                            alt={`${service.name} at Nikita Spa Koramangala`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                          />
                          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-ivory/95 backdrop-blur-sm text-olive text-xs font-medium tracking-wide">
                            {service.tag}
                          </div>
                          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs text-ivory font-medium bg-charcoal/70 backdrop-blur-sm px-3 py-1 rounded-full">
                            <Clock className="w-3.5 h-3.5 text-gold" />
                            <span>{service.durationOptions.join(' or ')}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content side */}
                      <div className={`lg:col-span-7 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-olive-dark">
                            {service.name}
                          </h2>
                          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cream text-olive-dark border border-cream-dark">
                            Inquire for Rates & Availability
                          </span>
                        </div>

                        <p className="text-sm sm:text-base text-charcoal-light leading-relaxed font-light">
                          {service.fullDescription}
                        </p>

                        {/* Benefits list */}
                        <div className="pt-2">
                          <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted block mb-2">
                            Key Benefits:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {service.benefits.map((b, bIdx) => (
                              <div key={bIdx} className="flex items-start gap-2 text-xs text-charcoal-muted">
                                <CheckCircle2 className="w-3.5 h-3.5 text-sage shrink-0 mt-0.5" />
                                <span>{b}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Recommended For */}
                        <div className="p-3.5 rounded-xl bg-cream/40 border border-cream-dark text-xs text-charcoal-muted">
                          <strong className="text-olive-dark font-medium">Recommended for: </strong>
                          {service.recommendedFor}
                        </div>

                        {/* Booking action buttons */}
                        <div className="pt-4 flex flex-wrap items-center gap-3">
                          <button
                            onClick={() => {
                              trackBookingOpen(service.name);
                              onBookService(service.name);
                            }}
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-olive text-ivory text-xs font-medium hover:bg-olive-light transition-colors"
                          >
                            <span>Book {service.name}</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>

                          <Link
                            to={`/services/${service.id}`}
                            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-olive/30 text-olive-dark text-xs font-medium hover:bg-olive hover:text-ivory transition-colors"
                          >
                            <span>Therapy Details &rarr;</span>
                          </Link>

                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackWhatsAppClick('services_page', service.name)}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cream border border-cream-dark text-olive-dark text-xs font-medium hover:bg-cream-dark transition-colors"
                          >
                            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                            <span>WhatsApp Booking</span>
                          </a>
                        </div>

                      </div>

                    </div>
                  </div>
                );
              })}

              {filteredServices.length === 0 && (
                <div className="text-center py-16 bg-cream/40 rounded-3xl border border-cream-dark">
                  <p className="text-base text-charcoal-muted mb-2">No matching therapies found for &ldquo;{searchTerm}&rdquo;.</p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedTag('All');
                    }}
                    className="text-xs font-semibold text-olive underline hover:text-gold"
                  >
                    Reset filters
                  </button>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* Preparation & Aftercare Protocol */}
        <section className="py-16 bg-cream/40 border-t border-cream-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold mb-2 block">
                The Guest Experience
              </span>
              <h3 className="font-serif text-3xl text-olive-dark font-normal">
                How to Prepare for Your Session
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-cream-dark">
                <span className="text-olive font-serif text-2xl font-light mb-2 block">01</span>
                <h4 className="font-serif text-lg font-medium text-olive-dark mb-1">Arrive 10 Minutes Prior</h4>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Allow yourself a brief breathing window in our reception lounge with warm infused herbal tea before therapy begins.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-cream-dark">
                <span className="text-olive font-serif text-2xl font-light mb-2 block">02</span>
                <h4 className="font-serif text-lg font-medium text-olive-dark mb-1">Communicate Preferences</h4>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Our therapists will check on your pressure preferences, sensitive areas, and preferred aromatherapy notes.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-cream-dark">
                <span className="text-olive font-serif text-2xl font-light mb-2 block">03</span>
                <h4 className="font-serif text-lg font-medium text-olive-dark mb-1">Gentle Hydration Post-Care</h4>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Drink plenty of warm water following your massage to assist your body in flushing metabolic fatigue and tension.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};
