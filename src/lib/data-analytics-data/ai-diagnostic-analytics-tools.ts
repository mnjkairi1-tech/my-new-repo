
import type { Tool } from '@/lib/types';

export const aiDiagnosticAnalyticsTools: Tool[] = [
    { name: 'ThoughtSpot', description: 'Use search to diagnose the root cause of trends.', url: 'https://www.thoughtspot.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=thoughtspot.com', dataAiHint: 'root cause analysis', pricing: 'Paid' },
    { name: 'Tableau', description: 'Use drill-downs and data exploration to diagnose issues.', url: 'https://www.tableau.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tableau.com', dataAiHint: 'data exploration', pricing: 'Paid' },
    { name: 'Power BI', description: 'Analyze data to understand the \'why\' behind the numbers.', url: 'https://powerbi.microsoft.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=microsoft.com', dataAiHint: 'data diagnostics', pricing: 'Freemium' },
    { name: 'FiveThirtyEight', description: 'Data journalism site that performs diagnostic analysis.', url: 'https://fivethirtyeight.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=fivethirtyeight.com', dataAiHint: 'data journalism', pricing: 'Free' },
    { name: 'The Pudding', description: 'A digital publication that explains ideas debated in culture.', url: 'https://pudding.cool/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pudding.cool', dataAiHint: 'visual essays', pricing: 'Free' },
    { name: 'Sisense', description: 'Drill down into data to discover insights.', url: 'https://www.sisense.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sisense.com', dataAiHint: 'bi drill down', pricing: 'Paid' },
    { name: 'Looker', description: 'Explore data and ask questions to diagnose trends.', url: 'https://looker.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=looker.com', dataAiHint: 'data questions', pricing: 'Paid' },
    { name: 'Mixpanel', description: 'User analytics to understand why users drop off.', url: 'https://mixpanel.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mixpanel.com', dataAiHint: 'user funnels', pricing: 'Freemium' },
    { name: 'Amplitude', description: 'Product analytics to understand user behavior.', url: 'https://amplitude.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=amplitude.com', dataAiHint: 'product analytics', pricing: 'Freemium' },
    { name: 'Heap', description: 'Automatically captures customer data to diagnose user behavior.', url: 'https://heap.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=heap.io', dataAiHint: 'customer data', pricing: 'Freemium' },
];
