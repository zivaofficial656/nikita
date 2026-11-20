import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { servicesData } from '../data/services';
import { SEOHead } from '../components/SEOHead';
import { getServiceSchema, getBreadcrumbSchema, getLocalBusinessSchema } from '../utils/seoSchema';
import { 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  MapPin, 
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { trackCallClick, trackWhatsAppClick, trackBookingOpen } from '../utils/analytics';

interface ServiceDetailProps {
  onBookService: (serviceName: string) => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ onBookService }) => {
  const { serviceId } = useParams<{ serviceId: string }>();

  const service = servicesData.find((s) => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Related Services (excluding current)
  const relatedServices = servicesData.filter((s) => s.id !== service.id).slice(0, 3);

  // Dynamic Keywords based on genuine service
  const serviceKeywords = `${service.name.toLowerCase()} in bangalore, ${service.name.toLowerCase()} in koramangala, best ${service.name.toLowerCase()} bengaluru, spa in koramangala, luxury spa bangalore, body massage in koramangala bengaluru`;

  // Schema bundle
  const schemas = [
    getLocalBusinessSchema(),
    getServiceSchema(service),
    getBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: service.name, path: `/services/${service.id}` }
    ])
  ];

  const handleBooking = () => {
    trackBookingOpen(service.name);
    onBookService(service.name);
  };

  const handleWhatsApp = () => {
    trackWhatsAppClick('service_detail_page', service.name);
  };

  const handleCall = () => {
    trackCallClick('service_detail_page');
  };

  return (
    <>
      <SEOHead
        title={`${service.name} in Koramangala Bengaluru | Nikita Spa`}
        description={`Experience professional ${service.name} at Nikita Spa, Koramangala, Bengaluru. ${service.shortDescription} Private suites, hygienic setup, certified therapists.`}
        keywords={serviceKeywords}
        canonical={`/services/${service.id}`}
        ogImage={service.image}
        ogType="article"
        schema={schemas}
      />

      <main className="pt-28 pb-20">
        {/* Breadcrumb Navigation Bar */}
        <div className="bg-cream/40 border-b border-cream-dark py-3.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs sm:text-sm text-charcoal-muted">
              <Link to="/" className="hover:text-olive-dark transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-olive-dark transition-colors">Services</Link>
              <span>/</span>
              <span className="text-olive-dark font-medium">{service.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero & Detail Overview */}
        <section className="py-12 sm:py-16 bg-ivory">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* Left Column: Imagery & Duration Badge */}
              <div className="lg:col-span-5 space-y-6">
                <div className="relative rounded-3xl overflow-hidden shadow-soft border border-cream-dark bg-white aspect-[4/3] group">
                  <img
                    src={service.image}
                    alt={`${service.name} treatment at Nikita Spa Koramangala`}
                    width="800"
                    height="600"
                    loading="eager"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-ivory/90 backdrop-blur-md text-olive-dark text-xs font-semibold shadow-xs border border-cream-dark">
                    {service.tag}
                  </div>
                </div>

                {/* Quick Info Box */}
                <div className="bg-cream/40 rounded-2xl p-6 border border-cream-dark space-y-4 text-xs sm:text-sm text-charcoal-muted">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-olive shrink-0" />
                    <span><strong>Duration Options:</strong> {service.durationOptions.join(' or ')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-gold shrink-0" />
                    <span><strong>Location:</strong> Koramangala, Bengaluru (Private Sanitized Suite)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Hygiene Standard:</strong> 100% sanitized suites & single-use linens</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Detailed Therapy Information */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/15 text-olive text-xs font-medium tracking-wide uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-gold" />
                  Koramangala Wellness Sanctuary
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-olive-dark font-normal tracking-tight">
                  {service.name} in Koramangala, Bengaluru
                </h1>

                <p className="text-base sm:text-lg text-charcoal-light leading-relaxed font-light">
                  {service.fullDescription}
                </p>

                {/* Benefits */}
                <div className="pt-2">
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-3">
                    Key Health & Relaxation Benefits:
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-muted">
                        <CheckCircle2 className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended For */}
                <div className="p-4 rounded-2xl bg-white border border-cream-dark shadow-soft text-xs sm:text-sm text-charcoal-muted">
                  <strong className="text-olive-dark font-semibold block mb-1">Recommended For:</strong>
                  <span>{service.recommendedFor}</span>
                </div>

                {/* Direct Action CTAs */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={handleBooking}
                    className="py-3.5 px-6 rounded-full bg-olive text-ivory text-xs sm:text-sm font-medium hover:bg-olive-light transition-colors shadow-soft flex items-center gap-2"
                  >
                    <span>Reserve {service.name}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/919693264878?text=Hello%20Nikita%20Spa%2C%20I%20would%20like%20to%20inquire%20about%20booking%20the%20${encodeURIComponent(service.name)}%20at%20your%20Koramangala%20branch.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleWhatsApp}
                    className="py-3.5 px-5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-medium transition-colors shadow-soft flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-white" />
                    <span>WhatsApp Inquiry</span>
                  </a>

                  <a
                    href="tel:9693264878"
                    onClick={handleCall}
                    className="py-3.5 px-5 rounded-full bg-cream hover:bg-cream-dark text-olive-dark text-xs sm:text-sm font-medium transition-colors border border-cream-dark flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-olive" />
                    <span>Call Now</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Related Therapies Section */}
        <section className="py-16 bg-cream/30 border-t border-cream-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gold mb-1 block">
                  Complementary Therapies
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-olive-dark font-normal">
                  Explore Other Signature Treatments
                </h3>
              </div>
              <Link
                to="/services"
                className="text-xs sm:text-sm font-medium text-olive hover:text-gold transition-colors inline-flex items-center gap-1"
              >
                <span>View Full Menu &rarr;</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white rounded-3xl overflow-hidden border border-cream-dark shadow-soft flex flex-col justify-between p-6 space-y-4 hover:shadow-premium transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="h-44 rounded-2xl overflow-hidden relative">
                      <img
                        src={rel.image}
                        alt={`${rel.name} at Nikita Spa Bengaluru`}
                        width="400"
                        height="250"
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-ivory/90 backdrop-blur-sm text-[11px] font-semibold text-olive-dark">
                        {rel.tag}
                      </span>
                    </div>
                    <h4 className="font-serif text-xl font-medium text-olive-dark">
                      {rel.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed line-clamp-2">
                      {rel.shortDescription}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-cream-dark/60 text-xs">
                    <Link
                      to={`/services/${rel.id}`}
                      className="font-medium text-olive hover:text-gold transition-colors"
                    >
                      Read Details &rarr;
                    </Link>
                    <button
                      onClick={() => onBookService(rel.name)}
                      className="text-charcoal-muted hover:text-olive-dark font-medium"
                    >
                      Quick Book
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>
    </>
  );
};
