import React from 'react';
import { Sparkles, Moon, Sliders, Home, HeartHandshake, MapPin } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Moon,
      title: 'Relaxing Atmosphere',
      description: 'An acoustic sanctuary featuring gentle ambient soundscapes, dim warm lighting, and pure botanical aromas that melt urban tension from the moment you step in.'
    },
    {
      icon: Sliders,
      title: 'Personalized Experience',
      description: 'Every session is tailored to your comfort level—allowing you to specify pressure preferences, target tension zones, and choice of aromatic wellness oils.'
    },
    {
      icon: Home,
      title: 'Comfortable Treatment Spaces',
      description: 'Private, impeccably sanitised suites with plush massage tables, temperature-controlled air, and premium linens for undisturbed personal comfort.'
    },
    {
      icon: HeartHandshake,
      title: 'Welcoming Hospitality',
      description: 'Attentive, courteous front desk service dedicated to providing an unhurried, respectful, and peaceful wellness retreat tailored for every guest.'
    },
    {
      icon: MapPin,
      title: 'Convenient Koramangala Location',
      description: 'Centrally situated in Koramangala, Bengaluru, offering easy access for residents and working professionals from nearby areas without lengthy commutes.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/15 text-olive text-xs font-medium tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            The Nitiya Difference
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-olive-dark font-normal tracking-tight mb-4">
            Why Choose Nitiya Spa
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-light">
            We focus on genuine hospitality, spotless hygienic surroundings, and mindful attention to detail so you can enjoy uninterrupted rest.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-cream/30 border border-cream-dark hover:border-gold/40 hover:bg-white hover:shadow-premium transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-olive/10 group-hover:bg-olive text-olive group-hover:text-ivory flex items-center justify-center mb-6 transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-olive-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal-muted leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-cream-dark/60 flex items-center justify-between text-xs text-charcoal-muted">
                  <span className="text-gold font-medium">Standard of Care</span>
                  <span className="text-olive font-serif">0{idx + 1}</span>
                </div>
              </div>
            );
          })}

          {/* Special Card: Koramangala Promise */}
          <div className="p-8 rounded-3xl bg-olive text-ivory flex flex-col justify-between shadow-premium relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-gold mb-4 block">
                Our Commitment
              </span>
              <h3 className="font-serif text-2xl font-normal leading-snug mb-3">
                A Peaceful Haven Amidst Bengaluru's Pulse
              </h3>
              <p className="text-ivory/80 text-sm leading-relaxed font-light">
                No loud distractions, no rushed appointments. Step into Nitiya Spa and surrender your fatigue to soothing hands and tranquil warmth.
              </p>
            </div>
            <div className="relative z-10 pt-6 mt-6 border-t border-olive-light/40 flex items-center justify-between">
              <span className="text-xs text-gold">Direct Reservation:</span>
              <a
                href="tel:+919693264878"
                className="text-xs font-semibold text-ivory hover:text-gold transition-colors"
              >
                +91 9693264878
              </a>
            </div>
            {/* Background subtle watermark flower */}
            <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-olive-light/20 blur-xl pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  );
};
