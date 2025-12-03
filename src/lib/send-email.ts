import { ISendEmailOptions } from '@/lib/types';

// Mock Resend for when the package is not installed
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

// Lazy load resend at runtime
let resendClient: any = null;

function getResendClient() {
  if (resendClient) {
    return resendClient;
  }

  if (typeof window !== 'undefined') {
    // Client-side - use mock
    resendClient = new MockResend();
    return resendClient;
  }

  // Server-side only
  try {
    // Try to import real Resend if package is installed
    // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
    const { Resend } = require('resend');
    resendClient = new Resend(process.env.RESEND_API_KEY);
  } catch (e) {
    // Fallback to mock if resend package not installed
    console.warn('Resend package not installed. Using mock email service.');
    resendClient = new MockResend(process.env.RESEND_API_KEY);
  }

  return resendClient;
}

export const sendEmail = async (options: ISendEmailOptions): Promise<void> => {
  const resend = getResendClient();

  try {
    const { data, error } = await resend.emails.send({
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
