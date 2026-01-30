import { NextResponse } from 'next/server';
// import { auth as adminAuth } from '@/lib/firebase-admin';

// This route is temporarily disabled because its dependency 'firebase-admin'
// is not compatible with the Cloudflare Pages Edge Runtime.
export async function POST(request: Request) {
  console.error("create-custom-token endpoint is temporarily disabled due to build issues with Cloudflare Pages.");
  return NextResponse.json(
    { error: 'This feature is temporarily disabled due to deployment environment incompatibility.' },
    { status: 501 }
  );
}
