import React from 'react';
import { MapPin, Phone, MessageSquare, Compass, Clock, Navigation, CheckCircle2, ExternalLink } from 'lucide-react';
import { trackCallClick, trackWhatsAppClick, trackDirectionsClick } from '../utils/analytics';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 sm:py-28 bg-cream/40 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/15 text-olive text-xs font-medium tracking-wide uppercase mb-3">
            <Compass className="w-3.5 h-3.5 text-gold" />
            Sanctuary Destination
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-olive-dark font-normal tracking-tight mb-4">
            Visit Nikita Spa
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-light">
            Your Relaxation Destination in Koramangala, Bengaluru.
          </p>
        </div>

        {/* Location Details & Map Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-cream-dark shadow-soft flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              <a
                href="https://www.google.com/maps/search/?api=1&query=12.93401024156366,77.63006964588301"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Nikita Spa location on Google Maps"
                className="block group cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold block">
                    Location Address
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-medium">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified Business Location
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-olive-dark group-hover:text-gold transition-colors mb-2 flex items-center gap-2">
                  <span>Nikita Spa</span>
                  <ExternalLink className="w-4 h-4 text-charcoal-muted group-hover:text-gold transition-colors" />
                </h3>
                <p className="text-sm text-charcoal-light flex items-start gap-2 leading-relaxed">
                  <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                  <span>
                    Koramangala, Bengaluru, Karnataka, India
                  </span>
                </p>
              </a>

              {/* Transit & Accessibility guidance */}
              <div className="space-y-3 pt-4 border-t border-cream-dark text-xs sm:text-sm text-charcoal-muted">
                <div className="flex items-start gap-3">
                  <Navigation className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-charcoal-light block">Neighborhood Accessibility:</span>
                    <span>Directly accessible from 100 Feet Road, 80 Feet Road, and surrounding Koramangala blocks with easy cab and metro connectivity.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <Clock className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-charcoal-light block">Appointment Recommended:</span>
                    <span>To ensure an unhurried, private suite experience, please contact our concierge prior to your arrival.</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Direct Connect & Navigation Action Buttons */}
            <div className="pt-6 border-t border-cream-dark space-y-3">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=12.93401024156366,77.63006964588301"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackDirectionsClick('location_section_card')}
                aria-label="Get Directions to Nikita Spa on Google Maps"
                className="w-full py-3.5 px-4 rounded-2xl bg-olive text-ivory text-xs sm:text-sm font-medium hover:bg-olive-light transition-colors text-center flex items-center justify-center gap-2 shadow-soft"
              >
                <Navigation className="w-4 h-4 text-gold" />
                <span>Get Directions</span>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="tel:+919693264878"
                  onClick={() => trackCallClick('location_section')}
                  aria-label="Call Nikita Spa at +91 9693264878"
                  className="py-3 px-4 rounded-2xl bg-cream hover:bg-cream-dark text-olive-dark text-xs sm:text-sm font-medium transition-colors text-center flex items-center justify-center gap-2 border border-cream-dark"
                >
                  <Phone className="w-4 h-4 text-olive" />
                  <span>Call Now</span>
                </a>

                <a
                  href="https://wa.me/919693264878"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('location_section')}
                  aria-label="Chat on WhatsApp with Nikita Spa"
                  className="py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-medium transition-colors text-center flex items-center justify-center gap-2 shadow-soft"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Google Maps Embed / Interactive Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-cream-dark shadow-soft min-h-[380px] sm:min-h-[460px] flex flex-col relative aspect-[16/9] lg:aspect-auto">
            
            {/* Clickable Location Card / Marker Overlay */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=12.93401024156366,77.63006964588301"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Nikita Spa coordinates on Google Maps"
              className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl shadow-soft border border-cream-dark hover:border-gold/60 hover:shadow-premium transition-all duration-300 group flex items-center gap-3 text-left max-w-[calc(100%-2rem)] cursor-pointer"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs border border-red-100">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 fill-red-500 text-red-600" />
              </div>
              <div className="min-w-0 pr-1">
                <div className="flex items-center gap-1 font-semibold text-charcoal text-xs sm:text-sm group-hover:text-gold transition-colors truncate">
                  <span>Nikita Spa</span>
                  <ExternalLink className="w-3 h-3 text-charcoal-muted group-hover:text-gold shrink-0" />
                </div>
                <p className="text-[11px] sm:text-xs text-charcoal-muted truncate">
                  Koramangala, Bengaluru
                </p>
              </div>
            </a>

            {/* Embedded Google Maps frame with exact Nikita Spa coordinates */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1795150229379!5m2!1sen!2sin!6m8!1m7!1sNqb-qpDDQKb6KE3Wv6XDbQ!2m2!1d12.93401024156366!2d77.63006964588301!3f227.39533733709914!4f36.89930718876852!5f0.7820865974627469"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Nikita Spa Google Maps Location"
              className="w-full flex-grow min-h-[380px] sm:min-h-[460px] border-0"
            />

            {/* Verification & Directions badge bar */}
            <div className="p-4 bg-ivory border-t border-cream-dark flex flex-wrap items-center justify-between text-xs text-charcoal-muted gap-2">
              <a
                href="https://www.google.com/maps/search/?api=1&query=12.93401024156366,77.63006964588301"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Nikita Spa on Google Maps"
                className="flex items-center gap-1.5 hover:text-gold transition-colors group cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-red-500 fill-red-500 shrink-0" />
                <span className="group-hover:underline">Nikita Spa &bull; Koramangala, Bengaluru</span>
                <ExternalLink className="w-3 h-3 text-charcoal-muted group-hover:text-gold shrink-0" />
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=12.93401024156366,77.63006964588301"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackDirectionsClick('location_section_badge')}
                aria-label="Get Directions to Nikita Spa on Google Maps"
                className="text-olive hover:text-gold font-medium underline flex items-center gap-1"
              >
                <span>Get Directions &rarr;</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
