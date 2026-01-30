export const runtime = 'edge';
import { NextResponse } from 'next/server';
import { businessToolData } from '@/lib/data/business-tools-data';

export async function GET() {
  return NextResponse.json(businessToolData);
}
