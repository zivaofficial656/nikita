import React from 'react';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionHeading } from '../../components/common/SectionHeading';
import { FAQAccordion } from '../../components/home/FAQAccordion';
import { FAQ_DATA } from '../../data/faq';
import { HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FAQPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumb items={[{ label: 'Frequently Asked Questions' }]} />

      <div className="mt-4 mb-12">
        <SectionHeading
          subtitle="Clarity & Compliance"
          title="Frequently Asked Questions"
          description="Everything you need to know regarding Love: our non-sexual platonic ethos, adult age requirements (18+), booking mechanics, verification standards, and privacy."
          align="left"
        />
      </div>

      <FAQAccordion items={FAQ_DATA} />

      {/* Additional Help CTA */}
      <div className="mt-16 bg-white rounded-3xl p-8 border border-borderCream text-center max-w-3xl mx-auto shadow-sm">
        <HelpCircle className="w-10 h-10 text-burgundy mx-auto mb-3" />
        <h3 className="font-serif text-2xl font-bold text-black mb-2">
          Still Have Questions?
        </h3>
        <p className="text-sm text-black max-w-md mx-auto mb-6 font-normal">
          Our concierge team is available to assist you with special requests, custom corporate itineraries, or etiquette clarifications.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-burgundy hover:bg-burgundy-900 border border-gold-400 text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md"
        >
          <span>Contact Concierge Desk</span>
        </Link>
      </div>
    </div>
  );
};
