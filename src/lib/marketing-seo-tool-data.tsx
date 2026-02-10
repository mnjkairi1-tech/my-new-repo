'use client';

import React from 'react';
import { 
    Lightbulb, TrendingUp, Search, FileText, Bot, BookOpen, Code, Link as LinkIcon, ClipboardCheck, Zap,
    Globe, MessageSquare, Calendar, Users, Mail, Filter, Target, GitBranch, BarChart, Eye, ThumbsUp,
    Store, ShoppingCart, Mic, GanttChartSquare, Rocket, UserCheck, TestTube, UserSquare, Handshake, Shield,
    PenTool, Video, ImageIcon, LineChart, UserCog, UserPlus, MapPin
} from 'lucide-react';
import { aiAllInOneSeoTools } from './marketing-seo-data/ai-all-in-one-seo';
import { aiContentMarketingSeoTools } from './marketing-seo-data/ai-content-marketing-seo';
import { aiSocialMediaMarketingTools } from './marketing-seo-data/ai-social-media-marketing';
import { aiEmailMarketingTools } from './marketing-seo-data/ai-email-marketing';
import { aiMarketingAutomationTools } from './marketing-seo-data/ai-marketing-automation';
import { aiPpcAdsOptimizationTools } from './marketing-seo-data/ai-ppc-ads-optimization';
import { aiAdCopyGeneratorsTools } from './marketing-seo-data/ai-ad-copy-generators';
import { aiLandingPageOptimizationTools } from './marketing-seo-data/ai-landing-page-optimization';
import { aiConversionRateOptimizationTools } from './marketing-seo-data/ai-conversion-rate-optimization';
import { aiAbTestingTools } from './marketing-seo-data/ai-ab-testing-tools';
import { aiLeadGenerationTools } from './marketing-seo-data/ai-lead-generation-tools';
import { aiChatbotsMarketingTools } from './marketing-seo-data/ai-chatbots-marketing';
import { aiPersonalizationEnginesTools } from './marketing-seo-data/ai-personalization-engines';
import { aiMarketingAnalyticsTools } from './marketing-seo-data/ai-marketing-analytics';
import { aiPredictiveAnalyticsMarketingTools } from './marketing-seo-data/ai-predictive-analytics-marketing';
import { aiCompetitiveIntelligenceTools } from './marketing-seo-data/ai-competitive-intelligence';
import { aiLocalSeoTools } from './marketing-seo-data/ai-local-seo';
import { aiGrowthHackingTools } from './marketing-seo-data/ai-growth-hacking';


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
        tools: aiAllInOneSeoTools,
    },
    {
        title: "Content Marketing & SEO",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: aiContentMarketingSeoTools,
    },
    {
        title: "Social Media Marketing",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: aiSocialMediaMarketingTools,
    },
    {
        title: "Email Marketing",
        icon: <Mail className="w-5 h-5 text-primary"/>,
        tools: aiEmailMarketingTools,
    },
    {
        title: "Marketing Automation",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: aiMarketingAutomationTools,
    },
    { title: "AI PPC & Ads Optimization", icon: <Lightbulb className="w-5 h-5 text-primary" />, tools: aiPpcAdsOptimizationTools },
    { title: "AI Ad Copy Generators", icon: <PenTool className="w-5 h-5 text-primary" />, tools: aiAdCopyGeneratorsTools },
    { title: "AI Landing Page Optimization", icon: <Target className="w-5 h-5 text-primary" />, tools: aiLandingPageOptimizationTools },
    { title: "AI Conversion Rate Optimization (CRO)", icon: <TrendingUp className="w-5 h-5 text-primary" />, tools: aiConversionRateOptimizationTools },
    { title: "AI A/B Testing Tools", icon: <TestTube className="w-5 h-5 text-primary" />, tools: aiAbTestingTools },
    { title: "AI Affiliate Marketing Tools", icon: <Handshake className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Lead Generation Tools", icon: <UserPlus className="w-5 h-5 text-primary" />, tools: aiLeadGenerationTools },
    { title: "AI Chatbots for Marketing", icon: <Bot className="w-5 h-5 text-primary" />, tools: aiChatbotsMarketingTools },
    { title: "AI Personalization Engines", icon: <UserCog className="w-5 h-5 text-primary" />, tools: aiPersonalizationEnginesTools },
    { title: "AI Marketing Analytics", icon: <BarChart className="w-5 h-5 text-primary" />, tools: aiMarketingAnalyticsTools },
    { title: "AI Customer Data Platforms (CDP)", icon: <Users className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Predictive Analytics for Marketing", icon: <LineChart className="w-5 h-5 text-primary" />, tools: aiPredictiveAnalyticsMarketingTools },
    { title: "AI Customer Segmentation", icon: <Users className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Marketing Mix Modeling", icon: <BarChart className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Market Research Tools", icon: <Search className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Competitive Intelligence", icon: <Eye className="w-5 h-5 text-primary" />, tools: aiCompetitiveIntelligenceTools },
    { title: "AI Video Marketing Tools", icon: <Video className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Image & Design for Marketing", icon: <ImageIcon className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Brand Reputation Management", icon: <Shield className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI PR & Media Outreach", icon: <Globe className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Local SEO Tools", icon: <MapPin className="w-5 h-5 text-primary" />, tools: aiLocalSeoTools },
    { title: "AI E-commerce Marketing Tools", icon: <ShoppingCart className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Voice Search Optimization", icon: <Mic className="w-5 h-5 text-primary" />, tools: [] },
    { title: "AI Growth Hacking Tools", icon: <Rocket className="w-5 h-5 text-primary" />, tools: aiGrowthHackingTools },
    { title: "AI Marketing Strategy Tools", icon: <GanttChartSquare className="w-5 h-5 text-primary" />, tools: [] }
];
