'use client';

import React from 'react';
import { User, DollarSign, Clock, ListChecks, MessageSquare, FileText, Bot, Code, Palette, Video, Globe, Zap, BarChart, Heart, Star, Briefcase, Users, BookOpen, Search, Repeat, FileSignature, CreditCard, Calendar, Mail, Workflow, FileLock2, UserCog, TestTube, CheckCircle, UploadCloud, Rocket, Lightbulb } from 'lucide-react';

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

export const freelancerToolData: ToolCategory[] = [
    {
        title: "AI Personal Assistant",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Motion', description: 'Uses AI to intelligently plan your day.', url: 'https://www.usemotion.com/', image: 'https://picsum.photos/seed/motion-fl/600/400', dataAiHint: 'ai planner', pricing: 'Paid' },
            { name: 'Sunsama', description: 'Daily planner for calm, focused work.', url: 'https://www.sunsama.com/', image: 'https://picsum.photos/seed/sunsama-fl/600/400', dataAiHint: 'daily planner', pricing: 'Paid' },
            { name: 'Reclaim.ai', description: 'Smart time blocking for your calendar.', url: 'https://reclaim.ai/', image: 'https://picsum.photos/seed/reclaimai-fl/600/400', dataAiHint: 'calendar ai', pricing: 'Freemium' },
            { name: 'Clockwise', description: 'The smart calendar assistant.', url: 'https://www.getclockwise.com/', image: 'https://picsum.photos/seed/clockwise-fl/600/400', dataAiHint: 'focus time', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Task & Time Management",
        icon: <Clock className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Toggl Track', description: 'Effortless time tracking and reporting.', url: 'https://toggl.com/track/', image: 'https://picsum.photos/seed/toggl-fl-time/600/400', dataAiHint: 'time tracker', pricing: 'Freemium' },
            { name: 'Harvest', description: 'Simple time tracking, powerful reporting.', url: 'https://www.getharvest.com/', image: 'https://picsum.photos/seed/harvest-fl-time/600/400', dataAiHint: 'time reporting', pricing: 'Freemium' },
            { name: 'Clockify', description: 'Free time tracker and timesheet app for teams.', url: 'https://clockify.me/', image: 'https://picsum.photos/seed/clockify-fl/600/400', dataAiHint: 'timesheet app', pricing: 'Free' },
            { name: 'RescueTime', description: 'Find your ideal work-life balance.', url: 'https://www.rescuetime.com/', image: 'https://picsum.photos/seed/rescuetime-fl/600/400', dataAiHint: 'work balance', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Project Management",
        icon: <ListChecks className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Bonsai', description: 'All-in-one product suite for freelancers.', url: 'https://www.hellobonsai.com/', image: 'https://picsum.photos/seed/bonsai-fl-pm/600/400', dataAiHint: 'freelancer suite', pricing: 'Paid' },
            { name: 'Trello', description: 'A visual collaboration tool for your team.', url: 'https://trello.com/', image: 'https://picsum.photos/seed/trello-fl-pm/600/400', dataAiHint: 'kanban board', pricing: 'Freemium' },
            { name: 'Asana', description: 'Work management for teams.', url: 'https://asana.com/', image: 'https://picsum.photos/seed/asana-fl/600/400', dataAiHint: 'team tasks', pricing: 'Freemium' },
            { name: 'ClickUp', description: 'One app to replace them all.', url: 'https://clickup.com/', image: 'https://picsum.photos/seed/clickup-fl/600/400', dataAiHint: 'productivity platform', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Client Communication",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Slack', description: 'Team communication platform.', url: 'https://slack.com/', image: 'https://picsum.photos/seed/slack-fl/600/400', dataAiHint: 'team chat', pricing: 'Freemium' },
            { name: 'Loom', description: 'Video messaging for work.', url: 'https://www.loom.com/', image: 'https://picsum.photos/seed/loom-fl/600/400', dataAiHint: 'video message', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI Proposal & Bid Writing",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'PandaDoc', description: 'Create, send, and e-sign proposals.', url: 'https://www.pandadoc.com/', image: 'https://picsum.photos/seed/pandadoc-fl/600/400', dataAiHint: 'proposal software', pricing: 'Paid' },
            { name: 'Proposify', description: 'Online proposal software for modern teams.', url: 'https://www.proposify.com/', image: 'https://picsum.photos/seed/proposify-fl/600/400', dataAiHint: 'proposal creation', pricing: 'Paid' },
        ],
    },
    {
        title: "AI Contract & Agreement Tools",
        icon: <FileSignature className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'DocuSign', description: 'Electronic signature and agreement cloud.', url: 'https://www.docusign.com/', image: 'https://picsum.photos/seed/docusign-fl/600/400', dataAiHint: 'esignature', pricing: 'Paid' },
            { name: 'HelloSign', description: 'The easiest way to sign documents.', url: 'https://www.hellosign.com/', image: 'https://picsum.photos/seed/hellosign/600/400', dataAiHint: 'document signing', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI Invoice & Billing Tools",
        icon: <DollarSign className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'FreshBooks', description: 'Accounting software for small businesses.', url: 'https://www.freshbooks.com/', image: 'https://picsum.photos/seed/freshbooks-fl-inv/600/400', dataAiHint: 'invoicing software', pricing: 'Paid' },
             { name: 'Wave', description: 'Free invoicing & accounting software.', url: 'https://www.waveapps.com/', image: 'https://picsum.photos/seed/wave-fl-inv/600/400', dataAiHint: 'free accounting', pricing: 'Free' },
             { name: 'QuickBooks Self-Employed', description: 'Tax software for freelancers.', url: 'https://quickbooks.intuit.com/self-employed/', image: 'https://picsum.photos/seed/qb-self/600/400', dataAiHint: 'freelance tax', pricing: 'Paid' },
             { name: 'Bonsai', description: 'Invoicing as part of an all-in-one suite.', url: 'https://www.hellobonsai.com/invoicing', image: 'https://picsum.photos/seed/bonsai-inv/600/400', dataAiHint: 'freelance invoice', pricing: 'Paid' },
        ],
    },
    {
        title: "AI Payment & Expense Tracking",
        icon: <CreditCard className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'PayPal', description: 'Online payments system.', url: 'https://www.paypal.com/', image: 'https://picsum.photos/seed/paypal-fl-pay/600/400', dataAiHint: 'online payment', pricing: 'Freemium' },
             { name: 'Stripe', description: 'Online payment processing for internet businesses.', url: 'https://stripe.com/', image: 'https://picsum.photos/seed/stripe-fl/600/400', dataAiHint: 'payment processing', pricing: 'Paid' },
             { name: 'Expensify', description: 'Expense reports done in a snap.', url: 'https://www.expensify.com/', image: 'https://picsum.photos/seed/expensify-fl/600/400', dataAiHint: 'expense reports', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI Work Scheduling Tools",
        icon: <Calendar className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Calendly', description: 'Simple, beautiful scheduling.', url: 'https://calendly.com/', image: 'https://picsum.photos/seed/calendly-fl/600/400', dataAiHint: 'appointment scheduling', pricing: 'Freemium' },
            { name: 'Acuity Scheduling', description: 'Online appointment scheduling software.', url: 'https://www.acuityscheduling.com/', image: 'https://picsum.photos/seed/acuity-fl/600/400', dataAiHint: 'online appointments', pricing: 'Paid' },
        ],
    },
    {
        title: "AI Writing & Content Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Grammarly', description: 'AI-powered writing assistant.', url: 'https://www.grammarly.com/', image: 'https://picsum.photos/seed/grammarly-fl/600/400', dataAiHint: 'grammar check', pricing: 'Freemium' },
            { name: 'Jasper', description: 'AI Content Platform for teams.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-fl/600/400', dataAiHint: 'ai writer', pricing: 'Paid' },
            { name: 'Copy.ai', description: 'AI-powered copywriter for marketing.', url: 'https://www.copy.ai/', image: 'https://picsum.photos/seed/copyai-fl/600/400', dataAiHint: 'marketing copy', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI Design & Creative Tools",
        icon: <Palette className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Canva', description: 'Design anything. Publish anywhere.', url: 'https://www.canva.com/', image: 'https://picsum.photos/seed/canva-fl/600/400', dataAiHint: 'design platform', pricing: 'Freemium' },
            { name: 'Figma', description: 'Collaborative interface design tool.', url: 'https://www.figma.com/', image: 'https://picsum.photos/seed/figma-fl/600/400', dataAiHint: 'ui design', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI Video & Media Tools",
        icon: <Video className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Descript', description: 'All-in-one audio & video editor.', url: 'https://www.descript.com/', image: 'https://picsum.photos/seed/descript-fl/600/400', dataAiHint: 'video editing', pricing: 'Freemium' },
            { name: 'Veed.io', description: 'Online video editor with AI features.', url: 'https://www.veed.io/', image: 'https://picsum.photos/seed/veed-fl/600/400', dataAiHint: 'online editor', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI Code & Development Tools",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'GitHub Copilot', description: 'Your AI pair programmer.', url: 'https://github.com/features/copilot', image: 'https://picsum.photos/seed/copilot-fl/600/400', dataAiHint: 'ai coding', pricing: 'Paid' },
            { name: 'Tabnine', description: 'AI assistant for software developers.', url: 'https://www.tabnine.com/', image: 'https://picsum.photos/seed/tabnine-fl/600/400', dataAiHint: 'code completion', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI Website & Portfolio Builders",
        icon: <Globe className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Webflow', description: 'Build responsive websites visually.', url: 'https://webflow.com/', image: 'https://picsum.photos/seed/webflow-fl/600/400', dataAiHint: 'website builder', pricing: 'Freemium' },
            { name: 'Framer', description: 'Design and build professional websites.', url: 'https://www.framer.com/', image: 'https://picsum.photos/seed/framer-fl/600/400', dataAiHint: 'interactive sites', pricing: 'Freemium' },
            { name: 'Carrd', description: 'Simple, free, fully responsive one-page sites.', url: 'https://carrd.co/', image: 'https://picsum.photos/seed/carrd-fl/600/400', dataAiHint: 'one-page sites', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI Social Media Management",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Buffer', description: 'Social media toolkit for small businesses.', url: 'https://buffer.com/', image: 'https://picsum.photos/seed/buffer-fl-social/600/400', dataAiHint: 'social scheduling', pricing: 'Freemium' },
             { name: 'Later', description: 'Visually plan and schedule social media posts.', url: 'https://later.com/', image: 'https://picsum.photos/seed/later-fl-social/600/400', dataAiHint: 'instagram scheduler', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI Client Management (CRM)",
        icon: <Briefcase className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Bonsai', description: 'All-in-one product suite with client CRM.', url: 'https://www.hellobonsai.com/', image: 'https://picsum.photos/seed/bonsai-crm/600/400', dataAiHint: 'freelance crm', pricing: 'Paid' },
            { name: 'Dubsado', description: 'Business management solution for creatives.', url: 'https://www.dubsado.com/', image: 'https://picsum.photos/seed/dubsado-crm/600/400', dataAiHint: 'creative crm', pricing: 'Paid' },
            { name: 'HoneyBook', description: 'Manage projects, book clients, and get paid.', url: 'https://www.honeybook.com/', image: 'https://picsum.photos/seed/honeybook/600/400', dataAiHint: 'client management', pricing: 'Paid' },
        ],
    },
    {
        title: "AI Productivity & Focus Tools",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Freedom', description: 'Block websites, apps, and the internet.', url: 'https://freedom.to/', image: 'https://picsum.photos/seed/freedom-fl/600/400', dataAiHint: 'website blocker', pricing: 'Paid' },
            { name: 'Forest', description: 'Stay focused by growing virtual trees.', url: 'https://www.forestapp.cc/', image: 'https://picsum.photos/seed/forest-app-fl/600/400', dataAiHint: 'focus timer', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI Meeting & Call Assistants",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Otter.ai', description: 'AI meeting assistant that writes notes.', url: 'https://otter.ai/', image: 'https://picsum.photos/seed/otter-fl/600/400', dataAiHint: 'meeting notes', pricing: 'Freemium' },
            { name: 'Fireflies.ai', description: 'AI assistant for your meetings.', url: 'https://fireflies.ai/', image: 'https://picsum.photos/seed/fireflies-fl/600/400', dataAiHint: 'meeting recorder', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI Note-Taking & Documentation",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Notion', description: 'The all-in-one workspace.', url: 'https://www.notion.so/', image: 'https://picsum.photos/seed/notion-fl/600/400', dataAiHint: 'workspace app', pricing: 'Freemium' },
            { name: 'Evernote', description: 'Remember everything important.', url: 'https://evernote.com/', image: 'https://picsum.photos/seed/evernote-fl/600/400', dataAiHint: 'note taking', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI File & Cloud Management",
        icon: <FileLock2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Dropbox', description: 'Cloud storage and file synchronization.', url: 'https://www.dropbox.com/', image: 'https://picsum.photos/seed/dropbox-fl/600/400', dataAiHint: 'cloud storage', pricing: 'Freemium' },
            { name: 'Google Drive', description: 'Store, share, and collaborate on files.', url: 'https://www.google.com/drive/', image: 'https://picsum.photos/seed/gdrive-fl/600/400', dataAiHint: 'online storage', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI Skill Learning & Upskilling",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Skillshare', description: 'Online learning community for creators.', url: 'https://www.skillshare.com/', image: 'https://picsum.photos/seed/skillshare-fl/600/400', dataAiHint: 'creative classes', pricing: 'Paid' },
             { name: 'Udemy', description: 'A global marketplace for learning and teaching online.', url: 'https://www.udemy.com/', image: 'https://picsum.photos/seed/udemy-fl/600/400', dataAiHint: 'online courses', pricing: 'Paid' },
        ],
    },
    {
        title: "AI Job Matching & Gig Finder",
        icon: <Briefcase className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Upwork', description: 'Leading online talent solution.', url: 'https://www.upwork.com/', image: 'https://picsum.photos/seed/upwork-fl-job/600/400', dataAiHint: 'freelance jobs', pricing: 'Freemium' },
            { name: 'Fiverr', description: 'Freelance services marketplace.', url: 'https://www.fiverr.com/', image: 'https://picsum.photos/seed/fiverr-fl-job/600/400', dataAiHint: 'gig economy', pricing: 'Freemium' },
            { name: 'Toptal', description: 'Hire freelance talent from the top 3%.', url: 'https://www.toptal.com/', image: 'https://picsum.photos/seed/toptal-fl-job/600/400', dataAiHint: 'top freelancers', pricing: 'Paid' },
            { name: 'Freelancer.com', description: 'Hire expert freelancers for any job, online.', url: 'https://www.freelancer.com/', image: 'https://picsum.photos/seed/freelancercom/600/400', dataAiHint: 'find jobs', pricing: 'Freemium' },
        ],
    },
];
