

import React from 'react';
import { PlaceHolderImages, getImage, getHint } from '@/lib/placeholder-images';
import { 
    Youtube, MessageSquare, BookOpen, FileText, HelpCircle, Book, Zap, Calendar, Brain, Search, Type, Presentation, Wand2, Mic, File, GraduationCap, Scissors, Pen, Share2, Languages, Microscope, TestTube, Dna, FlaskConical, Globe, Calculator, Milestone, Code, Briefcase, Camera, Video, Palette, Music, Bot, Users, BookCopy, FileSearch, FileLock2, GitBranch, Settings, Network, Cpu
} from 'lucide-react';
import type { Tool } from '@/lib/types';

export type ToolCategory = {
    title: string;
    icon: React.ReactNode;
    tools: Tool[];
};

export const studentAiToolData: ToolCategory[] = [
    {
        title: "AI Study Assistants",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ChatGPT', description: 'Conversational AI for instant answers and explanations.', url: 'https://chat.openai.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=openai.com', dataAiHint: getHint('chatgpt-assist'), pricing: 'Freemium' },
            { name: 'Perplexity AI', description: 'An answer engine that provides sources for its answers.', url: 'https://www.perplexity.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=perplexity.ai', dataAiHint: getHint('perplexity-assist'), pricing: 'Freemium' },
            { name: 'Socratic by Google', description: 'Learning app to help with homework across subjects.', url: 'https://socratic.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=socratic.org', dataAiHint: 'homework help', pricing: 'Free' },
            { name: 'Brainly', description: 'Peer-to-peer learning community for students.', url: 'https://brainly.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=brainly.com', dataAiHint: 'student community', pricing: 'Freemium' },
            { name: 'Khanmigo', description: 'An AI-powered tutor and teaching assistant from Khan Academy.', url: 'https://www.khanacademy.org/khan-labs', image: 'https://www.google.com/s2/favicons?sz=128&domain=khanacademy.org', dataAiHint: getHint('khanmigo-assist'), pricing: 'Paid' },
            { name: 'Quizlet Q-Chat', description: 'AI tutor that turns study material into conversations.', url: 'https://quizlet.com/q-chat', image: 'https://www.google.com/s2/favicons?sz=128&domain=quizlet.com', dataAiHint: getHint('qchat-assist'), pricing: 'Freemium' },
            { name: 'Poe by Quora', description: 'Platform to ask questions and get instant answers from AI bots.', url: 'https://poe.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=poe.com', dataAiHint: getHint('poe-assist'), pricing: 'Freemium' },
            { name: 'Mindgrasp', description: 'Instantly create notes and answer questions from any document or video.', url: 'https://mindgrasp.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mindgrasp.ai', dataAiHint: getHint('mindgrasp-assist'), pricing: 'Paid' },
            { name: 'Notion AI', description: 'AI features integrated into the Notion workspace for summarizing and brainstorming.', url: 'https://www.notion.so/product/ai', image: 'https://www.google.com/s2/favicons?sz=128&domain=notion.so', dataAiHint: getHint('notionai-assist'), pricing: 'Paid' },
            { name: 'Sharly AI', description: 'AI assistant to chat with and summarize any document.', url: 'https://sharly.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sharly.ai', dataAiHint: getHint('sharlyai-assist'), pricing: 'Freemium' },
        ]
    },
    {
        title: "Writing & Essay Tools",
        icon: <Pen className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Grammarly', description: 'AI-powered writing assistant for grammar and style.', url: 'https://www.grammarly.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=grammarly.com', dataAiHint: 'grammar check', pricing: 'Freemium' },
            { name: 'QuillBot', description: 'Paraphrasing and summarizing tool to improve your writing.', url: 'https://quillbot.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=quillbot.com', dataAiHint: 'paraphraser', pricing: 'Freemium' },
            { name: 'Hemingway Editor', description: 'Makes your writing bold and clear.', url: 'https://hemingwayapp.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=hemingwayapp.com', dataAiHint: 'clarity checker', pricing: 'Free' },
            { name: 'Jasper', description: 'AI content writer for essays, blogs, and more.', url: 'https://www.jasper.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=jasper.ai', dataAiHint: 'ai writer', pricing: 'Paid' },
            { name: 'Caktus AI', description: 'AI tool designed specifically for student writing tasks.', url: 'https://www.caktus.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=caktus.ai', dataAiHint: 'student ai', pricing: 'Paid' },
            { name: 'Jenni AI', description: 'The AI assistant for students and researchers.', url: 'https://jenni.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=jenni.ai', dataAiHint: 'academic writing', pricing: 'Freemium' },
            { name: 'Paperpal', description: 'AI-powered academic writing assistant.', url: 'https://paperpal.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=paperpal.com', dataAiHint: 'research writing', pricing: 'Freemium' },
            { name: 'Wordtune', description: 'Rewrite and rephrase your sentences.', url: 'https://www.wordtune.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=wordtune.com', dataAiHint: 'sentence rewriter', pricing: 'Freemium' },
        ]
    },
    {
        title: "Research & Information Gathering",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Elicit', description: 'The AI Research Assistant to automate research workflows.', url: 'https://elicit.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=elicit.org', dataAiHint: 'automate research', pricing: 'Freemium' },
            { name: 'Research Rabbit', description: 'A new way to discover and visualize research papers.', url: 'https://www.researchrabbit.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=researchrabbit.ai', dataAiHint: 'literature map', pricing: 'Free' },
            { name: 'Google Scholar', description: 'Provides a simple way to broadly search for scholarly literature.', url: 'https://scholar.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'academic search', pricing: 'Free' },
            { name: 'Semantic Scholar', description: 'AI-powered research tool for scientific literature.', url: 'https://www.semanticscholar.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=semanticscholar.org', dataAiHint: 'scientific literature', pricing: 'Free' },
            { name: 'Connected Papers', description: 'A visual tool to find and explore academic papers.', url: 'https://www.connectedpapers.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=connectedpapers.com', dataAiHint: 'visual explorer', pricing: 'Free' },
        ]
    },
    {
        title: "Summarization Tools",
        icon: <BookCopy className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Scholarcy', description: 'AI-powered article summarizer for students and researchers.', url: 'https://www.scholarcy.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=scholarcy.com', dataAiHint: 'research paper', pricing: 'Freemium' },
            { name: 'Humata AI', description: 'Your AI for files. Ask questions, get answers, and summarize.', url: 'https://www.humata.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=humata.ai', dataAiHint: 'document ai', pricing: 'Freemium' },
            { name: 'ChatPDF', description: 'Chat with any PDF to get summaries and answers.', url: 'https://www.chatpdf.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=chatpdf.com', dataAiHint: 'pdf conversation', pricing: 'Freemium' },
            { name: 'SMMRY', description: 'Summarize articles, text, and websites.', url: 'https://smmry.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=smmry.com', dataAiHint: 'article summarizer', pricing: 'Free' },
            { name: 'Eightify AI', description: 'Summarize YouTube videos with AI.', url: 'https://eightify.app/', image: 'https://www.google.com/s2/favicons?sz=128&domain=eightify.app', dataAiHint: 'youtube summary', pricing: 'Freemium' },
        ]
    },
    {
        title: "Flashcards & Exam Revision",
        icon: <Book className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Quizlet', description: 'Learn with flashcards, games, and AI-powered study modes.', url: 'https://quizlet.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=quizlet.com', dataAiHint: 'study sets', pricing: 'Freemium' },
            { name: 'Anki', description: 'Powerful, intelligent flashcards using spaced repetition.', url: 'https://apps.ankiweb.net/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ankiweb.net', dataAiHint: 'spaced repetition', pricing: 'Free' },
            { name: 'Knowt', description: 'AI-powered flashcards and study guides from your notes.', url: 'https://knowt.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=knowt.io', dataAiHint: getHint('knowt-assist'), pricing: 'Freemium' },
            { name: 'StudySmarter', description: 'All-in-one learning platform with flashcards and quizzes.', url: 'https://www.studysmarter.us/', image: 'https://www.google.com/s2/favicons?sz=128&domain=studysmarter.us', dataAiHint: 'learning platform', pricing: 'Free' },
            { name: 'Cramly', description: 'AI study tools including flashcard creation.', url: 'https://www.cramly.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=cramly.ai', dataAiHint: getHint('cramly'), pricing: 'Freemium' },
        ]
    },
    {
        title: "Presentation & Slides",
        icon: <Presentation className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Tome', description: 'The AI-powered storytelling format for presentations.', url: 'https://tome.app/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tome.app', dataAiHint: 'ai presentation', pricing: 'Freemium' },
            { name: 'Gamma', description: 'A new medium for presenting ideas, powered by AI.', url: 'https://gamma.app/', image: 'https://www.google.com/s2/favicons?sz=128&domain=gamma.app', dataAiHint: 'ai slides', pricing: 'Freemium' },
            { name: 'SlidesAI.io', description: 'Create Presentation Slides with AI in seconds.', url: 'https://www.slidesai.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=slidesai.io', dataAiHint: 'google slides', pricing: 'Freemium' },
            { name: 'Beautiful.ai', description: 'Presentation software that designs for you.', url: 'https://www.beautiful.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=beautiful.ai', dataAiHint: 'design presentation', pricing: 'Paid' },
            { name: 'Canva Presentations', description: 'Design engaging presentations with AI magic.', url: 'https://www.canva.com/presentations/', image: 'https://www.google.com/s2/favicons?sz=128&domain=canva.com', dataAiHint: 'design templates', pricing: 'Freemium' },
        ]
    },
    {
        title: "Productivity & Focus",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Forest', description: 'Stay focused by growing virtual trees.', url: 'https://www.forestapp.cc/', image: 'https://www.google.com/s2/favicons?sz=128&domain=forestapp.cc', dataAiHint: 'focus timer', pricing: 'Freemium' },
            { name: 'Focus To-Do', description: 'Pomodoro Timer & To Do List.', url: 'https://www.focustodo.cn/', image: 'https://www.google.com/s2/favicons?sz=128&domain=focustodo.cn', dataAiHint: 'pomodoro technique', pricing: 'Freemium' },
            { name: 'Study Bunny', description: 'A motivating study timer app.', url: 'https://superbyte.site/studybunny', image: 'https://www.google.com/s2/favicons?sz=128&domain=superbyte.site', dataAiHint: 'cute timer', pricing: 'Free' },
            { name: 'Freedom', description: 'Block distracting websites and apps.', url: 'https://freedom.to/', image: 'https://www.google.com/s2/favicons?sz=128&domain=freedom.to', dataAiHint: 'website blocker', pricing: 'Paid' },
            { name: 'Cold Turkey', description: 'The toughest website blocker on the internet.', url: 'https://getcoldturkey.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=getcoldturkey.com', dataAiHint: 'distraction blocker', pricing: 'Freemium' },
        ]
    },
    {
        title: "Citation & Reference Management",
        icon: <Share2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Zotero', description: 'Your personal research assistant for collecting, citing, and sharing research.', url: 'https://www.zotero.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=zotero.org', dataAiHint: 'reference manager', pricing: 'Free' },
            { name: 'Mendeley', description: 'Reference manager and academic social network.', url: 'https://www.mendeley.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mendeley.com', dataAiHint: 'academic network', pricing: 'Freemium' },
            { name: 'EndNote', description: 'A smarter way to manage your references and bibliographies.', url: 'https://endnote.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=endnote.com', dataAiHint: 'bibliography tool', pricing: 'Paid' },
            { name: 'MyBib', description: 'Free bibliography and citation generator.', url: 'https://www.mybib.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mybib.com', dataAiHint: 'citation generator', pricing: 'Free' },
            { name: 'Citavi', description: 'The all-in-one referencing and knowledge organization tool.', url: 'https://www.citavi.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=citavi.com', dataAiHint: 'knowledge organization', pricing: 'Paid' },
        ]
    },
    {
        title: "Language Learning",
        icon: <Languages className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Duolingo', description: 'Learn a language for free. Fun, effective, and 100% free.', url: 'https://www.duolingo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=duolingo.com', dataAiHint: 'language app', pricing: 'Freemium' },
            { name: 'Babbel', description: 'Language learning that gets you speaking.', url: 'https://www.babbel.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=babbel.com', dataAiHint: 'language conversation', pricing: 'Paid' },
            { name: 'Memrise', description: 'The fastest way to learn a language with real-life content.', url: 'https://www.memrise.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=memrise.com', dataAiHint: 'language learning', pricing: 'Freemium' },
            { name: 'Rosetta Stone', description: 'The proven way to learn a new language.', url: 'https://www.rosettastone.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=rosettastone.com', dataAiHint: 'language immersion', pricing: 'Paid' },
            { name: 'Busuu', description: 'Learn a language with a community of native speakers.', url: 'https://www.busuu.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=busuu.com', dataAiHint: 'native speakers', pricing: 'Freemium' },
        ]
    },
    {
        title: "Math & Science Solvers",
        icon: <FlaskConical className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Photomath', description: 'Scan and solve math problems with step-by-step explanations.', url: 'https://photomath.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=photomath.com', dataAiHint: 'math solver', pricing: 'Freemium' },
            { name: 'Mathway', description: 'Step-by-step algebra, calculus, and more from the most-used math solver.', url: 'https://www.mathway.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mathway.com', dataAiHint: 'algebra solver', pricing: 'Freemium' },
            { name: 'Symbolab', description: 'Math solver with step-by-step solutions for various subjects.', url: 'https://www.symbolab.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=symbolab.com', dataAiHint: 'calculus solver', pricing: 'Freemium' },
            { name: 'WolframAlpha', description: 'A computational knowledge engine for math, science, and more.', url: 'https://www.wolframalpha.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=wolframalpha.com', dataAiHint: 'knowledge engine', pricing: 'Freemium' },
            { name: 'Gauthmath', description: 'Instant math help from real tutors and AI.', url: 'https://www.gauthmath.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=gauthmath.com', dataAiHint: 'math helper', pricing: 'Freemium' },
        ]
    },
    {
        title: "Coding & Programming Help",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'GitHub Copilot', description: 'Your AI pair programmer that assists in writing code.', url: 'https://github.com/features/copilot', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'ai coding', pricing: 'Paid' },
            { name: 'Replit', description: 'An online IDE with AI-powered features to help you code.', url: 'https://replit.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=replit.com', dataAiHint: 'online ide', pricing: 'Freemium' },
            { name: 'Codecademy', description: 'Learn to code with interactive lessons and projects.', url: 'https://www.codecademy.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=codecademy.com', dataAiHint: 'learn to code', pricing: 'Freemium' },
            { name: 'freeCodeCamp', description: 'Learn to code for free. Build projects. Earn certifications.', url: 'https://www.freecodecamp.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=freecodecamp.org', dataAiHint: 'free coding', pricing: 'Free' },
            { name: 'LeetCode', description: 'Platform to help you enhance your skills and prepare for technical interviews.', url: 'https://leetcode.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=leetcode.com', dataAiHint: 'coding interview', pricing: 'Freemium' },
        ]
    },
     {
        title: "Career & Internship Prep",
        icon: <Briefcase className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Kickresume', description: 'AI-powered resume and cover letter builder.', url: 'https://www.kickresume.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=kickresume.com', dataAiHint: 'resume builder', pricing: 'Freemium' },
            { name: 'Rezi', description: 'AI resume builder optimized for applicant tracking systems (ATS).', url: 'https://www.rezi.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=rezi.ai', dataAiHint: 'ats resume', pricing: 'Freemium' },
            { name: 'LinkedIn', description: 'Professional networking platform with job search and learning resources.', url: 'https://www.linkedin.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=linkedin.com', dataAiHint: 'professional network', pricing: 'Freemium' },
            { name: 'Handshake', description: 'The #1 way college students find jobs.', url: 'https://joinhandshake.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=joinhandshake.com', dataAiHint: 'student jobs', pricing: 'Free' },
            { name: 'Big Interview', description: 'AI-powered interview practice platform.', url: 'https://biginterview.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=biginterview.com', dataAiHint: 'interview practice', pricing: 'Paid' },
        ]
    },
    {
        title: "Creative Tools",
        icon: <Palette className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Canva', description: 'Graphic design platform for creating visuals for projects and presentations.', url: 'https://www.canva.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=canva.com', dataAiHint: 'design tool', pricing: 'Freemium' },
            { name: 'Midjourney', description: 'AI art generator for creating images from text prompts.', url: 'https://www.midjourney.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=midjourney.com', dataAiHint: 'ai art', pricing: 'Paid' },
            { name: 'Adobe Express', description: 'Quickly and easily make standout content from thousands of templates.', url: 'https://www.adobe.com/express/', image: 'https://www.google.com/s2/favicons?sz=128&domain=adobe.com', dataAiHint: 'free design', pricing: 'Freemium' },
        ]
    },
    {
        title: "Video & Audio Tools",
        icon: <Video className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Descript', description: 'All-in-one audio & video editor that works like a doc.', url: 'https://www.descript.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=descript.com', dataAiHint: 'video editing', pricing: 'Freemium' },
            { name: 'CapCut', description: 'Free all-in-one video editor for creating incredible videos.', url: 'https://www.capcut.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=capcut.com', dataAiHint: 'mobile video', pricing: 'Free' },
            { name: 'Adobe Podcast', description: 'AI-powered audio recording and editing, great for presentations.', url: 'https://podcast.adobe.com/enhance', image: 'https://www.google.com/s2/favicons?sz=128&domain=adobe.com', dataAiHint: 'audio enhance', pricing: 'Free' },
        ]
    },
    { 
        title: "Plagiarism Checkers", 
        icon: <FileSearch className="w-5 h-5 text-primary" />, 
        tools: [
            { name: 'Turnitin', description: 'Plagiarism detection service for institutions.', url: 'https://www.turnitin.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=turnitin.com', dataAiHint: 'academic integrity', pricing: 'Paid' },
            { name: 'Copyscape', description: 'Online plagiarism checker.', url: 'https://www.copyscape.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=copyscape.com', dataAiHint: 'plagiarism checker', pricing: 'Paid' }
        ] 
    },
    { 
        title: "Transcription Services", 
        icon: <Mic className="w-5 h-5 text-primary" />, 
        tools: [
            { name: 'Otter.ai', description: 'AI meeting assistant that records audio and writes notes.', url: 'https://otter.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=otter.ai', dataAiHint: 'meeting notes', pricing: 'Freemium' },
            { name: 'Happy Scribe', description: 'Transcription & Subtitles Services.', url: 'https://www.happyscribe.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=happyscribe.com', dataAiHint: 'audio transcription', pricing: 'Paid' }
        ] 
    },
    { 
        title: "Digital Whiteboards", 
        icon: <Presentation className="w-5 h-5 text-primary" />, 
        tools: [
            { name: 'Miro', description: 'The online collaborative whiteboard platform.', url: 'https://miro.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=miro.com', dataAiHint: 'online whiteboard', pricing: 'Freemium' },
            { name: 'Mural', description: 'Digital-first visual collaboration.', url: 'https://www.mural.co/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mural.co', dataAiHint: 'visual collaboration', pricing: 'Freemium' }
        ] 
    },
    { 
        title: "Note Organization", 
        icon: <BookOpen className="w-5 h-5 text-primary" />, 
        tools: [
            { name: 'Evernote', description: 'Capture, organize, and share notes from anywhere.', url: 'https://evernote.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=evernote.com', dataAiHint: 'note taking', pricing: 'Freemium' },
            { name: 'GoodNotes', description: 'Digital paper for your notes and ideas.', url: 'https://www.goodnotes.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=goodnotes.com', dataAiHint: 'handwriting notes', pricing: 'Freemium' }
        ] 
    },
    { 
        title: "Mind Mapping", 
        icon: <Brain className="w-5 h-5 text-primary" />, 
        tools: [
            { name: 'XMind', description: 'A full-featured mind mapping and brainstorming tool.', url: 'https://www.xmind.net/', image: 'https://www.google.com/s2/favicons?sz=128&domain=xmind.net', dataAiHint: 'idea mapping', pricing: 'Freemium' },
            { name: 'MindMeister', description: 'Online mind mapping and brainstorming.', url: 'https://www.mindmeister.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mindmeister.com', dataAiHint: 'collaborative mapping', pricing: 'Freemium' }
        ] 
    },
    { 
        title: "Team Collaboration", 
        icon: <Users className="w-5 h-5 text-primary" />, 
        tools: [
            { name: 'Slack', description: 'Team communication and collaboration platform.', url: 'https://slack.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=slack.com', dataAiHint: 'team chat', pricing: 'Freemium' },
            { name: 'Microsoft Teams', description: 'Chat, meet, call, and collaborate.', url: 'https://www.microsoft.com/en-us/microsoft-teams/group-chat-software', image: 'https://www.google.com/s2/favicons?sz=128&domain=microsoft.com', dataAiHint: 'video conferencing', pricing: 'Freemium' }
        ] 
    },
    { 
        title: "Cloud Storage", 
        icon: <File className="w-5 h-5 text-primary" />, 
        tools: [
            { name: 'Google Drive', description: 'Store, share, and collaborate on files.', url: 'https://www.google.com/drive/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'cloud documents', pricing: 'Freemium' },
            { name: 'Dropbox', description: 'Cloud storage and file synchronization.', url: 'https://www.dropbox.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=dropbox.com', dataAiHint: 'file storage', pricing: 'Freemium' }
        ] 
    },
    { 
        title: "Document Sharing", 
        icon: <Share2 className="w-5 h-5 text-primary" />, 
        tools: [
            { name: 'Google Docs', description: 'Create and collaborate on online documents.', url: 'https://docs.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'online documents', pricing: 'Free' }
        ] 
    },
    { 
        title: "Textbook Solutions", 
        icon: <HelpCircle className="w-5 h-5 text-primary" />, 
        tools: [
            { name: 'Chegg Study', description: 'Get step-by-step textbook solutions.', url: 'https://www.chegg.com/study', image: 'https://www.google.com/s2/favicons?sz=128&domain=chegg.com', dataAiHint: getHint('chegg-hw'), pricing: 'Paid' },
            { name: 'Course Hero', description: 'Access study resources, tutoring, and more.', url: 'https://www.coursehero.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=coursehero.com', dataAiHint: getHint('coursehero-hw'), pricing: 'Paid' }
        ] 
    },
    { 
        title: "Online Tutoring Platforms", 
        icon: <GraduationCap className="w-5 h-5 text-primary" />, 
        tools: [
            { name: 'Chegg Tutors', description: 'Get 24/7 on-demand homework help.', url: 'https://www.chegg.com/tutors', image: 'https://www.google.com/s2/favicons?sz=128&domain=chegg.com', dataAiHint: 'homework help', pricing: 'Paid'},
            { name: 'Tutor.com', description: '24/7 online tutoring from The Princeton Review.', url: 'https://www.tutor.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tutor.com', dataAiHint: 'online tutor', pricing: 'Paid'}
        ] 
    },
    { 
        title: "Scholarship Finders", 
        icon: <Search className="w-5 h-5 text-primary" />, 
        tools: [
            { name: 'Scholarships.com', description: 'Find money for college.', url: 'https://www.scholarships.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=scholarships.com', dataAiHint: 'college scholarships', pricing: 'Free'},
            { name: 'Fastweb', description: 'Your connection to scholarships, colleges, jobs and more.', url: 'https://www.fastweb.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=fastweb.com', dataAiHint: 'financial aid', pricing: 'Free'}
        ] 
    },
    { 
        title: "Video Summarizers", 
        icon: <Youtube className="w-5 h-5 text-primary" />, 
        tools: [
            { name: 'Eightify AI', description: 'Summarize YouTube videos with AI.', url: 'https://eightify.app/', image: 'https://www.google.com/s2/favicons?sz=128&domain=eightify.app', dataAiHint: 'youtube summary', pricing: 'Freemium' }
        ] 
    },
    { 
        title: "Project Planners", 
        icon: <Milestone className="w-5 h-5 text-primary" />, 
        tools: [
            { name: 'Trello', description: 'A visual collaboration tool for your team.', url: 'https://trello.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=trello.com', dataAiHint: 'kanban board', pricing: 'Freemium' },
            { name: 'Asana', description: 'Work management for teams.', url: 'https://asana.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=asana.com', dataAiHint: 'team management', pricing: 'Freemium' }
        ] 
    },
    { 
        title: "Resume Builders", 
        icon: <FileText className="w-5 h-5 text-primary" />, 
        tools: [
            { name: 'Kickresume', description: 'AI-powered resume and cover letter builder.', url: 'https://www.kickresume.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=kickresume.com', dataAiHint: 'resume builder', pricing: 'Freemium' },
            { name: 'Rezi', description: 'AI resume builder optimized for applicant tracking systems (ATS).', url: 'https://www.rezi.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=rezi.ai', dataAiHint: 'ats resume', pricing: 'Freemium' }
        ] 
    }
];

