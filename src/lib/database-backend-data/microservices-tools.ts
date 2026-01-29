
import type { Tool } from '@/lib/types';

export const microservicesTools: Tool[] = [
    { name: 'Docker', description: 'Platform for developing, shipping, and running applications in containers.', url: 'https://www.docker.com/', image: 'https://picsum.photos/seed/docker-micro/600/400', dataAiHint: 'containerization', pricing: 'Freemium' },
    { name: 'Kubernetes', description: 'An open-source system for automating deployment and management of containerized applications.', url: 'https://kubernetes.io/', image: 'https://picsum.photos/seed/kubernetes-micro/600/400', dataAiHint: 'container orchestration', pricing: 'Free' },
    { name: 'Istio', description: 'An open platform to connect, manage, and secure microservices.', url: 'https://istio.io/', image: 'https://picsum.photos/seed/istio-micro/600/400', dataAiHint: 'service mesh', pricing: 'Free' },
    { name: 'gRPC', description: 'A high performance, open source universal RPC framework.', url: 'https://grpc.io/', image: 'https://picsum.photos/seed/grpc-micro/600/400', dataAiHint: 'rpc framework', pricing: 'Free' },
    { name: 'Spring Boot', description: 'A framework for building microservices in Java.', url: 'https://spring.io/projects/spring-boot', image: 'https://picsum.photos/seed/springboot-micro/600/400', dataAiHint: 'java microservices', pricing: 'Free' },
    { name: 'Micronaut', description: 'A modern, JVM-based, full-stack framework for building microservice applications.', url: 'https://micronaut.io/', image: 'https://picsum.photos/seed/micronaut/600/400', dataAiHint: 'jvm framework', pricing: 'Free' },
    { name: 'Quarkus', description: 'A Kubernetes Native Java stack.', url: 'https://quarkus.io/', image: 'https://picsum.photos/seed/quarkus/600/400', dataAiHint: 'kubernetes java', pricing: 'Free' },
    { name: 'Consul', description: 'Service mesh solution providing a fully featured control plane.', url: 'https://www.consul.io/', image: 'https://picsum.photos/seed/consul-micro/600/400', dataAiHint: 'service networking', pricing: 'Freemium' },
    { name: 'Linkerd', description: 'An ultralight, security-first service mesh for Kubernetes.', url: 'https://linkerd.io/', image: 'https://picsum.photos/seed/linkerd/600/400', dataAiHint: 'ultralight service mesh', pricing: 'Free' },
    { name: 'Kong', description: 'A cloud-native API gateway and platform.', url: 'https://konghq.com/', image: 'https://picsum.photos/seed/kong-micro/600/400', dataAiHint: 'api gateway', pricing: 'Freemium' },
];
