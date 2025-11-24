import { sendContactMessage } from './api';

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  budget: string;
  details: string;
}

export const submitContactForm = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
  return await sendContactMessage(data);
};
