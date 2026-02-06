'use client';

import React from 'react';
import { 
    Users, UserPlus, Search, Bot, Briefcase, FileText, CheckSquare, TrendingUp, BarChart,
    Heart, Star, BookOpen, GraduationCap, Gift, Calendar, Mail, FileSignature, MonitorPlay,
    Cpu, Layers, Puzzle, Code, GitBranch, Settings, Workflow, TestTube, CheckCircle, UploadCloud, Rocket
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

export const hrRecruitmentToolData: ToolCategory[] = [
    {
        title: "Talent Acquisition & ATS",
        icon: <UserPlus className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Greenhouse', description: 'Hiring software for growing companies.', url: 'https://www.greenhouse.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=greenhouse.io', dataAiHint: 'hiring software', pricing: 'Paid' },
            { name: 'Lever', description: 'Talent acquisition suite for the entire talent lifecycle.', url: 'https://www.lever.co/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lever.co', dataAiHint: 'recruiting ats', pricing: 'Paid' },
            { name: 'Workable', description: 'All-in-one recruiting software.', url: 'https://www.workable.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=workable.com', dataAiHint: 'recruiting software', pricing: 'Paid' },
            { name: 'SmartRecruiters', description: 'Talent Acquisition Suite.', url: 'https://www.smartrecruiters.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=smartrecruiters.com', dataAiHint: 'hiring success', pricing: 'Paid' },
        ]
    },
    {
        title: "AI-Powered Sourcing",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'SeekOut', description: 'AI-powered talent search engine.', url: 'https://www.seekout.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=seekout.com', dataAiHint: 'talent search', pricing: 'Paid' },
            { name: 'hireEZ (formerly Hiretual)', description: 'AI-powered outbound recruiting platform.', url: 'https://hireez.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=hireez.com', dataAiHint: 'recruiting platform', pricing: 'Paid' },
            { name: 'Entelo', description: 'Source, engage, and hire diverse talent.', url: 'https://www.entelo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=entelo.com', dataAiHint: 'diverse talent', pricing: 'Paid' },
        ]
    },
    {
        title: "Onboarding Tools",
        icon: <Rocket className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Sapling', description: 'People operations platform.', url: 'https://www.saplinghr.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=saplinghr.com', dataAiHint: 'employee onboarding', pricing: 'Paid' },
            { name: 'BambooHR', description: 'Onboarding features within a full HRIS.', url: 'https://www.bamboohr.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=bamboohr.com', dataAiHint: 'hris', pricing: 'Paid' },
        ]
    },
    {
        title: "Performance Management",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Lattice', description: 'People management platform.', url: 'https://lattice.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lattice.com', dataAiHint: 'performance management', pricing: 'Paid' },
            { name: '15Five', description: 'Continuous performance management.', url: 'https://www.15five.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=15five.com', dataAiHint: 'employee engagement', pricing: 'Paid' },
        ]
    },
    {
        title: "Employee Engagement",
        icon: <Heart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Culture Amp', description: 'Employee engagement and performance platform.', url: 'https://www.cultureamp.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=cultureamp.com', dataAiHint: 'employee feedback', pricing: 'Paid' },
            { name: 'Peakon', description: 'Employee engagement platform.', url: 'https://peakon.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=peakon.com', dataAiHint: 'employee success', pricing: 'Paid' },
        ]
    },
];
