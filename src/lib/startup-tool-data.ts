

'use client';

import React from 'react';
import { 
    Lightbulb, Search, Users, FileText, Presentation, LineChart, Handshake, Calculator, Shield, Building,
    Box, Puzzle, Brush, Code, Cpu, TrendingUp, Bot, UserPlus, Zap, UserCog,
    MessageCircle, BarChart, TestTube, CheckCircle, Workflow, Settings, UploadCloud, Rocket
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

export const startupToolData: ToolCategory[] = [
    {
        title: "AI Idea Validation Tools",
        icon: <Lightbulb className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'The Business Idea Generator', description: 'AI-powered tool to generate and validate startup ideas.', url: 'https://businessideagenerator.com/', image: 'https://picsum.photos/seed/bizidea-startup/600/400', dataAiHint: 'startup idea', pricing: 'Free' },
        ]
    },
    {
        title: "AI Market Research Tools",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Attest', description: 'Consumer research platform for fast insights.', url: 'https://www.askattest.com/', image: 'https://picsum.photos/seed/attest-startup/600/400', dataAiHint: 'consumer research', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Competitive Analysis Tools",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Crayon', description: 'Market and competitive intelligence software.', url: 'https://www.crayon.co/', image: 'https://picsum.photos/seed/crayon-startup/600/400', dataAiHint: 'competitive intel', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Business Plan Generators",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'LivePlan', description: 'Business plan software with performance tracking.', url: 'https://www.liveplan.com/', image: 'https://picsum.photos/seed/liveplan-startup/600/400', dataAiHint: 'business plan', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Pitch Deck Creation Tools",
        icon: <Presentation className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Tome', description: 'The AI-powered storytelling format for presentations.', url: 'https://tome.app/', image: 'https://picsum.photos/seed/tome-startup/600/400', dataAiHint: 'ai presentation', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Financial Planning & Forecasting",
        icon: <LineChart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Glean', description: 'Modern financial planning and analysis.', url: 'https://glean.io/', image: 'https://picsum.photos/seed/glean-finance-startup/600/400', dataAiHint: 'financial planning', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Fundraising & Investor Tools",
        icon: <Handshake className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Valuation Tools",
        icon: <Calculator className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Legal & Compliance Tools",
        icon: <Shield className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Clerky', description: 'The easiest way for startups to get legal paperwork done.', url: 'https://www.clerky.com/', image: 'https://picsum.photos/seed/clerky-startup/600/400', dataAiHint: 'legal paperwork', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Company Registration Tools",
        icon: <Building className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Stripe Atlas', description: 'Setup your internet business from anywhere.', url: 'https://stripe.com/atlas', image: 'https://picsum.photos/seed/stripe-atlas-startup/600/400', dataAiHint: 'business formation', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Product Management Tools",
        icon: <Box className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Productboard', description: 'The product management system.', url: 'https://www.productboard.com/', image: 'https://picsum.photos/seed/productboard-startup/600/400', dataAiHint: 'product roadmap', pricing: 'Paid' },
        ]
    },
    {
        title: "AI MVP & Prototyping Tools",
        icon: <Puzzle className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Figma', description: 'Collaborative interface design tool.', url: 'https://www.figma.com/', image: 'https://picsum.photos/seed/figma-mvp-startup/600/400', dataAiHint: 'prototyping', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI UX/UI Design Tools",
        icon: <Brush className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Uizard', description: 'AI-powered design tool for creating apps and websites.', url: 'https://uizard.io/', image: 'https://picsum.photos/seed/uizard-ux-startup/600/400', dataAiHint: 'ui design', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Website & App Builders",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Webflow', description: 'Build responsive websites visually.', url: 'https://webflow.com/', image: 'https://picsum.photos/seed/webflow-builder-startup/600/400', dataAiHint: 'website builder', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI No-Code / Low-Code Platforms",
        icon: <Cpu className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Bubble', description: 'Build production-ready web apps without code.', url: 'https://bubble.io/', image: 'https://picsum.photos/seed/bubble-nocode-startup/600/400', dataAiHint: 'no-code app', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Marketing & Growth Tools",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI SEO & Content Marketing",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Social Media Marketing",
        icon: <MessageCircle className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Customer Acquisition Tools",
        icon: <UserPlus className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Sales & CRM Tools",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Customer Support Tools",
        icon: <UserCog className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Chatbots & Assistants",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI User Feedback & Analytics",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Product Analytics Tools",
        icon: <TestTube className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI A/B Testing Tools",
        icon: <CheckCircle className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Team Productivity Tools",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Hiring & HR Tools",
        icon: <UserCog className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Automation & Workflow Tools",
        icon: <Workflow className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Operations Management",
        icon: <Settings className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Scaling & Optimization Tools",
        icon: <UploadCloud className="w-5 h-5 text-primary"/>,
        tools: [],
    }
];
