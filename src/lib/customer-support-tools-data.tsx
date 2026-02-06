
'use client';

import React from 'react';
import { 
    Handshake, Bot, MessageSquare, BookOpen, Heart, Users,
} from 'lucide-react';

export type Tool = {
    name: string;
    description: string;
    url: string;
    image: string;
    dataAiHint: string;
    pricing: 'Free' | 'Paid' | 'Freemium';
};

export type ToolCategory = {
    title: string;
    icon: React.ReactNode;
    tools: Tool[];
};

export const customerSupportToolData: ToolCategory[] = [
    {
        title: "Help Desk & Ticketing",
        icon: <Handshake className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Zendesk', description: 'Customer service software and sales CRM.', url: 'https://www.zendesk.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=zendesk.com', dataAiHint: 'support crm', pricing: 'Paid' },
            { name: 'Freshdesk', description: 'Cloud-based customer support software.', url: 'https://freshdesk.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=freshdesk.com', dataAiHint: 'helpdesk software', pricing: 'Freemium' },
            { name: 'Help Scout', description: 'A human-centered customer service platform.', url: 'https://www.helpscout.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=helpscout.com', dataAiHint: 'shared inbox', pricing: 'Paid' },
            { name: 'Zoho Desk', description: 'Context-aware help desk software.', url: 'https://www.zoho.com/desk/', image: 'https://www.google.com/s2/favicons?sz=128&domain=zoho.com', dataAiHint: 'context-aware', pricing: 'Freemium' },
        ]
    },
    {
        title: "Live Chat Software",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Intercom', description: 'Customer service platform for scaling businesses.', url: 'https://www.intercom.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=intercom.com', dataAiHint: 'customer service', pricing: 'Paid' },
            { name: 'LiveChat', description: 'Live chat software with chatbot capabilities.', url: 'https://www.livechat.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=livechat.com', dataAiHint: 'chatbot software', pricing: 'Paid' },
            { name: 'Tidio', description: 'A comprehensive live chat and chatbot solution.', url: 'https://www.tidio.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tidio.com', dataAiHint: 'live chat', pricing: 'Freemium' },
            { name: 'Drift', description: 'Conversational marketing and sales platform.', url: 'https://www.drift.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=drift.com', dataAiHint: 'conversational ai', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Chatbots for Support",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Gorgias', description: 'Customer service platform for e-commerce.', url: 'https://www.gorgias.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=gorgias.com', dataAiHint: 'ecommerce helpdesk', pricing: 'Paid' },
            { name: 'Ada', description: 'AI-powered customer service automation.', url: 'https://www.ada.cx/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ada.cx', dataAiHint: 'service automation', pricing: 'Paid' },
        ]
    },
    {
        title: "Knowledge Base Software",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Zendesk Guide', description: 'Smart knowledge base software.', url: 'https://www.zendesk.com/guide/', image: 'https://www.google.com/s2/favicons?sz=128&domain=zendesk.com', dataAiHint: 'smart knowledge base', pricing: 'Paid' },
            { name: 'Helpjuice', description: 'Easy-to-use knowledge base software.', url: 'https://helpjuice.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=helpjuice.com', dataAiHint: 'knowledge base', pricing: 'Paid' },
        ]
    }
];
