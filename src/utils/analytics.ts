/**
 * Google Analytics 4 & Google Tag Manager Integration Utility
 * Configurable via environment variables:
 * - VITE_GA_MEASUREMENT_ID (e.g., G-XXXXXXXXXX)
 * - VITE_GTM_ID (e.g., GTM-XXXXXXX)
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

let isGAInitialized = false;
let isGTMInitialized = false;

export const initAnalytics = (): void => {
  if (typeof window === 'undefined') return;

  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const gtmId = import.meta.env.VITE_GTM_ID;

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];

  // Google Tag Manager Initialization (Optional)
  if (gtmId && !isGTMInitialized) {
    (function (w: any, d: any, s: string, l: string, i: string) {
      w[l] = w[l] || [];
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      const f = d.getElementsByTagName(s)[0];
      const j = d.createElement(s);
      const dl = l !== 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', gtmId);
    isGTMInitialized = true;
  }

  // Google Analytics 4 Initialization (if direct measurement ID provided and not already managed by GTM)
  if (gaId && !isGAInitialized) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', gaId, {
      send_page_view: false, // Managed dynamically on route change
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure'
    });

    isGAInitialized = true;
  }
};

/**
 * Track Page Views on client-side route transitions
 */
export const trackPageView = (url: string, title?: string): void => {
  if (typeof window === 'undefined') return;

  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (window.gtag && gaId) {
    window.gtag('event', 'page_view', {
      page_path: url,
      page_title: title || document.title,
      page_location: window.location.href
    });
  }

  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'page_view',
      page_path: url,
      page_title: title || document.title
    });
  }
};

/**
 * Track custom conversion and user interaction events
 */
export const trackEvent = (eventName: string, params: Record<string, any> = {}): void => {
  if (typeof window === 'undefined') return;

  if (window.gtag) {
    window.gtag('event', eventName, params);
  }

  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...params
    });
  }
};

/**
 * Predefined conversion event helpers
 */
export const trackCallClick = (source: string = 'website'): void => {
  trackEvent('call_now_click', {
    event_category: 'Contact',
    event_label: '+919693264878',
    source
  });
};

export const trackWhatsAppClick = (source: string = 'website', serviceName?: string): void => {
  trackEvent('whatsapp_click', {
    event_category: 'Booking Inquiry',
    event_label: '+919693264878',
    service: serviceName || 'General',
    source
  });
};

export const trackDirectionsClick = (source: string = 'website'): void => {
  trackEvent('get_directions_click', {
    event_category: 'Location',
    destination: '12.93401024156366,77.63006964588301',
    source
  });
};

export const trackBookingOpen = (serviceName?: string): void => {
  trackEvent('booking_modal_open', {
    event_category: 'Booking',
    service: serviceName || 'General'
  });
};

export const trackFormSubmission = (serviceName?: string): void => {
  trackEvent('contact_form_submit', {
    event_category: 'Form Submission',
    service: serviceName || 'General'
  });
};

export const trackBookingSubmit = (serviceName?: string): void => {
  trackEvent('booking_form_submit', {
    event_category: 'Booking Submission',
    service: serviceName || 'General'
  });
};
