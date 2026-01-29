
import type { Tool } from '@/lib/types';

export const devopsAiTools: Tool[] = [
    { name: 'Harness', description: 'Modern software delivery platform.', url: 'https://harness.io/', image: 'https://picsum.photos/seed/harness-devops/600/400', dataAiHint: 'ci/cd', pricing: 'Freemium' },
    { name: 'Datadog', description: 'Monitoring and security platform for cloud applications.', url: 'https://www.datadoghq.com/', image: 'https://picsum.photos/seed/datadog-devops/600/400', dataAiHint: 'cloud monitoring', pricing: 'Paid' },
    { name: 'New Relic', description: 'Observability platform for all your telemetry data.', url: 'https://newrelic.com/', image: 'https://picsum.photos/seed/newrelic-devops/600/400', dataAiHint: 'observability', pricing: 'Freemium' },
    { name: 'CircleCI', description: 'Continuous integration and delivery platform.', url: 'https://circleci.com/', image: 'https://picsum.photos/seed/circleci-devops/600/400', dataAiHint: 'ci/cd platform', pricing: 'Freemium' },
    { name: 'Jenkins', description: 'Open source automation server.', url: 'https://www.jenkins.io/', image: 'https://picsum.photos/seed/jenkins-devops/600/400', dataAiHint: 'automation server', pricing: 'Free' },
    { name: 'GitLab', description: 'The One DevOps Platform.', url: 'https://about.gitlab.com/', image: 'https://picsum.photos/seed/gitlab-devops/600/400', dataAiHint: 'devops lifecycle', pricing: 'Freemium' },
    { name: 'Splunk', description: 'The Data-to-Everything Platform.', url: 'https://www.splunk.com/', image: 'https://picsum.photos/seed/splunk-devops/600/400', dataAiHint: 'log analysis', pricing: 'Paid' },
    { name: 'Ansible', description: 'Simple, agentless IT automation.', url: 'https://www.ansible.com/', image: 'https://picsum.photos/seed/ansible-devops/600/400', dataAiHint: 'configuration management', pricing: 'Free' },
    { name: 'Puppet', description: 'Infrastructure automation and delivery.', url: 'https://www.puppet.com/', image: 'https://picsum.photos/seed/puppet-devops/600/400', dataAiHint: 'infrastructure as code', pricing: 'Paid' },
    { name: 'Chef', description: 'Automate infrastructure, compliance, and applications.', url: 'https://www.chef.io/', image: 'https://picsum.photos/seed/chef-devops/600/400', dataAiHint: 'devsecops', pricing: 'Paid' },
];
