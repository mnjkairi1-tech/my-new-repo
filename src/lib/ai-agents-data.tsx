'use client';

import React from 'react';
import { 
    User, Zap, Users, DollarSign, BrainCircuit, Code, BarChart, TrendingUp, Megaphone, UserPlus,
    Wallet, Globe, GraduationCap, Gamepad2, Workflow, Briefcase, Calendar, Mail, Share2, CheckSquare,
    ShoppingCart, ThumbsUp, Bot, BookOpen, Cpu, Network, Milestone, Monitor, ShieldCheck, Shield
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || `https://picsum.photos/seed/${id}/600/400`;
const getHint = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageHint || '';


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

export const aiAgentsToolData: ToolCategory[] = [
    {
        title: "Personal AI Agents",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Motion', description: 'AI assistant to manage your schedule and tasks.', url: 'https://www.usemotion.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=usemotion.com', dataAiHint: 'ai planner', pricing: 'Paid' },
            { name: 'Sunsama', description: 'Daily planner for calm and focused work.', url: 'https://www.sunsama.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sunsama.com', dataAiHint: 'daily planner', pricing: 'Paid' },
            { name: 'Reclaim.ai', description: 'Smart time blocking for your calendar.', url: 'https://reclaim.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=reclaim.ai', dataAiHint: 'calendar ai', pricing: 'Freemium' },
            { name: 'Personal.ai', description: 'Your personal AI to remember everything.', url: 'https://www.personal.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=personal.ai', dataAiHint: 'memory ai', pricing: 'Paid' },
        ]
    },
    {
        title: "Task Automation Agents",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Zapier', description: 'Connect your apps and automate workflows.', url: 'https://zapier.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=zapier.com', dataAiHint: 'app integration', pricing: 'Freemium' },
            { name: 'Make', description: 'Visually create, build, and automate.', url: 'https://www.make.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=make.com', dataAiHint: 'visual automation', pricing: 'Freemium' },
            { name: 'Bardeen', description: 'AI meets automations. Automate manual workflows.', url: 'https://www.bardeen.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=bardeen.ai', dataAiHint: 'workflow automation', pricing: 'Freemium' },
            { name: 'n8n', description: 'Extendable workflow automation.', url: 'https://n8n.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=n8n.io', dataAiHint: 'open source automation', pricing: 'Freemium' },
        ]
    },
    {
        title: "Customer Support Agents",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Intercom', description: 'AI-powered customer service platform.', url: 'https://www.intercom.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=intercom.com', dataAiHint: 'customer service', pricing: 'Paid' },
            { name: 'Zendesk', description: 'Customer service software with AI chatbots.', url: 'https://www.zendesk.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=zendesk.com', dataAiHint: 'support crm', pricing: 'Paid' },
            { name: 'Ada', description: 'An AI-powered customer service automation platform.', url: 'https://www.ada.cx/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ada.cx', dataAiHint: 'service automation', pricing: 'Paid' },
        ]
    },
    {
        title: "Sales AI Agents",
        icon: <DollarSign className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Exceed.ai', description: 'AI-powered sales assistant for qualifying and nurturing leads.', url: 'https://www.exceed.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=exceed.ai', dataAiHint: 'sales assistant', pricing: 'Paid' },
            { name: 'Gong', description: 'Revenue intelligence platform for sales teams.', url: 'https://www.gong.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=gong.io', dataAiHint: 'revenue intelligence', pricing: 'Paid' },
            { name: 'Chorus.ai', description: 'Conversation intelligence for sales teams.', url: 'https://www.chorus.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=chorus.ai', dataAiHint: 'conversation intelligence', pricing: 'Paid' },
        ]
    },
    {
        title: "Research AI Agents",
        icon: <BrainCircuit className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Elicit', description: 'The AI Research Assistant.', url: 'https://elicit.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=elicit.org', dataAiHint: 'research assistant', pricing: 'Freemium' },
            { name: 'Consensus', description: 'An AI search engine for research.', url: 'https://consensus.app/', image: 'https://www.google.com/s2/favicons?sz=128&domain=consensus.app', dataAiHint: 'research search', pricing: 'Freemium' },
            { name: 'Research Rabbit', description: 'Your personal research assistant.', url: 'https://www.researchrabbit.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=researchrabbit.ai', dataAiHint: 'literature map', pricing: 'Free' },
        ]
    },
    {
        title: "Coding AI Agents",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'GitHub Copilot', description: 'Your AI pair programmer.', url: 'https://github.com/features/copilot', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'ai pair programmer', pricing: 'Paid' },
            { name: 'Cursor', description: 'The AI-first code editor.', url: 'https://cursor.sh/', image: 'https://www.google.com/s2/favicons?sz=128&domain=cursor.sh', dataAiHint: 'ai code editor', pricing: 'Freemium' },
            { name: 'Devin AI', description: 'The first AI software engineer.', url: 'https://www.cognition-labs.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=cognition-labs.com', dataAiHint: 'ai engineer', pricing: 'Paid' },
        ]
    },
    {
        title: "Data Analysis Agents",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Julius AI', description: 'AI data analyst to analyze spreadsheets and data.', url: 'https://julius.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=julius.ai', dataAiHint: 'data analyst', pricing: 'Freemium' },
            { name: 'Akkio', description: 'No-code AI platform for real-time decisioning.', url: 'https://www.akkio.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=akkio.com', dataAiHint: 'no-code ai', pricing: 'Paid' },
            { name: 'LIDA', description: 'Automatic generation of visualizations from data.', url: 'https://github.com/microsoft/lida', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'data visualization', pricing: 'Free' },
        ]
    },
    {
        title: "Trading AI Agents",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Trade Ideas', description: 'AI-powered stock scanner and trading assistant.', url: 'https://www.trade-ideas.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=trade-ideas.com', dataAiHint: 'stock scanner', pricing: 'Paid' },
            { name: 'Tickeron', description: 'AI robots for traders.', url: 'https://tickeron.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tickeron.com', dataAiHint: 'ai trading', pricing: 'Paid' },
            { name: 'TrendSpider', description: 'Smart technical analysis for traders.', url: 'https://trendspider.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=trendspider.com', dataAiHint: 'technical analysis', pricing: 'Paid' },
        ]
    },
    {
        title: "Marketing AI Agents",
        icon: <Megaphone className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Jasper', description: 'AI Content Platform for marketing copy.', url: 'https://www.jasper.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=jasper.ai', dataAiHint: 'marketing copy', pricing: 'Paid' },
            { name: 'Flick', description: 'AI-powered social media marketing.', url: 'https://www.flick.tech/', image: 'https://www.google.com/s2/favicons?sz=128&domain=flick.tech', dataAiHint: 'social media', pricing: 'Paid' },
            { name: 'AdCreative.ai', description: 'Generate conversion-focused ad creatives.', url: 'https://www.adcreative.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=adcreative.ai', dataAiHint: 'ad creatives', pricing: 'Paid' },
        ]
    },
    {
        title: "HR AI Agents",
        icon: <UserPlus className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'HireVue', description: 'AI-driven hiring platform.', url: 'https://www.hirevue.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=hirevue.com', dataAiHint: 'hiring platform', pricing: 'Paid' },
            { name: 'Eightfold AI', description: 'Deep Learning Talent Intelligence Platform.', url: 'https://eightfold.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=eightfold.ai', dataAiHint: 'talent intelligence', pricing: 'Paid' },
            { name: 'Paradox', description: 'Conversational recruiting assistant Olivia.', url: 'https://www.paradox.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=paradox.ai', dataAiHint: 'recruiting assistant', pricing: 'Paid' },
        ]
    },
    {
        title: "Finance AI Agents",
        icon: <Wallet className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Docyt', description: 'AI-powered accounting automation platform.', url: 'https://www.docyt.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=docyt.com', dataAiHint: 'accounting automation', pricing: 'Paid' },
            { name: 'Zeni', description: 'AI-powered bookkeeping and accounting for startups.', url: 'https://www.zeni.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=zeni.ai', dataAiHint: 'startup finance', pricing: 'Paid' },
            { name: 'HighRadius', description: 'AI-powered order to cash and treasury management.', url: 'https://www.highradius.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=highradius.com', dataAiHint: 'treasury management', pricing: 'Paid' },
        ]
    },
    {
        title: "Travel Planning Agents",
        icon: <Globe className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'TripIt', description: 'Organizes your travel plans in one place.', url: 'https://www.tripit.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tripit.com', dataAiHint: 'travel plans', pricing: 'Freemium' },
            { name: 'KAYAK', description: 'Search for flights, hotels, and cars.', url: 'https://www.kayak.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=kayak.com', dataAiHint: 'travel search', pricing: 'Free' },
            { name: 'Expedia', description: 'Book your trips with ease.', url: 'https://www.expedia.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=expedia.com', dataAiHint: 'trip booking', pricing: 'Free' },
        ]
    },
    {
        title: "Education AI Tutors",
        icon: <GraduationCap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Khanmigo', description: 'AI-powered tutor from Khan Academy.', url: 'https://www.khanacademy.org/khan-labs', image: 'https://www.google.com/s2/favicons?sz=128&domain=khanacademy.org', dataAiHint: 'ai tutor', pricing: 'Paid' },
            { name: 'Socratic by Google', description: 'Learning app to help with homework.', url: 'https://socratic.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=socratic.org', dataAiHint: 'homework help', pricing: 'Free' },
            { name: 'Quizlet Q-Chat', description: 'AI tutor that turns study material into conversations.', url: 'https://quizlet.com/q-chat', image: 'https://www.google.com/s2/favicons?sz=128&domain=quizlet.com', dataAiHint: 'study chat', pricing: 'Freemium' },
        ]
    },
    {
        title: "Gaming AI Agents",
        icon: <Gamepad2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Inworld AI', description: 'Create AI characters for games and immersive experiences.', url: 'https://www.inworld.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=inworld.ai', dataAiHint: 'ai characters', pricing: 'Paid' },
            { name: 'Charisma.ai', description: 'Power realistic characters for interactive stories.', url: 'https://charisma.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=charisma.ai', dataAiHint: 'interactive stories', pricing: 'Paid' },
            { name: 'Ludo AI', description: 'AI-powered game research and ideation tool.', url: 'https://ludo.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ludo.ai', dataAiHint: 'game research', pricing: 'Paid' },
        ]
    },
    {
        title: "Workflow Agents",
        icon: <Workflow className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Adept', description: 'AI teammate to automate software workflows.', url: 'https://www.adept.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=adept.ai', dataAiHint: 'ai teammate', pricing: 'Paid' },
            { name: 'MultiOn', description: 'AI agent that automates tasks on the web.', url: 'https://multion.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=multion.ai', dataAiHint: 'web automation', pricing: 'Paid' },
        ]
    },
    {
        title: "Meeting Assistant Agents",
        icon: <Briefcase className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Otter.ai', description: 'AI meeting assistant that writes notes.', url: 'https://otter.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=otter.ai', dataAiHint: 'meeting notes', pricing: 'Freemium' },
            { name: 'Fireflies.ai', description: 'AI assistant for your meetings.', url: 'https://fireflies.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=fireflies.ai', dataAiHint: 'meeting recorder', pricing: 'Freemium' },
        ]
    },
    {
        title: "Scheduling Agents",
        icon: <Calendar className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Reclaim.ai', description: 'Smart time blocking for your calendar.', url: 'https://reclaim.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=reclaim.ai', dataAiHint: 'time blocking', pricing: 'Freemium' },
            { name: 'Clockwise', description: 'The smart calendar assistant.', url: 'https://www.getclockwise.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=getclockwise.com', dataAiHint: 'calendar assistant', pricing: 'Freemium' },
        ]
    },
    {
        title: "Email Management Agents",
        icon: <Mail className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'SaneBox', description: 'Smart email filtering and organization.', url: 'https://www.sanebox.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sanebox.com', dataAiHint: 'email filtering', pricing: 'Paid' },
            { name: 'Superhuman', description: 'The fastest email experience ever made.', url: 'https://superhuman.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=superhuman.com', dataAiHint: 'fast email', pricing: 'Paid' },
        ]
    },
    {
        title: "Social Media Agents",
        icon: <Share2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Lately', description: 'AI-powered social media marketing platform.', url: 'https://www.lately.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lately.ai', dataAiHint: 'social media', pricing: 'Paid' },
            { name: 'FeedHive', description: 'AI-powered social media marketing.', url: 'https://feedhive.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=feedhive.io', dataAiHint: 'social marketing', pricing: 'Paid' },
        ]
    },
    {
        title: "Productivity Agents",
        icon: <CheckSquare className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Brain.fm', description: 'Music designed for the brain to improve focus.', url: 'https://www.brain.fm/', image: 'https://www.google.com/s2/favicons?sz=128&domain=brain.fm', dataAiHint: 'focus music', pricing: 'Paid' },
        ]
    },
    {
        title: "E-commerce Agents",
        icon: <ShoppingCart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Nosto', description: 'AI-powered commerce experience platform.', url: 'https://www.nosto.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=nosto.com', dataAiHint: 'commerce experience', pricing: 'Paid' },
        ]
    },
    {
        title: "Recommendation Agents",
        icon: <ThumbsUp className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "Chatbot Agents",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Tidio', description: 'A comprehensive live chat and chatbot solution.', url: 'https://www.tidio.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tidio.com', dataAiHint: 'live chat', pricing: 'Freemium' },
        ]
    },
    {
        title: "Knowledge Base Agents",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Guru', description: 'A knowledge management solution that works in your workflow.', url: 'https://www.getguru.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=getguru.com', dataAiHint: 'company wiki', pricing: 'Freemium' },
        ]
    },
    {
        title: "Autonomous Agents",
        icon: <Cpu className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Auto-GPT', description: 'An experimental open-source attempt to make GPT-4 fully autonomous.', url: 'https://github.com/Significant-Gravitas/Auto-GPT', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'autonomous gpt', pricing: 'Free' },
            { name: 'AgentGPT', description: 'Assemble, configure, and deploy autonomous AI Agents.', url: 'https://agentgpt.reworkd.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=reworkd.ai', dataAiHint: 'ai agents', pricing: 'Freemium' },
        ]
    },
    {
        title: "Multi-Agent Systems",
        icon: <Network className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "Decision-Making Agents",
        icon: <Milestone className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "Monitoring Agents",
        icon: <Monitor className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Datadog', description: 'Monitoring and security platform for cloud applications.', url: 'https://www.datadoghq.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=datadoghq.com', dataAiHint: 'cloud monitoring', pricing: 'Paid' },
        ]
    },
    {
        title: "Compliance Agents",
        icon: <ShieldCheck className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Drata', description: 'Security and compliance automation.', url: 'https://drata.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=drata.com', dataAiHint: 'compliance automation', pricing: 'Paid' },
        ]
    },
    {
        title: "Security AI Agents",
        icon: <Shield className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Darktrace', description: 'Cyber AI for the real world.', url: 'https://www.darktrace.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=darktrace.com', dataAiHint: 'cyber ai', pricing: 'Paid' },
        ]
    },
];
