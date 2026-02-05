

import type { Tool } from '@/lib/types';

export const aiConceptExplanationTools: Tool[] = [
    { name: 'ChatGPT', description: 'Ask for explanations of complex concepts.', url: 'https://chat.openai.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=openai.com', dataAiHint: 'ai explanation', pricing: 'Freemium' },
    { name: 'Perplexity AI', description: 'Get answers with cited sources.', url: 'https://www.perplexity.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=perplexity.ai', dataAiHint: 'answer engine', pricing: 'Freemium' },
    { name: 'Khan Academy', description: 'Free lessons and explanations on thousands of topics.', url: 'https://www.khanacademy.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=khanacademy.org', dataAiHint: 'free lessons', pricing: 'Free' },
    { name: 'Explainpaper', description: 'Upload a research paper, get an explanation.', url: 'https://www.explainpaper.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=explainpaper.com', dataAiHint: 'paper explainer', pricing: 'Free' },
    { name: 'WolframAlpha', description: 'A computational knowledge engine for expert-level answers.', url: 'https://www.wolframalpha.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=wolframalpha.com', dataAiHint: 'computational engine', pricing: 'Freemium' },
    { name: 'Socratic by Google', description: 'Learning app to help you understand school work.', url: 'https://socratic.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=socratic.org', dataAiHint: 'homework help', pricing: 'Free' },
    { name: 'You.com', description: 'AI chatbot that can provide explanations on various topics.', url: 'https://you.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=you.com', dataAiHint: 'search engine', pricing: 'Free' },
    { name: 'SciSpace', description: 'AI Copilot for understanding research papers.', url: 'https://typeset.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=typeset.io', dataAiHint: 'ai copilot', pricing: 'Freemium' },
    { name: 'Coursera', description: 'Learn concepts from top university courses.', url: 'https://www.coursera.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=coursera.org', dataAiHint: 'online courses', pricing: 'Freemium' },
    { name: 'edX', description: 'Access courses from leading institutions to learn new concepts.', url: 'https://www.edx.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=edx.org', dataAiHint: 'university courses', pricing: 'Freemium' },
];

