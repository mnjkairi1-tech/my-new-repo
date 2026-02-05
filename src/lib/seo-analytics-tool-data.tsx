'use client';

import React from 'react';
import { 
    Search, Link as Link2, TrendingUp, Laptop, BarChart, Feather, Bot, Users, MapPin, Handshake, LayoutDashboard, GanttChartSquare, FileText, BotMessageSquare, TestTube, Lightbulb, CheckSquare, Smartphone, ShoppingCart, Video, ImageIcon, Mic, Settings, Rocket, Eye, GitBranch, Dna, File, FileQuestion, Code, Network, Cloud, ShieldCheck, BarChart3, BookOpen, Shuffle, Globe, Cpu
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

export const seoAnalyticsToolData: ToolCategory[] = [
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
        title: "Keyword Research Tools",
        icon: <Search className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Google Keyword Planner', description: 'Find keywords for your search campaigns.', url: 'https://ads.google.com/home/tools/keyword-planner/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'keyword planner', pricing: 'Free' },
            { name: 'AnswerThePublic', description: 'Discover what people are asking about.', url: 'https://answerthepublic.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=answerthepublic.com', dataAiHint: 'search listening', pricing: 'Freemium' },
            { name: 'Keywords Everywhere', description: 'Browser addon for keyword research.', url: 'https://keywordseverywhere.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=keywordseverywhere.com', dataAiHint: 'keyword addon', pricing: 'Paid' },
            { name: 'AlsoAsked', description: 'Discover the questions people are asking.', url: 'https://alsoasked.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=alsoasked.com', dataAiHint: 'people also ask', pricing: 'Freemium' },
        ]
    },
    {
        title: "Rank Tracking Tools",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'AccuRanker', description: 'The world\'s fastest rank tracker.', url: 'https://www.accuranker.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=accuranker.com', dataAiHint: 'keyword rank', pricing: 'Paid' },
            { name: 'STAT', description: 'Enterprise rank tracking for SEO.', url: 'https://getstat.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=getstat.com', dataAiHint: 'enterprise seo', pricing: 'Paid' },
            { name: 'Nightwatch', description: 'Advanced SEO rank tracker.', url: 'https://nightwatch.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=nightwatch.io', dataAiHint: 'seo performance', pricing: 'Paid' },
            { name: 'ProRankTracker', description: 'Comprehensive rank tracking & reporting solution.', url: 'https://propranktracker.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=propranktracker.com', dataAiHint: 'seo reporting', pricing: 'Paid' },
        ]
    },
    {
        title: "Backlink Analysis Tools",
        icon: <Link2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Majestic', description: 'The planet\'s largest Link Index database.', url: 'https://majestic.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=majestic.com', dataAiHint: 'link index', pricing: 'Paid' },
            { name: 'CognitiveSEO', description: 'A complete SEO software suite.', url: 'https://cognitiveseo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=cognitiveseo.com', dataAiHint: 'unnatural links', pricing: 'Paid' },
            { name: 'LinkResearchTools', description: 'Link data and SEO analysis.', url: 'https://www.linkresearchtools.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=linkresearchtools.com', dataAiHint: 'link audit', pricing: 'Paid' },
            { name: 'OpenLinkProfiler', description: 'Free link analysis tool.', url: 'http://openlinkprofiler.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=openlinkprofiler.org', dataAiHint: 'free backlink checker', pricing: 'Free' },
        ]
    },
    {
        title: "Technical SEO & Site Audits",
        icon: <Laptop className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Screaming Frog', description: 'The industry leading SEO Spider software.', url: 'https://www.screamingfrog.co.uk/seo-spider/', image: 'https://www.google.com/s2/favicons?sz=128&domain=screamingfrog.co.uk', dataAiHint: 'website crawler', pricing: 'Freemium' },
            { name: 'Sitebulb', description: 'Website auditing tool for SEOs.', url: 'https://sitebulb.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sitebulb.com', dataAiHint: 'seo audit', pricing: 'Paid' },
            { name: 'Lumar (DeepCrawl)', description: 'The technical SEO platform.', url: 'https://www.lumar.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lumar.io', dataAiHint: 'technical seo', pricing: 'Paid' },
            { name: 'Google Search Console', description: 'Tools and reports for your website\'s search traffic.', url: 'https://search.google.com/search-console/about', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'google tools', pricing: 'Free' },
        ]
    },
    {
        title: "Content Optimization & AI Writing",
        icon: <Feather className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Surfer SEO', description: 'Content intelligence tool for SEO.', url: 'https://surferseo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=surferseo.com', dataAiHint: 'seo content', pricing: 'Paid' },
            { name: 'Frase', description: 'AI for content that answers questions.', url: 'https://www.frase.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=frase.io', dataAiHint: 'content optimization', pricing: 'Paid' },
            { name: 'Jasper', description: 'AI content platform for teams.', url: 'https://www.jasper.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=jasper.ai', dataAiHint: 'ai writer', pricing: 'Paid' },
            { name: 'Copy.ai', description: 'AI-powered copywriter for marketing.', url: 'https://www.copy.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=copy.ai', dataAiHint: 'marketing copy', pricing: 'Freemium' },
        ]
    },
    {
        title: "Web Analytics Platforms",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Analytics', description: 'Web analytics service that tracks and reports website traffic.', url: 'https://analytics.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'website traffic', pricing: 'Free' },
            { name: 'Matomo', description: 'The Google Analytics alternative that protects your data.', url: 'https://matomo.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=matomo.org', dataAiHint: 'privacy analytics', pricing: 'Freemium' },
            { name: 'Fathom Analytics', description: 'Simple, privacy-focused website analytics.', url: 'https://usefathom.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=usefathom.com', dataAiHint: 'simple analytics', pricing: 'Paid' },
            { name: 'Plausible Analytics', description: 'Simple and privacy-friendly Google Analytics alternative.', url: 'https://plausible.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=plausible.io', dataAiHint: 'lightweight analytics', pricing: 'Paid' },
        ]
    },
    {
        title: "Competitor Analysis Tools",
        icon: <Users className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'SpyFu', description: 'Competitor keyword research tools.', url: 'https://www.spyfu.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=spyfu.com', dataAiHint: 'competitor keywords', pricing: 'Paid' },
            { name: 'Similarweb', description: 'Digital intelligence for your business.', url: 'https://www.similarweb.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=similarweb.com', dataAiHint: 'market intelligence', pricing: 'Freemium' },
            { name: 'iSpionage', description: 'Competitor keyword and ad copy research.', url: 'https://www.ispionage.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ispionage.com', dataAiHint: 'ad copy research', pricing: 'Paid' },
            { name: 'Kompyte', description: 'Track competitors and analyze their strategies.', url: 'https://www.kompyte.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=kompyte.com', dataAiHint: 'competitor tracking', pricing: 'Paid' },
        ]
    },
    {
        title: "Local SEO Management",
        icon: <MapPin className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'BrightLocal', description: 'Local SEO tools for agencies and businesses.', url: 'https://www.brightlocal.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=brightlocal.com', dataAiHint: 'local seo', pricing: 'Paid' },
            { name: 'Yext', description: 'Manage your brand\'s local listings and reviews.', url: 'https://www.yext.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=yext.com', dataAiHint: 'listing management', pricing: 'Paid' },
            { name: 'Moz Local', description: 'Local search engine listing management.', url: 'https://moz.com/products/local', image: 'https://www.google.com/s2/favicons?sz=128&domain=moz.com', dataAiHint: 'local search', pricing: 'Paid' },
            { name: 'Whitespark', description: 'Local SEO tools and services.', url: 'https://whitespark.ca/', image: 'https://www.google.com/s2/favicons?sz=128&domain=whitespark.ca', dataAiHint: 'citation finder', pricing: 'Paid' },
        ]
    },
    {
        title: "Link Building & Outreach Tools",
        icon: <Handshake className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Hunter', description: 'Find email addresses in seconds.', url: 'https://hunter.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=hunter.io', dataAiHint: 'email finder', pricing: 'Freemium' },
            { name: 'BuzzStream', description: 'Build relationships and links.', url: 'https://www.buzzstream.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=buzzstream.com', dataAiHint: 'outreach platform', pricing: 'Paid' },
            { name: 'Pitchbox', description: 'Influencer outreach and link building platform.', url: 'https://pitchbox.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pitchbox.com', dataAiHint: 'influencer outreach', pricing: 'Paid' },
            { name: 'HARO', description: 'Connect with journalists for media opportunities.', url: 'https://www.helpareporter.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=helpareporter.com', dataAiHint: 'public relations', pricing: 'Freemium' },
        ]
    },
    {
        title: "SEO Reporting & Dashboards",
        icon: <LayoutDashboard className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Google Data Studio', description: 'Turn your data into informative dashboards.', url: 'https://lookerstudio.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'data dashboard', pricing: 'Free' },
            { name: 'DashThis', description: 'Automated marketing reporting tool.', url: 'https://dashthis.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=dashthis.com', dataAiHint: 'marketing reports', pricing: 'Paid' },
            { name: 'Supermetrics', description: 'Marketing data pipeline.', url: 'https://supermetrics.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=supermetrics.com', dataAiHint: 'data connectors', pricing: 'Paid' },
            { name: 'AgencyAnalytics', description: 'All-in-one reporting platform for agencies.', url: 'https://agencyanalytics.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=agencyanalytics.com', dataAiHint: 'agency reports', pricing: 'Paid' },
        ]
    },
    {
        title: "Site Speed & Performance Tools",
        icon: <GanttChartSquare className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'GTmetrix', description: 'See how your site performs.', url: 'https://gtmetrix.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=gtmetrix.com', dataAiHint: 'site performance', pricing: 'Freemium' },
            { name: 'PageSpeed Insights', description: 'Make your web pages fast on all devices.', url: 'https://pagespeed.web.dev/', image: 'https://www.google.com/s2/favicons?sz=128&domain=web.dev', dataAiHint: 'web performance', pricing: 'Free' },
            { name: 'Pingdom', description: 'Website performance monitoring.', url: 'https://www.pingdom.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pingdom.com', dataAiHint: 'uptime monitoring', pricing: 'Paid' },
            { name: 'WebPageTest', description: 'Website performance testing.', url: 'https://www.webpagetest.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=webpagetest.org', dataAiHint: 'performance test', pricing: 'Free' },
        ]
    },
    {
        title: "Log File Analysis Software",
        icon: <FileText className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Screaming Frog Log File Analyser', description: 'Analyse log files for SEO.', url: 'https://www.screamingfrog.co.uk/log-file-analyser/', image: 'https://www.google.com/s2/favicons?sz=128&domain=screamingfrog.co.uk', dataAiHint: 'log analysis', pricing: 'Paid' },
            { name: 'Logz.io', description: 'Cloud observability platform.', url: 'https://logz.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=logz.io', dataAiHint: 'elk stack', pricing: 'Paid' },
            { name: 'Splunk', description: 'The Data-to-Everything Platform.', url: 'https://www.splunk.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=splunk.com', dataAiHint: 'data platform', pricing: 'Paid' },
            { name: 'Graylog', description: 'Centralized log management.', url: 'https://www.graylog.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=graylog.org', dataAiHint: 'log management', pricing: 'Freemium' },
        ]
    },
    {
        title: "Heatmap & Session Replay Tools",
        icon: <BotMessageSquare className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Hotjar', description: 'Website heatmaps & behavior analytics.', url: 'https://www.hotjar.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=hotjar.com', dataAiHint: 'heatmaps', pricing: 'Freemium' },
            { name: 'Microsoft Clarity', description: 'Free heatmaps & session recordings.', url: 'https://clarity.microsoft.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=microsoft.com', dataAiHint: 'session recordings', pricing: 'Free' },
            { name: 'Crazy Egg', description: 'Website optimization with heatmaps.', url: 'https://www.crazyegg.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=crazyegg.com', dataAiHint: 'ab testing', pricing: 'Paid' },
            { name: 'Mouseflow', description: 'Behavior analytics software.', url: 'https://mouseflow.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mouseflow.com', dataAiHint: 'session replay', pricing: 'Freemium' },
        ]
    },
    {
        title: "A/B Testing & CRO Platforms",
        icon: <TestTube className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Optimizely', description: 'Digital Experience Platform with A/B testing.', url: 'https://www.optimizely.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=optimizely.com', dataAiHint: 'experimentation', pricing: 'Paid' },
            { name: 'VWO', description: 'A/B testing and conversion optimization platform.', url: 'https://vwo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=vwo.com', dataAiHint: 'cro platform', pricing: 'Paid' },
            { name: 'Google Optimize', description: 'A/B testing tool from Google (sunsetting).', url: 'https://marketingplatform.google.com/about/optimize/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'google testing', pricing: 'Free' },
            { name: 'Convert', description: 'A/B testing software for agencies and SMBs.', url: 'https://www.convert.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=convert.com', dataAiHint: 'ab testing tool', pricing: 'Paid' },
        ]
    },
    {
        title: "PPC & SEM Analytics Tools",
        icon: <BarChart className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Google Ads', description: 'Online advertising platform by Google.', url: 'https://ads.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'google ads', pricing: 'Paid' },
            { name: 'WordStream', description: 'Online advertising tools and resources.', url: 'https://www.wordstream.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=wordstream.com', dataAiHint: 'ppc software', pricing: 'Paid' },
            { name: 'Optmyzr', description: 'PPC management software for advertisers.', url: 'https://www.optmyzr.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=optmyzr.com', dataAiHint: 'ppc automation', pricing: 'Paid' },
            { name: 'AdEspresso', description: 'Facebook, Instagram, and Google Ads management.', url: 'https://adespresso.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=adespresso.com', dataAiHint: 'facebook ads', pricing: 'Paid' },
        ]
    },
    {
        title: "Content Idea Generation",
        icon: <Lightbulb className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'AnswerThePublic', description: 'Discover what people are asking about.', url: 'https://answerthepublic.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=answerthepublic.com', dataAiHint: 'search listening', pricing: 'Freemium' },
            { name: 'AlsoAsked', description: 'Discover the questions people are asking.', url: 'https://alsoasked.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=alsoasked.com', dataAiHint: 'people also ask', pricing: 'Freemium' },
            { name: 'BuzzSumo', description: 'Find what content is performing best.', url: 'https://buzzsumo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=buzzsumo.com', dataAiHint: 'content analysis', pricing: 'Paid' },
            { name: 'Google Trends', description: 'Explore what the world is searching for.', url: 'https://trends.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'search trends', pricing: 'Free' },
        ]
    },
    {
        title: "On-Page SEO Checkers",
        icon: <CheckSquare className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Surfer SEO', description: 'On-page auditing and content optimization.', url: 'https://surferseo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=surferseo.com', dataAiHint: 'content audit', pricing: 'Paid' },
            { name: 'Yoast SEO', description: 'The #1 WordPress SEO plugin.', url: 'https://yoast.com/wordpress/plugins/seo/', image: 'https://www.google.com/s2/favicons?sz=128&domain=yoast.com', dataAiHint: 'wordpress seo', pricing: 'Freemium' },
            { name: 'Rank Math', description: 'The Swiss Army Knife of WordPress SEO.', url: 'https://rankmath.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=rankmath.com', dataAiHint: 'wordpress seo', pricing: 'Freemium' },
            { name: 'SEOquake', description: 'Free browser extension for on-page SEO audit.', url: 'https://www.seoquake.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=seoquake.com', dataAiHint: 'seo extension', pricing: 'Free' },
        ]
    },
    {
        title: "Mobile SEO Tools",
        icon: <Smartphone className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Google Mobile-Friendly Test', description: 'Test how easily a visitor can use your page on a mobile device.', url: 'https://search.google.com/test/mobile-friendly', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'mobile friendly', pricing: 'Free' },
            { name: 'AppTweak', description: 'App Store Optimization (ASO) tool driven by data science.', url: 'https://www.apptweak.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=apptweak.com', dataAiHint: 'aso tool', pricing: 'Paid' },
            { name: 'AppFollow', description: 'App monitoring, app store optimization, and customer support.', url: 'https://appfollow.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=appfollow.io', dataAiHint: 'app reviews', pricing: 'Freemium' },
            { name: 'Sensor Tower', description: 'Mobile app store marketing intelligence.', url: 'https://sensortower.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sensortower.com', dataAiHint: 'app intelligence', pricing: 'Paid' },
        ]
    },
    {
        title: "E-commerce SEO Platforms",
        icon: <ShoppingCart className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Shopify SEO', description: 'Built-in SEO features for Shopify stores.', url: 'https://www.shopify.com/blog/seo', image: 'https://www.google.com/s2/favicons?sz=128&domain=shopify.com', dataAiHint: 'ecommerce seo', pricing: 'Freemium' },
            { name: 'BigCommerce SEO', description: 'SEO tools for BigCommerce stores.', url: 'https://www.bigcommerce.com/seo/', image: 'https://www.google.com/s2/favicons?sz=128&domain=bigcommerce.com', dataAiHint: 'store seo', pricing: 'Freemium' },
        ]
    },
    {
        title: "Video SEO Tools",
        icon: <Video className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'TubeBuddy', description: 'Browser extension for YouTube channel management.', url: 'https://www.tubebuddy.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tubebuddy.com', dataAiHint: 'youtube seo', pricing: 'Freemium' },
            { name: 'vidIQ', description: 'Grow your YouTube channel faster.', url: 'https://vidiq.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=vidiq.com', dataAiHint: 'youtube analytics', pricing: 'Freemium' },
        ]
    },
    {
        title: "Image SEO Optimization",
        icon: <ImageIcon className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'ShortPixel', description: 'Image optimizer for your website.', url: 'https://shortpixel.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=shortpixel.com', dataAiHint: 'image compression', pricing: 'Freemium' },
            { name: 'TinyPNG', description: 'Smart PNG and JPEG compression.', url: 'https://tinypng.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tinypng.com', dataAiHint: 'image optimizer', pricing: 'Free' },
        ]
    },
    {
        title: "Voice Search Optimization Tools",
        icon: <Mic className="w-5 h-5 text-primary" />,
        tools: [
             { name: 'Schema App', description: 'Structured data and schema markup tool.', url: 'https://www.schemaapp.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=schemaapp.com', dataAiHint: 'schema markup', pricing: 'Paid' },
        ]
    },
    {
        title: "Affiliate Marketing Analytics",
        icon: <Handshake className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Voluum', description: 'Ad tracker for performance marketers.', url: 'https://voluum.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=voluum.com', dataAiHint: 'ad tracker', pricing: 'Paid' },
        ]
    },
    {
        title: "Data Visualization & Reporting",
        icon: <BarChart3 className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Tableau', description: 'Leading data visualization and BI software.', url: 'https://www.tableau.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tableau.com', dataAiHint: 'data visualization', pricing: 'Paid' },
            { name: 'Google Data Studio', description: 'Turn your data into informative dashboards.', url: 'https://lookerstudio.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'data dashboard', pricing: 'Free' },
        ]
    },
    {
        title: "Tag Management Systems",
        icon: <Settings className="w-5 h-5 text-primary" />,
        tools: [
             { name: 'Google Tag Manager', description: 'Manage website tags without editing code.', url: 'https://marketingplatform.google.com/about/tag-manager/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'tag manager', pricing: 'Free' },
             { name: 'Tealium', description: 'Customer data platform and tag management.', url: 'https://tealium.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tealium.com', dataAiHint: 'customer data', pricing: 'Paid' },
        ]
    },
    {
        title: "Marketing Attribution Software",
        icon: <GanttChartSquare className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Ruler Analytics', description: 'Marketing attribution software.', url: 'https://www.ruleranalytics.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ruleranalytics.com', dataAiHint: 'marketing attribution', pricing: 'Paid' },
        ]
    },
    {
        title: "Audience Research & Insights",
        icon: <Users className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'SparkToro', description: 'Audience research tool.', url: 'https://sparktoro.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sparktoro.com', dataAiHint: 'audience research', pricing: 'Freemium' },
        ]
    },
    {
        title: "Content Strategy Platforms",
        icon: <BookOpen className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'GatherContent', description: 'Content operations platform.', url: 'https://gathercontent.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=gathercontent.com', dataAiHint: 'content ops', pricing: 'Paid' },
        ]
    },
    {
        title: "Brand Monitoring Tools",
        icon: <Eye className="w-5 h-5 text-primary" />,
        tools: [
             { name: 'Brand24', description: 'Social media monitoring tool.', url: 'https://brand24.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=brand24.com', dataAiHint: 'brand monitoring', pricing: 'Paid' },
             { name: 'Mention', description: 'Social media and web monitoring.', url: 'https://mention.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mention.com', dataAiHint: 'web monitoring', pricing: 'Freemium' },
        ]
    },
    {
        title: "Google Algorithm Update Trackers",
        icon: <TrendingUp className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'MozCast', description: 'The Google Algorithm Weather Report.', url: 'https://moz.com/mozcast/', image: 'https://www.google.com/s2/favicons?sz=128&domain=moz.com', dataAiHint: 'google algorithm', pricing: 'Free' },
            { name: 'Semrush Sensor', description: 'Track Google\'s algorithm volatility.', url: 'https://www.semrush.com/sensor/', image: 'https://www.google.com/s2/favicons?sz=128&domain=semrush.com', dataAiHint: 'serp volatility', pricing: 'Free' },
        ]
    },
    {
        title: "SEO APIs & Data Integration",
        icon: <Code className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'DataForSEO', description: 'SEO data via API.', url: 'https://dataforseo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=dataforseo.com', dataAiHint: 'seo data api', pricing: 'Paid' },
        ]
    },
    {
        title: "Penalty & Recovery Tools",
        icon: <ShieldCheck className="w-5 h-5 text-primary" />,
        tools: [
             { name: 'LinkResearchTools', description: 'Link audit and recovery tools.', url: 'https://www.linkresearchtools.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=linkresearchtools.com', dataAiHint: 'link audit', pricing: 'Paid' },
        ]
    },
    {
        title: "Domain Analysis & Acquisition Tools",
        icon: <Globe className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Flippa', description: 'Marketplace for buying and selling online businesses.', url: 'https://flippa.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=flippa.com', dataAiHint: 'buy websites', pricing: 'Freemium' },
        ]
    },
    {
        title: "Keyword Cannibalization Checkers",
        icon: <Shuffle className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'SE Ranking', description: 'Find and fix keyword cannibalization issues.', url: 'https://seranking.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=seranking.com', dataAiHint: 'keyword cannibalization', pricing: 'Paid' },
        ]
    },
    {
        title: "Structured Data & Schema Tools",
        icon: <File className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Schema App', description: 'Structured data and schema markup tool.', url: 'https://www.schemaapp.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=schemaapp.com', dataAiHint: 'schema markup', pricing: 'Paid' },
        ]
    },
    {
        title: "International SEO Tools",
        icon: <Globe className="w-5 h-5 text-primary" />,
        tools: [
             { name: 'GeoRanker', description: 'Local rank tracking and SERP analysis.', url: 'https://www.georanker.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=georanker.com', dataAiHint: 'local serp', pricing: 'Paid' },
        ]
    },
    {
        title: "Programmatic SEO Tools",
        icon: <Cpu className="w-5 h-5 text-primary" />,
        tools: [
             { name: 'Airtable', description: 'Low-code platform for building collaborative apps.', url: 'https://www.airtable.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=airtable.com', dataAiHint: 'database spreadsheet', pricing: 'Freemium' },
        ]
    },
    {
        title: "Content Decay Analysis",
        icon: <TrendingUp className="w-5 h-5 text-primary" style={{ transform: 'scaleY(-1)' }} />,
        tools: [
             { name: 'ClickFlow', description: 'Content decay tool to refresh old articles.', url: 'https://www.clickflow.com/content-decay', image: 'https://www.google.com/s2/favicons?sz=128&domain=clickflow.com', dataAiHint: 'content decay', pricing: 'Paid' },
        ]
    },
    {
        title: "AI for SEO & Automation",
        icon: <Bot className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Alli AI', description: 'AI-powered SEO automation platform.', url: 'https://alli.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=alli.ai', dataAiHint: 'seo automation', pricing: 'Paid' },
        ]
    }
];
