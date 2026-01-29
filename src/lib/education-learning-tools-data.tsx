

'use client';

import React from 'react';
import { 
    Cpu, BookOpen, UserCheck, Book, Bot, GraduationCap, CheckSquare, ListChecks, FileText,
    Brain, MessageSquare, Languages, Code, Atom, Sigma, FlaskConical, Briefcase, Milestone, Monitor,
    BarChart, Users, Settings, Gamepad2, Zap, Heart
} from 'lucide-react';
import type { Tool } from '@/lib/types';

import { aiLearningPlatformsTools } from './education-learning-tools-data/ai-learning-platforms';
import { aiOnlineCourseBuildersTools } from './education-learning-tools-data/ai-online-course-builders';
import { aiPersonalizedLearningTools } from './education-learning-tools-data/ai-personalized-learning-tools';
import { aiAdaptiveLearningSystemsTools } from './education-learning-tools-data/ai-adaptive-learning-systems';
import { aiTutoringTools } from './education-learning-tools-data/ai-tutoring-tools';
import { aiVirtualTeachersTools } from './education-learning-tools-data/ai-virtual-teachers';
import { aiHomeworkHelpTools } from './education-learning-tools-data/ai-homework-help-tools';
import { aiExamPreparationTools } from './education-learning-tools-data/ai-exam-preparation-tools';
import { aiQuizAssessmentTools } from './education-learning-tools-data/ai-quiz-assessment-tools';
import { aiPracticeTestGeneratorsTools } from './education-learning-tools-data/ai-practice-test-generators';
import { aiStudyPlanningTools } from './education-learning-tools-data/ai-study-planning-tools';
import { aiNoteTakingForStudentsTools } from './education-learning-tools-data/ai-note-taking-for-students';
import { aiStudyMaterialGeneratorsTools } from './education-learning-tools-data/ai-study-material-generators';
import { aiConceptExplanationTools } from './education-learning-tools-data/ai-concept-explanation-tools';
import { aiDoubtSolvingAssistantsTools } from './education-learning-tools-data/ai-doubt-solving-assistants';
import { aiLanguageLearningTools } from './education-learning-tools-data/ai-language-learning-tools';
import { aiCodingProgrammingLearningTools } from './education-learning-tools-data/ai-coding-programming-learning-tools';
import { aiStemLearningTools } from './education-learning-tools-data/ai-stem-learning-tools';
import { aiMathSolversTools } from './education-learning-tools-data/ai-math-solvers';
import { aiScienceLearningTools } from './education-learning-tools-data/ai-science-learning-tools';
import { aiSkillDevelopmentPlatformsTools } from './education-learning-tools-data/ai-skill-development-platforms';
import { aiCareerGuidanceTools } from './education-learning-tools-data/ai-career-guidance-tools';
import { aiCertificationTrainingTools } from './education-learning-tools-data/ai-certification-training-tools';
import { aiLearningAnalyticsTools } from './education-learning-tools-data/ai-learning-analytics-tools';
import { aiStudentProgressTrackingTools } from './education-learning-tools-data/ai-student-progress-tracking';
import { aiTeacherAssistantTools } from './education-learning-tools-data/ai-teacher-assistant-tools';
import { aiClassroomManagementTools } from './education-learning-tools-data/ai-classroom-management-tools';
import { aiELearningContentCreationTools } from './education-learning-tools-data/ai-e-learning-content-creation';
import { aiEducationGamificationTools } from './education-learning-tools-data/ai-education-gamification-tools';
import { aiLifelongLearningTools } from './education-learning-tools-data/ai-lifelong-learning-tools';

export type ToolCategory = {
    title: string;
    icon: React.ReactNode;
    tools: Tool[];
};

