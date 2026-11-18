import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CATEGORIES_DATA } from '../../data/categories';
import { COMPANIONS_DATA } from '../../data/companions';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { ProfileCard } from '../../components/profiles/ProfileCard';
import { EnquiryModal } from '../../components/forms/EnquiryModal';
import { CheckCircle2, ArrowRight, PhoneCall, Sparkles } from 'lucide-react';

export const CategoryDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const category = CATEGORIES_DATA.find((c) => c.slug === slug);

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="font-serif text-3xl font-bold text-black mb-4">Category Not Found</h2>
        <p className="text-black text-sm mb-6 font-normal">The requested companionship category does not exist.</p>
        <Link
          to="/categories"
          className="px-6 py-3 bg-burgundy text-white rounded-full text-xs font-bold uppercase tracking-widest"
        >
          View All Categories
        </Link>
      </div>
    );
  }

  const matchingCompanions = COMPANIONS_DATA.filter((c) =>
    c.categorySlugs.includes(category.slug)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: 'Categories', path: '/categories' },
          { label: category.name },
        ]}
      />

      {/* Hero Header */}
      <div className="mt-4 mb-12 bg-white rounded-3xl p-6 sm:p-10 border border-gold-300 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-xs font-bold text-burgundy uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Strictly Platonic & Consensual (18+)</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
            {category.name}
          </h1>

          <p className="text-sm sm:text-base font-semibold text-burgundy italic">
            "{category.tagline}"
          </p>

          <p className="text-sm sm:text-base text-black leading-relaxed font-normal">
            {category.overview}
          </p>

          <div className="pt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3.5 bg-burgundy hover:bg-burgundy-900 border border-gold-400 text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-glow-burgundy flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-gold-400" />
              <span>Enquire for {category.name}</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 relative rounded-3xl overflow-hidden aspect-[4/3] bg-neutral-900 border border-borderCream shadow-md flex items-center justify-center">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-contain object-center"
          />
        </div>
      </div>

      {/* Features & Ideal For Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-ivory-100 rounded-3xl p-6 sm:p-8 border border-borderCream">
          <h3 className="font-serif text-2xl font-bold text-black mb-4">
            Highlights of this Experience
          </h3>
          <ul className="space-y-3">
            {category.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-black">
                <CheckCircle2 className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" />
                <span className="font-semibold text-black">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-ivory-100 rounded-3xl p-6 sm:p-8 border border-borderCream">
          <h3 className="font-serif text-2xl font-bold text-black mb-4">
            Ideal Occasions & Gatherings
          </h3>
          <ul className="space-y-3">
            {category.idealFor.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-black">
                <span className="w-2 h-2 rounded-full bg-gold-500 flex-shrink-0 mt-1.5" />
                <span className="font-semibold text-black">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Companions in this category */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-black">
              Companions Specializing in {category.name}
            </h2>
            <p className="text-xs sm:text-sm text-black mt-1 font-medium">
              Showing {matchingCompanions.length} editorial companion profile(s)
            </p>
          </div>
          <Link
            to="/companions"
            className="text-xs font-bold uppercase tracking-wider text-burgundy hover:text-burgundy-900 flex items-center gap-1"
          >
            <span>View Full Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {matchingCompanions.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {matchingCompanions.map((comp) => (
              <ProfileCard key={comp.id} companion={comp} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-3xl border border-borderCream p-8">
            <p className="text-sm text-black font-medium">No companions currently listed in this specific category.</p>
          </div>
        )}
      </div>

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
