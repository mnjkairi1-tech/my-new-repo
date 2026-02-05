
import type { Tool } from '@/lib/types';

export const orchestrationTools: Tool[] = [
    { name: 'Kubernetes', description: 'An open-source system for automating deployment, scaling, and management of containerized applications.', url: 'https://kubernetes.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=kubernetes.io', dataAiHint: 'container orchestration', pricing: 'Free' },
    { name: 'Docker Swarm', description: 'Native clustering for Docker.', url: 'https://docs.docker.com/engine/swarm/', image: 'https://www.google.com/s2/favicons?sz=128&domain=docs.docker.com', dataAiHint: 'docker clustering', pricing: 'Free' },
    { name: 'Nomad', description: 'A simple and flexible workload orchestrator to deploy and manage containers and non-containerized applications.', url: 'https://www.nomadproject.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=nomadproject.io', dataAiHint: 'workload orchestrator', pricing: 'Free' },
    { name: 'Amazon ECS', description: 'A highly scalable, high-performance container orchestration service.', url: 'https://aws.amazon.com/ecs/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aws.amazon.com', dataAiHint: 'aws container', pricing: 'Paid' },
    { name: 'Azure Kubernetes Service (AKS)', description: 'Managed Kubernetes service for deploying and managing containerized applications.', url: 'https://azure.microsoft.com/en-us/products/kubernetes-service/', image: 'https://www.google.com/s2/favicons?sz=128&domain=azure.microsoft.com', dataAiHint: 'azure kubernetes', pricing: 'Paid' },
    { name: 'Google Kubernetes Engine (GKE)', description: 'A managed, production-ready environment for deploying containerized applications.', url: 'https://cloud.google.com/kubernetes-engine', image: 'https://www.google.com/s2/favicons?sz=128&domain=cloud.google.com', dataAiHint: 'google kubernetes', pricing: 'Paid' },
    { name: 'Rancher', description: 'Enterprise management for Kubernetes.', url: 'https://www.rancher.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=rancher.com', dataAiHint: 'kubernetes management', pricing: 'Paid' },
    { name: 'OpenShift', description: 'The Enterprise Kubernetes Platform.', url: 'https://www.redhat.com/en/technologies/cloud-computing/openshift', image: 'https://www.google.com/s2/favicons?sz=128&domain=redhat.com', dataAiHint: 'kubernetes platform', pricing: 'Paid' },
    { name: 'Mesos', description: 'An open-source cluster manager (less common for new projects).', url: 'https://mesos.apache.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mesos.apache.org', dataAiHint: 'cluster manager', pricing: 'Free' },
    { name: 'Helm', description: 'The package manager for Kubernetes.', url: 'https://helm.sh/', image: 'https://www.google.com/s2/favicons?sz=128&domain=helm.sh', dataAiHint: 'kubernetes package', pricing: 'Free' },
];
