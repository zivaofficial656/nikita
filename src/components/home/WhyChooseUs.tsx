import React from 'react';
import { UserCheck, Eye, HeartHandshake, Sparkles, Lock } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const WhyChooseUs: React.FC = () => {
  const privileges = [
    {
      icon: <Lock className="w-6 h-6 text-gold-400" />,
      title: 'Discreet Private Browsing',
      description: 'Your privacy is non-negotiable. Zero public logging of private identities, unlisted encrypted communication channels, and complete confidentiality for all patrons.',
    },
    {
      icon: <UserCheck className="w-6 h-6 text-gold-400" />,
      title: 'Autonomous Adult Consent',
      description: 'Every companion listed is an independent adult exercising full autonomy over their social calendar, client preferences, and conversational boundaries.',
    },
    {
      icon: <Eye className="w-6 h-6 text-gold-400" />,
      title: 'Transparent Honorarium Guides',
      description: 'No hidden brokerages or ambiguous charges. Review clear hourly honorarium guides, background insights, and language proficiencies upfront.',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-gold-400" />,
      title: 'Refined Platonic Standards',
      description: 'Full adherence to statutory Indian laws. We enforce a zero-tolerance non-sexual code of conduct, protecting both patrons and companions at all times.',
    },
  ];

  return (
    <section className="py-20 bg-burgundy-950 text-ivory relative overflow-hidden">
      {/* Subtle gold ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-burgundy-800/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          subtitle="Exclusive Directory Standards"
          title="The Love Privilege"
          description="A sophisticated standard of companionship founded on mutual elegance, safety, and uncompromising exclusivity in Bengaluru."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {privileges.map((item, idx) => (
            <div
              key={idx}
              className="bg-burgundy-900/60 rounded-3xl p-7 border border-gold-500/30 hover:border-gold-400 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-burgundy-950 border border-gold-400/40 flex items-center justify-center mb-6 shadow-inner">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-ivory/90 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gold-500/20 text-[10px] font-bold uppercase tracking-widest text-gold-400 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-gold-400" />
                <span>Members Guarantee</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
