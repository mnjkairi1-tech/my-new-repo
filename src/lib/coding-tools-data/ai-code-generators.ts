
import type { Tool } from '@/lib/types';

export const aiCodeGeneratorsTools: Tool[] = [
    { name: 'GitHub Copilot', description: 'Your AI pair programmer.', url: 'https://github.com/features/copilot', image: 'https://picsum.photos/seed/copilot-gen/600/400', dataAiHint: 'ai programmer', pricing: 'Paid' },
    { name: 'Tabnine', description: 'AI assistant for software developers.', url: 'https://www.tabnine.com/', image: 'https://picsum.photos/seed/tabnine-gen/600/400', dataAiHint: 'code completion', pricing: 'Freemium' },
    { name: 'Amazon CodeWhisperer', description: 'AI coding companion.', url: 'https://aws.amazon.com/codewhisperer/', image: 'https://picsum.photos/seed/codewhisperer-gen/600/400', dataAiHint: 'aws ai', pricing: 'Free' },
    { name: 'Replit Ghostwriter', description: 'The AI-powered coding assistant.', url: 'https://replit.com/ghostwriter', image: 'https://picsum.photos/seed/replit-gen/600/400', dataAiHint: 'coding assistant', pricing: 'Paid' },
    { name: 'Codeium', description: 'The modern coding superpower.', url: 'https://codeium.com/', image: 'https://picsum.photos/seed/codeium-gen/600/400', dataAiHint: 'free ai code', pricing: 'Free' },
    { name: 'Cody by Sourcegraph', description: 'AI coding assistant that knows your entire codebase.', url: 'https://sourcegraph.com/cody', image: 'https://picsum.photos/seed/cody-gen/600/400', dataAiHint: 'codebase ai', pricing: 'Freemium' },
    { name: 'Devin', description: 'The first AI software engineer.', url: 'https://www.cognition-labs.com/', image: 'https://picsum.photos/seed/devinai/600/400', dataAiHint: 'ai engineer', pricing: 'Paid' },
    { name: 'GPT-Engineer', description: 'Specify what you want to build, AI asks for clarification, and then builds it.', url: 'https://github.com/gpt-engineer-org/gpt-engineer', image: 'https://picsum.photos/seed/gpt-engineer/600/400', dataAiHint: 'build software', pricing: 'Free' },
    { name: 'Cursor', description: 'The AI-first code editor.', url: 'https://cursor.sh/', image: 'https://picsum.photos/seed/cursor-gen/600/400', dataAiHint: 'ai editor', pricing: 'Freemium' },
    { name: 'Blackbox AI', description: 'AI code generation, explanation, and search.', url: 'https://www.blackbox.ai/', image: 'https://picsum.photos/seed/blackbox-gen/600/400', dataAiHint: 'code explanation', pricing: 'Freemium' },
];
