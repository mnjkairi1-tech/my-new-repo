
import type { Tool } from '@/lib/types';

export const aiSentimentAwareChatbotsTools: Tool[] = [
    { name: 'MonkeyLearn', description: 'Text analysis with machine learning.', url: 'https://monkeylearn.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=monkeylearn.com', dataAiHint: 'text analysis', pricing: 'Freemium' },
    { name: 'IBM Watson Tone Analyzer', description: 'Uses linguistic analysis to detect emotional and language tones.', url: 'https://www.ibm.com/cloud/watson-tone-analyzer', image: 'https://www.google.com/s2/favicons?sz=128&domain=ibm.com', dataAiHint: 'emotional tone', pricing: 'Freemium' },
    { name: 'Google Cloud Natural Language API', description: 'Analyze text for sentiment, entities, and syntax.', url: 'https://cloud.google.com/natural-language', image: 'https://www.google.com/s2/favicons?sz=128&domain=cloud.google.com', dataAiHint: 'natural language', pricing: 'Paid' },
    { name: 'Amazon Comprehend', description: 'A natural language processing (NLP) service.', url: 'https://aws.amazon.com/comprehend/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aws.amazon.com', dataAiHint: 'aws nlp', pricing: 'Paid' },
    { name: 'Azure Text Analytics', description: 'NLP service for text mining and analysis.', url: 'https://azure.microsoft.com/en-us/products/cognitive-services/text-analytics/', image: 'https://www.google.com/s2/favicons?sz=128&domain=azure.microsoft.com', dataAiHint: 'text mining', pricing: 'Paid' },
    { name: 'Brandwatch', description: 'Consumer intelligence platform with sentiment analysis.', url: 'https://www.brandwatch.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=brandwatch.com', dataAiHint: 'consumer intelligence', pricing: 'Paid' },
    { name: 'Talkwalker', description: 'Social listening and analytics platform.', url: 'https://www.talkwalker.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=talkwalker.com', dataAiHint: 'social listening', pricing: 'Paid' },
    { name: 'Repustate', description: 'Sentiment analysis and text analytics API.', url: 'https://www.repustate.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=repustate.com', dataAiHint: 'text analytics api', pricing: 'Paid' },
    { name: 'Clarabridge', description: 'Customer experience management.', url: 'https://www.clarabridge.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=clarabridge.com', dataAiHint: 'cx management', pricing: 'Paid' },
    { name: 'Lexalytics', description: 'Text analytics and natural language processing.', url: 'https://www.lexalytics.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lexalytics.com', dataAiHint: 'text analytics', pricing: 'Paid' },
];
