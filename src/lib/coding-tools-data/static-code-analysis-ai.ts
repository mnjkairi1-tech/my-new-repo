
import type { Tool } from '@/lib/types';

export const staticCodeAnalysisAiTools: Tool[] = [
    { name: 'SonarQube', description: 'Continuous Code Quality.', url: 'https://www.sonarqube.org/', image: 'https://picsum.photos/seed/sonarqube-static/600/400', dataAiHint: 'code quality', pricing: 'Free' },
    { name: 'DeepSource', description: 'Fast and reliable static analysis.', url: 'https://deepsource.io/', image: 'https://picsum.photos/seed/deepsource-static/600/400', dataAiHint: 'static analysis', pricing: 'Freemium' },
    { name: 'Veracode', description: 'Automated application security.', url: 'https://www.veracode.com/', image: 'https://picsum.photos/seed/veracode-static/600/400', dataAiHint: 'appsec', pricing: 'Paid' },
    { name: 'Checkmarx', description: 'Application security testing.', url: 'https://checkmarx.com/', image: 'https://picsum.photos/seed/checkmarx-static/600/400', dataAiHint: 'sast', pricing: 'Paid' },
    { name: 'ESLint', description: 'Find and fix problems in your JavaScript code.', url: 'https://eslint.org/', image: 'https://picsum.photos/seed/eslint-static/600/400', dataAiHint: 'javascript linter', pricing: 'Free' },
    { name: 'Codacy', description: 'Automated code reviews and code analytics.', url: 'https://www.codacy.com/', image: 'https://picsum.photos/seed/codacy-static/600/400', dataAiHint: 'code reviews', pricing: 'Freemium' },
    { name: 'Snyk Code', description: 'Static application security testing (SAST) that finds and fixes vulnerabilities.', url: 'https://snyk.io/product/snyk-code/', image: 'https://picsum.photos/seed/snyk-static/600/400', dataAiHint: 'sast tool', pricing: 'Freemium' },
    { name: 'PMD', description: 'An extensible cross-language static code analyzer.', url: 'https://pmd.github.io/', image: 'https://picsum.photos/seed/pmd-static/600/400', dataAiHint: 'code analyzer', pricing: 'Free' },
    { name: 'FindBugs', description: 'Find bugs in Java programs (now SpotBugs).', url: 'https://spotbugs.github.io/', image: 'https://picsum.photos/seed/findbugs/600/400', dataAiHint: 'java bugs', pricing: 'Free' },
    { name: 'CodeQL', description: 'Code analysis engine developed by GitHub.', url: 'https://codeql.github.com/', image: 'https://picsum.photos/seed/codeql/600/400', dataAiHint: 'semantic analysis', pricing: 'Free' },
];
