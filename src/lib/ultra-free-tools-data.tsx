
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
            { name: 'Canva', description: 'Graphic design platform for everyone.', url: 'https://www.canva.com/', image: 'https://picsum.photos/seed/canva-design/600/400', dataAiHint: 'design tool', pricing: 'Freemium' },
            { name: 'Figma', description: 'Collaborative interface design tool.', url: 'https://www.figma.com/', image: 'https://picsum.photos/seed/figma-design/600/400', dataAiHint: 'ui design', pricing: 'Freemium' },
            { name: 'PFPmaker', description: 'Create an awesome profile pic from any photo.', url: 'https://pfpmaker.com/', image: 'https://picsum.photos/seed/pfpmaker/600/400', dataAiHint: 'profile picture', pricing: 'Free' },
            { name: 'Unsplash', description: 'The internet’s source of freely-usable images.', url: 'https://unsplash.com/', image: 'https://picsum.photos/seed/unsplash-free/600/400', dataAiHint: 'free images', pricing: 'Free' },
            { name: 'Pexels', description: 'Free stock photos and videos.', url: 'https://www.pexels.com/', image: 'https://picsum.photos/seed/pexels-free/600/400', dataAiHint: 'free stock', pricing: 'Free' },
        ]
    },
    {
        title: "Open Source AI",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Stable Diffusion', description: 'Open-source text-to-image model.', url: 'https://stablediffusionweb.com/', image: 'https://picsum.photos/seed/sd-free/600/400', dataAiHint: 'open source', pricing: 'Free' },
            { name: 'Hugging Face Chat', description: 'An open-source alternative to ChatGPT.', url: 'https://huggingface.co/chat/', image: 'https://picsum.photos/seed/hf-chat-free/600/400', dataAiHint: 'open source chat', pricing: 'Free' },
            { name: 'Rasa', description: 'Open source conversational AI.', url: 'https://rasa.com/', image: 'https://picsum.photos/seed/rasa-free/600/400', dataAiHint: 'conversational ai', pricing: 'Freemium' },
            { name: 'Tesseract OCR', description: 'An open source OCR engine.', url: 'https://github.com/tesseract-ocr/tesseract', image: 'https://picsum.photos/seed/tesseract-free/600/400', dataAiHint: 'ocr engine', pricing: 'Free' },
            { name: 'OpenAI Whisper', description: 'A general-purpose speech recognition model.', url: 'https://openai.com/research/whisper', image: 'https://picsum.photos/seed/whisper-free/600/400', dataAiHint: 'speech recognition', pricing: 'Free' },
        ]
    }
];
