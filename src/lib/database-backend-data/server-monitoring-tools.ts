
import type { Tool } from '@/lib/types';

export const serverMonitoringTools: Tool[] = [
    { name: 'Datadog', description: 'Monitoring and security platform for cloud applications.', url: 'https://www.datadoghq.com/', image: 'https://picsum.photos/seed/datadog-monitor/600/400', dataAiHint: 'cloud monitoring', pricing: 'Paid' },
    { name: 'New Relic', description: 'Observability platform for all your telemetry data.', url: 'https://newrelic.com/', image: 'https://picsum.photos/seed/newrelic-monitor/600/400', dataAiHint: 'observability', pricing: 'Freemium' },
    { name: 'Prometheus', description: 'An open-source monitoring system and time series database.', url: 'https://prometheus.io/', image: 'https://picsum.photos/seed/prometheus-monitor/600/400', dataAiHint: 'monitoring system', pricing: 'Free' },
    { name: 'Grafana', description: 'The open observability platform.', url: 'https://grafana.com/', image: 'https://picsum.photos/seed/grafana-monitor/600/400', dataAiHint: 'data visualization', pricing: 'Freemium' },
    { name: 'Splunk', description: 'The Data-to-Everything Platform for search, monitoring, and analysis.', url: 'https://www.splunk.com/', image: 'https://picsum.photos/seed/splunk/600/400', dataAiHint: 'data platform', pricing: 'Paid' },
    { name: 'Zabbix', description: 'An open-source monitoring solution for network and application monitoring.', url: 'https://www.zabbix.com/', image: 'https://picsum.photos/seed/zabbix/600/400', dataAiHint: 'network monitoring', pricing: 'Free' },
    { name: 'Nagios', description: 'An open source software for monitoring systems, networks and infrastructure.', url: 'https://www.nagios.org/', image: 'https://picsum.photos/seed/nagios/600/400', dataAiHint: 'it monitoring', pricing: 'Free' },
    { name: 'Dynatrace', description: 'Software intelligence for the enterprise cloud.', url: 'https://www.dynatrace.com/', image: 'https://picsum.photos/seed/dynatrace/600/400', dataAiHint: 'software intelligence', pricing: 'Paid' },
    { name: 'AppDynamics', description: 'Application performance management and IT operations analytics.', url: 'https://www.appdynamics.com/', image: 'https://picsum.photos/seed/appdynamics/600/400', dataAiHint: 'apm', pricing: 'Paid' },
    { name: 'Checkmk', description: 'A leading tool for infrastructure and application monitoring.', url: 'https://checkmk.com/', image: 'https://picsum.photos/seed/checkmk/600/400', dataAiHint: 'infrastructure monitoring', pricing: 'Freemium' },
];
