
import type { Tool } from '@/lib/types';

export const aiAbTestingTools: Tool[] = [
    { name: 'Optimizely', description: 'Digital Experience Platform with A/B testing.', url: 'https://www.optimizely.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=optimizely.com', dataAiHint: 'experimentation', pricing: 'Paid' },
    { name: 'VWO', description: 'A/B testing and conversion optimization platform.', url: 'https://vwo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=vwo.com', dataAiHint: 'cro platform', pricing: 'Paid' },
    { name: 'Google Optimize', description: 'A/B testing tool from Google (sunsetting).', url: 'https://marketingplatform.google.com/about/optimize/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'google testing', pricing: 'Free' },
    { name: 'Convert.com', description: 'A/B testing software for agencies and SMBs.', url: 'https://www.convert.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=convert.com', dataAiHint: 'ab testing tool', pricing: 'Paid' },
    { name: 'AB Tasty', description: 'Feature management, experimentation and personalization.', url: 'https://www.abtasty.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=abtasty.com', dataAiHint: 'feature management', pricing: 'Paid' },
    { name: 'LaunchDarkly', description: 'Feature management platform with experimentation.', url: 'https://launchdarkly.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=launchdarkly.com', dataAiHint: 'feature flags', pricing: 'Paid' },
    { name: 'Statsig', description: 'Product experimentation platform.', url: 'https://www.statsig.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=statsig.com', dataAiHint: 'product experiments', pricing: 'Freemium' },
];
