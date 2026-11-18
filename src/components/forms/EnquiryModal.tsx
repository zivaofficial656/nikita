import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { X, ShieldCheck, AlertCircle, Sparkles } from 'lucide-react';
import { enquiryFormSchema, EnquiryFormValues } from '../../utils/validation';
import { enquiryService } from '../../services/enquiryService';
import { LOCATIONS_DATA } from '../../data/locations';
import { CATEGORIES_DATA } from '../../data/categories';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  companionId?: string;
  companionName?: string;
  defaultLocation?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  companionId,
  companionName,
  defaultLocation = 'indiranagar',
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successResult, setSuccessResult] = useState<{ id: string; message: string } | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquiryFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      companionId: companionId || '',
      location: defaultLocation,
      category: 'dinner-companions',
      date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      durationHours: 3,
      specialRequests: '',
      isAdultConfirmed: false,
      termsAgreed: false,
    },
  });

  if (!isOpen) return null;

  const onSubmit = async (values: EnquiryFormValues) => {
    setIsSubmitting(true);
    setServerError(null);
    try {
      const res = await enquiryService.submitEnquiry({
        ...values,
        companionId,
        companionName,
      });
      setSuccessResult({ id: res.enquiryId, message: res.message });
      reset();
    } catch (err: any) {
      setServerError(err.message || 'Failed to submit enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setSuccessResult(null);
    setServerError(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-white border border-gold-400 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8 overflow-hidden">
        {/* Top gold-burgundy accent strip */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-burgundy via-gold-500 to-burgundy" />

        <button
          onClick={handleClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-ivory-100 hover:bg-beige text-black flex items-center justify-center transition-colors"
          aria-label="Close Enquiry Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {successResult ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-white border border-gold-400 p-1 flex items-center justify-center mx-auto mb-4 shadow-md overflow-hidden">
              <img
                src="/images/Love Lady Heart Silhouette Logo.png"
                alt="Love"
                className="w-full h-full object-contain object-center"
              />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-burgundy-700">
              Reference #{successResult.id}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-black mt-1 mb-3">
              Enquiry Submitted Discreetly
            </h3>
            <p className="text-sm text-black max-w-md mx-auto leading-relaxed mb-6 font-normal">
              {successResult.message}
            </p>
            <div className="p-4 bg-ivory-100 rounded-2xl border border-borderCream max-w-md mx-auto text-xs text-[#555555] mb-6">
              <div className="flex items-center gap-2 justify-center font-bold text-black mb-1">
                <ShieldCheck className="w-4 h-4 text-burgundy" />
                <span>Zero Tolerance Platonic Commitment</span>
              </div>
              All engagements adhere to strict mutual discretion and non-sexual adult companionship guidelines.
            </div>
            <button
              onClick={handleClose}
              className="px-8 py-3.5 bg-burgundy hover:bg-burgundy-900 border border-gold-400 text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6 flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-full bg-white border border-gold-400 p-0.5 flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden mt-0.5">
                <img
                  src="/images/Love Lady Heart Silhouette Logo.png"
                  alt="Love"
                  className="w-full h-full object-contain object-center"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-burgundy-700">
                  <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                  <span>Confidential Concierge Enquiry</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-black mt-0.5">
                  {companionName ? `Enquire for ${companionName}` : 'Submit Directory Enquiry'}
                </h3>
                <p className="text-xs sm:text-sm text-black mt-1 font-normal">
                  Specify your occasion and schedule preferences. Our dedicated concierge coordinates discreetly.
                </p>
              </div>
            </div>

            {serverError && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{serverError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    {...register('fullName')}
                    placeholder="e.g. Vikram Rao"
                    className="w-full px-3.5 py-2.5 bg-ivory-50 border border-borderCream rounded-xl text-xs sm:text-sm text-black placeholder:text-[#555555] focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-red-600 mt-1 block">
                      {errors.fullName.message}
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
                    placeholder="vikram@example.com"
                    className="w-full px-3.5 py-2.5 bg-ivory-50 border border-borderCream rounded-xl text-xs sm:text-sm text-black placeholder:text-[#555555] focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-600 mt-1 block">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 bg-ivory-50 border border-borderCream rounded-xl text-xs sm:text-sm text-black placeholder:text-[#555555] focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-red-600 mt-1 block">
                      {errors.phone.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1">
                    Bangalore Enclave *
                  </label>
                  <select
                    {...register('location')}
                    className="w-full px-3.5 py-2.5 bg-ivory-50 border border-borderCream rounded-xl text-xs sm:text-sm text-black focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
                  >
                    {LOCATIONS_DATA.map((loc) => (
                      <option key={loc.id} value={loc.slug}>
                        {loc.name}
                      </option>
                    ))}
                  </select>
                  {errors.location && (
                    <span className="text-[11px] text-red-600 mt-1 block">
                      {errors.location.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1">
                    Category *
                  </label>
                  <select
                    {...register('category')}
                    className="w-full px-3.5 py-2.5 bg-ivory-50 border border-borderCream rounded-xl text-xs sm:text-sm text-black focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
                  >
                    {CATEGORIES_DATA.map((cat) => (
                      <option key={cat.id} value={cat.slug}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    {...register('date')}
                    className="w-full px-3.5 py-2.5 bg-ivory-50 border border-borderCream rounded-xl text-xs sm:text-sm text-black focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
                  />
                  {errors.date && (
                    <span className="text-[11px] text-red-600 mt-1 block">
                      {errors.date.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1">
                    Duration (Hours) *
                  </label>
                  <input
                    type="number"
                    min={2}
                    max={24}
                    {...register('durationHours', { valueAsNumber: true })}
                    className="w-full px-3.5 py-2.5 bg-ivory-50 border border-borderCream rounded-xl text-xs sm:text-sm text-black focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy"
                  />
                  {errors.durationHours && (
                    <span className="text-[11px] text-red-600 mt-1 block">
                      {errors.durationHours.message}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1">
                  Occasion & Dress Code Preferences (Optional)
                </label>
                <textarea
                  rows={2}
                  {...register('specialRequests')}
                  placeholder="e.g., Lavelle Road fine dining, UB City black-tie gala, Bangalore Tech Summit hosting..."
                  className="w-full px-3.5 py-2.5 bg-ivory-50 border border-borderCream rounded-xl text-xs sm:text-sm text-black placeholder:text-[#555555] focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy resize-none"
                />
              </div>

              {/* Legal & Age Checkboxes */}
              <div className="space-y-2 pt-2 border-t border-borderCream">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register('isAdultConfirmed')}
                    className="mt-1 w-4 h-4 text-burgundy rounded border-gray-300 focus:ring-burgundy"
                  />
                  <span className="text-xs text-black leading-tight">
                    <strong>18+ Age Confirmation:</strong> I confirm that I am an adult aged 18 years or older under Indian law.
                  </span>
                </label>
                {errors.isAdultConfirmed && (
                  <span className="text-[11px] text-red-600 block pl-6">
                    {errors.isAdultConfirmed.message}
                  </span>
                )}

                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register('termsAgreed')}
                    className="mt-1 w-4 h-4 text-burgundy rounded border-gray-300 focus:ring-burgundy"
                  />
                  <span className="text-xs text-black leading-tight">
                    <strong>Platonic Code of Conduct:</strong> I understand that Love facilitates strictly non-sexual companionship for dining, events, travel, and social occasions. Solicitation of sexual acts is prohibited and results in permanent ban.
                  </span>
                </label>
                {errors.termsAgreed && (
                  <span className="text-[11px] text-red-600 block pl-6">
                    {errors.termsAgreed.message}
                  </span>
                )}
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-burgundy hover:bg-burgundy-900 border border-gold-400 disabled:opacity-50 text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-glow-burgundy flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Submitting Confidential Enquiry...</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-gold-400" />
                      <span>Submit Confidential Enquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
