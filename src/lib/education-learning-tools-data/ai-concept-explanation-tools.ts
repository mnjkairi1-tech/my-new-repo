

import type { Tool } from '@/lib/types';

export const aiConceptExplanationTools: Tool[] = [
    { name: 'ChatGPT', description: 'Ask for explanations of complex concepts.', url: 'https://chat.openai.com/', image: 'https://picsum.photos/seed/chatgpt-explain/600/400', dataAiHint: 'ai explanation', pricing: 'Freemium' },
    { name: 'Perplexity AI', description: 'Get answers with cited sources.', url: 'https://www.perplexity.ai/', image: 'https://picsum.photos/seed/perplexity-explain/600/400', dataAiHint: 'answer engine', pricing: 'Freemium' },
    { name: 'Khan Academy', description: 'Free lessons and explanations on thousands of topics.', url: 'https://www.khanacademy.org/', image: 'https://picsum.photos/seed/khan-academy-explain/600/400', dataAiHint: 'free lessons', pricing: 'Free' },
    { name: 'Explainpaper', description: 'Upload a research paper, get an explanation.', url: 'https://www.explainpaper.com/', image: 'https://picsum.photos/seed/explainpaper-explain/600/400', dataAiHint: 'paper explainer', pricing: 'Free' },
    { name: 'WolframAlpha', description: 'A computational knowledge engine for expert-level answers.', url: 'https://www.wolframalpha.com/', image: 'https://picsum.photos/seed/wolframalpha-explain/600/400', dataAiHint: 'computational engine', pricing: 'Freemium' },
    { name: 'Socratic by Google', description: 'Learning app to help you understand school work.', url: 'https://socratic.org/', image: 'https://picsum.photos/seed/socratic-explain/600/400', dataAiHint: 'homework help', pricing: 'Free' },
    { name: 'You.com', description: 'AI chatbot that can provide explanations on various topics.', url: 'https://you.com/', image: 'https://picsum.photos/seed/youcom-explain/600/400', dataAiHint: 'search engine', pricing: 'Free' },
    { name: 'SciSpace', description: 'AI Copilot for understanding research papers.', url: 'https://typeset.io/', image: 'https://picsum.photos/seed/scispace-explain/600/400', dataAiHint: 'ai copilot', pricing: 'Freemium' },
    { name: 'Coursera', description: 'Learn concepts from top university courses.', url: 'https://www.coursera.org/', image: 'https://picsum.photos/seed/coursera-explain/600/400', dataAiHint: 'online courses', pricing: 'Freemium' },
    { name: 'edX', description: 'Access courses from leading institutions to learn new concepts.', url: 'https://www.edx.org/', image: 'https://picsum.photos/seed/edx-explain/600/400', dataAiHint: 'university courses', pricing: 'Freemium' },
];

