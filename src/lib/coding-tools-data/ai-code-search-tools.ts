
import type { Tool } from '@/lib/types';

export const aiCodeSearchTools: Tool[] = [
    { name: 'Sourcegraph', description: 'Understand and fix code faster.', url: 'https://about.sourcegraph.com/', image: 'https://picsum.photos/seed/sourcegraph/600/400', dataAiHint: 'code search', pricing: 'Freemium' },
    { name: 'Grep.app', description: 'Search across a half million git repositories.', url: 'https://grep.app/', image: 'https://picsum.photos/seed/grep-app/600/400', dataAiHint: 'git search', pricing: 'Free' },
    { name: 'CodeGrep', description: 'Semantic code search for teams.', url: 'https://www.codegrep.com/', image: 'https://picsum.photos/seed/codegrep/600/400', dataAiHint: 'semantic search', pricing: 'Paid' },
    { name: 'Phind', description: 'The AI search engine for developers.', url: 'https://www.phind.com/', image: 'https://picsum.photos/seed/phind-search/600/400', dataAiHint: 'developer search', pricing: 'Free' },
    { name: 'Blackbox AI', description: 'AI code generation, explanation, and search.', url: 'https://www.blackbox.ai/', image: 'https://picsum.photos/seed/blackbox-search/600/400', dataAiHint: 'code search', pricing: 'Freemium' },
    { name: 'GitHub Code Search', description: 'A powerful code search experience on GitHub.', url: 'https://github.com/features/code-search', image: 'https://picsum.photos/seed/github-search-code/600/400', dataAiHint: 'github search', pricing: 'Free' },
    { name: 'You.com', description: 'AI chatbot and search engine with code search capabilities.', url: 'https://you.com/', image: 'https://picsum.photos/seed/youcom-code-search/600/400', dataAiHint: 'developer chat', pricing: 'Free' },
    { name: 'Livegrep', description: 'A fast, client-side code search.', url: 'https://livegrep.com/', image: 'https://picsum.photos/seed/livegrep-search/600/400', dataAiHint: 'client-side search', pricing: 'Free' },
    { name: 'Zoekt', description: 'A fast, trigram-based code search tool from Google.', url: 'https://github.com/google/zoekt', image: 'https://picsum.photos/seed/zoekt/600/400', dataAiHint: 'trigram search', pricing: 'Free' },
    { name: 'OpenGrok', description: 'A fast and usable source code search and cross reference engine.', url: 'https://oracle.github.io/opengrok/', image: 'https://picsum.photos/seed/opengrok/600/400', dataAiHint: 'source code engine', pricing: 'Free' },
];
