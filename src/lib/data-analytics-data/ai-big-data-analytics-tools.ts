
import type { Tool } from '@/lib/types';

export const aiBigDataAnalyticsTools: Tool[] = [
    { name: 'Snowflake', description: 'The Data Cloud for big data analytics.', url: 'https://www.snowflake.com/', image: 'https://picsum.photos/seed/snowflake-bigdata/600/400', dataAiHint: 'data cloud', pricing: 'Paid' },
    { name: 'Apache Spark', description: 'A unified analytics engine for large-scale data processing.', url: 'https://spark.apache.org/', image: 'https://picsum.photos/seed/spark/600/400', dataAiHint: 'data processing', pricing: 'Free' },
    { name: 'Hadoop', description: 'Framework for distributed storage and processing of big data.', url: 'https://hadoop.apache.org/', image: 'https://picsum.photos/seed/hadoop/600/400', dataAiHint: 'distributed storage', pricing: 'Free' },
    { name: 'Google BigQuery', description: 'Serverless, highly scalable, and cost-effective cloud data warehouse.', url: 'https://cloud.google.com/bigquery', image: 'https://picsum.photos/seed/bigquery/600/400', dataAiHint: 'data warehouse', pricing: 'Paid' },
    { name: 'Amazon Redshift', description: 'Fast, simple, cost-effective data warehousing.', url: 'https://aws.amazon.com/redshift/', image: 'https://picsum.photos/seed/redshift/600/400', dataAiHint: 'aws data', pricing: 'Paid' },
    { name: 'Databricks', description: 'Unified data analytics platform.', url: 'https://databricks.com/', image: 'https://picsum.photos/seed/databricks-bigdata/600/400', dataAiHint: 'data lakehouse', pricing: 'Paid' },
    { name: 'Cloudera', description: 'Hybrid data platform for analytics and machine learning.', url: 'https://www.cloudera.com/', image: 'https://picsum.photos/seed/cloudera-bigdata/600/400', dataAiHint: 'hybrid data', pricing: 'Paid' },
    { name: 'Teradata Vantage', description: 'Connected multi-cloud data platform for enterprise analytics.', url: 'https://www.teradata.com/', image: 'https://picsum.photos/seed/teradata-bigdata/600/400', dataAiHint: 'enterprise analytics', pricing: 'Paid' },
    { name: 'Presto', description: 'A distributed SQL query engine for big data.', url: 'https://prestodb.io/', image: 'https://picsum.photos/seed/presto-bigdata/600/400', dataAiHint: 'sql query engine', pricing: 'Free' },
    { name: 'Dremio', description: 'An easy and open data lakehouse platform.', url: 'https://www.dremio.com/', image: 'https://picsum.photos/seed/dremio-bigdata/600/400', dataAiHint: 'data lakehouse', pricing: 'Freemium' },
];
