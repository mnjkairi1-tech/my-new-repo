import { NextResponse } from 'next/server';
import { auth as adminAuth } from '@/lib/firebase-admin';

export async function POST(request: Request) {
  try {
    const { idToken } = await request.json();

    if (!idToken) {
      return NextResponse.json({ error: 'idToken is required' }, { status: 400 });
    }

    // Verify the Google ID token
    const decodedToken = await adminAuth.verifyIdToken(idToken);
    const uid = decodedToken.uid;

    // Create a custom token
    const customToken = await adminAuth.createCustomToken(uid);

    return NextResponse.json({ customToken });
  } catch (error) {
    console.error('Error creating custom token:', error);
    let errorMessage = 'Authentication failed';
    if (error instanceof Error && 'code' in error) {
      const firebaseError = error as { code: string; message: string };
      if (firebaseError.code === 'auth/id-token-expired') {
        errorMessage = 'The provided ID token has expired. Please sign in again.';
      } else if (firebaseError.code === 'auth/argument-error') {
        errorMessage = 'The provided ID token is not a valid Firebase ID token.';
      }
    }
    return NextResponse.json({ error: errorMessage }, { status: 401 });
  }
}
