import React from 'react';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionHeading } from '../../components/common/SectionHeading';
import { AlertCircle } from 'lucide-react';

export const TermsConditionsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumb items={[{ label: 'Terms & Conditions' }]} />

      <div className="mt-4 mb-8">
        <SectionHeading
          subtitle="Statutory Framework"
          title="Terms & Conditions of Directory Access"
          description="Last updated: February 2025. Please review these contractual terms carefully before using Love."
          align="left"
        />
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gold-300 shadow-luxury space-y-8 text-sm sm:text-base text-black leading-relaxed font-normal">
        {/* Crucial Statutory Alert Box */}
        <div className="p-5 rounded-2xl bg-burgundy-50 border border-burgundy-200 text-xs sm:text-sm text-burgundy-950 space-y-2">
          <div className="flex items-center gap-2 font-bold text-burgundy-900">
            <AlertCircle className="w-5 h-5 text-burgundy flex-shrink-0" />
            <span className="uppercase tracking-wider">CRITICAL STATUTORY NOTICE: ADULTS ONLY (18+) & NON-SEXUAL PLATFORM</span>
          </div>
          <p>
            Love is strictly intended for consenting adults aged 18 years and above. The platform functions solely as an introductory directory for lawful, non-sexual social, dining, corporate, and cultural companionship. Any solicitation, provision, or facilitation of sexual acts or commercial sex work is strictly forbidden under the Immoral Traffic (Prevention) Act and applicable Indian penal statutes.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-burgundy">1. Acceptance of Terms</h2>
          <p>
            By accessing, browsing, or submitting an enquiry through Love ("the Platform"), you acknowledge and agree to be bound by these Terms and Conditions. If you do not accept these terms in their entirety, you must immediately terminate your use of the Platform.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-burgundy">2. Age Requirement & Adult Competence (18+)</h2>
          <p>
            You explicitly represent and warrant that you are at least eighteen (18) years of age and possess full legal capacity to enter into binding agreements under Indian law. Minors are strictly prohibited from using or accessing this Platform.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-burgundy">3. Nature of Companionship Services</h2>
          <p>
            The companionship services showcased on the Platform are limited exclusively to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>Accompaniment to fine dining restaurants, bistros, and culinary events.</li>
            <li>Attendance at social mixers, art vernissages, theatre shows, and society galas.</li>
            <li>Corporate convention hosting, tech summit accompaniment, and business dining.</li>
            <li>Travel companionship with separate private luxury suites.</li>
          </ul>
          <p className="font-bold text-burgundy">
            Physical intimacy, sexual services, commercial sex work, or solicitation of illegal acts are strictly prohibited without exception.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-burgundy">4. Fictional Demo Profiles & Verification Disclosure</h2>
          <p>
            To uphold the highest ethical standards of transparency, users are notified that profiles currently displayed on Love are fictional demo previews designed to showcase the platform interface. Love will never represent demo entries as genuine individuals, nor advertise unverified profiles as having passed identity verification without actual, rigorous multi-step governmental checks.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-burgundy">5. Code of Conduct & Immediate Termination</h2>
          <p>
            Any user who behaves disrespectfully, exerts pressure or coercion, violates bodily autonomy, attempts sexual solicitation, or behaves aggressively toward a companion or staff member will face immediate cancellation of their booking without refund, a permanent ban from the directory, and potential notification of local law enforcement authorities.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-burgundy">6. Voluntary, Consent-Based Directory Participation</h2>
          <p>
            All listings on Love are entirely voluntary. Companions are independent adults who retain total discretion to accept or decline any engagement, establish their own conversational comfort zones, and withdraw from any session if platform terms are breached.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-burgundy">7. Profile Removal & Grievance Redressal</h2>
          <p>
            In accordance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, any listed individual or user may lodge a complaint, request instant profile delisting, or report harassment via our Grievance Desk at:
          </p>
          <div className="p-5 rounded-2xl bg-ivory-100 border border-borderCream text-xs text-black space-y-1">
            <p><strong>Grievance Officer:</strong> Compliance & Safety Officer</p>
            <p><strong>Email:</strong> safety@love.in</p>
            <p><strong>Address:</strong> Lavelle Road, Bengaluru 560001, Karnataka, India</p>
            <p><strong>Response Time:</strong> Acknowledged within 24 hours.</p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-burgundy">8. Governing Law & Jurisdiction</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with the Platform shall be subject to the exclusive jurisdiction of the competent courts of Bengaluru, Karnataka.
          </p>
        </section>
      </div>
    </div>
  );
};
