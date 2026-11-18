import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory/95 backdrop-blur-md shadow-soft border-b border-cream-dark/60 py-3'
          : 'bg-ivory/80 backdrop-blur-sm border-b border-cream/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center group py-1">
            <img
              src="/images/Elegant%20Nitiya%20Spa%20Logo%20with%20Lotus%20Accents.png"
              alt="Nitiya Spa Logo"
              className="h-10 sm:h-12 md:h-14 w-auto max-w-[150px] sm:max-w-[180px] md:max-w-[210px] object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors tracking-wide relative py-1 ${
                  isActive(link.path)
                    ? 'text-olive-dark font-semibold'
                    : 'text-charcoal-muted hover:text-olive-dark'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919693264878"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-charcoal-light hover:text-olive transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>+91 9693264878</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-olive text-ivory text-xs font-medium uppercase tracking-wider hover:bg-olive-light transition-all duration-300 shadow-soft hover:shadow-premium"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu & Quick CTA Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 rounded-full bg-olive text-ivory text-xs font-medium"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-charcoal rounded-lg hover:bg-cream transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ivory border-b border-cream-dark px-4 pt-4 pb-6 space-y-4 shadow-elevated animate-fade-in">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-cream text-olive font-semibold'
                    : 'text-charcoal-muted hover:bg-cream/50 hover:text-charcoal'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-cream-dark flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-full bg-olive text-ivory font-medium text-sm flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-gold" />
              Book an Appointment
            </button>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:+919693264878"
                className="py-2.5 px-3 rounded-xl border border-cream-dark bg-white text-center text-xs font-medium text-charcoal flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-olive" /> Call Now
              </a>
              <a
                href="https://wa.me/919693264878?text=Hello%20Nitiya%20Spa%2C%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-sage/20 text-center text-xs font-medium text-olive-dark flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-sage" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
