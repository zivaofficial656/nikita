import React from 'react';
import { Phone, MessageSquare, Sparkles, MapPin } from 'lucide-react';
import { trackCallClick, trackWhatsAppClick, trackBookingOpen } from '../utils/analytics';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 sm:py-28 bg-olive-dark text-ivory relative overflow-hidden">
      {/* Decorative background ambiance */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src="/images/private-hydrotherapy-suite-bengaluru.webp"
          alt=""
          role="presentation"
          width="1360"
          height="635"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtle pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-olive-light/50 border border-gold/30 text-gold text-xs font-medium tracking-wide uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Your Sanctuary Awaits in Koramangala</span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-ivory mb-6">
          Make Time for Yourself
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-ivory/80 font-light leading-relaxed max-w-2xl mx-auto mb-10">
          Take a break from your busy routine and enjoy a relaxing spa experience.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
          <a
            href="https://wa.me/919693264878?text=Hello%20Nikita%20Spa%2C%20I%20would%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('final_cta')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gold hover:bg-gold-light text-charcoal font-semibold text-sm tracking-wide transition-all duration-300 shadow-premium"
          >
            <MessageSquare className="w-4 h-4 text-charcoal" />
            <span>Book on WhatsApp</span>
          </a>

          <a
            href="tel:+919693264878"
            onClick={() => trackCallClick('final_cta')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent border border-ivory/30 hover:border-gold hover:text-gold text-ivory font-medium text-sm tracking-wide transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            <span>Call Nikita Spa</span>
          </a>
        </div>

        {/* Quick Modal link & location indicator */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-ivory/60 pt-6 border-t border-ivory/10">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-gold" />
            <span>Koramangala, Bengaluru, Karnataka, India</span>
          </span>
          <span className="hidden sm:inline">&bull;</span>
          <button
            onClick={() => {
              trackBookingOpen('final_cta');
              onOpenBooking();
            }}
            className="text-gold hover:underline font-medium"
          >
            Or open the online appointment form &rarr;
          </button>
        </div>

      </div>
    </section>
  );
};
