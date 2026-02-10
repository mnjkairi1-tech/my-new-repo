
'use client';

import React from 'react';
import { 
    Users, UserPlus, Search, Bot, Briefcase, FileText, CheckSquare, TrendingUp, BarChart,
    Heart, Star, BookOpen, GraduationCap, Gift, Calendar, Mail, FileSignature, MonitorPlay,
    Cpu, Layers, Puzzle, Code, GitBranch, Settings, Workflow, TestTube, CheckCircle, UploadCloud, Rocket, CreditCard
} from 'lucide-react';
import type { Tool } from '@/lib/types';
import { applicantTrackingSystemsTools } from './hr-recruitment-tools-data/applicant-tracking-systems';
import { aiSourcingTalentDiscoveryTools } from './hr-recruitment-tools-data/ai-sourcing-talent-discovery';
import { candidateAssessmentScreeningTools } from './hr-recruitment-tools-data/candidate-assessment-screening';
import { videoInterviewingTools } from './hr-recruitment-tools-data/video-interviewing';
import { employeeOnboardingTools } from './hr-recruitment-tools-data/employee-onboarding';
import { performanceManagementTools } from './hr-recruitment-tools-data/performance-management';
import { employeeEngagementTools } from './hr-recruitment-tools-data/employee-engagement';
import { hrisTools } from './hr-recruitment-tools-data/hris';
import { payrollBenefitsTools } from './hr-recruitment-tools-data/payroll-benefits';
import { learningDevelopmentTools } from './hr-recruitment-tools-data/learning-development';
import { recruitingChatbotsTools } from './hr-recruitment-tools-data/recruiting-chatbots';
import { jobDescriptionWritingTools } from './hr-recruitment-tools-data/job-description-writing';

export type ToolCategory = {
    title: string;
    icon: React.ReactNode;
    tools: Tool[];
};

export const hrRecruitmentToolData: ToolCategory[] = [
    {
        title: "Talent Acquisition & ATS",
        icon: <UserPlus className="w-5 h-5 text-primary"/>,
        tools: applicantTrackingSystemsTools
    },
    {
        title: "AI Sourcing & Talent Discovery",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: aiSourcingTalentDiscoveryTools
    },
    {
        title: "Candidate Assessment & Screening",
        icon: <TestTube className="w-5 h-5 text-primary"/>,
        tools: candidateAssessmentScreeningTools
    },
    {
        title: "Video Interviewing",
        icon: <MonitorPlay className="w-5 h-5 text-primary"/>,
        tools: videoInterviewingTools
    },
    {
        title: "Employee Onboarding",
        icon: <Rocket className="w-5 h-5 text-primary"/>,
        tools: employeeOnboardingTools
    },
    {
        title: "Performance Management",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: performanceManagementTools
    },
    {
        title: "Employee Engagement & Surveys",
        icon: <Heart className="w-5 h-5 text-primary"/>,
        tools: employeeEngagementTools
    },
    {
        title: "HR Information Systems (HRIS)",
        icon: <Layers className="w-5 h-5 text-primary"/>,
        tools: hrisTools
    },
    {
        title: "Payroll & Benefits",
        icon: <CreditCard className="w-5 h-5 text-primary"/>,
        tools: payrollBenefitsTools
    },
    {
        title: "Learning & Development (L&D)",
        icon: <GraduationCap className="w-5 h-5 text-primary"/>,
        tools: learningDevelopmentTools
    },
    {
        title: "Recruiting Chatbots",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: recruitingChatbotsTools
    },
    {
        title: "Job Description Writing",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: jobDescriptionWritingTools
    },
];
