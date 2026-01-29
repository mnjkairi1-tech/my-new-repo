

import type { Tool } from '@/lib/types';
import { getImage, getHint } from '@/lib/placeholder-images';

export const aiSkillDevelopmentPlatformsTools: Tool[] = [
    { name: 'Coursera', description: 'Online courses and degrees from world-class universities and companies.', url: 'https://www.coursera.org/', image: getImage('coursera-skill'), dataAiHint: getHint('coursera-skill'), pricing: 'Freemium' },
    { name: 'Udemy', description: 'A global marketplace for learning and teaching online.', url: 'https://www.udemy.com/', image: getImage('udemy-skill'), dataAiHint: getHint('udemy-skill'), pricing: 'Paid' },
    { name: 'LinkedIn Learning', description: 'Online courses for creative, technical and business skills.', url: 'https://www.linkedin.com/learning/', image: getImage('linkedin-skill'), dataAiHint: getHint('linkedin-skill'), pricing: 'Paid' },
    { name: 'Skillshare', description: 'Online learning community for creators.', url: 'https://www.skillshare.com/', image: getImage('skillshare-skill'), dataAiHint: getHint('skillshare-skill'), pricing: 'Paid' },
    { name: 'Pluralsight', description: 'Technology workforce development platform.', url: 'https://www.pluralsight.com/', image: getImage('pluralsight-skill'), dataAiHint: getHint('pluralsight-skill'), pricing: 'Paid' },
    { name: 'edX', description: 'Online courses from top universities.', url: 'https://www.edx.org/', image: getImage('edx-skill'), dataAiHint: getHint('edx-skill'), pricing: 'Freemium' },
    { name: 'Udacity', description: 'Learn the latest tech skills to advance your career.', url: 'https://www.udacity.com/', image: getImage('udacity-skill'), dataAiHint: getHint('udacity-skill'), pricing: 'Paid' },
    { name: 'DataCamp', description: 'Learn data science and AI skills.', url: 'https://www.datacamp.com/', image: getImage('datacamp-skill'), dataAiHint: getHint('datacamp-skill'), pricing: 'Freemium' },
    { name: 'Codecademy', description: 'Learn to code with interactive lessons.', url: 'https://www.codecademy.com/', image: getImage('codecademy-skill'), dataAiHint: getHint('codecademy-skill'), pricing: 'Freemium' },
    { name: 'Brilliant.org', description: 'Build quantitative skills in math, science, and computer science.', url: 'https://brilliant.org/', image: getImage('brilliant-skill'), dataAiHint: getHint('brilliant-skill'), pricing: 'Paid' },
];

