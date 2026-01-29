
import type { Tool } from '@/lib/types';

export const analyticsOlapDatabasesTools: Tool[] = [
    { name: 'ClickHouse', description: 'An open-source, high performance columnar OLAP database.', url: 'https://clickhouse.com/', image: 'https://picsum.photos/seed/clickhouse/600/400', dataAiHint: 'columnar database', pricing: 'Free' },
    { name: 'Apache Druid', description: 'A real-time analytics database.', url: 'https://druid.apache.org/', image: 'https://picsum.photos/seed/druid/600/400', dataAiHint: 'real-time analytics', pricing: 'Free' },
    { name: 'Snowflake', description: 'The Data Cloud for analytics and data warehousing.', url: 'https://www.snowflake.com/', image: 'https://picsum.photos/seed/snowflake-olap/600/400', dataAiHint: 'data cloud', pricing: 'Paid' },
    { name: 'Google BigQuery', description: 'A serverless, highly scalable, and cost-effective cloud data warehouse.', url: 'https://cloud.google.com/bigquery', image: 'https://picsum.photos/seed/bigquery/600/400', dataAiHint: 'data warehouse', pricing: 'Paid' },
    { name: 'Amazon Redshift', description: 'Fast, simple, cost-effective data warehousing.', url: 'https://aws.amazon.com/redshift/', image: 'https://picsum.photos/seed/redshift/600/400', dataAiHint: 'aws data', pricing: 'Paid' },
    { name: 'Apache Pinot', description: 'A real-time distributed OLAP datastore.', url: 'https://pinot.apache.org/', image: 'https://picsum.photos/seed/pinot/600/400', dataAiHint: 'olap datastore', pricing: 'Free' },
    { name: 'Vertica', description: 'An analytics platform for data-driven organizations.', url: 'https://www.vertica.com/', image: 'https://picsum.photos/seed/vertica/600/400', dataAiHint: 'analytics platform', pricing: 'Paid' },
    { name: 'Teradata', description: 'Connected multi-cloud data platform for enterprise analytics.', url: 'https://www.teradata.com/', image: 'https://picsum.photos/seed/teradata/600/400', dataAiHint: 'enterprise analytics', pricing: 'Paid' },
    { name: 'Yellowbrick', description: 'The fastest data warehouse for hybrid and multi-cloud.', url: 'https://yellowbrick.com/', image: 'https://picsum.photos/seed/yellowbrick/600/400', dataAiHint: 'hybrid cloud', pricing: 'Paid' },
    { name: 'Kylin', description: 'Open source Distributed Analytics Engine from Apache.', url: 'https://kylin.apache.org/', image: 'https://picsum.photos/seed/kylin/600/400', dataAiHint: 'analytics engine', pricing: 'Free' },
];
