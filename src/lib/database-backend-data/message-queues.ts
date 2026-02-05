
import type { Tool } from '@/lib/types';

export const messageQueuesTools: Tool[] = [
    { name: 'RabbitMQ', description: 'The most widely deployed open source message broker.', url: 'https://www.rabbitmq.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=rabbitmq.com', dataAiHint: 'message broker', pricing: 'Free' },
    { name: 'Apache Kafka', description: 'A distributed event streaming platform.', url: 'https://kafka.apache.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=kafka.apache.org', dataAiHint: 'event streaming', pricing: 'Free' },
    { name: 'Amazon SQS', description: 'Fully managed message queuing service.', url: 'https://aws.amazon.com/sqs/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aws.amazon.com', dataAiHint: 'message queue', pricing: 'Paid' },
    { name: 'Google Cloud Pub/Sub', description: 'A messaging service for event-driven systems.', url: 'https://cloud.google.com/pubsub', image: 'https://www.google.com/s2/favicons?sz=128&domain=cloud.google.com', dataAiHint: 'messaging service', pricing: 'Paid' },
    { name: 'Azure Service Bus', description: 'Reliable cloud messaging as a service (MaaS).', url: 'https://azure.microsoft.com/en-us/products/service-bus/', image: 'https://www.google.com/s2/favicons?sz=128&domain=azure.microsoft.com', dataAiHint: 'cloud messaging', pricing: 'Paid' },
    { name: 'NATS', description: 'A simple, high performance open source messaging system.', url: 'https://nats.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=nats.io', dataAiHint: 'messaging system', pricing: 'Free' },
    { name: 'Redis', description: 'Can be used as a message broker with its Pub/Sub features.', url: 'https://redis.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=redis.io', dataAiHint: 'pubsub', pricing: 'Freemium' },
    { name: 'ActiveMQ', description: 'An open source message broker from Apache.', url: 'https://activemq.apache.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=activemq.apache.org', dataAiHint: 'apache broker', pricing: 'Free' },
    { name: 'ZeroMQ', description: 'A high-performance asynchronous messaging library.', url: 'https://zeromq.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=zeromq.org', dataAiHint: 'messaging library', pricing: 'Free' },
    { name: 'Pulsar', description: 'A cloud-native, distributed messaging and streaming platform.', url: 'https://pulsar.apache.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pulsar.apache.org', dataAiHint: 'cloud-native', pricing: 'Free' },
];
