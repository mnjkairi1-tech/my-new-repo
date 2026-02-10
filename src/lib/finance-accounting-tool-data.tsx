
'use client';

import React from 'react';
import { 
    BookUser, Book, Landmark, Wallet, FileText, Users, Calculator, TrendingUp, Shield, LineChart,
    BarChart, Handshake, Building, Box, UserCog, Bot, BarChart3, TestTube, CheckCircle,
    CreditCard, Calendar, Mail, FilePenLine, RefreshCw, Zap, Palette, Smartphone, Clock, ScanLine,
    Coins, HandCoins, Bell, MessageSquare, Hand, Receipt,
    Briefcase, Link2, GitPullRequest, File, Globe, Settings, Store
} from 'lucide-react';
import { aiAccountingSoftwareTools } from './finance-accounting-data/ai-accounting-software';
import { aiBookkeepingTools } from './finance-accounting-data/ai-bookkeeping-tools';
import { aiFinancialManagementTools } from './finance-accounting-data/ai-financial-management-tools';
import { aiExpenseTrackingTools } from './finance-accounting-data/ai-expense-tracking-tools';
import { aiInvoiceBillingTools } from './finance-accounting-data/ai-invoice-billing-tools';
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

export const financeAccountingToolData: ToolCategory[] = [
    {
        title: "AI Accounting Software",
        icon: <BookUser className="w-5 h-5 text-primary"/>,
        tools: aiAccountingSoftwareTools
    },
    {
        title: "AI Bookkeeping Tools",
        icon: <Book className="w-5 h-5 text-primary"/>,
        tools: aiBookkeepingTools
    },
    {
        title: "AI Financial Management Tools",
        icon: <Landmark className="w-5 h-5 text-primary"/>,
        tools: aiFinancialManagementTools
    },
    {
        title: "AI Expense Tracking Tools",
        icon: <Wallet className="w-5 h-5 text-primary"/>,
        tools: aiExpenseTrackingTools
    },
    {
        title: "AI Invoice & Billing Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: aiInvoiceBillingTools
    },
    {
        title: "AI Payroll Management Tools",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: aiPayrollManagementTools
    },
    {
        title: "AI Tax Calculation & Filing Tools",
        icon: <Calculator className="w-5 h-5 text-primary"/>,
        tools: aiTaxCalculationFilingTools
    },
    {
        title: "AI GST / VAT Compliance Tools",
        icon: <Calculator className="w-5 h-5 text-primary"/>,
        tools: aiGstVatComplianceTools
    },
    {
        title: "AI Financial Reporting Tools",
        icon: <BarChart3 className="w-5 h-5 text-primary"/>,
        tools: aiFinancialReportingTools
    },
    {
        title: "AI Audit & Compliance Tools",
        icon: <Shield className="w-5 h-5 text-primary"/>,
        tools: aiAuditComplianceTools
    },
    {
        title: "AI Budgeting & Planning Tools",
        icon: <Calculator className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Anaplan', description: 'Platform for connected planning.', url: 'https://www.anaplan.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=anaplan.com', dataAiHint: 'connected planning', pricing: 'Paid' },
             { name: 'Cube', description: 'FP&A platform for modern finance teams.', url: 'https://www.cubesoftware.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=cubesoftware.com', dataAiHint: 'fp&a platform', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Cash Flow Management",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Revenue & Profit Analysis",
        icon: <LineChart className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Financial Forecasting Tools",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Cost Optimization Tools",
        icon: <Wallet className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Investment Analysis Tools",
        icon: <LineChart className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Portfolio Management Tools",
        icon: <Book className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Risk Management Tools",
        icon: <Shield className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Fraud Detection Tools",
        icon: <Shield className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Credit Scoring Tools",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Banking & Reconciliation Tools",
        icon: <Landmark className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Payment Processing Tools",
        icon: <Wallet className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Multi-Currency Finance Tools",
        icon: <Wallet className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Treasury Management Tools",
        icon: <Building className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Financial Dashboards",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Startup Finance Tools",
        icon: <Box className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Freelancer Finance Tools",
        icon: <UserCog className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI SME Accounting Tools",
        icon: <BookUser className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Enterprise Finance Tools",
        icon: <Building className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Financial Insights & Analytics",
        icon: <BarChart3 className="w-5 h-5 text-primary"/>,
        tools: [],
    }
];
