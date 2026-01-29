
'use client';

import React from 'react';
import { Search, Link as Link2, TrendingUp, Laptop, BarChart, Feather, Bot, Users, MapPin, Handshake, LayoutDashboard, GanttChartSquare, FileText, BotMessageSquare, TestTube, Lightbulb, CheckSquare, Smartphone, ShoppingCart, Video, ImageIcon, Mic, Settings, Rocket, Eye, GitBranch, Dna, File, FileQuestion, Code, Network, Cloud, ShieldCheck, BarChart3, BookOpen, Shuffle, Globe, Cpu } from 'lucide-react';

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
            { name: 'Semrush', description: 'Online visibility management platform.', url: 'https://www.semrush.com/', image: 'https://picsum.photos/seed/semrush-seo/600/400', dataAiHint: 'seo platform', pricing: 'Paid' },
            { name: 'Ahrefs', description: 'SEO tools & resources to grow your search traffic.', url: 'https://ahrefs.com/', image: 'https://picsum.photos/seed/ahrefs-seo/600/400', dataAiHint: 'backlink checker', pricing: 'Paid' },
            { name: 'Moz Pro', description: 'All-in-one suite of SEO tools.', url: 'https://moz.com/products/pro', image: 'https://picsum.photos/seed/mozpro-seo/600/400', dataAiHint: 'seo software', pricing: 'Paid' },
            { name: 'SE Ranking', description: 'SEO software for business owners and agencies.', url: 'https://seranking.com/', image: 'https://picsum.photos/seed/seranking-seo/600/400', dataAiHint: 'rank tracker', pricing: 'Paid' },
        ]
    },
    {
        title: "Keyword Research Tools",
        icon: <Search className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Google Keyword Planner', description: 'Find keywords for your search campaigns.', url: 'https://ads.google.com/home/tools/keyword-planner/', image: 'https://picsum.photos/seed/gkp-seo/600/400', dataAiHint: 'keyword planner', pricing: 'Free' },
            { name: 'AnswerThePublic', description: 'Discover what people are asking about.', url: 'https://answerthepublic.com/', image: 'https://picsum.photos/seed/atp-seo/600/400', dataAiHint: 'search listening', pricing: 'Freemium' },
            { name: 'Keywords Everywhere', description: 'Browser addon for keyword research.', url: 'https://keywordseverywhere.com/', image: 'https://picsum.photos/seed/keywordseverywhere/600/400', dataAiHint: 'keyword addon', pricing: 'Paid' },
            { name: 'AlsoAsked', description: 'Discover the questions people are asking.', url: 'https://alsoasked.com/', image: 'https://picsum.photos/seed/alsoasked/600/400', dataAiHint: 'people also ask', pricing: 'Freemium' },
        ]
    },
    {
        title: "Rank Tracking Tools",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'AccuRanker', description: 'The world\'s fastest rank tracker.', url: 'https://www.accuranker.com/', image: 'https://picsum.photos/seed/accuranker-seo/600/400', dataAiHint: 'keyword rank', pricing: 'Paid' },
            { name: 'STAT', description: 'Enterprise rank tracking for SEO.', url: 'https://getstat.com/', image: 'https://picsum.photos/seed/stat-seo/600/400', dataAiHint: 'enterprise seo', pricing: 'Paid' },
            { name: 'Nightwatch', description: 'Advanced SEO rank tracker.', url: 'https://nightwatch.io/', image: 'https://picsum.photos/seed/nightwatch-seo/600/400', dataAiHint: 'seo performance', pricing: 'Paid' },
            { name: 'ProRankTracker', description: 'Comprehensive rank tracking & reporting solution.', url: 'https://propranktracker.com/', image: 'https://picsum.photos/seed/proranktracker/600/400', dataAiHint: 'seo reporting', pricing: 'Paid' },
        ]
    },
    {
        title: "Backlink Analysis Tools",
        icon: <Link2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Majestic', description: 'The planet\'s largest Link Index database.', url: 'https://majestic.com/', image: 'https://picsum.photos/seed/majestic-seo/600/400', dataAiHint: 'link index', pricing: 'Paid' },
            { name: 'CognitiveSEO', description: 'A complete SEO software suite.', url: 'https://cognitiveseo.com/', image: 'https://picsum.photos/seed/cognitiveseo/600/400', dataAiHint: 'unnatural links', pricing: 'Paid' },
            { name: 'LinkResearchTools', description: 'Link data and SEO analysis.', url: 'https://www.linkresearchtools.com/', image: 'https://picsum.photos/seed/linkresearchtools/600/400', dataAiHint: 'link audit', pricing: 'Paid' },
            { name: 'OpenLinkProfiler', description: 'Free link analysis tool.', url: 'http://openlinkprofiler.org/', image: 'https://picsum.photos/seed/openlinkprofiler/600/400', dataAiHint: 'free backlink checker', pricing: 'Free' },
        ]
    },
    {
        title: "Technical SEO & Site Audits",
        icon: <Laptop className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Screaming Frog', description: 'The industry leading SEO Spider software.', url: 'https://www.screamingfrog.co.uk/seo-spider/', image: 'https://picsum.photos/seed/screamingfrog-seo/600/400', dataAiHint: 'website crawler', pricing: 'Freemium' },
            { name: 'Sitebulb', description: 'Website auditing tool for SEOs.', url: 'https://sitebulb.com/', image: 'https://picsum.photos/seed/sitebulb-seo/600/400', dataAiHint: 'seo audit', pricing: 'Paid' },
            { name: 'Lumar (DeepCrawl)', description: 'The technical SEO platform.', url: 'https://www.lumar.io/', image: 'https://picsum.photos/seed/lumar-seo/600/400', dataAiHint: 'technical seo', pricing: 'Paid' },
            { name: 'Google Search Console', description: 'Tools and reports for your website\'s search traffic.', url: 'https://search.google.com/search-console/about', image: 'https://picsum.photos/seed/gsc-seo/600/400', dataAiHint: 'google tools', pricing: 'Free' },
        ]
    },
    {
        title: "Content Optimization & AI Writing",
        icon: <Feather className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Surfer SEO', description: 'Content intelligence tool for SEO.', url: 'https://surferseo.com/', image: 'https://picsum.photos/seed/surferseo-content/600/400', dataAiHint: 'seo content', pricing: 'Paid' },
            { name: 'Frase', description: 'AI for content that answers questions.', url: 'https://www.frase.io/', image: 'https://picsum.photos/seed/frase-content/600/400', dataAiHint: 'content optimization', pricing: 'Paid' },
            { name: 'Jasper', description: 'AI content platform for teams.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-content/600/400', dataAiHint: 'ai writer', pricing: 'Paid' },
            { name: 'Copy.ai', description: 'AI-powered copywriter for marketing.', url: 'https://www.copy.ai/', image: 'https://picsum.photos/seed/copyai-content/600/400', dataAiHint: 'marketing copy', pricing: 'Freemium' },
        ]
    },
    {
        title: "Web Analytics Platforms",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Analytics', description: 'Web analytics service that tracks and reports website traffic.', url: 'https://analytics.google.com/', image: 'https://picsum.photos/seed/googleanalytics-seo/600/400', dataAiHint: 'website traffic', pricing: 'Free' },
            { name: 'Matomo', description: 'The Google Analytics alternative that protects your data.', url: 'https://matomo.org/', image: 'https://picsum.photos/seed/matomo-seo/600/400', dataAiHint: 'privacy analytics', pricing: 'Freemium' },
            { name: 'Fathom Analytics', description: 'Simple, privacy-focused website analytics.', url: 'https://usefathom.com/', image: 'https://picsum.photos/seed/fathom-seo/600/400', dataAiHint: 'simple analytics', pricing: 'Paid' },
            { name: 'Plausible Analytics', description: 'Simple and privacy-friendly Google Analytics alternative.', url: 'https://plausible.io/', image: 'https://picsum.photos/seed/plausible-seo/600/400', dataAiHint: 'lightweight analytics', pricing: 'Paid' },
        ]
    },
    {
        title: "Competitor Analysis Tools",
        icon: <Users className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'SpyFu', description: 'Competitor keyword research tools.', url: 'https://www.spyfu.com/', image: 'https://picsum.photos/seed/spyfu-seo/600/400', dataAiHint: 'competitor keywords', pricing: 'Paid' },
            { name: 'Similarweb', description: 'Digital intelligence for your business.', url: 'https://www.similarweb.com/', image: 'https://picsum.photos/seed/similarweb-seo/600/400', dataAiHint: 'market intelligence', pricing: 'Freemium' },
            { name: 'iSpionage', description: 'Competitor keyword and ad copy research.', url: 'https://www.ispionage.com/', image: 'https://picsum.photos/seed/ispionage/600/400', dataAiHint: 'ad copy research', pricing: 'Paid' },
            { name: 'Kompyte', description: 'Track competitors and analyze their strategies.', url: 'https://www.kompyte.com/', image: 'https://picsum.photos/seed/kompyte/600/400', dataAiHint: 'competitor tracking', pricing: 'Paid' },
        ]
    },
    {
        title: "Local SEO Management",
        icon: <MapPin className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'BrightLocal', description: 'Local SEO tools for agencies and businesses.', url: 'https://www.brightlocal.com/', image: 'https://picsum.photos/seed/brightlocal/600/400', dataAiHint: 'local seo', pricing: 'Paid' },
            { name: 'Yext', description: 'Manage your brand\'s local listings and reviews.', url: 'https://www.yext.com/', image: 'https://picsum.photos/seed/yext/600/400', dataAiHint: 'listing management', pricing: 'Paid' },
            { name: 'Moz Local', description: 'Local search engine listing management.', url: 'https://moz.com/products/local', image: 'https://picsum.photos/seed/moz-local/600/400', dataAiHint: 'local search', pricing: 'Paid' },
            { name: 'Whitespark', description: 'Local SEO tools and services.', url: 'https://whitespark.ca/', image: 'https://picsum.photos/seed/whitespark/600/400', dataAiHint: 'citation finder', pricing: 'Paid' },
        ]
    },
    {
        title: "Link Building & Outreach Tools",
        icon: <Handshake className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Hunter', description: 'Find email addresses in seconds.', url: 'https://hunter.io/', image: 'https://picsum.photos/seed/hunterio/600/400', dataAiHint: 'email finder', pricing: 'Freemium' },
            { name: 'BuzzStream', description: 'Build relationships and links.', url: 'https://www.buzzstream.com/', image: 'https://picsum.photos/seed/buzzstream/600/400', dataAiHint: 'outreach platform', pricing: 'Paid' },
            { name: 'Pitchbox', description: 'Influencer outreach and link building platform.', url: 'https://pitchbox.com/', image: 'https://picsum.photos/seed/pitchbox/600/400', dataAiHint: 'influencer outreach', pricing: 'Paid' },
            { name: 'HARO', description: 'Connect with journalists for media opportunities.', url: 'https://www.helpareporter.com/', image: 'https://picsum.photos/seed/haro/600/400', dataAiHint: 'public relations', pricing: 'Freemium' },
        ]
    },
    {
        title: "SEO Reporting & Dashboards",
        icon: <LayoutDashboard className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Google Data Studio', description: 'Turn your data into informative dashboards.', url: 'https://lookerstudio.google.com/', image: 'https://picsum.photos/seed/lookerstudio/600/400', dataAiHint: 'data dashboard', pricing: 'Free' },
            { name: 'DashThis', description: 'Automated marketing reporting tool.', url: 'https://dashthis.com/', image: 'https://picsum.photos/seed/dashthis/600/400', dataAiHint: 'marketing reports', pricing: 'Paid' },
            { name: 'Supermetrics', description: 'Marketing data pipeline.', url: 'https://supermetrics.com/', image: 'https://picsum.photos/seed/supermetrics/600/400', dataAiHint: 'data connectors', pricing: 'Paid' },
            { name: 'AgencyAnalytics', description: 'All-in-one reporting platform for agencies.', url: 'https://agencyanalytics.com/', image: 'https://picsum.photos/seed/agencyanalytics/600/400', dataAiHint: 'agency reports', pricing: 'Paid' },
        ]
    },
    {
        title: "Site Speed & Performance Tools",
        icon: <GanttChartSquare className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'GTmetrix', description: 'See how your site performs.', url: 'https://gtmetrix.com/', image: 'https://picsum.photos/seed/gtmetrix-seo/600/400', dataAiHint: 'site performance', pricing: 'Freemium' },
            { name: 'PageSpeed Insights', description: 'Make your web pages fast on all devices.', url: 'https://pagespeed.web.dev/', image: 'https://picsum.photos/seed/pagespeed-seo/600/400', dataAiHint: 'web performance', pricing: 'Free' },
            { name: 'Pingdom', description: 'Website performance monitoring.', url: 'https://www.pingdom.com/', image: 'https://picsum.photos/seed/pingdom/600/400', dataAiHint: 'uptime monitoring', pricing: 'Paid' },
            { name: 'WebPageTest', description: 'Website performance testing.', url: 'https://www.webpagetest.org/', image: 'https://picsum.photos/seed/webpagetest/600/400', dataAiHint: 'performance test', pricing: 'Free' },
        ]
    },
    {
        title: "Log File Analysis Software",
        icon: <FileText className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Screaming Frog Log File Analyser', description: 'Analyse log files for SEO.', url: 'https://www.screamingfrog.co.uk/log-file-analyser/', image: 'https://picsum.photos/seed/sf-log/600/400', dataAiHint: 'log analysis', pricing: 'Paid' },
            { name: 'Logz.io', description: 'Cloud observability platform.', url: 'https://logz.io/', image: 'https://picsum.photos/seed/logzio/600/400', dataAiHint: 'elk stack', pricing: 'Paid' },
            { name: 'Splunk', description: 'The Data-to-Everything Platform.', url: 'https://www.splunk.com/', image: 'https://picsum.photos/seed/splunk-log/600/400', dataAiHint: 'data platform', pricing: 'Paid' },
            { name: 'Graylog', description: 'Centralized log management.', url: 'https://www.graylog.org/', image: 'https://picsum.photos/seed/graylog-log/600/400', dataAiHint: 'log management', pricing: 'Freemium' },
        ]
    },
    {
        title: "Heatmap & Session Replay Tools",
        icon: <BotMessageSquare className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Hotjar', description: 'Website heatmaps & behavior analytics.', url: 'https://www.hotjar.com/', image: 'https://picsum.photos/seed/hotjar-seo/600/400', dataAiHint: 'heatmaps', pricing: 'Freemium' },
            { name: 'Microsoft Clarity', description: 'Free heatmaps & session recordings.', url: 'https://clarity.microsoft.com/', image: 'https://picsum.photos/seed/clarity-seo/600/400', dataAiHint: 'session recordings', pricing: 'Free' },
            { name: 'Crazy Egg', description: 'Website optimization with heatmaps.', url: 'https://www.crazyegg.com/', image: 'https://picsum.photos/seed/crazyegg-seo/600/400', dataAiHint: 'ab testing', pricing: 'Paid' },
            { name: 'Mouseflow', description: 'Behavior analytics software.', url: 'https://mouseflow.com/', image: 'https://picsum.photos/seed/mouseflow-seo/600/400', dataAiHint: 'session replay', pricing: 'Freemium' },
        ]
    },
    {
        title: "A/B Testing & CRO Platforms",
        icon: <TestTube className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Optimizely', description: 'Digital Experience Platform with A/B testing.', url: 'https://www.optimizely.com/', image: 'https://picsum.photos/seed/optimizely-cro/600/400', dataAiHint: 'experimentation', pricing: 'Paid' },
            { name: 'VWO', description: 'A/B testing and conversion optimization platform.', url: 'https://vwo.com/', image: 'https://picsum.photos/seed/vwo-cro/600/400', dataAiHint: 'cro platform', pricing: 'Paid' },
            { name: 'Google Optimize', description: 'A/B testing tool from Google (sunsetting).', url: 'https://marketingplatform.google.com/about/optimize/', image: 'https://picsum.photos/seed/goptimize/600/400', dataAiHint: 'google testing', pricing: 'Free' },
            { name: 'Convert', description: 'A/B testing software for agencies and SMBs.', url: 'https://www.convert.com/', image: 'https://picsum.photos/seed/convert-cro/600/400', dataAiHint: 'ab testing tool', pricing: 'Paid' },
        ]
    },
    {
        title: "PPC & SEM Analytics Tools",
        icon: <BarChart className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Google Ads', description: 'Online advertising platform by Google.', url: 'https://ads.google.com/', image: 'https://picsum.photos/seed/googleads-ppc/600/400', dataAiHint: 'google ads', pricing: 'Paid' },
            { name: 'WordStream', description: 'Online advertising tools and resources.', url: 'https://www.wordstream.com/', image: 'https://picsum.photos/seed/wordstream/600/400', dataAiHint: 'ppc software', pricing: 'Paid' },
            { name: 'Optmyzr', description: 'PPC management software for advertisers.', url: 'https://www.optmyzr.com/', image: 'https://picsum.photos/seed/optmyzr/600/400', dataAiHint: 'ppc automation', pricing: 'Paid' },
            { name: 'AdEspresso', description: 'Facebook, Instagram, and Google Ads management.', url: 'https://adespresso.com/', image: 'https://picsum.photos/seed/adespresso/600/400', dataAiHint: 'facebook ads', pricing: 'Paid' },
        ]
    },
    {
        title: "Content Idea Generation",
        icon: <Lightbulb className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'AnswerThePublic', description: 'Discover what people are asking about.', url: 'https://answerthepublic.com/', image: 'https://picsum.photos/seed/atp-idea/600/400', dataAiHint: 'search listening', pricing: 'Freemium' },
            { name: 'AlsoAsked', description: 'Discover the questions people are asking.', url: 'https://alsoasked.com/', image: 'https://picsum.photos/seed/alsoasked-idea/600/400', dataAiHint: 'people also ask', pricing: 'Freemium' },
            { name: 'BuzzSumo', description: 'Find what content is performing best.', url: 'https://buzzsumo.com/', image: 'https://picsum.photos/seed/buzzsumo-idea/600/400', dataAiHint: 'content analysis', pricing: 'Paid' },
            { name: 'Google Trends', description: 'Explore what the world is searching for.', url: 'https://trends.google.com/', image: 'https://picsum.photos/seed/gtrends-idea/600/400', dataAiHint: 'search trends', pricing: 'Free' },
        ]
    },
    {
        title: "On-Page SEO Checkers",
        icon: <CheckSquare className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Surfer SEO', description: 'On-page auditing and content optimization.', url: 'https://surferseo.com/', image: 'https://picsum.photos/seed/surfer-onpage/600/400', dataAiHint: 'content audit', pricing: 'Paid' },
            { name: 'Yoast SEO', description: 'The #1 WordPress SEO plugin.', url: 'https://yoast.com/wordpress/plugins/seo/', image: 'https://picsum.photos/seed/yoast-onpage/600/400', dataAiHint: 'wordpress seo', pricing: 'Freemium' },
            { name: 'Rank Math', description: 'The Swiss Army Knife of WordPress SEO.', url: 'https://rankmath.com/', image: 'https://picsum.photos/seed/rankmath-onpage/600/400', dataAiHint: 'wordpress seo', pricing: 'Freemium' },
            { name: 'SEOquake', description: 'Free browser extension for on-page SEO audit.', url: 'https://www.seoquake.com/', image: 'https://picsum.photos/seed/seoquake/600/400', dataAiHint: 'seo extension', pricing: 'Free' },
        ]
    },
    {
        title: "Mobile SEO Tools",
        icon: <Smartphone className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Google Mobile-Friendly Test', description: 'Test how easily a visitor can use your page on a mobile device.', url: 'https://search.google.com/test/mobile-friendly', image: 'https://picsum.photos/seed/gmobiletest/600/400', dataAiHint: 'mobile friendly', pricing: 'Free' },
            { name: 'AppTweak', description: 'App Store Optimization (ASO) tool driven by data science.', url: 'https://www.apptweak.com/', image: 'https://picsum.photos/seed/apptweak/600/400', dataAiHint: 'aso tool', pricing: 'Paid' },
            { name: 'AppFollow', description: 'App monitoring, app store optimization, and customer support.', url: 'https://appfollow.io/', image: 'https://picsum.photos/seed/appfollow/600/400', dataAiHint: 'app reviews', pricing: 'Freemium' },
            { name: 'Sensor Tower', description: 'Mobile app store marketing intelligence.', url: 'https://sensortower.com/', image: 'https://picsum.photos/seed/sensortower/600/400', dataAiHint: 'app intelligence', pricing: 'Paid' },
        ]
    },
    {
        title: "E-commerce SEO Platforms",
        icon: <ShoppingCart className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Shopify SEO', description: 'Built-in SEO features for Shopify stores.', url: 'https://www.shopify.com/blog/seo', image: 'https://picsum.photos/seed/shopify-seo/600/400', dataAiHint: 'ecommerce seo', pricing: 'Freemium' },
            { name: 'BigCommerce SEO', description: 'SEO tools for BigCommerce stores.', url: 'https://www.bigcommerce.com/seo/', image: 'https://picsum.photos/seed/bigcommerce-seo/600/400', dataAiHint: 'store seo', pricing: 'Freemium' },
        ]
    },
    {
        title: "Video SEO Tools",
        icon: <Video className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'TubeBuddy', description: 'Browser extension for YouTube channel management.', url: 'https://www.tubebuddy.com/', image: 'https://picsum.photos/seed/tubebuddy-seo/600/400', dataAiHint: 'youtube seo', pricing: 'Freemium' },
            { name: 'vidIQ', description: 'Grow your YouTube channel faster.', url: 'https://vidiq.com/', image: 'https://picsum.photos/seed/vidiq-seo/600/400', dataAiHint: 'youtube analytics', pricing: 'Freemium' },
        ]
    },
    {
        title: "Image SEO Optimization",
        icon: <ImageIcon className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'ShortPixel', description: 'Image optimizer for your website.', url: 'https://shortpixel.com/', image: 'https://picsum.photos/seed/shortpixel-seo/600/400', dataAiHint: 'image compression', pricing: 'Freemium' },
            { name: 'TinyPNG', description: 'Smart PNG and JPEG compression.', url: 'https://tinypng.com/', image: 'https://picsum.photos/seed/tinypng-seo/600/400', dataAiHint: 'image optimizer', pricing: 'Free' },
        ]
    },
    {
        title: "Voice Search Optimization Tools",
        icon: <Mic className="w-5 h-5 text-primary" />,
        tools: [
             { name: 'Schema App', description: 'Structured data and schema markup tool.', url: 'https://www.schemaapp.com/', image: 'https://picsum.photos/seed/schemaapp-voice/600/400', dataAiHint: 'schema markup', pricing: 'Paid' },
        ]
    },
    {
        title: "Affiliate Marketing Analytics",
        icon: <Handshake className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Voluum', description: 'Ad tracker for performance marketers.', url: 'https://voluum.com/', image: 'https://picsum.photos/seed/voluum-affiliate/600/400', dataAiHint: 'ad tracker', pricing: 'Paid' },
        ]
    },
    {
        title: "Data Visualization & Reporting",
        icon: <BarChart3 className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Tableau', description: 'Leading data visualization and BI software.', url: 'https://www.tableau.com/', image: 'https://picsum.photos/seed/tableau-viz/600/400', dataAiHint: 'data visualization', pricing: 'Paid' },
            { name: 'Google Data Studio', description: 'Turn your data into informative dashboards.', url: 'https://lookerstudio.google.com/', image: 'https://picsum.photos/seed/lookerstudio-viz/600/400', dataAiHint: 'data dashboard', pricing: 'Free' },
        ]
    },
    {
        title: "Tag Management Systems",
        icon: <Settings className="w-5 h-5 text-primary" />,
        tools: [
             { name: 'Google Tag Manager', description: 'Manage website tags without editing code.', url: 'https://marketingplatform.google.com/about/tag-manager/', image: 'https://picsum.photos/seed/gtm-seo/600/400', dataAiHint: 'tag manager', pricing: 'Free' },
             { name: 'Tealium', description: 'Customer data platform and tag management.', url: 'https://tealium.com/', image: 'https://picsum.photos/seed/tealium-seo/600/400', dataAiHint: 'customer data', pricing: 'Paid' },
        ]
    },
    {
        title: "Marketing Attribution Software",
        icon: <GanttChartSquare className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Ruler Analytics', description: 'Marketing attribution software.', url: 'https://www.ruleranalytics.com/', image: 'https://picsum.photos/seed/ruler-analytics/600/400', dataAiHint: 'marketing attribution', pricing: 'Paid' },
        ]
    },
    {
        title: "Audience Research & Insights",
        icon: <Users className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'SparkToro', description: 'Audience research tool.', url: 'https://sparktoro.com/', image: 'https://picsum.photos/seed/sparktoro/600/400', dataAiHint: 'audience research', pricing: 'Freemium' },
        ]
    },
    {
        title: "Content Strategy Platforms",
        icon: <BookOpen className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'GatherContent', description: 'Content operations platform.', url: 'https://gathercontent.com/', image: 'https://picsum.photos/seed/gathercontent/600/400', dataAiHint: 'content ops', pricing: 'Paid' },
        ]
    },
    {
        title: "Brand Monitoring Tools",
        icon: <Eye className="w-5 h-5 text-primary" />,
        tools: [
             { name: 'Brand24', description: 'Social media monitoring tool.', url: 'https://brand24.com/', image: 'https://picsum.photos/seed/brand24-seo/600/400', dataAiHint: 'brand monitoring', pricing: 'Paid' },
             { name: 'Mention', description: 'Social media and web monitoring.', url: 'https://mention.com/', image: 'https://picsum.photos/seed/mention-seo/600/400', dataAiHint: 'web monitoring', pricing: 'Freemium' },
        ]
    },
    {
        title: "Google Algorithm Update Trackers",
        icon: <TrendingUp className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'MozCast', description: 'The Google Algorithm Weather Report.', url: 'https://moz.com/mozcast/', image: 'https://picsum.photos/seed/mozcast/600/400', dataAiHint: 'google algorithm', pricing: 'Free' },
            { name: 'Semrush Sensor', description: 'Track Google\'s algorithm volatility.', url: 'https://www.semrush.com/sensor/', image: 'https://picsum.photos/seed/semrush-sensor/600/400', dataAiHint: 'serp volatility', pricing: 'Free' },
        ]
    },
    {
        title: "SEO APIs & Data Integration",
        icon: <Code className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'DataForSEO', description: 'SEO data via API.', url: 'https://dataforseo.com/', image: 'https://picsum.photos/seed/dataforseo/600/400', dataAiHint: 'seo data api', pricing: 'Paid' },
        ]
    },
    {
        title: "Penalty & Recovery Tools",
        icon: <ShieldCheck className="w-5 h-5 text-primary" />,
        tools: [
             { name: 'LinkResearchTools', description: 'Link audit and recovery tools.', url: 'https://www.linkresearchtools.com/', image: 'https://picsum.photos/seed/lrt-recovery/600/400', dataAiHint: 'link audit', pricing: 'Paid' },
        ]
    },
    {
        title: "Domain Analysis & Acquisition Tools",
        icon: <Globe className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Flippa', description: 'Marketplace for buying and selling online businesses.', url: 'https://flippa.com/', image: 'https://picsum.photos/seed/flippa-domain/600/400', dataAiHint: 'buy websites', pricing: 'Freemium' },
        ]
    },
    {
        title: "Keyword Cannibalization Checkers",
        icon: <Shuffle className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'SE Ranking', description: 'Find and fix keyword cannibalization issues.', url: 'https://seranking.com/', image: 'https://picsum.photos/seed/seranking-cannibal/600/400', dataAiHint: 'keyword cannibalization', pricing: 'Paid' },
        ]
    },
    {
        title: "Structured Data & Schema Tools",
        icon: <File className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Schema App', description: 'Structured data and schema markup tool.', url: 'https://www.schemaapp.com/', image: 'https://picsum.photos/seed/schemaapp-seo/600/400', dataAiHint: 'schema markup', pricing: 'Paid' },
        ]
    },
    {
        title: "International SEO Tools",
        icon: <Globe className="w-5 h-5 text-primary" />,
        tools: [
             { name: 'GeoRanker', description: 'Local rank tracking and SERP analysis.', url: 'https://www.georanker.com/', image: 'https://picsum.photos/seed/georanker-intl/600/400', dataAiHint: 'local serp', pricing: 'Paid' },
        ]
    },
    {
        title: "Programmatic SEO Tools",
        icon: <Cpu className="w-5 h-5 text-primary" />,
        tools: [
             { name: 'Airtable', description: 'Low-code platform for building collaborative apps.', url: 'https://www.airtable.com/', image: 'https://picsum.photos/seed/airtable-pseo/600/400', dataAiHint: 'database spreadsheet', pricing: 'Freemium' },
        ]
    },
    {
        title: "Content Decay Analysis",
        icon: <TrendingUp className="w-5 h-5 text-primary" style={{ transform: 'scaleY(-1)' }} />,
        tools: [
             { name: 'ClickFlow', description: 'Content decay tool to refresh old articles.', url: 'https://www.clickflow.com/content-decay', image: 'https://picsum.photos/seed/clickflow-decay/600/400', dataAiHint: 'content decay', pricing: 'Paid' },
        ]
    },
    {
        title: "AI for SEO & Automation",
        icon: <Bot className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Alli AI', description: 'AI-powered SEO automation platform.', url: 'https://alli.ai/', image: 'https://picsum.photos/seed/alliai-seo/600/400', dataAiHint: 'seo automation', pricing: 'Paid' },
        ]
    }
];
