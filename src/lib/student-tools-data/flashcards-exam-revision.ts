

import type { Tool } from '@/lib/types';
import { getImage, getHint } from '@/lib/placeholder-images';

export const flashcardsExamRevisionTools: Tool[] = [
    { name: 'Quizlet', description: 'Learn with flashcards, games, and AI-powered study modes.', url: 'https://quizlet.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=quizlet.com', dataAiHint: 'study sets', pricing: 'Freemium' },
    { name: 'Anki', description: 'Powerful, intelligent flashcards using spaced repetition.', url: 'https://apps.ankiweb.net/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ankiweb.net', dataAiHint: 'spaced repetition', pricing: 'Free' },
    { name: 'Knowt', description: 'AI-powered flashcards and study guides from your notes.', url: 'https://knowt.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=knowt.io', dataAiHint: getHint('knowt-assist'), pricing: 'Freemium' },
    { name: 'StudySmarter', description: 'All-in-one learning platform with flashcards and quizzes.', url: 'https://www.studysmarter.us/', image: 'https://www.google.com/s2/favicons?sz=128&domain=studysmarter.us', dataAiHint: 'learning platform', pricing: 'Free' },
    { name: 'Cramly', description: 'AI study tools including flashcard creation.', url: 'https://www.cramly.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=cramly.ai', dataAiHint: getHint('cramly'), pricing: 'Freemium' },
    { name: 'Cram', description: 'Find, create, and study flashcards online.', url: 'https://www.cram.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=cram.com', dataAiHint: 'online flashcards', pricing: 'Free' },
    { name: 'Brainscape', description: 'The smartest flashcard app.', url: 'https://www.brainscape.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=brainscape.com', dataAiHint: 'smart flashcards', pricing: 'Freemium' },
    { name: 'GoConqr', description: 'A social learning network with tools for creating study resources.', url: 'https://www.goconqr.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=goconqr.com', dataAiHint: 'social learning', pricing: 'Freemium' },
    { name: 'Magoosh', description: 'Online test prep with flashcard features.', url: 'https://magoosh.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=magoosh.com', dataAiHint: 'test prep', pricing: 'Paid' },
    { name: 'Kahoot!', description: 'A game-based learning platform.', url: 'https://kahoot.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=kahoot.com', dataAiHint: 'game learning', pricing: 'Freemium' },
];
