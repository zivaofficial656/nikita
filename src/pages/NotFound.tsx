import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { Compass, ArrowLeft, Phone, MessageSquare } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found | Nikita Spa Koramangala Bengaluru"
        description="The requested page could not be located. Browse Nikita Spa's luxury massage therapies and wellness treatments in Koramangala, Bengaluru."
        canonical="/404"
        noIndex={true}
      />

      <main className="pt-32 pb-24 min-h-[70vh] flex items-center justify-center bg-ivory">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-cream border border-cream-dark flex items-center justify-center text-olive-dark shadow-soft">
            <Compass className="w-8 h-8 text-gold" />
          </div>

          <span className="text-xs font-semibold uppercase tracking-wider text-gold mb-2 block">
            404 Error
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl text-olive-dark font-normal tracking-tight mb-4">
            Sanctuary Not Found
          </h1>

          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-light mb-8">
            The page you are looking for might have been moved or does not exist. Allow us to guide you back to peaceful relaxation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="py-3 px-6 rounded-full bg-olive text-ivory text-xs sm:text-sm font-medium hover:bg-olive-light transition-colors shadow-soft inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return Home</span>
            </Link>

            <Link
              to="/services"
              className="py-3 px-6 rounded-full bg-cream hover:bg-cream-dark text-olive-dark text-xs sm:text-sm font-medium transition-colors border border-cream-dark"
            >
              <span>Explore Treatments</span>
            </Link>
          </div>

          <div className="mt-10 pt-8 border-t border-cream-dark flex items-center justify-center gap-6 text-xs text-charcoal-muted">
            <a 
              href="tel:+919693264878" 
              aria-label="Call Nikita Spa Front Desk at +91 9693264878"
              className="hover:text-olive-dark inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-olive" />
              <span>Call Front Desk</span>
            </a>
            <a
              href="https://wa.me/919693264878"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-700 inline-flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Us</span>
            </a>
          </div>

        </div>
      </main>
    </>
  );
};
