
import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/send-email';
import RfqSubmissionEmail from '@/components/emails/rfq-submission-email';

// Corresponds to Phase 1, Task 1.3 in the implementation plan.
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // TODO: Validate the submission data (Part of RFQ Processor Service in the plan)

    // Placeholder for database insertion (Task 1.3)
    const quoteReference = `RFQ-${Date.now()}`;

    // Placeholder for CRM integration (Task 1.4)

    // Send a confirmation email (Task 1.5)
    await sendEmail({
      to: body.email,
      subject: `BZION RFQ Confirmation: ${quoteReference}`,
      react: RfqSubmissionEmail({
        fullName: body.fullName,
        quoteReference,
        items: body.items,
      }),
    });

    // Return a success response
    return NextResponse.json({
      message: 'RFQ submitted successfully.',
      quoteReference: quoteReference,
    }, { status: 201 });

  } catch (error) {
    // It's good practice to not expose detailed error messages to the client.
    return NextResponse.json({ message: 'An unexpected error occurred while submitting the RFQ.' }, { status: 500 });
  }
}
