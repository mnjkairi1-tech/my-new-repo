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
            { name: 'Semrush', description: 'Online visibility management platform.', url: 'https://www.semrush.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=semrush.com', dataAiHint: 'seo platform', pricing: 'Paid' },
            { name: 'Ahrefs', description: 'SEO tools & resources to grow your search traffic.', url: 'https://ahrefs.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ahrefs.com', dataAiHint: 'backlink checker', pricing: 'Paid' },
            { name: 'Moz Pro', description: 'All-in-one suite of SEO tools.', url: 'https://moz.com/products/pro', image: 'https://www.google.com/s2/favicons?sz=128&domain=moz.com', dataAiHint: 'seo software', pricing: 'Paid' },
            { name: 'SE Ranking', description: 'All-in-one SEO software for business owners, agencies, and enterprises.', url: 'https://seranking.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=seranking.com', dataAiHint: 'seo rank', pricing: 'Paid' },
            { name: 'Sistrix', description: 'The toolbox for SEO professionals.', url: 'https://www.sistrix.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sistrix.com', dataAiHint: 'seo toolbox', pricing: 'Paid' },
            { name: 'Searchmetrics', description: 'Enterprise search and content marketing platform.', url: 'https://www.searchmetrics.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=searchmetrics.com', dataAiHint: 'enterprise seo', pricing: 'Paid' },
            { name: 'Conductor', description: 'Organic Marketing Platform.', url: 'https://www.conductor.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=conductor.com', dataAiHint: 'organic marketing', pricing: 'Paid' },
            { name: 'BrightEdge', description: 'AI-powered enterprise SEO platform.', url: 'https://www.brightedge.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=brightedge.com', dataAiHint: 'enterprise seo', pricing: 'Paid' },
            { name: 'Similarweb', description: 'Digital intelligence for your business.', url: 'https://www.similarweb.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=similarweb.com', dataAiHint: 'market intelligence', pricing: 'Freemium' },
            { name: 'SpyFu', description: 'Competitor keyword research tools.', url: 'https://www.spyfu.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=spyfu.com', dataAiHint: 'competitor analysis', pricing: 'Paid' },
            { name: 'Serpstat', description: 'All-in-one SEO platform for professionals.', url: 'https://serpstat.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=serpstat.com', dataAiHint: 'seo analysis', pricing: 'Paid' },
            { name: 'Ubersuggest', description: 'Keyword tracking and SEO tool by Neil Patel.', url: 'https://neilpatel.com/ubersuggest/', image: 'https://www.google.com/s2/favicons?sz=128&domain=neilpatel.com', dataAiHint: 'neil patel seo', pricing: 'Freemium' },
            { name: 'Mangools', description: 'SEO tools you will love.', url: 'https://mangools.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mangools.com', dataAiHint: 'user-friendly seo', pricing: 'Paid' },
            { name: 'CognitiveSEO', description: 'A complete SEO software suite.', url: 'https://cognitiveseo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=cognitiveseo.com', dataAiHint: 'unnatural links', pricing: 'Paid' },
            { name: 'Raven Tools', description: 'White-label SEO reports and marketing tools.', url: 'https://raventools.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=raventools.com', dataAiHint: 'seo reporting', pricing: 'Paid' },
            { name: 'SEO PowerSuite', description: 'Desktop SEO software for experts.', url: 'https://www.link-assistant.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=link-assistant.com', dataAiHint: 'desktop seo', pricing: 'Freemium' },
            { name: 'WebCEO', description: 'Professional SEO tools for agencies.', url: 'https://www.webceo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=webceo.com', dataAiHint: 'agency seo', pricing: 'Paid' },
            { name: 'Alexa', description: 'Marketing stack for competitive analysis.', url: 'https://www.alexa.com/siteinfo', image: 'https://www.google.com/s2/favicons?sz=128&domain=alexa.com', dataAiHint: 'competitive analysis', pricing: 'Paid' },
            { name: 'SheerSEO', description: 'Automated SEO software.', url: 'https://www.sheerseo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sheerseo.com', dataAiHint: 'automated seo', pricing: 'Freemium' },
            { name: 'Netpeak Software', description: 'SEO tools for professionals: Spider & Checker.', url: 'https://netpeaksoftware.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=netpeaksoftware.com', dataAiHint: 'seo spider', pricing: 'Paid' },
        ]
    },
    {
        title: "Content Marketing & SEO",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Surfer SEO', description: 'Content intelligence tool for SEO.', url: 'https://surferseo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=surferseo.com', dataAiHint: 'seo content', pricing: 'Paid' },
            { name: 'MarketMuse', description: 'AI content planning and optimization software.', url: 'https://www.marketmuse.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=marketmuse.com', dataAiHint: 'content strategy', pricing: 'Paid' },
            { name: 'Frase', description: 'AI for content that answers questions.', url: 'https://www.frase.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=frase.io', dataAiHint: 'content optimization', pricing: 'Paid' },
            { name: 'Clearscope', description: 'Content optimization software.', url: 'https://www.clearscope.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=clearscope.io', dataAiHint: 'content writing', pricing: 'Paid' },
            { name: 'BuzzSumo', description: 'Find what content is performing best.', url: 'https://buzzsumo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=buzzsumo.com', dataAiHint: 'content analysis', pricing: 'Paid' },
            { name: 'Copy.ai', description: 'AI-powered copywriter for marketing.', url: 'https://www.copy.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=copy.ai', dataAiHint: 'marketing copy', pricing: 'Freemium' },
            { name: 'Jasper', description: 'AI content platform for teams.', url: 'https://www.jasper.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=jasper.ai', dataAiHint: 'ai writer', pricing: 'Paid' },
            { name: 'Outranking', description: 'AI-powered content strategy and writing.', url: 'https://www.outranking.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=outranking.io', dataAiHint: 'content research', pricing: 'Paid' },
            { name: 'Scalenut', description: 'AI-powered content research and writing.', url: 'https://www.scalenut.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=scalenut.com', dataAiHint: 'content creation', pricing: 'Paid' },
            { name: 'GrowthBar', description: 'AI for SEO.', url: 'https://www.growthbarseo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=growthbarseo.com', dataAiHint: 'ai for seo', pricing: 'Freemium' },
            { name: 'NeuralText', description: 'AI-powered content marketing platform.', url: 'https://www.neuraltext.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=neuraltext.com', dataAiHint: 'content platform', pricing: 'Freemium' },
            { name: 'Topic', description: 'Content optimization tool.', url: 'https://www.usetopic.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=usetopic.com', dataAiHint: 'content brief', pricing: 'Paid' },
            { name: 'WriterZen', description: 'Keyword research and content creation tool.', url: 'https://writerzen.net/', image: 'https://www.google.com/s2/favicons?sz=128&domain=writerzen.net', dataAiHint: 'keyword tool', pricing: 'Paid' },
            { name: 'Contentful', description: 'Composable content platform.', url: 'https://www.contentful.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=contentful.com', dataAiHint: 'headless cms', pricing: 'Paid' },
            { name: 'CoSchedule Headline Analyzer', description: 'Write headlines that drive traffic.', url: 'https://coschedule.com/headline-analyzer', image: 'https://www.google.com/s2/favicons?sz=128&domain=coschedule.com', dataAiHint: 'headline analyzer', pricing: 'Free' },
            { name: 'StoryChief', description: 'Collaborative content marketing platform.', url: 'https://storychief.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=storychief.io', dataAiHint: 'content collaboration', pricing: 'Freemium' },
            { name: 'Grammarly', description: 'AI-powered writing assistant.', url: 'https://www.grammarly.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=grammarly.com', dataAiHint: 'writing assistant', pricing: 'Freemium' },
            { name: 'Hemingway App', description: 'Makes your writing bold and clear.', url: 'https://hemingwayapp.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=hemingwayapp.com', dataAiHint: 'writing clarity', pricing: 'Free' },
            { name: 'Contently', description: 'Content marketing platform and talent network.', url: 'https://contently.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=contently.com', dataAiHint: 'talent network', pricing: 'Paid' },
            { name: 'Welcome', description: 'Marketing orchestration platform.', url: 'https://www.welcome.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=welcome.com', dataAiHint: 'content marketing', pricing: 'Paid' },
        ]
    },
    {
        title: "Social Media Marketing",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Sprout Social', description: 'Social media management and optimization platform.', url: 'https://sproutsocial.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sproutsocial.com', dataAiHint: 'social management', pricing: 'Paid' },
            { name: 'Hootsuite', description: 'Manage all your social media in one place.', url: 'https://www.hootsuite.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=hootsuite.com', dataAiHint: 'social dashboard', pricing: 'Paid' },
            { name: 'Buffer', description: 'Social media toolkit for small businesses.', url: 'https://buffer.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=buffer.com', dataAiHint: 'social scheduling', pricing: 'Freemium' },
            { name: 'Agorapulse', description: 'Social media management software for agencies.', url: 'https://www.agorapulse.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=agorapulse.com', dataAiHint: 'social inbox', pricing: 'Paid' },
            { name: 'Later', description: 'Visually plan and schedule social media posts.', url: 'https://later.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=later.com', dataAiHint: 'instagram scheduler', pricing: 'Freemium' },
            { name: 'MeetEdgar', description: 'Social media automation and scheduling.', url: 'https://meetedgar.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=meetedgar.com', dataAiHint: 'content recycling', pricing: 'Paid' },
            { name: 'Flick', description: 'Hashtag and analytics tool for Instagram.', url: 'https://www.flick.tech/', image: 'https://www.google.com/s2/favicons?sz=128&domain=flick.tech', dataAiHint: 'instagram hashtags', pricing: 'Paid' },
            { name: 'Brand24', description: 'Social media monitoring tool.', url: 'https://brand24.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=brand24.com', dataAiHint: 'media monitoring', pricing: 'Paid' },
            { name: 'Talkwalker', description: 'Social listening and analytics platform.', url: 'https://www.talkwalker.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=talkwalker.com', dataAiHint: 'social listening', pricing: 'Paid' },
            { name: 'Canva', description: 'Design anything for social media.', url: 'https://www.canva.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=canva.com', dataAiHint: 'social graphics', pricing: 'Freemium' },
            { name: 'ManyChat', description: 'Chat Marketing platform.', url: 'https://manychat.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=manychat.com', dataAiHint: 'messenger bot', pricing: 'Freemium' },
            { name: 'Iconosquare', description: 'Advanced analytics and management suite.', url: 'https://www.iconosquare.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=iconosquare.com', dataAiHint: 'social analytics', pricing: 'Paid' },
            { name: 'Tailwind', description: 'Smart marketing for Pinterest & Instagram.', url: 'https://www.tailwindapp.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tailwindapp.com', dataAiHint: 'pinterest scheduler', pricing: 'Freemium' },
            { name: 'Predis.ai', description: 'AI Social Media Post Generator.', url: 'https://predis.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=predis.ai', dataAiHint: 'post generator', pricing: 'Freemium' },
            { name: 'SocialBee', description: 'AI-powered social media management tool.', url: 'https://socialbee.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=socialbee.io', dataAiHint: 'content categories', pricing: 'Paid' },
            { name: 'Crowdfire', description: 'Social media management, simplified.', url: 'https://www.crowdfireapp.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=crowdfireapp.com', dataAiHint: 'content curation', pricing: 'Freemium' },
            { name: 'Lately', description: 'AI-powered social media marketing platform.', url: 'https://www.lately.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lately.ai', dataAiHint: 'social content', pricing: 'Paid' },
            { name: 'Sendible', description: 'Social media management tool for agencies.', url: 'https://www.sendible.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sendible.com', dataAiHint: 'agency tools', pricing: 'Paid' },
            { name: 'eclincher', description: 'Social media management tool.', url: 'https://eclincher.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=eclincher.com', dataAiHint: 'social management', pricing: 'Paid' },
            { name: 'MavSocial', description: 'Social media management & advertising.', url: 'https://mavsocial.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mavsocial.com', dataAiHint: 'social advertising', pricing: 'Paid' },
        ]
    },
    {
        title: "Email Marketing",
        icon: <Mail className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Mailchimp', description: 'All-in-one marketing platform.', url: 'https://mailchimp.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mailchimp.com', dataAiHint: 'email campaigns', pricing: 'Freemium' },
            { name: 'ConvertKit', description: 'The email marketing platform for creators.', url: 'https://convertkit.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=convertkit.com', dataAiHint: 'creator marketing', pricing: 'Freemium' },
            { name: 'ActiveCampaign', description: 'Customer experience automation.', url: 'https://www.activecampaign.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=activecampaign.com', dataAiHint: 'email automation', pricing: 'Paid' },
            { name: 'Klaviyo', description: 'Email & SMS marketing for e-commerce.', url: 'https://www.klaviyo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=klaviyo.com', dataAiHint: 'ecommerce email', pricing: 'Freemium' },
            { name: 'HubSpot', description: 'Email marketing software.', url: 'https://www.hubspot.com/products/marketing/email', image: 'https://www.google.com/s2/favicons?sz=128&domain=hubspot.com', dataAiHint: 'crm email', pricing: 'Freemium' },
            { name: 'GetResponse', description: 'Inbound marketing software.', url: 'https://www.getresponse.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=getresponse.com', dataAiHint: 'marketing software', pricing: 'Freemium' },
            { name: 'MailerLite', description: 'Email marketing for small businesses.', url: 'https://www.mailerlite.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mailerlite.com', dataAiHint: 'small business', pricing: 'Freemium' },
            { name: 'Drip', description: 'Marketing automation for E-commerce.', url: 'https://www.drip.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=drip.com', dataAiHint: 'ecommerce crm', pricing: 'Paid' },
            { name: 'AWeber', description: 'Email marketing for small businesses.', url: 'https://www.aweber.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aweber.com', dataAiHint: 'email automation', pricing: 'Freemium' },
            { name: 'Sendinblue (Brevo)', description: 'All-in-one marketing platform.', url: 'https://www.brevo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=brevo.com', dataAiHint: 'all-in-one marketing', pricing: 'Freemium' },
            { name: 'Campaign Monitor', description: 'Email marketing software.', url: 'https://www.campaignmonitor.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=campaignmonitor.com', dataAiHint: 'email templates', pricing: 'Paid' },
            { name: 'Constant Contact', description: 'Email & digital marketing.', url: 'https://www.constantcontact.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=constantcontact.com', dataAiHint: 'digital marketing', pricing: 'Paid' },
            { name: 'Omnisend', description: 'Email & SMS marketing for e-commerce.', url: 'https://www.omnisend.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=omnisend.com', dataAiHint: 'sms marketing', pricing: 'Freemium' },
            { name: 'Moosend', description: 'Email marketing automation platform.', url: 'https://moosend.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=moosend.com', dataAiHint: 'automation platform', pricing: 'Paid' },
            { name: 'Flodesk', description: 'Design emails people love to open.', url: 'https://flodesk.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=flodesk.com', dataAiHint: 'beautiful emails', pricing: 'Paid' },
            { name: 'Mailjet', description: 'Email delivery and marketing service.', url: 'https://www.mailjet.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mailjet.com', dataAiHint: 'transactional email', pricing: 'Freemium' },
            { name: 'Keap', description: 'CRM and marketing automation for small businesses.', url: 'https://keap.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=keap.com', dataAiHint: 'small business crm', pricing: 'Paid' },
            { name: 'dotdigital', description: 'Customer engagement platform.', url: 'https://dotdigital.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=dotdigital.com', dataAiHint: 'engagement platform', pricing: 'Paid' },
            { name: 'Remarkety', description: 'Email marketing for eCommerce.', url: 'https://www.remarkety.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=remarkety.com', dataAiHint: 'ecommerce marketing', pricing: 'Paid' },
            { name: 'Emma', description: 'Email marketing and automation.', url: 'https://myemma.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=myemma.com', dataAiHint: 'email automation', pricing: 'Paid' },
        ]
    },
    {
        title: "Marketing Automation",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'HubSpot', description: 'Marketing automation software.', url: 'https://www.hubspot.com/products/marketing/marketing-automation', image: 'https://www.google.com/s2/favicons?sz=128&domain=hubspot.com', dataAiHint: 'lead nurturing', pricing: 'Freemium' },
            { name: 'Marketo', description: 'Marketing automation software.', url: 'https://business.adobe.com/products/marketo/adobe-marketo.html', image: 'https://www.google.com/s2/favicons?sz=128&domain=adobe.com', dataAiHint: 'b2b marketing', pricing: 'Paid' },
            { name: 'Pardot', description: 'Salesforce marketing automation.', url: 'https://www.salesforce.com/products/marketing-cloud/account-engagement/', image: 'https://www.google.com/s2/favicons?sz=128&domain=salesforce.com', dataAiHint: 'salesforce marketing', pricing: 'Paid' },
            { name: 'Customer.io', description: 'Automated messaging platform.', url: 'https://customer.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=customer.io', dataAiHint: 'messaging platform', pricing: 'Paid' },
            { name: 'Autopilot', description: 'Marketing automation software made visual.', url: 'https://www.autopilothq.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=autopilothq.com', dataAiHint: 'visual marketing', pricing: 'Paid' },
            { name: 'Ortto', description: 'The customer journey and data platform.', url: 'https://ortto.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ortto.com', dataAiHint: 'customer journey', pricing: 'Paid' },
            { name: 'Encharge.io', description: 'Marketing automation for startups.', url: 'https://encharge.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=encharge.io', dataAiHint: 'startup marketing', pricing: 'Paid' },
            { name: 'User.com', description: 'All-in-one marketing automation platform.', url: 'https://user.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=user.com', dataAiHint: 'all-in-one platform', pricing: 'Freemium' },
            { name: 'Act-On', description: 'Growth marketing automation platform.', url: 'https://act-on.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=act-on.com', dataAiHint: 'growth marketing', pricing: 'Paid' },
            { name: 'SharpSpring', description: 'Revenue growth marketing platform.', url: 'https://sharpspring.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sharpspring.com', dataAiHint: 'revenue growth', pricing: 'Paid' },
            { name: 'Eloqua', description: 'Oracle marketing automation.', url: 'https://www.oracle.com/marketing/eloqua/', image: 'https://www.google.com/s2/favicons?sz=128&domain=oracle.com', dataAiHint: 'oracle marketing', pricing: 'Paid' },
            { name: 'Mautic', description: 'Open source marketing automation.', url: 'https://www.mautic.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mautic.org', dataAiHint: 'open source', pricing: 'Free' },
            { name: 'Salesmanago', description: 'Customer engagement platform.', url: 'https://www.salesmanago.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=salesmanago.com', dataAiHint: 'customer engagement', pricing: 'Paid' },
            { name: 'WebEngage', description: 'User retention platform.', url: 'https://webengage.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=webengage.com', dataAiHint: 'user retention', pricing: 'Paid' },
            { name: 'Resulticks', description: 'Real-time conversation marketing.', url: 'https://www.resulticks.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=resulticks.com', dataAiHint: 'conversation marketing', pricing: 'Paid' },
            { name: 'Maropost', description: 'Marketing automation for multi-channel engagement.', url: 'https://www.maropost.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=maropost.com', dataAiHint: 'multi-channel', pricing: 'Paid' },
            { name: 'Drift', description: 'Conversational marketing and sales platform.', url: 'https://www.drift.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=drift.com', dataAiHint: 'conversational ai', pricing: 'Paid' },
            { name: 'Intercom', description: 'Customer service platform with automation features.', url: 'https://www.intercom.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=intercom.com', dataAiHint: 'customer messaging', pricing: 'Paid' },
            { name: 'Outfunnel', description: 'Connect your sales and marketing tools.', url: 'https://outfunnel.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=outfunnel.com', dataAiHint: 'sales marketing', pricing: 'Paid' },
            { name: 'Pipedrive', description: 'Sales CRM and pipeline management tool.', url: 'https://www.pipedrive.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pipedrive.com', dataAiHint: 'sales pipeline', pricing: 'Paid' },
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
    { title: "AI Image &amp; Design for Marketing", icon: <ImageIcon className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Brand Reputation Management", icon: <Shield className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI PR &amp; Media Outreach", icon: <Globe className="w-5 h-5 text-primary" />, tools: [] },
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
                image: `https://www.google.com/s2/favicons?sz=128&domain=example.com`,
                dataAiHint: 'marketing tool',
                pricing: i % 3 === 0 ? 'Free' : (i % 2 === 0 ? 'Freemium' : 'Paid'),
            });
        }
    }
});
