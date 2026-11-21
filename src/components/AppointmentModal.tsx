import React, { useState } from 'react';
import { X, Calendar, Clock, Sparkles, Phone, MessageSquare } from 'lucide-react';
import { servicesData } from '../data/services';
import { trackBookingSubmit, trackCallClick } from '../utils/analytics';
import { BUSINESS_INFO } from '../data/business';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialServiceId
}) => {
  const [selectedService, setSelectedService] = useState(
    initialServiceId || servicesData[0]?.name || 'Full Body Massage'
  );
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (10:00 AM - 1:00 PM)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackBookingSubmit(selectedService);
    const message = `Hello Nikita Spa, I would like to book an appointment.%0A%0A*Name:* ${encodeURIComponent(name || 'Guest')}%0A*Phone:* ${encodeURIComponent(phone || 'Not provided')}%0A*Selected Service:* ${encodeURIComponent(selectedService)}%0A*Preferred Date:* ${encodeURIComponent(preferredDate || 'Earliest Available')}%0A*Time Window:* ${encodeURIComponent(preferredTime)}%0A${notes ? `*Special Request:* ${encodeURIComponent(notes)}%0A` : ''}%0APlease confirm slot availability at Nikita Spa, Indiqube Octa, 4th Block, Koramangala.`;
    
    window.open(`https://wa.me/919693264878?text=${message}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-ivory rounded-3xl p-6 sm:p-8 shadow-elevated border border-cream-dark max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-charcoal-muted hover:text-charcoal hover:bg-cream transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sage/20 flex items-center justify-center text-olive">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif text-olive-dark mb-2">Appointment Request Initiated</h3>
            <p className="text-charcoal-muted text-sm mb-6 max-w-sm mx-auto">
              Your request details have been forwarded to our front desk via WhatsApp. Our concierge at Indiqube Octa, 4th Block, Koramangala will confirm your slot shortly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full bg-olive text-ivory text-sm font-medium hover:bg-olive-light transition-colors"
              >
                Close Window
              </button>
              <a
                href="tel:+919693264878"
                onClick={() => trackCallClick('appointment_modal_success')}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-olive/30 text-olive text-sm font-medium hover:bg-cream transition-colors"
              >
                <Phone className="w-4 h-4" /> Call Front Desk
              </a>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/15 text-olive text-xs font-medium tracking-wide uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                Reserve Your Retreat
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-olive-dark">
                Book an Appointment
              </h3>
              <p className="text-charcoal-muted text-sm mt-1">
                {BUSINESS_INFO.name} &bull; {BUSINESS_INFO.address.short}
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-1.5">
                  Select Treatment
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-cream-dark text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  required
                >
                  {servicesData.map((svc) => (
                    <option key={svc.id} value={svc.name}>
                      {svc.name}
                    </option>
                  ))}
                  <option value="Custom Consultation">General Wellness Consultation</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-cream-dark text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 Phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-cream-dark text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-olive" /> Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-cream-dark text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-olive" /> Preferred Slot
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-cream-dark text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                    <option value="Evening (5:00 PM - 9:00 PM)">Evening (5:00 PM - 9:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-1.5">
                  Notes or Preferences (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. pressure preference, focus on neck/shoulders, couple setup..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-cream-dark text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-olive text-ivory font-medium hover:bg-olive-light transition-all duration-300 shadow-premium group"
                >
                  <MessageSquare className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                  <span>Confirm on WhatsApp (+91 9693264878)</span>
                </button>
                <p className="text-[11px] text-center text-charcoal-muted mt-2">
                  Instant confirmation via WhatsApp with our Koramangala concierge.
                </p>
              </div>

              <div className="flex items-center justify-center gap-4 pt-2 border-t border-cream-dark text-xs text-charcoal-muted">
                <span>Or speak directly:</span>
                <a 
                  href="tel:+919693264878"
                  onClick={() => trackCallClick('appointment_modal_footer')}
                  className="inline-flex items-center gap-1 font-semibold text-olive hover:text-gold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" /> +91 9693264878
                </a>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
