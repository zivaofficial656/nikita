import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { GUIDES_DATA } from '../../data/guides';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { Clock, ArrowLeft, CheckCircle2, ShieldCheck } from 'lucide-react';

export const GuideDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const guide = GUIDES_DATA.find((g) => g.slug === slug);

  if (!guide) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="font-serif text-3xl font-bold text-black mb-4">Guide Not Found</h2>
        <p className="text-black text-sm mb-6 font-normal">The requested etiquette guide could not be located.</p>
        <Link
          to="/guides"
          className="px-6 py-3 bg-burgundy text-white rounded-full text-xs font-bold uppercase tracking-widest"
        >
          Return to All Guides
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: 'Etiquette & Guides', path: '/guides' },
          { label: guide.title },
        ]}
      />

      <div className="mt-4 mb-6">
        <Link
          to="/guides"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-burgundy hover:text-burgundy-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-gold-500" />
          <span>Back to All Guides</span>
        </Link>
      </div>

      <article className="bg-white rounded-3xl p-6 sm:p-10 border border-gold-300 shadow-luxury space-y-8">
        {/* Featured Editorial Cover Image (No Cropping) */}
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-neutral-900 border border-borderCream flex items-center justify-center">
          <img
            src={guide.image}
            alt={guide.title}
            className="w-full h-full object-contain object-center"
          />
          <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-burgundy/95 backdrop-blur-md border border-gold-400/60 text-xs font-bold text-gold-300 uppercase tracking-wider shadow-sm">
            {guide.category}
          </span>
        </div>

        <header className="space-y-4 border-b border-borderCream pb-8">
          <div className="flex items-center gap-3">
            <span className="text-xs text-black flex items-center gap-1 font-semibold">
              <Clock className="w-3.5 h-3.5" />
              <span>{guide.readTime}</span>
            </span>
            <span className="text-xs text-black font-semibold">• {guide.date}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
            {guide.title}
          </h1>

          <p className="text-base text-burgundy font-medium italic">
            "{guide.summary}"
          </p>
        </header>

        {/* Article Body */}
        <div className="space-y-5 text-sm sm:text-base text-black leading-relaxed font-normal">
          {guide.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Essential Protocol Takeaways */}
        <div className="p-6 sm:p-8 rounded-3xl bg-ivory-100 border border-gold-300 space-y-4">
          <h3 className="font-serif text-xl font-bold text-black flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-burgundy" />
            <span>Essential Etiquette Standards</span>
          </h3>
          <ul className="space-y-2.5">
            {guide.tips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-black">
                <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                <span className="font-semibold text-black">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Footer */}
        <div className="pt-6 border-t border-borderCream flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-black font-semibold">
            Ready to explore verified companions in Bangalore?
          </span>
          <Link
            to="/companions"
            className="px-8 py-3.5 bg-burgundy hover:bg-burgundy-900 border border-gold-400 text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md"
          >
            Browse Companions Gallery
          </Link>
        </div>
      </article>
    </div>
  );
};
