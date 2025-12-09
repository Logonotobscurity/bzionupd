import { whatsappService } from '@/services/whatsappService';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const isConnected = await whatsappService.checkConnection();
    
    return NextResponse.json({
      service: 'whatsapp',
      status: isConnected ? 'healthy' : 'unhealthy',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json({
      service: 'whatsapp',
      status: 'error',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    }, { status: 500 });
  }
}
