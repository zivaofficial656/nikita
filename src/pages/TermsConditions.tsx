import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { FileText, ArrowLeft } from 'lucide-react';
import { getBreadcrumbSchema, getLocalBusinessSchema } from '../utils/seoSchema';

export const TermsConditions: React.FC = () => {
  const schemas = [
    getLocalBusinessSchema(),
    getBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Terms and Conditions', path: '/terms-and-conditions' }
    ])
  ];

  return (
    <>
      <SEOHead
        title="Terms and Conditions | Nikita Spa Koramangala Bengaluru"
        description="Review Nikita Spa's terms of service, appointment booking guidelines, etiquette standards, and cancellation policies in Koramangala, Bengaluru."
        keywords="Nikita Spa Terms and Conditions, Spa Appointment Policy Bengaluru"
        canonical="/terms-and-conditions"
        schema={schemas}
      />

      <main className="pt-28 pb-20 bg-ivory">
        {/* Header Banner */}
        <section className="py-16 bg-cream/40 border-b border-cream-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage/15 text-olive text-xs font-medium tracking-wide uppercase mb-4">
              <FileText className="w-3.5 h-3.5 text-gold" />
              Service Guidelines
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-olive-dark font-normal tracking-tight mb-4">
              Terms & Conditions
            </h1>
            <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-light max-w-xl mx-auto">
              Clear expectations to ensure a tranquil, hygienic, and unhurried wellness experience for all our guests.
            </p>
          </div>
        </section>

        {/* Content Body */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-cream-dark shadow-soft space-y-8 text-sm sm:text-base text-charcoal-light font-light leading-relaxed">
              
              <div>
                <h2 className="font-serif text-2xl font-medium text-olive-dark mb-3">
                  1. Appointment Scheduling & Arrival
                </h2>
                <p>
                  To preserve an unhurried atmosphere and ensure private suites are meticulously sanitized prior to your arrival, prior appointment reservation is strongly advised. We kindly request guests arrive 10 minutes prior to scheduled session times to complete intake and consultations.
                </p>
              </div>

              <div className="pt-4 border-t border-cream-dark">
                <h2 className="font-serif text-2xl font-medium text-olive-dark mb-3">
                  2. Professional Wellness Sanctuary Code
                </h2>
                <p>
                  Nikita Spa operates strictly as a licensed, therapeutic wellness establishment. All treatments are conducted by trained therapists adhering to the highest code of ethics, modesty, and client dignity. Any inappropriate conduct or non-wellness solicitations will result in immediate termination of service without refund.
                </p>
              </div>

              <div className="pt-4 border-t border-cream-dark">
                <h2 className="font-serif text-2xl font-medium text-olive-dark mb-3">
                  3. Health & Medical Disclosures
                </h2>
                <p>
                  Guests are requested to inform their therapist regarding any pre-existing health conditions, recent surgeries, cardiovascular concerns, pregnancy, or dermatological sensitivities prior to commencement. Therapists will adjust pressure and technique accordingly.
                </p>
              </div>

              <div className="pt-4 border-t border-cream-dark">
                <h2 className="font-serif text-2xl font-medium text-olive-dark mb-3">
                  4. Rescheduling & Cancellations
                </h2>
                <p>
                  We understand schedules change. If you must reschedule or cancel your appointment, please notify our front desk at least 2 hours in advance via phone or WhatsApp so we can accommodate other waiting guests.
                </p>
              </div>

              <div className="pt-4 border-t border-cream-dark">
                <h2 className="font-serif text-2xl font-medium text-olive-dark mb-3">
                  5. Payment Methods
                </h2>
                <p>
                  We accept major payment methods including Cash, UPI, Credit Cards, and Debit Cards upon completion of your therapy session.
                </p>
              </div>

              <div className="pt-6 border-t border-cream-dark">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-olive hover:text-gold transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Return to Homepage</span>
                </Link>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
};
