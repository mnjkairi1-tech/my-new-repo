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
            { name: 'Elicit', description: 'The AI Research Assistant to automate research workflows.', url: 'https://elicit.org/', image: 'https://picsum.photos/seed/elicit-rk/600/400', dataAiHint: 'automate research', pricing: 'Freemium' },
            { name: 'Perplexity AI', description: 'An answer engine for discovering and sharing knowledge.', url: 'https://www.perplexity.ai/', image: 'https://picsum.photos/seed/perplexity-rk/600/400', dataAiHint: 'answer engine', pricing: 'Freemium' },
            { name: 'Research Rabbit', description: 'Your personal research assistant for exploring papers.', url: 'https://www.researchrabbit.ai/', image: 'https://picsum.photos/seed/researchrabbit-rk/600/400', dataAiHint: 'literature map', pricing: 'Free' },
            { name: 'ChatGPT', description: 'Conversational AI that can assist with brainstorming and summarizing.', url: 'https://chat.openai.com/', image: 'https://picsum.photos/seed/chatgpt-research/600/400', dataAiHint: 'ai conversation', pricing: 'Freemium' },
            { name: 'Consensus', description: 'An AI search engine for research.', url: 'https://consensus.app/', image: 'https://picsum.photos/seed/consensus-app/600/400', dataAiHint: 'research search', pricing: 'Freemium' },
            { name: 'Scite', description: 'See how research has been cited with Smart Citations.', url: 'https://scite.ai/', image: 'https://picsum.photos/seed/scite-ai/600/400', dataAiHint: 'smart citations', pricing: 'Freemium' },
            { name: 'Humata AI', description: 'Your AI for files. Ask questions, get answers.', url: 'https://www.humata.ai/', image: 'https://picsum.photos/seed/humata-ai-rk/600/400', dataAiHint: 'document ai', pricing: 'Freemium' },
            { name: 'Keenious', description: 'An AI that helps you find relevant research.', url: 'https://keenious.com/', image: 'https://picsum.photos/seed/keenious/600/400', dataAiHint: 'relevant research', pricing: 'Freemium' },
            { name: 'Iris.ai', description: 'The AI-powered Science Assistant.', url: 'https://iris.ai/', image: 'https://picsum.photos/seed/iris-ai/600/400', dataAiHint: 'science assistant', pricing: 'Paid' },
            { name: 'You.com', description: 'AI chatbot and search engine.', url: 'https://you.com/', image: 'https://picsum.photos/seed/youcom-research/600/400', dataAiHint: 'search engine', pricing: 'Free' },
            { name: 'Arxiv Sanity Preserver', description: 'Web interface for browsing and searching arXiv papers.', url: 'http://www.arxiv-sanity.com/', image: 'https://picsum.photos/seed/arxiv-sanity/600/400', dataAiHint: 'arxiv browser', pricing: 'Free' },
            { name: 'RDiscovery', description: 'AI-powered academic research paper reader.', url: 'https://discovery.researcher.life/', image: 'https://picsum.photos/seed/rdiscovery/600/400', dataAiHint: 'academic reader', pricing: 'Freemium' },
            { name: 'Lateral', description: 'AI-powered tool for reading and organizing research.', url: 'https://www.lateral.io/', image: 'https://picsum.photos/seed/lateral-io/600/400', dataAiHint: 'research organizer', pricing: 'Paid' },
            { name: 'Petal', description: 'AI powered research tool for medical literature.', url: 'https://petal.org/', image: 'https://picsum.photos/seed/petal-research/600/400', dataAiHint: 'medical research', pricing: 'Free' },
            { name: 'Unsilio', description: 'AI solutions for scholarly publishing.', url: 'https://unsilo.ai/', image: 'https://picsum.photos/seed/unsilo/600/400', dataAiHint: 'scholarly ai', pricing: 'Paid' },
            { name: 'Sourcely', description: 'AI-powered tool to find academic sources.', url: 'https://www.sourcely.net/', image: 'https://picsum.photos/seed/sourcely/600/400', dataAiHint: 'academic sources', pricing: 'Free' },
            { name: 'Jenni AI', description: 'The AI assistant for students and researchers.', url: 'https://jenni.ai/', image: 'https://picsum.photos/seed/jenniai-research/600/400', dataAiHint: 'academic writing', pricing: 'Freemium' },
            { name: 'Paperpal', description: 'AI-powered academic writing assistant.', url: 'https://paperpal.com/', image: 'https://picsum.photos/seed/paperpal-research/600/400', dataAiHint: 'research writing', pricing: 'Freemium' },
            { name: 'Claude', description: 'A next-generation AI assistant for complex tasks.', url: 'https://claude.ai/', image: 'https://picsum.photos/seed/claude-research/600/400', dataAiHint: 'anthropic ai', pricing: 'Freemium' },
            { name: 'Explainpaper', description: 'Upload a research paper, get an explanation.', url: 'https://www.explainpaper.com/', image: 'https://picsum.photos/seed/explainpaper/600/400', dataAiHint: 'paper explainer', pricing: 'Free' }
        ]
    },
    {
        title: "Knowledge Management Tools",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Obsidian', description: 'A powerful knowledge base that works on top of a local folder of plain text files.', url: 'https://obsidian.md/', image: 'https://picsum.photos/seed/obsidian-km-rk/600/400', dataAiHint: 'second brain', pricing: 'Free' },
            { name: 'Roam Research', description: 'A note-taking tool for networked thought.', url: 'https://roamresearch.com/', image: 'https://picsum.photos/seed/roam-rk/600/400', dataAiHint: 'networked thought', pricing: 'Paid' },
            { name: 'Logseq', description: 'A privacy-first, open-source knowledge base.', url: 'https://logseq.com/', image: 'https://picsum.photos/seed/logseq-rk/600/400', dataAiHint: 'open source knowledge', pricing: 'Free' },
            { name: 'Notion', description: 'The all-in-one workspace for notes, tasks, wikis, and databases.', url: 'https://www.notion.so/', image: 'https://picsum.photos/seed/notion-km/600/400', dataAiHint: 'workspace app', pricing: 'Freemium' },
            { name: 'Confluence', description: 'Team workspace for knowledge and collaboration.', url: 'https://www.atlassian.com/software/confluence', image: 'https://picsum.photos/seed/confluence-km/600/400', dataAiHint: 'team wiki', pricing: 'Freemium' },
            { name: 'Mem.ai', description: 'The self-organizing workspace.', url: 'https://mem.ai/', image: 'https://picsum.photos/seed/memai-km/600/400', dataAiHint: 'ai workspace', pricing: 'Freemium' },
            { name: 'MyMind', description: 'The extension for your mind. A private place to store your digital memories.', url: 'https://mymind.com/', image: 'https://picsum.photos/seed/mymind-km/600/400', dataAiHint: 'private search', pricing: 'Paid' },
            { name: 'Guru', description: 'A knowledge management solution that works in your workflow.', url: 'https://www.getguru.com/', image: 'https://picsum.photos/seed/guru-km/600/400', dataAiHint: 'company wiki', pricing: 'Freemium' },
            { name: 'Slab', description: 'A knowledge hub for the modern workplace.', url: 'https://slab.com/', image: 'https://picsum.photos/seed/slab-km/600/400', dataAiHint: 'modern workplace', pricing: 'Freemium' },
            { name: 'GitBook', description: 'Documentation, made easy.', url: 'https://www.gitbook.com/', image: 'https://picsum.photos/seed/gitbook-km/600/400', dataAiHint: 'docs platform', pricing: 'Freemium' },
            { name: 'TheBrain', description: 'The ultimate digital memory and mind mapping software.', url: 'https://www.thebrain.com/', image: 'https://picsum.photos/seed/thebrain-km/600/400', dataAiHint: 'mind mapping', pricing: 'Freemium' },
            { name: 'TiddlyWiki', description: 'A non-linear personal web notebook.', url: 'https://tiddlywiki.com/', image: 'https://picsum.photos/seed/tiddlywiki-km/600/400', dataAiHint: 'personal wiki', pricing: 'Free' },
            { name: 'Tettra', description: 'A simple, smart wiki for your team.', url: 'https://tettra.com/', image: 'https://picsum.photos/seed/tettra-km/600/400', dataAiHint: 'internal wiki', pricing: 'Freemium' },
            { name: 'Nuclino', description: 'A modern, simple, and blazingly fast wiki for teams.', url: 'https://www.nuclino.com/', image: 'https://picsum.photos/seed/nuclino-km/600/400', dataAiHint: 'team knowledge', pricing: 'Freemium' },
            { name: 'Bloomfire', description: 'Knowledge engagement platform.', url: 'https://bloomfire.com/', image: 'https://picsum.photos/seed/bloomfire-km/600/400', dataAiHint: 'knowledge sharing', pricing: 'Paid' },
            { name: 'Slite', description: 'The fastest way to share knowledge that sticks.', url: 'https://slite.com/', image: 'https://picsum.photos/seed/slite-km/600/400', dataAiHint: 'team communication', pricing: 'Freemium' },
            { name: 'Anytype', description: 'A local-first, p2p, and open-source tool for thought.', url: 'https://anytype.io/', image: 'https://picsum.photos/seed/anytype-km/600/400', dataAiHint: 'local-first', pricing: 'Free' },
            { name: 'Capacities', description: 'A studio for your mind.', url: 'https://capacities.io/', image: 'https://picsum.photos/seed/capacities-km/600/400', dataAiHint: 'networked notes', pricing: 'Freemium' },
            { name: 'Heptabase', description: 'A visual note-taking tool for learning complex topics.', url: 'https://heptabase.com/', image: 'https://picsum.photos/seed/heptabase-km/600/400', dataAiHint: 'visual learning', pricing: 'Paid' },
            { name: 'Hypernotes', description: 'A note-taking app from the makers of Zenkit.', url: 'https://zenkit.com/en/hypernotes/', image: 'https://picsum.photos/seed/hypernotes-km/600/400', dataAiHint: 'knowledge creation', pricing: 'Freemium' },
        ]
    },
    {
        title: "Information Retrieval",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Scholar', description: 'Broadly search for scholarly literature across many disciplines.', url: 'https://scholar.google.com/', image: 'https://picsum.photos/seed/googlescholar-rk/600/400', dataAiHint: 'academic search', pricing: 'Free' },
            { name: 'Semantic Scholar', description: 'AI-powered research tool for scientific literature.', url: 'https://www.semanticscholar.org/', image: 'https://picsum.photos/seed/semanticscholar-rk/600/400', dataAiHint: 'scientific literature', pricing: 'Free' },
            { name: 'PubMed', description: 'Biomedical literature from MEDLINE, life science journals, and online books.', url: 'https://pubmed.ncbi.nlm.nih.gov/', image: 'https://picsum.photos/seed/pubmed-ir/600/400', dataAiHint: 'medical literature', pricing: 'Free' },
            { name: 'WolframAlpha', description: 'A computational knowledge engine for expert-level answers.', url: 'https://www.wolframalpha.com/', image: 'https://picsum.photos/seed/wolframalpha-ir/600/400', dataAiHint: 'computational engine', pricing: 'Freemium' },
            { name: 'Scopus', description: 'A large abstract and citation database of peer-reviewed literature.', url: 'https://www.scopus.com/', image: 'https://picsum.photos/seed/scopus-ir/600/400', dataAiHint: 'citation database', pricing: 'Paid' },
            { name: 'Web of Science', description: 'Global citation database.', url: 'https://www.webofscience.com/', image: 'https://picsum.photos/seed/webofscience/600/400', dataAiHint: 'research database', pricing: 'Paid' },
            { name: 'JSTOR', description: 'A digital library of academic journals, books, and primary sources.', url: 'https://www.jstor.org/', image: 'https://picsum.photos/seed/jstor/600/400', dataAiHint: 'digital library', pricing: 'Paid' },
            { name: 'arXiv', description: 'Open-access archive for scholarly articles in physics, mathematics, and computer science.', url: 'https://arxiv.org/', image: 'https://picsum.photos/seed/arxiv-ir/600/400', dataAiHint: 'research preprints', pricing: 'Free' },
            { name: 'Dimensions', description: 'The world’s largest linked research information dataset.', url: 'https://www.dimensions.ai/', image: 'https://picsum.photos/seed/dimensions/600/400', dataAiHint: 'linked research', pricing: 'Freemium' },
            { name: 'Lens.org', description: 'Free and open patent and scholarly search.', url: 'https://www.lens.org/', image: 'https://picsum.photos/seed/lens-org/600/400', dataAiHint: 'patent search', pricing: 'Free' },
            { name: 'Microsoft Academic', description: 'Semantic search engine for academic papers (discontinued but influential).', url: 'https://academic.microsoft.com/', image: 'https://picsum.photos/seed/ms-academic/600/400', dataAiHint: 'academic graph', pricing: 'Free' },
            { name: 'BASE', description: 'One of the world\'s most voluminous search engines for academic web resources.', url: 'https://www.base-search.net/', image: 'https://picsum.photos/seed/base-search/600/400', dataAiHint: 'academic web', pricing: 'Free' },
            { name: 'CORE', description: 'The world’s largest collection of open access research papers.', url: 'https://core.ac.uk/', image: 'https://picsum.photos/seed/core-ac-uk/600/400', dataAiHint: 'open access', pricing: 'Free' },
            { name: 'RefSeek', description: 'Academic search engine for students and researchers.', url: 'https://www.refseek.com/', image: 'https://picsum.photos/seed/refseek/600/400', dataAiHint: 'student search', pricing: 'Free' },
            { name: 'WorldCat', description: 'The world\'s largest library catalog.', url: 'https://www.worldcat.org/', image: 'https://picsum.photos/seed/worldcat/600/400', dataAiHint: 'library catalog', pricing: 'Free' },
            { name: 'Eric', description: 'An online library of education research and information.', url: 'https://eric.ed.gov/', image: 'https://picsum.photos/seed/eric-ed/600/400', dataAiHint: 'education research', pricing: 'Free' },
            { name: 'OpenAlex', description: 'A free and open catalog of the global research system.', url: 'https://openalex.org/', image: 'https://picsum.photos/seed/openalex/600/400', dataAiHint: 'research catalog', pricing: 'Free' },
            { name: 'AMiner', description: 'A free online service for academic social network analysis and mining.', url: 'https://www.aminer.org/', image: 'https://picsum.photos/seed/aminer/600/400', dataAiHint: 'social network analysis', pricing: 'Free' },
            { name: 'DBLP', description: 'Computer science bibliography website.', url: 'https://dblp.org/', image: 'https://picsum.photos/seed/dblp/600/400', dataAiHint: 'cs bibliography', pricing: 'Free' },
            { name: 'Google Dataset Search', description: 'Search for datasets stored across thousands of repositories.', url: 'https://datasetsearch.research.google.com/', image: 'https://picsum.photos/seed/dataset-search/600/400', dataAiHint: 'dataset search', pricing: 'Free' },
        ]
    },
    {
        title: "Literature Review Tools",
        icon: <BookCopy className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'SciSpace', description: 'Explore, understand, and explain research papers.', url: 'https://typeset.io/', image: 'https://picsum.photos/seed/scispace-rk/600/400', dataAiHint: 'ai for research', pricing: 'Freemium' },
            { name: 'Litmaps', description: 'Create literature maps to discover and visualize papers.', url: 'https://www.litmaps.com/', image: 'https://picsum.photos/seed/litmaps-rk/600/400', dataAiHint: 'literature maps', pricing: 'Freemium' },
            { name: 'Connected Papers', description: 'A visual tool to explore academic papers.', url: 'https://www.connectedpapers.com/', image: 'https://picsum.photos/seed/connectedpapers-rk/600/400', dataAiHint: 'visual explorer', pricing: 'Free' },
            { name: 'Research Rabbit', description: 'Explore papers and authors in a network.', url: 'https://www.researchrabbit.ai/', image: 'https://picsum.photos/seed/researchrabbit-rk/600/400', dataAiHint: 'research network', pricing: 'Free' },
            { name: 'Elicit', description: 'Automate parts of the literature review process.', url: 'https://elicit.org/', image: 'https://picsum.photos/seed/elicit-review/600/400', dataAiHint: 'automate research', pricing: 'Freemium' },
            { name: 'Rayyan', description: 'A web-app for systematic literature reviews.', url: 'https://www.rayyan.ai/', image: 'https://picsum.photos/seed/rayyan-review/600/400', dataAiHint: 'systematic reviews', pricing: 'Freemium' },
            { name: 'Covidence', description: 'Systematic review management software.', url: 'https://www.covidence.org/', image: 'https://picsum.photos/seed/covidence-review/600/400', dataAiHint: 'review management', pricing: 'Paid' },
            { name: 'DistillerSR', description: 'AI-powered literature review software.', url: 'https://www.distillersr.com/', image: 'https://picsum.photos/seed/distillersr/600/400', dataAiHint: 'ai literature review', pricing: 'Paid' },
            { name: 'EPPI-Reviewer', description: 'A web-based software for all types of literature review.', url: 'https://eppi.ioe.ac.uk/cms/Default.aspx?alias=eppi.ioe.ac.uk/cms/er4&', image: 'https://picsum.photos/seed/eppi-reviewer/600/400', dataAiHint: 'review software', pricing: 'Paid' },
            { name: 'Zotero', description: 'Collect, organize, cite, and share research.', url: 'https://www.zotero.org/', image: 'https://picsum.photos/seed/zotero-review/600/400', dataAiHint: 'reference manager', pricing: 'Free' },
            { name: 'Mendeley', description: 'Reference manager and academic social network.', url: 'https://www.mendeley.com/', image: 'https://picsum.photos/seed/mendeley-review/600/400', dataAiHint: 'academic network', pricing: 'Freemium' },
            { name: 'VOSviewer', description: 'For creating maps based on network data.', url: 'https://www.vosviewer.com/', image: 'https://picsum.photos/seed/vosviewer/600/400', dataAiHint: 'bibliometric maps', pricing: 'Free' },
            { name: 'Citavi', description: 'The all-in-one referencing and knowledge organization tool.', url: 'https://www.citavi.com/', image: 'https://picsum.photos/seed/citavi-review/600/400', dataAiHint: 'knowledge organization', pricing: 'Paid' },
            { name: 'SRDR+', description: 'Systematic Review Data Repository.', url: 'https://srdrplus.ahrq.gov/', image: 'https://picsum.photos/seed/srdrplus/600/400', dataAiHint: 'data repository', pricing: 'Free' },
            { name: 'OpenAlex', description: 'Free and open catalog to track citations and find papers.', url: 'https://openalex.org/', image: 'https://picsum.photos/seed/openalex-review/600/400', dataAiHint: 'research catalog', pricing: 'Free' },
            { name: 'Reviewer Credits', description: 'Get recognition for your peer reviews.', url: 'https://reviewercredits.com/', image: 'https://picsum.photos/seed/reviewercredits/600/400', dataAiHint: 'peer review', pricing: 'Free' },
            { name: 'Sysrev', description: 'Data curation and screening for systematic reviews.', url: 'https://sysrev.com/', image: 'https://picsum.photos/seed/sysrev/600/400', dataAiHint: 'data curation', pricing: 'Freemium' },
            { name: 'Abstrackr', description: 'An open-source tool for abstract screening.', url: 'https://abstrackr.cebm.brown.edu/', image: 'https://picsum.photos/seed/abstrackr/600/400', dataAiHint: 'abstract screening', pricing: 'Free' },
            { name: 'CADIMA', description: 'A free tool to support the conduct of evidence syntheses.', url: 'https://www.cadima.info/', image: 'https://picsum.photos/seed/cadima/600/400', dataAiHint: 'evidence synthesis', pricing: 'Free' },
            { name: 'NEST', description: 'Nested Evidence Synthesis Tool.', url: 'https://nest.lbl.gov/', image: 'https://picsum.photos/seed/nest-lbl/600/400', dataAiHint: 'evidence tool', pricing: 'Free' }
        ]
    },
    {
        title: "Academic Search Engines",
        icon: <GraduationCap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Scholar', description: 'Broadly search for scholarly literature.', url: 'https://scholar.google.com/', image: 'https://picsum.photos/seed/googlescholar-rk/600/400', dataAiHint: 'academic search', pricing: 'Free' },
            { name: 'Microsoft Academic', description: 'Semantic search for academic papers (discontinued).', url: 'https://academic.microsoft.com/', image: 'https://picsum.photos/seed/ms-academic/600/400', dataAiHint: 'semantic search', pricing: 'Free' },
            { name: 'Semantic Scholar', description: 'AI-powered tool for scientific literature.', url: 'https://www.semanticscholar.org/', image: 'https://picsum.photos/seed/semanticscholar-rk/600/400', dataAiHint: 'scientific literature', pricing: 'Free' },
            { name: 'BASE', description: 'Search for academic open access web resources.', url: 'https://www.base-search.net/', image: 'https://picsum.photos/seed/base-search/600/400', dataAiHint: 'open access', pricing: 'Free' },
            { name: 'CORE', description: 'The world’s largest collection of open access research papers.', url: 'https://core.ac.uk/', image: 'https://picsum.photos/seed/core-ac-uk/600/400', dataAiHint: 'research papers', pricing: 'Free' },
            { name: 'RefSeek', description: 'Academic search engine for students and researchers.', url: 'https://www.refseek.com/', image: 'https://picsum.photos/seed/refseek/600/400', dataAiHint: 'student search', pricing: 'Free' },
            { name: 'JSTOR', description: 'A digital library of academic journals, books, and primary sources.', url: 'https://www.jstor.org/', image: 'https://picsum.photos/seed/jstor/600/400', dataAiHint: 'digital library', pricing: 'Paid' },
            { name: 'Science.gov', description: 'Gateway to U.S. federal science.', url: 'https://www.science.gov/', image: 'https://picsum.photos/seed/sciencegov/600/400', dataAiHint: 'federal science', pricing: 'Free' },
            { name: 'WorldWideScience.org', description: 'A global science gateway.', url: 'https://worldwidescience.org/', image: 'https://picsum.photos/seed/worldwidescience/600/400', dataAiHint: 'global science', pricing: 'Free' },
            { name: 'Scopus', description: 'A large abstract and citation database.', url: 'https://www.scopus.com/', image: 'https://picsum.photos/seed/scopus-ir/600/400', dataAiHint: 'citation database', pricing: 'Paid' },
            { name: 'Web of Science', description: 'Global citation database.', url: 'https://www.webofscience.com/', image: 'https://picsum.photos/seed/webofscience/600/400', dataAiHint: 'research database', pricing: 'Paid' },
            { name: 'Dimensions', description: 'The world’s largest linked research information dataset.', url: 'https://www.dimensions.ai/', image: 'https://picsum.photos/seed/dimensions/600/400', dataAiHint: 'linked research', pricing: 'Freemium' },
            { name: 'AMiner', description: 'Free online service for academic social network analysis.', url: 'https://www.aminer.org/', image: 'https://picsum.photos/seed/aminer/600/400', dataAiHint: 'social network analysis', pricing: 'Free' },
            { name: 'Zenodo', description: 'A general-purpose open-access repository.', url: 'https://zenodo.org/', image: 'https://picsum.photos/seed/zenodo/600/400', dataAiHint: 'open repository', pricing: 'Free' },
            { name: 'SSRN', description: 'Preprint server for social sciences and humanities.', url: 'https://www.ssrn.com/', image: 'https://picsum.photos/seed/ssrn/600/400', dataAiHint: 'social science', pricing: 'Free' },
            { name: 'LENS.ORG', description: 'Serving the public good through open patent and scholarly search.', url: 'https://www.lens.org/', image: 'https://picsum.photos/seed/lens-org/600/400', dataAiHint: 'patent search', pricing: 'Free' },
            { name: 'LazyScholar', description: 'Browser extension to find free full texts and metrics.', url: 'https://www.lazyscholar.org/', image: 'https://picsum.photos/seed/lazyscholar/600/400', dataAiHint: 'browser extension', pricing: 'Free' },
            { name: 'QxMD Read', description: 'Personalized medical and scientific journal.', url: 'https://read.qxmd.com/', image: 'https://picsum.photos/seed/qxmd/600/400', dataAiHint: 'medical journal', pricing: 'Freemium' },
            { name: 'Infotopia', description: 'An alternative search engine for students.', url: 'http://www.infotopia.info/', image: 'https://picsum.photos/seed/infotopia/600/400', dataAiHint: 'student search engine', pricing: 'Free' },
            { name: 'GetTheResearch', description: 'AI-powered search engine for research papers.', url: 'https://www.gettheresearch.org/', image: 'https://picsum.photos/seed/gettheresearch/600/400', dataAiHint: 'ai research search', pricing: 'Free' }
        ]
    },
    {
        title: "Paper Search & Discovery",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Connected Papers', description: 'Visual tool to find and explore academic papers.', url: 'https://www.connectedpapers.com/', image: 'https://picsum.photos/seed/connectedpapers-rk/600/400', dataAiHint: 'visual explorer', pricing: 'Free' },
            { name: 'Research Rabbit', description: 'A new way to discover and visualize research papers.', url: 'https://www.researchrabbit.ai/', image: 'https://picsum.photos/seed/researchrabbit-rk/600/400', dataAiHint: 'literature map', pricing: 'Free' },
            { name: 'Litmaps', description: 'Create literature maps to discover papers.', url: 'https://www.litmaps.com/', image: 'https://picsum.photos/seed/litmaps-rk/600/400', dataAiHint: 'discover papers', pricing: 'Freemium' },
            { name: 'Semantic Scholar', description: 'AI-powered search for scientific literature.', url: 'https://www.semanticscholar.org/', image: 'https://picsum.photos/seed/semanticscholar-rk/600/400', dataAiHint: 'scientific search', pricing: 'Free' },
            { name: 'Elicit', description: 'Find relevant papers without perfect keyword match.', url: 'https://elicit.org/', image: 'https://picsum.photos/seed/elicit-paper/600/400', dataAiHint: 'find papers', pricing: 'Freemium' },
            { name: 'Google Scholar', description: 'Search for scholarly literature.', url: 'https://scholar.google.com/', image: 'https://picsum.photos/seed/googlescholar-rk/600/400', dataAiHint: 'academic search', pricing: 'Free' },
            { name: 'Scite', description: 'See how research has been cited with Smart Citations.', url: 'https://scite.ai/', image: 'https://picsum.photos/seed/scite-ai/600/400', dataAiHint: 'smart citations', pricing: 'Freemium' },
            { name: 'RDiscovery', description: 'AI-powered academic research paper reader.', url: 'https://discovery.researcher.life/', image: 'https://picsum.photos/seed/rdiscovery/600/400', dataAiHint: 'academic reader', pricing: 'Freemium' },
            { name: 'Arxiv Sanity Preserver', description: 'Interface for browsing and searching arXiv papers.', url: 'http://www.arxiv-sanity.com/', image: 'https://picsum.photos/seed/arxiv-sanity/600/400', dataAiHint: 'arxiv browser', pricing: 'Free' },
            { name: 'Keenious', description: 'An AI that helps you find relevant research.', url: 'https://keenious.com/', image: 'https://picsum.photos/seed/keenious/600/400', dataAiHint: 'relevant research', pricing: 'Freemium' },
            { name: 'PubChase', description: 'Personalized biomedical literature recommendations.', url: 'http://pubchase.com/', image: 'https://picsum.photos/seed/pubchase/600/400', dataAiHint: 'biomedical literature', pricing: 'Free' },
            { name: 'SSRN', description: 'Discover research in social sciences and humanities.', url: 'https://www.ssrn.com/', image: 'https://picsum.photos/seed/ssrn/600/400', dataAiHint: 'social science', pricing: 'Free' },
            { name: 'Academia.edu', description: 'Share and discover research.', url: 'https://www.academia.edu/', image: 'https://picsum.photos/seed/academiaedu/600/400', dataAiHint: 'share research', pricing: 'Freemium' },
            { name: 'ResearchGate', description: 'The professional network for scientists and researchers.', url: 'https://www.researchgate.net/', image: 'https://picsum.photos/seed/researchgate/600/400', dataAiHint: 'scientist network', pricing: 'Free' },
            { name: 'CiteSeerX', description: 'A scientific literature digital library and search engine.', url: 'https://citeseerx.ist.psu.edu/', image: 'https://picsum.photos/seed/citeseerx/600/400', dataAiHint: 'digital library', pricing: 'Free' },
            { name: 'Web of Science', description: 'Global citation database.', url: 'https://www.webofscience.com/', image: 'https://picsum.photos/seed/webofscience/600/400', dataAiHint: 'citation database', pricing: 'Paid' },
            { name: 'Scopus', description: 'Abstract and citation database of peer-reviewed literature.', url: 'https://www.scopus.com/', image: 'https://picsum.photos/seed/scopus-ir/600/400', dataAiHint: 'peer-reviewed', pricing: 'Paid' },
            { name: 'LazyScholar', description: 'Browser extension to find free full texts.', url: 'https://www.lazyscholar.org/', image: 'https://picsum.photos/seed/lazyscholar/600/400', dataAiHint: 'full text search', pricing: 'Free' },
            { name: 'Kopernio', description: 'Now EndNote Click. Find full-text PDFs.', url: 'https://click.endnote.com/', image: 'https://picsum.photos/seed/kopernio/600/400', dataAiHint: 'pdf finder', pricing: 'Freemium' },
            { name: 'OpenKnowledgeMaps', description: 'A visual interface to the world\'s scientific knowledge.', url: 'https://openknowledgemaps.org/', image: 'https://picsum.photos/seed/okmaps/600/400', dataAiHint: 'visual knowledge', pricing: 'Free' },
        ]
    },
    {
        title: "Citation & Reference Managers",
        icon: <Bookmark className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Zotero', description: 'Your personal research assistant.', url: 'https://www.zotero.org/', image: 'https://picsum.photos/seed/zotero-ref-rk/600/400', dataAiHint: 'reference manager', pricing: 'Free' },
            { name: 'Mendeley', description: 'Reference manager and academic social network.', url: 'https://www.mendeley.com/', image: 'https://picsum.photos/seed/mendeley-review/600/400', dataAiHint: 'academic network', pricing: 'Freemium' },
            { name: 'EndNote', description: 'A smarter way to manage your references.', url: 'https://endnote.com/', image: 'https://picsum.photos/seed/endnote-ref/600/400', dataAiHint: 'bibliography tool', pricing: 'Paid' },
            { name: 'Paperpile', description: 'A modern reference manager for your browser.', url: 'https://paperpile.com/', image: 'https://picsum.photos/seed/paperpile/600/400', dataAiHint: 'chrome extension', pricing: 'Paid' },
            { name: 'JabRef', description: 'An open-source, cross-platform citation and reference management tool.', url: 'https://www.jabref.org/', image: 'https://picsum.photos/seed/jabref/600/400', dataAiHint: 'bibtex manager', pricing: 'Free' },
            { name: 'Citavi', description: 'Reference management, knowledge organization, and task planning.', url: 'https://www.citavi.com/', image: 'https://picsum.photos/seed/citavi-review/600/400', dataAiHint: 'knowledge organization', pricing: 'Paid' },
            { name: 'ReadCube Papers', description: 'App for managing research literature.', url: 'https://www.papersapp.com/', image: 'https://picsum.photos/seed/readcube-papers/600/400', dataAiHint: 'research literature', pricing: 'Paid' },
            { name: 'MyBib', description: 'Free bibliography and citation generator.', url: 'https://www.mybib.com/', image: 'https://picsum.photos/seed/mybib-ref/600/400', dataAiHint: 'citation generator', pricing: 'Free' },
            { name: 'Cite This For Me', description: 'A Chegg service for citation generation.', url: 'https://www.citethisforme.com/', image: 'https://picsum.photos/seed/ctfm/600/400', dataAiHint: 'citation styles', pricing: 'Freemium' },
            { name: 'BibMe', description: 'The Plagiarism Checker & Citation Generator.', url: 'https://www.bibme.org/', image: 'https://picsum.photos/seed/bibme/600/400', dataAiHint: 'plagiarism checker', pricing: 'Freemium' },
            { name: 'Citation Machine', description: 'A Chegg service for generating citations.', url: 'https://www.citationmachine.net/', image: 'https://picsum.photos/seed/citationmachine/600/400', dataAiHint: 'chegg service', pricing: 'Freemium' },
            { name: 'Scribbr Citation Generator', description: 'APA, MLA, & Chicago citation generator.', url: 'https://www.scribbr.com/citation/generator/', image: 'https://picsum.photos/seed/scribbr-cite/600/400', dataAiHint: 'apa mla', pricing: 'Free' },
            { name: 'EasyBib', description: 'A Chegg service for creating citations.', url: 'https://www.easybib.com/', image: 'https://picsum.photos/seed/easybib/600/400', dataAiHint: 'citation tools', pricing: 'Freemium' },
            { name: 'RefWorks', description: 'Web-based reference management service.', url: 'https://www.refworks.com/', image: 'https://picsum.photos/seed/refworks/600/400', dataAiHint: 'web-based manager', pricing: 'Paid' },
            { name: 'F1000Workspace', description: 'Reference management and manuscript writing tool.', url: 'https://f1000.com/work/', image: 'https://picsum.photos/seed/f1000/600/400', dataAiHint: 'manuscript writer', pricing: 'Freemium' },
            { name: 'Docear', description: 'An academic literature suite.', url: 'https://www.docear.org/', image: 'https://picsum.photos/seed/docear/600/400', dataAiHint: 'mind mapping', pricing: 'Free' },
            { name: 'Sciwheel', description: 'Formerly F1000 Workspace, reference management.', url: 'https://sciwheel.com/', image: 'https://picsum.photos/seed/sciwheel/600/400', dataAiHint: 'citation tool', pricing: 'Freemium' },
            { name: 'BibSonomy', description: 'A social bookmarking and publication-sharing system.', url: 'https://www.bibsonomy.org/', image: 'https://picsum.photos/seed/bibsonomy/600/400', dataAiHint: 'social bookmarking', pricing: 'Free' },
            { name: 'Wizdom.ai', description: 'AI powered research insights.', url: 'https://www.wizdom.ai/', image: 'https://picsum.photos/seed/wizdomai/600/400', dataAiHint: 'research insights', pricing: 'Paid' },
            { name: 'NoodleTools', description: 'Student research platform with MLA, APA, and Chicago/Turabian bibliographies.', url: 'https://www.noodletools.com/', image: 'https://picsum.photos/seed/noodletools/600/400', dataAiHint: 'student research', pricing: 'Paid' }
        ]
    },
    {
        title: "Research Summarization",
        icon: <Combine className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Scholarcy', description: 'AI-powered article summarizer.', url: 'https://www.scholarcy.com/', image: 'https://picsum.photos/seed/scholarcy-sum-rk/600/400', dataAiHint: 'research paper', pricing: 'Freemium' },
            { name: 'Humata AI', description: 'Chat with your files and get summaries.', url: 'https://www.humata.ai/', image: 'https://picsum.photos/seed/humata-ai-rk/600/400', dataAiHint: 'document ai', pricing: 'Freemium' },
            { name: 'QuillBot Summarizer', description: 'AI tool to summarize any text.', url: 'https://quillbot.com/summarize', image: 'https://picsum.photos/seed/quillbot-sum/600/400', dataAiHint: 'text summary', pricing: 'Freemium' },
            { name: 'SMMRY', description: 'Summarize articles, text, and websites.', url: 'https://smmry.com/', image: 'https://picsum.photos/seed/smmry-summarizer/600/400', dataAiHint: 'article summarizer', pricing: 'Free' },
            { name: 'Genei', description: 'AI-powered research and summarisation tool.', url: 'https://www.genei.io/', image: 'https://picsum.photos/seed/genei-summarizer/600/400', dataAiHint: 'research summarizer', pricing: 'Paid' },
            { name: 'Resoomer', description: 'Online text summarizer for students and professionals.', url: 'https://resoomer.com/', image: 'https://picsum.photos/seed/resoomer/600/400', dataAiHint: 'online summarizer', pricing: 'Freemium' },
            { name: 'SciSpace', description: 'AI Copilot for understanding research papers.', url: 'https://typeset.io/', image: 'https://picsum.photos/seed/scispace-sum/600/400', dataAiHint: 'ai copilot', pricing: 'Freemium' },
            { name: 'Elicit', description: 'Summarize takeaways from papers.', url: 'https://elicit.org/', image: 'https://picsum.photos/seed/elicit-sum/600/400', dataAiHint: 'paper takeaways', pricing: 'Freemium' },
            { name: 'SummarizeBot', description: 'AI and blockchain-powered summarization bot.', url: 'https://www.summarizebot.com/', image: 'https://picsum.photos/seed/summarizebot/600/400', dataAiHint: 'summarization bot', pricing: 'Free' },
            { name: 'TLDR This', description: 'Free online text summarizing tool.', url: 'https://tldrthis.com/', image: 'https://picsum.photos/seed/tldrthis/600/400', dataAiHint: 'tldr generator', pricing: 'Freemium' },
            { name: 'ChatGPT', description: 'Use prompts to summarize long texts and documents.', url: 'https://chat.openai.com/', image: 'https://picsum.photos/seed/chatgpt-summarize/600/400', dataAiHint: 'ai summary', pricing: 'Freemium' },
            { name: 'Claude', description: 'AI assistant that can summarize large documents.', url: 'https://claude.ai/', image: 'https://picsum.photos/seed/claude-summarize/600/400', dataAiHint: 'large context', pricing: 'Freemium' },
            { name: 'Eightify AI', description: 'Summarize YouTube videos with AI.', url: 'https://eightify.app/', image: 'https://picsum.photos/seed/eightify/600/400', dataAiHint: 'youtube summary', pricing: 'Freemium' },
            { name: 'Summari', description: 'AI-powered summaries for articles and newsletters.', url: 'https://www.summari.com/', image: 'https://picsum.photos/seed/summari/600/400', dataAiHint: 'article summary', pricing: 'Paid' },
            { name: 'Intellecta', description: 'AI-powered learning assistant that summarizes content.', url: 'https://intellecta.app/', image: 'https://picsum.photos/seed/intellecta/600/400', dataAiHint: 'learning assistant', pricing: 'Freemium' },
            { name: 'RecapioGPT', description: 'Summarize any webpage, text, or YouTube video.', url: 'https://recapio.ai/', image: 'https://picsum.photos/seed/recapio/600/400', dataAiHint: 'webpage summary', pricing: 'Freemium' },
            { name: 'Summarizer', description: 'Free online tool to summarize any text.', url: 'https://www.summarizer.org/', image: 'https://picsum.photos/seed/summarizer-org/600/400', dataAiHint: 'free summarizer', pricing: 'Free' },
            { name: 'Sassbook AI Text Summarizer', description: 'AI-powered text summarizer.', url: 'https://sassbook.com/ai-text-summarizer', image: 'https://picsum.photos/seed/sassbook/600/400', dataAiHint: 'ai summarizer', pricing: 'Freemium' },
            { name: 'Upword', description: 'AI research platform with summarization features.', url: 'https://www.upword.ai/', image: 'https://picsum.photos/seed/upword-summarize/600/400', dataAiHint: 'research platform', pricing: 'Paid' },
            { name: 'Wordtune Read', description: 'AI reader that summarizes long documents and videos.', url: 'https://www.wordtune.com/read', image: 'https://picsum.photos/seed/wordtune-read/600/400', dataAiHint: 'ai reader', pricing: 'Freemium' },
        ]
    },
    {
        title: "Fact-Checking Tools",
        icon: <CheckCircle2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Snopes', description: 'The internet\'s definitive fact-checking resource.', url: 'https://www.snopes.com/', image: 'https://picsum.photos/seed/snopes/600/400', dataAiHint: 'fact check', pricing: 'Free' },
            { name: 'PolitiFact', description: 'Fact-checking U.S. politics.', url: 'https://www.politifact.com/', image: 'https://picsum.photos/seed/politifact/600/400', dataAiHint: 'political facts', pricing: 'Free' },
            { name: 'FactCheck.org', description: 'A nonpartisan, nonprofit consumer advocate for voters.', url: 'https://www.factcheck.org/', image: 'https://picsum.photos/seed/factcheck-org/600/400', dataAiHint: 'voter information', pricing: 'Free' },
            { name: 'Reuters Fact Check', description: 'Fact-checking social media posts and news.', url: 'https://www.reuters.com/fact-check', image: 'https://picsum.photos/seed/reuters-factcheck/600/400', dataAiHint: 'news fact check', pricing: 'Free' },
            { name: 'AP Fact Check', description: 'Fact-checking from The Associated Press.', url: 'https://apnews.com/hub/ap-fact-check', image: 'https://picsum.photos/seed/ap-factcheck/600/400', dataAiHint: 'associated press', pricing: 'Free' },
            { name: 'Full Fact', description: 'The UK’s independent fact checking charity.', url: 'https://fullfact.org/', image: 'https://picsum.photos/seed/fullfact/600/400', dataAiHint: 'uk fact check', pricing: 'Free' },
            { name: 'Media Bias/Fact Check', description: 'Comprehensive media bias resource.', url: 'https://mediabiasfactcheck.com/', image: 'https://picsum.photos/seed/mbfc/600/400', dataAiHint: 'media bias', pricing: 'Free' },
            { name: 'Lead Stories', description: 'Fact checker for viral stories.', url: 'https://leadstories.com/', image: 'https://picsum.photos/seed/leadstories/600/400', dataAiHint: 'viral news', pricing: 'Free' },
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
