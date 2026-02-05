
import type { Tool } from '@/lib/types';

export const reverseEtlTools: Tool[] = [
    { name: 'Census', description: 'Sync your data warehouse to all your apps.', url: 'https://www.getcensus.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=getcensus.com', dataAiHint: 'data sync', pricing: 'Paid' },
    { name: 'Hightouch', description: 'The leading Reverse ETL platform.', url: 'https://hightouch.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=hightouch.com', dataAiHint: 'reverse etl', pricing: 'Freemium' },
    { name: 'RudderStack', description: 'Customer data platform for developers.', url: 'https://www.rudderstack.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=rudderstack.com', dataAiHint: 'customer data', pricing: 'Freemium' },
    { name: 'Segment', description: 'Customer Data Platform with Reverse ETL capabilities.', url: 'https://segment.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=segment.com', dataAiHint: 'cdp', pricing: 'Freemium' },
    { name: 'Polytomic', description: 'Sync data between your warehouse and business apps.', url: 'https://www.polytomic.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=polytomic.com', dataAiHint: 'data sync', pricing: 'Paid' },
    { name: 'Grouparoo', description: 'Open-source Reverse ETL.', url: 'https://www.grouparoo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=grouparoo.com', dataAiHint: 'open source retl', pricing: 'Free' },
    { name: 'Castled', description: 'Open Source Reverse ETL.', url: 'https://www.castled.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=castled.io', dataAiHint: 'open source', pricing: 'Free' },
    { name: 'Omnata', description: 'The Reverse ETL platform built for Snowflake.', url: 'https://omnata.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=omnata.com', dataAiHint: 'snowflake retl', pricing: 'Paid' },
    { name: 'SeekWell', description: 'Sync data from SQL to apps like Google Sheets, Slack, and email.', url: 'https://www.seekwell.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=seekwell.io', dataAiHint: 'sql to apps', pricing: 'Paid' },
    { name: 'Hevo Activate', description: 'Reverse ETL to operationalize warehouse data.', url: 'https://hevodata.com/activate', image: 'https://www.google.com/s2/favicons?sz=128&domain=hevodata.com', dataAiHint: 'operationalize data', pricing: 'Paid' },
];
