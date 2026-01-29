
'use client';

import React from 'react';
import { 
    Bot, Puzzle, ShoppingCart, BookOpen, FileText, Globe, Code, Layers, Smartphone, LayoutDashboard,
    Zap, Gem, PenTool, Wind
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

export const websiteBuilderToolData: ToolCategory[] = [
    {
        title: "AI Website Builders",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Durable', description: 'AI website builder that generates a website in seconds.', url: 'https://durable.co/', image: 'https://picsum.photos/seed/durable-web/600/400', dataAiHint: 'ai builder', pricing: 'Paid' },
            { name: 'Hostinger AI Website Builder', description: 'Create a website with AI in minutes.', url: 'https://www.hostinger.com/website-builder', image: 'https://picsum.photos/seed/hostinger-web/600/400', dataAiHint: 'hosting builder', pricing: 'Paid' },
            { name: 'Wix ADI', description: 'Artificial Design Intelligence to create your site.', url: 'https://www.wix.com/adi', image: 'https://picsum.photos/seed/wix-adi/600/400', dataAiHint: 'design intelligence', pricing: 'Freemium' },
            { name: 'Jimdo', description: 'Create a professional website in just a few minutes.', url: 'https://www.jimdo.com/', image: 'https://picsum.photos/seed/jimdo/600/400', dataAiHint: 'easy website', pricing: 'Freemium' },
            { name: 'Bookmark', description: 'AI-powered website builder.', url: 'https://www.bookmark.com/', image: 'https://picsum.photos/seed/bookmark/600/400', dataAiHint: 'ai website', pricing: 'Paid' },
        ]
    },
    {
        title: "No-Code/Low-Code Platforms",
        icon: <Puzzle className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Webflow', description: 'Build responsive websites visually.', url: 'https://webflow.com/', image: 'https://picsum.photos/seed/webflow-nocode/600/400', dataAiHint: 'visual development', pricing: 'Freemium' },
            { name: 'Bubble', description: 'Build production-ready web apps without code.', url: 'https://bubble.io/', image: 'https://picsum.photos/seed/bubble-nocode/600/400', dataAiHint: 'no-code apps', pricing: 'Freemium' },
            { name: 'Framer', description: 'Design and build professional websites.', url: 'https://www.framer.com/', image: 'https://picsum.photos/seed/framer-nocode/600/400', dataAiHint: 'interactive sites', pricing: 'Freemium' },
            { name: 'Glide', description: 'Create apps from Google Sheets, no code required.', url: 'https://www.glideapps.com/', image: 'https://picsum.photos/seed/glide-nocode/600/400', dataAiHint: 'apps from sheets', pricing: 'Freemium' },
            { name: 'Adalo', description: 'Build custom web & mobile apps without code.', url: 'https://www.adalo.com/', image: 'https://picsum.photos/seed/adalo-nocode/600/400', dataAiHint: 'mobile apps', pricing: 'Freemium' },
        ]
    },
    {
        title: "E-commerce Builders",
        icon: <ShoppingCart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Shopify', description: 'E-commerce platform for businesses of all sizes.', url: 'https://www.shopify.com/', image: 'https://picsum.photos/seed/shopify-ecom/600/400', dataAiHint: 'online store', pricing: 'Paid' },
            { name: 'BigCommerce', description: 'Leading e-commerce platform for growing brands.', url: 'https://www.bigcommerce.com/', image: 'https://picsum.photos/seed/bigcommerce-ecom/600/400', dataAiHint: 'ecommerce builder', pricing: 'Paid' },
            { name: 'Wix eCommerce', description: 'Build your online store with Wix.', url: 'https://www.wix.com/ecommerce/website', image: 'https://picsum.photos/seed/wix-ecom/600/400', dataAiHint: 'wix store', pricing: 'Freemium' },
            { name: 'Squarespace Commerce', description: 'All-in-one platform with e-commerce features.', url: 'https://www.squarespace.com/commerce', image: 'https://picsum.photos/seed/squarespace-ecom/600/400', dataAiHint: 'website commerce', pricing: 'Paid' },
        ]
    },
    {
        title: "Portfolio Builders",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Adobe Portfolio', description: 'Build your own personalized website.', url: 'https://portfolio.adobe.com/', image: 'https://picsum.photos/seed/adobe-portfolio-web/600/400', dataAiHint: 'online portfolio', pricing: 'Paid' },
            { name: 'Carbonmade', description: 'The portfolio tool for creatives.', url: 'https://carbonmade.com/', image: 'https://picsum.photos/seed/carbonmade-web/600/400', dataAiHint: 'creative portfolio', pricing: 'Paid' },
            { name: 'Format', description: 'Online portfolio for photographers and artists.', url: 'https://www.format.com/', image: 'https://picsum.photos/seed/format-web/600/400', dataAiHint: 'photographer portfolio', pricing: 'Paid' },
        ]
    },
    {
        title: "Blogging Platforms",
        icon: <PenTool className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'WordPress.org', description: 'The world’s most popular website builder.', url: 'https://wordpress.org/', image: 'https://picsum.photos/seed/wordpress-blog/600/400', dataAiHint: 'self-hosted blog', pricing: 'Free' },
            { name: 'Medium', description: 'A place to read, write, and deepen your understanding.', url: 'https://medium.com/', image: 'https://picsum.photos/seed/medium-blog/600/400', dataAiHint: 'online magazine', pricing: 'Freemium' },
            { name: 'Ghost', description: 'The professional publishing platform.', url: 'https://ghost.org/', image: 'https://picsum.photos/seed/ghost-blog/600/400', dataAiHint: 'publishing platform', pricing: 'Paid' },
        ]
    },
    {
        title: "Landing Page Builders",
        icon: <Wind className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Unbounce', description: 'Landing page builder for higher conversions.', url: 'https://unbounce.com/', image: 'https://picsum.photos/seed/unbounce-landing/600/400', dataAiHint: 'landing page', pricing: 'Paid' },
            { name: 'Leadpages', description: 'Build high-converting websites and landing pages.', url: 'https://www.leadpages.com/', image: 'https://picsum.photos/seed/leadpages-landing/600/400', dataAiHint: 'lead generation', pricing: 'Paid' },
            { name: 'Instapage', description: 'The advertising conversion cloud.', url: 'https://instapage.com/', image: 'https://picsum.photos/seed/instapage-landing/600/400', dataAiHint: 'conversion cloud', pricing: 'Paid' },
        ]
    },
    {
        title: "Static Site Generators",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Next.js', description: 'The React Framework for Production.', url: 'https://nextjs.org/', image: 'https://picsum.photos/seed/nextjs-static/600/400', dataAiHint: 'react framework', pricing: 'Free' },
            { name: 'Gatsby', description: 'Fast, secure, and powerful websites.', url: 'https://www.gatsbyjs.com/', image: 'https://picsum.photos/seed/gatsby-static/600/400', dataAiHint: 'react ssg', pricing: 'Free' },
            { name: 'Hugo', description: 'The world’s fastest framework for building websites.', url: 'https://gohugo.io/', image: 'https://picsum.photos/seed/hugo-static/600/400', dataAiHint: 'go framework', pricing: 'Free' },
        ]
    },
];
