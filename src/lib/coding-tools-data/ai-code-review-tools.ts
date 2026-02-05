
import type { Tool } from '@/lib/types';

export const aiCodeReviewTools: Tool[] = [
    { name: 'CodeScene', description: 'A behavioral code analysis tool.', url: 'https://codescene.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=codescene.com', dataAiHint: 'code analysis', pricing: 'Freemium' },
    { name: 'DeepSource', description: 'Fast and reliable static analysis.', url: 'https://deepsource.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=deepsource.io', dataAiHint: 'static analysis', pricing: 'Freemium' },
    { name: 'SonarQube', description: 'Continuous Code Quality.', url: 'https://www.sonarqube.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sonarqube.org', dataAiHint: 'code quality', pricing: 'Free' },
    { name: 'CodiumAI', description: 'AI-powered code integrity.', url: 'https://www.codium.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=codium.ai', dataAiHint: 'code integrity', pricing: 'Freemium' },
    { name: 'Bito AI', description: 'Generate amazing code, 10x faster.', url: 'https://bito.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=bito.ai', dataAiHint: 'ai code', pricing: 'Freemium' },
    { name: 'Amazon CodeGuru', description: 'Automated code reviews and application performance recommendations.', url: 'https://aws.amazon.com/codeguru/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aws.amazon.com', dataAiHint: 'aws code', pricing: 'Paid' },
    { name: 'DeepScan', description: 'A cutting-edge static analysis tool for JavaScript, TypeScript, React, and Vue.js.', url: 'https://deepscan.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=deepscan.io', dataAiHint: 'javascript analysis', pricing: 'Freemium' },
    { name: 'Codacy', description: 'Automated code reviews for your team.', url: 'https://www.codacy.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=codacy.com', dataAiHint: 'automated review', pricing: 'Freemium' },
    { name: 'Code Climate', description: 'Automated code review and quality analytics.', url: 'https://codeclimate.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=codeclimate.com', dataAiHint: 'quality analytics', pricing: 'Paid' },
    { name: 'Reviewable', description: 'A code review tool for GitHub pull requests.', url: 'https://reviewable.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=reviewable.io', dataAiHint: 'github review', pricing: 'Paid' },
];
