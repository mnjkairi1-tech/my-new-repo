
'use client';

import React from 'react';
import { 
    Star, Palette, Code
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
            { name: 'Arena AI', description: 'A platform for AI models.', url: 'https://lmsys.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lmsys.org', dataAiHint: 'ai arena', pricing: 'Free' },
        ]
    },
    {
        title: "Free Design Resources",
        icon: <Palette className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Canva', description: 'Graphic design platform for everyone.', url: 'https://www.canva.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=canva.com', dataAiHint: 'design tool', pricing: 'Freemium' },
            { name: 'Figma', description: 'Collaborative interface design tool.', url: 'https://www.figma.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=figma.com', dataAiHint: 'ui design', pricing: 'Freemium' },
            { name: 'PFPmaker', description: 'Create an awesome profile pic from any photo.', url: 'https://pfpmaker.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pfpmaker.com', dataAiHint: 'profile picture', pricing: 'Free' },
            { name: 'Unsplash', description: 'The internet’s source of freely-usable images.', url: 'https://unsplash.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=unsplash.com', dataAiHint: 'free images', pricing: 'Free' },
        ]
    },
    {
        title: "Open Source AI",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Stable Diffusion', description: 'Open-source text-to-image model.', url: 'https://stablediffusionweb.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=stablediffusionweb.com', dataAiHint: 'open source', pricing: 'Free' },
            { name: 'Hugging Face Chat', description: 'An open-source alternative to ChatGPT.', url: 'https://huggingface.co/chat/', image: 'https://www.google.com/s2/favicons?sz=128&domain=huggingface.co', dataAiHint: 'open source chat', pricing: 'Free' },
            { name: 'Rasa', description: 'Open source conversational AI.', url: 'https://rasa.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=rasa.com', dataAiHint: 'conversational ai', pricing: 'Freemium' },
            { name: 'Tesseract OCR', description: 'An open source OCR engine.', url: 'https://github.com/tesseract-ocr/tesseract', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'ocr engine', pricing: 'Free' },
        ]
    }
];
