import React, { useState } from 'react';
import { faqData, FAQItem } from '../data/faq';
import { Sparkles, ChevronDown, MessageSquare } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-28 bg-ivory">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/15 text-olive text-xs font-medium tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Clear Answers
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-olive-dark font-normal tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-light">
            Everything you need to know about reserving your treatment and preparing for your visit to Nitiya Spa, Koramangala.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item: FAQItem, idx: number) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-cream-dark bg-white overflow-hidden transition-all duration-300 shadow-soft"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-medium text-olive-dark">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-cream flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-olive text-ivory' : 'text-charcoal-muted'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 text-sm sm:text-base text-charcoal-muted leading-relaxed font-light border-t border-cream/80 animate-fade-in">
                    <p className="pt-4">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra question prompt */}
        <div className="mt-12 text-center p-6 rounded-3xl bg-cream/50 border border-cream-dark flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif text-base font-medium text-olive-dark">Have an unlisted question?</h4>
            <p className="text-xs text-charcoal-muted">Our Koramangala concierge is ready to help via WhatsApp.</p>
          </div>
          <a
            href="https://wa.me/919693264878?text=Hello%20Nitiya%20Spa%2C%20I%20have%20a%20question%20regarding%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-olive text-ivory text-xs font-medium hover:bg-olive-light transition-colors shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5 text-gold" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
