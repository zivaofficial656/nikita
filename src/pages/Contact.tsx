import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { MapPin, Phone, MessageSquare, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { servicesData } from '../data/services';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: servicesData[0]?.name || 'Full Body Massage',
    preferredDate: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Nikita Spa, I have a booking inquiry from your website:%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Service:* ${encodeURIComponent(formData.service)}%0A*Date:* ${encodeURIComponent(formData.preferredDate || 'Earliest Slot')}%0A*Notes:* ${encodeURIComponent(formData.message || 'None')}%0APlease let me know your available slots at Koramangala, Bengaluru.`;
    
    window.open(`https://wa.me/919693264878?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <>
      <SEOHead
        title="Contact & Location | Nikita Spa Koramangala, Bengaluru"
        description="Get in touch with Nikita Spa in Koramangala, Bengaluru. Reserve your massage appointment via WhatsApp (+91 9693264878) or phone call. View location and directions."
        keywords="Contact Nikita Spa, Spa in Koramangala phone number, Massage Bangalore contact, Nikita Spa address Koramangala"
        canonical="https://nikitaspa.com/contact"
      />

      <main className="pt-28 pb-20">
        
        {/* Header */}
        <section className="py-16 sm:py-20 bg-cream/40 border-b border-cream-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage/15 text-olive text-xs font-medium tracking-wide uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              Connect With Us
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-olive-dark font-normal tracking-tight mb-6">
              Plan Your Visit to Nikita Spa
            </h1>
            
            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-light max-w-2xl mx-auto">
              Our front desk team in Koramangala is pleased to assist you with scheduling, customized therapy consultations, and directions.
            </p>
          </div>
        </section>

        {/* Contact Info & Inquiry Form Section */}
        <section className="py-16 bg-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Direct Contact Details */}
              <div className="lg:col-span-5 space-y-8">
                
                <div>
                  <h2 className="font-serif text-3xl text-olive-dark font-normal mb-3">
                    Nikita Spa Sanctuary
                  </h2>
                  <p className="text-sm text-charcoal-muted leading-relaxed font-light">
                    Located in the heart of Koramangala, Bengaluru. Prior appointment is advised to ensure your private suite is prepared for your arrival.
                  </p>
                </div>

                <div className="space-y-5">
                  
                  {/* Phone Call */}
                  <div className="p-5 rounded-2xl bg-white border border-cream-dark shadow-soft flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-olive/10 text-olive flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-muted block">
                        Telephone Inquiry & Booking
                      </span>
                      <a
                        href="tel:+919693264878"
                        className="text-base font-semibold text-olive-dark hover:text-gold transition-colors block mt-0.5"
                      >
                        +91 9693264878
                      </a>
                      <span className="text-xs text-charcoal-muted block mt-1">
                        Direct line to front desk reception.
                      </span>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="p-5 rounded-2xl bg-white border border-cream-dark shadow-soft flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-muted block">
                        WhatsApp Concierge
                      </span>
                      <a
                        href="https://wa.me/919693264878?text=Hello%20Nikita%20Spa%2C%20I%20would%20like%20to%20book%20an%20appointment."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-semibold text-emerald-800 hover:text-emerald-600 transition-colors block mt-0.5"
                      >
                        +91 9693264878
                      </a>
                      <span className="text-xs text-charcoal-muted block mt-1">
                        Instant slot confirmation and custom inquiries.
                      </span>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="p-5 rounded-2xl bg-white border border-cream-dark shadow-soft flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-muted block">
                        Location
                      </span>
                      <p className="text-sm font-medium text-olive-dark mt-0.5">
                        Nikita Spa, Koramangala
                      </p>
                      <p className="text-xs text-charcoal-muted mt-0.5">
                        Bengaluru, Karnataka, India
                      </p>
                    </div>
                  </div>

                  {/* Hygiene & Comfort Guarantee */}
                  <div className="p-5 rounded-2xl bg-cream/60 border border-cream-dark flex items-center gap-3 text-xs text-charcoal-muted">
                    <ShieldCheck className="w-5 h-5 text-sage shrink-0" />
                    <span>Every appointment includes a clean, private, and sanitized treatment suite.</span>
                  </div>

                </div>

              </div>

              {/* Right Column: Interactive Appointment & Inquiry Form */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-cream-dark shadow-soft">
                
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sage/20 flex items-center justify-center text-olive">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl text-olive-dark mb-2">Inquiry Forwarded</h3>
                    <p className="text-charcoal-muted text-sm mb-6 max-w-sm mx-auto">
                      Thank you! Your booking message has been routed to our front desk WhatsApp. We will confirm your preferred timing immediately.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-olive text-ivory text-xs font-medium hover:bg-olive-light transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <span className="text-xs font-semibold uppercase tracking-wider text-gold mb-1 block">
                        Online Reservation Request
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-medium text-olive-dark">
                        Request Your Appointment
                      </h3>
                      <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
                        Fill in your details below to instantly connect with our Koramangala desk.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-1.5">
                            Full Name
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-ivory/50 border border-cream-dark text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/50"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-1.5">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 Mobile number"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-ivory/50 border border-cream-dark text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/50"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-1.5">
                            Treatment of Choice
                          </label>
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-ivory/50 border border-cream-dark text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/50"
                          >
                            {servicesData.map((svc) => (
                              <option key={svc.id} value={svc.name}>
                                {svc.name}
                              </option>
                            ))}
                            <option value="General Wellness Consultation">General Wellness Consultation</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-1.5">
                            Preferred Date
                          </label>
                          <input
                            type="date"
                            value={formData.preferredDate}
                            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-ivory/50 border border-cream-dark text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/50"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-1.5">
                          Notes / Preferences (Optional)
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Tell us about any specific tension zones, couple booking request, or preferred time of day..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-ivory/50 border border-cream-dark text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 rounded-2xl bg-olive text-ivory text-sm font-medium hover:bg-olive-light transition-all duration-300 shadow-premium flex items-center justify-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4 text-gold" />
                        <span>Send Request via WhatsApp (+91 9693264878)</span>
                      </button>

                      <p className="text-[11px] text-center text-charcoal-muted mt-2">
                        You will be immediately connected to our Koramangala concierge to confirm slot availability.
                      </p>

                    </form>
                  </>
                )}

              </div>

            </div>
          </div>
        </section>

        {/* Google Maps Embed Section */}
        <section className="py-16 bg-cream/40 border-t border-cream-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold mb-2 block">
                Map & Directions
              </span>
              <h3 className="font-serif text-3xl text-olive-dark font-normal">
                Visit Us in Koramangala
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted mt-2">
                Centrally positioned in Bengaluru, with convenient parking and transit connections.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden border border-cream-dark shadow-soft bg-white">
              <iframe
                title="Nikita Spa Koramangala Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31107.03716611388!2d77.60831627581179!3d12.93519288258672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144ed898fc31%3A0x405597f1860f7238!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

      </main>
    </>
  );
};
