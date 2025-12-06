import { NextRequest, NextResponse } from 'next/server';

interface SubscriptionRequest {
  email: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as SubscriptionRequest;
    const { email } = body;

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // TODO: Add your newsletter service integration here
    // Examples:
    // - Mailchimp
    // - Brevo (Sendinblue)
    // - ConvertKit
    // - Your own database

    // For now, we'll just log it (replace with your service)
    console.log('Newsletter subscription:', email);

    // Simulate sending to newsletter service
    // const response = await fetch('https://your-newsletter-service.com/api/subscribe', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email }),
    // });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed to newsletter',
        email 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    );
  }
}
