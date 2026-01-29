
import type { Tool } from '@/lib/types';
import { getImage, getHint } from '@/lib/placeholder-images';

export const textbookSolutionsTools: Tool[] = [
    { name: 'Chegg Study', description: 'Get step-by-step textbook solutions.', url: 'https://www.chegg.com/study', image: getImage('chegg-hw'), dataAiHint: getHint('chegg-hw'), pricing: 'Paid' },
    { name: 'Course Hero', description: 'Access study resources, tutoring, and more.', url: 'https://www.coursehero.com/', image: getImage('coursehero-hw'), dataAiHint: getHint('coursehero-hw'), pricing: 'Paid' },
    { name: 'Slader (now Quizlet)', description: 'Textbook solutions and answers.', url: 'https://quizlet.com/textbook-solutions', image: 'https://picsum.photos/seed/slader-quizlet/600/400', dataAiHint: 'textbook answers', pricing: 'Freemium' },
    { name: 'Bartleby', description: 'Textbook solutions and 24/7 expert help.', url: 'https://www.bartleby.com/', image: 'https://picsum.photos/seed/bartleby/600/400', dataAiHint: 'homework help', pricing: 'Paid' },
    { name: 'Numerade', description: 'Video solutions for STEM textbooks.', url: 'https://www.numerade.com/', image: getImage('numerade-hw'), dataAiHint: getHint('numerade-hw'), pricing: 'Freemium' },
    { name: 'Crazy For Study', description: 'Textbook solutions and assignment help.', url: 'https://www.crazyforstudy.com/', image: 'https://picsum.photos/seed/cfs-solutions/600/400', dataAiHint: 'assignment help', pricing: 'Paid' },
    { name: '24HourAnswers', description: 'College homework help and tutoring.', url: 'https://24houranswers.com/', image: 'https://picsum.photos/seed/24houranswers/600/400', dataAiHint: 'homework tutoring', pricing: 'Paid' },
    { name: 'Paper-Help.org', description: 'Professional writing services.', url: 'https://paper-help.org/', image: 'https://picsum.photos/seed/paperhelp-org/600/400', dataAiHint: 'writing services', pricing: 'Paid' },
    { name: 'Homeworkify', description: 'Free answers to homework questions.', url: 'https://homeworkify.net/', image: getImage('homeworkify-hw'), dataAiHint: getHint('homeworkify-hw'), pricing: 'Free' },
    { name: 'Byju\'s', description: 'Comprehensive learning programs.', url: 'https://byjus.com/', image: getImage('byjus-hw'), dataAiHint: getHint('byjus-hw'), pricing: 'Paid' },
];