export const educationLearningToolData: ToolCategory[] = [
    {
        title: "AI Learning Platforms",
        icon: <Cpu className="w-5 h-5 text-primary"/>,
        tools: aiLearningPlatformsTools
    },
    {
        title: "AI Online Course Builders",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: aiOnlineCourseBuildersTools
    },
    {
        title: "AI Personalized Learning Tools",
        icon: <UserCheck className="w-5 h-5 text-primary"/>,
        tools: aiPersonalizedLearningTools
    },
    {
        title: "AI Adaptive Learning Systems",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: aiAdaptiveLearningSystemsTools
    },
    {
        title: "AI Tutoring Tools",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: aiTutoringTools
    },
    {
        title: "AI Virtual Teachers",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: aiVirtualTeachersTools
    },
    {
        title: "AI Homework Help Tools",
        icon: <GraduationCap className="w-5 h-5 text-primary"/>,
        tools: aiHomeworkHelpTools
    },
    {
        title: "AI Exam Preparation Tools",
        icon: <CheckSquare className="w-5 h-5 text-primary"/>,
        tools: aiExamPreparationTools
    },
    {
        title: "AI Quiz & Assessment Tools",
        icon: <ListChecks className="w-5 h-5 text-primary"/>,
        tools: aiQuizAssessmentTools
    },
    {
        title: "AI Practice Test Generators",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: aiPracticeTestGeneratorsTools
    },
    {
        title: "AI Study Planning Tools",
        icon: <Book className="w-5 h-5 text-primary"/>,
        tools: aiStudyPlanningTools
    },
    {
        title: "AI Note-Taking for Students",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: aiNoteTakingForStudentsTools
    },
    {
        title: "AI Study Material Generators",
        icon: <Book className="w-5 h-5 text-primary"/>,
        tools: aiStudyMaterialGeneratorsTools
    },
    {
        title: "AI Concept Explanation Tools",
        icon: <Brain className="w-5 h-5 text-primary"/>,
        tools: aiConceptExplanationTools
    },
    {
        title: "AI Doubt-Solving Assistants",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: aiDoubtSolvingAssistantsTools
    },
    {
        title: "AI Language Learning Tools",
        icon: <Languages className="w-5 h-5 text-primary"/>,
        tools: aiLanguageLearningTools
    },
    {
        title: "AI Coding & Programming Learning Tools",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: aiCodingProgrammingLearningTools
    },
    {
        title: "AI STEM Learning Tools",
        icon: <Atom className="w-5 h-5 text-primary"/>,
        tools: aiStemLearningTools
    },
    {
        title: "AI Math Solvers",
        icon: <Sigma className="w-5 h-5 text-primary"/>,
        tools: aiMathSolversTools
    },
    {
        title: "AI Science Learning Tools",
        icon: <FlaskConical className="w-5 h-5 text-primary"/>,
        tools: aiScienceLearningTools
    },
    {
        title: "AI Skill Development Platforms",
        icon: <Briefcase className="w-5 h-5 text-primary"/>,
        tools: aiSkillDevelopmentPlatformsTools
    },
    {
        title: "AI Career Guidance Tools",
        icon: <Milestone className="w-5 h-5 text-primary"/>,
        tools: aiCareerGuidanceTools
    },
    {
        title: "AI Certification & Training Tools",
        icon: <CheckSquare className="w-5 h-5 text-primary"/>,
        tools: aiCertificationTrainingTools
    },
    {
        title: "AI Learning Analytics Tools",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: aiLearningAnalyticsTools
    },
    {
        title: "AI Student Progress Tracking",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: aiStudentProgressTrackingTools
    },
    {
        title: "AI Teacher Assistant Tools",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: aiTeacherAssistantTools
    },
    {
        title: "AI Classroom Management Tools",
        icon: <Settings className="w-5 h-5 text-primary"/>,
        tools: aiClassroomManagementTools
    },
    {
        title: "AI E-Learning Content Creation",
        icon: <Monitor className="w-5 h-5 text-primary"/>,
        tools: aiELearningContentCreationTools
    },
    {
        title: "AI Education Gamification Tools",
        icon: <Gamepad2 className="w-5 h-5 text-primary"/>,
        tools: aiEducationGamificationTools
    },
    {
        title: "AI Lifelong Learning Tools",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: aiLifelongLearningTools
    }
];

