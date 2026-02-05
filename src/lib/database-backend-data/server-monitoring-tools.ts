
import type { Tool } from '@/lib/types';

export const serverMonitoringTools: Tool[] = [
    { name: 'Datadog', description: 'Monitoring and security platform for cloud applications.', url: 'https://www.datadoghq.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=datadoghq.com', dataAiHint: 'cloud monitoring', pricing: 'Paid' },
    { name: 'New Relic', description: 'Observability platform for all your telemetry data.', url: 'https://newrelic.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=newrelic.com', dataAiHint: 'observability', pricing: 'Freemium' },
    { name: 'Prometheus', description: 'An open-source monitoring system and time series database.', url: 'https://prometheus.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=prometheus.io', dataAiHint: 'monitoring system', pricing: 'Free' },
    { name: 'Grafana', description: 'The open observability platform.', url: 'https://grafana.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=grafana.com', dataAiHint: 'data visualization', pricing: 'Freemium' },
    { name: 'Splunk', description: 'The Data-to-Everything Platform for search, monitoring, and analysis.', url: 'https://www.splunk.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=splunk.com', dataAiHint: 'data platform', pricing: 'Paid' },
    { name: 'Zabbix', description: 'An open-source monitoring solution for network and application monitoring.', url: 'https://www.zabbix.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=zabbix.com', dataAiHint: 'network monitoring', pricing: 'Free' },
    { name: 'Nagios', description: 'An open source software for monitoring systems, networks and infrastructure.', url: 'https://www.nagios.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=nagios.org', dataAiHint: 'it monitoring', pricing: 'Free' },
    { name: 'Dynatrace', description: 'Software intelligence for the enterprise cloud.', url: 'https://www.dynatrace.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=dynatrace.com', dataAiHint: 'software intelligence', pricing: 'Paid' },
    { name: 'AppDynamics', description: 'Application performance management and IT operations analytics.', url: 'https://www.appdynamics.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=appdynamics.com', dataAiHint: 'apm', pricing: 'Paid' },
    { name: 'Checkmk', description: 'A leading tool for infrastructure and application monitoring.', url: 'https://checkmk.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=checkmk.com', dataAiHint: 'infrastructure monitoring', pricing: 'Freemium' },
];
