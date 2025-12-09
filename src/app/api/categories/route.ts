import { categoryRepo } from '@/repositories/db/categoryRepository';
import { NextResponse } from 'next/server';

export async function GET() {
  const categories = await categoryRepo.getAll();
  return NextResponse.json(categories);
}
