import ClubDetailsPageClient from './chat-client';

// This function is required for static export of dynamic routes.
// We return an empty array because these pages depend on a live database
// and cannot be pre-built for a static site.
export async function generateStaticParams() {
  return [];
}

// The actual client logic is in the chat-client.tsx file.
export default function ClubDetailsPage() {
  return <ClubDetailsPageClient />;
}
