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
            { name: 'ChatGPT', description: 'Conversational AI by OpenAI.', url: 'https://chat.openai.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=openai.com', dataAiHint: 'openai chat', pricing: 'Freemium' },
            { name: 'Google Gemini', description: 'Google\'s creative and helpful AI collaborator.', url: 'https://gemini.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=gemini.google.com', dataAiHint: 'google ai', pricing: 'Free' },
            { name: 'DuckDuckGo', description: 'The search engine that doesn\'t track you.', url: 'https://duck.ai/?origin=funnel_home_website', image: 'https://www.google.com/s2/favicons?sz=128&domain=duck.ai', dataAiHint: 'search engine', pricing: 'Free' },
            { name: 'Arena AI', description: 'A platform for AI models.', url: 'https://arena.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=arena.ai', dataAiHint: 'ai arena', pricing: 'Free' },
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
            { name: 'Cursor', description: 'The AI-first code editor.', url: 'https://cursor.sh/', image: 'https://www.google.com/s2/favicons?sz=128&domain=cursor.sh', dataAiHint: 'ai code editor', pricing: 'Freemium' },
        ]
    }
];
