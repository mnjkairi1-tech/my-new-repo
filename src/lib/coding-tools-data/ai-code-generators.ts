
import type { Tool } from '@/lib/types';

export const aiCodeGeneratorsTools: Tool[] = [
    { name: 'GitHub Copilot', description: 'Your AI pair programmer.', url: 'https://github.com/features/copilot', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'ai programmer', pricing: 'Paid' },
    { name: 'Tabnine', description: 'AI assistant for software developers.', url: 'https://www.tabnine.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tabnine.com', dataAiHint: 'code completion', pricing: 'Freemium' },
    { name: 'Amazon CodeWhisperer', description: 'AI coding companion.', url: 'https://aws.amazon.com/codewhisperer/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aws.amazon.com', dataAiHint: 'aws ai', pricing: 'Free' },
    { name: 'Replit Ghostwriter', description: 'The AI-powered coding assistant.', url: 'https://replit.com/ghostwriter', image: 'https://www.google.com/s2/favicons?sz=128&domain=replit.com', dataAiHint: 'coding assistant', pricing: 'Paid' },
    { name: 'Codeium', description: 'The modern coding superpower.', url: 'https://codeium.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=codeium.com', dataAiHint: 'free ai code', pricing: 'Free' },
    { name: 'Cody by Sourcegraph', description: 'AI coding assistant that knows your entire codebase.', url: 'https://sourcegraph.com/cody', image: 'https://www.google.com/s2/favicons?sz=128&domain=sourcegraph.com', dataAiHint: 'codebase ai', pricing: 'Freemium' },
    { name: 'Devin', description: 'The first AI software engineer.', url: 'https://www.cognition-labs.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=cognition-labs.com', dataAiHint: 'ai engineer', pricing: 'Paid' },
    { name: 'GPT-Engineer', description: 'Specify what you want to build, AI asks for clarification, and then builds it.', url: 'https://github.com/gpt-engineer-org/gpt-engineer', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'build software', pricing: 'Free' },
    { name: 'Cursor', description: 'The AI-first code editor.', url: 'https://cursor.sh/', image: 'https://www.google.com/s2/favicons?sz=128&domain=cursor.sh', dataAiHint: 'ai editor', pricing: 'Freemium' },
    { name: 'Blackbox AI', description: 'AI code generation, explanation, and search.', url: 'https://www.blackbox.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=blackbox.ai', dataAiHint: 'code explanation', pricing: 'Freemium' },
];
