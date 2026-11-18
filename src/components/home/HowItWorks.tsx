import React from 'react';
import { Search, UserCheck, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../common/SectionHeading';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: 'I',
      title: 'Explore Curated Profiles',
      description: 'Filter through our glamorous portfolio of companions across Bangalore by neighborhood (Indiranagar, Koramangala, MG Road, etc.) and engagement format.',
      icon: <Search className="w-6 h-6 text-burgundy" />,
    },
    {
      step: 'II',
      title: 'Review Editorial Details',
      description: 'Discover personal background insights, language proficiencies, hourly honorarium guides, adult 18+ confirmations, and etiquette standards.',
      icon: <UserCheck className="w-6 h-6 text-burgundy" />,
    },
    {
      step: 'III',
      title: 'Submit Private Enquiry',
      description: 'Send a confidential enquiry specifying your occasion, date, and venue preference. Our concierge assists with scheduling and seamless coordination.',
      icon: <MessageSquare className="w-6 h-6 text-burgundy" />,
    },
  ];

  return (
    <section className="py-20 bg-ivory border-t border-borderCream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Three-Step Protocol"
          title="How to Engage"
          description="Connecting with distinguished adult companionship in Bengaluru is effortless, discreet, and structured for complete peace of mind."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-[18%] right-[18%] h-[1px] bg-gold-400/40 -translate-y-8 z-0 pointer-events-none" />

          {steps.map((item, index) => (
            <div
              key={index}
              className="relative z-10 bg-white rounded-3xl p-8 border border-borderCream hover:border-gold-400 shadow-luxury transition-all text-center flex flex-col items-center justify-between group"
            >
              <div className="w-16 h-16 rounded-2xl bg-burgundy-50 border border-burgundy-200 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              <span className="font-serif text-3xl font-bold text-burgundy mb-2">
                {item.step}
              </span>

              <h3 className="font-serif text-xl font-bold text-black mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-black leading-relaxed mb-6 font-normal">
                {item.description}
              </p>

              <span className="text-[10px] font-bold uppercase tracking-widest text-burgundy flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-gold-500" />
                <span>Protocol Step {index + 1}</span>
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/companions"
            className="inline-flex items-center gap-2 px-8 py-4 bg-burgundy hover:bg-burgundy-900 border border-gold-400 text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-glow-burgundy"
          >
            <span>Browse Profiles Now</span>
            <ArrowRight className="w-4 h-4 text-gold-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};
