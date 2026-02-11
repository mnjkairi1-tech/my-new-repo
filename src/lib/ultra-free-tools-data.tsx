
'use client';

import React from 'react';
import { 
    Star, Palette, Code, Bot
} from 'lucide-react';
import type { Tool } from '@/lib/types';

export type ToolCategory = {
    title: string;
    icon: React.ReactNode;
    tools: Tool[];
};

export const ultraFreeToolData: ToolCategory[] = [
    {
        title: "Top Free AI Tools",
        icon: <Star className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ChatGPT', description: 'Conversational AI by OpenAI.', url: 'https://chat.openai.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=openai.com', dataAiHint: 'openai chat', pricing: 'Freemium', features: ['Instant answers & explanations', 'Creative inspiration & brainstorming', 'Summarize documents & articles'] },
            { name: 'Google Gemini', description: 'Google\'s creative and helpful AI collaborator.', url: 'https://gemini.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=gemini.google.com', dataAiHint: 'google ai', pricing: 'Free', features: ['Multimodal input (text, image, voice)', 'Real-time information from Google Search', 'Integration with Google apps'] },
            { name: 'DuckDuckGo', description: 'The search engine that doesn\'t track you.', url: 'https://duck.ai/?origin=funnel_home_website', image: 'https://www.google.com/s2/favicons?sz=128&domain=duck.ai', dataAiHint: 'search engine', pricing: 'Free', features: ['Private, anonymous search', 'AI-powered instant answers', 'No user profiling or tracking'] },
            { name: 'Arena AI', description: 'A platform for AI models.', url: 'https://arena.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=arena.ai', dataAiHint: 'ai arena', pricing: 'Free', features: ['Compare various AI models side-by-side', 'Crowdsourced leaderboards', 'Test and chat with new & experimental models'] },
        ]
    },
    {
        title: "Allrounder AI Tools",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Yupp.ai', description: 'Search less, know more.', url: 'https://yupp.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=yupp.ai', dataAiHint: 'ai search', pricing: 'Free' },
            { name: 'Perchance', description: 'Create and share random text generators.', url: 'https://perchance.org/generators', image: 'https://www.google.com/s2/favicons?sz=128&domain=perchance.org', dataAiHint: 'random generator', pricing: 'Free' },
            { name: 'Genspark', description: 'An AI-powered search engine.', url: 'https://www.genspark.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=genspark.ai', dataAiHint: 'ai search', pricing: 'Free' },
            { name: 'ChatGPT Free', description: 'Free access to AI chat.', url: 'https://chatgptfree.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=chatgptfree.ai', dataAiHint: 'free chatgpt', pricing: 'Free' },
            { name: 'Cursor', description: 'The AI-first code editor.', url: 'https://cursor.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=cursor.com', dataAiHint: 'ai code editor', pricing: 'Freemium' },
            { name: 'Poe', description: 'Fast, helpful AI chat.', url: 'https://poe.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=poe.com', dataAiHint: 'ai chat', pricing: 'Freemium' },
            { name: 'Meta AI', description: 'Meta\'s conversational AI assistant.', url: 'https://www.meta.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=meta.ai', dataAiHint: 'meta ai', pricing: 'Free' },
            { name: 'Hunyuan AI', description: 'A large language model from Tencent.', url: 'https://hunyuan.tencent.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tencent.com', dataAiHint: 'tencent ai', pricing: 'Free' },
            { name: 'Grok AI', description: 'AI by xAI, with real-time knowledge.', url: 'https://grok.x.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=x.ai', dataAiHint: 'grok ai', pricing: 'Paid' },
        ]
    }
];
