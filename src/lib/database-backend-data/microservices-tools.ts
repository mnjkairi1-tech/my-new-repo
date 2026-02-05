
import type { Tool } from '@/lib/types';

export const microservicesTools: Tool[] = [
    { name: 'Docker', description: 'Platform for developing, shipping, and running applications in containers.', url: 'https://www.docker.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=docker.com', dataAiHint: 'containerization', pricing: 'Freemium' },
    { name: 'Kubernetes', description: 'An open-source system for automating deployment and management of containerized applications.', url: 'https://kubernetes.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=kubernetes.io', dataAiHint: 'container orchestration', pricing: 'Free' },
    { name: 'Istio', description: 'An open platform to connect, manage, and secure microservices.', url: 'https://istio.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=istio.io', dataAiHint: 'service mesh', pricing: 'Free' },
    { name: 'gRPC', description: 'A high performance, open source universal RPC framework.', url: 'https://grpc.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=grpc.io', dataAiHint: 'rpc framework', pricing: 'Free' },
    { name: 'Spring Boot', description: 'A framework for building microservices in Java.', url: 'https://spring.io/projects/spring-boot', image: 'https://www.google.com/s2/favicons?sz=128&domain=spring.io', dataAiHint: 'java microservices', pricing: 'Free' },
    { name: 'Micronaut', description: 'A modern, JVM-based, full-stack framework for building microservice applications.', url: 'https://micronaut.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=micronaut.io', dataAiHint: 'jvm framework', pricing: 'Free' },
    { name: 'Quarkus', description: 'A Kubernetes Native Java stack.', url: 'https://quarkus.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=quarkus.io', dataAiHint: 'kubernetes java', pricing: 'Free' },
    { name: 'Consul', description: 'Service mesh solution providing a fully featured control plane.', url: 'https://www.consul.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=consul.io', dataAiHint: 'service networking', pricing: 'Freemium' },
    { name: 'Linkerd', description: 'An ultralight, security-first service mesh for Kubernetes.', url: 'https://linkerd.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=linkerd.io', dataAiHint: 'ultralight service mesh', pricing: 'Free' },
    { name: 'Kong', description: 'A cloud-native API gateway and platform.', url: 'https://konghq.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=konghq.com', dataAiHint: 'api gateway', pricing: 'Freemium' },
];
