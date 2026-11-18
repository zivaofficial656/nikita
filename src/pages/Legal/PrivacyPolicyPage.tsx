import React from 'react';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionHeading } from '../../components/common/SectionHeading';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumb items={[{ label: 'Privacy Policy' }]} />

      <div className="mt-4 mb-8">
        <SectionHeading
          subtitle="Data Protection & Discretion"
          title="Privacy Policy"
          description="Last updated: February 2025. Love is committed to complete discretion, data confidentiality, and transparent information stewardship."
          align="left"
        />
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gold-300 shadow-luxury space-y-8 text-sm sm:text-base text-black leading-relaxed font-normal">
        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-burgundy">1. Commitment to Absolute Discretion</h2>
          <p>
            Love ("we", "our", or "platform") respects the sensitive nature of companionship services. We have structured our directory architecture to collect the minimum possible personal data required to connect clients with independent companions for lawful, platonic social and dining engagements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-burgundy">2. Information We Collect</h2>
          <p>We only collect information voluntarily provided by users, including:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li><strong>Concierge Enquiries:</strong> Full name, contact telephone, email address, preferred Bangalore enclave, and event date.</li>
            <li><strong>Age Confirmation:</strong> Affirmative confirmation that the user is at least 18 years of age.</li>
            <li><strong>Technical Analytics:</strong> Anonymized server logs, browser type, and navigation timestamps strictly for platform performance and safety monitoring.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-burgundy">3. Non-Disclosure & Protection of Identity Papers</h2>
          <p>
            We strictly do NOT publish government identity documents, national identification numbers (such as Aadhaar, PAN, or Passport records), private addresses, or banking details of companions or clients. Any verification documents inspected during identity onboarding are encrypted and held in secured, isolated storage.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-burgundy">4. How We Use Information</h2>
          <p>Data gathered via enquiries is used strictly for:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>Scheduling and coordinating lawful, platonic companion reservations.</li>
            <li>Ensuring compliance with platform safety rules and our 18+ adult age restriction.</li>
            <li>Responding to direct client support, safety desk reports, or removal requests.</li>
          </ul>
          <p className="font-semibold text-black">
            We never sell, rent, commercialize, or share user data with third-party advertising brokers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-burgundy">5. Companion Profile Removal & "Right to be Forgotten"</h2>
          <p>
            Any companion or listed individual has an absolute and irrevocable right to have their profile, photograph, or information edited, deactivated, or completely erased immediately. To request expedited removal, email our direct Safety Desk at <a href="mailto:safety@love.in" className="text-burgundy underline font-bold">safety@love.in</a>. All requests are processed within 24 hours.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-burgundy">6. Cookies and Local Storage</h2>
          <p>
            This website utilizes minimal local storage solely to remember user age acknowledgment (18+) to ensure uninterrupted navigation without recurring popups. We do not use intrusive cross-site tracking cookies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-2xl font-bold text-burgundy">7. Contact the Data Protection Officer</h2>
          <p>
            For inquiries regarding privacy, data erasure, or our security framework, please contact our Data Governance Officer at <span className="font-bold text-black">privacy@love.in</span>.
          </p>
        </section>
      </div>
    </div>
  );
};
