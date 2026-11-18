import React, { useState } from 'react';
import { servicesData, ServiceItem } from '../../data/services';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionHeading } from '../../components/common/SectionHeading';
import { EnquiryModal } from '../../components/forms/EnquiryModal';
import { 
  Sparkles, 
  CheckCircle2, 
  PhoneCall, 
  ShieldCheck 
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumb items={[{ label: 'Services & Treatments' }]} />

      <div className="mt-4 mb-12">
        <SectionHeading
          subtitle="Curated Spa Therapies"
          title="Spa & Wellness Experiences"
          description="Explore our bespoke massage and wellness offerings at Nikita Spa in Koramangala, Bengaluru. Every treatment is delivered with authentic touch, absolute hygiene, and peaceful relaxation."
          align="left"
        />
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((srv: ServiceItem) => (
          <div
            key={srv.id}
            className="group bg-white rounded-3xl p-6 sm:p-7 border border-borderCream hover:border-gold-400 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Service Local Image Banner (No Cropping) */}
              <div className="relative h-52 rounded-2xl overflow-hidden mb-5 bg-neutral-900 border border-borderCream flex items-center justify-center">
                <img
                  src={srv.image}
                  alt={srv.name}
                  loading="lazy"
                  className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-xl bg-white/95 backdrop-blur-md border border-gold-300 flex items-center justify-center shadow-md text-[10px] font-bold text-burgundy">
                  <Sparkles className="w-3.5 h-3.5 text-burgundy mr-1 inline" />
                  <span>{srv.tag}</span>
                </div>
              </div>

              <span className="text-[10px] font-bold uppercase tracking-widest text-burgundy block mb-1">
                {srv.tag}
              </span>

              <h3 className="font-serif text-2xl font-bold text-black mb-3">
                {srv.name}
              </h3>

              <p className="text-sm text-black leading-relaxed mb-6 font-normal">
                {srv.shortDescription}
              </p>

              <div className="space-y-2 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-black block">Key Highlights:</span>
                {srv.benefits.map((feat: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-black">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold text-black">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 bg-ivory-100 rounded-2xl border border-borderCream mb-6 text-xs text-black">
                <strong className="text-black font-bold">Recommended For:</strong> {srv.recommendedFor}
              </div>
            </div>

            <div className="pt-4 border-t border-borderCream flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-black block">Duration Options</span>
                <span className="text-xs font-bold text-burgundy">{srv.durationOptions.join(' / ')}</span>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-5 py-2.5 rounded-full bg-burgundy hover:bg-burgundy-900 border border-gold-400 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
              >
                Enquire
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Code of Conduct Banner */}
      <div className="mt-16 bg-gradient-to-r from-burgundy-950 via-burgundy to-burgundy-950 rounded-3xl p-8 sm:p-12 text-white border border-gold-400/50 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-300">
            <ShieldCheck className="w-4 h-4 text-gold-400" />
            <span>Strict Wellness & Hygiene Standards</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Professional & Therapeutic Excellence
          </h3>
          <p className="text-xs sm:text-sm text-ivory/95 leading-relaxed font-normal">
            All therapies at Nikita Spa are strictly professional, therapeutic, and hygiene-certified. Our therapists provide soothing, unhurried care in private sanitised suites.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-8 py-4 bg-gold-500 hover:bg-gold-600 border border-gold-300 text-black font-bold rounded-full text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-glow-gold flex items-center gap-2 flex-shrink-0"
        >
          <PhoneCall className="w-4 h-4 text-black" />
          <span>Connect with Concierge</span>
        </button>
      </div>

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
