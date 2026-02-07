
import type { Tool } from '@/lib/types';
import { getImage, getHint } from '@/lib/placeholder-images';

export const textbookSolutionsTools: Tool[] = [
    { name: 'Chegg Study', description: 'Get step-by-step textbook solutions.', url: 'https://www.chegg.com/study', image: 'https://www.google.com/s2/favicons?sz=128&domain=chegg.com', dataAiHint: getHint('chegg-hw'), pricing: 'Paid' },
    { name: 'Course Hero', description: 'Access study resources, tutoring, and more.', url: 'https://www.coursehero.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=coursehero.com', dataAiHint: getHint('coursehero-hw'), pricing: 'Paid' },
    { name: 'Slader (now Quizlet)', description: 'Textbook solutions and answers.', url: 'https://quizlet.com/textbook-solutions', image: 'https://www.google.com/s2/favicons?sz=128&domain=quizlet.com', dataAiHint: 'textbook answers', pricing: 'Freemium' },
    { name: 'Bartleby', description: 'Textbook solutions and 24/7 expert help.', url: 'https://www.bartleby.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=bartleby.com', dataAiHint: 'homework help', pricing: 'Paid' },
    { name: 'Numerade', description: 'Video solutions for STEM textbooks.', url: 'https://www.numerade.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=numerade.com', dataAiHint: getHint('numerade-hw'), pricing: 'Freemium' },
    { name: 'Crazy For Study', description: 'Textbook solutions and assignment help.', url: 'https://www.crazyforstudy.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=crazyforstudy.com', dataAiHint: 'assignment help', pricing: 'Paid' },
    { name: '24HourAnswers', description: 'College homework help and tutoring.', url: 'https://24houranswers.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=24houranswers.com', dataAiHint: 'homework tutoring', pricing: 'Paid' },
    { name: 'Paper-Help.org', description: 'Professional writing services.', url: 'https://paper-help.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=paper-help.org', dataAiHint: 'writing services', pricing: 'Paid' },
    { name: 'Homeworkify', description: 'Free answers to homework questions.', url: 'https://homeworkify.net/', image: 'https://www.google.com/s2/favicons?sz=128&domain=homeworkify.net', dataAiHint: getHint('homeworkify-hw'), pricing: 'Free' },
    { name: 'Byju\'s', description: 'Comprehensive learning programs.', url: 'https://byjus.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=byjus.com', dataAiHint: getHint('byjus-hw'), pricing: 'Paid' },
];
