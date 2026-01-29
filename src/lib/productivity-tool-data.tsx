
'use client';

import React from 'react';
import { 
    ListChecks, ClipboardList, LayoutGrid, CheckCircle2, Goal,
    Book, StickyNote, Library, BrainCircuit, Bot,
    Clock, Timer, Calendar, Repeat, Hourglass,
    Folder, FileText, File, Share2, Users,
    MessageSquare, Video, Mail, Briefcase,
    Zap, Workflow, Link2, Code,
    Terminal, GitBranch, UploadCloud, TestTube2, MonitorPlay,
    PenTool, Type, CalendarPlus, Presentation,
    BellOff, Headphones, Smartphone, BarChart,
    Wallet, Receipt, FileSignature, CreditCard,
    Contact, UserCog, Eye,
    GraduationCap, BookOpen, Brain, Dna,
    MousePointer, Copy, RotateCw, Cloud,
    Sparkles, Search, BookCopy, Laptop, Mic, Globe
} from 'lucide-react';
import type { Tool } from '@/lib/types';

import { aiPersonalAssistantsTools } from './productivity-tools-data/ai-personal-assistants';
import { aiTaskManagementTools } from './productivity-tools-data/ai-task-management-tools';
import { aiProjectManagementTools } from './productivity-tools-data/ai-project-management-tools';
import { aiWorkflowAutomationTools } from './productivity-tools-data/ai-workflow-automation';
import { aiTimeManagementTools } from './productivity-tools-data/ai-time-management-tools';
import { aiSmartCalendarsSchedulingTools } from './productivity-tools-data/ai-smart-calendars-scheduling';
import { aiEmailAssistantsTools } from './productivity-tools-data/ai-email-assistants';
import { aiInboxManagementTools } from './productivity-tools-data/ai-inbox-management-tools';
import { aiMeetingAssistantsTools } from './productivity-tools-data/ai-meeting-assistants';
import { aiMeetingTranscriptionNotesTools } from './productivity-tools-data/ai-meeting-transcription-notes';
import { aiDocumentWritingTools } from './productivity-tools-data/ai-document-writing-tools';
import { aiDocumentSummarizationTools } from './productivity-tools-data/ai-document-summarization';
import { aiKnowledgeManagementTools } from './productivity-tools-data/ai-knowledge-management-tools';
import { aiNoteTakingTools } from './productivity-tools-data/ai-note-taking-tools';
import { aiResearchAssistantsTools } from './productivity-tools-data/ai-research-assistants';
import { aiHabitTrackersTools } from './productivity-tools-data/ai-habit-trackers';
import { focusDistractionBlockersTools } from './productivity-tools-data/focus-distraction-blockers';
import { collaborationCommunicationTools } from './productivity-tools-data/collaboration-communication';
import { cloudStorageFileManagementTools } from './productivity-tools-data/cloud-storage-file-management';
import { mindMappingBrainstormingTools } from './productivity-tools-data/mind-mapping-brainstorming';
import { presentationTools } from './productivity-tools-data/presentation-tools';
import { languageTranslationTools } from './productivity-tools-data/language-translation';
import { developerProductivityTools } from './productivity-tools-data/developer-productivity';
import { salesProductivityTools } from './productivity-tools-data/sales-productivity';
import { marketingProductivityTools } from './productivity-tools-data/marketing-productivity';
import { customerSupportProductivityTools } from './productivity-tools-data/customer-support-productivity';
import { hrProductivityTools } from './productivity-tools-data/hr-productivity';
import { financeExpenseProductivityTools } from './productivity-tools-data/finance-expense-productivity';
import { personalCrmTools } from './productivity-tools-data/personal-crm-tools';


export type ToolCategory = {
    title: string;
    icon: React.ReactNode;
    tools: Tool[];
};

