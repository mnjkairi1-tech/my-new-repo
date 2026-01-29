
import type { Tool } from '@/lib/types';
import { getImage, getHint } from '@/lib/placeholder-images';

export const flashcardsExamRevisionTools: Tool[] = [
    { name: 'Quizlet', description: 'Learn with flashcards, games, and AI-powered study modes.', url: 'https://quizlet.com/', image: 'https://picsum.photos/seed/quizlet/600/400', dataAiHint: 'study sets', pricing: 'Freemium' },
    { name: 'Anki', description: 'Powerful, intelligent flashcards using spaced repetition.', url: 'https://apps.ankiweb.net/', image: 'https://picsum.photos/seed/anki/600/400', dataAiHint: 'spaced repetition', pricing: 'Free' },
    { name: 'Knowt', description: 'AI-powered flashcards and study guides from your notes.', url: 'https://knowt.io/', image: getImage('knowt-assist'), dataAiHint: getHint('knowt-assist'), pricing: 'Freemium' },
    { name: 'StudySmarter', description: 'All-in-one learning platform with flashcards and quizzes.', url: 'https://www.studysmarter.us/', image: 'https://picsum.photos/seed/studysmarter/600/400', dataAiHint: 'learning platform', pricing: 'Free' },
    { name: 'Cramly', description: 'AI study tools including flashcard creation.', url: 'https://www.cramly.ai/', image: getImage('cramly'), dataAiHint: getHint('cramly'), pricing: 'Freemium' },
    { name: 'Cram', description: 'Find, create, and study flashcards online.', url: 'https://www.cram.com/', image: 'https://picsum.photos/seed/cram/600/400', dataAiHint: 'online flashcards', pricing: 'Free' },
    { name: 'Brainscape', description: 'The smartest flashcard app.', url: 'https://www.brainscape.com/', image: 'https://picsum.photos/seed/brainscape/600/400', dataAiHint: 'smart flashcards', pricing: 'Freemium' },
    { name: 'GoConqr', description: 'A social learning network with tools for creating study resources.', url: 'https://www.goconqr.com/', image: 'https://picsum.photos/seed/goconqr/600/400', dataAiHint: 'social learning', pricing: 'Freemium' },
    { name: 'Magoosh', description: 'Online test prep with flashcard features.', url: 'https://magoosh.com/', image: 'https://picsum.photos/seed/magoosh-edu/600/400', dataAiHint: 'test prep', pricing: 'Paid' },
    { name: 'Kahoot!', description: 'A game-based learning platform.', url: 'https://kahoot.com/', image: 'https://picsum.photos/seed/kahoot-edu/600/400', dataAiHint: 'game learning', pricing: 'Freemium' },
];

