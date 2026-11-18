import { z } from 'zod';

export const enquiryFormSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters').max(60, 'Name too long'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^[0-9+ -]{10,15}$/, 'Please enter a valid phone number (10-15 digits)'),
  companionId: z.string().optional(),
  location: z.string().min(1, 'Please select a preferred Bangalore location'),
  category: z.string().min(1, 'Please select a companionship category'),
  date: z.string().min(1, 'Please select a preferred date'),
  timeSlot: z.string().optional(),
  durationHours: z.number().min(2, 'Minimum booking is 2 hours').max(24, 'Maximum duration is 24 hours'),
  specialRequests: z.string().max(500, 'Requests cannot exceed 500 characters').optional(),
  isAdultConfirmed: z.boolean().refine((val: boolean) => val === true, {
    message: 'You must confirm that you are 18 years of age or older',
  }),
  termsAgreed: z.boolean().refine((val: boolean) => val === true, {
    message: 'You must acknowledge the non-sexual platonic companionship policy and terms',
  }),
});

export type EnquiryFormValues = z.infer<typeof enquiryFormSchema>;

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message cannot exceed 1000 characters'),
  isAdultConfirmed: z.boolean().refine((val: boolean) => val === true, {
    message: 'You must confirm you are 18+ to submit this enquiry',
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
