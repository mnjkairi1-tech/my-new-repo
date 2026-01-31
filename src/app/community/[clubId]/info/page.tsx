import GroupInfoPageClient from './info-client';

// The actual client logic is in the info-client.tsx file.
export default function GroupInfoPage({ params }: { params: { clubId: string } }) {
    return <GroupInfoPageClient clubId={params.clubId} />;
}
