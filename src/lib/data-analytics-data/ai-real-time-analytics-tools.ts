
import type { Tool } from '@/lib/types';

export const aiRealTimeAnalyticsTools: Tool[] = [
    { name: 'Apache Kafka', description: 'A distributed event streaming platform.', url: 'https://kafka.apache.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=apache.org', dataAiHint: 'event streaming', pricing: 'Free' },
    { name: 'Apache Flink', description: 'Open-source, unified stream-processing and batch-processing framework.', url: 'https://flink.apache.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=apache.org', dataAiHint: 'stream processing', pricing: 'Free' },
    { name: 'Google Analytics', description: 'Real-time reporting on website traffic.', url: 'https://analytics.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'real-time traffic', pricing: 'Free' },
    { name: 'Datadog', description: 'Real-time monitoring and security platform.', url: 'https://www.datadoghq.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=datadoghq.com', dataAiHint: 'cloud monitoring', pricing: 'Paid' },
    { name: 'Mixpanel', description: 'Real-time user analytics.', url: 'https://mixpanel.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mixpanel.com', dataAiHint: 'user analytics', pricing: 'Freemium' },
    { name: 'Apache Spark Streaming', description: 'Scalable, high-throughput, fault-tolerant stream processing.', url: 'https://spark.apache.org/streaming/', image: 'https://www.google.com/s2/favicons?sz=128&domain=apache.org', dataAiHint: 'stream processing', pricing: 'Free' },
    { name: 'Confluent', description: 'Data streaming platform built on Apache Kafka.', url: 'https://www.confluent.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=confluent.io', dataAiHint: 'kafka platform', pricing: 'Paid' },
    { name: 'Materialize', description: 'The streaming database for real-time analytics.', url: 'https://materialize.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=materialize.com', dataAiHint: 'streaming database', pricing: 'Freemium' },
    { name: 'Rockset', description: 'Real-time analytics database.', url: 'https://rockset.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=rockset.com', dataAiHint: 'analytics database', pricing: 'Paid' },
    { name: 'ClickHouse', description: 'An open-source, high performance columnar OLAP database.', url: 'https://clickhouse.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=clickhouse.com', dataAiHint: 'olap database', pricing: 'Free' },
];
