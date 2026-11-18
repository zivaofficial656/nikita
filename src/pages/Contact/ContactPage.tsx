import React from 'react';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionHeading } from '../../components/common/SectionHeading';
import { ContactForm } from '../../components/forms/ContactForm';
import { MapPin, Mail, Clock, ShieldCheck, AlertCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumb items={[{ label: 'Client Concierge' }]} />

      <div className="mt-4 mb-12">
        <SectionHeading
          subtitle="Discreet Communication"
          title="Connect with Love Concierge"
          description="Have an enquiry about a private gala, executive delegate hosting, schedule alignment, or safety reporting? Our dedicated concierge operates in complete confidence."
          align="left"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Information & Concierge Protocols (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gold-300 shadow-luxury space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white border border-gold-400 p-0.5 flex items-center justify-center shadow-sm overflow-hidden flex-shrink-0">
                <img
                  src="/images/Love Lady Heart Silhouette Logo.png"
                  alt="Love"
                  className="w-full h-full object-contain object-center"
                />
              </div>
              <h3 className="font-serif text-2xl font-bold text-black">
                Concierge Desk
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-black">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-black font-bold">Central Enclave Operations:</strong>
                  <span className="text-black font-normal">Lavelle Road & UB City Corridor, Bengaluru 560001, Karnataka, India</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-black font-bold">Client Inquiries:</strong>
                  <span className="text-black font-normal">concierge@love.in</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-burgundy flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-black font-bold">Concierge Operating Hours:</strong>
                  <span className="text-black font-normal">Daily: 10:00 AM – 10:00 PM IST (Response time ~4 hours)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-borderCream">
              <div className="p-4 rounded-2xl bg-burgundy-50 border border-burgundy-200 text-xs text-burgundy-950 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-burgundy">
                  <ShieldCheck className="w-4 h-4 text-burgundy" />
                  <span>Confidentiality Guarantee</span>
                </div>
                All communications and client details are strictly protected under client non-disclosure guidelines.
              </div>
            </div>
          </div>

          {/* Safety & Profile Removal Box */}
          <div className="bg-ivory-100 rounded-3xl p-6 sm:p-8 border border-borderCream space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-burgundy">
              <AlertCircle className="w-4 h-4 text-burgundy" />
              <span>Safety & Profile Removal Desk</span>
            </div>
            <h4 className="font-serif text-lg font-bold text-black">
              Immediate Removal Request
            </h4>
            <p className="text-xs text-black leading-relaxed font-normal">
              Any listed companion or individual requesting profile edits, temporary pause, or immediate deletion can email <a href="mailto:safety@love.in" className="text-burgundy underline font-bold">safety@love.in</a>. All removal requests are processed within 24 hours without question.
            </p>
          </div>
        </div>

        {/* Contact Form (7 Cols) */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
