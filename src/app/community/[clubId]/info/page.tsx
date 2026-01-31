import GroupInfoPageClient from './info-client';

// This function is required for static export of dynamic routes.
// We return an empty array because these pages depend on a live database
// and cannot be pre-built for a static site.
export async function generateStaticParams() {
    return [];
}

// The actual client logic is in the info-client.tsx file.
export default function GroupInfoPage({ params }: { params: { clubId: string } }) {
    return <GroupInfoPageClient clubId={params.clubId} />;
}
