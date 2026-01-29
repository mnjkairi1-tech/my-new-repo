

import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
    Youtube, MessageSquare, BookOpen, FileText, HelpCircle, Book, Zap, Calendar, Brain, Search, Type, Presentation, Wand2, Mic, File, GraduationCap, Scissors, Pen, Share2, Languages, Microscope, TestTube, Dna, FlaskConical, Globe, Calculator, Milestone, Code, Briefcase, Camera, Video, Palette, Music, Bot, Users, BookCopy, FileSearch, FileLock2, GitBranch, Settings, Network, Cpu
} from 'lucide-react';
import type { Tool } from '@/lib/types';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || `https://picsum.photos/seed/${id}/600/400`;
const getHint = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageHint || ``;

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
            { name: 'ChatGPT', description: 'Conversational AI for instant answers and explanations.', url: 'https://chat.openai.com/', image: getImage('chatgpt-assist'), dataAiHint: getHint('chatgpt-assist'), pricing: 'Freemium' },
            { name: 'Perplexity AI', description: 'An answer engine that provides sources for its answers.', url: 'https://www.perplexity.ai/', image: getImage('perplexity-assist'), dataAiHint: getHint('perplexity-assist'), pricing: 'Freemium' },
            { name: 'Socratic by Google', description: 'Learning app to help with homework across subjects.', url: 'https://socratic.org/', image: 'https://picsum.photos/seed/socratic-edu/600/400', dataAiHint: 'homework help', pricing: 'Free' },
            { name: 'Brainly', description: 'Peer-to-peer learning community for students.', url: 'https://brainly.com/', image: 'https://picsum.photos/seed/brainly-edu/600/400', dataAiHint: 'student community', pricing: 'Freemium' },
            { name: 'Khanmigo', description: 'An AI-powered tutor and teaching assistant from Khan Academy.', url: 'https://www.khanacademy.org/khan-labs', image: getImage('khanmigo-assist'), dataAiHint: getHint('khanmigo-assist'), pricing: 'Paid' },
            { name: 'Quizlet Q-Chat', description: 'AI tutor that turns study material into conversations.', url: 'https://quizlet.com/q-chat', image: getImage('qchat-assist'), dataAiHint: getHint('qchat-assist'), pricing: 'Freemium' },
            { name: 'Poe by Quora', description: 'Platform to ask questions and get instant answers from AI bots.', url: 'https://poe.com/', image: getImage('poe-assist'), dataAiHint: getHint('poe-assist'), pricing: 'Freemium' },
            { name: 'Mindgrasp', description: 'Instantly create notes and answer questions from any document or video.', url: 'https://mindgrasp.ai/', image: getImage('mindgrasp-assist'), dataAiHint: getHint('mindgrasp-assist'), pricing: 'Paid' },
            { name: 'Notion AI', description: 'AI features integrated into the Notion workspace for summarizing and brainstorming.', url: 'https://www.notion.so/product/ai', image: getImage('notionai-assist'), dataAiHint: getHint('notionai-assist'), pricing: 'Paid' },
            { name: 'Sharly AI', description: 'AI assistant to chat with and summarize any document.', url: 'https://sharly.ai/', image: getImage('sharlyai-assist'), dataAiHint: getHint('sharlyai-assist'), pricing: 'Freemium' },
        ]
    },
    {
        title: "Writing & Essay Tools",
        icon: <Pen className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Grammarly', description: 'AI-powered writing assistant for grammar and style.', url: 'https://www.grammarly.com/', image: 'https://picsum.photos/seed/grammarly-writing/600/400', dataAiHint: 'grammar check', pricing: 'Freemium' },
            { name: 'QuillBot', description: 'Paraphrasing and summarizing tool to improve your writing.', url: 'https://quillbot.com/', image: 'https://picsum.photos/seed/quillbot-para/600/400', dataAiHint: 'paraphraser', pricing: 'Freemium' },
            { name: 'Hemingway Editor', description: 'Makes your writing bold and clear.', url: 'https://hemingwayapp.com/', image: 'https://picsum.photos/seed/hemingwayapp/600/400', dataAiHint: 'clarity checker', pricing: 'Free' },
            { name: 'Jasper', description: 'AI content writer for essays, blogs, and more.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-writing/600/400', dataAiHint: 'ai writer', pricing: 'Paid' },
            { name: 'Caktus AI', description: 'AI tool designed specifically for student writing tasks.', url: 'https://www.caktus.ai/', image: 'https://picsum.photos/seed/caktus-writing/600/400', dataAiHint: 'student ai', pricing: 'Paid' },
            { name: 'Jenni AI', description: 'The AI assistant for students and researchers.', url: 'https://jenni.ai/', image: 'https://picsum.photos/seed/jenniai/600/400', dataAiHint: 'academic writing', pricing: 'Freemium' },
            { name: 'Paperpal', description: 'AI-powered academic writing assistant.', url: 'https://paperpal.com/', image: 'https://picsum.photos/seed/paperpal/600/400', dataAiHint: 'research writing', pricing: 'Freemium' },
            { name: 'Wordtune', description: 'Rewrite and rephrase your sentences.', url: 'https://www.wordtune.com/', image: 'https://picsum.photos/seed/wordtune-para/600/400', dataAiHint: 'sentence rewriter', pricing: 'Freemium' },
        ]
    },
    {
        title: "Research & Information Gathering",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Elicit', description: 'The AI Research Assistant to automate research workflows.', url: 'https://elicit.org/', image: 'https://picsum.photos/seed/elicit-rk/600/400', dataAiHint: 'automate research', pricing: 'Freemium' },
            { name: 'Research Rabbit', description: 'A new way to discover and visualize research papers.', url: 'https://www.researchrabbit.ai/', image: 'https://picsum.photos/seed/researchrabbit-rk/600/400', dataAiHint: 'literature map', pricing: 'Free' },
            { name: 'Google Scholar', description: 'Provides a simple way to broadly search for scholarly literature.', url: 'https://scholar.google.com/', image: 'https://picsum.photos/seed/googlescholar-rk/600/400', dataAiHint: 'academic search', pricing: 'Free' },
            { name: 'Semantic Scholar', description: 'AI-powered research tool for scientific literature.', url: 'https://www.semanticscholar.org/', image: 'https://picsum.photos/seed/semanticscholar-rk/600/400', dataAiHint: 'scientific literature', pricing: 'Free' },
            { name: 'Connected Papers', description: 'A visual tool to find and explore academic papers.', url: 'https://www.connectedpapers.com/', image: 'https://picsum.photos/seed/connectedpapers-rk/600/400', dataAiHint: 'visual explorer', pricing: 'Free' },
        ]
    },
    {
        title: "Summarization Tools",
        icon: <BookCopy className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Scholarcy', description: 'AI-powered article summarizer for students and researchers.', url: 'https://www.scholarcy.com/', image: 'https://picsum.photos/seed/scholarcy-sum-rk/600/400', dataAiHint: 'research paper', pricing: 'Freemium' },
            { name: 'Humata AI', description: 'Your AI for files. Ask questions, get answers, and summarize.', url: 'https://www.humata.ai/', image: 'https://picsum.photos/seed/humataai/600/400', dataAiHint: 'document ai', pricing: 'Freemium' },
            { name: 'ChatPDF', description: 'Chat with any PDF to get summaries and answers.', url: 'https://www.chatpdf.com/', image: 'https://picsum.photos/seed/chatpdf-sum/600/400', dataAiHint: 'pdf conversation', pricing: 'Freemium' },
            { name: 'SMMRY', description: 'Summarize articles, text, and websites.', url: 'https://smmry.com/', image: 'https://picsum.photos/seed/smmry-summarizer/600/400', dataAiHint: 'article summarizer', pricing: 'Free' },
            { name: 'Eightify AI', description: 'Summarize YouTube videos with AI.', url: 'https://eightify.app/', image: 'https://picsum.photos/seed/eightify/600/400', dataAiHint: 'youtube summary', pricing: 'Freemium' },
        ]
    },
    {
        title: "Flashcards & Exam Revision",
        icon: <Book className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Quizlet', description: 'Learn with flashcards, games, and AI-powered study modes.', url: 'https://quizlet.com/', image: 'https://picsum.photos/seed/quizlet/600/400', dataAiHint: 'study sets', pricing: 'Freemium' },
            { name: 'Anki', description: 'Powerful, intelligent flashcards using spaced repetition.', url: 'https://apps.ankiweb.net/', image: 'https://picsum.photos/seed/anki/600/400', dataAiHint: 'spaced repetition', pricing: 'Free' },
            { name: 'Knowt', description: 'AI-powered flashcards and study guides from your notes.', url: 'https://knowt.io/', image: getImage('knowt-assist'), dataAiHint: getHint('knowt-assist'), pricing: 'Freemium' },
            { name: 'StudySmarter', description: 'All-in-one learning platform with flashcards and quizzes.', url: 'https://www.studysmarter.us/', image: 'https://picsum.photos/seed/studysmarter/600/400', dataAiHint: 'learning platform', pricing: 'Free' },
            { name: 'Cramly', description: 'AI study tools including flashcard creation.', url: 'https://www.cramly.ai/', image: getImage('cramly'), dataAiHint: getHint('cramly'), pricing: 'Freemium' },
        ]
    },
    {
        title: "Presentation & Slides",
        icon: <Presentation className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Tome', description: 'The AI-powered storytelling format for presentations.', url: 'https://tome.app/', image: 'https://picsum.photos/seed/tome-prez/600/400', dataAiHint: 'ai presentation', pricing: 'Freemium' },
            { name: 'Gamma', description: 'A new medium for presenting ideas, powered by AI.', url: 'https://gamma.app/', image: 'https://picsum.photos/seed/gamma-prez/600/400', dataAiHint: 'ai slides', pricing: 'Freemium' },
            { name: 'SlidesAI.io', description: 'Create Presentation Slides with AI in seconds.', url: 'https://www.slidesai.io/', image: 'https://picsum.photos/seed/slidesai/600/400', dataAiHint: 'google slides', pricing: 'Freemium' },
            { name: 'Beautiful.ai', description: 'Presentation software that designs for you.', url: 'https://www.beautiful.ai/', image: 'https://picsum.photos/seed/beautifulai-prez/600/400', dataAiHint: 'design presentation', pricing: 'Paid' },
            { name: 'Canva Presentations', description: 'Design engaging presentations with AI magic.', url: 'https://www.canva.com/presentations/', image: 'https://picsum.photos/seed/canva-prez/600/400', dataAiHint: 'design templates', pricing: 'Freemium' },
        ]
    },
    {
        title: "Productivity & Focus",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Forest', description: 'Stay focused by growing virtual trees.', url: 'https://www.forestapp.cc/', image: 'https://picsum.photos/seed/forest-app/600/400', dataAiHint: 'focus timer', pricing: 'Freemium' },
            { name: 'Focus To-Do', description: 'Pomodoro Timer & To Do List.', url: 'https://www.focustodo.cn/', image: 'https://picsum.photos/seed/focustodo/600/400', dataAiHint: 'pomodoro technique', pricing: 'Freemium' },
            { name: 'Study Bunny', description: 'A motivating study timer app.', url: 'https://superbyte.site/studybunny', image: 'https://picsum.photos/seed/studybunny/600/400', dataAiHint: 'cute timer', pricing: 'Free' },
            { name: 'Freedom', description: 'Block distracting websites and apps.', url: 'https://freedom.to/', image: 'https://picsum.photos/seed/freedom-focus/600/400', dataAiHint: 'website blocker', pricing: 'Paid' },
            { name: 'Cold Turkey', description: 'The toughest website blocker on the internet.', url: 'https://getcoldturkey.com/', image: 'https://picsum.photos/seed/coldturkey-focus/600/400', dataAiHint: 'distraction blocker', pricing: 'Freemium' },
        ]
    },
    {
        title: "Citation & Reference Management",
        icon: <Share2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Zotero', description: 'Your personal research assistant for collecting, citing, and sharing research.', url: 'https://www.zotero.org/', image: 'https://picsum.photos/seed/zotero-ref-rk/600/400', dataAiHint: 'reference manager', pricing: 'Free' },
            { name: 'Mendeley', description: 'Reference manager and academic social network.', url: 'https://www.mendeley.com/', image: 'https://picsum.photos/seed/mendeley-review/600/400', dataAiHint: 'academic network', pricing: 'Freemium' },
            { name: 'EndNote', description: 'A smarter way to manage your references and bibliographies.', url: 'https://endnote.com/', image: 'https://picsum.photos/seed/endnote-ref/600/400', dataAiHint: 'bibliography tool', pricing: 'Paid' },
            { name: 'MyBib', description: 'Free bibliography and citation generator.', url: 'https://www.mybib.com/', image: 'https://picsum.photos/seed/mybib-ref/600/400', dataAiHint: 'citation generator', pricing: 'Free' },
            { name: 'Citavi', description: 'The all-in-one referencing and knowledge organization tool.', url: 'https://www.citavi.com/', image: 'https://picsum.photos/seed/citavi-ref/600/400', dataAiHint: 'knowledge organization', pricing: 'Paid' },
        ]
    },
    {
        title: "Language Learning",
        icon: <Languages className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Duolingo', description: 'Learn a language for free. Fun, effective, and 100% free.', url: 'https://www.duolingo.com/', image: 'https://picsum.photos/seed/duolingo-edu/600/400', dataAiHint: 'language app', pricing: 'Freemium' },
            { name: 'Babbel', description: 'Language learning that gets you speaking.', url: 'https://www.babbel.com/', image: 'https://picsum.photos/seed/babbel-edu/600/400', dataAiHint: 'language conversation', pricing: 'Paid' },
            { name: 'Memrise', description: 'The fastest way to learn a language with real-life content.', url: 'https://www.memrise.com/', image: 'https://picsum.photos/seed/memrise/600/400', dataAiHint: 'language learning', pricing: 'Freemium' },
            { name: 'Rosetta Stone', description: 'The proven way to learn a new language.', url: 'https://www.rosettastone.com/', image: 'https://picsum.photos/seed/rosettastone/600/400', dataAiHint: 'language immersion', pricing: 'Paid' },
            { name: 'Busuu', description: 'Learn a language with a community of native speakers.', url: 'https://www.busuu.com/', image: 'https://picsum.photos/seed/busuu/600/400', dataAiHint: 'native speakers', pricing: 'Freemium' },
        ]
    },
    {
        title: "Math & Science Solvers",
        icon: <FlaskConical className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Photomath', description: 'Scan and solve math problems with step-by-step explanations.', url: 'https://photomath.com/', image: 'https://picsum.photos/seed/photomath/600/400', dataAiHint: 'math solver', pricing: 'Freemium' },
            { name: 'Mathway', description: 'Step-by-step algebra, calculus, and more from the most-used math solver.', url: 'https://www.mathway.com/', image: 'https://picsum.photos/seed/mathway/600/400', dataAiHint: 'algebra solver', pricing: 'Freemium' },
            { name: 'Symbolab', description: 'Math solver with step-by-step solutions for various subjects.', url: 'https://www.symbolab.com/', image: 'https://picsum.photos/seed/symbolab/600/400', dataAiHint: 'calculus solver', pricing: 'Freemium' },
            { name: 'WolframAlpha', description: 'A computational knowledge engine for math, science, and more.', url: 'https://www.wolframalpha.com/', image: 'https://picsum.photos/seed/wolframalpha/600/400', dataAiHint: 'knowledge engine', pricing: 'Freemium' },
            { name: 'Gauthmath', description: 'Instant math help from real tutors and AI.', url: 'https://www.gauthmath.com/', image: 'https://picsum.photos/seed/gauthmath-hw/600/400', dataAiHint: 'math helper', pricing: 'Freemium' },
        ]
    },
    {
        title: "Coding & Programming Help",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'GitHub Copilot', description: 'Your AI pair programmer that assists in writing code.', url: 'https://github.com/features/copilot', image: 'https://picsum.photos/seed/copilot-dev/600/400', dataAiHint: 'ai coding', pricing: 'Paid' },
            { name: 'Replit', description: 'An online IDE with AI-powered features to help you code.', url: 'https://replit.com/', image: 'https://picsum.photos/seed/replit-gen/600/400', dataAiHint: 'online ide', pricing: 'Freemium' },
            { name: 'Codecademy', description: 'Learn to code with interactive lessons and projects.', url: 'https://www.codecademy.com/', image: 'https://picsum.photos/seed/codecademy/600/400', dataAiHint: 'learn to code', pricing: 'Freemium' },
            { name: 'freeCodeCamp', description: 'Learn to code for free. Build projects. Earn certifications.', url: 'https://www.freecodecamp.org/', image: 'https://picsum.photos/seed/freecodecamp/600/400', dataAiHint: 'free coding', pricing: 'Free' },
            { name: 'LeetCode', description: 'Platform to help you enhance your skills and prepare for technical interviews.', url: 'https://leetcode.com/', image: 'https://picsum.photos/seed/leetcode/600/400', dataAiHint: 'coding interview', pricing: 'Freemium' },
        ]
    },
     {
        title: "Career & Internship Prep",
        icon: <Briefcase className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Kickresume', description: 'AI-powered resume and cover letter builder.', url: 'https://www.kickresume.com/', image: 'https://picsum.photos/seed/kickresume/600/400', dataAiHint: 'resume builder', pricing: 'Freemium' },
            { name: 'Rezi', description: 'AI resume builder optimized for applicant tracking systems (ATS).', url: 'https://www.rezi.ai/', image: 'https://picsum.photos/seed/rezi/600/400', dataAiHint: 'ats resume', pricing: 'Freemium' },
            { name: 'LinkedIn', description: 'Professional networking platform with job search and learning resources.', url: 'https://www.linkedin.com/', image: 'https://picsum.photos/seed/linkedin-career/600/400', dataAiHint: 'professional network', pricing: 'Freemium' },
            { name: 'Handshake', description: 'The #1 way college students find jobs.', url: 'https://joinhandshake.com/', image: 'https://picsum.photos/seed/handshake-career/600/400', dataAiHint: 'student jobs', pricing: 'Free' },
            { name: 'Big Interview', description: 'AI-powered interview practice platform.', url: 'https://biginterview.com/', image: 'https://picsum.photos/seed/biginterview/600/400', dataAiHint: 'interview practice', pricing: 'Paid' },
        ]
    },
    {
        title: "Creative Tools",
        icon: <Palette className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Canva', description: 'Graphic design platform for creating visuals for projects and presentations.', url: 'https://www.canva.com/', image: 'https://picsum.photos/seed/canva-sm/600/400', dataAiHint: 'design tool', pricing: 'Freemium' },
            { name: 'Midjourney', description: 'AI art generator for creating images from text prompts.', url: 'https://www.midjourney.com/', image: 'https://picsum.photos/seed/midjourney-generate/600/400', dataAiHint: 'ai art', pricing: 'Paid' },
            { name: 'Adobe Express', description: 'Quickly and easily make standout content from thousands of templates.', url: 'https://www.adobe.com/express/', image: 'https://picsum.photos/seed/adobe-express/600/400', dataAiHint: 'free design', pricing: 'Freemium' },
        ]
    },
    {
        title: "Video & Audio Tools",
        icon: <Video className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Descript', description: 'All-in-one audio & video editor that works like a doc.', url: 'https://www.descript.com/', image: 'https://picsum.photos/seed/descript-notes/600/400', dataAiHint: 'video editing', pricing: 'Freemium' },
            { name: 'CapCut', description: 'Free all-in-one video editor for creating incredible videos.', url: 'https://www.capcut.com/', image: 'https://picsum.photos/seed/capcut-vedit/600/400', dataAiHint: 'mobile video', pricing: 'Free' },
            { name: 'Adobe Podcast', description: 'AI-powered audio recording and editing, great for presentations.', url: 'https://podcast.adobe.com/enhance', image: 'https://picsum.photos/seed/adobe-podcast/600/400', dataAiHint: 'audio enhance', pricing: 'Free' },
        ]
    },
    { 
        title: "Plagiarism Checkers", 
        icon: <FileSearch className="w-5 h-5 text-primary" />, 
        tools: [
            { name: 'Turnitin', description: 'Plagiarism detection service for institutions.', url: 'https://www.turnitin.com/', image: 'https://picsum.photos/seed/turnitin/600/400', dataAiHint: 'academic integrity', pricing: 'Paid' },
            { name: 'Copyscape', description: 'Online plagiarism checker.', url: 'https://www.copyscape.com/', image: 'https://picsum.photos/seed/copyscape/600/400', dataAiHint: 'plagiarism checker', pricing: 'Paid' }
        ] 
    },
    { 
        title: "Transcription Services", 
        icon: <Mic className="w-5 h-5 text-primary" />, 
        tools: [
            { name: 'Otter.ai', description: 'AI meeting assistant that records audio and writes notes.', url: 'https://otter.ai/', image: 'https://picsum.photos/seed/otterai-meeting/600/400', dataAiHint: 'meeting notes', pricing: 'Freemium' },
            { name: 'Happy Scribe', description: 'Transcription & Subtitles Services.', url: 'https://www.happyscribe.com/', image: 'https://picsum.photos/seed/happyscribe/600/400', dataAiHint: 'audio transcription', pricing: 'Paid' }
        ] 
    },
    { 
        title: "Digital Whiteboards", 
        icon: <Presentation className="w-5 h-5 text-primary" />, 
        tools: [
            { name: 'Miro', description: 'The online collaborative whiteboard platform.', url: 'https://miro.com/', image: 'https://picsum.photos/seed/miro-mindmap/600/400', dataAiHint: 'online whiteboard', pricing: 'Freemium' },
            { name: 'Mural', description: 'Digital-first visual collaboration.', url: 'https://www.mural.co/', image: 'https://picsum.photos/seed/mural-whiteboard/600/400', dataAiHint: 'visual collaboration', pricing: 'Freemium' }
        ] 
    },
    { 
        title: "Note Organization", 
        icon: <BookOpen className="w-5 h-5 text-primary" />, 
        tools: [
            { name: 'Evernote', description: 'Capture, organize, and share notes from anywhere.', url: 'https://evernote.com/', image: 'https://picsum.photos/seed/evernote-notes-prod/600/400', dataAiHint: 'note taking', pricing: 'Freemium' },
            { name: 'GoodNotes', description: 'Digital paper for your notes and ideas.', url: 'https://www.goodnotes.com/', image: 'https://picsum.photos/seed/goodnotes-prod/600/400', dataAiHint: 'handwriting notes', pricing: 'Freemium' }
        ] 
    },
    { 
        title: "Mind Mapping", 
        icon: <Brain className="w-5 h-5 text-primary" />, 
        tools: [
            { name: 'XMind', description: 'A full-featured mind mapping and brainstorming tool.', url: 'https://www.xmind.net/', image: 'https://picsum.photos/seed/xmind-mindmap/600/400', dataAiHint: 'idea mapping', pricing: 'Freemium' },
            { name: 'MindMeister', description: 'Online mind mapping and brainstorming.', url: 'https://www.mindmeister.com/', image: 'https://picsum.photos/seed/mindmeister-mindmap/600/400', dataAiHint: 'collaborative mapping', pricing: 'Freemium' }
        ] 
    },
    { 
        title: "Team Collaboration", 
        icon: <Users className="w-5 h-5 text-primary" />, 
        tools: [
            { name: 'Slack', description: 'Team communication and collaboration platform.', url: 'https://slack.com/', image: 'https://picsum.photos/seed/slack-collab/600/400', dataAiHint: 'team chat', pricing: 'Freemium' },
            { name: 'Microsoft Teams', description: 'Chat, meet, call, and collaborate.', url: 'https://www.microsoft.com/en-us/microsoft-teams/group-chat-software', image: 'https://picsum.photos/seed/msteams-collab/600/400', dataAiHint: 'video conferencing', pricing: 'Freemium' }
        ] 
    },
    { 
        title: "Cloud Storage", 
        icon: <File className="w-5 h-5 text-primary" />, 
        tools: [
            { name: 'Google Drive', description: 'Store, share, and collaborate on files.', url: 'https://www.google.com/drive/', image: 'https://picsum.photos/seed/gdrive-storage/600/400', dataAiHint: 'cloud documents', pricing: 'Freemium' },
            { name: 'Dropbox', description: 'Cloud storage and file synchronization.', url: 'https://www.dropbox.com/', image: 'https://picsum.photos/seed/dropbox-storage/600/400', dataAiHint: 'file storage', pricing: 'Freemium' }
        ] 
    },
    { 
        title: "Document Sharing", 
        icon: <Share2 className="w-5 h-5 text-primary" />, 
        tools: [
            { name: 'Google Docs', description: 'Create and collaborate on online documents.', url: 'https://docs.google.com/', image: 'https://picsum.photos/seed/gdocs/600/400', dataAiHint: 'online documents', pricing: 'Free' }
        ] 
    },
    { 
        title: "Textbook Solutions", 
        icon: <HelpCircle className="w-5 h-5 text-primary" />, 
        tools: [
            { name: 'Chegg Study', description: 'Get step-by-step textbook solutions.', url: 'https://www.chegg.com/study', image: getImage('chegg-hw'), dataAiHint: getHint('chegg-hw'), pricing: 'Paid' },
            { name: 'Course Hero', description: 'Access study resources, tutoring, and more.', url: 'https://www.coursehero.com/', image: getImage('coursehero-hw'), dataAiHint: getHint('coursehero-hw'), pricing: 'Paid' }
        ] 
    },
    { 
        title: "Online Tutoring Platforms", 
        icon: <GraduationCap className="w-5 h-5 text-primary" />, 
        tools: [
            { name: 'Chegg Tutors', description: 'Get 24/7 on-demand homework help.', url: 'https://www.chegg.com/tutors', image: 'https://picsum.photos/seed/chegg-tutor/600/400', dataAiHint: 'homework help', pricing: 'Paid'},
            { name: 'Tutor.com', description: '24/7 online tutoring from The Princeton Review.', url: 'https://www.tutor.com/', image: 'https://picsum.photos/seed/tutordotcom/600/400', dataAiHint: 'online tutor', pricing: 'Paid'}
        ] 
    },
    { 
        title: "Scholarship Finders", 
        icon: <Search className="w-5 h-5 text-primary" />, 
        tools: [
            { name: 'Scholarships.com', description: 'Find money for college.', url: 'https://www.scholarships.com/', image: 'https://picsum.photos/seed/scholarshipscom/600/400', dataAiHint: 'college scholarships', pricing: 'Free'},
            { name: 'Fastweb', description: 'Your connection to scholarships, colleges, jobs and more.', url: 'https://www.fastweb.com/', image: 'https://picsum.photos/seed/fastweb/600/400', dataAiHint: 'financial aid', pricing: 'Free'}
        ] 
    },
    { 
        title: "Video Summarizers", 
        icon: <Youtube className="w-5 h-5 text-primary" />, 
        tools: [
            { name: 'Eightify AI', description: 'Summarize YouTube videos with AI.', url: 'https://eightify.app/', image: 'https://picsum.photos/seed/eightify/600/400', dataAiHint: 'youtube summary', pricing: 'Freemium' }
        ] 
    },
    { 
        title: "Project Planners", 
        icon: <Milestone className="w-5 h-5 text-primary" />, 
        tools: [
            { name: 'Trello', description: 'A visual collaboration tool for your team.', url: 'https://trello.com/', image: 'https://picsum.photos/seed/trello-fl-pm/600/400', dataAiHint: 'kanban board', pricing: 'Freemium' },
            { name: 'Asana', description: 'Work management for teams.', url: 'https://asana.com/', image: 'https://picsum.photos/seed/asana-pm-prod/600/400', dataAiHint: 'team management', pricing: 'Freemium' }
        ] 
    },
    { 
        title: "Resume Builders", 
        icon: <FileText className="w-5 h-5 text-primary" />, 
        tools: [
            { name: 'Kickresume', description: 'AI-powered resume and cover letter builder.', url: 'https://www.kickresume.com/', image: 'https://picsum.photos/seed/kickresume/600/400', dataAiHint: 'resume builder', pricing: 'Freemium' },
            { name: 'Rezi', description: 'AI resume builder optimized for applicant tracking systems (ATS).', url: 'https://www.rezi.ai/', image: 'https://picsum.photos/seed/rezi/600/400', dataAiHint: 'ats resume', pricing: 'Freemium' }
        ] 
    }
];
