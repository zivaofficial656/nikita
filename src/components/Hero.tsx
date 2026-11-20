import React from 'react';
import { MapPin, Sparkles, ArrowRight, Phone, MessageSquare, ShieldCheck } from 'lucide-react';
import { trackWhatsAppClick, trackCallClick, trackBookingOpen } from '../utils/analytics';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background imagery with sophisticated warm gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/n15.webp"
          alt="Nikita Spa Koramangala Luxury Interior Suite"
          width="1360"
          height="628"
          fetchPriority="high"
          className="w-full h-full object-cover object-center scale-105 transform animate-subtle-zoom"
          loading="eager"
        />
        {/* Editorial gradient tint overlays: warm ivory, botanical tones and subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-ivory/95 via-ivory/85 to-ivory/70 sm:to-ivory/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory via-transparent to-ivory/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream/90 backdrop-blur-md border border-cream-dark text-olive text-xs sm:text-sm font-medium tracking-wide mb-6 shadow-soft">
            <MapPin className="w-4 h-4 text-gold shrink-0" />
            <span>Koramangala, Bengaluru</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-charcoal-muted">Luxury Wellness Sanctuary</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-olive-dark tracking-tight leading-[1.1] mb-6">
            Your Journey to <span className="italic font-light text-gold-dark">Relaxation</span> Begins Here
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-charcoal-light font-light leading-relaxed mb-8 max-w-2xl">
            Discover a peaceful escape from everyday stress with authentic full body massage and soothing wellness therapies at <strong className="font-medium text-charcoal">Nikita Spa</strong>, Koramangala, Bengaluru.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={() => {
                trackBookingOpen('hero_section');
                onOpenBooking();
              }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-olive text-ivory font-medium text-sm sm:text-base tracking-wide hover:bg-olive-light transition-all duration-300 shadow-premium hover:shadow-elevated group"
            >
              <span>Book Your Experience</span>
              <Sparkles className="w-4 h-4 text-gold group-hover:rotate-12 transition-transform" />
            </button>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-cream/80 backdrop-blur-sm border border-cream-dark text-olive-dark font-medium text-sm sm:text-base tracking-wide hover:bg-cream transition-all duration-300"
            >
              <span>Explore Treatments</span>
              <ArrowRight className="w-4 h-4 text-gold" />
            </a>
          </div>

          {/* Quick contact / direct conversion badges */}
          <div className="pt-6 border-t border-cream-dark/80 flex flex-wrap items-center gap-6 text-xs text-charcoal-muted">
            <a
              href="https://wa.me/919693264878?text=Hello%20Nikita%20Spa%2C%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('hero_section')}
              className="inline-flex items-center gap-2 hover:text-emerald-700 transition-colors font-medium"
            >
              <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                <MessageSquare className="w-3.5 h-3.5" />
              </div>
              <span>WhatsApp Booking: <strong>+91 9693264878</strong></span>
            </a>

            <a
              href="tel:+919693264878"
              onClick={() => trackCallClick('hero_section')}
              className="inline-flex items-center gap-2 hover:text-olive transition-colors font-medium"
            >
              <div className="w-7 h-7 rounded-full bg-cream-dark flex items-center justify-center text-olive">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>Front Desk: <strong>+91 9693264878</strong></span>
            </a>

            <div className="inline-flex items-center gap-1.5 text-sage-dark font-medium">
              <ShieldCheck className="w-4 h-4 text-sage" />
              <span>Sanitised & Private Suites</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
