
import GroupToolsPageClient from './tools-client';

export default function GroupToolsPage({ params }: { params: { clubId: string } }) {
    return <GroupToolsPageClient clubId={params.clubId} />;
}
