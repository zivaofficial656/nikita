import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Shield, Calendar, Users } from 'lucide-react';
import { FAQItem } from '../../types';

interface FAQAccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  allowMultiple = false,
  className = '',
}) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '']);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  const filteredItems = activeCategory === 'all'
    ? items
    : items.filter((item) => item.category === activeCategory);

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {[
          { key: 'all', label: 'All Questions', icon: <HelpCircle className="w-3.5 h-3.5" /> },
          { key: 'safety', label: 'Safety & 18+ Rules', icon: <Shield className="w-3.5 h-3.5" /> },
          { key: 'booking', label: 'Booking & Rates', icon: <Calendar className="w-3.5 h-3.5" /> },
          { key: 'etiquette', label: 'Etiquette & Conduct', icon: <Users className="w-3.5 h-3.5" /> },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveCategory(tab.key)}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
              activeCategory === tab.key
                ? 'bg-burgundy text-white shadow-md border border-gold-400/50'
                : 'bg-white border border-borderCream text-black font-bold hover:border-gold-400'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5">
        {filteredItems.map((item) => {
          const isOpen = openIds.includes(item.id);
          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-white border-gold-400 shadow-md'
                  : 'bg-white/80 border-borderCream hover:border-gold-300'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(item.id)}
                aria-expanded={isOpen}
                className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-serif text-base sm:text-lg font-bold text-black">
                  {item.question}
                </span>
                <span
                  className={`w-8 h-8 rounded-full border border-borderCream flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-burgundy-50 border-burgundy-200 text-burgundy' : 'text-black'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-black leading-relaxed border-t border-borderCream/60 animate-fade-in font-normal">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
