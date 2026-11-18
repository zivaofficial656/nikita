import React from 'react';
import { MapPin, Phone, MessageSquare, Compass, Clock, Navigation } from 'lucide-react';

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
            Find Your Moment of Peace
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-light">
            Conveniently nestled in Koramangala, Bengaluru—providing a calm haven just minutes away from the city's key hubs.
          </p>
        </div>

        {/* Location Details & Map Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-cream-dark shadow-soft flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gold mb-1 block">
                  Location Address
                </span>
                <h3 className="font-serif text-2xl font-medium text-olive-dark mb-2">
                  Nitiya Spa
                </h3>
                <p className="text-sm text-charcoal-light flex items-start gap-2 leading-relaxed">
                  <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                  <span>
                    Koramangala, Bengaluru, Karnataka, India
                  </span>
                </p>
              </div>

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

            {/* Direct Connect Buttons */}
            <div className="pt-6 border-t border-cream-dark space-y-3">
              <a
                href="https://wa.me/919693264878?text=Hello%20Nitiya%20Spa%2C%20please%20share%20directions%20to%20your%20Koramangala%20branch."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-2xl bg-olive text-ivory text-xs sm:text-sm font-medium hover:bg-olive-light transition-colors text-center flex items-center justify-center gap-2 shadow-soft"
              >
                <MessageSquare className="w-4 h-4 text-gold" />
                <span>Request Location & Directions via WhatsApp</span>
              </a>

              <a
                href="tel:+919693264878"
                className="w-full py-3 px-4 rounded-2xl bg-cream hover:bg-cream-dark text-olive-dark text-xs sm:text-sm font-medium transition-colors text-center flex items-center justify-center gap-2 border border-cream-dark"
              >
                <Phone className="w-4 h-4 text-olive" />
                <span>Call Front Desk: +91 9693264878</span>
              </a>
            </div>

          </div>

          {/* Google Maps Embed / Interactive Placeholder */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-cream-dark shadow-soft min-h-[380px] sm:min-h-[460px] flex flex-col relative">
            {/* Embedded Google Maps frame centered on Koramangala, Bengaluru */}
            <iframe
              title="Nitiya Spa Koramangala Bengaluru Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31107.03716611388!2d77.60831627581179!3d12.93519288258672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144ed898fc31%3A0x405597f1860f7238!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full flex-grow min-h-[360px]"
            />

            {/* Verification & Directions badge bar */}
            <div className="p-4 bg-ivory border-t border-cream-dark flex flex-wrap items-center justify-between text-xs text-charcoal-muted gap-2">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                <span>Area: Koramangala, Bengaluru, Karnataka, India</span>
              </span>
              <a
                href="https://maps.google.com/?q=Koramangala,Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="text-olive hover:text-gold font-medium underline"
              >
                Open in Google Maps &rarr;
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
