
import type { Tool } from '@/lib/types';

export const developerProductivityTools: Tool[] = [
    { name: 'GitHub Copilot', description: 'Your AI pair programmer.', url: 'https://github.com/features/copilot', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'ai coding', pricing: 'Paid' },
    { name: 'Tabnine', description: 'AI assistant for software developers.', url: 'https://www.tabnine.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tabnine.com', dataAiHint: 'code completion', pricing: 'Freemium' },
    { name: 'Sourcegraph', description: 'Understand and fix code faster with code search.', url: 'https://about.sourcegraph.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sourcegraph.com', dataAiHint: 'code search', pricing: 'Freemium' },
    { name: 'Sentry', description: 'Application monitoring and error tracking.', url: 'https://sentry.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sentry.io', dataAiHint: 'error tracking', pricing: 'Freemium' },
    { name: 'Postman', description: 'The collaboration platform for API development.', url: 'https://www.postman.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=postman.com', dataAiHint: 'api development', pricing: 'Freemium' },
    { name: 'Linear', description: 'The issue tracking tool you\'ll enjoy using.', url: 'https://linear.app/', image: 'https://www.google.com/s2/favicons?sz=128&domain=linear.app', dataAiHint: 'issue tracking', pricing: 'Freemium' },
    { name: 'Raycast', description: 'A blazingly fast, totally extendable launcher.', url: 'https://www.raycast.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=raycast.com', dataAiHint: 'mac launcher', pricing: 'Free' },
    { name: 'Warp', description: 'A blazingly fast, modern terminal.', url: 'https://www.warp.dev/', image: 'https://www.google.com/s2/favicons?sz=128&domain=warp.dev', dataAiHint: 'modern terminal', pricing: 'Free' },
    { name: 'Fig', description: 'Adds IDE-style autocomplete to your existing terminal.', url: 'https://fig.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=fig.io', dataAiHint: 'terminal autocomplete', pricing: 'Free' },
    { name: 'JetBrains', description: 'IDEs for professional developers.', url: 'https://www.jetbrains.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=jetbrains.com', dataAiHint: 'developer ides', pricing: 'Paid' },
];
