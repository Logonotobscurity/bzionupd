
import { resend } from '@/lib/resend';
import { ISendEmailOptions } from '@/lib/types';

export const sendEmail = async (options: ISendEmailOptions): Promise<void> => {

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
