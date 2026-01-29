
import type { Tool } from '@/lib/types';

export const aiSentimentAwareChatbotsTools: Tool[] = [
    { name: 'MonkeyLearn', description: 'Text analysis with machine learning.', url: 'https://monkeylearn.com/', image: 'https://picsum.photos/seed/monkeylearn/600/400', dataAiHint: 'text analysis', pricing: 'Freemium' },
    { name: 'IBM Watson Tone Analyzer', description: 'Uses linguistic analysis to detect emotional and language tones.', url: 'https://www.ibm.com/cloud/watson-tone-analyzer', image: 'https://picsum.photos/seed/watson-tone/600/400', dataAiHint: 'emotional tone', pricing: 'Freemium' },
    { name: 'Google Cloud Natural Language API', description: 'Analyze text for sentiment, entities, and syntax.', url: 'https://cloud.google.com/natural-language', image: 'https://picsum.photos/seed/gcp-nlp/600/400', dataAiHint: 'natural language', pricing: 'Paid' },
    { name: 'Amazon Comprehend', description: 'A natural language processing (NLP) service.', url: 'https://aws.amazon.com/comprehend/', image: 'https://picsum.photos/seed/comprehend/600/400', dataAiHint: 'aws nlp', pricing: 'Paid' },
    { name: 'Azure Text Analytics', description: 'NLP service for text mining and analysis.', url: 'https://azure.microsoft.com/en-us/products/cognitive-services/text-analytics/', image: 'https://picsum.photos/seed/azure-text/600/400', dataAiHint: 'text mining', pricing: 'Paid' },
    { name: 'Brandwatch', description: 'Consumer intelligence platform with sentiment analysis.', url: 'https://www.brandwatch.com/', image: 'https://picsum.photos/seed/brandwatch/600/400', dataAiHint: 'consumer intelligence', pricing: 'Paid' },
    { name: 'Talkwalker', description: 'Social listening and analytics platform.', url: 'https://www.talkwalker.com/', image: 'https://picsum.photos/seed/talkwalker/600/400', dataAiHint: 'social listening', pricing: 'Paid' },
    { name: 'Repustate', description: 'Sentiment analysis and text analytics API.', url: 'https://www.repustate.com/', image: 'https://picsum.photos/seed/repustate/600/400', dataAiHint: 'text analytics api', pricing: 'Paid' },
    { name: 'Clarabridge', description: 'Customer experience management.', url: 'https://www.clarabridge.com/', image: 'https://picsum.photos/seed/clarabridge/600/400', dataAiHint: 'cx management', pricing: 'Paid' },
    { name: 'Lexalytics', description: 'Text analytics and natural language processing.', url: 'https://www.lexalytics.com/', image: 'https://picsum.photos/seed/lexalytics/600/400', dataAiHint: 'text analytics', pricing: 'Paid' },
];
