
import type { Tool } from '@/lib/types';

export const aiCodeSearchTools: Tool[] = [
    { name: 'Sourcegraph', description: 'Understand and fix code faster.', url: 'https://about.sourcegraph.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=about.sourcegraph.com', dataAiHint: 'code search', pricing: 'Freemium' },
    { name: 'Grep.app', description: 'Search across a half million git repositories.', url: 'https://grep.app/', image: 'https://www.google.com/s2/favicons?sz=128&domain=grep.app', dataAiHint: 'git search', pricing: 'Free' },
    { name: 'CodeGrep', description: 'Semantic code search for teams.', url: 'https://www.codegrep.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=codegrep.com', dataAiHint: 'semantic search', pricing: 'Paid' },
    { name: 'Phind', description: 'The AI search engine for developers.', url: 'https://www.phind.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=phind.com', dataAiHint: 'developer search', pricing: 'Free' },
    { name: 'Blackbox AI', description: 'AI code generation, explanation, and search.', url: 'https://www.blackbox.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=blackbox.ai', dataAiHint: 'code search', pricing: 'Freemium' },
    { name: 'GitHub Code Search', description: 'A powerful code search experience on GitHub.', url: 'https://github.com/search', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'github search', pricing: 'Free' },
    { name: 'You.com', description: 'AI chatbot and search engine with code search capabilities.', url: 'https://you.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=you.com', dataAiHint: 'developer chat', pricing: 'Free' },
    { name: 'Livegrep', description: 'A fast, client-side code search.', url: 'https://livegrep.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=livegrep.com', dataAiHint: 'client-side search', pricing: 'Free' },
    { name: 'Zoekt', description: 'A fast, trigram-based code search tool from Google.', url: 'https://github.com/google/zoekt', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'trigram search', pricing: 'Free' },
    { name: 'OpenGrok', description: 'A fast and usable source code search and cross reference engine.', url: 'https://oracle.github.io/opengrok/', image: 'https://www.google.com/s2/favicons?sz=128&domain=oracle.github.io', dataAiHint: 'source code engine', pricing: 'Free' },
];
