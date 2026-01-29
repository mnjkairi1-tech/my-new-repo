
'use client';

import React from 'react';
import { 
    Cpu, Code, Bug, GitBranch, RefreshCw, Zap, Server, CloudCog, Database, TestTube,
    Shield, KeyRound, FileText, Search, GitCommit, LineChart, Code2, Link2, Braces, BrainCircuit,
    Layers, Puzzle, GanttChartSquare, Route, MessageSquare, BookCopy, Users, Network, Lock,
    Terminal, SlidersHorizontal, TestTube2, FileUp
} from 'lucide-react';
import type { Tool } from '@/lib/types';

import { aiCodeGeneratorsTools } from './coding-tools-data/ai-code-generators';
import { aiCodeCompletionTools } from './coding-tools-data/ai-code-completion-tools';
import { aiDebuggingTools } from './coding-tools-data/ai-debugging-tools';
import { aiCodeReviewTools } from './coding-tools-data/ai-code-review-tools';
import { aiRefactoringTools } from './coding-tools-data/ai-refactoring-tools';
import { aiPairProgrammingAssistantsTools } from './coding-tools-data/ai-pair-programming-assistants';
import { aiTestCaseGenerationTools } from './coding-tools-data/ai-test-case-generation';
import { automatedTestingAiTools } from './coding-tools-data/automated-testing-ai';
import { aiBugTrackingFixingTools } from './coding-tools-data/ai-bug-tracking-fixing';
import { staticCodeAnalysisAiTools } from './coding-tools-data/static-code-analysis-ai';
import { devopsAiTools } from './coding-tools-data/devops-ai-tools';
import { cicdAutomationAiTools } from './coding-tools-data/cicd-automation-ai';
import { cloudOptimizationAiTools } from './coding-tools-data/cloud-optimization-ai';
import { infrastructureAsCodeAiTools } from './coding-tools-data/infrastructure-as-code-ai';
import { aiMonitoringObservabilityTools } from './coding-tools-data/ai-monitoring-observability';
import { apiDevelopmentAiTools } from './coding-tools-data/api-development-ai';
import { backendDevelopmentAiTools } from './coding-tools-data/backend-development-ai';
import { frontendDevelopmentAiTools } from './coding-tools-data/frontend-development-ai';
import { fullStackAiDevelopmentTools } from './coding-tools-data/full-stack-ai-development-tools';
import { lowCodeNoCodeAiPlatformsTools } from './coding-tools-data/low-code-no-code-ai-platforms';
import { aiDatabaseManagementTools } from './coding-tools-data/ai-database-management-tools';
import { queryOptimizationAiTools } from './coding-tools-data/query-optimization-ai';
import { aiDataEngineeringTools } from './coding-tools-data/ai-data-engineering-tools';
import { aiSecurityVulnerabilityScannersTools } from './coding-tools-data/ai-security-vulnerability-scanners';
import { aiAuthenticationAccessControlTools } from './coding-tools-data/ai-authentication-access-control';
import { aiDocumentationGeneratorsTools } from './coding-tools-data/ai-documentation-generators';
import { aiCodeSearchTools } from './coding-tools-data/ai-code-search-tools';
import { versionControlAiTools } from './coding-tools-data/version-control-ai';
import { aiPerformanceOptimizationTools } from './coding-tools-data/ai-performance-optimization-tools';
import { aiSoftwareArchitectureTools } from './coding-tools-data/ai-software-architecture-tools';

export type ToolCategory = {
    title: string;
    icon: React.ReactNode;
    tools: Tool[];
};

