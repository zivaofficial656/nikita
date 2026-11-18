import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-ivory/95 backdrop-blur-md border-t border-cream-dark shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-4 py-2.5">
      <div className="grid grid-cols-3 gap-2">
        <a
          href="tel:+919693264878"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-cream/70 text-olive-dark hover:bg-cream transition-colors text-center"
        >
          <Phone className="w-4 h-4 mb-0.5 text-olive" />
          <span className="text-[11px] font-medium leading-none">Call Now</span>
        </a>

        <a
          href="https://wa.me/919693264878?text=Hello%20Nikita%20Spa%2C%20I%20would%20like%20to%20book%20an%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#25D366]/15 text-emerald-800 hover:bg-[#25D366]/25 transition-colors text-center"
        >
          <MessageSquare className="w-4 h-4 mb-0.5 text-emerald-600" />
          <span className="text-[11px] font-medium leading-none">WhatsApp</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-olive text-ivory hover:bg-olive-light transition-colors text-center"
        >
          <Calendar className="w-4 h-4 mb-0.5 text-gold" />
          <span className="text-[11px] font-medium leading-none">Book Slot</span>
        </button>
      </div>
    </div>
  );
};
