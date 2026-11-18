export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Booking' | 'Services' | 'Location & Contact' | 'Experience' | 'general' | 'booking' | 'safety' | 'etiquette';
}

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How can I book an appointment at Nikita Spa?',
    answer: 'Booking an appointment is quick and seamless. You can book directly via WhatsApp at +91 9693264878 or give us a direct phone call at +91 9693264878. You may also use the "Book an Appointment" button on this website to send your preferred service, date, and time.',
    category: 'Booking'
  },
  {
    id: 'faq-2',
    question: 'What massage services are available?',
    answer: 'We offer an array of customized wellness therapies including Full Body Massage, Swedish Massage, Deep Tissue Massage, Traditional Thai Massage, Aromatherapy Massage, Couple Massage, and dedicated Relaxation Therapy. Each session is tailored to your comfort and relaxation goals.',
    category: 'Services'
  },
  {
    id: 'faq-3',
    question: 'Where is Nikita Spa located in Bengaluru?',
    answer: 'Nikita Spa is conveniently located in the vibrant neighborhood of Koramangala, Bengaluru, Karnataka, India. Our location offers easy accessibility from nearby areas such as HSR Layout, Indiranagar, and BTM Layout while maintaining a quiet, peaceful sanctuary tucked away from urban commotion.',
    category: 'Location & Contact'
  },
  {
    id: 'faq-4',
    question: 'How can I contact Nikita Spa?',
    answer: 'You can reach out to our front desk team anytime via phone call at +91 9693264878, or send an instant message on WhatsApp at +91 9693264878. We are happy to assist with appointment slots, directions, and treatment queries.',
    category: 'Location & Contact'
  },
  {
    id: 'faq-5',
    question: 'Can I request a preferred appointment time?',
    answer: 'Yes, absolutely. We recommend reserving your preferred slot in advance—especially for weekends and evening hours—so that our team can prepare your private suite and ensure an unhurried, seamless experience.',
    category: 'Booking'
  },
  {
    id: 'faq-6',
    question: 'What should I expect during my first visit?',
    answer: 'Upon arrival, you will be warmly welcomed into our lounge. Before commencing your session, our team will understand your pressure preferences and focus areas. All treatment suites are completely private, sanitised, and equipped with fresh linens, ambient lighting, and soothing acoustics.',
    category: 'Experience'
  },
  {
    id: 'faq-7',
    question: 'Can I customize the massage pressure and essential oils?',
    answer: 'Yes, every treatment at Nikita Spa is tailored to you. You can communicate your preferred pressure (gentle, medium, or firm) and choose your aromatic oil preference with your therapist at the start of your session.',
    category: 'Experience'
  }
];

export const FAQ_DATA = faqData;
