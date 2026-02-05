'use client';

import React from 'react';
import { 
    FileText, Bot, Repeat, DollarSign, Clock, ScanLine, Calculator, Wallet, CreditCard, Calendar,
    Mail, Users, Book, FilePenLine, RefreshCw, Zap, BarChart, Shield, Palette, Smartphone, GitBranch,
    FileLock2, FileUp, FileDown, CheckSquare, Coins, HandCoins, Bell, MessageSquare, Hand, Receipt,
    Briefcase, Link2, GitPullRequest, File, Globe, Building, Settings, Store
} from 'lucide-react';
import { aiInvoiceBillingTools } from './finance-accounting-data/ai-invoice-billing-tools';
import { aiBookkeepingTools } from './finance-accounting-data/ai-bookkeeping-tools';
import { aiFinancialManagementTools } from './finance-accounting-data/ai-financial-management-tools';
import { aiExpenseTrackingTools } from './finance-accounting-data/ai-expense-tracking-tools';
import { aiPayrollManagementTools } from './finance-accounting-data/ai-payroll-management-tools';
import { aiTaxCalculationFilingTools } from './finance-accounting-data/ai-tax-calculation-filing-tools';
import { aiGstVatComplianceTools } from './finance-accounting-data/ai-gst-vat-compliance-tools';
import { aiFinancialReportingTools } from './finance-accounting-data/ai-financial-reporting-tools';
import { aiAuditComplianceTools } from './finance-accounting-data/ai-audit-compliance-tools';

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
        tools: aiInvoiceBillingTools
    },
    {
        title: "AI Billing Automation Tools",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Chargebee', description: 'Subscription billing & revenue management.', url: 'https://www.chargebee.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=chargebee.com', dataAiHint: 'subscription billing', pricing: 'Paid' },
            { name: 'Zuora', description: 'The Subscription Economy platform.', url: 'https://www.zuora.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=zuora.com', dataAiHint: 'subscription economy', pricing: 'Paid' },
            { name: 'Bill.com', description: 'Automate accounts payable and receivable.', url: 'https://www.bill.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=bill.com', dataAiHint: 'ap ar automation', pricing: 'Paid' },
            { name: 'Tipalti', description: 'Global AP and Mass Payments Automation.', url: 'https://tipalti.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tipalti.com', dataAiHint: 'global payments', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Recurring Billing Tools",
        icon: <Repeat className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Stripe Billing', description: 'Recurring billing and subscription management.', url: 'https://stripe.com/billing', image: 'https://www.google.com/s2/favicons?sz=128&domain=stripe.com', dataAiHint: 'recurring payments', pricing: 'Paid' },
            { name: 'Recurly', description: 'Subscription management and recurring billing platform.', url: 'https://recurly.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=recurly.com', dataAiHint: 'billing platform', pricing: 'Paid' },
            { name: 'Paddle', description: 'Revenue delivery platform for SaaS.', url: 'https://www.paddle.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=paddle.com', dataAiHint: 'saas payments', pricing: 'Paid' },
            { name: 'Recharge', description: 'Subscription payments solution for e-commerce.', url: 'https://rechargepayments.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=rechargepayments.com', dataAiHint: 'ecommerce subs', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Subscription Management",
        icon: <Repeat className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Chargebee', description: 'Subscription billing & revenue management.', url: 'https://www.chargebee.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=chargebee.com', dataAiHint: 'revenue management', pricing: 'Paid' },
            { name: 'Recurly', description: 'Subscription management and recurring billing platform.', url: 'https://recurly.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=recurly.com', dataAiHint: 'subscription platform', pricing: 'Paid' },
            { name: 'ProfitWell', description: 'Subscription metrics and retention automation.', url: 'https://www.profitwell.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=profitwell.com', dataAiHint: 'subscription metrics', pricing: 'Free' },
            { name: 'ChartMogul', description: 'Subscription analytics and revenue reporting.', url: 'https://chartmogul.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=chartmogul.com', dataAiHint: 'revenue reporting', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Payment Collection Tools",
        icon: <DollarSign className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'PayPal', description: 'Online payments system to send and receive money.', url: 'https://www.paypal.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=paypal.com', dataAiHint: 'online payments', pricing: 'Freemium' },
            { name: 'Stripe', description: 'Online payment processing for internet businesses.', url: 'https://stripe.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=stripe.com', dataAiHint: 'payment processing', pricing: 'Paid' },
            { name: 'GoCardless', description: 'Collect recurring payments via direct debit.', url: 'https://gocardless.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=gocardless.com', dataAiHint: 'direct debit', pricing: 'Paid' },
            { name: 'Chaser', description: 'Accounts receivable automation software.', url: 'https://www.chaserhq.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=chaserhq.com', dataAiHint: 'accounts receivable', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Expense Tracking Tools",
        icon: <Wallet className="w-5 h-5 text-primary"/>,
        tools: aiExpenseTrackingTools
    },
    {
        title: "AI Receipt Scanning Tools",
        icon: <ScanLine className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Dext', description: 'Automated accounting for accountants and bookkeepers.', url: 'https://dext.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=dext.com', dataAiHint: 'bookkeeping automation', pricing: 'Paid' },
            { name: 'Veryfi', description: 'AI-powered data extraction from receipts and invoices.', url: 'https://www.veryfi.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=veryfi.com', dataAiHint: 'data extraction', pricing: 'Paid' },
            { name: 'Shoeboxed', description: 'Receipt and invoice scanning service.', url: 'https://www.shoeboxed.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=shoeboxed.com', dataAiHint: 'scanning service', pricing: 'Paid' },
            { name: 'Microsoft Lens', description: 'PDF scanner app with OCR.', url: 'https://www.microsoft.com/en-us/microsoft-365/lens', image: 'https://www.google.com/s2/favicons?sz=128&domain=microsoft.com', dataAiHint: 'pdf scanner', pricing: 'Free' },
        ]
    },
    {
        title: "AI Tax Calculation Tools",
        icon: <Calculator className="w-5 h-5 text-primary"/>,
        tools: aiTaxCalculationFilingTools
    },
    {
        title: "AI Accounts Payable Automation",
        icon: <FileUp className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Stampli', description: 'The most powerful AP Automation for accounts payable.', url: 'https://www.stampli.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=stampli.com', dataAiHint: 'ap automation', pricing: 'Paid' },
            { name: 'Airbase', description: 'Spend management platform with AP automation.', url: 'https://www.airbase.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=airbase.com', dataAiHint: 'spend management', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Accounts Receivable Automation",
        icon: <FileDown className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'HighRadius', description: 'AI-powered order to cash and treasury management.', url: 'https://www.highradius.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=highradius.com', dataAiHint: 'order to cash', pricing: 'Paid' },
            { name: 'Chaser', description: 'Accounts receivable automation and credit control.', url: 'https://www.chaserhq.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=chaserhq.com', dataAiHint: 'credit control', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Dunning & Collections",
        icon: <Bell className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Chargebee', description: 'Subscription billing with smart dunning management.', url: 'https://www.chargebee.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=chargebee.com', dataAiHint: 'smart dunning', pricing: 'Paid' },
            { name: 'Stripe Billing', description: 'Automate collections with smart retries.', url: 'https://stripe.com/billing', image: 'https://www.google.com/s2/favicons?sz=128&domain=stripe.com', dataAiHint: 'smart retries', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Quoting & CPQ Tools",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Salesforce CPQ', description: 'Configure, Price, Quote software.', url: 'https://www.salesforce.com/products/sales-cloud/cpq-software/', image: 'https://www.google.com/s2/favicons?sz=128&domain=salesforce.com', dataAiHint: 'cpq software', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Revenue Recognition",
        icon: <CheckSquare className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Zuora', description: 'Revenue recognition for subscription businesses.', url: 'https://www.zuora.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=zuora.com', dataAiHint: 'subscription revenue', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Financial Closing Management",
        icon: <Book className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'BlackLine', description: 'Financial close and accounting automation.', url: 'https://www.blackline.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=blackline.com', dataAiHint: 'accounting automation', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Cash & Treasury Management",
        icon: <Coins className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'HighRadius', description: 'AI-powered treasury management.', url: 'https://www.highradius.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=highradius.com', dataAiHint: 'treasury management', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Financial Planning & Analysis (FP&A)",
        icon: <HandCoins className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Anaplan', description: 'Platform for connected planning.', url: 'https://www.anaplan.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=anaplan.com', dataAiHint: 'connected planning', pricing: 'Paid' },
             { name: 'Cube', description: 'FP&A platform for modern finance teams.', url: 'https://www.cubesoftware.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=cubesoftware.com', dataAiHint: 'fp&a platform', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Spend Management Tools",
        icon: <Receipt className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Ramp', description: 'Finance automation platform for modern businesses.', url: 'https://ramp.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ramp.com', dataAiHint: 'finance automation', pricing: 'Free' },
        ]
    },
    {
        title: "AI Contract & Renewal Management",
        icon: <Briefcase className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'PandaDoc', description: 'Create, send, and e-sign contracts and proposals.', url: 'https://www.pandadoc.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pandadoc.com', dataAiHint: 'contract management', pricing: 'Paid' },
        ]
    }
];
