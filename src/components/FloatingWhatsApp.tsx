import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { trackWhatsAppClick } from '../utils/analytics';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = "https://wa.me/919693264878?text=Hello%20Nikita%20Spa%2C%20I%20would%20like%20to%20book%20an%20appointment.";

  return (
    <div className="fixed bottom-20 md:bottom-8 right-6 z-40 flex items-end flex-col gap-2 pointer-events-none">
      {/* Subtle notification tooltip */}
      {showTooltip && (
        <div className="pointer-events-auto max-w-[220px] bg-white text-charcoal text-xs p-3 rounded-2xl shadow-elevated border border-cream-dark relative animate-bounce-subtle mb-1">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-charcoal-muted hover:text-charcoal p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="font-semibold text-olive-dark mb-0.5">Need a quick slot?</p>
          <p className="text-charcoal-muted text-[11px] leading-tight">
            Chat with Nikita Spa concierge on WhatsApp for instant booking.
          </p>
        </div>
      )}

      {/* Floating button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick('floating_widget')}
        aria-label="Book on WhatsApp with Nikita Spa"
        className="pointer-events-auto group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-elevated hover:scale-105 hover:shadow-2xl transition-all duration-300"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-600 border-2 border-white"></span>
        </span>
        <MessageCircle className="w-7 h-7" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
    </div>
  );
};
