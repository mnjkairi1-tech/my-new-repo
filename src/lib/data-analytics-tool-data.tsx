
'use client';

import React from 'react';
import { 
    Cpu, BarChart3, LineChart, BrainCircuit, Users, Database, PieChart, Search, AlertTriangle,
    Zap, SlidersHorizontal, Settings, TrendingUp, UserCheck, Eye, Megaphone, DollarSign,
    ListChecks, Shield, Server, Magnet, Bot, FileQuestion, FileCheck, Cloud, Wifi, ShieldCheck, LayoutDashboard
} from 'lucide-react';
import type { Tool } from '@/lib/types';
import { aiDataAnalyticsPlatformsTools } from './data-analytics-data/ai-data-analytics-platforms';
import { aiBusinessIntelligenceTools } from './data-analytics-data/ai-business-intelligence-tools';
import { aiDataVisualizationTools } from './data-analytics-data/ai-data-visualization-tools';
import { aiPredictiveAnalyticsTools } from './data-analytics-data/ai-predictive-analytics-tools';
import { aiDescriptiveAnalyticsTools } from './data-analytics-data/ai-descriptive-analytics-tools';
import { aiDiagnosticAnalyticsTools } from './data-analytics-data/ai-diagnostic-analytics-tools';
import { aiPrescriptiveAnalyticsTools } from './data-analytics-data/ai-prescriptive-analytics-tools';
import { aiRealTimeAnalyticsTools } from './data-analytics-data/ai-real-time-analytics-tools';
import { aiBigDataAnalyticsTools } from './data-analytics-data/ai-big-data-analytics-tools';
import { aiSelfServiceAnalyticsTools } from './data-analytics-data/ai-self-service-analytics';
import { aiReportingDashboardTools } from './data-analytics-data/ai-reporting-dashboard-tools';
import { aiKpiMetricsTrackingTools } from './data-analytics-data/ai-kpi-metrics-tracking-tools';
import { aiForecastingTrendAnalysisTools } from './data-analytics-data/ai-forecasting-trend-analysis';
import { aiCustomerAnalyticsTools } from './data-analytics-data/ai-customer-analytics-tools';
import { aiUserBehaviorAnalyticsTools } from './data-analytics-data/ai-user-behavior-analytics';
import { aiMarketingAnalyticsTools } from './data-analytics-data/ai-marketing-analytics-tools';
import { aiSalesAnalyticsTools } from './data-analytics-data/ai-sales-analytics-tools';
import { aiFinancialAnalyticsTools } from './data-analytics-data/ai-financial-analytics-tools';
import { aiOperationalAnalyticsTools } from './data-analytics-data/ai-operational-analytics-tools';
import { aiRiskFraudAnalyticsTools } from './data-analytics-data/ai-risk-fraud-analytics';
import { aiDataMiningTools } from './data-analytics-data/ai-data-mining-tools';
import { aiAnomalyDetectionTools } from './data-analytics-data/ai-anomaly-detection-tools';
import { aiPatternRecognitionTools } from './data-analytics-data/ai-pattern-recognition-tools';
import { aiNaturalLanguageQueryTools } from './data-analytics-data/ai-natural-language-query-tools';
import { aiAutomatedInsightsTools } from './data-analytics-data/ai-automated-insights-tools';
import { aiDataPreparationCleaningTools } from './data-analytics-data/ai-data-preparation-cleaning';
import { aiEtlDataIntegrationTools } from './data-analytics-data/ai-etl-data-integration-tools';
import { aiDataQualityManagementTools } from './data-analytics-data/ai-data-quality-management';
import { aiAnalyticsForIoTDataTools } from './data-analytics-data/ai-analytics-for-iot-data';
import { aiAnalyticsGovernanceTools } from './data-analytics-data/ai-analytics-governance-tools';

export type ToolCategory = {
    title: string;
    icon: React.ReactNode;
    tools: Tool[];
};

