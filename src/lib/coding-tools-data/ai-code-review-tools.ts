
import type { Tool } from '@/lib/types';

export const aiCodeReviewTools: Tool[] = [
    { name: 'CodeScene', description: 'A behavioral code analysis tool.', url: 'https://codescene.com/', image: 'https://picsum.photos/seed/codescene/600/400', dataAiHint: 'code analysis', pricing: 'Freemium' },
    { name: 'DeepSource', description: 'Fast and reliable static analysis.', url: 'https://deepsource.io/', image: 'https://picsum.photos/seed/deepsource-review/600/400', dataAiHint: 'static analysis', pricing: 'Freemium' },
    { name: 'SonarQube', description: 'Continuous Code Quality.', url: 'https://www.sonarqube.org/', image: 'https://picsum.photos/seed/sonarqube-review/600/400', dataAiHint: 'code quality', pricing: 'Free' },
    { name: 'CodiumAI', description: 'AI-powered code integrity.', url: 'https://www.codium.ai/', image: 'https://picsum.photos/seed/codiumai-review/600/400', dataAiHint: 'code integrity', pricing: 'Freemium' },
    { name: 'Bito AI', description: 'Generate amazing code, 10x faster.', url: 'https://bito.ai/', image: 'https://picsum.photos/seed/bito-review/600/400', dataAiHint: 'ai code', pricing: 'Freemium' },
    { name: 'Amazon CodeGuru', description: 'Automated code reviews and application performance recommendations.', url: 'https://aws.amazon.com/codeguru/', image: 'https://picsum.photos/seed/codeguru-review/600/400', dataAiHint: 'aws code', pricing: 'Paid' },
    { name: 'DeepScan', description: 'A cutting-edge static analysis tool for JavaScript, TypeScript, React, and Vue.js.', url: 'https://deepscan.io/', image: 'https://picsum.photos/seed/deepscan-review/600/400', dataAiHint: 'javascript analysis', pricing: 'Freemium' },
    { name: 'Codacy', description: 'Automated code reviews for your team.', url: 'https://www.codacy.com/', image: 'https://picsum.photos/seed/codacy-review/600/400', dataAiHint: 'automated review', pricing: 'Freemium' },
    { name: 'Code Climate', description: 'Automated code review and quality analytics.', url: 'https://codeclimate.com/', image: 'https://picsum.photos/seed/codeclimate-review/600/400', dataAiHint: 'quality analytics', pricing: 'Paid' },
    { name: 'Reviewable', description: 'A code review tool for GitHub pull requests.', url: 'https://reviewable.io/', image: 'https://picsum.photos/seed/reviewable/600/400', dataAiHint: 'github review', pricing: 'Paid' },
];
