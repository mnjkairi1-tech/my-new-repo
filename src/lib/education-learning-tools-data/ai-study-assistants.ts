

import type { Tool } from '@/lib/types';
import { getImage, getHint } from '@/lib/placeholder-images';

export const aiStudyAssistantsTools: Tool[] = [
    { name: 'ChatGPT', description: 'Conversational AI for instant answers and explanations.', url: 'https://chat.openai.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=openai.com', dataAiHint: getHint('chatgpt-assist'), pricing: 'Freemium' },
    { name: 'Perplexity AI', description: 'An answer engine that provides sources for its answers.', url: 'https://www.perplexity.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=perplexity.ai', dataAiHint: getHint('perplexity-assist'), pricing: 'Freemium' },
    { name: 'Socratic by Google', description: 'Learning app to help with homework across subjects.', url: 'https://socratic.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=socratic.org', dataAiHint: 'homework help', pricing: 'Free' },
    { name: 'Brainly', description: 'Peer-to-peer learning community for students.', url: 'https://brainly.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=brainly.com', dataAiHint: 'student community', pricing: 'Freemium' },
    { name: 'Khanmigo', description: 'An AI-powered tutor and teaching assistant from Khan Academy.', url: 'https://www.khanacademy.org/khan-labs', image: 'https://www.google.com/s2/favicons?sz=128&domain=khanacademy.org', dataAiHint: getHint('khanmigo-assist'), pricing: 'Paid' },
    { name: 'Quizlet Q-Chat', description: 'AI tutor that turns study material into conversations.', url: 'https://quizlet.com/q-chat', image: 'https://www.google.com/s2/favicons?sz=128&domain=quizlet.com', dataAiHint: getHint('qchat-assist'), pricing: 'Freemium' },
    { name: 'Poe by Quora', description: 'Platform to ask questions and get instant answers from AI bots.', url: 'https://poe.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=poe.com', dataAiHint: getHint('poe-assist'), pricing: 'Freemium' },
    { name: 'Mindgrasp', description: 'Instantly create notes and answer questions from any document or video.', url: 'https://mindgrasp.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mindgrasp.ai', dataAiHint: getHint('mindgrasp-assist'), pricing: 'Paid' },
    { name: 'Notion AI', description: 'AI features integrated into the Notion workspace for summarizing and brainstorming.', url: 'https://www.notion.so/product/ai', image: 'https://www.google.com/s2/favicons?sz=128&domain=notion.so', dataAiHint: getHint('notionai-assist'), pricing: 'Paid' },
    { name: 'Sharly AI', description: 'AI assistant to chat with and summarize any document.', url: 'https://sharly.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sharly.ai', dataAiHint: getHint('sharlyai-assist'), pricing: 'Freemium' },
];
