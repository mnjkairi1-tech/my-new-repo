
import type { Tool } from '@/lib/types';

export const cicdAutomationAiTools: Tool[] = [
    { name: 'GitHub Actions', description: 'Automate your workflow from idea to production.', url: 'https://github.com/features/actions', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'workflow automation', pricing: 'Freemium' },
    { name: 'GitLab CI/CD', description: 'Automate the building, testing, and deployment of your applications.', url: 'https://docs.gitlab.com/ee/ci/', image: 'https://www.google.com/s2/favicons?sz=128&domain=docs.gitlab.com', dataAiHint: 'devops platform', pricing: 'Freemium' },
    { name: 'Jenkins', description: 'Open source automation server.', url: 'https://www.jenkins.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=jenkins.io', dataAiHint: 'automation server', pricing: 'Free' },
    { name: 'CircleCI', description: 'Continuous integration and delivery platform.', url: 'https://circleci.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=circleci.com', dataAiHint: 'ci/cd platform', pricing: 'Freemium' },
    { name: 'Travis CI', description: 'A hosted continuous integration service.', url: 'https://www.travis-ci.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=travis-ci.com', dataAiHint: 'continuous integration', pricing: 'Freemium' },
    { name: 'TeamCity', description: 'A build management and continuous integration server from JetBrains.', url: 'https://www.jetbrains.com/teamcity/', image: 'https://www.google.com/s2/favicons?sz=128&domain=jetbrains.com', dataAiHint: 'build management', pricing: 'Freemium' },
    { name: 'Bamboo', description: 'Continuous integration and delivery tool from Atlassian.', url: 'https://www.atlassian.com/software/bamboo', image: 'https://www.google.com/s2/favicons?sz=128&domain=atlassian.com', dataAiHint: 'atlassian ci', pricing: 'Paid' },
    { name: 'Azure Pipelines', description: 'CI/CD that works with any language, platform, and cloud.', url: 'https://azure.microsoft.com/en-us/products/devops/pipelines/', image: 'https://www.google.com/s2/favicons?sz=128&domain=azure.microsoft.com', dataAiHint: 'azure devops', pricing: 'Freemium' },
    { name: 'Spinnaker', description: 'An open-source, multi-cloud continuous delivery platform.', url: 'https://spinnaker.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=spinnaker.io', dataAiHint: 'continuous delivery', pricing: 'Free' },
    { name: 'Argo CD', description: 'A declarative, GitOps continuous delivery tool for Kubernetes.', url: 'https://argo-cd.readthedocs.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=argo-cd.readthedocs.io', dataAiHint: 'gitops kubernetes', pricing: 'Free' },
];
