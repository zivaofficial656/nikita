import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, ArrowRight } from 'lucide-react';

interface ContactCTAProps {
  onOpenEnquiry?: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-burgundy-950 via-burgundy to-burgundy-950 text-white relative overflow-hidden border-t border-gold-500/30">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gold-500/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-gold-400/50 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-6">
          <img
            src="/images/nikita-spa-logo.png"
            alt="Love"
            className="w-5 h-5 object-contain object-center"
          />
          <span>Private Concierge Services</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
          Seeking Distinguished Companionship for an Upcoming Occasion?
        </h2>

        <p className="text-base sm:text-lg text-ivory/95 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Whether you are hosting international delegates in Whitefield, planning a milestone dinner along Lavelle Road, or attending an art gala at UB City, our confidential concierge is at your service.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {onOpenEnquiry ? (
            <button
              onClick={onOpenEnquiry}
              className="w-full sm:w-auto px-8 py-4 bg-gold-500 hover:bg-gold-600 border border-gold-300 text-black font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-xl hover:shadow-glow-gold flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Submit Confidential Enquiry</span>
            </button>
          ) : (
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-gold-500 hover:bg-gold-600 border border-gold-300 text-black font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-xl hover:shadow-glow-gold flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Submit Confidential Enquiry</span>
            </Link>
          )}

          <Link
            to="/companions"
            className="w-full sm:w-auto px-8 py-4 bg-black/40 hover:bg-black/60 border border-white/20 text-white rounded-full font-semibold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
          >
            <span>Explore All Profiles</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-beige/80">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold-400"></span>
            <span>4-Hour Concierge Response</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold-400"></span>
            <span>NDA & Discretion Guaranteed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold-400"></span>
            <span>Strictly Platonic 18+</span>
          </div>
        </div>
      </div>
    </section>
  );
};
