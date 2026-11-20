import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceItem } from '../data/services';
import { Clock, CheckCircle2, MessageSquare, ArrowUpRight, Info } from 'lucide-react';
import { trackWhatsAppClick, trackBookingOpen } from '../utils/analytics';

interface ServiceCardProps {
  service: ServiceItem;
  onBookService: (serviceName: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onBookService }) => {
  const whatsappUrl = `https://wa.me/919693264878?text=Hello%20Nikita%20Spa%2C%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(service.name)}%20at%20your%20Koramangala%20branch.`;

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-cream-dark shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col h-full">
      {/* Service Image with Tag */}
      <Link to={`/services/${service.id}`} className="relative h-60 sm:h-64 overflow-hidden bg-cream block">
        <img
          src={service.image}
          alt={`${service.name} at Nikita Spa Koramangala`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {/* Category Tag */}
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-ivory/95 backdrop-blur-sm text-olive text-xs font-medium tracking-wide shadow-sm">
          {service.tag}
        </span>

        {/* Duration badge */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs text-ivory font-medium bg-charcoal/70 backdrop-blur-sm px-3 py-1 rounded-full">
          <Clock className="w-3.5 h-3.5 text-gold" />
          <span>{service.durationOptions.join(' / ')}</span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-5">
        <div className="space-y-3">
          <Link to={`/services/${service.id}`}>
            <h3 className="font-serif text-2xl font-medium text-olive-dark group-hover:text-gold-dark transition-colors">
              {service.name}
            </h3>
          </Link>
          
          <p className="text-charcoal-muted text-sm leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Key benefits list */}
          <div className="pt-2 space-y-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-muted block">
              Key Highlights:
            </span>
            <ul className="space-y-1">
              {service.benefits.slice(0, 3).map((benefit, idx) => (
                <li key={idx} className="text-xs text-charcoal-light flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sage shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing notice & action CTAs */}
        <div className="pt-4 border-t border-cream-dark space-y-3">
          <div className="flex items-center justify-between text-xs text-charcoal-muted">
            <Link 
              to={`/services/${service.id}`}
              className="text-olive hover:text-gold font-medium inline-flex items-center gap-1"
            >
              <Info className="w-3 h-3" />
              <span>Full Details</span>
            </Link>
            <span className="font-medium text-charcoal-muted">Inquire for Slot</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                trackBookingOpen(`card_${service.id}`);
                onBookService(service.name);
              }}
              className="w-full py-2.5 px-3 rounded-full bg-olive text-ivory text-xs font-medium hover:bg-olive-light transition-colors text-center flex items-center justify-center gap-1"
            >
              <span>Book Slot</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick(`card_${service.id}`)}
              className="w-full py-2.5 px-3 rounded-full bg-cream hover:bg-cream-dark text-olive-dark text-xs font-medium transition-colors text-center flex items-center justify-center gap-1.5 border border-cream-dark"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
