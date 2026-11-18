import React from 'react';
import { Star, Quote, AlertCircle } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../../data/testimonials';
import { SectionHeading } from '../common/SectionHeading';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-beige/30 border-t border-borderCream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Editorial Design Showcase"
          title="Sample Client Impressions"
          description="A demonstration of our upcoming verified reviews interface. In accordance with honesty standards, the reviews below are design placeholders and do not represent genuine client submissions."
        />

        {/* Clear Transparency Banner */}
        <div className="max-w-2xl mx-auto mb-10 p-4 rounded-2xl bg-burgundy-50 border border-burgundy-200 flex items-center justify-center gap-2.5 text-xs text-burgundy-900 text-center font-medium">
          <AlertCircle className="w-4 h-4 text-burgundy-700 flex-shrink-0" />
          <span>Notice: The testimonials below illustrate the UI layout for future verified member feedback.</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-borderCream shadow-luxury flex flex-col justify-between relative hover:border-gold-400 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-gold-500 fill-gold-500" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-burgundy-50 border border-burgundy-200 text-[10px] font-bold uppercase tracking-widest text-burgundy-700">
                    Sample UI
                  </span>
                </div>

                <Quote className="w-8 h-8 text-burgundy-200 mb-2" />

                <p className="text-sm text-black italic leading-relaxed mb-6 font-normal">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-borderCream">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-sm font-bold text-black">
                      {t.clientName}
                    </h4>
                    <span className="text-[11px] text-black font-medium block">
                      {t.location}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-burgundy-700 font-bold block uppercase tracking-wider">
                      Accompanied By
                    </span>
                    <span className="text-xs font-semibold text-black">
                      {t.companionName}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
