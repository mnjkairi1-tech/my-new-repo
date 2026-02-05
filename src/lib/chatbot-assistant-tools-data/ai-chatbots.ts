
import type { Tool } from '@/lib/types';

export const aiChatbotsTools: Tool[] = [
    { name: 'ChatGPT', description: 'Conversational AI by OpenAI for a wide range of tasks.', url: 'https://chat.openai.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=openai.com', dataAiHint: 'openai chat', pricing: 'Freemium' },
    { name: 'Google Gemini', description: 'Google\'s creative and helpful AI collaborator.', url: 'https://gemini.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'google ai', pricing: 'Free' },
    { name: 'Claude', description: 'A next-generation AI assistant by Anthropic.', url: 'https://claude.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=anthropic.com', dataAiHint: 'anthropic ai', pricing: 'Freemium' },
    { name: 'Poe by Quora', description: 'Platform to ask questions and get instant answers from various AI bots.', url: 'https://poe.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=poe.com', dataAiHint: 'ai chat', pricing: 'Freemium' },
    { name: 'Perplexity AI', description: 'An answer engine that provides sources for its answers.', url: 'https://www.perplexity.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=perplexity.ai', dataAiHint: 'answer engine', pricing: 'Freemium' },
    { name: 'Hugging Face Chat', description: 'An open-source alternative to ChatGPT.', url: 'https://huggingface.co/chat/', image: 'https://www.google.com/s2/favicons?sz=128&domain=huggingface.co', dataAiHint: 'open source chat', pricing: 'Free' },
    { name: 'You.com', description: 'AI chatbot and search engine.', url: 'https://you.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=you.com', dataAiHint: 'search engine', pricing: 'Free' },
    { name: 'Character.ai', description: 'Create and talk to AI characters.', url: 'https://character.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=character.ai', dataAiHint: 'ai characters', pricing: 'Freemium' },
    { name: 'Pi, your personal AI', description: 'A supportive and smart AI companion.', url: 'https://pi.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pi.ai', dataAiHint: 'personal ai', pricing: 'Free' },
    { name: 'Jasper Chat', description: 'A conversational AI chatbot for business applications.', url: 'https://www.jasper.ai/chat', image: 'https://www.google.com/s2/favicons?sz=128&domain=jasper.ai', dataAiHint: 'business chat', pricing: 'Paid' },
];
