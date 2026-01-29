
import type { Tool } from '@/lib/types';

export const etlDataPipelinesTools: Tool[] = [
    { name: 'Fivetran', description: 'Automated data integration.', url: 'https://www.fivetran.com/', image: 'https://picsum.photos/seed/fivetran/600/400', dataAiHint: 'elt platform', pricing: 'Paid' },
    { name: 'Airbyte', description: 'An open-source data integration platform.', url: 'https://airbyte.com/', image: 'https://picsum.photos/seed/airbyte/600/400', dataAiHint: 'open source etl', pricing: 'Free' },
    { name: 'Apache Airflow', description: 'A platform to programmatically author, schedule, and monitor workflows.', url: 'https://airflow.apache.org/', image: 'https://picsum.photos/seed/airflow/600/400', dataAiHint: 'workflow automation', pricing: 'Free' },
    { name: 'dbt', description: 'The transformation layer in the modern data stack.', url: 'https://www.getdbt.com/', image: 'https://picsum.photos/seed/dbt/600/400', dataAiHint: 'data transformation', pricing: 'Freemium' },
    { name: 'Stitch', description: 'A simple, powerful ETL service for developers.', url: 'https://www.stitchdata.com/', image: 'https://picsum.photos/seed/stitch-etl/600/400', dataAiHint: 'etl service', pricing: 'Freemium' },
    { name: 'Matillion', description: 'Cloud-native data integration and transformation.', url: 'https://www.matillion.com/', image: 'https://picsum.photos/seed/matillion-etl/600/400', dataAiHint: 'cloud etl', pricing: 'Paid' },
    { name: 'Talend', description: 'Data integration and data integrity.', url: 'https://www.talend.com/', image: 'https://picsum.photos/seed/talend-etl/600/400', dataAiHint: 'data integrity', pricing: 'Freemium' },
    { name: 'AWS Glue', description: 'A serverless data integration service.', url: 'https://aws.amazon.com/glue/', image: 'https://picsum.photos/seed/aws-glue/600/400', dataAiHint: 'serverless etl', pricing: 'Paid' },
    { name: 'Azure Data Factory', description: 'Cloud-based data integration service.', url: 'https://azure.microsoft.com/en-us/products/data-factory/', image: 'https://picsum.photos/seed/adf-etl/600/400', dataAiHint: 'azure data', pricing: 'Paid' },
    { name: 'Google Cloud Dataflow', description: 'Unified stream and batch data processing.', url: 'https://cloud.google.com/dataflow', image: 'https://picsum.photos/seed/gcp-dataflow/600/400', dataAiHint: 'stream processing', pricing: 'Paid' },
];
