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
            { name: 'Y Combinator Co-Founder Matching', description: 'Find a co-founder for your startup.', url: 'https://www.ycombinator.com/cofounder-matching', image: 'https://picsum.photos/seed/yc-cofounder/600/400', dataAiHint: 'find co-founder', pricing: 'Free' },
            { name: 'Trends.vc', description: 'Discover new markets and ideas.', url: 'https://trends.vc/', image: 'https://picsum.photos/seed/trends-vc/600/400', dataAiHint: 'market research', pricing: 'Freemium' },
            { name: 'Kernal', description: 'A community for sharing and exploring startup ideas.', url: 'https://kern.al/', image: 'https://picsum.photos/seed/kernal-ideas/600/400', dataAiHint: 'startup ideas', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Market Research Tools",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Attest', description: 'Consumer research platform for fast insights.', url: 'https://www.askattest.com/', image: 'https://picsum.photos/seed/attest-startup/600/400', dataAiHint: 'consumer research', pricing: 'Paid' },
            { name: 'Similarweb', description: 'Digital intelligence for your business.', url: 'https://www.similarweb.com/', image: 'https://picsum.photos/seed/similarweb-market/600/400', dataAiHint: 'market intelligence', pricing: 'Freemium' },
            { name: 'SurveyMonkey', description: 'Online survey software and questionnaire tool.', url: 'https://www.surveymonkey.com/', image: 'https://picsum.photos/seed/surveymonkey-startup/600/400', dataAiHint: 'market survey', pricing: 'Freemium' },
            { name: 'Typeform', description: 'Create forms, surveys, and quizzes people enjoy answering.', url: 'https://www.typeform.com/', image: 'https://picsum.photos/seed/typeform-startup/600/400', dataAiHint: 'online forms', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Competitive Analysis Tools",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Crayon', description: 'Market and competitive intelligence software.', url: 'https://www.crayon.co/', image: 'https://picsum.photos/seed/crayon-startup/600/400', dataAiHint: 'competitive intel', pricing: 'Paid' },
            { name: 'SpyFu', description: 'Competitor keyword research tools.', url: 'https://www.spyfu.com/', image: 'https://picsum.photos/seed/spyfu-startup/600/400', dataAiHint: 'competitor keywords', pricing: 'Paid' },
            { name: 'Ahrefs', description: 'SEO tools & resources to analyze competitors.', url: 'https://ahrefs.com/', image: 'https://picsum.photos/seed/ahrefs-startup/600/400', dataAiHint: 'competitor analysis', pricing: 'Paid' },
            { name: 'Semrush', description: 'Online visibility management platform.', url: 'https://www.semrush.com/', image: 'https://picsum.photos/seed/semrush-startup/600/400', dataAiHint: 'seo platform', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Business Plan Generators",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'LivePlan', description: 'Business plan software with performance tracking.', url: 'https://www.liveplan.com/', image: 'https://picsum.photos/seed/liveplan-startup/600/400', dataAiHint: 'business plan', pricing: 'Paid' },
            { name: 'Enloop', description: 'Free business plan writing software.', url: 'https://enloop.com/', image: 'https://picsum.photos/seed/enloop/600/400', dataAiHint: 'business plan writer', pricing: 'Freemium' },
            { name: 'Bizplan', description: 'Business planning software for startups.', url: 'https://bizplan.com/', image: 'https://picsum.photos/seed/bizplan/600/400', dataAiHint: 'startup plan', pricing: 'Paid' },
            { name: 'Upmetrics', description: 'Business planning software for entrepreneurs.', url: 'https://www.upmetrics.co/', image: 'https://picsum.photos/seed/upmetrics/600/400', dataAiHint: 'entrepreneur tools', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Pitch Deck Creation Tools",
        icon: <Presentation className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Tome', description: 'The AI-powered storytelling format for presentations.', url: 'https://tome.app/', image: 'https://picsum.photos/seed/tome-startup/600/400', dataAiHint: 'ai presentation', pricing: 'Freemium' },
            { name: 'Beautiful.ai', description: 'Presentation software that designs for you.', url: 'https://www.beautiful.ai/', image: 'https://picsum.photos/seed/beautifulai-pitch/600/400', dataAiHint: 'design presentation', pricing: 'Paid' },
            { name: 'Pitch', description: 'Collaborative presentation software for modern teams.', url: 'https://pitch.com/', image: 'https://picsum.photos/seed/pitch-startup/600/400', dataAiHint: 'presentation software', pricing: 'Freemium' },
            { name: 'Canva', description: 'Design professional presentations and pitch decks.', url: 'https://www.canva.com/presentations/', image: 'https://picsum.photos/seed/canva-pitch/600/400', dataAiHint: 'pitch deck design', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Financial Planning & Forecasting",
        icon: <LineChart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Glean', description: 'Modern financial planning and analysis.', url: 'https://glean.io/', image: 'https://picsum.photos/seed/glean-finance-startup/600/400', dataAiHint: 'financial planning', pricing: 'Paid' },
            { name: 'Causal', description: 'The number-crunching tool for modern teams.', url: 'https://www.causal.app/', image: 'https://picsum.photos/seed/causal-startup/600/400', dataAiHint: 'financial modeling', pricing: 'Freemium' },
            { name: 'Digits', description: 'The finance tool for founders.', url: 'https://digits.com/', image: 'https://picsum.photos/seed/digits-finance/600/400', dataAiHint: 'founder finance', pricing: 'Paid' },
            { name: 'LivePlan', description: 'Financial forecasting integrated with business plans.', url: 'https://www.liveplan.com/', image: 'https://picsum.photos/seed/liveplan-finance/600/400', dataAiHint: 'financial forecast', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Fundraising & Investor Tools",
        icon: <Handshake className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Crunchbase', description: 'Platform for finding business information about private and public companies.', url: 'https://www.crunchbase.com/', image: 'https://picsum.photos/seed/crunchbase-startup/600/400', dataAiHint: 'investor data', pricing: 'Freemium' },
            { name: 'PitchBook', description: 'Financial data and software for private and public markets.', url: 'https://pitchbook.com/', image: 'https://picsum.photos/seed/pitchbook-startup/600/400', dataAiHint: 'vc data', pricing: 'Paid' },
            { name: 'Visible.vc', description: 'Investor reporting platform for startups.', url: 'https://visible.vc/', image: 'https://picsum.photos/seed/visiblevc/600/400', dataAiHint: 'investor reporting', pricing: 'Paid' },
            { name: 'DocSend', description: 'Securely share documents with real-time feedback.', url: 'https://www.docsend.com/', image: 'https://picsum.photos/seed/docsend-startup/600/400', dataAiHint: 'pitch deck', pricing: 'Paid' }
        ],
    },
    {
        title: "AI Valuation Tools",
        icon: <Calculator className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Carta', description: 'Equity management platform with valuation services.', url: 'https://carta.com/', image: 'https://picsum.photos/seed/carta-valuation/600/400', dataAiHint: 'cap table', pricing: 'Paid' },
            { name: 'Equidam', description: 'Online platform for startup valuation.', url: 'https://www.equidam.com/', image: 'https://picsum.photos/seed/equidam-valuation/600/400', dataAiHint: 'startup valuation', pricing: 'Paid' },
        ],
    },
    {
        title: "AI Legal & Compliance Tools",
        icon: <Shield className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Clerky', description: 'The easiest way for startups to get legal paperwork done.', url: 'https://www.clerky.com/', image: 'https://picsum.photos/seed/clerky-startup/600/400', dataAiHint: 'legal paperwork', pricing: 'Paid' },
            { name: 'Stripe Atlas', description: 'Form your company and set up a bank account.', url: 'https://stripe.com/atlas', image: 'https://picsum.photos/seed/stripe-atlas-legal/600/400', dataAiHint: 'company formation', pricing: 'Paid' },
            { name: 'Termly', description: 'Compliance solutions for your business.', url: 'https://termly.io/', image: 'https://picsum.photos/seed/termly-legal/600/400', dataAiHint: 'privacy policy', pricing: 'Freemium' },
            { name: 'LegalZoom', description: 'Online legal services for businesses.', url: 'https://www.legalzoom.com/', image: 'https://picsum.photos/seed/legalzoom-startup/600/400', dataAiHint: 'online legal', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Company Registration Tools",
        icon: <Building className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Stripe Atlas', description: 'Setup your internet business from anywhere.', url: 'https://stripe.com/atlas', image: 'https://picsum.photos/seed/stripe-atlas-startup/600/400', dataAiHint: 'business formation', pricing: 'Paid' },
            { name: 'Doola', description: 'Start your US company from anywhere.', url: 'https://www.doola.com/', image: 'https://picsum.photos/seed/doola/600/400', dataAiHint: 'us company', pricing: 'Paid' },
            { name: 'Firstbase', description: 'Start your company in the US.', url: 'https://www.firstbase.io/', image: 'https://picsum.photos/seed/firstbase/600/400', dataAiHint: 'company incorporation', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Product Management Tools",
        icon: <Box className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Productboard', description: 'The product management system.', url: 'https://www.productboard.com/', image: 'https://picsum.photos/seed/productboard-startup/600/400', dataAiHint: 'product roadmap', pricing: 'Paid' },
            { name: 'Aha!', description: 'The world\'s #1 roadmap software.', url: 'https://www.aha.io/', image: 'https://picsum.photos/seed/aha-startup/600/400', dataAiHint: 'roadmap software', pricing: 'Paid' },
            { name: 'Jira Product Discovery', description: 'Prioritize and collaborate on new product ideas.', url: 'https://www.atlassian.com/software/jira/product-discovery', image: 'https://picsum.photos/seed/jira-discovery/600/400', dataAiHint: 'product discovery', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI MVP & Prototyping Tools",
        icon: <Puzzle className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Figma', description: 'Collaborative interface design tool.', url: 'https://www.figma.com/', image: 'https://picsum.photos/seed/figma-mvp-startup/600/400', dataAiHint: 'prototyping', pricing: 'Freemium' },
             { name: 'Bubble', description: 'Build MVPs without code.', url: 'https://bubble.io/', image: 'https://picsum.photos/seed/bubble-mvp/600/400', dataAiHint: 'no-code mvp', pricing: 'Freemium' },
             { name: 'Adalo', description: 'Build and launch a real app, no code needed.', url: 'https://www.adalo.com/', image: 'https://picsum.photos/seed/adalo-mvp/600/400', dataAiHint: 'app builder', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI UX/UI Design Tools",
        icon: <Brush className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Uizard', description: 'AI-powered design tool for creating apps and websites.', url: 'https://uizard.io/', image: 'https://picsum.photos/seed/uizard-ux-startup/600/400', dataAiHint: 'ui design', pricing: 'Freemium' },
            { name: 'Framer', description: 'Design and build professional websites.', url: 'https://www.framer.com/', image: 'https://picsum.photos/seed/framer-ux/600/400', dataAiHint: 'interactive sites', pricing: 'Freemium' },
            { name: 'Sketch', description: 'The design platform for digital products.', url: 'https://www.sketch.com/', image: 'https://picsum.photos/seed/sketch-ux/600/400', dataAiHint: 'mac design', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Website & App Builders",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Webflow', description: 'Build responsive websites visually.', url: 'https://webflow.com/', image: 'https://picsum.photos/seed/webflow-builder-startup/600/400', dataAiHint: 'website builder', pricing: 'Freemium' },
            { name: 'Durable', description: 'AI website builder that generates a website in seconds.', url: 'https://durable.co/', image: 'https://picsum.photos/seed/durable-web-startup/600/400', dataAiHint: 'ai builder', pricing: 'Paid' },
            { name: 'Softr', description: 'Build custom apps for your business.', url: 'https://www.softr.io/', image: 'https://picsum.photos/seed/softr-startup/600/400', dataAiHint: 'apps from airtable', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI No-Code / Low-Code Platforms",
        icon: <Cpu className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Bubble', description: 'Build production-ready web apps without code.', url: 'https://bubble.io/', image: 'https://picsum.photos/seed/bubble-nocode-startup/600/400', dataAiHint: 'no-code app', pricing: 'Freemium' },
             { name: 'Retool', description: 'Build internal tools, remarkably fast.', url: 'https://retool.com/', image: 'https://picsum.photos/seed/retool-startup/600/400', dataAiHint: 'internal tools', pricing: 'Paid' },
             { name: 'Airtable', description: 'Low-code platform for building collaborative apps.', url: 'https://www.airtable.com/', image: 'https://picsum.photos/seed/airtable-nocode-startup/600/400', dataAiHint: 'database spreadsheet', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Marketing & Growth Tools",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'HubSpot', description: 'Marketing, sales, and service software.', url: 'https://www.hubspot.com/', image: 'https://picsum.photos/seed/hubspot-growth/600/400', dataAiHint: 'marketing automation', pricing: 'Freemium' },
            { name: 'Mailchimp', description: 'Email marketing and automation platform.', url: 'https://mailchimp.com/', image: 'https://picsum.photos/seed/mailchimp-growth/600/400', dataAiHint: 'email marketing', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI SEO & Content Marketing",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Semrush', description: 'Online visibility management platform.', url: 'https://www.semrush.com/', image: 'https://picsum.photos/seed/semrush-content/600/400', dataAiHint: 'seo tools', pricing: 'Paid' },
            { name: 'Surfer SEO', description: 'Content intelligence tool for SEO.', url: 'https://surferseo.com/', image: 'https://picsum.photos/seed/surferseo-startup/600/400', dataAiHint: 'content optimization', pricing: 'Paid' },
        ],
    },
    {
        title: "AI Social Media Marketing",
        icon: <MessageCircle className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Buffer', description: 'Social media toolkit for small businesses.', url: 'https://buffer.com/', image: 'https://picsum.photos/seed/buffer-startup/600/400', dataAiHint: 'social scheduling', pricing: 'Freemium' },
            { name: 'Later', description: 'Visually plan and schedule social media posts.', url: 'https://later.com/', image: 'https://picsum.photos/seed/later-startup/600/400', dataAiHint: 'instagram scheduler', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI Customer Acquisition Tools",
        icon: <UserPlus className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'OptinMonster', description: 'Lead generation software for marketing.', url: 'https://optinmonster.com/', image: 'https://picsum.photos/seed/optinmonster-startup/600/400', dataAiHint: 'lead generation', pricing: 'Paid' },
            { name: 'Sumo', description: 'Free tools to automate your site growth.', url: 'https://sumo.com/', image: 'https://picsum.photos/seed/sumo-startup/600/400', dataAiHint: 'email capture', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI Sales & CRM Tools",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Pipedrive', description: 'Sales CRM and pipeline management tool.', url: 'https://www.pipedrive.com/', image: 'https://picsum.photos/seed/pipedrive-startup/600/400', dataAiHint: 'sales crm', pricing: 'Paid' },
            { name: 'Close', description: 'The sales CRM for startups and SMBs.', url: 'https://close.com/', image: 'https://picsum.photos/seed/close-crm/600/400', dataAiHint: 'smb crm', pricing: 'Paid' },
        ],
    },
    {
        title: "AI Customer Support Tools",
        icon: <UserCog className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Intercom', description: 'Customer service platform for scaling businesses.', url: 'https://www.intercom.com/', image: 'https://picsum.photos/seed/intercom-startup/600/400', dataAiHint: 'customer support', pricing: 'Paid' },
            { name: 'Zendesk', description: 'Customer service software.', url: 'https://www.zendesk.com/', image: 'https://picsum.photos/seed/zendesk-startup/600/400', dataAiHint: 'help desk', pricing: 'Paid' },
        ],
    },
    {
        title: "AI Chatbots & Assistants",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Tidio', description: 'A comprehensive live chat and chatbot solution.', url: 'https://www.tidio.com/', image: 'https://picsum.photos/seed/tidio-startup/600/400', dataAiHint: 'live chat', pricing: 'Freemium' },
            { name: 'Drift', description: 'Revenue acceleration platform.', url: 'https://www.drift.com/', image: 'https://picsum.photos/seed/drift-startup/600/400', dataAiHint: 'conversational marketing', pricing: 'Paid' },
        ],
    },
    {
        title: "AI User Feedback & Analytics",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Hotjar', description: 'Website heatmaps & behavior analytics tools.', url: 'https://www.hotjar.com/', image: 'https://picsum.photos/seed/hotjar-startup/600/400', dataAiHint: 'heatmaps', pricing: 'Freemium' },
            { name: 'FullStory', description: 'Digital experience intelligence.', url: 'https://www.fullstory.com/', image: 'https://picsum.photos/seed/fullstory-startup/600/400', dataAiHint: 'session replay', pricing: 'Paid' },
        ],
    },
    {
        title: "AI Product Analytics Tools",
        icon: <TestTube className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Mixpanel', description: 'Product analytics for converting, engaging, and retaining users.', url: 'https://mixpanel.com/', image: 'https://picsum.photos/seed/mixpanel-startup/600/400', dataAiHint: 'user analytics', pricing: 'Freemium' },
            { name: 'Amplitude', description: 'Product analytics for data-driven teams.', url: 'https://amplitude.com/', image: 'https://picsum.photos/seed/amplitude-startup/600/400', dataAiHint: 'product intelligence', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI A/B Testing Tools",
        icon: <CheckCircle className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Optimizely', description: 'Digital Experience Platform with A/B testing.', url: 'https://www.optimizely.com/', image: 'https://picsum.photos/seed/optimizely-startup/600/400', dataAiHint: 'experimentation', pricing: 'Paid' },
        ],
    },
    {
        title: "AI Team Productivity Tools",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Slack', description: 'Team communication platform.', url: 'https://slack.com/', image: 'https://picsum.photos/seed/slack-startup/600/400', dataAiHint: 'team chat', pricing: 'Freemium' },
        ],
    },
    {
        title: "AI Hiring & HR Tools",
        icon: <UserCog className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Gusto', description: 'Payroll, benefits, and HR for small businesses.', url: 'https://gusto.com/', image: 'https://picsum.photos/seed/gusto-hr-startup/600/400', dataAiHint: 'payroll hr', pricing: 'Paid' },
        ],
    },
    {
        title: "AI Automation & Workflow Tools",
        icon: <Workflow className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Zapier', description: 'Automation for busy people, connecting your apps.', url: 'https://zapier.com/', image: 'https://picsum.photos/seed/zapier-startup/600/400', dataAiHint: 'app automation', pricing: 'Freemium' },
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
            { name: 'Datadog', description: 'Monitoring and security platform for cloud applications.', url: 'https://www.datadoghq.com/', image: 'https://picsum.photos/seed/datadog-startup/600/400', dataAiHint: 'cloud monitoring', pricing: 'Paid' },
        ],
    }
];
