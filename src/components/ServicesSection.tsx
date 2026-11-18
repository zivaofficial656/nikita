import React, { useState } from 'react';
import { servicesData } from '../data/services';
import { ServiceCard } from './ServiceCard';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServicesSectionProps {
  onBookService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookService }) => {
  const [filter, setFilter] = useState<'all' | 'massage' | 'specialized'>('all');

  const filteredServices = servicesData.filter((svc) => {
    if (filter === 'massage') {
      return svc.id.includes('massage');
    }
    if (filter === 'specialized') {
      return svc.id === 'couple-massage' || svc.id === 'relaxation-therapy' || svc.id === 'thai-massage';
    }
    return true;
  });

  return (
    <section id="services" className="py-20 sm:py-28 bg-cream/40 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/15 text-olive text-xs font-medium tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Curated Therapies
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-olive-dark font-normal tracking-tight mb-4">
            Harmonious Wellness for Body & Mind
          </h2>
          
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-light">
            Explore our curated wellness therapies designed to ease accumulated physical fatigue, improve flexibility, and awaken serene mental stillness at Nikita Spa, Koramangala.
          </p>

          {/* Filter Pills */}
          <div className="inline-flex items-center p-1.5 rounded-full bg-cream border border-cream-dark mt-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === 'all'
                  ? 'bg-olive text-ivory shadow-sm'
                  : 'text-charcoal-muted hover:text-charcoal'
              }`}
            >
              All Treatments ({servicesData.length})
            </button>
            <button
              onClick={() => setFilter('massage')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === 'massage'
                  ? 'bg-olive text-ivory shadow-sm'
                  : 'text-charcoal-muted hover:text-charcoal'
              }`}
            >
              Classic Massages
            </button>
            <button
              onClick={() => setFilter('specialized')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === 'specialized'
                  ? 'bg-olive text-ivory shadow-sm'
                  : 'text-charcoal-muted hover:text-charcoal'
              }`}
            >
              Signature & Suites
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onBookService={onBookService}
            />
          ))}
        </div>

        {/* View all detailed treatments link */}
        <div className="mt-14 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-olive-dark hover:text-gold transition-colors group"
          >
            <span>Learn more about service procedures, prep and custom therapies</span>
            <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};
