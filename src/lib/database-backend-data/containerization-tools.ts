
import type { Tool } from '@/lib/types';

export const containerizationTools: Tool[] = [
    { name: 'Docker', description: 'Platform for developing, shipping, and running applications in containers.', url: 'https://www.docker.com/', image: 'https://picsum.photos/seed/docker/600/400', dataAiHint: 'container platform', pricing: 'Freemium' },
    { name: 'Podman', description: 'A daemonless container engine for developing, managing, and running OCI Containers.', url: 'https://podman.io/', image: 'https://picsum.photos/seed/podman/600/400', dataAiHint: 'container engine', pricing: 'Free' },
    { name: 'Buildah', description: 'A tool that facilitates building OCI container images.', url: 'https://buildah.io/', image: 'https://picsum.photos/seed/buildah/600/400', dataAiHint: 'oci images', pricing: 'Free' },
    { name: 'containerd', description: 'An industry-standard container runtime.', url: 'https://containerd.io/', image: 'https://picsum.photos/seed/containerd/600/400', dataAiHint: 'container runtime', pricing: 'Free' },
    { name: 'LXC', description: 'Linux Containers - OS-level virtualization method.', url: 'https://linuxcontainers.org/', image: 'https://picsum.photos/seed/lxc/600/400', dataAiHint: 'linux containers', pricing: 'Free' },
    { name: 'Rancher', description: 'Enterprise management for Kubernetes.', url: 'https://www.rancher.com/', image: 'https://picsum.photos/seed/rancher/600/400', dataAiHint: 'kubernetes management', pricing: 'Paid' },
    { name: 'OpenShift', description: 'The Enterprise Kubernetes Platform.', url: 'https://www.redhat.com/en/technologies/cloud-computing/openshift', image: 'https://picsum.photos/seed/openshift/600/400', dataAiHint: 'kubernetes platform', pricing: 'Paid' },
    { name: 'Kaniko', description: 'A tool to build container images from a Dockerfile, inside a container or Kubernetes cluster.', url: 'https://github.com/GoogleContainerTools/kaniko', image: 'https://picsum.photos/seed/kaniko/600/400', dataAiHint: 'build container', pricing: 'Free' },
    { name: 'Skopeo', description: 'A command line utility that performs various operations on container images.', url: 'https://github.com/containers/skopeo', image: 'https://picsum.photos/seed/skopeo/600/400', dataAiHint: 'container image utility', pricing: 'Free' },
    { name: 'Portainer', description: 'A lightweight management UI which allows you to easily manage your different Docker environments.', url: 'https://www.portainer.io/', image: 'https://picsum.photos/seed/portainer/600/400', dataAiHint: 'docker ui', pricing: 'Freemium' },
];
