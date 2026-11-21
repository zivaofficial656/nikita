import React, { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { trackCallClick, trackWhatsAppClick } from '../utils/analytics';

export const FloatingContactButtons: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const phoneNumber = '+919693264878';
  const whatsappUrl = "https://wa.me/919693264878?text=Hello%20Nikita%20Spa%2C%20I%20would%20like%20to%20book%20an%20appointment.";

  return (
    <div className="fixed bottom-20 md:bottom-8 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none select-none">
      
      {/* Subtle Booking Prompt Tooltip */}
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
            Call or chat with Nikita Spa reception for instant confirmation.
          </p>
        </div>
      )}

      {/* 1. Floating Call Button (Positioned Directly ABOVE WhatsApp) */}
      <div className="relative group flex items-center pointer-events-auto">
        {/* Tooltip on Desktop */}
        <span className="hidden md:inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-charcoal/90 text-ivory text-xs font-medium whitespace-nowrap shadow-soft backdrop-blur-sm">
          Call Nikita Spa
        </span>

        <a
          href={`tel:${phoneNumber}`}
          onClick={() => trackCallClick('floating_call_widget')}
          aria-label="Call Nikita Spa (+91 9693264878)"
          title="Call Nikita Spa"
          className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white shadow-elevated hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/30"
        >
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-20 animate-ping group-hover:hidden pointer-events-none" />
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          <span className="sr-only">Call Nikita Spa</span>
        </a>
      </div>

      {/* 2. Floating WhatsApp Button (Positioned at Bottom-Right) */}
      <div className="relative group flex items-center pointer-events-auto">
        {/* Tooltip on Desktop */}
        <span className="hidden md:inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-charcoal/90 text-ivory text-xs font-medium whitespace-nowrap shadow-soft backdrop-blur-sm">
          Chat on WhatsApp
        </span>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('floating_whatsapp_widget')}
          aria-label="Chat on WhatsApp with Nikita Spa"
          title="Chat on WhatsApp"
          className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-elevated hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/30"
        >
          {/* Green online badge */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-600 border-2 border-white" />
          </span>
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          <span className="sr-only">Chat on WhatsApp</span>
        </a>
      </div>

    </div>
  );
};
