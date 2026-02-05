
import type { Tool } from '@/lib/types';

export const infrastructureAsCodeAiTools: Tool[] = [
    { name: 'Terraform', description: 'Build, change, and version infrastructure safely and efficiently.', url: 'https://www.terraform.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=terraform.io', dataAiHint: 'iac tool', pricing: 'Free' },
    { name: 'Pulumi', description: 'Infrastructure as code in any language.', url: 'https://www.pulumi.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pulumi.com', dataAiHint: 'cloud engineering', pricing: 'Freemium' },
    { name: 'AWS CloudFormation', description: 'Model and provision all your cloud infrastructure resources.', url: 'https://aws.amazon.com/cloudformation/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aws.amazon.com', dataAiHint: 'aws iac', pricing: 'Paid' },
    { name: 'Ansible', description: 'Simple, agentless IT automation.', url: 'https://www.ansible.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ansible.com', dataAiHint: 'it automation', pricing: 'Free' },
    { name: 'Chef', description: 'Automate infrastructure and application delivery.', url: 'https://www.chef.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=chef.io', dataAiHint: 'devsecops', pricing: 'Paid' },
    { name: 'Puppet', description: 'Infrastructure automation and delivery.', url: 'https://www.puppet.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=puppet.com', dataAiHint: 'config management', pricing: 'Paid' },
    { name: 'Salt', description: 'Intelligent IT automation.', url: 'https://www.saltstack.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=saltstack.com', dataAiHint: 'event-driven automation', pricing: 'Free' },
    { name: 'Azure Resource Manager (ARM)', description: 'Deployment and management service for Azure.', url: 'https://azure.microsoft.com/en-us/features/resource-manager/', image: 'https://www.google.com/s2/favicons?sz=128&domain=azure.microsoft.com', dataAiHint: 'azure iac', pricing: 'Paid' },
    { name: 'Google Cloud Deployment Manager', description: 'Infrastructure deployment service for Google Cloud.', url: 'https://cloud.google.com/deployment-manager', image: 'https://www.google.com/s2/favicons?sz=128&domain=cloud.google.com', dataAiHint: 'gcp iac', pricing: 'Paid' },
    { name: 'Crossplane', description: 'The cloud native control plane framework.', url: 'https://www.crossplane.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=crossplane.io', dataAiHint: 'kubernetes iac', pricing: 'Free' },
];
