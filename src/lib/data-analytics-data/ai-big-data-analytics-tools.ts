
import type { Tool } from '@/lib/types';

export const aiBigDataAnalyticsTools: Tool[] = [
    { name: 'Snowflake', description: 'The Data Cloud for big data analytics.', url: 'https://www.snowflake.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=snowflake.com', dataAiHint: 'data cloud', pricing: 'Paid' },
    { name: 'Apache Spark', description: 'A unified analytics engine for large-scale data processing.', url: 'https://spark.apache.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=apache.org', dataAiHint: 'data processing', pricing: 'Free' },
    { name: 'Hadoop', description: 'Framework for distributed storage and processing of big data.', url: 'https://hadoop.apache.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=apache.org', dataAiHint: 'distributed storage', pricing: 'Free' },
    { name: 'Google BigQuery', description: 'Serverless, highly scalable, and cost-effective cloud data warehouse.', url: 'https://cloud.google.com/bigquery', image: 'https://www.google.com/s2/favicons?sz=128&domain=cloud.google.com', dataAiHint: 'data warehouse', pricing: 'Paid' },
    { name: 'Amazon Redshift', description: 'Fast, simple, cost-effective data warehousing.', url: 'https://aws.amazon.com/redshift/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aws.amazon.com', dataAiHint: 'aws data', pricing: 'Paid' },
    { name: 'Databricks', description: 'Unified data analytics platform.', url: 'https://databricks.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=databricks.com', dataAiHint: 'data lakehouse', pricing: 'Paid' },
    { name: 'Cloudera', description: 'Hybrid data platform for analytics and machine learning.', url: 'https://www.cloudera.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=cloudera.com', dataAiHint: 'hybrid data', pricing: 'Paid' },
    { name: 'Teradata Vantage', description: 'Connected multi-cloud data platform for enterprise analytics.', url: 'https://www.teradata.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=teradata.com', dataAiHint: 'enterprise analytics', pricing: 'Paid' },
    { name: 'Presto', description: 'A distributed SQL query engine for big data.', url: 'https://prestodb.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=prestodb.io', dataAiHint: 'sql query engine', pricing: 'Free' },
    { name: 'Dremio', description: 'An easy and open data lakehouse platform.', url: 'https://www.dremio.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=dremio.com', dataAiHint: 'data lakehouse', pricing: 'Freemium' },
];
