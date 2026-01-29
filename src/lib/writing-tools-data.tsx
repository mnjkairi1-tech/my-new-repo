
'use client';

import React from 'react';
import { 
    Feather, Bot, Book, Type, FileText, BrainCircuit, Sparkles, Pencil, Search, Users, Mail, Video, Microscope, FileHeart, RefreshCw, BarChart, Check, Globe, Lightbulb, Heading1, Scale, Hand, Mic, BookOpen, UserCheck, CheckCheck, Edit, BookCopy, FileSearch, Code
} from 'lucide-react';
import type { Tool } from '@/lib/types';

import { aiWritingAssistantsTools } from './writing-tools-data/ai-writing-assistants';
import { grammarStyleCheckersTools } from './writing-tools-data/grammar-style-checkers';
import { paraphrasingTools } from './writing-tools-data/paraphrasing-tools';
import { summarizationTools } from './writing-tools-data/summarization-tools';
import { contentGenerationTools } from './writing-tools-data/content-generation';
import { aiStoryGeneratorsTools } from './writing-tools-data/ai-story-generators';
import { aiBlogPostWritersTools } from './writing-tools-data/ai-blog-post-writers';
import { aiSeoWritingTools } from './writing-tools-data/ai-seo-writing-tools';
import { aiCopywritingTools } from './writing-tools-data/ai-copywriting-tools';
import { aiEmailWritingAssistantsTools } from './writing-tools-data/ai-email-writing-assistants';
import { aiScriptwritingTools } from './writing-tools-data/ai-scriptwriting-tools';
import { aiAcademicResearchPaperWritersTools } from './writing-tools-data/ai-academic-research-paper-writers';
import { aiResumeCoverLetterBuildersTools } from './writing-tools-data/ai-resume-cover-letter-builders';
import { aiContentRepurposingTools } from './writing-tools-data/ai-content-repurposing';
import { aiContentImprovementRewritingTools } from './writing-tools-data/ai-content-improvement-rewriting';
import { aiReadabilityCheckersTools } from './writing-tools-data/ai-readability-checkers';
import { aiPlagiarismCheckersTools } from './writing-tools-data/ai-plagiarism-checkers';
import { aiToneVoiceAnalyzersTools } from './writing-tools-data/ai-tone-voice-analyzers';
import { aiCreativeWritingPoetryGeneratorsTools } from './writing-tools-data/ai-creative-writing-poetry-generators';
import { aiTechnicalWritingTools } from './writing-tools-data/ai-technical-writing-tools';
import { aiTranslationLocalizationTools } from './writing-tools-data/ai-translation-localization';
import { aiContentIdeaGeneratorsTools } from './writing-tools-data/ai-content-idea-generators';
import { aiHeadlineTitleGeneratorsTools } from './writing-tools-data/ai-headline-title-generators';
import { aiLegalWritingAssistantsTools } from './writing-tools-data/ai-legal-writing-assistants';
import { aiGrantProposalWritingTools } from './writing-tools-data/ai-grant-proposal-writing';
import { aiSpeechWritingTools } from './writing-tools-data/ai-speech-writing';
import { aiBookWritingSoftwareTools } from './writing-tools-data/ai-book-writing';
import { aiPersonalizedContentGeneratorsTools } from './writing-tools-data/ai-personalized-content';
import { aiFactualAccuracyCheckersTools } from './writing-tools-data/ai-factual-accuracy';
import { aiContentEditingProofreadingTools } from './writing-tools-data/ai-content-editing-proofreading';


export type ToolCategory = {
    title: string;
    icon: React.ReactNode;
    tools: Tool[];
};

