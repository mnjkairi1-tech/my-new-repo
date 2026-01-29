
import type { Tool } from '@/lib/types';

export const aiContextAwareAssistantsTools: Tool[] = [
    { name: 'Google Assistant', description: 'Understands context to provide relevant help.', url: 'https://assistant.google.com/', image: 'https://picsum.photos/seed/google-assistant-context/600/400', dataAiHint: 'contextual assistant', pricing: 'Free' },
    { name: 'Siri', description: 'Apple\'s intelligent assistant with contextual awareness.', url: 'https://www.apple.com/siri/', image: 'https://picsum.photos/seed/siri-context/600/400', dataAiHint: 'apple ai', pricing: 'Free' },
    { name: 'Amazon Alexa', description: 'Voice service with skills that can maintain context.', url: 'https://www.amazon.com/alexa', image: 'https://picsum.photos/seed/alexa-context/600/400', dataAiHint: 'smart speaker', pricing: 'Free' },
    { name: 'Rasa', description: 'Build context-aware AI assistants.', url: 'https://rasa.com/', image: 'https://picsum.photos/seed/rasa-context/600/400', dataAiHint: 'conversational ai', pricing: 'Freemium' },
    { name: 'Google Dialogflow', description: 'Platform for building context-aware conversational interfaces.', url: 'https://cloud.google.com/dialogflow', image: 'https://picsum.photos/seed/dialogflow-context/600/400', dataAiHint: 'google nlu', pricing: 'Paid' },
    { name: 'Houndify', description: 'Voice AI platform with context follow-up capabilities.', url: 'https://www.houndify.com/', image: 'https://picsum.photos/seed/houndify-context/600/400', dataAiHint: 'voice ai', pricing: 'Paid' },
    { name: 'Cognigy', description: 'Enterprise conversational AI platform.', url: 'https://www.cognigy.com/', image: 'https://picsum.photos/seed/cognigy-context/600/400', dataAiHint: 'enterprise ai', pricing: 'Paid' },
    { name: 'Kore.ai', description: 'Build context-aware virtual assistants.', url: 'https://kore.ai/', image: 'https://picsum.photos/seed/koreai-context/600/400', dataAiHint: 'virtual assistants', pricing: 'Paid' },
    { name: 'Amelia', description: 'The leading enterprise conversational AI.', url: 'https://amelia.ai/', image: 'https://picsum.photos/seed/amelia-context/600/400', dataAiHint: 'enterprise conversational', pricing: 'Paid' },
    { name: 'Haptik', description: 'Conversational AI for businesses with contextual understanding.', url: 'https://haptik.ai/', image: 'https://picsum.photos/seed/haptik-context/600/400', dataAiHint: 'business ai', pricing: 'Paid' },
];
