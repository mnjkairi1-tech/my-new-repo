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
            { name: 'Motion', description: 'AI assistant to manage your schedule and tasks.', url: 'https://www.usemotion.com/', image: getImage('motion-agent'), dataAiHint: getHint('motion-agent'), pricing: 'Paid' },
            { name: 'Sunsama', description: 'Daily planner for calm and focused work.', url: 'https://www.sunsama.com/', image: getImage('sunsama-agent'), dataAiHint: getHint('sunsama-agent'), pricing: 'Paid' },
            { name: 'Reclaim.ai', description: 'Smart time blocking for your calendar.', url: 'https://reclaim.ai/', image: getImage('reclaimai-agent'), dataAiHint: getHint('reclaimai-agent'), pricing: 'Freemium' },
            { name: 'Personal.ai', description: 'Your personal AI to remember everything.', url: 'https://www.personal.ai/', image: getImage('personalai'), dataAiHint: getHint('personalai'), pricing: 'Paid' },
        ]
    },
    {
        title: "Task Automation Agents",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Zapier', description: 'Connect your apps and automate workflows.', url: 'https://zapier.com/', image: getImage('zapier-agent'), dataAiHint: getHint('zapier-agent'), pricing: 'Freemium' },
            { name: 'Make', description: 'Visually create, build, and automate.', url: 'https://www.make.com/', image: getImage('make-agent'), dataAiHint: getHint('make-agent'), pricing: 'Freemium' },
            { name: 'Bardeen', description: 'AI meets automations. Automate manual workflows.', url: 'https://www.bardeen.ai/', image: getImage('bardeen-agent'), dataAiHint: getHint('bardeen-agent'), pricing: 'Freemium' },
            { name: 'n8n', description: 'Extendable workflow automation.', url: 'https://n8n.io/', image: getImage('n8n-agent'), dataAiHint: getHint('n8n-agent'), pricing: 'Freemium' },
        ]
    },
    {
        title: "Customer Support Agents",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Intercom', description: 'AI-powered customer service platform.', url: 'https://www.intercom.com/', image: getImage('intercom-agent'), dataAiHint: getHint('intercom-agent'), pricing: 'Paid' },
            { name: 'Zendesk', description: 'Customer service software with AI chatbots.', url: 'https://www.zendesk.com/', image: getImage('zendesk-agent'), dataAiHint: getHint('zendesk-agent'), pricing: 'Paid' },
            { name: 'Ada', description: 'An AI-powered customer service automation platform.', url: 'https://www.ada.cx/', image: getImage('ada-agent'), dataAiHint: getHint('ada-agent'), pricing: 'Paid' },
        ]
    },
    {
        title: "Sales AI Agents",
        icon: <DollarSign className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Exceed.ai', description: 'AI-powered sales assistant for qualifying and nurturing leads.', url: 'https://www.exceed.ai/', image: getImage('exceedai-agent'), dataAiHint: getHint('exceedai-agent'), pricing: 'Paid' },
            { name: 'Gong', description: 'Revenue intelligence platform for sales teams.', url: 'https://www.gong.io/', image: getImage('gong-agent'), dataAiHint: getHint('gong-agent'), pricing: 'Paid' },
            { name: 'Chorus.ai', description: 'Conversation intelligence for sales teams.', url: 'https://www.chorus.ai/', image: getImage('chorusai-agent'), dataAiHint: getHint('chorusai-agent'), pricing: 'Paid' },
        ]
    },
    {
        title: "Research AI Agents",
        icon: <BrainCircuit className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Elicit', description: 'The AI Research Assistant.', url: 'https://elicit.org/', image: getImage('elicit-agent'), dataAiHint: getHint('elicit-agent'), pricing: 'Freemium' },
            { name: 'Consensus', description: 'An AI search engine for research.', url: 'https://consensus.app/', image: getImage('consensus-agent'), dataAiHint: getHint('consensus-agent'), pricing: 'Freemium' },
            { name: 'Research Rabbit', description: 'Your personal research assistant.', url: 'https://www.researchrabbit.ai/', image: getImage('researchrabbit-agent'), dataAiHint: getHint('researchrabbit-agent'), pricing: 'Free' },
        ]
    },
    {
        title: "Coding AI Agents",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'GitHub Copilot', description: 'Your AI pair programmer.', url: 'https://github.com/features/copilot', image: getImage('copilot-agent'), dataAiHint: getHint('copilot-agent'), pricing: 'Paid' },
            { name: 'Cursor', description: 'The AI-first code editor.', url: 'https://cursor.sh/', image: getImage('cursor-agent'), dataAiHint: getHint('cursor-agent'), pricing: 'Freemium' },
            { name: 'Devin AI', description: 'The first AI software engineer.', url: 'https://www.cognition-labs.com/', image: getImage('devinai'), dataAiHint: getHint('devinai'), pricing: 'Paid' },
        ]
    },
    {
        title: "Data Analysis Agents",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Julius AI', description: 'AI data analyst to analyze spreadsheets and data.', url: 'https://julius.ai/', image: getImage('juliusai'), dataAiHint: getHint('juliusai'), pricing: 'Freemium' },
            { name: 'Akkio', description: 'No-code AI platform for real-time decisioning.', url: 'https://www.akkio.com/', image: getImage('akkio-agent'), dataAiHint: getHint('akkio-agent'), pricing: 'Paid' },
            { name: 'LIDA', description: 'Automatic generation of visualizations from data.', url: 'https://github.com/microsoft/lida', image: getImage('lida-agent'), dataAiHint: getHint('lida-agent'), pricing: 'Free' },
        ]
    },
    {
        title: "Trading AI Agents",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Trade Ideas', description: 'AI-powered stock scanner and trading assistant.', url: 'https://www.trade-ideas.com/', image: getImage('tradeideas'), dataAiHint: getHint('tradeideas'), pricing: 'Paid' },
            { name: 'Tickeron', description: 'AI robots for traders.', url: 'https://tickeron.com/', image: getImage('tickeron'), dataAiHint: getHint('tickeron'), pricing: 'Paid' },
            { name: 'TrendSpider', description: 'Smart technical analysis for traders.', url: 'https://trendspider.com/', image: getImage('trendspider'), dataAiHint: getHint('trendspider'), pricing: 'Paid' },
        ]
    },
    {
        title: "Marketing AI Agents",
        icon: <Megaphone className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Jasper', description: 'AI Content Platform for marketing copy.', url: 'https://www.jasper.ai/', image: getImage('jasper-agent'), dataAiHint: getHint('jasper-agent'), pricing: 'Paid' },
            { name: 'Flick', description: 'AI-powered social media marketing.', url: 'https://www.flick.tech/', image: getImage('flick-agent'), dataAiHint: getHint('flick-agent'), pricing: 'Paid' },
            { name: 'AdCreative.ai', description: 'Generate conversion-focused ad creatives.', url: 'https://www.adcreative.ai/', image: getImage('adcreative-agent'), dataAiHint: getHint('adcreative-agent'), pricing: 'Paid' },
        ]
    },
    {
        title: "HR AI Agents",
        icon: <UserPlus className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'HireVue', description: 'AI-driven hiring platform.', url: 'https://www.hirevue.com/', image: getImage('hirevue-agent'), dataAiHint: getHint('hirevue-agent'), pricing: 'Paid' },
            { name: 'Eightfold AI', description: 'Deep Learning Talent Intelligence Platform.', url: 'https://eightfold.ai/', image: getImage('eightfold-agent'), dataAiHint: getHint('eightfold-agent'), pricing: 'Paid' },
            { name: 'Paradox', description: 'Conversational recruiting assistant Olivia.', url: 'https://www.paradox.ai/', image: getImage('paradox-agent'), dataAiHint: getHint('paradox-agent'), pricing: 'Paid' },
        ]
    },
    {
        title: "Finance AI Agents",
        icon: <Wallet className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Docyt', description: 'AI-powered accounting automation platform.', url: 'https://www.docyt.com/', image: getImage('docyt-agent'), dataAiHint: getHint('docyt-agent'), pricing: 'Paid' },
            { name: 'Zeni', description: 'AI-powered bookkeeping and accounting for startups.', url: 'https://www.zeni.ai/', image: getImage('zeni-agent'), dataAiHint: getHint('zeni-agent'), pricing: 'Paid' },
            { name: 'HighRadius', description: 'AI-powered order to cash and treasury management.', url: 'https://www.highradius.com/', image: getImage('highradius'), dataAiHint: getHint('highradius'), pricing: 'Paid' },
        ]
    },
    {
        title: "Travel Planning Agents",
        icon: <Globe className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'TripIt', description: 'Organizes your travel plans in one place.', url: 'https://www.tripit.com/', image: getImage('tripit'), dataAiHint: getHint('tripit'), pricing: 'Freemium' },
            { name: 'KAYAK', description: 'Search for flights, hotels, and cars.', url: 'https://www.kayak.com/', image: getImage('kayak'), dataAiHint: getHint('kayak'), pricing: 'Free' },
            { name: 'Expedia', description: 'Book your trips with ease.', url: 'https://www.expedia.com/', image: getImage('expedia'), dataAiHint: getHint('expedia'), pricing: 'Free' },
        ]
    },
    {
        title: "Education AI Tutors",
        icon: <GraduationCap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Khanmigo', description: 'AI-powered tutor from Khan Academy.', url: 'https://www.khanacademy.org/khan-labs', image: getImage('khanmigo-agent'), dataAiHint: getHint('khanmigo-agent'), pricing: 'Paid' },
            { name: 'Socratic by Google', description: 'Learning app to help with homework.', url: 'https://socratic.org/', image: getImage('socratic-agent'), dataAiHint: getHint('socratic-agent'), pricing: 'Free' },
            { name: 'Quizlet Q-Chat', description: 'AI tutor that turns study material into conversations.', url: 'https://quizlet.com/q-chat', image: getImage('qchat-agent'), dataAiHint: getHint('qchat-agent'), pricing: 'Freemium' },
        ]
    },
    {
        title: "Gaming AI Agents",
        icon: <Gamepad2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Inworld AI', description: 'Create AI characters for games and immersive experiences.', url: 'https://www.inworld.ai/', image: getImage('inworldai'), dataAiHint: getHint('inworldai'), pricing: 'Paid' },
            { name: 'Charisma.ai', description: 'Power realistic characters for interactive stories.', url: 'https://charisma.ai/', image: getImage('charismaai'), dataAiHint: getHint('charismaai'), pricing: 'Paid' },
            { name: 'Ludo AI', description: 'AI-powered game research and ideation tool.', url: 'https://ludo.ai/', image: getImage('ludoai'), dataAiHint: getHint('ludoai'), pricing: 'Paid' },
        ]
    },
    {
        title: "Workflow Agents",
        icon: <Workflow className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Adept', description: 'AI teammate to automate software workflows.', url: 'https://www.adept.ai/', image: getImage('adeptai'), dataAiHint: getHint('adeptai'), pricing: 'Paid' },
            { name: 'MultiOn', description: 'AI agent that automates tasks on the web.', url: 'https://multion.ai/', image: getImage('multionai'), dataAiHint: getHint('multionai'), pricing: 'Paid' },
        ]
    },
    {
        title: "Meeting Assistant Agents",
        icon: <Briefcase className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Otter.ai', description: 'AI meeting assistant that writes notes.', url: 'https://otter.ai/', image: getImage('otter-agent'), dataAiHint: getHint('otter-agent'), pricing: 'Freemium' },
            { name: 'Fireflies.ai', description: 'AI assistant for your meetings.', url: 'https://fireflies.ai/', image: getImage('fireflies-agent'), dataAiHint: getHint('fireflies-agent'), pricing: 'Freemium' },
        ]
    },
    {
        title: "Scheduling Agents",
        icon: <Calendar className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Reclaim.ai', description: 'Smart time blocking for your calendar.', url: 'https://reclaim.ai/', image: getImage('reclaim-agent'), dataAiHint: getHint('reclaim-agent'), pricing: 'Freemium' },
            { name: 'Clockwise', description: 'The smart calendar assistant.', url: 'https://www.getclockwise.com/', image: getImage('clockwise-agent'), dataAiHint: getHint('clockwise-agent'), pricing: 'Freemium' },
        ]
    },
    {
        title: "Email Management Agents",
        icon: <Mail className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'SaneBox', description: 'Smart email filtering and organization.', url: 'https://www.sanebox.com/', image: getImage('sanebox-agent'), dataAiHint: getHint('sanebox-agent'), pricing: 'Paid' },
            { name: 'Superhuman', description: 'The fastest email experience ever made.', url: 'https://superhuman.com/', image: getImage('superhuman-agent'), dataAiHint: getHint('superhuman-agent'), pricing: 'Paid' },
        ]
    },
    {
        title: "Social Media Agents",
        icon: <Share2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Lately', description: 'AI-powered social media marketing platform.', url: 'https://www.lately.ai/', image: getImage('lately-agent'), dataAiHint: getHint('lately-agent'), pricing: 'Paid' },
            { name: 'FeedHive', description: 'AI-powered social media marketing.', url: 'https://feedhive.io/', image: getImage('feedhive-agent'), dataAiHint: getHint('feedhive-agent'), pricing: 'Paid' },
        ]
    },
    {
        title: "Productivity Agents",
        icon: <CheckSquare className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Brain.fm', description: 'Music designed for the brain to improve focus.', url: 'https://www.brain.fm/', image: getImage('brainfm'), dataAiHint: getHint('brainfm'), pricing: 'Paid' },
        ]
    },
    {
        title: "E-commerce Agents",
        icon: <ShoppingCart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Nosto', description: 'AI-powered commerce experience platform.', url: 'https://www.nosto.com/', image: getImage('nosto-agent'), dataAiHint: getHint('nosto-agent'), pricing: 'Paid' },
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
             { name: 'Tidio', description: 'A comprehensive live chat and chatbot solution.', url: 'https://www.tidio.com/', image: getImage('tidio-agent'), dataAiHint: getHint('tidio-agent'), pricing: 'Freemium' },
        ]
    },
    {
        title: "Knowledge Base Agents",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Guru', description: 'A knowledge management solution that works in your workflow.', url: 'https://www.getguru.com/', image: getImage('guru-agent'), dataAiHint: getHint('guru-agent'), pricing: 'Freemium' },
        ]
    },
    {
        title: "Autonomous Agents",
        icon: <Cpu className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Auto-GPT', description: 'An experimental open-source attempt to make GPT-4 fully autonomous.', url: 'https://github.com/Significant-Gravitas/Auto-GPT', image: getImage('autogpt-agent'), dataAiHint: getHint('autogpt-agent'), pricing: 'Free' },
            { name: 'AgentGPT', description: 'Assemble, configure, and deploy autonomous AI Agents.', url: 'https://agentgpt.reworkd.ai/', image: getImage('agentgpt-agent'), dataAiHint: getHint('agentgpt-agent'), pricing: 'Freemium' },
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
            { name: 'Datadog', description: 'Monitoring and security platform for cloud applications.', url: 'https://www.datadoghq.com/', image: getImage('datadog-agent'), dataAiHint: getHint('datadog-agent'), pricing: 'Paid' },
        ]
    },
    {
        title: "Compliance Agents",
        icon: <ShieldCheck className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Drata', description: 'Security and compliance automation.', url: 'https://drata.com/', image: getImage('drata-agent'), dataAiHint: getHint('drata-agent'), pricing: 'Paid' },
        ]
    },
    {
        title: "Security AI Agents",
        icon: <Shield className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Darktrace', description: 'Cyber AI for the real world.', url: 'https://www.darktrace.com/', image: getImage('darktrace-agent'), dataAiHint: getHint('darktrace-agent'), pricing: 'Paid' },
        ]
    },
];
