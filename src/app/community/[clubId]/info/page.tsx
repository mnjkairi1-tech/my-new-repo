import GroupInfoPageClient from './info-client';

// This page must have the edge runtime to deploy on Cloudflare Pages.
// The actual client logic is in the info-client.tsx file.
export const runtime = 'edge';

export default function GroupInfoPage({ params }: { params: { clubId: string } }) {
    return <GroupInfoPageClient clubId={params.clubId} />;
}
