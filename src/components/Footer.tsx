import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import { trackCallClick, trackWhatsAppClick } from '../utils/analytics';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-charcoal text-ivory/80 pt-16 pb-28 md:pb-16 border-t border-charcoal-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-charcoal-light/50">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block group">
              <div className="bg-ivory/95 p-2.5 rounded-2xl inline-block shadow-soft border border-cream-dark/20 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/images/nikita-spa-logo.png"
                  alt="Nikita Spa Logo - Koramangala Bengaluru"
                  width="180"
                  height="50"
                  loading="lazy"
                  className="h-12 sm:h-14 md:h-16 w-auto max-w-[160px] sm:max-w-[190px] md:max-w-[220px] object-contain rounded-lg"
                />
              </div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-gold mt-2 font-medium">
                Koramangala &bull; Bengaluru
              </p>
            </Link>
            <p className="text-sm text-ivory/70 leading-relaxed font-light">
              Nikita Spa is a luxury wellness sanctuary in Koramangala, Bengaluru dedicated to physical rejuvenation, peaceful respite, and authentic therapeutic touch.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-light/60 border border-charcoal-light text-xs text-gold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Wellness Sanctuary</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-serif text-lg text-ivory mb-4 tracking-wide">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-gold transition-colors">Home Experience</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold transition-colors">About Nikita Spa</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors">Therapies & Treatments</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold transition-colors">Spa Atmosphere & Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors">Location & Contact</Link>
              </li>
              <li>
                <button 
                  onClick={onOpenBooking} 
                  className="text-gold hover:text-gold-light transition-colors font-medium text-left"
                >
                  Book an Appointment &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="font-serif text-lg text-ivory mb-4 tracking-wide">Signature Therapies</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services/full-body-massage" className="hover:text-gold transition-colors">Full Body Massage</Link>
              </li>
              <li>
                <Link to="/services/swedish-massage" className="hover:text-gold transition-colors">Swedish Massage</Link>
              </li>
              <li>
                <Link to="/services/deep-tissue-massage" className="hover:text-gold transition-colors">Deep Tissue Massage</Link>
              </li>
              <li>
                <Link to="/services/thai-massage" className="hover:text-gold transition-colors">Traditional Thai Massage</Link>
              </li>
              <li>
                <Link to="/services/aromatherapy-massage" className="hover:text-gold transition-colors">Aromatherapy Massage</Link>
              </li>
              <li>
                <Link to="/services/couple-massage" className="hover:text-gold transition-colors">Couple Suite Massage</Link>
              </li>
              <li>
                <Link to="/services/relaxation-therapy" className="hover:text-gold transition-colors">Relaxation Therapy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details & Direct CTAs */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-ivory mb-4 tracking-wide">Connect With Us</h4>
            
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
              <span>Koramangala, Bengaluru, Karnataka, India</span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <a 
                href="tel:+919693264878" 
                onClick={() => trackCallClick('footer')}
                className="hover:text-gold transition-colors font-medium"
              >
                +91 9693264878
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <MessageSquare className="w-4 h-4 text-gold shrink-0" />
              <a 
                href="https://wa.me/919693264878?text=Hello%20Nikita%20Spa%2C%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('footer')}
                className="hover:text-gold transition-colors"
              >
                WhatsApp: +91 9693264878
              </a>
            </div>

            <div className="flex items-start gap-3 text-xs text-ivory/60 pt-2">
              <Clock className="w-4 h-4 text-sage shrink-0 mt-0.5" />
              <span>Hours: Daily 10:00 AM – 10:00 PM. Prior appointment reservation recommended.</span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-ivory/50 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Nikita Spa. All rights reserved. Koramangala, Bengaluru, Karnataka, India.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-ivory transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-ivory transition-colors">Terms & Conditions</Link>
            <Link to="/contact" className="hover:text-ivory transition-colors">Direct Inquiries</Link>
            <span className="flex items-center gap-1.5 text-ivory/40">
              <span>Curated with care</span>
              <Heart className="w-3 h-3 text-gold inline" />
              <span>for total wellbeing</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