export const dataAnalyticsToolData: ToolCategory[] = [
    {
        title: "AI Data Analytics Platforms",
        icon: <Cpu className="w-5 h-5 text-primary"/>,
        tools: aiDataAnalyticsPlatformsTools
    },
    {
        title: "AI Business Intelligence Tools",
        icon: <BarChart3 className="w-5 h-5 text-primary"/>,
        tools: aiBusinessIntelligenceTools
    },
    {
        title: "AI Data Visualization Tools",
        icon: <PieChart className="w-5 h-5 text-primary"/>,
        tools: aiDataVisualizationTools
    },
    {
        title: "AI Predictive Analytics Tools",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: aiPredictiveAnalyticsTools
    },
    {
        title: "AI Descriptive Analytics Tools",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: aiDescriptiveAnalyticsTools
    },
    {
        title: "AI Diagnostic Analytics Tools",
        icon: <AlertTriangle className="w-5 h-5 text-primary"/>,
        tools: aiDiagnosticAnalyticsTools
    },
    {
        title: "AI Prescriptive Analytics Tools",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: aiPrescriptiveAnalyticsTools
    },
    {
        title: "AI Real-Time Analytics Tools",
        icon: <SlidersHorizontal className="w-5 h-5 text-primary"/>,
        tools: aiRealTimeAnalyticsTools
    },
    {
        title: "AI Big Data Analytics Tools",
        icon: <Database className="w-5 h-5 text-primary"/>,
        tools: aiBigDataAnalyticsTools
    },
    {
        title: "AI Self-Service Analytics",
        icon: <Settings className="w-5 h-5 text-primary"/>,
        tools: aiSelfServiceAnalyticsTools
    },
    {
        title: "AI Reporting & Dashboard Tools",
        icon: <LayoutDashboard className="w-5 h-5 text-primary"/>,
        tools: aiReportingDashboardTools
    },
    {
        title: "AI KPI & Metrics Tracking Tools",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: aiKpiMetricsTrackingTools
    },
    {
        title: "AI Forecasting & Trend Analysis",
        icon: <LineChart className="w-5 h-5 text-primary"/>,
        tools: aiForecastingTrendAnalysisTools
    },
    {
        title: "AI Customer Analytics Tools",
        icon: <UserCheck className="w-5 h-5 text-primary"/>,
        tools: aiCustomerAnalyticsTools
    },
    {
        title: "AI User Behavior Analytics",
        icon: <Eye className="w-5 h-5 text-primary"/>,
        tools: aiUserBehaviorAnalyticsTools
    },
    {
        title: "AI Marketing Analytics Tools",
        icon: <Megaphone className="w-5 h-5 text-primary"/>,
        tools: aiMarketingAnalyticsTools
    },
    {
        title: "AI Sales Analytics Tools",
        icon: <DollarSign className="w-5 h-5 text-primary"/>,
        tools: aiSalesAnalyticsTools
    },
    {
        title: "AI Financial Analytics Tools",
        icon: <DollarSign className="w-5 h-5 text-primary"/>,
        tools: aiFinancialAnalyticsTools
    },
    {
        title: "AI Operational Analytics Tools",
        icon: <ListChecks className="w-5 h-5 text-primary"/>,
        tools: aiOperationalAnalyticsTools
    },
    {
        title: "AI Risk & Fraud Analytics",
        icon: <Shield className="w-5 h-5 text-primary"/>,
        tools: aiRiskFraudAnalyticsTools
    },
    {
        title: "AI Data Mining Tools",
        icon: <Server className="w-5 h-5 text-primary"/>,
        tools: aiDataMiningTools
    },
    {
        title: "AI Anomaly Detection Tools",
        icon: <Magnet className="w-5 h-5 text-primary"/>,
        tools: aiAnomalyDetectionTools
    },
    {
        title: "AI Pattern Recognition Tools",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: aiPatternRecognitionTools
    },
    {
        title: "AI Natural Language Query Tools",
        icon: <FileQuestion className="w-5 h-5 text-primary"/>,
        tools: aiNaturalLanguageQueryTools
    },
    {
        title: "AI Automated Insights Tools",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: aiAutomatedInsightsTools
    },
    {
        title: "AI Data Preparation & Cleaning",
        icon: <FileCheck className="w-5 h-5 text-primary"/>,
        tools: aiDataPreparationCleaningTools
    },
    {
        title: "AI ETL & Data Integration Tools",
        icon: <Cloud className="w-5 h-5 text-primary"/>,
        tools: aiEtlDataIntegrationTools
    },
    {
        title: "AI Data Quality Management",
        icon: <FileCheck className="w-5 h-5 text-primary"/>,
        tools: aiDataQualityManagementTools
    },
    {
        title: "AI Analytics for IoT Data",
        icon: <Wifi className="w-5 h-5 text-primary"/>,
        tools: aiAnalyticsForIoTDataTools
    },
    {
        title: "AI Analytics Governance Tools",
        icon: <ShieldCheck className="w-5 h-5 text-primary"/>,
        tools: aiAnalyticsGovernanceTools
    }
];
