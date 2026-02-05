
import type { Tool } from '@/lib/types';

export const aiContextAwareAssistantsTools: Tool[] = [
    { name: 'Google Assistant', description: 'Understands context to provide relevant help.', url: 'https://assistant.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'contextual assistant', pricing: 'Free' },
    { name: 'Siri', description: 'Apple\'s intelligent assistant with contextual awareness.', url: 'https://www.apple.com/siri/', image: 'https://www.google.com/s2/favicons?sz=128&domain=apple.com', dataAiHint: 'apple ai', pricing: 'Free' },
    { name: 'Amazon Alexa', description: 'Voice service with skills that can maintain context.', url: 'https://www.amazon.com/alexa', image: 'https://www.google.com/s2/favicons?sz=128&domain=amazon.com', dataAiHint: 'smart speaker', pricing: 'Free' },
    { name: 'Rasa', description: 'Build context-aware AI assistants.', url: 'https://rasa.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=rasa.com', dataAiHint: 'conversational ai', pricing: 'Freemium' },
    { name: 'Google Dialogflow', description: 'Platform for building context-aware conversational interfaces.', url: 'https://cloud.google.com/dialogflow', image: 'https://www.google.com/s2/favicons?sz=128&domain=cloud.google.com', dataAiHint: 'google nlu', pricing: 'Paid' },
    { name: 'Houndify', description: 'Voice AI platform with context follow-up capabilities.', url: 'https://www.houndify.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=houndify.com', dataAiHint: 'voice ai', pricing: 'Paid' },
    { name: 'Cognigy', description: 'Enterprise conversational AI platform.', url: 'https://www.cognigy.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=cognigy.com', dataAiHint: 'enterprise ai', pricing: 'Paid' },
    { name: 'Kore.ai', description: 'Build context-aware virtual assistants.', url: 'https://kore.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=kore.ai', dataAiHint: 'virtual assistants', pricing: 'Paid' },
    { name: 'Amelia', description: 'The leading enterprise conversational AI.', url: 'https://amelia.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=amelia.ai', dataAiHint: 'enterprise conversational', pricing: 'Paid' },
    { name: 'Haptik', description: 'Conversational AI for businesses with contextual understanding.', url: 'https://haptik.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=haptik.ai', dataAiHint: 'business ai', pricing: 'Paid' },
];
