import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, HeartHandshake, Eye, Lock, ArrowRight } from 'lucide-react';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionHeading } from '../../components/common/SectionHeading';
import { siteImages } from '../../data/images';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      <Breadcrumb items={[{ label: 'About Directory' }]} />

      {/* Hero / Mission */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-gold-400 text-black text-xs font-bold uppercase tracking-wider shadow-sm">
            <img
              src="/images/nikita-spa-logo.png"
              alt="Love"
              className="w-5 h-5 object-contain object-center"
            />
            <span>The Story of Love</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Elevating Companionship to an Art of Elegance & Intellect
          </h1>

          <p className="text-base sm:text-lg text-black leading-relaxed font-normal">
            Founded in Bengaluru, <strong className="text-black font-semibold">Love</strong> was conceived to establish a glamorous, transparent companionship directory for accomplished individuals who value cultivated presence without compromise.
          </p>

          <p className="text-base text-black leading-relaxed font-normal">
            We set out to remove the opacity and misrepresentation common elsewhere, creating a sophisticated adult-only sanctuary where boundaries are strictly respected, honorariums are transparent, and every encounter is enriched by genuine charisma and intellect.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              to="/companions"
              className="px-8 py-4 bg-burgundy hover:bg-burgundy-900 border border-gold-400 text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-glow-burgundy flex items-center gap-2"
            >
              <span>Explore Companion Gallery</span>
              <ArrowRight className="w-4 h-4 text-gold-300" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white border border-gold-400 hover:bg-ivory-100 text-black rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-sm"
            >
              Contact Concierge Desk
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="rounded-[2.5rem] overflow-hidden border border-gold-400 shadow-2xl bg-neutral-900 aspect-[4/5] flex flex-col justify-between">
            <div className="relative w-full flex-1 overflow-hidden flex items-center justify-center">
              <img
                src={siteImages.about}
                alt="Love Culture & Dining"
                className="w-full h-full object-contain object-center"
              />
            </div>
            <div className="p-5 bg-burgundy text-white border-t border-gold-400/50">
              <span className="text-[10px] uppercase tracking-widest text-gold-300 font-bold block mb-1">
                Directory Creed
              </span>
              <p className="font-serif text-lg sm:text-xl font-bold italic">
                "Magnetic presence. Uncompromising dignity."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Principles */}
      <div>
        <SectionHeading
          subtitle="Our Foundation"
          title="The Pillars We Honor"
          description="Every policy, listing, and interaction on Love is guided by four foundational commitments."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-7 rounded-3xl bg-white border border-borderCream shadow-luxury space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-burgundy-50 border border-burgundy-200 flex items-center justify-center text-burgundy">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-black">Strict Platonic Standard</h3>
            <p className="text-xs sm:text-sm text-black leading-relaxed font-normal">
              We facilitate solely lawful, non-sexual social, dining, and event companionship. Prostitution, commercial sexual exploitation, and solicitation are strictly barred.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-borderCream shadow-luxury space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-burgundy-50 border border-burgundy-200 flex items-center justify-center text-burgundy">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-black">Discretion & Privacy</h3>
            <p className="text-xs sm:text-sm text-black leading-relaxed font-normal">
              We never broadcast client identities, telephone records, or private data. Personal information is safeguarded with stringent security protocols.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-borderCream shadow-luxury space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-burgundy-50 border border-burgundy-200 flex items-center justify-center text-burgundy">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-black">Voluntary Consent</h3>
            <p className="text-xs sm:text-sm text-black leading-relaxed font-normal">
              Every companion retains absolute autonomy to accept, decline, or adjust engagement parameters. Coercion is met with permanent exclusion.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-borderCream shadow-luxury space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-burgundy-50 border border-burgundy-200 flex items-center justify-center text-burgundy">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-black">Honesty in Verification</h3>
            <p className="text-xs sm:text-sm text-black leading-relaxed font-normal">
              We never publish deceptive "100% verified" badges unless government ID inspection has been personally administered. Demo profiles are transparently noted.
            </p>
          </div>
        </div>
      </div>

      {/* Safety & Profile Removal Statement */}
      <div className="p-8 sm:p-10 rounded-3xl bg-burgundy-50 border border-burgundy-200">
        <h3 className="font-serif text-2xl font-bold text-black mb-3">
          Protection of Companions & Expedited Removal
        </h3>
        <p className="text-sm text-black leading-relaxed max-w-4xl mb-4 font-normal">
          Love firmly supports the rights and safety of every listed individual. Any companion wishing to remove their profile, update details, or report misconduct can email our direct Safety Desk at <a href="mailto:safety@love.in" className="text-burgundy font-bold underline">safety@love.in</a> for immediate action within 24 hours.
        </p>
        <span className="text-xs font-bold uppercase tracking-wider text-burgundy-800">
          Strict Compliance with Indian IT Intermediary Rules & Protection Acts
        </span>
      </div>
    </div>
  );
};
