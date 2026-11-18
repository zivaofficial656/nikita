import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 sm:py-32 text-center">
      <div className="w-20 h-20 rounded-full bg-white border border-gold-400 p-2 flex items-center justify-center mx-auto mb-6 shadow-md overflow-hidden">
        <img
          src="/images/Love Lady Heart Silhouette Logo.png"
          alt="Love"
          className="w-full h-full object-contain object-center"
        />
      </div>

      <span className="text-xs font-bold uppercase tracking-widest text-burgundy">
        404 — Page Not Located
      </span>

      <h1 className="font-serif text-4xl sm:text-5xl font-bold text-black mt-2 mb-4">
        An Elusive Destination
      </h1>

      <p className="text-sm sm:text-base text-black max-w-md mx-auto leading-relaxed mb-8 font-normal">
        The corridor or profile you are seeking is either restricted, moved, or does not exist. Allow our directory to guide you back to our curated enclaves.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to="/"
          className="w-full sm:w-auto px-8 py-3.5 bg-burgundy hover:bg-burgundy-900 border border-gold-400 text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2"
        >
          <Home className="w-4 h-4 text-gold-400" />
          <span>Return to Homepage</span>
        </Link>
        <Link
          to="/companions"
          className="w-full sm:w-auto px-8 py-3.5 bg-white border border-borderCream hover:bg-ivory-100 text-black rounded-full text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2"
        >
          <span>Browse Directory Profiles</span>
        </Link>
      </div>
    </div>
  );
};
