
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { generateQuoteRequestWhatsAppURL } from '@/lib/api/whatsapp';
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

    // Create quote directly without user lookup for now
    const quoteRequest = await prisma.quote.create({
      data: {
        reference: `QR-${Date.now()}`,
        buyerContactEmail: email,
        buyerContactPhone: phone,
        buyerCompanyId: company || null,
        status: 'draft',
        lines: {
          create: items.map(item => ({
            productId: item.id,
            productName: item.name,
            qty: item.quantity,
          })),
        },
      },
      include: {
        lines: true,
      },
    });

    // Generate WhatsApp URLs (non-blocking)
    try {
      generateQuoteRequestWhatsAppURL({
        name,
        email,
        phone,
        company,
        address: message,
        items,
      });
    } catch (whatsappError) {
      console.warn('[WHATSAPP_NOTIFICATION_ERROR]', whatsappError);
      // Don't fail the request if WhatsApp notification fails
    }

    // Return response with quote details
    return NextResponse.json({
      id: quoteRequest.id,
      quote_reference: quoteRequest.reference,
      message: 'Quote request submitted successfully.'
    }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('[QUOTE_REQUESTS_VALIDATION_ERROR]', error.errors);
      return NextResponse.json(
        { error: 'Invalid request data', details: error.errors },
        { status: 400 }
      );
    }
    console.error('[QUOTE_REQUESTS_POST]', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const quoteRequests = await prisma.quote.findMany({
      include: {
        lines: true,
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

