
'use client';

import React from 'react';
import { 
    ListChecks, ClipboardList, Bot,
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

export const projectManagementToolData: ToolCategory[] = [
    {
        title: "AI Project Management Platforms",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Motion', description: 'Uses AI to intelligently plan your day.', url: 'https://www.usemotion.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=usemotion.com', dataAiHint: 'ai planner', pricing: 'Paid' },
            { name: 'ClickUp', description: 'One app to replace them all, with AI features.', url: 'https://clickup.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=clickup.com', dataAiHint: 'productivity platform', pricing: 'Freemium' },
            { name: 'Asana', description: 'Work management for teams, with AI intelligence.', url: 'https://asana.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=asana.com', dataAiHint: 'team tasks', pricing: 'Freemium' },
            { name: 'Notion AI', description: 'AI features integrated into Notion workspace.', url: 'https://www.notion.so/product/ai', image: 'https://www.google.com/s2/favicons?sz=128&domain=notion.so', dataAiHint: 'workspace assistant', pricing: 'Paid' },
        ]
    },
    {
        title: "Traditional Project Management",
        icon: <ClipboardList className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Trello', description: 'A visual collaboration tool for your team.', url: 'https://trello.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=trello.com', dataAiHint: 'kanban boards', pricing: 'Freemium' },
            { name: 'Monday.com', description: 'Work OS that powers teams to run projects.', url: 'https://monday.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=monday.com', dataAiHint: 'work os', pricing: 'Paid' },
            { name: 'Jira', description: 'Project management tool for agile teams.', url: 'https://www.atlassian.com/software/jira', image: 'https://www.google.com/s2/favicons?sz=128&domain=atlassian.com', dataAiHint: 'agile teams', pricing: 'Freemium' },
            { name: 'Wrike', description: 'Versatile project management software.', url: 'https://www.wrike.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=wrike.com', dataAiHint: 'enterprise pm', pricing: 'Paid' },
        ]
    },
    {
        title: "Task Management",
        icon: <ListChecks className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Todoist', description: 'Organize your work and life.', url: 'https://todoist.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=todoist.com', dataAiHint: 'task manager', pricing: 'Freemium' },
            { name: 'TickTick', description: 'To-do list, calendar, and habit tracker.', url: 'https://ticktick.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ticktick.com', dataAiHint: 'habit tracker', pricing: 'Freemium' },
            { name: 'Things', description: 'A delightful and easy to use task manager.', url: 'https://culturedcode.com/things/', image: 'https://www.google.com/s2/favicons?sz=128&domain=culturedcode.com', dataAiHint: 'mac tasks', pricing: 'Paid' },
            { name: 'Any.do', description: 'To-do list, calendar, planner and reminders.', url: 'https://www.any.do/', image: 'https://www.google.com/s2/favicons?sz=128&domain=any.do', dataAiHint: 'daily planner', pricing: 'Freemium' },
        ]
    }
];
