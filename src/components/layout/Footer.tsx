import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, AlertCircle, Sparkles } from 'lucide-react';
import { LOCATIONS_DATA } from '../../data/locations';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F5F1E8] text-black pt-16 sm:pt-20 pb-12 border-t border-gold-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-borderCream">
          {/* Brand Presentation (2 Cols) */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block group focus:outline-none" aria-label="Love">
              <img
                src="/images/nikita-spa-logo.png"
                alt="Love"
                className="h-12 sm:h-14 w-auto object-contain object-left group-hover:opacity-90 transition-opacity"
              />
            </Link>

            <p className="text-xs sm:text-sm text-black leading-relaxed max-w-sm font-normal">
              Bangalore’s premier high-society companionship directory. Curated introductions for fine dining, cultural galas, executive corporate hospitality, and luxury weekend retreats.
            </p>

            <div className="flex items-center gap-2 text-xs text-black font-bold">
              <Sparkles className="w-4 h-4 text-burgundy flex-shrink-0" />
              <span>Strictly Platonic • Consenting Adults (18+) • Total Discretion</span>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-gold-300 text-[11px] text-black space-y-1.5 shadow-sm">
              <div className="flex items-center gap-1.5 text-burgundy font-bold uppercase tracking-widest text-[10px]">
                <AlertCircle className="w-3.5 h-3.5 text-burgundy" />
                <span>Notice Regarding Demo Listings</span>
              </div>
              All companion profiles currently presented are fictional demo previews designed to showcase our layout. We never represent demo profiles as real individuals or claim unverified credentials.
            </div>
          </div>

          {/* Directory Navigation */}
          <div>
            <h4 className="font-serif text-base font-bold text-black mb-4 uppercase tracking-widest text-xs">
              Directory
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-black font-medium">
              <li>
                <Link to="/companions" className="text-black hover:text-burgundy transition-colors">
                  Explore Companions
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-black hover:text-burgundy transition-colors font-bold">
                  Editorial Image Gallery
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-black hover:text-burgundy transition-colors">
                  Companionship Categories
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-black hover:text-burgundy transition-colors">
                  Bangalore Enclaves
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-black hover:text-burgundy transition-colors">
                  Services & Experiences
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-black hover:text-burgundy transition-colors">
                  About Directory
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-black hover:text-burgundy transition-colors">
                  Etiquette Guides
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-black hover:text-burgundy transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Enclaves */}
          <div>
            <h4 className="font-serif text-base font-bold text-black mb-4 uppercase tracking-widest text-xs">
              Featured Enclaves
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-black font-medium">
              {LOCATIONS_DATA.slice(0, 7).map((loc) => (
                <li key={loc.id}>
                  <Link
                    to={`/locations/${loc.slug}`}
                    className="text-black hover:text-burgundy transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-600"></span>
                    <span>{loc.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/locations"
                  className="text-black hover:text-burgundy font-bold text-xs tracking-wider uppercase transition-colors"
                >
                  View All Enclaves →
                </Link>
              </li>
            </ul>
          </div>

          {/* Concierge & Safety Desk */}
          <div>
            <h4 className="font-serif text-base font-bold text-black mb-4 uppercase tracking-widest text-xs">
              Concierge & Safety
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-black font-medium mb-6">
              <li>
                <Link to="/contact" className="text-black hover:text-burgundy transition-colors">
                  Client Concierge Desk
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-black hover:text-burgundy transition-colors">
                  Privacy & Discretion Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-black hover:text-burgundy transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <a
                  href="mailto:safety@bangalore-elite.in"
                  className="text-burgundy hover:underline font-bold"
                >
                  24/7 Profile Removal Desk
                </a>
              </li>
            </ul>

            <div className="space-y-2 text-xs text-black font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-burgundy flex-shrink-0" />
                <span>Lavelle Road & UB City, Bengaluru</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-burgundy flex-shrink-0" />
                <span>concierge@love.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-8 p-5 rounded-2xl bg-white border border-borderCream text-[11px] text-black leading-relaxed font-normal shadow-sm">
          <p className="font-bold text-burgundy uppercase tracking-widest text-[10px] mb-1">
            STATUTORY PLATFORM DISCLAIMER & 18+ ADULT COMPLIANCE:
          </p>
          Love operates exclusively as an introductory directory connecting consenting adults for lawful, non-sexual companionship (fine dining, cultural, business, and social events). The platform strictly forbids prostitution, commercial sex work, solicitation, exploitation, and illicit activities under the Immoral Traffic (Prevention) Act and applicable Indian penal laws. All listings are voluntary and non-exclusive. We publish zero personal identity documents without consent and provide immediate removal upon request to safety@love.in.
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-borderCream flex flex-col sm:flex-row items-center justify-between text-xs text-black font-medium gap-4">
          <p>© {new Date().getFullYear()} Love. All Rights Reserved. Exclusivity & Discretion.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-black hover:text-burgundy transition-colors">
              Privacy
            </Link>
            <Link to="/terms-and-conditions" className="text-black hover:text-burgundy transition-colors">
              Terms
            </Link>
            <Link to="/faq" className="text-black hover:text-burgundy transition-colors">
              FAQ
            </Link>
            <span className="text-black font-bold px-2.5 py-0.5 rounded bg-white border border-gold-400">
              18+ Adults Only
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
