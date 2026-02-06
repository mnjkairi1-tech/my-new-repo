'use client';

import React from 'react';
import { 
    Clock, Monitor, User, Briefcase, BarChart, DollarSign
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

export const timeTrackingToolData: ToolCategory[] = [
    {
        title: "General Time Tracking",
        icon: <Clock className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Toggl Track', description: 'Effortless time tracking and reporting.', url: 'https://toggl.com/track/', image: 'https://www.google.com/s2/favicons?sz=128&domain=toggl.com', dataAiHint: 'time tracker', pricing: 'Freemium' },
            { name: 'Clockify', description: 'Free time tracker and timesheet app for teams.', url: 'https://clockify.me/', image: 'https://www.google.com/s2/favicons?sz=128&domain=clockify.me', dataAiHint: 'timesheet app', pricing: 'Free' },
            { name: 'Harvest', description: 'Simple time tracking, powerful reporting.', url: 'https://www.getharvest.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=getharvest.com', dataAiHint: 'time reporting', pricing: 'Freemium' },
            { name: 'TimeCamp', description: 'Time tracking software with productivity monitoring.', url: 'https://www.timecamp.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=timecamp.com', dataAiHint: 'productivity monitoring', pricing: 'Freemium' },
        ]
    },
    {
        title: "Productivity Monitoring",
        icon: <Monitor className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'RescueTime', description: 'Find your ideal work-life balance.', url: 'https://www.rescuetime.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=rescuetime.com', dataAiHint: 'work balance', pricing: 'Freemium' },
            { name: 'DeskTime', description: 'Automatic time tracking for teams and individuals.', url: 'https://desktime.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=desktime.com', dataAiHint: 'employee tracking', pricing: 'Freemium' },
            { name: 'ActivTrak', description: 'Workforce analytics and productivity software.', url: 'https://www.activtrak.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=activtrak.com', dataAiHint: 'workforce analytics', pricing: 'Freemium' },
            { name: 'Time Doctor', description: 'Time tracking and productivity software for teams.', url: 'https://www.timedoctor.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=timedoctor.com', dataAiHint: 'team productivity', pricing: 'Paid' },
        ]
    },
    {
        title: "Freelancer Time Tracking",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Bonsai', description: 'All-in-one product suite for freelancers.', url: 'https://www.hellobonsai.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=hellobonsai.com', dataAiHint: 'freelancer suite', pricing: 'Paid' },
            { name: 'AND.CO', description: 'Freelance business management app from Fiverr.', url: 'https://www.fiverr.com/workspace', image: 'https://www.google.com/s2/favicons?sz=128&domain=fiverr.com', dataAiHint: 'freelance app', pricing: 'Free' },
        ]
    },
    {
        title: "Enterprise Time Tracking",
        icon: <Briefcase className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Replicon', description: 'Time tracking and project management for enterprise.', url: 'https://www.replicon.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=replicon.com', dataAiHint: 'enterprise time', pricing: 'Paid' },
             { name: 'TSheets (QuickBooks Time)', description: 'Employee time tracking for payroll.', url: 'https://quickbooks.intuit.com/time-tracking/', image: 'https://www.google.com/s2/favicons?sz=128&domain=intuit.com', dataAiHint: 'payroll time', pricing: 'Paid' },
        ]
    }
];
