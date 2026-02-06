
'use client';

import React from 'react';
import { 
    Users, Bot, Edit, BarChart, Calendar, Camera, Play, Music, Feather, Hash, Send, CalendarDays,
    Repeat, Layers, Clapperboard, Video, ImageIcon, Image as ImageLucide, PartyPopper, Tv, MessageCircle, FileText,
    Heart, Search, Mic, TrendingUp, ThumbsUp, TestTube, MessageSquare, Shield, Zap,
    UserPlus, UserSquare, GanttChartSquare
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

export const socialMediaToolData: ToolCategory[] = [
    {
        title: "AI Social Media Management",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Sprout Social', description: 'Social media management and optimization platform.', url: 'https://sproutsocial.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sproutsocial.com', dataAiHint: 'social management', pricing: 'Paid' },
            { name: 'Hootsuite', description: 'Manage all your social media in one place.', url: 'https://www.hootsuite.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=hootsuite.com', dataAiHint: 'social dashboard', pricing: 'Paid' },
            { name: 'Agorapulse', description: 'Social media management software for agencies.', url: 'https://www.agorapulse.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=agorapulse.com', dataAiHint: 'social inbox', pricing: 'Paid' },
            { name: 'Buffer', description: 'Social media toolkit for small businesses.', url: 'https://buffer.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=buffer.com', dataAiHint: 'social scheduling', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Content Creation",
        icon: <Feather className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Jasper', description: 'AI content platform for social media posts.', url: 'https://www.jasper.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=jasper.ai', dataAiHint: 'ai writer', pricing: 'Paid' },
            { name: 'Copy.ai', description: 'Generate high-quality social media copy.', url: 'https://www.copy.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=copy.ai', dataAiHint: 'marketing copy', pricing: 'Freemium' },
            { name: 'Canva', description: 'Design anything for social media.', url: 'https://www.canva.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=canva.com', dataAiHint: 'design tool', pricing: 'Freemium' },
            { name: 'Writesonic', description: 'AI writer for social media content.', url: 'https://writesonic.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=writesonic.com', dataAiHint: 'content generator', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Post Generators",
        icon: <Send className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Ocoya', description: 'AI-powered social media marketing.', url: 'https://www.ocoya.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ocoya.com', dataAiHint: 'ai marketing', pricing: 'Paid' },
            { name: 'Metricool', description: 'Analyze, manage, and grow your digital presence.', url: 'https://metricool.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=metricool.com', dataAiHint: 'digital presence', pricing: 'Freemium' },
            { name: 'ContentStudio', description: 'Content marketing and social media management platform.', url: 'https://contentstudio.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=contentstudio.io', dataAiHint: 'content discovery', pricing: 'Paid' },
            { name: 'FeedHive', description: 'AI-powered social media marketing.', url: 'https://feedhive.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=feedhive.io', dataAiHint: 'content recycling', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Caption & Hashtag Generators",
        icon: <Hash className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Flick', description: 'Hashtag and analytics tool for Instagram.', url: 'https://www.flick.tech/', image: 'https://www.google.com/s2/favicons?sz=128&domain=flick.tech', dataAiHint: 'instagram hashtags', pricing: 'Paid' },
            { name: 'RiteTag', description: 'Get instant hashtag suggestions.', url: 'https://ritetag.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ritetag.com', dataAiHint: 'hashtag suggestions', pricing: 'Paid' },
            { name: 'Kicksta Hashtag Generator', description: 'Free Instagram hashtag generator.', url: 'https://kicksta.co/instagram-hashtag-generator', image: 'https://www.google.com/s2/favicons?sz=128&domain=kicksta.co', dataAiHint: 'hashtag generator', pricing: 'Free' },
            { name: 'All Hashtag', description: 'A hashtag generator for your social media.', url: 'https://www.all-hashtag.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=all-hashtag.com', dataAiHint: 'hashtag tool', pricing: 'Free' },
        ]
    },
    {
        title: "AI Social Media Scheduling",
        icon: <Calendar className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Later', description: 'Visually plan and schedule social media posts.', url: 'https://later.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=later.com', dataAiHint: 'instagram scheduler', pricing: 'Freemium' },
            { name: 'Buffer', description: 'Social media toolkit for small businesses.', url: 'https://buffer.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=buffer.com', dataAiHint: 'social scheduling', pricing: 'Freemium' },
            { name: 'Hootsuite', description: 'Schedule and publish content to all your social networks.', url: 'https://www.hootsuite.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=hootsuite.com', dataAiHint: 'social planner', pricing: 'Paid' },
            { name: 'CoSchedule', description: 'Marketing calendar and content organizer.', url: 'https://coschedule.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=coschedule.com', dataAiHint: 'marketing calendar', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Reels & Shorts Generators",
        icon: <Clapperboard className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Opus Clip', description: 'Turn long videos into viral shorts with AI.', url: 'https://www.opus.pro/', image: 'https://www.google.com/s2/favicons?sz=128&domain=opus.pro', dataAiHint: 'viral shorts', pricing: 'Freemium' },
            { name: 'Vidyo.ai', description: 'Make short videos from long ones instantly.', url: 'https://vidyo.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=vidyo.ai', dataAiHint: 'video clips', pricing: 'Freemium' },
            { name: 'Klap', description: 'Get ready-to-publish short videos from your content.', url: 'https://klap.app/', image: 'https://www.google.com/s2/favicons?sz=128&domain=klap.app', dataAiHint: 'short videos', pricing: 'Freemium' },
            { name: 'InVideo', description: 'Create stunning short videos in minutes.', url: 'https://invideo.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=invideo.io', dataAiHint: 'video maker', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Video Editing for Social Media",
        icon: <Video className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'CapCut', description: 'Free all-in-one video editor for social media.', url: 'https://www.capcut.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=capcut.com', dataAiHint: 'video editor', pricing: 'Free' },
            { name: 'Veed.io', description: 'Online video editor made for social media.', url: 'https://www.veed.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=veed.io', dataAiHint: 'online editor', pricing: 'Freemium' },
            { name: 'Descript', description: 'Edit video by editing text.', url: 'https://www.descript.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=descript.com', dataAiHint: 'text-based editing', pricing: 'Freemium' },
            { name: 'Lumen5', description: 'Transform blog posts into social videos.', url: 'https://lumen5.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lumen5.com', dataAiHint: 'social videos', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Thumbnail Generators",
        icon: <ImageIcon className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Canva', description: 'Create custom thumbnails for your videos.', url: 'https://www.canva.com/create/youtube-thumbnails/', image: 'https://www.google.com/s2/favicons?sz=128&domain=canva.com', dataAiHint: 'youtube thumbnail', pricing: 'Freemium' },
            { name: 'Fotor Thumbnail Maker', description: 'Free online YouTube thumbnail maker.', url: 'https://www.fotor.com/create/youtube-banner', image: 'https://www.google.com/s2/favicons?sz=128&domain=fotor.com', dataAiHint: 'thumbnail maker', pricing: 'Freemium' },
            { name: 'Snappa', description: 'Create online graphics in a snap.', url: 'https://snappa.com/create/youtube-thumbnails', image: 'https://www.google.com/s2/favicons?sz=128&domain=snappa.com', dataAiHint: 'online graphics', pricing: 'Freemium' },
            { name: 'Adobe Express Thumbnail Maker', description: 'Create free YouTube thumbnails.', url: 'https://www.adobe.com/express/create/thumbnail', image: 'https://www.google.com/s2/favicons?sz=128&domain=adobe.com', dataAiHint: 'free thumbnail', pricing: 'Free' },
        ]
    },
    {
        title: "AI Meme Generators",
        icon: <PartyPopper className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Kapwing', description: 'Online meme generator.', url: 'https://www.kapwing.com/meme-maker', image: 'https://www.google.com/s2/favicons?sz=128&domain=kapwing.com', dataAiHint: 'meme maker', pricing: 'Freemium' },
            { name: 'Imgflip', description: 'Create and share images, memes, and GIFs.', url: 'https://imgflip.com/memegenerator', image: 'https://www.google.com/s2/favicons?sz=128&domain=imgflip.com', dataAiHint: 'gif maker', pricing: 'Freemium' },
            { name: 'Supermeme.ai', description: 'AI-powered meme generator.', url: 'https://www.supermeme.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=supermeme.ai', dataAiHint: 'ai meme', pricing: 'Freemium' },
            { name: 'Veed.io Meme Generator', description: 'Create video memes and image memes online.', url: 'https://www.veed.io/tools/meme-generator', image: 'https://www.google.com/s2/favicons?sz=128&domain=veed.io', dataAiHint: 'video meme', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Story & Reel Editors",
        icon: <Tv className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'InShot', description: 'Powerful all-in-one Video Editor and Video Maker.', url: 'https://inshot.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=inshot.com', dataAiHint: 'mobile video', pricing: 'Freemium' },
            { name: 'Unfold', description: 'Create beautiful stories with templates.', url: 'https://unfold.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=unfold.com', dataAiHint: 'story templates', pricing: 'Freemium' },
            { name: 'Mojo', description: 'Create stunning video stories.', url: 'https://www.mojo-app.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mojo-app.com', dataAiHint: 'animated stories', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Influencer Marketing",
        icon: <Heart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Upfluence', description: 'All-in-one influencer marketing platform.', url: 'https://www.upfluence.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=upfluence.com', dataAiHint: 'influencer platform', pricing: 'Paid' },
            { name: 'Grin', description: 'The #1 creator management platform.', url: 'https://grin.co/', image: 'https://www.google.com/s2/favicons?sz=128&domain=grin.co', dataAiHint: 'creator management', pricing: 'Paid' },
            { name: 'HypeAuditor', description: 'AI-powered analytics for influencer marketing.', url: 'https://hypeauditor.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=hypeauditor.com', dataAiHint: 'influencer analytics', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Engagement Optimization",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Shield', description: 'Analytics for LinkedIn content creators.', url: 'https://www.shieldapp.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=shieldapp.ai', dataAiHint: 'linkedin analytics', pricing: 'Paid' },
            { name: 'Quantum Workplace', description: 'Employee engagement and performance software.', url: 'https://www.quantumworkplace.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=quantumworkplace.com', dataAiHint: 'performance software', pricing: 'Paid' },
        ]
    },
    {
        title: "AI A/B Testing for Social Posts",
        icon: <TestTube className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Adespresso', description: 'A/B test your Facebook, Instagram & Google Ads.', url: 'https://adespresso.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=adespresso.com', dataAiHint: 'ad testing', pricing: 'Paid' },
            { name: 'Hootsuite Ads', description: 'Create and A/B test ads across social networks.', url: 'https://www.hootsuite.com/products/ads', image: 'https://www.google.com/s2/favicons?sz=128&domain=hootsuite.com', dataAiHint: 'social ads', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Auto Posting Tools",
        icon: <Repeat className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'MeetEdgar', description: 'Social media automation and scheduling.', url: 'https://meetedgar.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=meetedgar.com', dataAiHint: 'content recycling', pricing: 'Paid' },
            { name: 'SocialBee', description: 'AI-powered social media management tool.', url: 'https://socialbee.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=socialbee.io', dataAiHint: 'content categories', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Content Calendar Tools",
        icon: <CalendarDays className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'CoSchedule', description: 'Marketing calendar and content organizer.', url: 'https://coschedule.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=coschedule.com', dataAiHint: 'marketing calendar', pricing: 'Paid' },
            { name: 'Loomly', description: 'Brand success platform for marketing teams.', url: 'https://www.loomly.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=loomly.com', dataAiHint: 'brand success', pricing: 'Paid' },
        ]
    }
];