export const writingToolData: ToolCategory[] = [
    {
        title: "AI Writing Assistants",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: aiWritingAssistantsTools
    },
    {
        title: "Grammar & Style Checkers",
        icon: <Feather className="w-5 h-5 text-primary"/>,
        tools: grammarStyleCheckersTools
    },
    {
        title: "Paraphrasing Tools",
        icon: <RefreshCw className="w-5 h-5 text-primary"/>,
        tools: paraphrasingTools
    },
    {
        title: "Summarization Tools",
        icon: <BookCopy className="w-5 h-5 text-primary"/>,
        tools: summarizationTools
    },
    {
        title: "Content Generation",
        icon: <Sparkles className="w-5 h-5 text-primary"/>,
        tools: contentGenerationTools
    },
    {
        title: "AI Story Generators",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: aiStoryGeneratorsTools
    },
    {
        title: "AI Blog Post Writers",
        icon: <Pencil className="w-5 h-5 text-primary"/>,
        tools: aiBlogPostWritersTools
    },
    {
        title: "AI SEO Writing Tools",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: aiSeoWritingTools
    },
    {
        title: "AI Copywriting Tools",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: aiCopywritingTools
    },
    {
        title: "AI Email Writing Assistants",
        icon: <Mail className="w-5 h-5 text-primary"/>,
        tools: aiEmailWritingAssistantsTools
    },
    {
        title: "AI Scriptwriting Tools",
        icon: <Video className="w-5 h-5 text-primary"/>,
        tools: aiScriptwritingTools
    },
    {
        title: "AI Academic & Research Paper Writers",
        icon: <Microscope className="w-5 h-5 text-primary"/>,
        tools: aiAcademicResearchPaperWritersTools
    },
    {
        title: "AI Resume & Cover Letter Builders",
        icon: <FileHeart className="w-5 h-5 text-primary"/>,
        tools: aiResumeCoverLetterBuildersTools
    },
    {
        title: "AI Content Repurposing Tools",
        icon: <RefreshCw className="w-5 h-5 text-primary"/>,
        tools: aiContentRepurposingTools
    },
    {
        title: "AI Content Improvement & Rewriting",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: aiContentImprovementRewritingTools
    },
    {
        title: "AI Readability Checkers",
        icon: <Check className="w-5 h-5 text-primary"/>,
        tools: aiReadabilityCheckersTools
    },
    {
        title: "AI Plagiarism Checkers",
        icon: <FileSearch className="w-5 h-5 text-primary"/>,
        tools: aiPlagiarismCheckersTools
    },
    {
        title: "AI Tone & Voice Analyzers",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: aiToneVoiceAnalyzersTools
    },
    {
        title: "AI Creative Writing & Poetry Generators",
        icon: <BrainCircuit className="w-5 h-5 text-primary"/>,
        tools: aiCreativeWritingPoetryGeneratorsTools
    },
    {
        title: "AI Technical Writing Tools",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: aiTechnicalWritingTools
    },
    {
        title: "AI Translation & Localization for Writers",
        icon: <Globe className="w-5 h-5 text-primary"/>,
        tools: aiTranslationLocalizationTools
    },
    {
        title: "AI Content Idea Generators",
        icon: <Lightbulb className="w-5 h-5 text-primary"/>,
        tools: aiContentIdeaGeneratorsTools
    },
    {
        title: "AI Headline & Title Generators",
        icon: <Heading1 className="w-5 h-5 text-primary"/>,
        tools: aiHeadlineTitleGeneratorsTools
    },
    {
        title: "AI Legal Writing Assistants",
        icon: <Scale className="w-5 h-5 text-primary"/>,
        tools: aiLegalWritingAssistantsTools
    },
    {
        title: "AI Grant & Proposal Writing Tools",
        icon: <Hand className="w-5 h-5 text-primary"/>,
        tools: aiGrantProposalWritingTools
    },
    {
        title: "AI Speech Writing Tools",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: aiSpeechWritingTools
    },
    {
        title: "AI Book Writing Software",
        icon: <Book className="w-5 h-5 text-primary"/>,
        tools: aiBookWritingSoftwareTools
    },
    {
        title: "AI Personalized Content Generators",
        icon: <UserCheck className="w-5 h-5 text-primary"/>,
        tools: aiPersonalizedContentGeneratorsTools
    },
    {
        title: "AI Factual Accuracy Checkers",
        icon: <CheckCheck className="w-5 h-5 text-primary"/>,
        tools: aiFactualAccuracyCheckersTools
    },
    {
        title: "AI Content Editing & Proofreading",
        icon: <Edit className="w-5 h-5 text-primary"/>,
        tools: aiContentEditingProofreadingTools
    }
];
