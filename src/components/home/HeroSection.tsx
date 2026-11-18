import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { SearchBar } from '../common/SearchBar';
import { siteImages } from '../../data/images';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-6 pb-16 lg:pt-10 lg:pb-24 overflow-hidden bg-gradient-to-b from-ivory via-beige/25 to-ivory border-b border-borderCream">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-burgundy-900/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[300px] bg-gold-400/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Magazine Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-gold-400 text-black text-xs font-semibold tracking-wider uppercase shadow-sm">
              <img
                src="/images/Love Lady Heart Silhouette Logo.png"
                alt="Love"
                className="w-5 h-5 object-contain object-center"
              />
              <span className="font-bold">Bangalore’s Premier 18+ Adult Directory</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-black font-semibold leading-[1.12]">
              Discover Bangalore's <span className="italic font-normal text-burgundy">Exclusive</span> Companionship Directory
            </h1>

            <p className="text-base sm:text-lg text-black max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              An alluring editorial showcase connecting sophisticated individuals with elegant, articulate, consenting adult companions for fine dining, society galas, cultural outings, and luxury weekend escapes across Bengaluru. Strictly non-sexual and discreet.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/companions"
                className="w-full sm:w-auto px-8 py-4 bg-burgundy hover:bg-burgundy-900 border border-gold-400 text-white rounded-full font-bold text-xs tracking-widest uppercase transition-all shadow-lg hover:shadow-glow-burgundy flex items-center justify-center gap-2 group"
              >
                <span>Explore Profiles</span>
                <ArrowRight className="w-4 h-4 text-gold-300 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-ivory-100 border border-gold-400 text-black rounded-full font-bold text-xs tracking-widest uppercase transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <span>Directory Ethos</span>
              </Link>
            </div>

            {/* Editorial Highlights */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-borderCream text-left max-w-lg mx-auto lg:mx-0">
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-burgundy block">100%</span>
                <span className="text-xs text-black font-semibold">Platonic & Lawful</span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-burgundy block">18+</span>
                <span className="text-xs text-black font-semibold">Consenting Adults</span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-burgundy block">8 Enclaves</span>
                <span className="text-xs text-black font-semibold">Prime Bengaluru</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fashion Cinematic Editorial Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative ring with gold and burgundy borders */}
              <div className="absolute -inset-3.5 rounded-[2.5rem] border border-gold-400/50 -rotate-1 pointer-events-none" />
              <div className="absolute -inset-1.5 rounded-[2.3rem] border border-burgundy-800/30 rotate-1 pointer-events-none" />

              {/* Main Cinematic Image Card */}
              <div className="relative rounded-[2.2rem] overflow-hidden shadow-2xl bg-neutral-900 border border-borderCream aspect-[4/5] flex items-center justify-center">
                <img
                  src={siteImages.hero}
                  alt="Love Editorial Companionship"
                  className="w-full h-full object-contain object-center"
                />

                {/* Top Badge */}
                <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-gold-400 text-xs font-semibold text-gold-300 flex items-center gap-2 shadow-md">
                  <img
                    src="/images/Love Lady Heart Silhouette Logo.png"
                    alt="Love"
                    className="w-4 h-4 object-contain object-center"
                  />
                  <span>VIP Members Directory</span>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-gold-300 shadow-luxury">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-burgundy block">
                        Featured Editorial Profile
                      </span>
                      <h4 className="font-serif text-lg font-bold text-black">
                        Aanya Sharma, 26
                      </h4>
                      <p className="text-xs text-black font-medium">
                        Art Curator & Dinner Companion • Indiranagar
                      </p>
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-burgundy text-white text-xs font-bold border border-gold-400 shadow-sm">
                      <Star className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
                      <span>4.96</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integrated Concierge Search Bar */}
        <div className="mt-14 sm:mt-16">
          <div className="text-center mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-burgundy">
              Find Companions by Enclave & Occasion
            </span>
          </div>
          <SearchBar variant="hero" />
        </div>
      </div>
    </section>
  );
};
