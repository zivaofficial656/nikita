import React, { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { EnquiryModal } from '../forms/EnquiryModal';

export const FloatingContactDock: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Direct WhatsApp concierge link with prefilled enquiry text
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    'Hello Love Concierge, I would like to check availability and enquire about companions in Bangalore.'
  )}`;

  return (
    <>
      {/* Floating Bottom Bar for Mobile & Desktop */}
      <div className="fixed bottom-4 left-4 right-4 z-40 max-w-lg mx-auto sm:right-6 sm:left-auto sm:mx-0 animate-fade-in">
        <div className="bg-charcoal/95 backdrop-blur-md border border-gold-400/80 rounded-full p-2 shadow-2xl flex items-center justify-between gap-2">
          {/* Direct WhatsApp Concierge Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-1.5 group"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span className="truncate">WhatsApp VIP</span>
          </a>

          {/* Direct Phone Call Concierge */}
          <a
            href="tel:+919876543210"
            className="flex-1 py-2.5 px-3.5 rounded-full bg-burgundy hover:bg-burgundy-900 border border-gold-400 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-1.5"
          >
            <Phone className="w-4 h-4 text-gold-300" />
            <span className="truncate">Call Desk</span>
          </a>

          {/* Book Online / Enquiry Trigger with Logo */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-10 h-10 rounded-full bg-white border border-gold-400 p-1 shadow-md hover:scale-105 transition-all flex items-center justify-center flex-shrink-0 overflow-hidden"
            title="Book Online Enquiry"
            aria-label="Book Online Enquiry"
          >
            <img
              src="/images/nikita-spa-logo.png"
              alt="Love"
              className="w-full h-full object-contain object-center"
            />
          </button>
        </div>
      </div>

      {/* Global Enquiry Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
