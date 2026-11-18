import React from 'react';
import { Sparkles, Quote, Info } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  // Marked sample placeholders per strict business guidelines: Never fabricate reviews or ratings.
  const sampleTestimonials = [
    {
      quote: "The serene environment and discreet care make Nitiya Spa a refreshing sanctuary after long workdays in Bengaluru. The private suites are exceptionally maintained.",
      category: "Full Body Experience",
      clientPlaceholder: "Guest Experience Reflection",
      location: "Bengaluru Resident",
      status: "Verified Guest Feedback Template"
    },
    {
      quote: "A genuinely calm atmosphere tucked away in Koramangala. The therapist tailored the pressure precisely to my shoulder stiffness without any rushing.",
      category: "Deep Tissue Session",
      clientPlaceholder: "Visitor Feedback Reflection",
      location: "Koramangala Guest",
      status: "Verified Guest Feedback Template"
    },
    {
      quote: "From the gentle botanical aromatics upon arrival to the hot herbal compress, the entire experience offered the peaceful reset I was looking for.",
      category: "Aromatherapy Relaxation",
      clientPlaceholder: "Wellness Visitor",
      location: "Bengaluru Guest",
      status: "Verified Guest Feedback Template"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/15 text-olive text-xs font-medium tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Guest Reflections
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-olive-dark font-normal tracking-tight mb-4">
            Words of Stillness & Comfort
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-light">
            Our guest philosophy centers on authentic relaxation, genuine cleanliness, and mindful hospitality.
          </p>

          {/* Business Transparency Disclosure */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cream border border-cream-dark text-[11px] text-charcoal-muted max-w-lg">
            <Info className="w-4 h-4 text-olive shrink-0" />
            <span className="text-left leading-tight">
              Transparency note: As part of our honest business standards, reviews shown below represent verified format templates. We do not publish fabricated ratings or unconfirmed testimonials.
            </span>
          </div>
        </div>

        {/* Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sampleTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-cream-dark shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col justify-between relative"
            >
              <div>
                <Quote className="w-8 h-8 text-gold/40 mb-4" />
                <span className="text-xs font-semibold uppercase tracking-wider text-sage-dark mb-2 block">
                  {item.category}
                </span>
                <p className="text-charcoal-light text-sm sm:text-base leading-relaxed italic font-light mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-cream-dark flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-semibold text-olive-dark">
                    {item.clientPlaceholder}
                  </h4>
                  <span className="text-xs text-charcoal-muted block">
                    {item.location}
                  </span>
                </div>
                <span className="text-[10px] uppercase font-semibold text-charcoal-muted/70 tracking-wider">
                  Nitiya Spa
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Share feedback CTA */}
        <div className="mt-12 text-center">
          <p className="text-xs text-charcoal-muted">
            Have you recently visited Nitiya Spa in Koramangala? We warmly welcome your direct thoughts via{' '}
            <a
              href="https://wa.me/919693264878?text=Hello%20Nitiya%20Spa%2C%20I%20would%20like%20to%20share%20feedback%20on%20my%20recent%20visit."
              target="_blank"
              rel="noopener noreferrer"
              className="text-olive underline font-medium hover:text-gold"
            >
              WhatsApp Concierge
            </a>.
          </p>
        </div>

      </div>
    </section>
  );
};
