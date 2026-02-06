
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
            { name: 'The Business Idea Generator', description: 'AI-powered tool to generate and validate startup ideas.', url: 'https://businessideagenerator.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=businessideagenerator.com', dataAiHint: 'startup idea', pricing: 'Free' },
            { name: 'Y Combinator Co-Founder Matching', description: 'Find a co-founder for your startup.', url: 'https://www.ycombinator.com/cofounder-matching', image: 'https://www.google.com/s2/favicons?sz=128&domain=ycombinator.com', dataAiHint: 'find co-founder', pricing: 'Free' },
            { name: 'Trends.vc', description: 'Discover new markets and ideas.', url: 'https://trends.vc/', image: 'https://www.google.com/s2/favicons?sz=128&domain=trends.vc', dataAiHint: 'market research', pricing: 'Freemium' },
            { name: 'Kernal', description: 'A community for sharing and exploring startup ideas.', url: 'https://kern.al/', image: 'https://www.google.com/s2/favicons?sz=128&domain=kern.al', dataAiHint: 'startup ideas', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Market Research Tools",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Attest', description: 'Consumer research platform for fast insights.', url: 'https://www.askattest.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=askattest.com', dataAiHint: 'consumer research', pricing: 'Paid' },
            { name: 'Similarweb', description: 'Digital intelligence for your business.', url: 'https://www.similarweb.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=similarweb.com', dataAiHint: 'market intelligence', pricing: 'Freemium' },
            { name: 'SurveyMonkey', description: 'Online survey software and questionnaire tool.', url: 'https://www.surveymonkey.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=surveymonkey.com', dataAiHint: 'market survey', pricing: 'Freemium' },
            { name: 'Typeform', description: 'Create forms, surveys, and quizzes people enjoy answering.', url: 'https://www.typeform.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=typeform.com', dataAiHint: 'online forms', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Competitive Analysis Tools",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Crayon', description: 'Market and competitive intelligence software.', url: 'https://www.crayon.co/', image: 'https://www.google.com/s2/favicons?sz=128&domain=crayon.co', dataAiHint: 'competitive intel', pricing: 'Paid' },
            { name: 'SpyFu', description: 'Competitor keyword research tools.', url: 'https://www.spyfu.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=spyfu.com', dataAiHint: 'competitor keywords', pricing: 'Paid' },
            { name: 'Ahrefs', description: 'SEO tools & resources to analyze competitors.', url: 'https://ahrefs.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ahrefs.com', dataAiHint: 'competitor analysis', pricing: 'Paid' },
            { name: 'Semrush', description: 'Online visibility management platform.', url: 'https://www.semrush.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=semrush.com', dataAiHint: 'seo platform', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Business Plan Generators",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'LivePlan', description: 'Business plan software with performance tracking.', url: 'https://www.liveplan.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=liveplan.com', dataAiHint: 'business plan', pricing: 'Paid' },
            { name: 'Enloop', description: 'Free business plan writing software.', url: 'https://enloop.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=enloop.com', dataAiHint: 'business plan writer', pricing: 'Freemium' },
            { name: 'Bizplan', description: 'Business planning software for startups.', url: 'https://bizplan.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=bizplan.com', dataAiHint: 'startup plan', pricing: 'Paid' },
            { name: 'Upmetrics', description: 'Business planning software for entrepreneurs.', url: 'https://www.upmetrics.co/', image: 'https://www.google.com/s2/favicons?sz=128&domain=upmetrics.co', dataAiHint: 'entrepreneur tools', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Pitch Deck Creation Tools",
        icon: <Presentation className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Tome', description: 'The AI-powered storytelling format for presentations.', url: 'https://tome.app/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tome.app', dataAiHint: 'ai presentation', pricing: 'Freemium' },
            { name: 'Beautiful.ai', description: 'Presentation software that designs for you.', url: 'https://www.beautiful.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=beautiful.ai', dataAiHint: 'design presentation', pricing: 'Paid' },
            { name: 'Pitch', description: 'Collaborative presentation software for modern teams.', url: 'https://pitch.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pitch.com', dataAiHint: 'presentation software', pricing: 'Freemium' },
            { name: 'Canva', description: 'Design professional presentations and pitch decks.', url: 'https://www.canva.com/presentations/', image: 'https://www.google.com/s2/favicons?sz=128&domain=canva.com', dataAiHint: 'pitch deck design', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Financial Planning & Forecasting",
        icon: <LineChart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Glean', description: 'Modern financial planning and analysis.', url: 'https://glean.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=glean.io', dataAiHint: 'financial planning', pricing: 'Paid' },
            { name: 'Causal', description: 'The number-crunching tool for modern teams.', url: 'https://www.causal.app/', image: 'https://www.google.com/s2/favicons?sz=128&domain=causal.app', dataAiHint: 'financial modeling', pricing: 'Freemium' },
            { name: 'Digits', description: 'The finance tool for founders.', url: 'https://digits.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=digits.com', dataAiHint: 'founder finance', pricing: 'Paid' },
            { name: 'LivePlan', description: 'Financial forecasting integrated with business plans.', url: 'https://www.liveplan.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=liveplan.com', dataAiHint: 'financial forecast', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Fundraising & Investor Tools",
        icon: <Handshake className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Crunchbase', description: 'Platform for finding business information about private and public companies.', url: 'https://www.crunchbase.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=crunchbase.com', dataAiHint: 'investor data', pricing: 'Freemium' },
            { name: 'PitchBook', description: 'Financial data and software for private and public markets.', url: 'https://pitchbook.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pitchbook.com', dataAiHint: 'vc data', pricing: 'Paid' },
            { name: 'Visible.vc', description: 'Investor reporting platform for startups.', url: 'https://visible.vc/', image: 'https://www.google.com/s2/favicons?sz=128&domain=visible.vc', dataAiHint: 'investor reporting', pricing: 'Paid' },
            { name: 'DocSend', description: 'Securely share documents with real-time feedback.', url: 'https://www.docsend.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=docsend.com', dataAiHint: 'pitch deck', pricing: 'Paid' }
        ],
    },
    {
        title: "AI Valuation Tools",
        icon: <Calculator className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Carta', description: 'Equity management platform with valuation services.', url: 'https://carta.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=carta.com', dataAiHint: 'cap table', pricing: 'Paid' },
            { name: 'Equidam', description: 'Online platform for startup valuation.', url: 'https://www.equidam.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=equidam.com', dataAiHint: 'startup valuation', pricing: 'Paid' },
        ],
    },
    {
        title: "AI Legal & Compliance Tools",
        icon: <Shield className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Clerky', description: 'The easiest way for startups to get legal paperwork done.', url: 'https://www.clerky.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=clerky.com', dataAiHint: 'legal paperwork', pricing: 'Paid' },
            { name: 'Stripe Atlas', description: 'Form your company and set up a bank account.', url: 'https://stripe.com/atlas', image: 'https://www.google.com/s2/favicons?sz=128&domain=stripe.com', dataAiHint: 'company formation', pricing: 'Paid' },
            { name: 'Termly', description: 'Compliance solutions for your business.', url: 'https://termly.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=termly.io', dataAiHint: 'privacy policy', pricing: 'Freemium' },
            { name: 'LegalZoom', description: 'Online legal services for businesses.', url: 'https://www.legalzoom.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=legalzoom.com', dataAiHint: 'online legal', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Company Registration Tools",
        icon: <Building className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Stripe Atlas', description: 'Setup your internet business from anywhere.', url: 'https://stripe.com/atlas', image: 'https://www.google.com/s2/favicons?sz=128&domain=stripe.com', dataAiHint: 'business formation', pricing: 'Paid' },
            { name: 'Doola', description: 'Start your US company from anywhere.', url: 'https://www.doola.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=doola.com', dataAiHint: 'us company', pricing: 'Paid' },
            { name: 'Firstbase', description: 'Start your company in the US.', url: 'https://www.firstbase.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=firstbase.io', dataAiHint: 'company incorporation', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Product Management Tools",
        icon: <Box className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Productboard', description: 'The product management system.', url: 'https://www.productboard.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=productboard.com', dataAiHint: 'product roadmap', pricing: 'Paid' },
            { name: 'Aha!', description: 'The world\'s #1 roadmap software.', url: 'https://www.aha.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aha.io', dataAiHint: 'roadmap software', pricing: 'Paid' },
            { name: 'Jira Product Discovery', description: 'Prioritize and collaborate on new product ideas.', url: 'https://www.atlassian.com/software/jira/product-discovery', image: 'https://www.google.com/s2/favicons?sz=128&domain=atlassian.com', dataAiHint: 'product discovery', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI MVP & Prototyping Tools",
        icon: <Puzzle className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Figma', description: 'Collaborative interface design tool.', url: 'https://www.figma.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=figma.com', dataAiHint: 'prototyping', pricing: 'Freemium' },
             { name: 'Bubble', description: 'Build MVPs without code.', url: 'https://bubble.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=bubble.io', dataAiHint: 'no-code mvp', pricing: 'Freemium' },
             { name: 'Adalo', description: 'Build and launch a real app, no code needed.', url: 'https://www.adalo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=adalo.com', dataAiHint: 'app builder', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI UX/UI Design Tools",
        icon: <Brush className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Uizard', description: 'AI-powered design tool for creating apps and websites.', url: 'https://uizard.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=uizard.io', dataAiHint: 'ui design', pricing: 'Freemium' },
            { name: 'Framer', description: 'Design and build professional websites.', url: 'https://www.framer.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=framer.com', dataAiHint: 'interactive sites', pricing: 'Freemium' },
            { name: 'Sketch', description: 'The design platform for digital products.', url: 'https://www.sketch.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sketch.com', dataAiHint: 'mac design', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Website & App Builders",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Webflow', description: 'Build responsive websites visually.', url: 'https://webflow.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=webflow.com', dataAiHint: 'website builder', pricing: 'Freemium' },
            { name: 'Durable', description: 'AI website builder that generates a website in seconds.', url: 'https://durable.co/', image: 'https://www.google.com/s2/favicons?sz=128&domain=durable.co', dataAiHint: 'ai builder', pricing: 'Paid' },
            { name: 'Softr', description: 'Build custom apps for your business.', url: 'https://www.softr.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=softr.io', dataAiHint: 'apps from airtable', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI No-Code / Low-Code Platforms",
        icon: <Cpu className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Bubble', description: 'Build production-ready web apps without code.', url: 'https://bubble.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=bubble.io', dataAiHint: 'no-code app', pricing: 'Freemium' },
             { name: 'Retool', description: 'Build internal tools, remarkably fast.', url: 'https://retool.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=retool.com', dataAiHint: 'internal tools', pricing: 'Paid' },
             { name: 'Airtable', description: 'Low-code platform for building collaborative apps.', url: 'https://www.airtable.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=airtable.com', dataAiHint: 'database spreadsheet', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Marketing & Growth Tools",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'HubSpot', description: 'Marketing, sales, and service software.', url: 'https://www.hubspot.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=hubspot.com', dataAiHint: 'marketing automation', pricing: 'Freemium' },
            { name: 'Mailchimp', description: 'Email marketing and automation platform.', url: 'https://mailchimp.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mailchimp.com', dataAiHint: 'email marketing', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI SEO & Content Marketing",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Semrush', description: 'Online visibility management platform.', url: 'https://www.semrush.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=semrush.com', dataAiHint: 'seo tools', pricing: 'Paid' },
            { name: 'Surfer SEO', description: 'Content intelligence tool for SEO.', url: 'https://surferseo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=surferseo.com', dataAiHint: 'content optimization', pricing: 'Paid' },
        ],
    },
    {
        title: "AI Social Media Marketing",
        icon: <MessageCircle className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Buffer', description: 'Social media toolkit for small businesses.', url: 'https://buffer.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=buffer.com', dataAiHint: 'social scheduling', pricing: 'Freemium' },
            { name: 'Later', description: 'Visually plan and schedule social media posts.', url: 'https://later.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=later.com', dataAiHint: 'instagram scheduler', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI Customer Acquisition Tools",
        icon: <UserPlus className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'OptinMonster', description: 'Lead generation software for marketing.', url: 'https://optinmonster.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=optinmonster.com', dataAiHint: 'lead generation', pricing: 'Paid' },
            { name: 'Sumo', description: 'Free tools to automate your site growth.', url: 'https://sumo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sumo.com', dataAiHint: 'email capture', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI Sales & CRM Tools",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Pipedrive', description: 'Sales CRM and pipeline management tool.', url: 'https://www.pipedrive.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pipedrive.com', dataAiHint: 'sales crm', pricing: 'Paid' },
            { name: 'Close', description: 'The sales CRM for startups and SMBs.', url: 'https://close.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=close.com', dataAiHint: 'smb crm', pricing: 'Paid' },
        ],
    },
    {
        title: "AI Customer Support Tools",
        icon: <UserCog className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Intercom', description: 'Customer service platform for scaling businesses.', url: 'https://www.intercom.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=intercom.com', dataAiHint: 'customer support', pricing: 'Paid' },
            { name: 'Zendesk', description: 'Customer service software.', url: 'https://www.zendesk.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=zendesk.com', dataAiHint: 'help desk', pricing: 'Paid' },
        ],
    },
    {
        title: "AI Chatbots & Assistants",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Tidio', description: 'A comprehensive live chat and chatbot solution.', url: 'https://www.tidio.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tidio.com', dataAiHint: 'live chat', pricing: 'Freemium' },
            { name: 'Drift', description: 'Revenue acceleration platform.', url: 'https://www.drift.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=drift.com', dataAiHint: 'conversational marketing', pricing: 'Paid' },
        ],
    },
    {
        title: "AI User Feedback & Analytics",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Hotjar', description: 'Website heatmaps & behavior analytics tools.', url: 'https://www.hotjar.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=hotjar.com', dataAiHint: 'heatmaps', pricing: 'Freemium' },
            { name: 'FullStory', description: 'Digital experience intelligence.', url: 'https://www.fullstory.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=fullstory.com', dataAiHint: 'session replay', pricing: 'Paid' },
        ],
    },
    {
        title: "AI Product Analytics Tools",
        icon: <TestTube className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Mixpanel', description: 'Product analytics for converting, engaging, and retaining users.', url: 'https://mixpanel.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mixpanel.com', dataAiHint: 'user analytics', pricing: 'Freemium' },
            { name: 'Amplitude', description: 'Product analytics for data-driven teams.', url: 'https://amplitude.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=amplitude.com', dataAiHint: 'product intelligence', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI A/B Testing Tools",
        icon: <CheckCircle className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Optimizely', description: 'Digital Experience Platform with A/B testing.', url: 'https://www.optimizely.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=optimizely.com', dataAiHint: 'experimentation', pricing: 'Paid' },
        ],
    },
    {
        title: "AI Team Productivity Tools",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Slack', description: 'Team communication platform.', url: 'https://slack.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=slack.com', dataAiHint: 'team chat', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI Hiring & HR Tools",
        icon: <UserCog className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Gusto', description: 'Payroll, benefits, and HR for small businesses.', url: 'https://gusto.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=gusto.com', dataAiHint: 'payroll hr', pricing: 'Paid' },
        ],
    },
    {
        title: "AI Automation & Workflow Tools",
        icon: <Workflow className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Zapier', description: 'Automation for busy people, connecting your apps.', url: 'https://zapier.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=zapier.com', dataAiHint: 'app automation', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI Operations Management",
        icon: <Settings className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Scaling & Optimization Tools",
        icon: <UploadCloud className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Datadog', description: 'Monitoring and security platform for cloud applications.', url: 'https://www.datadoghq.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=datadoghq.com', dataAiHint: 'cloud monitoring', pricing: 'Paid' },
        ],
    }
];
