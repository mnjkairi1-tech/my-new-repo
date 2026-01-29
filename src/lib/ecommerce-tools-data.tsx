
'use client';

import React from 'react';
import { 
    Bot, User, ShoppingCart, TrendingUp, Zap, DollarSign, FileText, ImageIcon, Video, Search,
    Layout, Truck, Shield, BarChart, Users as UsersIcon, Mail, Star, Heart, Store
} from 'lucide-react';
import { aiProductRecommendationTools } from './ecommerce-tools-data/ai-product-recommendation';
import { aiPersonalizedShoppingTools } from './ecommerce-tools-data/ai-personalized-shopping';
import { aiEcommerceChatbotsTools } from './ecommerce-tools-data/ai-ecommerce-chatbots';
import { aiCustomerSupportTools } from './ecommerce-tools-data/ai-customer-support';
import { aiSalesAutomationTools } from './ecommerce-tools-data/ai-sales-automation';
import { aiConversionRateOptimizationTools } from './ecommerce-tools-data/ai-conversion-rate-optimization';
import { aiUpsellCrossSellTools } from './ecommerce-tools-data/ai-upsell-cross-sell';

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

export const eCommerceToolData: ToolCategory[] = [
    {
        title: "AI Product Recommendation",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: aiProductRecommendationTools
    },
    {
        title: "AI Personalized Shopping",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: aiPersonalizedShoppingTools
    },
    {
        title: "AI E-Commerce Chatbots",
        icon: <ShoppingCart className="w-5 h-5 text-primary"/>,
        tools: aiEcommerceChatbotsTools
    },
    {
        title: "AI Customer Support",
        icon: <UsersIcon className="w-5 h-5 text-primary"/>,
        tools: aiCustomerSupportTools
    },
    {
        title: "AI Sales Automation",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: aiSalesAutomationTools
    },
    {
        title: "AI Conversion Rate Optimization",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: aiConversionRateOptimizationTools
    },
    {
        title: "AI Upsell & Cross-Sell Tools",
        icon: <DollarSign className="w-5 h-5 text-primary"/>,
        tools: aiUpsellCrossSellTools
    },
    {
        title: "AI Pricing Optimization",
        icon: <DollarSign className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Pricely', description: 'Dynamic pricing and competitor price monitoring.', url: 'https://www.pricely.io/', image: 'https://picsum.photos/seed/pricely-pricing/600/400', dataAiHint: 'dynamic pricing', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Dynamic Pricing AI",
        icon: <DollarSign className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Competera', description: 'AI-powered pricing platform.', url: 'https://competera.net/', image: 'https://picsum.photos/seed/competera-pricing/600/400', dataAiHint: 'pricing platform', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Revenue Optimization",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ProfitWell', description: 'Subscription metrics and retention automation.', url: 'https://www.profitwell.com/', image: 'https://picsum.photos/seed/profitwell-rev/600/400', dataAiHint: 'subscription metrics', pricing: 'Free' },
        ]
    },
    {
        title: "AI Product Description Generators",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Jasper', description: 'AI writer for product descriptions.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-desc/600/400', dataAiHint: 'ai writer', pricing: 'Paid' },
            { name: 'Copy.ai', description: 'Generate product descriptions in seconds.', url: 'https://www.copy.ai/', image: 'https://picsum.photos/seed/copyai-desc/600/400', dataAiHint: 'product copy', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Image & Video for Products",
        icon: <Video className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Glorify', description: 'Product photo editor for e-commerce.', url: 'https://www.glorify.com/', image: 'https://picsum.photos/seed/glorify-img/600/400', dataAiHint: 'product photo', pricing: 'Freemium' },
            { name: 'Pixelcut', description: 'AI graphic designer for product photos.', url: 'https://www.pixelcut.ai/', image: 'https://picsum.photos/seed/pixelcut-img/600/400', dataAiHint: 'ai graphic designer', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Product Search & Discovery",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Algolia', description: 'Hosted search API for websites and mobile apps.', url: 'https://www.algolia.com/', image: 'https://picsum.photos/seed/algolia-search/600/400', dataAiHint: 'search api', pricing: 'Paid' },
            { name: 'Klevu', description: 'AI-powered search and discovery.', url: 'https://www.klevu.com/', image: 'https://picsum.photos/seed/klevu-search/600/400', dataAiHint: 'ecommerce search', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Visual Search Tools",
        icon: <ImageIcon className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Syte', description: 'Visual AI for retail.', url: 'https://www.syte.ai/', image: 'https://picsum.photos/seed/syte-visual/600/400', dataAiHint: 'visual search', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Inventory Management AI",
        icon: <Layout className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Linnworks', description: 'Total commerce control.', url: 'https://www.linnworks.com/', image: 'https://picsum.photos/seed/linnworks-inv/600/400', dataAiHint: 'inventory management', pricing: 'Paid' },
            { name: 'Cin7', description: 'Automated inventory management.', url: 'https://www.cin7.com/', image: 'https://picsum.photos/seed/cin7-inv/600/400', dataAiHint: 'inventory software', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Demand Forecasting Tools",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Inventoro', description: 'Sales forecasting and inventory optimization.', url: 'https://www.inventoro.com/', image: 'https://picsum.photos/seed/inventoro-demand/600/400', dataAiHint: 'sales forecasting', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Supply Chain Optimization",
        icon: <Truck className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Flexport', description: 'The modern freight forwarder.', url: 'https://www.flexport.com/', image: 'https://picsum.photos/seed/flexport-supply/600/400', dataAiHint: 'freight forwarding', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Order Management AI",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Orderhive', description: 'E-commerce automation platform.', url: 'https://www.orderhive.com/', image: 'https://picsum.photos/seed/orderhive-order/600/400', dataAiHint: 'order management', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Logistics & Shipping AI",
        icon: <Truck className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ShipStation', description: 'E-commerce shipping software.', url: 'https://www.shipstation.com/', image: 'https://picsum.photos/seed/shipstation/600/400', dataAiHint: 'shipping software', pricing: 'Paid' },
            { name: 'Shippo', description: 'The best shipping software for growing e-commerce businesses.', url: 'https://goshippo.com/', image: 'https://picsum.photos/seed/shippo/600/400', dataAiHint: 'ecommerce shipping', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Fraud Detection Tools",
        icon: <Shield className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Signifyd', description: 'Guaranteed fraud protection.', url: 'https://www.signifyd.com/', image: 'https://picsum.photos/seed/signifyd-fraud/600/400', dataAiHint: 'fraud protection', pricing: 'Paid' },
            { name: 'Kount', description: 'AI-driven fraud prevention.', url: 'https://kount.com/', image: 'https://picsum.photos/seed/kount-fraud/600/400', dataAiHint: 'ecommerce fraud', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Payment & Checkout Optimization",
        icon: <DollarSign className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Stripe', description: 'Online payment processing for internet businesses.', url: 'https://stripe.com/', image: 'https://picsum.photos/seed/stripe-checkout/600/400', dataAiHint: 'payment processing', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Cart Abandonment Recovery",
        icon: <ShoppingCart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Klaviyo', description: 'Automated cart abandonment emails.', url: 'https://www.klaviyo.com/', image: 'https://picsum.photos/seed/klaviyo-cart/600/400', dataAiHint: 'abandoned cart', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Email & SMS Marketing for E-Commerce",
        icon: <Mail className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Omnisend', description: 'Email & SMS marketing for e-commerce.', url: 'https://www.omnisend.com/', image: 'https://picsum.photos/seed/omnisend-email/600/400', dataAiHint: 'sms marketing', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Customer Segmentation Tools",
        icon: <UsersIcon className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Segment', description: 'The leading Customer Data Platform (CDP).', url: 'https://segment.com/', image: 'https://picsum.photos/seed/segment-ecom/600/400', dataAiHint: 'customer data', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Customer Lifetime Value Analytics",
        icon: <Heart className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Lifetimely', description: 'LTV and profit analytics for Shopify.', url: 'https://www.lifetimely.io/', image: 'https://picsum.photos/seed/lifetimely/600/400', dataAiHint: 'shopify analytics', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Review & Feedback Analysis",
        icon: <Star className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Yotpo', description: 'eCommerce marketing platform with reviews.', url: 'https://www.yotpo.com/', image: 'https://picsum.photos/seed/yotpo-reviews/600/400', dataAiHint: 'customer reviews', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Brand Monitoring for E-Commerce",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Brand24', description: 'Social media monitoring tool.', url: 'https://brand24.com/', image: 'https://picsum.photos/seed/brand24-ecom/600/400', dataAiHint: 'media monitoring', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Marketplace Optimization Tools",
        icon: <Store className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Jungle Scout', description: 'Tools for Amazon sellers.', url: 'https://www.junglescout.com/', image: 'https://picsum.photos/seed/junglescout/600/400', dataAiHint: 'amazon fba', pricing: 'Paid' },
            { name: 'Helium 10', description: 'Software for Amazon sellers.', url: 'https://www.helium10.com/', image: 'https://picsum.photos/seed/helium10/600/400', dataAiHint: 'amazon seller', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Store Analytics & Insights",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Glew.io', description: 'E-commerce analytics and business intelligence.', url: 'https://glew.io/', image: 'https://picsum.photos/seed/glew/600/400', dataAiHint: 'ecommerce analytics', pricing: 'Paid' },
        ]
    },
    {
        title: "AI E-Commerce Growth Tools",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Shopify Plus', description: 'Enterprise e-commerce platform.', url: 'https://www.shopify.com/plus', image: 'https://picsum.photos/seed/shopifyplus/600/400', dataAiHint: 'enterprise ecommerce', pricing: 'Paid' },
        ]
    }
];

eCommerceToolData.forEach(category => {
    if (category.tools.length === 0) {
        for (let i = 1; i <= 10; i++) {
            category.tools.push({
                name: `${category.title.replace(' Tools', '').trim()} Tool ${i}`,
                description: `A sample tool for the ${category.title} category.`,
                url: '#',
                image: `https://picsum.photos/seed/${category.title.toLowerCase().replace(/\s+/g, '-')}-${i}/600/400`,
                dataAiHint: 'ecommerce tool',
                pricing: i % 3 === 0 ? 'Free' : (i % 2 === 0 ? 'Freemium' : 'Paid'),
            });
        }
    }
});
