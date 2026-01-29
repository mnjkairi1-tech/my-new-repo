
import type { Tool } from '@/lib/types';

export const aiMonitoringObservabilityTools: Tool[] = [
    { name: 'Datadog', description: 'Monitoring and security platform for cloud applications.', url: 'https://www.datadoghq.com/', image: 'https://picsum.photos/seed/datadog-monitor/600/400', dataAiHint: 'cloud monitoring', pricing: 'Paid' },
    { name: 'New Relic', description: 'Observability platform for all your telemetry data.', url: 'https://newrelic.com/', image: 'https://picsum.photos/seed/newrelic-monitor/600/400', dataAiHint: 'observability', pricing: 'Freemium' },
    { name: 'Dynatrace', description: 'Software intelligence for the enterprise cloud.', url: 'https://www.dynatrace.com/', image: 'https://picsum.photos/seed/dynatrace/600/400', dataAiHint: 'software intelligence', pricing: 'Paid' },
    { name: 'Splunk', description: 'The Data-to-Everything Platform.', url: 'https://www.splunk.com/', image: 'https://picsum.photos/seed/splunk/600/400', dataAiHint: 'data platform', pricing: 'Freemium' },
    { name: 'Prometheus', description: 'An open-source monitoring system.', url: 'https://prometheus.io/', image: 'https://picsum.photos/seed/prometheus/600/400', dataAiHint: 'open source', pricing: 'Free' },
    { name: 'Grafana', description: 'The open observability platform.', url: 'https://grafana.com/', image: 'https://picsum.photos/seed/grafana-monitor/600/400', dataAiHint: 'dashboards', pricing: 'Freemium' },
    { name: 'AppDynamics', description: 'Application performance management and IT operations analytics.', url: 'https://www.appdynamics.com/', image: 'https://picsum.photos/seed/appdynamics/600/400', dataAiHint: 'apm', pricing: 'Paid' },
    { name: 'Lightstep', description: 'Enterprise observability.', url: 'https://lightstep.com/', image: 'https://picsum.photos/seed/lightstep-monitor/600/400', dataAiHint: 'distributed tracing', pricing: 'Paid' },
    { name: 'Honeycomb', description: 'Observability for modern engineering teams.', url: 'https://www.honeycomb.io/', image: 'https://picsum.photos/seed/honeycomb-monitor/600/400', dataAiHint: 'engineering teams', pricing: 'Freemium' },
    { name: 'Elastic Stack', description: 'Stack for search, observability, and security.', url: 'https://www.elastic.co/', image: 'https://picsum.photos/seed/elastic-monitor/600/400', dataAiHint: 'elk stack', pricing: 'Freemium' },
];
