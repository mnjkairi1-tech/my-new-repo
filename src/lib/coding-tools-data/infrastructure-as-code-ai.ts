
import type { Tool } from '@/lib/types';

export const infrastructureAsCodeAiTools: Tool[] = [
    { name: 'Terraform', description: 'Build, change, and version infrastructure safely and efficiently.', url: 'https://www.terraform.io/', image: 'https://picsum.photos/seed/terraform/600/400', dataAiHint: 'iac tool', pricing: 'Free' },
    { name: 'Pulumi', description: 'Infrastructure as code in any language.', url: 'https://www.pulumi.com/', image: 'https://picsum.photos/seed/pulumi/600/400', dataAiHint: 'cloud engineering', pricing: 'Freemium' },
    { name: 'AWS CloudFormation', description: 'Model and provision all your cloud infrastructure resources.', url: 'https://aws.amazon.com/cloudformation/', image: 'https://picsum.photos/seed/cloudformation/600/400', dataAiHint: 'aws iac', pricing: 'Paid' },
    { name: 'Ansible', description: 'Simple, agentless IT automation.', url: 'https://www.ansible.com/', image: 'https://picsum.photos/seed/ansible/600/400', dataAiHint: 'it automation', pricing: 'Free' },
    { name: 'Chef', description: 'Automate infrastructure and application delivery.', url: 'https://www.chef.io/', image: 'https://picsum.photos/seed/chef/600/400', dataAiHint: 'devsecops', pricing: 'Paid' },
    { name: 'Puppet', description: 'Infrastructure automation and delivery.', url: 'https://www.puppet.com/', image: 'https://picsum.photos/seed/puppet-iac/600/400', dataAiHint: 'config management', pricing: 'Paid' },
    { name: 'Salt', description: 'Intelligent IT automation.', url: 'https://www.saltstack.com/', image: 'https://picsum.photos/seed/salt-iac/600/400', dataAiHint: 'event-driven automation', pricing: 'Free' },
    { name: 'Azure Resource Manager (ARM)', description: 'Deployment and management service for Azure.', url: 'https://azure.microsoft.com/en-us/features/resource-manager/', image: 'https://picsum.photos/seed/arm-iac/600/400', dataAiHint: 'azure iac', pricing: 'Paid' },
    { name: 'Google Cloud Deployment Manager', description: 'Infrastructure deployment service for Google Cloud.', url: 'https://cloud.google.com/deployment-manager', image: 'https://picsum.photos/seed/gcp-dm/600/400', dataAiHint: 'gcp iac', pricing: 'Paid' },
    { name: 'Crossplane', description: 'The cloud native control plane framework.', url: 'https://www.crossplane.io/', image: 'https://picsum.photos/seed/crossplane/600/400', dataAiHint: 'kubernetes iac', pricing: 'Free' },
];
