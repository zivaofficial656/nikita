import React from 'react';
import { Link } from 'react-router-dom';
import { 
  UserCheck, 
  Wine, 
  Compass, 
  Utensils, 
  Sparkles, 
  Briefcase, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { CategoryItem } from '../../types';

interface CategoryCardProps {
  category: CategoryItem;
  className?: string;
}

const iconMap: Record<string, React.ReactNode> = {
  UserCheck: <UserCheck className="w-6 h-6 text-burgundy" />,
  Wine: <Wine className="w-6 h-6 text-burgundy" />,
  Compass: <Compass className="w-6 h-6 text-burgundy" />,
  Utensils: <Utensils className="w-6 h-6 text-burgundy" />,
  Sparkles: <Sparkles className="w-6 h-6 text-burgundy" />,
  Briefcase: <Briefcase className="w-6 h-6 text-burgundy" />,
};

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, className = '' }) => {
  return (
    <article
      className={`group bg-white rounded-3xl p-5 sm:p-6 border border-borderCream hover:border-gold-400 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between ${className}`}
    >
      <div>
        {/* Local Category Image (No Cropping, Complete Image Visible) */}
        <div className="relative h-48 rounded-2xl overflow-hidden mb-4 bg-neutral-900 border border-borderCream flex items-center justify-center">
          <img
            src={category.image}
            alt={category.name}
            loading="lazy"
            className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-102"
          />
          <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md border border-gold-300 flex items-center justify-center shadow-md">
            {iconMap[category.iconName] || <Sparkles className="w-5 h-5 text-burgundy" />}
          </div>
          <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-widest text-gold-300 bg-burgundy/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-gold-400/60 shadow-sm">
            Platonic / 18+
          </span>
        </div>

        {/* Category Card Title - Pure Black */}
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-black group-hover:text-burgundy transition-colors leading-tight mb-1">
          <Link to={`/categories/${category.slug}`}>
            {category.name}
          </Link>
        </h3>

        <p className="text-xs font-bold text-burgundy uppercase tracking-wider mb-2">
          {category.tagline}
        </p>

        <p className="text-sm text-black leading-relaxed mb-4 font-normal">
          {category.description}
        </p>

        <ul className="space-y-2 mb-6">
          {category.features.slice(0, 3).map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs text-black">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 flex-shrink-0 mt-0.5" />
              <span className="font-semibold text-black">{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-borderCream">
        <Link
          to={`/categories/${category.slug}`}
          className="inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-widest text-black hover:text-burgundy transition-colors"
        >
          <span>Explore Category</span>
          <ArrowRight className="w-4 h-4 text-gold-600 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
};
