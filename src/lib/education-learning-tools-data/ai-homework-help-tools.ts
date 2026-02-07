

import type { Tool } from '@/lib/types';
import { getImage, getHint } from '@/lib/placeholder-images';

export const aiHomeworkHelpTools: Tool[] = [
    { name: 'Socratic by Google', description: 'Learning app to help with homework across subjects.', url: 'https://socratic.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=socratic.org', dataAiHint: getHint('socratic-hw'), pricing: 'Free' },
    { name: 'Photomath', description: 'Scan and solve math problems with step-by-step explanations.', url: 'https://photomath.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=photomath.com', dataAiHint: getHint('photomath-hw'), pricing: 'Freemium' },
    { name: 'Chegg Study', description: 'Get step-by-step textbook solutions and expert Q&A.', url: 'https://www.chegg.com/study', image: 'https://www.google.com/s2/favicons?sz=128&domain=chegg.com', dataAiHint: getHint('chegg-hw'), pricing: 'Paid' },
    { name: 'Brainly', description: 'Peer-to-peer learning community for students.', url: 'https://brainly.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=brainly.com', dataAiHint: getHint('brainly-hw'), pricing: 'Freemium' },
    { name: 'Gauthmath', description: 'Instant math help from real tutors and AI.', url: 'https://www.gauthmath.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=gauthmath.com', dataAiHint: getHint('gauthmath-hw'), pricing: 'Freemium' },
    { name: 'Homeworkify', description: 'Free answers to homework questions.', url: 'https://homeworkify.net/', image: 'https://www.google.com/s2/favicons?sz=128&domain=homeworkify.net', dataAiHint: getHint('homeworkify-hw'), pricing: 'Free' },
    { name: 'Course Hero', description: 'Access study resources, tutoring, and more.', url: 'https://www.coursehero.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=coursehero.com', dataAiHint: getHint('coursehero-hw'), pricing: 'Paid' },
    { name: 'StudyPool', description: 'Online tutoring and homework help.', url: 'https://www.studypool.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=studypool.com', dataAiHint: getHint('studypool-hw'), pricing: 'Paid' },
    { name: 'Tutor.com', description: '24/7 online tutoring from The Princeton Review.', url: 'https://www.tutor.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tutor.com', dataAiHint: getHint('tutordotcom-hw'), pricing: 'Paid' },
    { name: 'Kunduz', description: 'Expert Q&A and homework help.', url: 'https://kunduz.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=kunduz.com', dataAiHint: getHint('kunduz-hw'), pricing: 'Paid' },
];
