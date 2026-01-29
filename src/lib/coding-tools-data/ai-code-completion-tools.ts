
import type { Tool } from '@/lib/types';

export const aiCodeCompletionTools: Tool[] = [
    { name: 'GitHub Copilot', description: 'Your AI pair programmer.', url: 'https://github.com/features/copilot', image: 'https://picsum.photos/seed/copilot-complete/600/400', dataAiHint: 'ai programmer', pricing: 'Paid' },
    { name: 'Tabnine', description: 'AI assistant for software developers.', url: 'https://www.tabnine.com/', image: 'https://picsum.photos/seed/tabnine-complete/600/400', dataAiHint: 'code completion', pricing: 'Freemium' },
    { name: 'Visual Studio IntelliCode', description: 'AI-assisted development in Visual Studio.', url: 'https://visualstudio.microsoft.com/services/intellicode/', image: 'https://picsum.photos/seed/intellicode/600/400', dataAiHint: 'visual studio', pricing: 'Free' },
    { name: 'Kite', description: 'AI code completion (discontinued, but influential).', url: 'https://www.kite.com/', image: 'https://picsum.photos/seed/kite-complete/600/400', dataAiHint: 'python code', pricing: 'Free' },
    { name: 'Codiga', description: 'Code analysis and automated code reviews.', url: 'https://www.codiga.io/', image: 'https://picsum.photos/seed/codiga-complete/600/400', dataAiHint: 'code analysis', pricing: 'Freemium' },
    { name: 'FauxPilot', description: 'A self-hosted GitHub Copilot alternative.', url: 'https://github.com/fauxpilot/fauxpilot', image: 'https://picsum.photos/seed/fauxpilot/600/400', dataAiHint: 'self-hosted', pricing: 'Free' },
    { name: 'Captain Stack', description: 'Code completion using Stack Overflow.', url: 'https://github.com/hieunc229/copilot-clone', image: 'https://picsum.photos/seed/captainstack/600/400', dataAiHint: 'stack overflow', pricing: 'Free' },
    { name: 'Amazon CodeWhisperer', description: 'AI coding companion from AWS.', url: 'https://aws.amazon.com/codewhisperer/', image: 'https://picsum.photos/seed/codewhisperer-complete/600/400', dataAiHint: 'aws ai', pricing: 'Free' },
    { name: 'Codeium', description: 'The modern coding superpower, free alternative to Copilot.', url: 'https://codeium.com/', image: 'https://picsum.photos/seed/codeium-complete/600/400', dataAiHint: 'copilot alternative', pricing: 'Free' },
    { name: 'AIXcoder', description: 'An AI-powered code completion tool.', url: 'https://www.aixcoder.com/', image: 'https://picsum.photos/seed/aixcoder/600/400', dataAiHint: 'code assistant', pricing: 'Freemium' },
];
