import { ISendEmailOptions } from '@/lib/types';

// Mock Resend for development/when package is not installed
class MockResend {
  constructor(apiKey?: string) {
    if (!apiKey) {
      console.warn('RESEND_API_KEY not configured. Email sending will be disabled.');
    }
  }

  emails = {
    send: async (options: any) => {
      console.log('Mock email send:', options);
      return { data: { id: 'mock-' + Date.now() }, error: null };
    },
  };
}

// Use mock resend client
const resendClient = new MockResend(process.env.RESEND_API_KEY);

export const sendEmail = async (options: ISendEmailOptions): Promise<void> => {
  try {
    const { data, error } = await resendClient.emails.send({
      from: options.from || 'BZION <onboarding@resend.dev>',
      to: options.to,
      subject: options.subject,
      react: options.react,
    });

    if (error) {
      console.error('Error sending email:', error);
      // Re-throw the error to be handled by the caller
      throw error;
    }

  } catch (error) {
    console.error(`Failed to send email to ${options.to} with subject "${options.subject}"`, error);
    // Re-throw the error to be handled by the caller
    throw error;
  }
};
