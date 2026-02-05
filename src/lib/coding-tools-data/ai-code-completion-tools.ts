
import type { Tool } from '@/lib/types';

export const aiCodeCompletionTools: Tool[] = [
    { name: 'GitHub Copilot', description: 'Your AI pair programmer.', url: 'https://github.com/features/copilot', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'ai programmer', pricing: 'Paid' },
    { name: 'Tabnine', description: 'AI assistant for software developers.', url: 'https://www.tabnine.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tabnine.com', dataAiHint: 'code completion', pricing: 'Freemium' },
    { name: 'Visual Studio IntelliCode', description: 'AI-assisted development in Visual Studio.', url: 'https://visualstudio.microsoft.com/services/intellicode/', image: 'https://www.google.com/s2/favicons?sz=128&domain=visualstudio.microsoft.com', dataAiHint: 'visual studio', pricing: 'Free' },
    { name: 'Kite', description: 'AI code completion (discontinued, but influential).', url: 'https://www.kite.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=kite.com', dataAiHint: 'python code', pricing: 'Free' },
    { name: 'Codiga', description: 'Code analysis and automated code reviews.', url: 'https://www.codiga.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=codiga.io', dataAiHint: 'code analysis', pricing: 'Freemium' },
    { name: 'FauxPilot', description: 'A self-hosted GitHub Copilot alternative.', url: 'https://github.com/fauxpilot/fauxpilot', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'self-hosted', pricing: 'Free' },
    { name: 'Captain Stack', description: 'Code completion using Stack Overflow.', url: 'https://github.com/hieunc229/copilot-clone', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'stack overflow', pricing: 'Free' },
    { name: 'Amazon CodeWhisperer', description: 'AI coding companion from AWS.', url: 'https://aws.amazon.com/codewhisperer/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aws.amazon.com', dataAiHint: 'aws ai', pricing: 'Free' },
    { name: 'Codeium', description: 'The modern coding superpower, free alternative to Copilot.', url: 'https://codeium.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=codeium.com', dataAiHint: 'copilot alternative', pricing: 'Free' },
    { name: 'AIXcoder', description: 'An AI-powered code completion tool.', url: 'https://www.aixcoder.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aixcoder.com', dataAiHint: 'code assistant', pricing: 'Freemium' },
];
