
import type { Tool } from '@/lib/types';

export const containerizationTools: Tool[] = [
    { name: 'Docker', description: 'Platform for developing, shipping, and running applications in containers.', url: 'https://www.docker.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=docker.com', dataAiHint: 'container platform', pricing: 'Freemium' },
    { name: 'Podman', description: 'A daemonless container engine for developing, managing, and running OCI Containers.', url: 'https://podman.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=podman.io', dataAiHint: 'container engine', pricing: 'Free' },
    { name: 'Buildah', description: 'A tool that facilitates building OCI container images.', url: 'https://buildah.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=buildah.io', dataAiHint: 'oci images', pricing: 'Free' },
    { name: 'containerd', description: 'An industry-standard container runtime.', url: 'https://containerd.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=containerd.io', dataAiHint: 'container runtime', pricing: 'Free' },
    { name: 'LXC', description: 'Linux Containers - OS-level virtualization method.', url: 'https://linuxcontainers.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=linuxcontainers.org', dataAiHint: 'linux containers', pricing: 'Free' },
    { name: 'Rancher', description: 'Enterprise management for Kubernetes.', url: 'https://www.rancher.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=rancher.com', dataAiHint: 'kubernetes management', pricing: 'Paid' },
    { name: 'OpenShift', description: 'The Enterprise Kubernetes Platform.', url: 'https://www.redhat.com/en/technologies/cloud-computing/openshift', image: 'https://www.google.com/s2/favicons?sz=128&domain=redhat.com', dataAiHint: 'kubernetes platform', pricing: 'Paid' },
    { name: 'Kaniko', description: 'A tool to build container images from a Dockerfile, inside a container or Kubernetes cluster.', url: 'https://github.com/GoogleContainerTools/kaniko', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'build container', pricing: 'Free' },
    { name: 'Skopeo', description: 'A command line utility that performs various operations on container images.', url: 'https://github.com/containers/skopeo', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'container image utility', pricing: 'Free' },
    { name: 'Portainer', description: 'A lightweight management UI which allows you to easily manage your different Docker environments.', url: 'https://www.portainer.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=portainer.io', dataAiHint: 'docker ui', pricing: 'Freemium' },
];
