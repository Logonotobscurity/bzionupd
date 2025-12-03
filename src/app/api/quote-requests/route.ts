
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { sendQuoteRequestToWhatsApp, sendQuoteConfirmationToCustomer } from '@/lib/send-whatsapp';
import { z } from 'zod';

const quoteRequestSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  company: z.string().optional(),
  message: z.string(),
  items: z.array(z.object({
    id: z.string(),
    quantity: z.number(),
    name: z.string(),
  })),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const {
      name,
      email,
      phone,
      company,
      message,
      items,
    } = quoteRequestSchema.parse(json);

    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

    // Create a new user if one doesn't exist
    let user = await db.user.findUnique({
      where: { email },
    });
    if (!user) {
      user = await db.user.create({
        data: { email, name },
      });
    }

    const quoteRequest = await db.quoteRequest.create({
      data: {
        userId: user.id,
        requestor_name: name,
        requestor_email: email,
        requestor_phone: phone,
        company_name: company,
        delivery_address: message,
        requested_products: items as any,
        total_items: totalItems,
        quote_reference: `QR-${Date.now()}`,
      },
    });

    // Generate WhatsApp URLs
    const whatsappResponse = await sendQuoteRequestToWhatsApp({
      name,
      email,
      phone,
      company,
      address: message,
      items,
    });

    // Return response with WhatsApp URL
    return NextResponse.json({
      ...quoteRequest,
      whatsappUrl: whatsappResponse.whatsappUrl || null,
      message: 'Quote request submitted successfully. WhatsApp notification queued.'
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(JSON.stringify(error.errors), { status: 400 });
    }
    console.error('[QUOTE_REQUESTS_POST]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function GET() {
  try {
    const quoteRequests = await db.quoteRequest.findMany({
      include: {
        user: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(quoteRequests);
  } catch (error) {
    console.error('[QUOTE_REQUESTS_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

