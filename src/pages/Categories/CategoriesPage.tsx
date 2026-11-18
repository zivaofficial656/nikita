import React from 'react';
import { CATEGORIES_DATA } from '../../data/categories';
import { CategoryCard } from '../../components/categories/CategoryCard';
import { Breadcrumb } from '../../components/common/Breadcrumb';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Sparkles } from 'lucide-react';

export const CategoriesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumb items={[{ label: 'Companionship Categories' }]} />

      <div className="mt-4 mb-12">
        <SectionHeading
          subtitle="Tailored Accompaniment"
          title="Companionship Formats & Categories"
          description="Explore our specialized companionship categories curated for Michelin-caliber dinners, red carpet galas, international technology conventions, and luxury plantation retreats in Karnataka. Strictly platonic and lawful."
          align="left"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {CATEGORIES_DATA.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>

      {/* Safety and Conduct Notice Box */}
      <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-burgundy-950 via-burgundy to-burgundy-950 text-white border border-gold-400/50 shadow-xl">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-300 mb-2">
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span>Non-Sexual Platform Standard</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
          Strictly Non-Sexual, Consensual Adult Engagements
        </h3>
        <p className="text-sm text-ivory/95 leading-relaxed max-w-3xl font-normal">
          Love does not broker, market, or permit commercial sex work, prostitution, or physical solicitation. All listed companions offer solely public conversational, dining, and social accompaniment between consenting adults. Violation of boundaries results in immediate banishment and potential reporting.
        </p>
      </div>
    </div>
  );
};