export const productivityToolData: ToolCategory[] = [
    {
        title: "AI Personal Assistants",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: aiPersonalAssistantsTools
    },
    {
        title: "AI Task Management Tools",
        icon: <ListChecks className="w-5 h-5 text-primary"/>,
        tools: aiTaskManagementTools
    },
    {
        title: "AI Project Management Tools",
        icon: <ClipboardList className="w-5 h-5 text-primary"/>,
        tools: aiProjectManagementTools
    },
    {
        title: "AI Workflow Automation",
        icon: <Workflow className="w-5 h-5 text-primary"/>,
        tools: aiWorkflowAutomationTools
    },
    {
        title: "AI Time Management Tools",
        icon: <Clock className="w-5 h-5 text-primary"/>,
        tools: aiTimeManagementTools
    },
    {
        title: "AI Smart Calendars & Scheduling",
        icon: <Calendar className="w-5 h-5 text-primary"/>,
        tools: aiSmartCalendarsSchedulingTools
    },
    {
        title: "AI Email Assistants",
        icon: <Mail className="w-5 h-5 text-primary"/>,
        tools: aiEmailAssistantsTools
    },
    {
        title: "AI Inbox Management Tools",
        icon: <Folder className="w-5 h-5 text-primary"/>,
        tools: aiInboxManagementTools
    },
    {
        title: "AI Meeting Assistants",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: aiMeetingAssistantsTools
    },
    {
        title: "AI Meeting Transcription & Notes",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: aiMeetingTranscriptionNotesTools
    },
    {
        title: "AI Document Writing Tools",
        icon: <PenTool className="w-5 h-5 text-primary"/>,
        tools: aiDocumentWritingTools
    },
    {
        title: "AI Document Summarization",
        icon: <BookCopy className="w-5 h-5 text-primary"/>,
        tools: aiDocumentSummarizationTools
    },
    {
        title: "AI Knowledge Management Tools",
        icon: <BrainCircuit className="w-5 h-5 text-primary"/>,
        tools: aiKnowledgeManagementTools
    },
    {
        title: "AI Note-Taking Tools",
        icon: <StickyNote className="w-5 h-5 text-primary"/>,
        tools: aiNoteTakingTools
    },
    {
        title: "AI Research Assistants",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: aiResearchAssistantsTools
    },
    {
        title: "AI Habit Trackers",
        icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
        tools: aiHabitTrackersTools
    },
    {
        title: "Focus & Distraction Blockers",
        icon: <BellOff className="w-5 h-5 text-primary" />,
        tools: focusDistractionBlockersTools
    },
    {
        title: "Collaboration & Communication",
        icon: <Users className="w-5 h-5 text-primary" />,
        tools: collaborationCommunicationTools
    },
    {
        title: "Cloud Storage & File Management",
        icon: <Cloud className="w-5 h-5 text-primary" />,
        tools: cloudStorageFileManagementTools
    },
    {
        title: "Mind Mapping & Brainstorming",
        icon: <Brain className="w-5 h-5 text-primary" />,
        tools: mindMappingBrainstormingTools
    },
    {
        title: "Presentation Tools",
        icon: <Presentation className="w-5 h-5 text-primary" />,
        tools: presentationTools
    },
    {
        title: "Language & Translation",
        icon: <Globe className="w-5 h-5 text-primary" />,
        tools: languageTranslationTools
    },
    {
        title: "Developer Productivity",
        icon: <Code className="w-5 h-5 text-primary" />,
        tools: developerProductivityTools
    },
    {
        title: "Sales Productivity",
        icon: <Briefcase className="w-5 h-5 text-primary" />,
        tools: salesProductivityTools
    },
    {
        title: "Marketing Productivity",
        icon: <Sparkles className="w-5 h-5 text-primary" />,
        tools: marketingProductivityTools
    },
    {
        title: "Customer Support Productivity",
        icon: <Headphones className="w-5 h-5 text-primary" />,
        tools: customerSupportProductivityTools
    },
    {
        title: "HR Productivity",
        icon: <UserCog className="w-5 h-5 text-primary" />,
        tools: hrProductivityTools
    },
    {
        title: "Finance & Expense Productivity",
        icon: <Wallet className="w-5 h-5 text-primary" />,
        tools: financeExpenseProductivityTools
    },
    {
        title: "Personal CRM Tools",
        icon: <Contact className="w-5 h-5 text-primary" />,
        tools: personalCrmTools
    }
];
