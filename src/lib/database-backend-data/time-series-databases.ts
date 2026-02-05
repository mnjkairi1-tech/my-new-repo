
import type { Tool } from '@/lib/types';

export const timeSeriesDatabasesTools: Tool[] = [
    { name: 'InfluxDB', description: 'An open-source time series database.', url: 'https://www.influxdata.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=influxdata.com', dataAiHint: 'time series', pricing: 'Freemium' },
    { name: 'TimescaleDB', description: 'An open-source database for time-series data, built on PostgreSQL.', url: 'https://www.timescale.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=timescale.com', dataAiHint: 'postgres time-series', pricing: 'Freemium' },
    { name: 'Prometheus', description: 'An open-source monitoring system with a time series database.', url: 'https://prometheus.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=prometheus.io', dataAiHint: 'monitoring system', pricing: 'Free' },
    { name: 'Graphite', description: 'An open-source time-series database and graphing tool.', url: 'https://graphiteapp.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=graphiteapp.org', dataAiHint: 'tsdb graphing', pricing: 'Free' },
    { name: 'OpenTSDB', description: 'A scalable, distributed, time series database.', url: 'http://opentsdb.net/', image: 'https://www.google.com/s2/favicons?sz=128&domain=opentsdb.net', dataAiHint: 'scalable tsdb', pricing: 'Free' },
    { name: 'QuestDB', description: 'An open source SQL database for time series.', url: 'https://questdb.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=questdb.io', dataAiHint: 'sql time series', pricing: 'Free' },
    { name: 'Amazon Timestream', description: 'A fast, scalable, and serverless time series database service.', url: 'https://aws.amazon.com/timestream/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aws.amazon.com', dataAiHint: 'aws time series', pricing: 'Paid' },
    { name: 'Azure Time Series Insights', description: 'An end-to-end platform for industrial IoT analytics.', url: 'https://azure.microsoft.com/en-us/products/time-series-insights/', image: 'https://www.google.com/s2/favicons?sz=128&domain=azure.microsoft.com', dataAiHint: 'iot analytics', pricing: 'Paid' },
    { name: 'VictoriaMetrics', description: 'A fast, cost-effective and scalable monitoring solution and time series database.', url: 'https://victoriametrics.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=victoriametrics.com', dataAiHint: 'prometheus alternative', pricing: 'Free' },
    { name: 'M3', description: 'An open-source, large-scale metrics platform from Uber.', url: 'https://m3db.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=m3db.io', dataAiHint: 'metrics platform', pricing: 'Free' },
];
