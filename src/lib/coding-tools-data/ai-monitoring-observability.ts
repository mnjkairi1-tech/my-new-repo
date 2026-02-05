
import type { Tool } from '@/lib/types';

export const aiMonitoringObservabilityTools: Tool[] = [
    { name: 'Datadog', description: 'Monitoring and security platform for cloud applications.', url: 'https://www.datadoghq.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=datadoghq.com', dataAiHint: 'cloud monitoring', pricing: 'Paid' },
    { name: 'New Relic', description: 'Observability platform for all your telemetry data.', url: 'https://newrelic.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=newrelic.com', dataAiHint: 'observability', pricing: 'Freemium' },
    { name: 'Dynatrace', description: 'Software intelligence for the enterprise cloud.', url: 'https://www.dynatrace.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=dynatrace.com', dataAiHint: 'software intelligence', pricing: 'Paid' },
    { name: 'Splunk', description: 'The Data-to-Everything Platform.', url: 'https://www.splunk.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=splunk.com', dataAiHint: 'data platform', pricing: 'Freemium' },
    { name: 'Prometheus', description: 'An open-source monitoring system.', url: 'https://prometheus.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=prometheus.io', dataAiHint: 'open source', pricing: 'Free' },
    { name: 'Grafana', description: 'The open observability platform.', url: 'https://grafana.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=grafana.com', dataAiHint: 'dashboards', pricing: 'Freemium' },
    { name: 'AppDynamics', description: 'Application performance management and IT operations analytics.', url: 'https://www.appdynamics.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=appdynamics.com', dataAiHint: 'apm', pricing: 'Paid' },
    { name: 'Lightstep', description: 'Enterprise observability.', url: 'https://lightstep.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lightstep.com', dataAiHint: 'distributed tracing', pricing: 'Paid' },
    { name: 'Honeycomb', description: 'Observability for modern engineering teams.', url: 'https://www.honeycomb.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=honeycomb.io', dataAiHint: 'engineering teams', pricing: 'Freemium' },
    { name: 'Elastic Stack', description: 'Stack for search, observability, and security.', url: 'https://www.elastic.co/', image: 'https://www.google.com/s2/favicons?sz=128&domain=elastic.co', dataAiHint: 'elk stack', pricing: 'Freemium' },
];
