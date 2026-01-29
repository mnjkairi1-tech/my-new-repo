
import type { Tool } from '@/lib/types';

export const messageQueuesTools: Tool[] = [
    { name: 'RabbitMQ', description: 'The most widely deployed open source message broker.', url: 'https://www.rabbitmq.com/', image: 'https://picsum.photos/seed/rabbitmq/600/400', dataAiHint: 'message broker', pricing: 'Free' },
    { name: 'Apache Kafka', description: 'A distributed event streaming platform.', url: 'https://kafka.apache.org/', image: 'https://picsum.photos/seed/kafka/600/400', dataAiHint: 'event streaming', pricing: 'Free' },
    { name: 'Amazon SQS', description: 'Fully managed message queuing service.', url: 'https://aws.amazon.com/sqs/', image: 'https://picsum.photos/seed/aws-sqs/600/400', dataAiHint: 'message queue', pricing: 'Paid' },
    { name: 'Google Cloud Pub/Sub', description: 'A messaging service for event-driven systems.', url: 'https://cloud.google.com/pubsub', image: 'https://picsum.photos/seed/gcp-pubsub/600/400', dataAiHint: 'messaging service', pricing: 'Paid' },
    { name: 'Azure Service Bus', description: 'Reliable cloud messaging as a service (MaaS).', url: 'https://azure.microsoft.com/en-us/products/service-bus/', image: 'https://picsum.photos/seed/azure-sb/600/400', dataAiHint: 'cloud messaging', pricing: 'Paid' },
    { name: 'NATS', description: 'A simple, high performance open source messaging system.', url: 'https://nats.io/', image: 'https://picsum.photos/seed/nats/600/400', dataAiHint: 'messaging system', pricing: 'Free' },
    { name: 'Redis', description: 'Can be used as a message broker with its Pub/Sub features.', url: 'https://redis.io/', image: 'https://picsum.photos/seed/redis-mq/600/400', dataAiHint: 'pubsub', pricing: 'Freemium' },
    { name: 'ActiveMQ', description: 'An open source message broker from Apache.', url: 'https://activemq.apache.org/', image: 'https://picsum.photos/seed/activemq/600/400', dataAiHint: 'apache broker', pricing: 'Free' },
    { name: 'ZeroMQ', description: 'A high-performance asynchronous messaging library.', url: 'https://zeromq.org/', image: 'https://picsum.photos/seed/zeromq/600/400', dataAiHint: 'messaging library', pricing: 'Free' },
    { name: 'Pulsar', description: 'A cloud-native, distributed messaging and streaming platform.', url: 'https://pulsar.apache.org/', image: 'https://picsum.photos/seed/pulsar/600/400', dataAiHint: 'cloud-native', pricing: 'Free' },
];
