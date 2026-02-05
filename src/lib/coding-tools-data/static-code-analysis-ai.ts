
import type { Tool } from '@/lib/types';

export const staticCodeAnalysisAiTools: Tool[] = [
    { name: 'SonarQube', description: 'Continuous Code Quality.', url: 'https://www.sonarqube.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sonarqube.org', dataAiHint: 'code quality', pricing: 'Free' },
    { name: 'DeepSource', description: 'Fast and reliable static analysis.', url: 'https://deepsource.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=deepsource.io', dataAiHint: 'static analysis', pricing: 'Freemium' },
    { name: 'Veracode', description: 'Automated application security.', url: 'https://www.veracode.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=veracode.com', dataAiHint: 'appsec', pricing: 'Paid' },
    { name: 'Checkmarx', description: 'Application security testing.', url: 'https://checkmarx.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=checkmarx.com', dataAiHint: 'sast', pricing: 'Paid' },
    { name: 'ESLint', description: 'Find and fix problems in your JavaScript code.', url: 'https://eslint.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=eslint.org', dataAiHint: 'javascript linter', pricing: 'Free' },
    { name: 'Codacy', description: 'Automated code reviews and code analytics.', url: 'https://www.codacy.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=codacy.com', dataAiHint: 'code reviews', pricing: 'Freemium' },
    { name: 'Snyk Code', description: 'Static application security testing (SAST) that finds and fixes vulnerabilities.', url: 'https://snyk.io/product/snyk-code/', image: 'https://www.google.com/s2/favicons?sz=128&domain=snyk.io', dataAiHint: 'sast tool', pricing: 'Freemium' },
    { name: 'PMD', description: 'An extensible cross-language static code analyzer.', url: 'https://pmd.github.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pmd.github.io', dataAiHint: 'code analyzer', pricing: 'Free' },
    { name: 'FindBugs', description: 'Find bugs in Java programs (now SpotBugs).', url: 'https://spotbugs.github.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=spotbugs.github.io', dataAiHint: 'java bugs', pricing: 'Free' },
    { name: 'CodeQL', description: 'Code analysis engine developed by GitHub.', url: 'https://codeql.github.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=codeql.github.com', dataAiHint: 'semantic analysis', pricing: 'Free' },
];
