
import type { Tool } from '@/lib/types';

export const reverseEtlTools: Tool[] = [
    { name: 'Census', description: 'Sync your data warehouse to all your apps.', url: 'https://www.getcensus.com/', image: 'https://picsum.photos/seed/census-retl/600/400', dataAiHint: 'data sync', pricing: 'Paid' },
    { name: 'Hightouch', description: 'The leading Reverse ETL platform.', url: 'https://hightouch.com/', image: 'https://picsum.photos/seed/hightouch-retl/600/400', dataAiHint: 'reverse etl', pricing: 'Freemium' },
    { name: 'RudderStack', description: 'Customer data platform for developers with Reverse ETL.', url: 'https://www.rudderstack.com/', image: 'https://picsum.photos/seed/rudderstack-retl/600/400', dataAiHint: 'customer data', pricing: 'Freemium' },
    { name: 'Segment', description: 'Customer Data Platform with Reverse ETL capabilities.', url: 'https://segment.com/', image: 'https://picsum.photos/seed/segment-retl/600/400', dataAiHint: 'cdp', pricing: 'Freemium' },
    { name: 'Polytomic', description: 'Sync data between your warehouse and business apps.', url: 'https://www.polytomic.com/', image: 'https://picsum.photos/seed/polytomic/600/400', dataAiHint: 'data sync', pricing: 'Paid' },
    { name: 'Grouparoo', description: 'Open-source Reverse ETL.', url: 'https://www.grouparoo.com/', image: 'https://picsum.photos/seed/grouparoo/600/400', dataAiHint: 'open source retl', pricing: 'Free' },
    { name: 'Castled', description: 'Open Source Reverse ETL.', url: 'https://www.castled.io/', image: 'https://picsum.photos/seed/castled/600/400', dataAiHint: 'open source', pricing: 'Free' },
    { name: 'Omnata', description: 'The Reverse ETL platform built for Snowflake.', url: 'https://omnata.com/', image: 'https://picsum.photos/seed/omnata/600/400', dataAiHint: 'snowflake retl', pricing: 'Paid' },
    { name: 'SeekWell', description: 'Sync data from SQL to apps like Google Sheets, Slack, and email.', url: 'https://www.seekwell.io/', image: 'https://picsum.photos/seed/seekwell/600/400', dataAiHint: 'sql to apps', pricing: 'Paid' },
    { name: 'Hevo Activate', description: 'Reverse ETL to operationalize warehouse data.', url: 'https://hevodata.com/activate', image: 'https://picsum.photos/seed/hevo-activate/600/400', dataAiHint: 'operationalize data', pricing: 'Paid' },
];
