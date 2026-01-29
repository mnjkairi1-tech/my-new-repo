'use client';

import React from 'react';
import {
    FileText, Bot, Repeat, DollarSign, Clock, ScanLine, Calculator, Wallet, CreditCard, Calendar,
    Mail, Users, Book, FilePenLine, RefreshCw, Zap, BarChart, Shield, Palette, Smartphone, GitBranch,
    FileLock2, FileUp, FileDown, CheckSquare, Coins, HandCoins, Bell, MessageSquare, Hand, Receipt,
    Briefcase, Link2, GitPullRequest, File, Globe, Building, Settings, Store
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

export const invoiceBillingToolData: ToolCategory[] = [
    {
        title: "AI Invoice Generation Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Zoho Invoice', description: 'Free online invoice generator with templates.', url: 'https://www.zoho.com/invoice/', image: 'https://picsum.photos/seed/zoho-invoice/600/400', dataAiHint: 'invoice generator', pricing: 'Freemium' },
            { name: 'FreshBooks', description: 'Invoicing software for small businesses.', url: 'https://www.freshbooks.com/invoicing', image: 'https://picsum.photos/seed/freshbooks-invoice/600/400', dataAiHint: 'small business', pricing: 'Paid' },
            { name: 'Wave', description: 'Free invoicing & accounting software.', url: 'https://www.waveapps.com/invoicing', image: 'https://picsum.photos/seed/wave-invoice/600/400', dataAiHint: 'free invoicing', pricing: 'Free' },
            { name: 'Invoice Ninja', description: 'Open-source invoicing app for freelancers & businesses.', url: 'https://www.invoiceninja.com/', image: 'https://picsum.photos/seed/invoiceninja/600/400', dataAiHint: 'open source', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Billing Automation Tools",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Chargebee', description: 'Subscription billing & revenue management.', url: 'https://www.chargebee.com/', image: 'https://picsum.photos/seed/chargebee-billing/600/400', dataAiHint: 'subscription billing', pricing: 'Paid' },
            { name: 'Zuora', description: 'The Subscription Economy platform.', url: 'https://www.zuora.com/', image: 'https://picsum.photos/seed/zuora-billing/600/400', dataAiHint: 'subscription economy', pricing: 'Paid' },
            { name: 'Bill.com', description: 'Automate accounts payable and receivable.', url: 'https://www.bill.com/', image: 'https://picsum.photos/seed/billcom-fin/600/400', dataAiHint: 'ap ar automation', pricing: 'Paid' },
            { name: 'Tipalti', description: 'Global AP and Mass Payments Automation.', url: 'https://tipalti.com/', image: 'https://picsum.photos/seed/tipalti-billing/600/400', dataAiHint: 'global payments', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Recurring Billing Tools",
        icon: <Repeat className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Stripe Billing', description: 'Recurring billing and subscription management.', url: 'https://stripe.com/billing', image: 'https://picsum.photos/seed/stripe-billing/600/400', dataAiHint: 'recurring payments', pricing: 'Paid' },
            { name: 'Recurly', description: 'Subscription management and recurring billing platform.', url: 'https://recurly.com/', image: 'https://picsum.photos/seed/recurly-recurring/600/400', dataAiHint: 'billing platform', pricing: 'Paid' },
            { name: 'Paddle', description: 'Revenue delivery platform for SaaS.', url: 'https://www.paddle.com/', image: 'https://picsum.photos/seed/paddle-billing/600/400', dataAiHint: 'saas payments', pricing: 'Paid' },
            { name: 'Recharge', description: 'Subscription payments solution for e-commerce.', url: 'https://rechargepayments.com/', image: 'https://picsum.photos/seed/recharge-sub/600/400', dataAiHint: 'ecommerce subs', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Subscription Management",
        icon: <Repeat className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Chargebee', description: 'Subscription billing & revenue management.', url: 'https://www.chargebee.com/', image: 'https://picsum.photos/seed/chargebee-sub/600/400', dataAiHint: 'revenue management', pricing: 'Paid' },
            { name: 'Recurly', description: 'Subscription management and recurring billing platform.', url: 'https://recurly.com/', image: 'https://picsum.photos/seed/recurly-sub/600/400', dataAiHint: 'subscription platform', pricing: 'Paid' },
            { name: 'ProfitWell', description: 'Subscription metrics and retention automation.', url: 'https://www.profitwell.com/', image: 'https://picsum.photos/seed/profitwell-rev/600/400', dataAiHint: 'subscription metrics', pricing: 'Free' },
            { name: 'ChartMogul', description: 'Subscription analytics and revenue reporting.', url: 'https://chartmogul.com/', image: 'https://picsum.photos/seed/chartmogul/600/400', dataAiHint: 'revenue reporting', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Payment Collection Tools",
        icon: <DollarSign className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'PayPal', description: 'Online payments system to send and receive money.', url: 'https://www.paypal.com/', image: 'https://picsum.photos/seed/paypal-collect/600/400', dataAiHint: 'online payments', pricing: 'Freemium' },
            { name: 'Stripe', description: 'Online payment processing for internet businesses.', url: 'https://stripe.com/', image: 'https://picsum.photos/seed/stripe-collect/600/400', dataAiHint: 'payment processing', pricing: 'Paid' },
            { name: 'GoCardless', description: 'Collect recurring payments via direct debit.', url: 'https://gocardless.com/', image: 'https://picsum.photos/seed/gocardless-collect/600/400', dataAiHint: 'direct debit', pricing: 'Paid' },
            { name: 'Chaser', description: 'Accounts receivable automation software.', url: 'https://www.chaserhq.com/', image: 'https://picsum.photos/seed/chaser-collect/600/400', dataAiHint: 'accounts receivable', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Expense Tracking Tools",
        icon: <Wallet className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Expensify', description: 'Expense reports done in a snap with SmartScan OCR.', url: 'https://www.expensify.com/', image: 'https://picsum.photos/seed/expensify-fin/600/400', dataAiHint: 'expense reports', pricing: 'Freemium' },
            { name: 'Rydoo', description: 'Expense management with AI-powered receipt scanning.', url: 'https://www.rydoo.com/', image: 'https://picsum.photos/seed/rydoo-fin/600/400', dataAiHint: 'expense management', pricing: 'Paid' },
            { name: 'Divvy', description: 'Now Bill. Spend and expense management.', url: 'https://www.bill.com/divvy', image: 'https://picsum.photos/seed/divvy/600/400', dataAiHint: 'spend management', pricing: 'Free' },
            { name: 'Pleo', description: 'Smart company cards that automate expense reports.', url: 'https://www.pleo.io/', image: 'https://picsum.photos/seed/pleo/600/400', dataAiHint: 'company cards', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Receipt Scanning Tools",
        icon: <ScanLine className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Dext', description: 'Automated accounting for accountants and bookkeepers.', url: 'https://dext.com/', image: 'https://picsum.photos/seed/dext/600/400', dataAiHint: 'bookkeeping automation', pricing: 'Paid' },
            { name: 'Veryfi', description: 'AI-powered data extraction from receipts and invoices.', url: 'https://www.veryfi.com/', image: 'https://picsum.photos/seed/veryfi/600/400', dataAiHint: 'data extraction', pricing: 'Paid' },
            { name: 'Shoeboxed', description: 'Receipt and invoice scanning service.', url: 'https://www.shoeboxed.com/', image: 'https://picsum.photos/seed/shoeboxed/600/400', dataAiHint: 'scanning service', pricing: 'Paid' },
            { name: 'Microsoft Lens', description: 'PDF scanner app with OCR.', url: 'https://www.microsoft.com/en-us/microsoft-365/lens', image: 'https://picsum.photos/seed/mslens/600/400', dataAiHint: 'pdf scanner', pricing: 'Free' },
        ]
    },
    {
        title: "AI Tax Calculation Tools",
        icon: <Calculator className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'TurboTax', description: 'Tax software with AI-powered guidance and review.', url: 'https://turbotax.intuit.com/', image: 'https://picsum.photos/seed/turbotax/600/400', dataAiHint: 'tax software', pricing: 'Paid' },
            { name: 'H&R Block', description: 'Tax preparation services with AI assistance.', url: 'https://www.hrblock.com/', image: 'https://picsum.photos/seed/hrblock-tax/600/400', dataAiHint: 'tax preparation', pricing: 'Paid' },
            { name: 'Avalara', description: 'Tax compliance done right with automation.', url: 'https://www.avalara.com/', image: 'https://picsum.photos/seed/avalara-tax/600/400', dataAiHint: 'tax compliance', pricing: 'Paid' },
            { name: 'CoinTracker', description: 'Cryptocurrency tax calculator.', url: 'https://www.cointracker.io/', image: 'https://picsum.photos/seed/cointracker-tax/600/400', dataAiHint: 'crypto tax', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Accounts Payable Automation",
        icon: <FileUp className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Stampli', description: 'The most powerful AP Automation for accounts payable.', url: 'https://www.stampli.com/', image: 'https://picsum.photos/seed/stampli-ap/600/400', dataAiHint: 'ap automation', pricing: 'Paid' },
            { name: 'Airbase', description: 'Spend management platform with AP automation.', url: 'https://www.airbase.com/', image: 'https://picsum.photos/seed/airbase-ap/600/400', dataAiHint: 'spend management', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Accounts Receivable Automation",
        icon: <FileDown className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'HighRadius', description: 'AI-powered order to cash and treasury management.', url: 'https://www.highradius.com/', image: 'https://picsum.photos/seed/highradius-ar/600/400', dataAiHint: 'order to cash', pricing: 'Paid' },
            { name: 'Chaser', description: 'Accounts receivable automation and credit control.', url: 'https://www.chaserhq.com/', image: 'https://picsum.photos/seed/chaser-ar/600/400', dataAiHint: 'credit control', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Dunning & Collections",
        icon: <Bell className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Chargebee', description: 'Subscription billing with smart dunning management.', url: 'https://www.chargebee.com/', image: 'https://picsum.photos/seed/chargebee-dunning/600/400', dataAiHint: 'smart dunning', pricing: 'Paid' },
            { name: 'Stripe Billing', description: 'Automate collections with smart retries.', url: 'https://stripe.com/billing', image: 'https://picsum.photos/seed/stripe-dunning/600/400', dataAiHint: 'smart retries', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Quoting & CPQ Tools",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Salesforce CPQ', description: 'Configure, Price, Quote software.', url: 'https://www.salesforce.com/products/sales-cloud/cpq-software/', image: 'https://picsum.photos/seed/salesforce-cpq/600/400', dataAiHint: 'cpq software', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Revenue Recognition",
        icon: <CheckSquare className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Zuora', description: 'Revenue recognition for subscription businesses.', url: 'https://www.zuora.com/', image: 'https://picsum.photos/seed/zuora-revrec/600/400', dataAiHint: 'subscription revenue', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Financial Closing Management",
        icon: <Book className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'BlackLine', description: 'Financial close and accounting automation.', url: 'https://www.blackline.com/', image: 'https://picsum.photos/seed/blackline/600/400', dataAiHint: 'accounting automation', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Cash & Treasury Management",
        icon: <Coins className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'HighRadius', description: 'AI-powered treasury management.', url: 'https://www.highradius.com/', image: 'https://picsum.photos/seed/highradius-treasury/600/400', dataAiHint: 'treasury management', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Financial Planning & Analysis (FP&A)",
        icon: <HandCoins className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Anaplan', description: 'Platform for connected planning.', url: 'https://www.anaplan.com/', image: 'https://picsum.photos/seed/anaplan-fpa/600/400', dataAiHint: 'connected planning', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Spend Management Tools",
        icon: <Receipt className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Ramp', description: 'Finance automation platform for modern businesses.', url: 'https://ramp.com/', image: 'https://picsum.photos/seed/ramp-spend/600/400', dataAiHint: 'finance automation', pricing: 'Free' },
        ]
    },
    {
        title: "AI Contract & Renewal Management",
        icon: <Briefcase className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'PandaDoc', description: 'Create, send, and e-sign contracts and proposals.', url: 'https://www.pandadoc.com/', image: 'https://picsum.photos/seed/pandadoc-contract/600/400', dataAiHint: 'contract management', pricing: 'Paid' },
        ]
    }
];
