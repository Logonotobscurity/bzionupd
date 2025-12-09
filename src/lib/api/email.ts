import { ISendEmailOptions } from '@/lib/types/index';

let Resend: any;
try {
  Resend = require('resend').Resend;
} catch {
  console.warn('Resend package not installed. Install with: npm install resend');
}

const getResendClient = () => {
  if (!Resend) {
    throw new Error('Resend package not installed');
  }
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY not configured');
  }
  return new Resend(process.env.RESEND_API_KEY);
};

export const sendEmail = async (options: ISendEmailOptions): Promise<void> => {
  try {
    const resend = getResendClient();
    
    const { data, error } = await resend.emails.send({
      from: options.from || process.env.EMAIL_FROM || 'BZION <onboarding@resend.dev>',
      to: options.to,
      subject: options.subject,
      react: options.react,
    });

    if (error) {
      console.error('Error sending email:', error);
      throw error;
    }

    console.log('Email sent successfully:', data?.id);
  } catch (error) {
    console.error(`Failed to send email to ${options.to}:`, error);
    throw error;
  }
};
