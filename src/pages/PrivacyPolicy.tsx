import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { getBreadcrumbSchema, getLocalBusinessSchema } from '../utils/seoSchema';

export const PrivacyPolicy: React.FC = () => {
  const schemas = [
    getLocalBusinessSchema(),
    getBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Privacy Policy', path: '/privacy-policy' }
    ])
  ];

  return (
    <>
      <SEOHead
        title="Privacy Policy | Nikita Spa Koramangala Bengaluru"
        description="Review Nikita Spa's privacy policy, guest data protection principles, and transparent appointment handling in Koramangala, Bengaluru."
        keywords="Nikita Spa Privacy Policy, Spa Guest Privacy, Data Protection Bengaluru"
        canonical="/privacy-policy"
        schema={schemas}
      />

      <main className="pt-28 pb-20 bg-ivory">
        {/* Header Banner */}
        <section className="py-16 bg-cream/40 border-b border-cream-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage/15 text-olive text-xs font-medium tracking-wide uppercase mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-gold" />
              Guest Privacy & Trust
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-olive-dark font-normal tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-light max-w-xl mx-auto">
              Last Updated: November 2026. Nikita Spa is committed to safeguarding your personal privacy and maintaining complete discretion.
            </p>
          </div>
        </section>

        {/* Content Body */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-cream-dark shadow-soft space-y-8 text-sm sm:text-base text-charcoal-light font-light leading-relaxed">
              
              <div>
                <h2 className="font-serif text-2xl font-medium text-olive-dark mb-3">
                  1. Information We Collect
                </h2>
                <p>
                  When you schedule an appointment or submit an inquiry through our website, phone, or WhatsApp, we collect only the minimal details necessary to coordinate your reservation:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1.5 text-charcoal-muted text-xs sm:text-sm">
                  <li><strong>Contact Details:</strong> Name, phone number, and preferred date/time of appointment.</li>
                  <li><strong>Treatment Preferences:</strong> Specific massage therapies chosen, preferred pressure, and any allergy or tension notes voluntarily shared.</li>
                  <li><strong>Technical Usage:</strong> Anonymized server logs, browser type, and navigation analytics strictly used to optimize website performance.</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-cream-dark">
                <h2 className="font-serif text-2xl font-medium text-olive-dark mb-3">
                  2. How We Use Your Information
                </h2>
                <p>
                  Your information is used solely for the following legitimate business purposes:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1.5 text-charcoal-muted text-xs sm:text-sm">
                  <li>Confirming and managing your spa appointment slots at our Koramangala branch.</li>
                  <li>Communicating directions, appointment reminders, and concierge updates.</li>
                  <li>Ensuring therapist readiness and maintaining the highest standard of tailored care.</li>
                </ul>
                <p className="mt-3 font-medium text-olive-dark">
                  We never sell, rent, commercialize, or disclose your contact information to third-party marketing brokers.
                </p>
              </div>

              <div className="pt-4 border-t border-cream-dark">
                <h2 className="font-serif text-2xl font-medium text-olive-dark mb-3">
                  3. In-Suite Privacy & Guest Discretion
                </h2>
                <p>
                  At Nikita Spa, every suite is 100% private and sound-buffered. We do not permit recording devices or photography in treatment areas, guaranteeing absolute peace of mind during your visit.
                </p>
              </div>

              <div className="pt-4 border-t border-cream-dark">
                <h2 className="font-serif text-2xl font-medium text-olive-dark mb-3">
                  4. Cookies & Analytics
                </h2>
                <p>
                  We utilize lightweight, anonymized cookies and privacy-respecting analytics to understand how visitors engage with our therapy offerings and location directions. You can disable cookies at any time through your browser settings without affecting core booking functionality.
                </p>
              </div>

              <div className="pt-4 border-t border-cream-dark">
                <h2 className="font-serif text-2xl font-medium text-olive-dark mb-3">
                  5. Contact Our Concierge
                </h2>
                <p>
                  If you have questions regarding this privacy policy or wish to request data deletion, please contact our Koramangala front desk:
                </p>
                <p className="mt-2 text-xs sm:text-sm text-charcoal font-medium">
                  Nikita Spa &bull; Koramangala, Bengaluru, Karnataka, India<br />
                  Telephone / WhatsApp: <a href="tel:+919693264878" className="text-olive underline">+91 9693264878</a>
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
