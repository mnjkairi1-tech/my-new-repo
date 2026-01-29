
import type { Tool } from '@/lib/types';

export const timeSeriesDatabasesTools: Tool[] = [
    { name: 'InfluxDB', description: 'An open-source time series database.', url: 'https://www.influxdata.com/', image: 'https://picsum.photos/seed/influxdb/600/400', dataAiHint: 'time series', pricing: 'Freemium' },
    { name: 'TimescaleDB', description: 'An open-source database for time-series data, built on PostgreSQL.', url: 'https://www.timescale.com/', image: 'https://picsum.photos/seed/timescaledb/600/400', dataAiHint: 'postgres time-series', pricing: 'Freemium' },
    { name: 'Prometheus', description: 'An open-source monitoring system with a time series database.', url: 'https://prometheus.io/', image: 'https://picsum.photos/seed/prometheus-tsdb/600/400', dataAiHint: 'monitoring system', pricing: 'Free' },
    { name: 'Graphite', description: 'An open-source time-series database and graphing tool.', url: 'https://graphiteapp.org/', image: 'https://picsum.photos/seed/graphite-db/600/400', dataAiHint: 'tsdb graphing', pricing: 'Free' },
    { name: 'OpenTSDB', description: 'A scalable, distributed, time series database.', url: 'http://opentsdb.net/', image: 'https://picsum.photos/seed/opentsdb/600/400', dataAiHint: 'scalable tsdb', pricing: 'Free' },
    { name: 'QuestDB', description: 'An open source SQL database for time series.', url: 'https://questdb.io/', image: 'https://picsum.photos/seed/questdb/600/400', dataAiHint: 'sql time series', pricing: 'Free' },
    { name: 'Amazon Timestream', description: 'A fast, scalable, and serverless time series database service.', url: 'https://aws.amazon.com/timestream/', image: 'https://picsum.photos/seed/timestream/600/400', dataAiHint: 'aws time series', pricing: 'Paid' },
    { name: 'Azure Time Series Insights', description: 'An end-to-end platform for industrial IoT analytics.', url: 'https://azure.microsoft.com/en-us/products/time-series-insights/', image: 'https://picsum.photos/seed/azure-tsi/600/400', dataAiHint: 'iot analytics', pricing: 'Paid' },
    { name: 'VictoriaMetrics', description: 'A fast, cost-effective and scalable monitoring solution and time series database.', url: 'https://victoriametrics.com/', image: 'https://picsum.photos/seed/victoriametrics/600/400', dataAiHint: 'prometheus alternative', pricing: 'Free' },
    { name: 'M3', description: 'An open-source, large-scale metrics platform from Uber.', url: 'https://m3db.io/', image: 'https://picsum.photos/seed/m3db/600/400', dataAiHint: 'metrics platform', pricing: 'Free' },
];
