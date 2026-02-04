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
            { name: 'ChatGPT', description: 'Conversational AI by OpenAI.', url: 'https://chat.openai.com/', image: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg', dataAiHint: 'openai chat', pricing: 'Freemium' },
            { name: 'Google Gemini', description: 'Google\'s creative and helpful AI collaborator.', url: 'https://gemini.google.com/', image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg', dataAiHint: 'google ai', pricing: 'Free' },
            { name: 'DuckDuckGo', description: 'The search engine that doesn\'t track you.', url: 'https://duckduckgo.com/', image: 'https://upload.wikimedia.org/wikipedia/en/8/88/DuckDuckGo_logo.svg', dataAiHint: 'search engine', pricing: 'Free' },
            { name: 'Arena AI', description: 'A platform for AI models.', url: 'https://lmsys.org/', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/LMSYS_logo.svg', dataAiHint: 'ai arena', pricing: 'Free' },
        ]
    },
    {
        title: "Free Design Resources",
        icon: <Palette className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Canva', description: 'Graphic design platform for everyone.', url: 'https://www.canva.com/', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjYW52YXxlbnwwfHx8fDE2OTI0NTMwMTN8MA&ixlib=rb-4.1.0&q=80&w=1080', dataAiHint: 'design tool', pricing: 'Freemium' },
            { name: 'Figma', description: 'Collaborative interface design tool.', url: 'https://www.figma.com/', image: 'https://images.unsplash.com/photo-1611162616475-46b6352b1269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxmaWdtYXxlbnwwfHx8fDE2OTI0NTMwMTN8MA&ixlib=rb-4.1.0&q=80&w=1080', dataAiHint: 'ui design', pricing: 'Freemium' },
            { name: 'PFPmaker', description: 'Create an awesome profile pic from any photo.', url: 'https://pfpmaker.com/', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHx8fDE2OTI0NTMyMDF8MA&ixlib.rb-4.1.0&q=80&w=1080', dataAiHint: 'profile picture', pricing: 'Free' },
            { name: 'Unsplash', description: 'The internet’s source of freely-usable images.', url: 'https://unsplash.com/', image: 'https://images.unsplash.com/photo-1682686580036-b5e259b2ce9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxmbG93ZXJzfGVufDB8fHx8MTY5MjQ1MzI1Nnww&ixlib.rb-4.1.0&q=80&w=1080', dataAiHint: 'free images', pricing: 'Free' },
        ]
    },
    {
        title: "Open Source AI",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Stable Diffusion', description: 'Open-source text-to-image model.', url: 'https://stablediffusionweb.com/', image: 'https://images.unsplash.com/photo-1678566478904-e273eb238b69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhdCUyMGFydCUyMHN0YWJsZSUyMGRpZmZ1c2lvbnxlbnwwfHx8fDE2OTI0NTMzMTZ8MA&ixlib.rb-4.1.0&q=80&w=1080', dataAiHint: 'open source', pricing: 'Free' },
            { name: 'Hugging Face Chat', description: 'An open-source alternative to ChatGPT.', url: 'https://huggingface.co/chat/', image: 'https://images.unsplash.com/photo-1633915883395-827293427488?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjaGF0Ym90fGVufDB8fHx8fDE2OTI0NTM0MjN8MA&ixlib.rb-4.1.0&q=80&w=1080', dataAiHint: 'open source chat', pricing: 'Free' },
            { name: 'Rasa', description: 'Open source conversational AI.', url: 'https://rasa.com/', image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjaGF0Ym90JTIwYm90fGVufDB8fHx8fDE2OTI0NTM1MDd8MA&ixlib.rb-4.1.0&q=80&w=1080', dataAiHint: 'conversational ai', pricing: 'Freemium' },
            { name: 'Tesseract OCR', description: 'An open source OCR engine.', url: 'https://github.com/tesseract-ocr/tesseract', image: 'https://images.unsplash.com/photo-1581452994473-b3a62886a0b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0ZXh0JTIwcmVjb2duaXRpb258ZW58MHx8fHwxNjkyNDUzNTYwfDA&ixlib.rb-4.1.0&q=80&w=1080', dataAiHint: 'ocr engine', pricing: 'Free' },
        ]
    }
];
