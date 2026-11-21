import React, { useState, useEffect } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AgeVerificationBanner: React.FC = () => {
  const [hasAcknowledged, setHasAcknowledged] = useState<boolean>(true);

  useEffect(() => {
    const consent = localStorage.getItem('be_age_acknowledged');
    if (!consent) {
      setHasAcknowledged(false);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem('be_age_acknowledged', 'true');
    setHasAcknowledged(true);
  };

  if (hasAcknowledged) {
    return null;
  }

  return (
    <aside aria-label="18+ Adult Directory Notice" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/85 backdrop-blur-md animate-fade-in">
      <div className="bg-white border border-gold-400 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        {/* Top burgundy banner strip */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-burgundy via-gold-500 to-burgundy" />

        <div className="flex items-center gap-3.5 mb-5 mt-1">
          <div className="w-14 h-14 rounded-full bg-white border border-gold-400 p-1 flex items-center justify-center flex-shrink-0 shadow-md overflow-hidden">
            <img
              src="/images/nikita-spa-logo.png"
              alt="Love"
              className="w-full h-full object-contain object-center"
            />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-burgundy-700">
              Exclusive 18+ Directory
            </span>
            <h3 className="font-serif text-2xl text-black font-bold">
              Adults Only Verification
            </h3>
          </div>
        </div>

        <div className="space-y-3.5 text-sm text-black leading-relaxed font-normal">
          <p>
            Welcome to <strong className="text-black font-semibold">Love</strong>. This platform is a curated luxury directory intended solely for consenting adults aged <strong className="text-burgundy font-semibold">18 years or older</strong>.
          </p>

          <div className="p-3.5 bg-ivory-100 border border-borderCream rounded-2xl text-xs space-y-2 text-black">
            <div className="flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Strictly Non-Sexual Companionship:</strong> All listings and bookings are exclusively for lawful, platonic social, dining, corporate, and travel accompaniment.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-burgundy flex-shrink-0 mt-0.5" />
              <span>
                <strong>Zero Tolerance:</strong> Commercial sex work, physical solicitation, or coercion will result in an immediate permanent ban.
              </span>
            </div>
          </div>

          <p className="text-xs text-black font-medium">
            By entering, you confirm you are at least 18 years old and agree to our{' '}
            <Link to="/terms-and-conditions" className="text-burgundy underline hover:text-burgundy-800 font-medium">
              Terms & Conditions
            </Link>{' '}
            and{' '}
            <Link to="/privacy-policy" className="text-burgundy underline hover:text-burgundy-800 font-medium">
              Privacy Policy
            </Link>.
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleConfirm}
            className="flex-1 px-6 py-3.5 bg-burgundy hover:bg-burgundy-900 border border-gold-400 text-white rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-glow-burgundy flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4 text-gold-400" />
            <span>I Am 18+ & Agree to Terms</span>
          </button>
          <a
            href="https://www.google.com"
            className="px-5 py-3.5 border border-borderCream hover:bg-ivory-100 text-black rounded-xl font-medium text-xs text-center transition-colors"
          >
            Exit Site
          </a>
        </div>
      </div>
    </aside>
  );
};
