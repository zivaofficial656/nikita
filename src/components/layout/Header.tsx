import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Sparkles, Shield, ArrowRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [navSearchQuery, setNavSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (navSearchQuery.trim()) {
      navigate(`/companions?q=${encodeURIComponent(navSearchQuery.trim())}`);
      setSearchOpen(false);
      setNavSearchQuery('');
    }
  };

  const navLinks = [
    { name: 'Companions', path: '/companions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Categories', path: '/categories' },
    { name: 'Locations', path: '/locations' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory/95 backdrop-blur-md shadow-md border-b border-borderCream/80 py-3'
          : 'bg-ivory border-b border-borderCream/60 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity: Love Logo */}
          <Link to="/" className="flex items-center group focus:outline-none" aria-label="Love">
            <img
              src="/images/nikita-spa-logo.png"
              alt="Love"
              className="h-10 sm:h-12 w-auto object-contain object-left group-hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all ${
                    isActive
                      ? 'text-burgundy font-bold bg-burgundy-50 border border-burgundy-200'
                      : 'text-black hover:text-burgundy hover:bg-ivory-200'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Icons & Enquire Now CTA */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 rounded-full border border-borderCream bg-white text-black hover:text-burgundy hover:border-gold-400 transition-all shadow-sm"
              aria-label="Toggle Directory Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* 18+ Adult Badge */}
            <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-[11px] font-bold text-black">
              <Shield className="w-3 h-3 text-burgundy" />
              <span>18+ Adult</span>
            </span>

            {/* Prominent Enquire Now Button */}
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full bg-burgundy hover:bg-burgundy-900 border border-gold-400/80 text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md hover:shadow-glow-burgundy flex items-center gap-2 group"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-400 group-hover:rotate-12 transition-transform" />
              <span>Enquire Now</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl border border-borderCream bg-white text-black hover:text-burgundy transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Quick Search Dropdown */}
        {searchOpen && (
          <div className="mt-3 pt-3 border-t border-borderCream animate-fade-in">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <Search className="w-4 h-4 text-gold-600 absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                value={navSearchQuery}
                onChange={(e) => setNavSearchQuery(e.target.value)}
                placeholder="Search by companion name, interest, area (e.g., Indiranagar, wine, art, gala)..."
                autoFocus
                className="w-full pl-10 pr-28 py-2.5 bg-white border border-gold-300 rounded-xl text-xs sm:text-sm text-black placeholder:text-[#555555] focus:outline-none focus:ring-1 focus:ring-burgundy shadow-sm"
              />
              <button
                type="submit"
                className="absolute right-1.5 px-4 py-1.5 bg-burgundy hover:bg-burgundy-900 text-white rounded-lg text-xs font-medium uppercase tracking-wider transition-colors"
              >
                Search
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-borderCream bg-ivory/98 backdrop-blur-md px-5 py-6 shadow-2xl animate-fade-in">
          <div className="flex items-center justify-between pb-4 mb-3 border-b border-borderCream">
            <img
              src="/images/nikita-spa-logo.png"
              alt="Love"
              className="h-9 w-auto object-contain object-left"
            />
            <span className="text-[10px] uppercase tracking-widest text-burgundy font-bold px-2.5 py-1 rounded-full bg-burgundy-50 border border-burgundy-200">
              18+ Adult Directory
            </span>
          </div>
          <nav className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-semibold tracking-wide uppercase transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-burgundy text-white shadow-sm'
                      : 'text-black hover:bg-beige/50'
                  }`
                }
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 opacity-70" />
              </NavLink>
            ))}
            <div className="pt-4 mt-2 border-t border-borderCream flex flex-col gap-3">
              <div className="flex items-center justify-between px-2 text-xs text-black font-semibold">
                <span>Directory Classification:</span>
                <span className="font-bold text-burgundy">Strictly Platonic 18+</span>
              </div>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 bg-burgundy text-white rounded-xl text-xs font-bold tracking-widest uppercase text-center shadow-md flex items-center justify-center gap-2 border border-gold-400"
              >
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>Enquire Now with Concierge</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
