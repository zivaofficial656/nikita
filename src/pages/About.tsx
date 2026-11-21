import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { Sparkles, HeartHandshake, ShieldCheck, Flower2, Clock, MapPin, MessageSquare, Phone } from 'lucide-react';
import { getLocalBusinessSchema, getBreadcrumbSchema } from '../utils/seoSchema';
import { trackCallClick, trackWhatsAppClick } from '../utils/analytics';
import { BUSINESS_INFO } from '../data/business';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  const aboutSchemas = [
    getLocalBusinessSchema(),
    getBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' }
    ])
  ];

  return (
    <>
      <SEOHead
        title="About Nikita Spa | Luxury Wellness & Massage Sanctuary in Koramangala Bengaluru"
        description="Learn about Nikita Spa's dedication to mindful wellness, authentic therapeutic massage, certified therapists, and tranquil private suites in Koramangala, Bengaluru."
        keywords="about nikita spa, luxury spa in bangalore, best spa in koramangala bengaluru, massage centre in koramangala, body massage in bangalore, spa near me"
        canonical="/about"
        ogImage="/images/og-image.jpg"
        schema={aboutSchemas}
      />

      <main className="pt-28 pb-20">
        
        {/* Editorial Header Banner */}
        <section className="py-16 sm:py-20 bg-cream/40 border-b border-cream-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage/15 text-olive text-xs font-medium tracking-wide uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              Our Story & Philosophy
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-olive-dark font-normal tracking-tight mb-6">
              A Quiet Sanctuary for the Mind & Senses
            </h1>
            
            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-light max-w-2xl mx-auto">
              Founded on the belief that true relaxation requires a calm sanctuary free from city noise, <strong className="font-medium text-charcoal">Nikita Spa</strong> brings mindful therapies to Koramangala, Bengaluru.
            </p>
          </div>
        </section>

        {/* Narrative & Visual Story Section */}
        <section className="py-20 bg-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold block">
                  The Vision
                </span>
                
                <h2 className="font-serif text-3xl sm:text-4xl text-olive-dark font-normal">
                  Designed for Gentle Restoration
                </h2>
                
                <p className="text-charcoal-light text-base leading-relaxed font-light">
                  Bengaluru is a city of relentless ambition, innovation, and motion. Yet continuous motion demands conscious intervals of pause. Nikita Spa was conceived to serve as that indispensable pause—a private retreat in Koramangala where guests can disconnect, breathe deeply, and be cared for with genuine warmth.
                </p>

                <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed font-light">
                  From our temperature-controlled private treatment suites to our customized botanical oil blends, every detail is considered to help your muscles soften, tension dissolve, and mental stillness emerge.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-2xl bg-cream/50 border border-cream-dark">
                    <ShieldCheck className="w-5 h-5 text-olive mb-2" />
                    <h4 className="font-serif text-base font-semibold text-olive-dark">Spotless Hygiene</h4>
                    <p className="text-xs text-charcoal-muted mt-1">Fresh linens, sanitised suites, and sterile amenities for every session.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-cream/50 border border-cream-dark">
                    <Flower2 className="w-5 h-5 text-gold-dark mb-2" />
                    <h4 className="font-serif text-base font-semibold text-olive-dark">Botanical Oils</h4>
                    <p className="text-xs text-charcoal-muted mt-1">Carefully formulated pure essential essences chosen to nourish skin and senses.</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 relative">
                <div className="rounded-3xl overflow-hidden shadow-elevated border border-cream-dark">
                  <img
                    src="/images/luxury-couple-spa-suite-koramangala.webp"
                    alt="Panoramic view of luxury couple massage suite and private jacuzzi at Nikita Spa Koramangala Bengaluru"
                    width="1360"
                    height="635"
                    loading="lazy"
                    className="w-full h-[450px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-5 rounded-2xl shadow-premium border border-cream-dark max-w-xs hidden sm:block">
                  <div className="flex items-center gap-2 text-olive mb-1">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span className="text-xs font-semibold">{BUSINESS_INFO.address.short}</span>
                  </div>
                  <p className="text-[11px] text-charcoal-muted leading-tight">
                    {BUSINESS_INFO.address.building}, {BUSINESS_INFO.address.block}, {BUSINESS_INFO.address.city} {BUSINESS_INFO.address.postalCode}.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-20 bg-cream/30 border-y border-cream-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold mb-2 block">Our Standards</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-olive-dark font-normal">
                What Guides Our Guest Care
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-white border border-cream-dark shadow-soft">
                <div className="w-12 h-12 rounded-2xl bg-olive/10 text-olive flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-medium text-olive-dark mb-3">Unhurried Time</h3>
                <p className="text-sm text-charcoal-muted leading-relaxed font-light">
                  We schedule treatments with generous buffers so you are never rushed in or out of your private suite. Time is yours to savor.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-cream-dark shadow-soft">
                <div className="w-12 h-12 rounded-2xl bg-gold/15 text-gold-dark flex items-center justify-center mb-6">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-medium text-olive-dark mb-3">Attentive Discretion</h3>
                <p className="text-sm text-charcoal-muted leading-relaxed font-light">
                  Your comfort, dignity, and personal space are handled with the highest level of respect, discretion, and courteous care.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-cream-dark shadow-soft">
                <div className="w-12 h-12 rounded-2xl bg-sage/20 text-sage-dark flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-medium text-olive-dark mb-3">Customized Flow</h3>
                <p className="text-sm text-charcoal-muted leading-relaxed font-light">
                  Whether you require firm pressure on knots or gentle soothing effleurage, each therapy is adjusted to your comfort.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 bg-ivory">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h3 className="font-serif text-3xl sm:text-4xl text-olive-dark font-normal">
              Experience the Nikita Spa Sanctuary
            </h3>
            <p className="text-sm sm:text-base text-charcoal-muted max-w-xl mx-auto font-light">
              Connect with our concierge at Koramangala to reserve your preferred suite and treatment time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-8 py-3.5 rounded-full bg-olive text-ivory text-sm font-medium hover:bg-olive-light transition-all shadow-soft"
              >
                Book Your Experience
              </button>
              <a
                href="https://wa.me/919693264878?text=Hello%20Nikita%20Spa%2C%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('about_cta')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-cream border border-cream-dark text-olive-dark text-sm font-medium hover:bg-cream-dark transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp: +91 9693264878</span>
              </a>
              <a
                href="tel:+919693264878"
                onClick={() => trackCallClick('about_cta')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-cream-dark text-charcoal-light text-sm font-medium hover:text-olive transition-colors"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};
