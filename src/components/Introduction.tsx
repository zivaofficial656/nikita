import React from 'react';
import { Sparkles, Flower2, HeartHandshake, Compass } from 'lucide-react';
import { trackWhatsAppClick, trackBookingOpen } from '../utils/analytics';

interface IntroductionProps {
  onOpenBooking: () => void;
}

export const Introduction: React.FC<IntroductionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 sm:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-elevated border border-cream-dark">
              <img
                src="/images/circular-bed-therapy-suite-bengaluru.webp"
                alt="Signature circular massage bed in luxury suite at Nikita Spa Koramangala Bengaluru"
                width="1360"
                height="628"
                className="w-full h-[460px] sm:h-[540px] object-cover object-center hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            
            {/* Subtle floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 z-20 bg-cream-light/95 backdrop-blur-md p-5 rounded-2xl border border-cream-dark shadow-premium max-w-[220px]">
              <div className="flex items-center gap-2 text-gold mb-1">
                <Flower2 className="w-5 h-5 text-gold-dark" />
                <span className="text-xs font-semibold uppercase tracking-wider text-olive">Pure Calm</span>
              </div>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Quiet acoustic treatment spaces nestled in Koramangala.
              </p>
            </div>

            {/* Decorative background border accent */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border border-gold/30 -z-0 hidden sm:block" />
          </div>

          {/* Right Column: Descriptive editorial content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/15 text-olive text-xs font-medium tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              Welcome to Nikita Spa
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-olive-dark font-normal tracking-tight leading-[1.2]">
              Where Wellness Meets <span className="italic text-gold-dark">Tranquility</span>
            </h2>

            <p className="text-base sm:text-lg text-charcoal-light leading-relaxed font-light">
              In the heart of Bengaluru's energetic Koramangala district, <strong className="font-medium text-charcoal">Nikita Spa</strong> was envisioned as a tranquil haven—a quiet, welcoming sanctuary dedicated to personal comfort, tension relief, and deep restoration.
            </p>

            <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
              We believe that genuine self-care starts when the mind is granted space to breathe. Our soothing environment pairs soft botanical fragrances, discreet acoustic quietude, and warm ambient lighting to guide your senses away from urban rush into effortless stillness.
            </p>

            {/* Distinctive pillar cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-cream/60 border border-cream-dark">
                <div className="w-9 h-9 rounded-xl bg-olive/10 flex items-center justify-center text-olive mb-3">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-semibold text-olive-dark mb-1">Personalized Touch</h4>
                <p className="text-xs text-charcoal-muted leading-normal">
                  Every stroke and pressure level is tuned specifically to your comfort and individual relaxation goals.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-cream/60 border border-cream-dark">
                <div className="w-9 h-9 rounded-xl bg-gold/15 flex items-center justify-center text-gold-dark mb-3">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-semibold text-olive-dark mb-1">Koramangala Sanctuary</h4>
                <p className="text-xs text-charcoal-muted leading-normal">
                  Conveniently situated with seamless access from Bengaluru’s primary hubs, yet peacefully serene inside.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  trackBookingOpen('intro_section');
                  onOpenBooking();
                }}
                className="px-7 py-3 rounded-full bg-olive text-ivory text-sm font-medium hover:bg-olive-light transition-all shadow-soft"
              >
                Schedule Your Visit
              </button>
              
              <a
                href="https://wa.me/919693264878?text=Hello%20Nikita%20Spa%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('intro_section')}
                className="px-6 py-3 rounded-full border border-cream-dark hover:border-olive/30 text-olive-dark text-sm font-medium hover:bg-cream transition-colors"
              >
                Inquire on WhatsApp
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
