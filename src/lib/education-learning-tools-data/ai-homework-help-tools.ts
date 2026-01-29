

import type { Tool } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || `https://picsum.photos/seed/${id}/600/400`;
const getHint = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageHint || ``;

export const aiHomeworkHelpTools: Tool[] = [
    { name: 'Socratic by Google', description: 'Learning app to help with homework across subjects.', url: 'https://socratic.org/', image: getImage('socratic-hw'), dataAiHint: getHint('socratic-hw'), pricing: 'Free' },
    { name: 'Photomath', description: 'Scan and solve math problems with step-by-step explanations.', url: 'https://photomath.com/', image: getImage('photomath-hw'), dataAiHint: getHint('photomath-hw'), pricing: 'Freemium' },
    { name: 'Chegg Study', description: 'Get step-by-step textbook solutions and expert Q&A.', url: 'https://www.chegg.com/study', image: getImage('chegg-hw'), dataAiHint: getHint('chegg-hw'), pricing: 'Paid' },
    { name: 'Brainly', description: 'Peer-to-peer learning community for students.', url: 'https://brainly.com/', image: getImage('brainly-hw'), dataAiHint: getHint('brainly-hw'), pricing: 'Freemium' },
    { name: 'Gauthmath', description: 'Instant math help from real tutors and AI.', url: 'https://www.gauthmath.com/', image: getImage('gauthmath-hw'), dataAiHint: getHint('gauthmath-hw'), pricing: 'Freemium' },
    { name: 'Homeworkify', description: 'Free answers to homework questions.', url: 'https://homeworkify.net/', image: getImage('homeworkify-hw'), dataAiHint: getHint('homeworkify-hw'), pricing: 'Free' },
    { name: 'Course Hero', description: 'Access study resources, tutoring, and more.', url: 'https://www.coursehero.com/', image: getImage('coursehero-hw'), dataAiHint: getHint('coursehero-hw'), pricing: 'Paid' },
    { name: 'StudyPool', description: 'Online tutoring and homework help.', url: 'https://www.studypool.com/', image: getImage('studypool-hw'), dataAiHint: getHint('studypool-hw'), pricing: 'Paid' },
    { name: 'Tutor.com', description: '24/7 online tutoring from The Princeton Review.', url: 'https://www.tutor.com/', image: getImage('tutordotcom-hw'), dataAiHint: getHint('tutordotcom-hw'), pricing: 'Paid' },
    { name: 'Kunduz', description: 'Expert Q&A and homework help.', url: 'https://kunduz.com/', image: getImage('kunduz-hw'), dataAiHint: getHint('kunduz-hw'), pricing: 'Paid' },
];

