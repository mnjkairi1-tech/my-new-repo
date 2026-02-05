
'use client';

import React from 'react';
import { 
    BrainCircuit, BookOpen, Search, BookCopy, GraduationCap, Bookmark, Combine, CheckCircle2, Database,
    Globe, Users, TrendingUp, BarChart, Lightbulb, StickyNote, Book, FileSearch, Milestone,
    MessageSquare, Zap, TestTube, Code, GitBranch, Settings, Network, Cpu, File,
    FileText, UserCog, Link2, GitPullRequest, Hand, Shield, Scale, Video, Pencil
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

export const researchKnowledgeToolData: ToolCategory[] = [
    {
        title: "AI Research Assistants",
        icon: <BrainCircuit className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Elicit', description: 'The AI Research Assistant to automate research workflows.', url: 'https://elicit.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=elicit.org', dataAiHint: 'automate research', pricing: 'Freemium' },
            { name: 'Perplexity AI', description: 'An answer engine for discovering and sharing knowledge.', url: 'https://www.perplexity.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=perplexity.ai', dataAiHint: 'answer engine', pricing: 'Freemium' },
            { name: 'Research Rabbit', description: 'Your personal research assistant for exploring papers.', url: 'https://www.researchrabbit.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=researchrabbit.ai', dataAiHint: 'literature map', pricing: 'Free' },
            { name: 'ChatGPT', description: 'Conversational AI that can assist with brainstorming and summarizing.', url: 'https://chat.openai.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=openai.com', dataAiHint: 'ai conversation', pricing: 'Freemium' },
            { name: 'Consensus', description: 'An AI search engine for research.', url: 'https://consensus.app/', image: 'https://www.google.com/s2/favicons?sz=128&domain=consensus.app', dataAiHint: 'research search', pricing: 'Freemium' },
            { name: 'Scite', description: 'See how research has been cited with Smart Citations.', url: 'https://scite.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=scite.ai', dataAiHint: 'smart citations', pricing: 'Freemium' },
            { name: 'Humata AI', description: 'Your AI for files. Ask questions, get answers.', url: 'https://www.humata.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=humata.ai', dataAiHint: 'document ai', pricing: 'Freemium' },
            { name: 'Keenious', description: 'An AI that helps you find relevant research.', url: 'https://keenious.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=keenious.com', dataAiHint: 'relevant research', pricing: 'Freemium' },
            { name: 'Iris.ai', description: 'The AI-powered Science Assistant.', url: 'https://iris.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=iris.ai', dataAiHint: 'science assistant', pricing: 'Paid' },
            { name: 'You.com', description: 'AI chatbot and search engine.', url: 'https://you.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=you.com', dataAiHint: 'search engine', pricing: 'Free' },
            { name: 'Arxiv Sanity Preserver', description: 'Web interface for browsing and searching arXiv papers.', url: 'http://www.arxiv-sanity.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=arxiv-sanity.com', dataAiHint: 'arxiv browser', pricing: 'Free' },
            { name: 'RDiscovery', description: 'AI-powered academic research paper reader.', url: 'https://discovery.researcher.life/', image: 'https://www.google.com/s2/favicons?sz=128&domain=researcher.life', dataAiHint: 'academic reader', pricing: 'Freemium' },
            { name: 'Lateral', description: 'AI-powered tool for reading and organizing research.', url: 'https://www.lateral.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lateral.io', dataAiHint: 'research organizer', pricing: 'Paid' },
            { name: 'Petal', description: 'AI powered research tool for medical literature.', url: 'https://petal.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=petal.org', dataAiHint: 'medical research', pricing: 'Free' },
            { name: 'Unsilio', description: 'AI solutions for scholarly publishing.', url: 'https://unsilo.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=unsilo.ai', dataAiHint: 'scholarly ai', pricing: 'Paid' },
            { name: 'Sourcely', description: 'AI-powered tool to find academic sources.', url: 'https://www.sourcely.net/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sourcely.net', dataAiHint: 'academic sources', pricing: 'Free' },
            { name: 'Jenni AI', description: 'The AI assistant for students and researchers.', url: 'https://jenni.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=jenni.ai', dataAiHint: 'academic writing', pricing: 'Freemium' },
            { name: 'Paperpal', description: 'AI-powered academic writing assistant.', url: 'https://paperpal.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=paperpal.com', dataAiHint: 'research writing', pricing: 'Freemium' },
            { name: 'Claude', description: 'A next-generation AI assistant for complex tasks.', url: 'https://claude.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=claude.ai', dataAiHint: 'anthropic ai', pricing: 'Freemium' },
            { name: 'Explainpaper', description: 'Upload a research paper, get an explanation.', url: 'https://www.explainpaper.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=explainpaper.com', dataAiHint: 'paper explainer', pricing: 'Free' }
        ]
    },
    {
        title: "Knowledge Management Tools",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Obsidian', description: 'A powerful knowledge base on top of a local folder of plain text files.', url: 'https://obsidian.md/', image: 'https://www.google.com/s2/favicons?sz=128&domain=obsidian.md', dataAiHint: 'second brain', pricing: 'Free' },
            { name: 'Roam Research', description: 'A note-taking tool for networked thought.', url: 'https://roamresearch.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=roamresearch.com', dataAiHint: 'networked thought', pricing: 'Paid' },
            { name: 'Logseq', description: 'A privacy-first, open-source knowledge base.', url: 'https://logseq.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=logseq.com', dataAiHint: 'open source knowledge', pricing: 'Free' },
            { name: 'Notion', description: 'The all-in-one workspace for notes, tasks, wikis, and databases.', url: 'https://www.notion.so/', image: 'https://www.google.com/s2/favicons?sz=128&domain=notion.so', dataAiHint: 'workspace app', pricing: 'Freemium' },
            { name: 'Confluence', description: 'Team workspace for knowledge and collaboration.', url: 'https://www.atlassian.com/software/confluence', image: 'https://www.google.com/s2/favicons?sz=128&domain=atlassian.com', dataAiHint: 'team wiki', pricing: 'Freemium' },
            { name: 'Mem.ai', description: 'The self-organizing workspace.', url: 'https://mem.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mem.ai', dataAiHint: 'ai workspace', pricing: 'Freemium' },
            { name: 'MyMind', description: 'The extension for your mind. A private place to store your digital memories.', url: 'https://mymind.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mymind.com', dataAiHint: 'private search', pricing: 'Paid' },
            { name: 'Guru', description: 'A knowledge management solution that works in your workflow.', url: 'https://www.getguru.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=getguru.com', dataAiHint: 'company wiki', pricing: 'Freemium' },
            { name: 'Slab', description: 'A knowledge hub for the modern workplace.', url: 'https://slab.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=slab.com', dataAiHint: 'modern workplace', pricing: 'Freemium' },
            { name: 'GitBook', description: 'Documentation, made easy.', url: 'https://www.gitbook.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=gitbook.com', dataAiHint: 'docs platform', pricing: 'Freemium' },
            { name: 'TheBrain', description: 'The ultimate digital memory and mind mapping software.', url: 'https://www.thebrain.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=thebrain.com', dataAiHint: 'mind mapping', pricing: 'Freemium' },
            { name: 'TiddlyWiki', description: 'A non-linear personal web notebook.', url: 'https://tiddlywiki.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tiddlywiki.com', dataAiHint: 'personal wiki', pricing: 'Free' },
            { name: 'Tettra', description: 'A simple, smart wiki for your team.', url: 'https://tettra.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tettra.com', dataAiHint: 'internal wiki', pricing: 'Freemium' },
            { name: 'Nuclino', description: 'A modern, simple, and blazingly fast wiki for teams.', url: 'https://www.nuclino.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=nuclino.com', dataAiHint: 'team knowledge', pricing: 'Freemium' },
            { name: 'Bloomfire', description: 'Knowledge engagement platform.', url: 'https://bloomfire.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=bloomfire.com', dataAiHint: 'knowledge sharing', pricing: 'Paid' },
            { name: 'Slite', description: 'The fastest way to share knowledge that sticks.', url: 'https://slite.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=slite.com', dataAiHint: 'team communication', pricing: 'Freemium' },
            { name: 'Anytype', description: 'A local-first, p2p, and open-source tool for thought.', url: 'https://anytype.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=anytype.io', dataAiHint: 'local-first', pricing: 'Free' },
            { name: 'Capacities', description: 'A studio for your mind.', url: 'https://capacities.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=capacities.io', dataAiHint: 'networked notes', pricing: 'Freemium' },
            { name: 'Heptabase', description: 'A visual note-taking tool for learning complex topics.', url: 'https://heptabase.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=heptabase.com', dataAiHint: 'visual learning', pricing: 'Paid' },
            { name: 'Hypernotes', description: 'A note-taking app from the makers of Zenkit.', url: 'https://zenkit.com/en/hypernotes/', image: 'https://www.google.com/s2/favicons?sz=128&domain=zenkit.com', dataAiHint: 'knowledge creation', pricing: 'Freemium' },
        ]
    },
    {
        title: "Information Retrieval",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Scholar', description: 'Broadly search for scholarly literature across many disciplines.', url: 'https://scholar.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'academic search', pricing: 'Free' },
            { name: 'Semantic Scholar', description: 'AI-powered research tool for scientific literature.', url: 'https://www.semanticscholar.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=semanticscholar.org', dataAiHint: 'scientific literature', pricing: 'Free' },
            { name: 'PubMed', description: 'Biomedical literature from MEDLINE, life science journals, and online books.', url: 'https://pubmed.ncbi.nlm.nih.gov/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ncbi.nlm.nih.gov', dataAiHint: 'medical literature', pricing: 'Free' },
            { name: 'WolframAlpha', description: 'A computational knowledge engine for expert-level answers.', url: 'https://www.wolframalpha.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=wolframalpha.com', dataAiHint: 'computational engine', pricing: 'Freemium' },
            { name: 'Scopus', description: 'A large abstract and citation database of peer-reviewed literature.', url: 'https://www.scopus.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=scopus.com', dataAiHint: 'citation database', pricing: 'Paid' },
            { name: 'Web of Science', description: 'Global citation database.', url: 'https://www.webofscience.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=webofscience.com', dataAiHint: 'research database', pricing: 'Paid' },
            { name: 'JSTOR', description: 'A digital library of academic journals, books, and primary sources.', url: 'https://www.jstor.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=jstor.org', dataAiHint: 'digital library', pricing: 'Paid' },
            { name: 'arXiv', description: 'Open-access archive for scholarly articles in physics, mathematics, and computer science.', url: 'https://arxiv.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=arxiv.org', dataAiHint: 'research preprints', pricing: 'Free' },
            { name: 'Dimensions', description: 'The world’s largest linked research information dataset.', url: 'https://www.dimensions.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=dimensions.ai', dataAiHint: 'linked research', pricing: 'Freemium' },
            { name: 'Lens.org', description: 'Free and open patent and scholarly search.', url: 'https://www.lens.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lens.org', dataAiHint: 'patent search', pricing: 'Free' },
            { name: 'Microsoft Academic', description: 'Semantic search engine for academic papers (discontinued but influential).', url: 'https://academic.microsoft.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=microsoft.com', dataAiHint: 'academic graph', pricing: 'Free' },
            { name: 'BASE', description: 'One of the world\'s most voluminous search engines for academic web resources.', url: 'https://www.base-search.net/', image: 'https://www.google.com/s2/favicons?sz=128&domain=base-search.net', dataAiHint: 'academic web', pricing: 'Free' },
            { name: 'CORE', description: 'The world’s largest collection of open access research papers.', url: 'https://core.ac.uk/', image: 'https://www.google.com/s2/favicons?sz=128&domain=core.ac.uk', dataAiHint: 'open access', pricing: 'Free' },
            { name: 'RefSeek', description: 'Academic search engine for students and researchers.', url: 'https://www.refseek.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=refseek.com', dataAiHint: 'student search', pricing: 'Free' },
            { name: 'WorldCat', description: 'The world\'s largest library catalog.', url: 'https://www.worldcat.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=worldcat.org', dataAiHint: 'library catalog', pricing: 'Free' },
            { name: 'Eric', description: 'An online library of education research and information.', url: 'https://eric.ed.gov/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ed.gov', dataAiHint: 'education research', pricing: 'Free' },
            { name: 'OpenAlex', description: 'A free and open catalog of the global research system.', url: 'https://openalex.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=openalex.org', dataAiHint: 'research catalog', pricing: 'Free' },
            { name: 'AMiner', description: 'A free online service for academic social network analysis and mining.', url: 'https://www.aminer.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aminer.org', dataAiHint: 'social network analysis', pricing: 'Free' },
            { name: 'DBLP', description: 'Computer science bibliography website.', url: 'https://dblp.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=dblp.org', dataAiHint: 'cs bibliography', pricing: 'Free' },
            { name: 'Google Dataset Search', description: 'Search for datasets stored across thousands of repositories.', url: 'https://datasetsearch.research.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=research.google.com', dataAiHint: 'dataset search', pricing: 'Free' },
        ]
    },
    {
        title: "Literature Review Tools",
        icon: <BookCopy className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'SciSpace', description: 'Explore, understand, and explain research papers.', url: 'https://typeset.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=typeset.io', dataAiHint: 'ai for research', pricing: 'Freemium' },
            { name: 'Litmaps', description: 'Create literature maps to discover and visualize papers.', url: 'https://www.litmaps.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=litmaps.com', dataAiHint: 'literature maps', pricing: 'Freemium' },
            { name: 'Connected Papers', description: 'A visual tool to find and explore academic papers.', url: 'https://www.connectedpapers.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=connectedpapers.com', dataAiHint: 'visual explorer', pricing: 'Free' },
            { name: 'Research Rabbit', description: 'A new way to discover and visualize research papers.', url: 'https://www.researchrabbit.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=researchrabbit.ai', dataAiHint: 'literature map', pricing: 'Free' },
            { name: 'Elicit', description: 'Automate parts of the literature review process.', url: 'https://elicit.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=elicit.org', dataAiHint: 'automate research', pricing: 'Freemium' },
            { name: 'Rayyan', description: 'A web-app for systematic literature reviews.', url: 'https://www.rayyan.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=rayyan.ai', dataAiHint: 'systematic reviews', pricing: 'Freemium' },
            { name: 'Covidence', description: 'Systematic review management software.', url: 'https://www.covidence.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=covidence.org', dataAiHint: 'review management', pricing: 'Paid' },
            { name: 'DistillerSR', description: 'AI-powered literature review software.', url: 'https://www.distillersr.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=distillersr.com', dataAiHint: 'ai literature review', pricing: 'Paid' },
            { name: 'EPPI-Reviewer', description: 'A web-based software for all types of literature review.', url: 'https://eppi.ioe.ac.uk/cms/Default.aspx?alias=eppi.ioe.ac.uk/cms/er4&', image: 'https://www.google.com/s2/favicons?sz=128&domain=ac.uk', dataAiHint: 'review software', pricing: 'Paid' },
            { name: 'Zotero', description: 'Collect, organize, cite, and share research.', url: 'https://www.zotero.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=zotero.org', dataAiHint: 'reference manager', pricing: 'Free' },
            { name: 'Mendeley', description: 'Reference manager and academic social network.', url: 'https://www.mendeley.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mendeley.com', dataAiHint: 'academic network', pricing: 'Freemium' },
            { name: 'VOSviewer', description: 'For creating maps based on network data.', url: 'https://www.vosviewer.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=vosviewer.com', dataAiHint: 'bibliometric maps', pricing: 'Free' },
            { name: 'Citavi', description: 'The all-in-one referencing and knowledge organization tool.', url: 'https://www.citavi.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=citavi.com', dataAiHint: 'knowledge organization', pricing: 'Paid' },
            { name: 'SRDR+', description: 'Systematic Review Data Repository.', url: 'https://srdrplus.ahrq.gov/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ahrq.gov', dataAiHint: 'data repository', pricing: 'Free' },
            { name: 'OpenAlex', description: 'Free and open catalog to track citations and find papers.', url: 'https://openalex.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=openalex.org', dataAiHint: 'research catalog', pricing: 'Free' },
            { name: 'Reviewer Credits', description: 'Get recognition for your peer reviews.', url: 'https://reviewercredits.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=reviewercredits.com', dataAiHint: 'peer review', pricing: 'Free' },
            { name: 'Sysrev', description: 'Data curation and screening for systematic reviews.', url: 'https://sysrev.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sysrev.com', dataAiHint: 'data curation', pricing: 'Freemium' },
            { name: 'Abstrackr', description: 'An open-source tool for abstract screening.', url: 'https://abstrackr.cebm.brown.edu/', image: 'https://www.google.com/s2/favicons?sz=128&domain=brown.edu', dataAiHint: 'abstract screening', pricing: 'Free' },
            { name: 'CADIMA', description: 'A free tool to support the conduct of evidence syntheses.', url: 'https://www.cadima.info/', image: 'https://www.google.com/s2/favicons?sz=128&domain=cadima.info', dataAiHint: 'evidence synthesis', pricing: 'Free' },
            { name: 'NEST', description: 'Nested Evidence Synthesis Tool.', url: 'https://nest.lbl.gov/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lbl.gov', dataAiHint: 'evidence tool', pricing: 'Free' }
        ]
    },
    {
        title: "Academic Search Engines",
        icon: <GraduationCap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Scholar', description: 'Broadly search for scholarly literature.', url: 'https://scholar.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'academic search', pricing: 'Free' },
            { name: 'Microsoft Academic', description: 'Semantic search engine for academic papers (discontinued).', url: 'https://academic.microsoft.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=microsoft.com', dataAiHint: 'semantic search', pricing: 'Free' },
            { name: 'Semantic Scholar', description: 'AI-powered tool for scientific literature.', url: 'https://www.semanticscholar.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=semanticscholar.org', dataAiHint: 'scientific literature', pricing: 'Free' },
            { name: 'BASE', description: 'Search for academic open access web resources.', url: 'https://www.base-search.net/', image: 'https://www.google.com/s2/favicons?sz=128&domain=base-search.net', dataAiHint: 'open access', pricing: 'Free' },
            { name: 'CORE', description: 'The world’s largest collection of open access research papers.', url: 'https://core.ac.uk/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ac.uk', dataAiHint: 'research papers', pricing: 'Free' },
            { name: 'RefSeek', description: 'Academic search engine for students and researchers.', url: 'https://www.refseek.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=refseek.com', dataAiHint: 'student search', pricing: 'Free' },
            { name: 'JSTOR', description: 'A digital library of academic journals, books, and primary sources.', url: 'https://www.jstor.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=jstor.org', dataAiHint: 'digital library', pricing: 'Paid' },
            { name: 'Science.gov', description: 'Gateway to U.S. federal science.', url: 'https://www.science.gov/', image: 'https://www.google.com/s2/favicons?sz=128&domain=science.gov', dataAiHint: 'federal science', pricing: 'Free' },
            { name: 'WorldWideScience.org', description: 'A global science gateway.', url: 'https://worldwidescience.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=worldwidescience.org', dataAiHint: 'global science', pricing: 'Free' },
            { name: 'Scopus', description: 'A large abstract and citation database.', url: 'https://www.scopus.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=scopus.com', dataAiHint: 'citation database', pricing: 'Paid' },
            { name: 'Web of Science', description: 'Global citation database.', url: 'https://www.webofscience.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=webofscience.com', dataAiHint: 'research database', pricing: 'Paid' },
            { name: 'Dimensions', description: 'The world’s largest linked research information dataset.', url: 'https://www.dimensions.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=dimensions.ai', dataAiHint: 'linked research', pricing: 'Freemium' },
            { name: 'AMiner', description: 'Free online service for academic social network analysis.', url: 'https://www.aminer.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aminer.org', dataAiHint: 'social network analysis', pricing: 'Free' },
            { name: 'Zenodo', description: 'A general-purpose open-access repository.', url: 'https://zenodo.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=zenodo.org', dataAiHint: 'open repository', pricing: 'Free' },
            { name: 'SSRN', description: 'Preprint server for social sciences and humanities.', url: 'https://www.ssrn.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ssrn.com', dataAiHint: 'social science', pricing: 'Free' },
            { name: 'LENS.ORG', description: 'Serving the public good through open patent and scholarly search.', url: 'https://www.lens.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lens.org', dataAiHint: 'patent search', pricing: 'Free' },
            { name: 'LazyScholar', description: 'Browser extension to find free full texts and metrics.', url: 'https://www.lazyscholar.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lazyscholar.org', dataAiHint: 'browser extension', pricing: 'Free' },
            { name: 'QxMD Read', description: 'Personalized medical and scientific journal.', url: 'https://read.qxmd.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=qxmd.com', dataAiHint: 'medical journal', pricing: 'Freemium' },
            { name: 'Infotopia', description: 'An alternative search engine for students.', url: 'http://www.infotopia.info/', image: 'https://www.google.com/s2/favicons?sz=128&domain=infotopia.info', dataAiHint: 'student search engine', pricing: 'Free' },
            { name: 'GetTheResearch', description: 'AI-powered search engine for research papers.', url: 'https://www.gettheresearch.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=gettheresearch.org', dataAiHint: 'ai research search', pricing: 'Free' }
        ]
    },
    {
        title: "Paper Search & Discovery",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Connected Papers', description: 'Visual tool to find and explore academic papers.', url: 'https://www.connectedpapers.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=connectedpapers.com', dataAiHint: 'visual explorer', pricing: 'Free' },
            { name: 'Research Rabbit', description: 'A new way to discover and visualize research papers.', url: 'https://www.researchrabbit.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=researchrabbit.ai', dataAiHint: 'literature map', pricing: 'Free' },
            { name: 'Litmaps', description: 'Create literature maps to discover papers.', url: 'https://www.litmaps.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=litmaps.com', dataAiHint: 'discover papers', pricing: 'Freemium' },
            { name: 'Semantic Scholar', description: 'AI-powered search for scientific literature.', url: 'https://www.semanticscholar.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=semanticscholar.org', dataAiHint: 'scientific search', pricing: 'Free' },
            { name: 'Elicit', description: 'Find relevant papers without perfect keyword match.', url: 'https://elicit.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=elicit.org', dataAiHint: 'find papers', pricing: 'Freemium' },
            { name: 'Google Scholar', description: 'Search for scholarly literature.', url: 'https://scholar.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'academic search', pricing: 'Free' },
            { name: 'Scite', description: 'See how research has been cited with Smart Citations.', url: 'https://scite.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=scite.ai', dataAiHint: 'smart citations', pricing: 'Freemium' },
            { name: 'RDiscovery', description: 'AI-powered academic research paper reader.', url: 'https://discovery.researcher.life/', image: 'https://www.google.com/s2/favicons?sz=128&domain=researcher.life', dataAiHint: 'academic reader', pricing: 'Freemium' },
            { name: 'Arxiv Sanity Preserver', description: 'Interface for browsing and searching arXiv papers.', url: 'http://www.arxiv-sanity.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=arxiv-sanity.com', dataAiHint: 'arxiv browser', pricing: 'Free' },
            { name: 'Keenious', description: 'An AI that helps you find relevant research.', url: 'https://keenious.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=keenious.com', dataAiHint: 'relevant research', pricing: 'Freemium' },
            { name: 'PubChase', description: 'Personalized biomedical literature recommendations.', url: 'http://pubchase.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pubchase.com', dataAiHint: 'biomedical literature', pricing: 'Free' },
            { name: 'SSRN', description: 'Discover research in social sciences and humanities.', url: 'https://www.ssrn.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ssrn.com', dataAiHint: 'social science', pricing: 'Free' },
            { name: 'Academia.edu', description: 'Share and discover research.', url: 'https://www.academia.edu/', image: 'https://www.google.com/s2/favicons?sz=128&domain=academia.edu', dataAiHint: 'share research', pricing: 'Freemium' },
            { name: 'ResearchGate', description: 'The professional network for scientists and researchers.', url: 'https://www.researchgate.net/', image: 'https://www.google.com/s2/favicons?sz=128&domain=researchgate.net', dataAiHint: 'scientist network', pricing: 'Free' },
            { name: 'CiteSeerX', description: 'A scientific literature digital library and search engine.', url: 'https://citeseerx.ist.psu.edu/', image: 'https://www.google.com/s2/favicons?sz=128&domain=psu.edu', dataAiHint: 'digital library', pricing: 'Free' },
            { name: 'Web of Science', description: 'Global citation database.', url: 'https://www.webofscience.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=webofscience.com', dataAiHint: 'citation database', pricing: 'Paid' },
            { name: 'Scopus', description: 'Abstract and citation database of peer-reviewed literature.', url: 'https://www.scopus.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=scopus.com', dataAiHint: 'peer-reviewed', pricing: 'Paid' },
            { name: 'LazyScholar', description: 'Browser extension to find free full texts.', url: 'https://www.lazyscholar.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lazyscholar.org', dataAiHint: 'full text search', pricing: 'Free' },
            { name: 'Kopernio', description: 'Now EndNote Click. Find full-text PDFs.', url: 'https://click.endnote.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=endnote.com', dataAiHint: 'pdf finder', pricing: 'Freemium' },
            { name: 'OpenKnowledgeMaps', description: 'A visual interface to the world\'s scientific knowledge.', url: 'https://openknowledgemaps.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=openknowledgemaps.org', dataAiHint: 'visual knowledge', pricing: 'Free' },
        ]
    },
    {
        title: "Citation & Reference Managers",
        icon: <Bookmark className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Zotero', description: 'Your personal research assistant.', url: 'https://www.zotero.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=zotero.org', dataAiHint: 'reference manager', pricing: 'Free' },
            { name: 'Mendeley', description: 'Reference manager and academic social network.', url: 'https://www.mendeley.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mendeley.com', dataAiHint: 'academic network', pricing: 'Freemium' },
            { name: 'EndNote', description: 'A smarter way to manage your references.', url: 'https://endnote.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=endnote.com', dataAiHint: 'bibliography tool', pricing: 'Paid' },
            { name: 'Paperpile', description: 'A modern reference manager for your browser.', url: 'https://paperpile.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=paperpile.com', dataAiHint: 'chrome extension', pricing: 'Paid' },
            { name: 'JabRef', description: 'An open-source, cross-platform citation and reference management tool.', url: 'https://www.jabref.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=jabref.org', dataAiHint: 'bibtex manager', pricing: 'Free' },
            { name: 'Citavi', description: 'The all-in-one referencing and knowledge organization tool.', url: 'https://www.citavi.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=citavi.com', dataAiHint: 'knowledge organization', pricing: 'Paid' },
            { name: 'ReadCube Papers', description: 'App for managing research literature.', url: 'https://www.papersapp.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=papersapp.com', dataAiHint: 'research literature', pricing: 'Paid' },
            { name: 'MyBib', description: 'Free bibliography and citation generator.', url: 'https://www.mybib.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mybib.com', dataAiHint: 'citation generator', pricing: 'Free' },
            { name: 'Cite This For Me', description: 'A Chegg service for citation generation.', url: 'https://www.citethisforme.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=citethisforme.com', dataAiHint: 'citation styles', pricing: 'Freemium' },
            { name: 'BibMe', description: 'The Plagiarism Checker & Citation Generator.', url: 'https://www.bibme.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=bibme.org', dataAiHint: 'plagiarism checker', pricing: 'Freemium' },
            { name: 'Citation Machine', description: 'A Chegg service for generating citations.', url: 'https://www.citationmachine.net/', image: 'https://www.google.com/s2/favicons?sz=128&domain=citationmachine.net', dataAiHint: 'chegg service', pricing: 'Freemium' },
            { name: 'Scribbr Citation Generator', description: 'APA, MLA, & Chicago citation generator.', url: 'https://www.scribbr.com/citation/generator/', image: 'https://www.google.com/s2/favicons?sz=128&domain=scribbr.com', dataAiHint: 'apa mla', pricing: 'Free' },
            { name: 'EasyBib', description: 'A Chegg service for creating citations.', url: 'https://www.easybib.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=easybib.com', dataAiHint: 'citation tools', pricing: 'Freemium' },
            { name: 'RefWorks', description: 'Web-based reference management service.', url: 'https://www.refworks.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=refworks.com', dataAiHint: 'web-based manager', pricing: 'Paid' },
            { name: 'F1000Workspace', description: 'Reference management and manuscript writing tool.', url: 'https://f1000.com/work/', image: 'https://www.google.com/s2/favicons?sz=128&domain=f1000.com', dataAiHint: 'manuscript writer', pricing: 'Freemium' },
            { name: 'Docear', description: 'An academic literature suite.', url: 'https://www.docear.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=docear.org', dataAiHint: 'mind mapping', pricing: 'Free' },
            { name: 'Sciwheel', description: 'Formerly F1000 Workspace, reference management.', url: 'https://sciwheel.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sciwheel.com', dataAiHint: 'citation tool', pricing: 'Freemium' },
            { name: 'BibSonomy', description: 'A social bookmarking and publication-sharing system.', url: 'https://www.bibsonomy.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=bibsonomy.org', dataAiHint: 'social bookmarking', pricing: 'Free' },
            { name: 'Wizdom.ai', description: 'AI powered research insights.', url: 'https://www.wizdom.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=wizdom.ai', dataAiHint: 'research insights', pricing: 'Paid' },
            { name: 'NoodleTools', description: 'Student research platform with MLA, APA, and Chicago/Turabian bibliographies.', url: 'https://www.noodletools.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=noodletools.com', dataAiHint: 'student research', pricing: 'Paid' }
        ]
    },
    {
        title: "Research Summarization",
        icon: <Combine className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Scholarcy', description: 'AI-powered article summarizer.', url: 'https://www.scholarcy.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=scholarcy.com', dataAiHint: 'research paper', pricing: 'Freemium' },
            { name: 'Humata AI', description: 'Chat with your files and get summaries.', url: 'https://www.humata.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=humata.ai', dataAiHint: 'document ai', pricing: 'Freemium' },
            { name: 'QuillBot Summarizer', description: 'AI tool to summarize any text.', url: 'https://quillbot.com/summarize', image: 'https://www.google.com/s2/favicons?sz=128&domain=quillbot.com', dataAiHint: 'text summary', pricing: 'Freemium' },
            { name: 'SMMRY', description: 'Summarize articles, text, and websites.', url: 'https://smmry.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=smmry.com', dataAiHint: 'article summarizer', pricing: 'Free' },
            { name: 'Genei', description: 'AI-powered research and summarisation tool.', url: 'https://www.genei.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=genei.io', dataAiHint: 'research summarizer', pricing: 'Paid' },
            { name: 'Resoomer', description: 'Online text summarizer for students and professionals.', url: 'https://resoomer.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=resoomer.com', dataAiHint: 'online summarizer', pricing: 'Freemium' },
            { name: 'SciSpace', description: 'Explore, understand, and explain research papers.', url: 'https://typeset.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=typeset.io', dataAiHint: 'ai copilot', pricing: 'Freemium' },
            { name: 'Elicit', description: 'Summarize takeaways from papers.', url: 'https://elicit.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=elicit.org', dataAiHint: 'paper takeaways', pricing: 'Freemium' },
            { name: 'SummarizeBot', description: 'AI and blockchain-powered summarization bot.', url: 'https://www.summarizebot.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=summarizebot.com', dataAiHint: 'summarization bot', pricing: 'Free' },
            { name: 'TLDR This', description: 'Free online text summarizing tool.', url: 'https://tldrthis.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tldrthis.com', dataAiHint: 'tldr generator', pricing: 'Freemium' },
            { name: 'ChatGPT', description: 'Use prompts to summarize long texts and documents.', url: 'https://chat.openai.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=openai.com', dataAiHint: 'ai summary', pricing: 'Freemium' },
            { name: 'Claude', description: 'AI assistant that can summarize large documents.', url: 'https://claude.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=claude.ai', dataAiHint: 'large context', pricing: 'Freemium' },
            { name: 'Eightify AI', description: 'Summarize YouTube videos with AI.', url: 'https://eightify.app/', image: 'https://www.google.com/s2/favicons?sz=128&domain=eightify.app', dataAiHint: 'youtube summary', pricing: 'Freemium' },
            { name: 'Summari', description: 'AI-powered summaries for articles and newsletters.', url: 'https://www.summari.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=summari.com', dataAiHint: 'article summary', pricing: 'Paid' },
            { name: 'Intellecta', description: 'AI-powered learning assistant that summarizes content.', url: 'https://intellecta.app/', image: 'https://www.google.com/s2/favicons?sz=128&domain=intellecta.app', dataAiHint: 'learning assistant', pricing: 'Freemium' },
            { name: 'RecapioGPT', description: 'Summarize any webpage, text, or YouTube video.', url: 'https://recapio.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=recapio.ai', dataAiHint: 'webpage summary', pricing: 'Freemium' },
            { name: 'Summarizer', description: 'Free online tool to summarize any text.', url: 'https://www.summarizer.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=summarizer.org', dataAiHint: 'free summarizer', pricing: 'Free' },
            { name: 'Sassbook AI Text Summarizer', description: 'AI-powered text summarizer.', url: 'https://sassbook.com/ai-text-summarizer', image: 'https://www.google.com/s2/favicons?sz=128&domain=sassbook.com', dataAiHint: 'ai summarizer', pricing: 'Freemium' },
            { name: 'Upword', description: 'AI research platform with summarization features.', url: 'https://www.upword.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=upword.ai', dataAiHint: 'research platform', pricing: 'Paid' },
            { name: 'Wordtune Read', description: 'AI reader that summarizes long documents and videos.', url: 'https://www.wordtune.com/read', image: 'https://www.google.com/s2/favicons?sz=128&domain=wordtune.com', dataAiHint: 'ai reader', pricing: 'Freemium' },
        ]
    },
    {
        title: "Fact-Checking Tools",
        icon: <CheckCircle2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Snopes', description: 'The internet\'s definitive fact-checking resource.', url: 'https://www.snopes.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=snopes.com', dataAiHint: 'fact check', pricing: 'Free' },
            { name: 'PolitiFact', description: 'Fact-checking U.S. politics.', url: 'https://www.politifact.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=politifact.com', dataAiHint: 'political facts', pricing: 'Free' },
            { name: 'FactCheck.org', description: 'A nonpartisan, nonprofit consumer advocate for voters.', url: 'https://www.factcheck.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=factcheck.org', dataAiHint: 'voter information', pricing: 'Free' },
            { name: 'Reuters Fact Check', description: 'Fact-checking social media posts and news.', url: 'https://www.reuters.com/fact-check', image: 'https://www.google.com/s2/favicons?sz=128&domain=reuters.com', dataAiHint: 'news fact check', pricing: 'Free' },
            { name: 'AP Fact Check', description: 'Fact-checking from The Associated Press.', url: 'https://apnews.com/hub/ap-fact-check', image: 'https://www.google.com/s2/favicons?sz=128&domain=apnews.com', dataAiHint: 'associated press', pricing: 'Free' },
            { name: 'Full Fact', description: 'The UK’s independent fact checking charity.', url: 'https://fullfact.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=fullfact.org', dataAiHint: 'uk fact check', pricing: 'Free' },
            { name: 'Media Bias/Fact Check', description: 'Comprehensive media bias resource.', url: 'https://mediabiasfactcheck.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mediabiasfactcheck.com', dataAiHint: 'media bias', pricing: 'Free' },
            { name: 'Lead Stories', description: 'Fact checker for viral stories.', url: 'https://leadstories.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=leadstories.com', dataAiHint: 'viral news', pricing: 'Free' },
        ]
    },
    { title: "Data Collection Tools", icon: <Database className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Web Research Tools", icon: <Globe className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Competitive Research Tools", icon: <Users className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Market Research Tools", icon: <TrendingUp className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Trend Analysis Tools", icon: <BarChart className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Insight Generation Tools", icon: <Lightbulb className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Note-Taking Tools", icon: <StickyNote className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Knowledge Base Builders", icon: <Book className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Document Search Tools", icon: <FileSearch className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Semantic Search Tools", icon: <Search className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Question Answering Systems", icon: <MessageSquare className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Learning & Study Tools", icon: <GraduationCap className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Concept Mapping Tools", icon: <Milestone className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Idea & Hypothesis Generators", icon: <Lightbulb className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Report & Whitepaper Tools", icon: <FileText className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Research Collaboration Tools", icon: <Users className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Knowledge Graph Tools", icon: <Network className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Data Annotation Tools", icon: <Cpu className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Research Workflow Automation", icon: <Zap className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Domain-Specific Research AI", icon: <Code className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Knowledge Analytics Tools", icon: <BarChart className="w-5 h-5 text-primary"/>, tools: [] }
]
;
