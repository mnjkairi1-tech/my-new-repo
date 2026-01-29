
import type { Tool } from '@/lib/types';

export const aiDataEngineeringTools: Tool[] = [
    { name: 'Databricks', description: 'The Data and AI Company.', url: 'https://www.databricks.com/', image: 'https://picsum.photos/seed/databricks-eng/600/400', dataAiHint: 'data ai', pricing: 'Paid' },
    { name: 'Snowflake', description: 'The Data Cloud.', url: 'https://www.snowflake.com/', image: 'https://picsum.photos/seed/snowflake-eng/600/400', dataAiHint: 'data cloud', pricing: 'Paid' },
    { name: 'dbt', description: 'The transformation layer in the modern data stack.', url: 'https://www.getdbt.com/', image: 'https://picsum.photos/seed/dbt-eng/600/400', dataAiHint: 'data stack', pricing: 'Freemium' },
    { name: 'Fivetran', description: 'Automated data integration.', url: 'https://www.fivetran.com/', image: 'https://picsum.photos/seed/fivetran-eng/600/400', dataAiHint: 'data integration', pricing: 'Paid' },
    { name: 'Apache Airflow', description: 'A platform to programmatically author, schedule, and monitor workflows.', url: 'https://airflow.apache.org/', image: 'https://picsum.photos/seed/airflow-eng/600/400', dataAiHint: 'workflow platform', pricing: 'Free' },
    { name: 'Apache Spark', description: 'A unified analytics engine for large-scale data processing.', url: 'https://spark.apache.org/', image: 'https://picsum.photos/seed/spark-eng/600/400', dataAiHint: 'data processing', pricing: 'Free' },
    { name: 'Stitch', description: 'A simple, powerful ETL service for developers.', url: 'https://www.stitchdata.com/', image: 'https://picsum.photos/seed/stitch-eng/600/400', dataAiHint: 'etl service', pricing: 'Freemium' },
    { name: 'Airbyte', description: 'An open-source data integration platform.', url: 'https://airbyte.com/', image: 'https://picsum.photos/seed/airbyte-eng/600/400', dataAiHint: 'open source etl', pricing: 'Free' },
    { name: 'Matillion', description: 'Cloud-native data integration and transformation.', url: 'https://www.matillion.com/', image: 'https://picsum.photos/seed/matillion-eng/600/400', dataAiHint: 'cloud etl', pricing: 'Paid' },
    { name: 'Great Expectations', description: 'Always know what to expect from your data.', url: 'https://greatexpectations.io/', image: 'https://picsum.photos/seed/greatexpectations-eng/600/400', dataAiHint: 'data validation', pricing: 'Free' },
];
