/**
 * Resend Email Service Configuration
 * TODO: Install resend package and configure API key
 * npm install resend
 * Set RESEND_API_KEY environment variable
 */

// Mock Resend class for development
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

let resend: any;

if (typeof window === 'undefined') {
  // Server-side only
  try {
    // Try to import real Resend if package is installed
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { Resend } = require('resend') as any;
    resend = new Resend(process.env.RESEND_API_KEY);
  } catch (e) {
    // Fallback to mock if resend package not installed
    resend = new MockResend(process.env.RESEND_API_KEY);
  }
} else {
  resend = new MockResend();
}

export { resend };
