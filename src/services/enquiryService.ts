export interface EnquiryPayload {
  fullName: string;
  email: string;
  phone: string;
  companionId?: string;
  companionName?: string;
  location: string;
  category: string;
  date: string;
  timeSlot?: string;
  durationHours: number;
  specialRequests?: string;
  isAdultConfirmed: boolean;
  termsAgreed: boolean;
}

export const enquiryService = {
  async submitEnquiry(payload: EnquiryPayload): Promise<{ success: boolean; enquiryId: string; message: string }> {
    // Simulates an async backend POST call
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (!payload.isAdultConfirmed) {
      throw new Error('You must confirm you are at least 18 years of age.');
    }

    if (!payload.termsAgreed) {
      throw new Error('You must agree to the platform safety terms and conduct guidelines.');
    }

    const mockId = `BE-${Math.floor(100000 + Math.random() * 900000)}`;
    return {
      success: true,
      enquiryId: mockId,
      message: 'Your enquiry has been received securely. Our concierge team will review availability and contact you within 4 hours.'
    };
  }
};
