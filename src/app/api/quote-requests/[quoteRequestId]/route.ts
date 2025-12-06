import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(
  req: Request,
  { params }: { params: { quoteRequestId: string } }
) {
  try {
    const quoteRequest = await db.quoteRequest.findUnique({
      where: {
        id: params.quoteRequestId,
      },
      include: {
        product: true,
      },
    });

    if (!quoteRequest) {
      return new NextResponse('Not found', { status: 404 });
    }

    return NextResponse.json(quoteRequest);
  } catch (error) {
    console.error('[QUOTE_REQUEST_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { quoteRequestId: string } }
) {
  try {
    const { ...values } = await req.json();

    const quoteRequest = await db.quoteRequest.update({
      where: {
        id: params.quoteRequestId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(quoteRequest);
  } catch (error) {
    console.error('[QUOTE_REQUEST_PATCH]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { quoteRequestId: string } }
) {
  try {
    const quoteRequest = await db.quoteRequest.delete({
      where: {
        id: params.quoteRequestId,
      },
    });

    return NextResponse.json(quoteRequest);
  } catch (error) {
    console.error('[QUOTE_REQUEST_DELETE]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
