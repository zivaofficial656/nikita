import React from 'react';
import { Link } from 'react-router-dom';
import { GUIDES_DATA } from '../../data/guides';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Clock, ArrowRight } from 'lucide-react';

export const GuidesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumb items={[{ label: 'Etiquette & Guides' }]} />

      <div className="mt-4 mb-12">
        <SectionHeading
          subtitle="Refined Knowledge"
          title="Bangalore Companionship Guides & Etiquette"
          description="Essential reading on fine dining decorum, international corporate delegate hosting, high-society gala standards, and safety principles for an elevated companionship experience in Bengaluru."
          align="left"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {GUIDES_DATA.map((guide) => (
          <article
            key={guide.id}
            className="group bg-white rounded-3xl p-6 sm:p-7 border border-borderCream hover:border-gold-400 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Local Guide Image Banner (No Cropping) */}
              <div className="relative h-56 rounded-2xl overflow-hidden mb-5 bg-neutral-900 border border-borderCream flex items-center justify-center">
                <img
                  src={guide.image}
                  alt={guide.title}
                  loading="lazy"
                  className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-102"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-burgundy/95 backdrop-blur-md border border-gold-400/60 text-xs font-bold text-gold-300 uppercase tracking-wider">
                  {guide.category}
                </span>
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-xs text-white flex items-center gap-1 border border-white/20">
                  <Clock className="w-3.5 h-3.5 text-gold-400" />
                  <span>{guide.readTime}</span>
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-black hover:text-burgundy transition-colors mb-3">
                <Link to={`/guides/${guide.slug}`}>{guide.title}</Link>
              </h3>

              <p className="text-sm text-black leading-relaxed mb-6 font-normal">
                {guide.summary}
              </p>

              <div className="space-y-1.5 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-black block">Key Protocol Tips:</span>
                {guide.tips.slice(0, 2).map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-black">
                    <span className="text-burgundy font-bold">•</span>
                    <span className="font-semibold text-black">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-borderCream flex items-center justify-between">
              <span className="text-xs text-black font-semibold">{guide.date}</span>
              <Link
                to={`/guides/${guide.slug}`}
                className="text-xs font-bold uppercase tracking-wider text-black hover:text-burgundy flex items-center gap-1.5 transition-colors"
              >
                <span>Read Full Guide</span>
                <ArrowRight className="w-4 h-4 text-gold-600" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
