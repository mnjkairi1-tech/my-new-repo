
import type { Tool } from '@/lib/types';

export const devopsAiTools: Tool[] = [
    { name: 'Harness', description: 'Modern software delivery platform.', url: 'https://harness.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=harness.io', dataAiHint: 'ci/cd', pricing: 'Freemium' },
    { name: 'Datadog', description: 'Monitoring and security platform for cloud applications.', url: 'https://www.datadoghq.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=datadoghq.com', dataAiHint: 'cloud monitoring', pricing: 'Paid' },
    { name: 'New Relic', description: 'Observability platform for all your telemetry data.', url: 'https://newrelic.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=newrelic.com', dataAiHint: 'observability', pricing: 'Freemium' },
    { name: 'CircleCI', description: 'Continuous integration and delivery platform.', url: 'https://circleci.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=circleci.com', dataAiHint: 'ci/cd platform', pricing: 'Freemium' },
    { name: 'Jenkins', description: 'Open source automation server.', url: 'https://www.jenkins.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=jenkins.io', dataAiHint: 'automation server', pricing: 'Free' },
    { name: 'GitLab', description: 'The One DevOps Platform.', url: 'https://about.gitlab.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=about.gitlab.com', dataAiHint: 'devops lifecycle', pricing: 'Freemium' },
    { name: 'Splunk', description: 'The Data-to-Everything Platform.', url: 'https://www.splunk.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=splunk.com', dataAiHint: 'log analysis', pricing: 'Paid' },
    { name: 'Ansible', description: 'Simple, agentless IT automation.', url: 'https://www.ansible.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ansible.com', dataAiHint: 'configuration management', pricing: 'Free' },
    { name: 'Puppet', description: 'Infrastructure automation and delivery.', url: 'https://www.puppet.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=puppet.com', dataAiHint: 'infrastructure as code', pricing: 'Paid' },
    { name: 'Chef', description: 'Automate infrastructure, compliance, and applications.', url: 'https://www.chef.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=chef.io', dataAiHint: 'devsecops', pricing: 'Paid' },
];
