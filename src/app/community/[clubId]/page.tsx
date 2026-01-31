import ClubDetailsPageClient from './chat-client';

// This page must have the edge runtime to deploy on Cloudflare Pages.
// The actual client logic is in the chat-client.tsx file.
export const runtime = 'edge';

export default function ClubDetailsPage() {
  return <ClubDetailsPageClient />;
}
