import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingContactButtons } from './components/FloatingContactButtons';
import { MobileBottomBar } from './components/MobileBottomBar';
import { AppointmentModal } from './components/AppointmentModal';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';
import { NotFound } from './pages/NotFound';
import { initAnalytics, trackPageView } from './utils/analytics';

// Scroll to top upon route change & track analytics
function RouteTracker() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(pathname);
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedServiceForBooking(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-charcoal font-sans selection:bg-gold/20 selection:text-olive-dark">
      <RouteTracker />
      
      {/* Navigation Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content View */}
      <div className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onOpenBooking={() => handleOpenBooking()}
                onBookService={(name) => handleOpenBooking(name)}
              />
            }
          />
          <Route
            path="/about"
            element={<About onOpenBooking={() => handleOpenBooking()} />}
          />
          <Route
            path="/services"
            element={<Services onBookService={(name) => handleOpenBooking(name)} />}
          />
          <Route
            path="/services/:serviceId"
            element={<ServiceDetail onBookService={(name) => handleOpenBooking(name)} />}
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* Interactive Appointment Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialServiceId={selectedServiceForBooking}
      />

      {/* Floating Call & WhatsApp Action Buttons */}
      <FloatingContactButtons />

      {/* Mobile Sticky Booking Bar */}
      <MobileBottomBar onOpenBooking={() => handleOpenBooking()} />

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}

export default App;