export const codingToolData: ToolCategory[] = [
    { title: "AI Code Generators", icon: <Cpu className="w-5 h-5 text-primary"/>, tools: aiCodeGeneratorsTools },
    { title: "AI Code Completion Tools", icon: <Code className="w-5 h-5 text-primary"/>, tools: aiCodeCompletionTools },
    { title: "AI Debugging Tools", icon: <Bug className="w-5 h-5 text-primary"/>, tools: aiDebuggingTools },
    { title: "AI Code Review Tools", icon: <GitBranch className="w-5 h-5 text-primary"/>, tools: aiCodeReviewTools },
    { title: "AI Refactoring Tools", icon: <RefreshCw className="w-5 h-5 text-primary"/>, tools: aiRefactoringTools },
    { title: "AI Pair Programming Assistants", icon: <Users className="w-5 h-5 text-primary"/>, tools: aiPairProgrammingAssistantsTools },
    { title: "AI Test Case Generation", icon: <TestTube className="w-5 h-5 text-primary"/>, tools: aiTestCaseGenerationTools },
    { title: "Automated Testing AI", icon: <Zap className="w-5 h-5 text-primary"/>, tools: automatedTestingAiTools },
    { title: "AI Bug Tracking & Fixing", icon: <Bug className="w-5 h-5 text-primary"/>, tools: aiBugTrackingFixingTools },
    { title: "Static Code Analysis AI", icon: <Search className="w-5 h-5 text-primary"/>, tools: staticCodeAnalysisAiTools },
    { title: "DevOps AI Tools", icon: <CloudCog className="w-5 h-5 text-primary"/>, tools: devopsAiTools },
    { title: "CI/CD Automation AI", icon: <Zap className="w-5 h-5 text-primary"/>, tools: cicdAutomationAiTools },
    { title: "Cloud Optimization AI", icon: <CloudCog className="w-5 h-5 text-primary"/>, tools: cloudOptimizationAiTools },
    { title: "Infrastructure as Code (IaC) AI", icon: <Server className="w-5 h-5 text-primary"/>, tools: infrastructureAsCodeAiTools },
    { title: "AI Monitoring & Observability", icon: <LineChart className="w-5 h-5 text-primary"/>, tools: aiMonitoringObservabilityTools },
    { title: "API Development AI", icon: <Link2 className="w-5 h-5 text-primary"/>, tools: apiDevelopmentAiTools },
    { title: "Backend Development AI", icon: <Server className="w-5 h-5 text-primary"/>, tools: backendDevelopmentAiTools },
    { title: "Frontend Development AI", icon: <Code2 className="w-5 h-5 text-primary"/>, tools: frontendDevelopmentAiTools },
    { title: "Full-Stack AI Development Tools", icon: <Layers className="w-5 h-5 text-primary"/>, tools: fullStackAiDevelopmentTools },
    { title: "Low-Code / No-Code AI Platforms", icon: <Puzzle className="w-5 h-5 text-primary"/>, tools: lowCodeNoCodeAiPlatformsTools },
    { title: "AI Database Management Tools", icon: <Database className="w-5 h-5 text-primary"/>, tools: aiDatabaseManagementTools },
    { title: "Query Optimization AI", icon: <Zap className="w-5 h-5 text-primary"/>, tools: queryOptimizationAiTools },
    { title: "AI Data Engineering Tools", icon: <GanttChartSquare className="w-5 h-5 text-primary"/>, tools: aiDataEngineeringTools },
    { title: "AI Security & Vulnerability Scanners", icon: <Shield className="w-5 h-5 text-primary"/>, tools: aiSecurityVulnerabilityScannersTools },
    { title: "AI Authentication & Access Control", icon: <Lock className="w-5 h-5 text-primary"/>, tools: aiAuthenticationAccessControlTools },
    { title: "AI Documentation Generators", icon: <FileText className="w-5 h-5 text-primary"/>, tools: aiDocumentationGeneratorsTools },
    { title: "AI Code Search Tools", icon: <Search className="w-5 h-5 text-primary"/>, tools: aiCodeSearchTools },
    { title: "Version Control AI", icon: <GitBranch className="w-5 h-5 text-primary"/>, tools: versionControlAiTools },
    { title: "AI Performance Optimization Tools", icon: <Zap className="w-5 h-5 text-primary"/>, tools: aiPerformanceOptimizationTools },
    { title: "AI Software Architecture Tools", icon: <Network className="w-5 h-5 text-primary"/>, tools: aiSoftwareArchitectureTools },
];
