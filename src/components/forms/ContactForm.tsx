import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, CheckCircle2 } from 'lucide-react';
import { contactFormSchema, ContactFormValues } from '../../utils/validation';

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      isAdultConfirmed: false,
    },
  });

  const onSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gold-400 shadow-luxury text-center">
        <div className="w-16 h-16 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-black mb-2">Message Dispatched Discreetly</h3>
        <p className="text-sm text-black max-w-md mx-auto leading-relaxed mb-6 font-normal">
          Thank you for reaching out to Love Concierge. Our private concierge desk will review your inquiry in complete confidence and reply within 4 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-3 bg-burgundy hover:bg-burgundy-900 border border-gold-400 text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-sm"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 sm:p-8 rounded-3xl border border-gold-300 shadow-luxury space-y-4"
    >
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1">
          Your Name *
        </label>
        <input
          type="text"
          {...register('name')}
          placeholder="e.g. Anish Varma"
          className="w-full px-4 py-3 bg-ivory-50 border border-borderCream rounded-xl text-sm text-black placeholder:text-[#555555] focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-all"
        />
        {errors.name && (
          <span className="text-[11px] text-red-600 mt-1 block">
            {errors.name.message}
          </span>
        )}
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1">
          Email Address *
        </label>
        <input
          type="email"
          {...register('email')}
          placeholder="anish@example.com"
          className="w-full px-4 py-3 bg-ivory-50 border border-borderCream rounded-xl text-sm text-black placeholder:text-[#555555] focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-all"
        />
        {errors.email && (
          <span className="text-[11px] text-red-600 mt-1 block">
            {errors.email.message}
          </span>
        )}
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1">
          Subject *
        </label>
        <input
          type="text"
          {...register('subject')}
          placeholder="Booking Enquiry, Profile Removal, Concierge Consultation..."
          className="w-full px-4 py-3 bg-ivory-50 border border-borderCream rounded-xl text-sm text-black placeholder:text-[#555555] focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-all"
        />
        {errors.subject && (
          <span className="text-[11px] text-red-600 mt-1 block">
            {errors.subject.message}
          </span>
        )}
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1">
          Message *
        </label>
        <textarea
          rows={4}
          {...register('message')}
          placeholder="Please describe your occasion, requested date, venue preferences, or questions..."
          className="w-full px-4 py-3 bg-ivory-50 border border-borderCream rounded-xl text-sm text-black placeholder:text-[#555555] focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy transition-all resize-none"
        />
        {errors.message && (
          <span className="text-[11px] text-red-600 mt-1 block">
            {errors.message.message}
          </span>
        )}
      </div>

      <div className="pt-2">
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            {...register('isAdultConfirmed')}
            className="mt-1 w-4 h-4 text-burgundy rounded border-gray-300 focus:ring-burgundy"
          />
          <span className="text-xs text-black leading-tight font-medium">
            I confirm that I am 18 years of age or older, and recognize that Love strictly prohibits sexual solicitation.
          </span>
        </label>
        {errors.isAdultConfirmed && (
          <span className="text-[11px] text-red-600 mt-1 block pl-6">
            {errors.isAdultConfirmed.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-burgundy hover:bg-burgundy-900 border border-gold-400 disabled:opacity-50 text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-glow-burgundy flex items-center justify-center gap-2 mt-2"
      >
        {isSubmitting ? (
          <span>Dispatched Discreetly...</span>
        ) : (
          <>
            <Send className="w-4 h-4 text-gold-400" />
            <span>Send Secure Message</span>
          </>
        )}
      </button>
    </form>
  );
};
