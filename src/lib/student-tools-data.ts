
import React from 'react';
import { 
    Youtube, MessageSquare, BookOpen, FileText, HelpCircle, Book, Zap, Calendar, Brain, Search, Type, Presentation, Wand2, Mic, File, GraduationCap, Scissors, Pen, Share2, Languages, Microscope, TestTube, Dna, FlaskConical, Globe, Calculator, Milestone, Code, Briefcase, Camera, Video, Palette, Music, Bot, Users, BookCopy, FileSearch, FileLock2, GitBranch, Settings, Network, Cpu
} from 'lucide-react';
import type { Tool } from '@/lib/types';
import { aiStudyAssistantsTools } from './student-tools-data/ai-study-assistants';
import { writingEssayTools } from './student-tools-data/writing-essay-tools';
import { researchInfoGatheringTools } from './student-tools-data/research-info-gathering';
import { summarizationTools } from './student-tools-data/summarization-tools';
import { flashcardsExamRevisionTools } from './student-tools-data/flashcards-exam-revision';
import { presentationSlidesTools } from './student-tools-data/presentation-slides';
import { productivityFocusTools } from './student-tools-data/productivity-focus';
import { citationReferenceManagementTools } from './student-tools-data/citation-reference-management';
import { languageLearningTools } from './student-tools-data/language-learning';
import { mathScienceSolversTools } from './student-tools-data/math-science-solvers';
import { codingProgrammingHelpTools } from './student-tools-data/coding-programming-help';
import { careerInternshipPrepTools } from './student-tools-data/career-internship-prep';
import { creativeTools } from './student-tools-data/creative-tools';
import { videoAudioTools } from './student-tools-data/video-audio-tools';
import { plagiarismCheckersTools } from './student-tools-data/plagiarism-checkers';
import { transcriptionServicesTools } from './student-tools-data/transcription-services';
import { digitalWhiteboardsTools } from './student-tools-data/digital-whiteboards';
import { noteOrganizationTools } from './student-tools-data/note-organization';
import { mindMappingTools } from './student-tools-data/mind-mapping';
import { teamCollaborationTools } from './student-tools-data/team-collaboration';
import { cloudStorageTools } from './student-tools-data/cloud-storage';
import { documentSharingTools } from './student-tools-data/document-sharing';
import { textbookSolutionsTools } from './student-tools-data/textbook-solutions';
import { onlineTutoringPlatformsTools } from './student-tools-data/online-tutoring-platforms';
import { scholarshipFindersTools } from './student-tools-data/scholarship-finders';
import { videoSummarizersTools } from './student-tools-data/video-summarizers';
import { projectPlannersTools } from './student-tools-data/project-planners';
import { resumeBuildersTools } from './student-tools-data/resume-builders';

export type ToolCategory = {
    title: string;
    icon: React.ReactNode;
    tools: Tool[];
};

export const studentAiToolData: ToolCategory[] = [
    {
        title: "AI Study Assistants",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: aiStudyAssistantsTools,
    },
    {
        title: "Writing & Essay Tools",
        icon: <Pen className="w-5 h-5 text-primary"/>,
        tools: writingEssayTools,
    },
    {
        title: "Research & Information Gathering",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: researchInfoGatheringTools,
    },
    {
        title: "Summarization Tools",
        icon: <BookCopy className="w-5 h-5 text-primary"/>,
        tools: summarizationTools,
    },
    {
        title: "Flashcards & Exam Revision",
        icon: <Book className="w-5 h-5 text-primary"/>,
        tools: flashcardsExamRevisionTools,
    },
    {
        title: "Presentation & Slides",
        icon: <Presentation className="w-5 h-5 text-primary"/>,
        tools: presentationSlidesTools,
    },
    {
        title: "Productivity & Focus",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: productivityFocusTools,
    },
    {
        title: "Citation & Reference Management",
        icon: <Share2 className="w-5 h-5 text-primary"/>,
        tools: citationReferenceManagementTools,
    },
    {
        title: "Language Learning",
        icon: <Languages className="w-5 h-5 text-primary"/>,
        tools: languageLearningTools,
    },
    {
        title: "Math & Science Solvers",
        icon: <FlaskConical className="w-5 h-5 text-primary"/>,
        tools: mathScienceSolversTools,
    },
    {
        title: "Coding & Programming Help",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: codingProgrammingHelpTools,
    },
     {
        title: "Career & Internship Prep",
        icon: <Briefcase className="w-5 h-5 text-primary"/>,
        tools: careerInternshipPrepTools,
    },
    {
        title: "Creative Tools",
        icon: <Palette className="w-5 h-5 text-primary"/>,
        tools: creativeTools,
    },
    {
        title: "Video & Audio Tools",
        icon: <Video className="w-5 h-5 text-primary"/>,
        tools: videoAudioTools,
    },
    { 
        title: "Plagiarism Checkers", 
        icon: <FileSearch className="w-5 h-5 text-primary" />, 
        tools: plagiarismCheckersTools,
    },
    { 
        title: "Transcription Services", 
        icon: <Mic className="w-5 h-5 text-primary" />, 
        tools: transcriptionServicesTools,
    },
    { 
        title: "Digital Whiteboards", 
        icon: <Presentation className="w-5 h-5 text-primary" />, 
        tools: digitalWhiteboardsTools,
    },
    { 
        title: "Note Organization", 
        icon: <BookOpen className="w-5 h-5 text-primary" />, 
        tools: noteOrganizationTools,
    },
    { 
        title: "Mind Mapping", 
        icon: <Brain className="w-5 h-5 text-primary" />, 
        tools: mindMappingTools,
    },
    { 
        title: "Team Collaboration", 
        icon: <Users className="w-5 h-5 text-primary" />, 
        tools: teamCollaborationTools,
    },
    { 
        title: "Cloud Storage", 
        icon: <File className="w-5 h-5 text-primary" />, 
        tools: cloudStorageTools,
    },
    { 
        title: "Document Sharing", 
        icon: <Share2 className="w-5 h-5 text-primary" />, 
        tools: documentSharingTools,
    },
    { 
        title: "Textbook Solutions", 
        icon: <HelpCircle className="w-5 h-5 text-primary" />, 
        tools: textbookSolutionsTools,
    },
    { 
        title: "Online Tutoring Platforms", 
        icon: <GraduationCap className="w-5 h-5 text-primary" />, 
        tools: onlineTutoringPlatformsTools,
    },
    { 
        title: "Scholarship Finders", 
        icon: <Search className="w-5 h-5 text-primary" />, 
        tools: scholarshipFindersTools,
    },
    { 
        title: "Video Summarizers", 
        icon: <Youtube className="w-5 h-5 text-primary" />, 
        tools: videoSummarizersTools,
    },
    { 
        title: "Project Planners", 
        icon: <Milestone className="w-5 h-5 text-primary" />, 
        tools: projectPlannersTools,
    },
    { 
        title: "Resume Builders", 
        icon: <FileText className="w-5 h-5 text-primary" />, 
        tools: resumeBuildersTools,
    }
];
