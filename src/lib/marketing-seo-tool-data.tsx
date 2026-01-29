'use client';

import React from 'react';
import { 
    Lightbulb, TrendingUp, Search, FileText, Bot, BookOpen, Code, Link as LinkIcon, ClipboardCheck, Zap,
    Globe, MessageSquare, Calendar, Users, Mail, Filter, Target, GitBranch, BarChart, Eye, ThumbsUp,
    Store, ShoppingCart, Mic, GanttChartSquare, Rocket, UserCheck, TestTube, UserSquare, Handshake, Shield,
    PenTool, Video, ImageIcon, LineChart, UserCog, UserPlus
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

export const marketingSeoToolData: ToolCategory[] = [
    {
        title: "All-in-One SEO Platforms",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Semrush', description: 'Online visibility management platform.', url: 'https://www.semrush.com/', image: 'https://picsum.photos/seed/semrush-seo/600/400', dataAiHint: 'seo platform', pricing: 'Paid' },
            { name: 'Ahrefs', description: 'SEO tools & resources to grow your search traffic.', url: 'https://ahrefs.com/', image: 'https://picsum.photos/seed/ahrefs-seo/600/400', dataAiHint: 'backlink checker', pricing: 'Paid' },
            { name: 'Moz Pro', description: 'All-in-one suite of SEO tools.', url: 'https://moz.com/products/pro', image: 'https://picsum.photos/seed/mozpro-seo/600/400', dataAiHint: 'seo software', pricing: 'Paid' },
            { name: 'SE Ranking', description: 'All-in-one SEO software for business owners, agencies, and enterprises.', url: 'https://seranking.com/', image: 'https://picsum.photos/seed/seranking-seo/600/400', dataAiHint: 'seo rank', pricing: 'Paid' },
            { name: 'Sistrix', description: 'The toolbox for SEO professionals.', url: 'https://www.sistrix.com/', image: 'https://picsum.photos/seed/sistrix/600/400', dataAiHint: 'seo toolbox', pricing: 'Paid' },
            { name: 'Searchmetrics', description: 'Enterprise search and content marketing platform.', url: 'https://www.searchmetrics.com/', image: 'https://picsum.photos/seed/searchmetrics/600/400', dataAiHint: 'enterprise seo', pricing: 'Paid' },
            { name: 'Conductor', description: 'Organic Marketing Platform.', url: 'https://www.conductor.com/', image: 'https://picsum.photos/seed/conductor-seo/600/400', dataAiHint: 'organic marketing', pricing: 'Paid' },
            { name: 'BrightEdge', description: 'AI-powered enterprise SEO platform.', url: 'https://www.brightedge.com/', image: 'https://picsum.photos/seed/brightedge/600/400', dataAiHint: 'enterprise seo', pricing: 'Paid' },
            { name: 'Similarweb', description: 'Digital intelligence for your business.', url: 'https://www.similarweb.com/', image: 'https://picsum.photos/seed/similarweb-seo/600/400', dataAiHint: 'market intelligence', pricing: 'Freemium' },
            { name: 'SpyFu', description: 'Competitor keyword research tools.', url: 'https://www.spyfu.com/', image: 'https://picsum.photos/seed/spyfu-seo/600/400', dataAiHint: 'competitor analysis', pricing: 'Paid' },
            { name: 'Serpstat', description: 'All-in-one SEO platform for professionals.', url: 'https://serpstat.com/', image: 'https://picsum.photos/seed/serpstat-seo/600/400', dataAiHint: 'seo analysis', pricing: 'Paid' },
            { name: 'Ubersuggest', description: 'Keyword tracking and SEO tool by Neil Patel.', url: 'https://neilpatel.com/ubersuggest/', image: 'https://picsum.photos/seed/ubersuggest/600/400', dataAiHint: 'neil patel seo', pricing: 'Freemium' },
            { name: 'Mangools', description: 'SEO tools you will love.', url: 'https://mangools.com/', image: 'https://picsum.photos/seed/mangools/600/400', dataAiHint: 'user-friendly seo', pricing: 'Paid' },
            { name: 'CognitiveSEO', description: 'A complete SEO software suite.', url: 'https://cognitiveseo.com/', image: 'https://picsum.photos/seed/cognitiveseo/600/400', dataAiHint: 'unnatural links', pricing: 'Paid' },
            { name: 'Raven Tools', description: 'White-label SEO reports and marketing tools.', url: 'https://raventools.com/', image: 'https://picsum.photos/seed/raventools/600/400', dataAiHint: 'seo reporting', pricing: 'Paid' },
            { name: 'SEO PowerSuite', description: 'Desktop SEO software for experts.', url: 'https://www.link-assistant.com/', image: 'https://picsum.photos/seed/seopowersuite/600/400', dataAiHint: 'desktop seo', pricing: 'Freemium' },
            { name: 'WebCEO', description: 'Professional SEO tools for agencies.', url: 'https://www.webceo.com/', image: 'https://picsum.photos/seed/webceo/600/400', dataAiHint: 'agency seo', pricing: 'Paid' },
            { name: 'Alexa', description: 'Marketing stack for competitive analysis.', url: 'https://www.alexa.com/siteinfo', image: 'https://picsum.photos/seed/alexa-seo/600/400', dataAiHint: 'competitive analysis', pricing: 'Paid' },
            { name: 'SheerSEO', description: 'Automated SEO software.', url: 'https://www.sheerseo.com/', image: 'https://picsum.photos/seed/sheerseo/600/400', dataAiHint: 'automated seo', pricing: 'Freemium' },
            { name: 'Netpeak Software', description: 'SEO tools for professionals: Spider & Checker.', url: 'https://netpeaksoftware.com/', image: 'https://picsum.photos/seed/netpeak/600/400', dataAiHint: 'seo spider', pricing: 'Paid' },
        ]
    },
    {
        title: "Content Marketing & SEO",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Surfer SEO', description: 'Content intelligence tool for SEO.', url: 'https://surferseo.com/', image: 'https://picsum.photos/seed/surferseo-content/600/400', dataAiHint: 'seo content', pricing: 'Paid' },
            { name: 'MarketMuse', description: 'AI content planning and optimization software.', url: 'https://www.marketmuse.com/', image: 'https://picsum.photos/seed/marketmuse-content/600/400', dataAiHint: 'content strategy', pricing: 'Paid' },
            { name: 'Frase', description: 'AI for content that answers questions.', url: 'https://www.frase.io/', image: 'https://picsum.photos/seed/frase-content/600/400', dataAiHint: 'content optimization', pricing: 'Paid' },
            { name: 'Clearscope', description: 'Content optimization software.', url: 'https://www.clearscope.io/', image: 'https://picsum.photos/seed/clearscope-content/600/400', dataAiHint: 'content writing', pricing: 'Paid' },
            { name: 'BuzzSumo', description: 'Find what content is performing best.', url: 'https://buzzsumo.com/', image: 'https://picsum.photos/seed/buzzsumo-content/600/400', dataAiHint: 'content analysis', pricing: 'Paid' },
            { name: 'Copy.ai', description: 'AI-powered copywriter for marketing.', url: 'https://www.copy.ai/', image: 'https://picsum.photos/seed/copyai-content/600/400', dataAiHint: 'marketing copy', pricing: 'Freemium' },
            { name: 'Jasper', description: 'AI content platform for teams.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-content/600/400', dataAiHint: 'ai writer', pricing: 'Paid' },
            { name: 'Outranking', description: 'AI-powered content strategy and writing.', url: 'https://www.outranking.io/', image: 'https://picsum.photos/seed/outranking/600/400', dataAiHint: 'content research', pricing: 'Paid' },
            { name: 'Scalenut', description: 'AI-powered content research and writing.', url: 'https://www.scalenut.com/', image: 'https://picsum.photos/seed/scalenut-content/600/400', dataAiHint: 'content creation', pricing: 'Paid' },
            { name: 'GrowthBar', description: 'AI for SEO.', url: 'https://www.growthbarseo.com/', image: 'https://picsum.photos/seed/growthbar/600/400', dataAiHint: 'ai for seo', pricing: 'Freemium' },
            { name: 'NeuralText', description: 'AI-powered content marketing platform.', url: 'https://www.neuraltext.com/', image: 'https://picsum.photos/seed/neuraltext/600/400', dataAiHint: 'content platform', pricing: 'Freemium' },
            { name: 'Topic', description: 'Content optimization tool.', url: 'https://www.usetopic.com/', image: 'https://picsum.photos/seed/topic-content/600/400', dataAiHint: 'content brief', pricing: 'Paid' },
            { name: 'WriterZen', description: 'Keyword research and content creation tool.', url: 'https://writerzen.net/', image: 'https://picsum.photos/seed/writerzen/600/400', dataAiHint: 'keyword tool', pricing: 'Paid' },
            { name: 'Contentful', description: 'Composable content platform.', url: 'https://www.contentful.com/', image: 'https://picsum.photos/seed/contentful/600/400', dataAiHint: 'headless cms', pricing: 'Paid' },
            { name: 'CoSchedule Headline Analyzer', description: 'Write headlines that drive traffic.', url: 'https://coschedule.com/headline-analyzer', image: 'https://picsum.photos/seed/coschedule/600/400', dataAiHint: 'headline analyzer', pricing: 'Free' },
            { name: 'StoryChief', description: 'Collaborative content marketing platform.', url: 'https://storychief.io/', image: 'https://picsum.photos/seed/storychief/600/400', dataAiHint: 'content collaboration', pricing: 'Freemium' },
            { name: 'Grammarly', description: 'AI-powered writing assistant.', url: 'https://www.grammarly.com/', image: 'https://picsum.photos/seed/grammarly-content/600/400', dataAiHint: 'writing assistant', pricing: 'Freemium' },
            { name: 'Hemingway App', description: 'Makes your writing bold and clear.', url: 'https://hemingwayapp.com/', image: 'https://picsum.photos/seed/hemingway-content/600/400', dataAiHint: 'writing clarity', pricing: 'Free' },
            { name: 'Contently', description: 'Content marketing platform and talent network.', url: 'https://contently.com/', image: 'https://picsum.photos/seed/contently/600/400', dataAiHint: 'talent network', pricing: 'Paid' },
            { name: 'Welcome', description: 'Marketing orchestration platform.', url: 'https://www.welcome.com/', image: 'https://picsum.photos/seed/welcome-mktg/600/400', dataAiHint: 'content marketing', pricing: 'Paid' },
        ]
    },
    {
        title: "Social Media Marketing",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Sprout Social', description: 'Social media management and optimization platform.', url: 'https://sproutsocial.com/', image: 'https://picsum.photos/seed/sprout-social-smm/600/400', dataAiHint: 'social management', pricing: 'Paid' },
            { name: 'Hootsuite', description: 'Manage all your social media in one place.', url: 'https://www.hootsuite.com/', image: 'https://picsum.photos/seed/hootsuite-smm/600/400', dataAiHint: 'social dashboard', pricing: 'Paid' },
            { name: 'Buffer', description: 'Social media toolkit for small businesses.', url: 'https://buffer.com/', image: 'https://picsum.photos/seed/buffer-smm/600/400', dataAiHint: 'social scheduling', pricing: 'Freemium' },
            { name: 'Agorapulse', description: 'Social media management software for agencies.', url: 'https://www.agorapulse.com/', image: 'https://picsum.photos/seed/agorapulse-smm/600/400', dataAiHint: 'social inbox', pricing: 'Paid' },
            { name: 'Later', description: 'Visually plan and schedule social media posts.', url: 'https://later.com/', image: 'https://picsum.photos/seed/later-smm/600/400', dataAiHint: 'instagram scheduler', pricing: 'Freemium' },
            { name: 'MeetEdgar', description: 'Social media automation and scheduling.', url: 'https://meetedgar.com/', image: 'https://picsum.photos/seed/meetedgar-smm/600/400', dataAiHint: 'content recycling', pricing: 'Paid' },
            { name: 'Flick', description: 'Hashtag and analytics tool for Instagram.', url: 'https://www.flick.tech/', image: 'https://picsum.photos/seed/flick-smm/600/400', dataAiHint: 'instagram hashtags', pricing: 'Paid' },
            { name: 'Brand24', description: 'Social media monitoring tool.', url: 'https://brand24.com/', image: 'https://picsum.photos/seed/brand24-smm/600/400', dataAiHint: 'media monitoring', pricing: 'Paid' },
            { name: 'Talkwalker', description: 'Social listening and analytics platform.', url: 'https://www.talkwalker.com/', image: 'https://picsum.photos/seed/talkwalker-smm/600/400', dataAiHint: 'social listening', pricing: 'Paid' },
            { name: 'Canva', description: 'Design anything for social media.', url: 'https://www.canva.com/', image: 'https://picsum.photos/seed/canva-smm/600/400', dataAiHint: 'social graphics', pricing: 'Freemium' },
            { name: 'ManyChat', description: 'Chat Marketing platform.', url: 'https://manychat.com/', image: 'https://picsum.photos/seed/manychat-smm/600/400', dataAiHint: 'messenger bot', pricing: 'Freemium' },
            { name: 'Iconosquare', description: 'Advanced analytics and management suite.', url: 'https://www.iconosquare.com/', image: 'https://picsum.photos/seed/iconosquare-smm/600/400', dataAiHint: 'social analytics', pricing: 'Paid' },
            { name: 'Tailwind', description: 'Smart marketing for Pinterest & Instagram.', url: 'https://www.tailwindapp.com/', image: 'https://picsum.photos/seed/tailwind-smm/600/400', dataAiHint: 'pinterest scheduler', pricing: 'Freemium' },
            { name: 'Predis.ai', description: 'AI Social Media Post Generator.', url: 'https://predis.ai/', image: 'https://picsum.photos/seed/predis-smm/600/400', dataAiHint: 'post generator', pricing: 'Freemium' },
            { name: 'SocialBee', description: 'AI-powered social media management tool.', url: 'https://socialbee.io/', image: 'https://picsum.photos/seed/socialbee-smm/600/400', dataAiHint: 'content categories', pricing: 'Paid' },
            { name: 'Crowdfire', description: 'Social media management, simplified.', url: 'https://www.crowdfireapp.com/', image: 'https://picsum.photos/seed/crowdfire/600/400', dataAiHint: 'content curation', pricing: 'Freemium' },
            { name: 'Lately', description: 'AI-powered social media marketing platform.', url: 'https://www.lately.ai/', image: 'https://picsum.photos/seed/lately-smm/600/400', dataAiHint: 'social content', pricing: 'Paid' },
            { name: 'Sendible', description: 'Social media management tool for agencies.', url: 'https://www.sendible.com/', image: 'https://picsum.photos/seed/sendible-smm/600/400', dataAiHint: 'agency tools', pricing: 'Paid' },
            { name: 'eclincher', description: 'Social media management tool.', url: 'https://eclincher.com/', image: 'https://picsum.photos/seed/eclincher/600/400', dataAiHint: 'social management', pricing: 'Paid' },
            { name: 'MavSocial', description: 'Social media management & advertising.', url: 'https://mavsocial.com/', image: 'https://picsum.photos/seed/mavsocial/600/400', dataAiHint: 'social advertising', pricing: 'Paid' },
        ]
    },
    {
        title: "Email Marketing",
        icon: <Mail className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Mailchimp', description: 'All-in-one marketing platform.', url: 'https://mailchimp.com/', image: 'https://picsum.photos/seed/mailchimp-email/600/400', dataAiHint: 'email campaigns', pricing: 'Freemium' },
            { name: 'ConvertKit', description: 'The email marketing platform for creators.', url: 'https://convertkit.com/', image: 'https://picsum.photos/seed/convertkit/600/400', dataAiHint: 'creator marketing', pricing: 'Freemium' },
            { name: 'ActiveCampaign', description: 'Customer experience automation.', url: 'https://www.activecampaign.com/', image: 'https://picsum.photos/seed/activecampaign-email/600/400', dataAiHint: 'email automation', pricing: 'Paid' },
            { name: 'Klaviyo', description: 'Email & SMS marketing for e-commerce.', url: 'https://www.klaviyo.com/', image: 'https://picsum.photos/seed/klaviyo-email/600/400', dataAiHint: 'ecommerce email', pricing: 'Freemium' },
            { name: 'HubSpot', description: 'Email marketing software.', url: 'https://www.hubspot.com/products/marketing/email', image: 'https://picsum.photos/seed/hubspot-email/600/400', dataAiHint: 'crm email', pricing: 'Freemium' },
            { name: 'GetResponse', description: 'Inbound marketing software.', url: 'https://www.getresponse.com/', image: 'https://picsum.photos/seed/getresponse/600/400', dataAiHint: 'marketing software', pricing: 'Freemium' },
            { name: 'MailerLite', description: 'Email marketing for small businesses.', url: 'https://www.mailerlite.com/', image: 'https://picsum.photos/seed/mailerlite/600/400', dataAiHint: 'small business', pricing: 'Freemium' },
            { name: 'Drip', description: 'Marketing automation for E-commerce.', url: 'https://www.drip.com/', image: 'https://picsum.photos/seed/drip-email/600/400', dataAiHint: 'ecommerce crm', pricing: 'Paid' },
            { name: 'AWeber', description: 'Email marketing for small businesses.', url: 'https://www.aweber.com/', image: 'https://picsum.photos/seed/aweber/600/400', dataAiHint: 'email automation', pricing: 'Freemium' },
            { name: 'Sendinblue (Brevo)', description: 'All-in-one marketing platform.', url: 'https://www.brevo.com/', image: 'https://picsum.photos/seed/brevo-email/600/400', dataAiHint: 'all-in-one marketing', pricing: 'Freemium' },
            { name: 'Campaign Monitor', description: 'Email marketing software.', url: 'https://www.campaignmonitor.com/', image: 'https://picsum.photos/seed/campaignmonitor/600/400', dataAiHint: 'email templates', pricing: 'Paid' },
            { name: 'Constant Contact', description: 'Email & digital marketing.', url: 'https://www.constantcontact.com/', image: 'https://picsum.photos/seed/constantcontact/600/400', dataAiHint: 'digital marketing', pricing: 'Paid' },
            { name: 'Omnisend', description: 'Email & SMS marketing for e-commerce.', url: 'https://www.omnisend.com/', image: 'https://picsum.photos/seed/omnisend-email/600/400', dataAiHint: 'sms marketing', pricing: 'Freemium' },
            { name: 'Moosend', description: 'Email marketing automation platform.', url: 'https://moosend.com/', image: 'https://picsum.photos/seed/moosend/600/400', dataAiHint: 'automation platform', pricing: 'Paid' },
            { name: 'Flodesk', description: 'Design emails people love to open.', url: 'https://flodesk.com/', image: 'https://picsum.photos/seed/flodesk/600/400', dataAiHint: 'beautiful emails', pricing: 'Paid' },
            { name: 'Mailjet', description: 'Email delivery and marketing service.', url: 'https://www.mailjet.com/', image: 'https://picsum.photos/seed/mailjet/600/400', dataAiHint: 'transactional email', pricing: 'Freemium' },
            { name: 'Keap', description: 'CRM and marketing automation for small businesses.', url: 'https://keap.com/', image: 'https://picsum.photos/seed/keap/600/400', dataAiHint: 'small business crm', pricing: 'Paid' },
            { name: 'dotdigital', description: 'Customer engagement platform.', url: 'https://dotdigital.com/', image: 'https://picsum.photos/seed/dotdigital/600/400', dataAiHint: 'engagement platform', pricing: 'Paid' },
            { name: 'Remarkety', description: 'Email marketing for eCommerce.', url: 'https://www.remarkety.com/', image: 'https://picsum.photos/seed/remarkety/600/400', dataAiHint: 'ecommerce marketing', pricing: 'Paid' },
            { name: 'Emma', description: 'Email marketing and automation.', url: 'https://myemma.com/', image: 'https://picsum.photos/seed/emma-email/600/400', dataAiHint: 'email automation', pricing: 'Paid' },
        ]
    },
    {
        title: "Marketing Automation",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'HubSpot', description: 'Marketing automation software.', url: 'https://www.hubspot.com/products/marketing/marketing-automation', image: 'https://picsum.photos/seed/hubspot-auto/600/400', dataAiHint: 'lead nurturing', pricing: 'Freemium' },
            { name: 'Marketo', description: 'Marketing automation software.', url: 'https://business.adobe.com/products/marketo/adobe-marketo.html', image: 'https://picsum.photos/seed/marketo-auto/600/400', dataAiHint: 'b2b marketing', pricing: 'Paid' },
            { name: 'Pardot', description: 'Salesforce marketing automation.', url: 'https://www.salesforce.com/products/marketing-cloud/account-engagement/', image: 'https://picsum.photos/seed/pardot/600/400', dataAiHint: 'salesforce marketing', pricing: 'Paid' },
            { name: 'Customer.io', description: 'Automated messaging platform.', url: 'https://customer.io/', image: 'https://picsum.photos/seed/customerio/600/400', dataAiHint: 'messaging platform', pricing: 'Paid' },
            { name: 'Autopilot', description: 'Marketing automation software made visual.', url: 'https://www.autopilothq.com/', image: 'https://picsum.photos/seed/autopilot/600/400', dataAiHint: 'visual marketing', pricing: 'Paid' },
            { name: 'Ortto', description: 'The customer journey and data platform.', url: 'https://ortto.com/', image: 'https://picsum.photos/seed/ortto/600/400', dataAiHint: 'customer journey', pricing: 'Paid' },
            { name: 'Encharge.io', description: 'Marketing automation for startups.', url: 'https://encharge.io/', image: 'https://picsum.photos/seed/encharge/600/400', dataAiHint: 'startup marketing', pricing: 'Paid' },
            { name: 'User.com', description: 'All-in-one marketing automation platform.', url: 'https://user.com/', image: 'https://picsum.photos/seed/usercom/600/400', dataAiHint: 'all-in-one platform', pricing: 'Freemium' },
            { name: 'Act-On', description: 'Growth marketing automation platform.', url: 'https://act-on.com/', image: 'https://picsum.photos/seed/acton/600/400', dataAiHint: 'growth marketing', pricing: 'Paid' },
            { name: 'SharpSpring', description: 'Revenue growth marketing platform.', url: 'https://sharpspring.com/', image: 'https://picsum.photos/seed/sharpspring/600/400', dataAiHint: 'revenue growth', pricing: 'Paid' },
            { name: 'Eloqua', description: 'Oracle marketing automation.', url: 'https://www.oracle.com/marketing/eloqua/', image: 'https://picsum.photos/seed/eloqua/600/400', dataAiHint: 'oracle marketing', pricing: 'Paid' },
            { name: 'Mautic', description: 'Open source marketing automation.', url: 'https://www.mautic.org/', image: 'https://picsum.photos/seed/mautic/600/400', dataAiHint: 'open source', pricing: 'Free' },
            { name: 'Salesmanago', description: 'Customer engagement platform.', url: 'https://www.salesmanago.com/', image: 'https://picsum.photos/seed/salesmanago/600/400', dataAiHint: 'customer engagement', pricing: 'Paid' },
            { name: 'WebEngage', description: 'User retention platform.', url: 'https://webengage.com/', image: 'https://picsum.photos/seed/webengage/600/400', dataAiHint: 'user retention', pricing: 'Paid' },
            { name: 'Resulticks', description: 'Real-time conversation marketing.', url: 'https://www.resulticks.com/', image: 'https://picsum.photos/seed/resulticks/600/400', dataAiHint: 'conversation marketing', pricing: 'Paid' },
            { name: 'Maropost', description: 'Marketing automation for multi-channel engagement.', url: 'https://www.maropost.com/', image: 'https://picsum.photos/seed/maropost/600/400', dataAiHint: 'multi-channel', pricing: 'Paid' },
            { name: 'Drift', description: 'Conversational marketing and sales platform.', url: 'https://www.drift.com/', image: 'https://picsum.photos/seed/drift-mktg/600/400', dataAiHint: 'conversational ai', pricing: 'Paid' },
            { name: 'Intercom', description: 'Customer service platform with automation features.', url: 'https://www.intercom.com/', image: 'https://picsum.photos/seed/intercom-auto/600/400', dataAiHint: 'customer messaging', pricing: 'Paid' },
            { name: 'Outfunnel', description: 'Connect your sales and marketing tools.', url: 'https://outfunnel.com/', image: 'https://picsum.photos/seed/outfunnel/600/400', dataAiHint: 'sales marketing', pricing: 'Paid' },
            { name: 'Pipedrive', description: 'Sales CRM and pipeline management tool.', url: 'https://www.pipedrive.com/', image: 'https://picsum.photos/seed/pipedrive-mktg/600/400', dataAiHint: 'sales pipeline', pricing: 'Paid' },
        ]
    },
    { title: "AI PPC & Ads Optimization", icon: <Lightbulb className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Ad Copy Generators", icon: <PenTool className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Landing Page Optimization", icon: <Target className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Conversion Rate Optimization (CRO)", icon: <TrendingUp className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI A/B Testing Tools", icon: <TestTube className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Affiliate Marketing Tools", icon: <Handshake className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Lead Generation Tools", icon: <UserPlus className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Chatbots for Marketing", icon: <Bot className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Personalization Engines", icon: <UserCog className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Marketing Analytics", icon: <BarChart className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Customer Data Platforms (CDP)", icon: <Users className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Predictive Analytics for Marketing", icon: <LineChart className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Customer Segmentation", icon: <Users className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Marketing Mix Modeling", icon: <BarChart className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Market Research Tools", icon: <Search className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Competitive Intelligence", icon: <Eye className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Video Marketing Tools", icon: <Video className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Image & Design for Marketing", icon: <ImageIcon className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Brand Reputation Management", icon: <Shield className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI PR & Media Outreach", icon: <Globe className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Local SEO Tools", icon: <Store className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI E-commerce Marketing Tools", icon: <ShoppingCart className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Voice Search Optimization", icon: <Mic className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Growth Hacking Tools", icon: <Rocket className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Marketing Strategy Tools", icon: <GanttChartSquare className="w-5 h-5 text-primary" />, tools: [] }
];

marketingSeoToolData.forEach(category => {
    if (category.tools.length === 0) {
        for (let i = 1; i <= 20; i++) {
            category.tools.push({
                name: `${category.title.replace(' Tools', '').trim()} Tool ${i}`,
                description: `A sample tool for the ${category.title} category.`,
                url: '#',
                image: `https://picsum.photos/seed/${category.title.toLowerCase().replace(/\s+/g, '-')}-${i}/600/400`,
                dataAiHint: 'marketing tool',
                pricing: i % 3 === 0 ? 'Free' : (i % 2 === 0 ? 'Freemium' : 'Paid'),
            });
        }
    }
});
