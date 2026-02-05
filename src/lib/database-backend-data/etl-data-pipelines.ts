
import type { Tool } from '@/lib/types';

export const etlDataPipelinesTools: Tool[] = [
    { name: 'Fivetran', description: 'Automated data integration.', url: 'https://www.fivetran.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=fivetran.com', dataAiHint: 'elt platform', pricing: 'Paid' },
    { name: 'Airbyte', description: 'An open-source data integration platform.', url: 'https://airbyte.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=airbyte.com', dataAiHint: 'open source etl', pricing: 'Free' },
    { name: 'Apache Airflow', description: 'A platform to programmatically author, schedule, and monitor workflows.', url: 'https://airflow.apache.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=airflow.apache.org', dataAiHint: 'workflow automation', pricing: 'Free' },
    { name: 'dbt', description: 'The transformation layer in the modern data stack.', url: 'https://www.getdbt.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=getdbt.com', dataAiHint: 'data transformation', pricing: 'Freemium' },
    { name: 'Stitch', description: 'A simple, powerful ETL service for developers.', url: 'https://www.stitchdata.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=stitchdata.com', dataAiHint: 'etl service', pricing: 'Freemium' },
    { name: 'Matillion', description: 'Cloud-native data integration and transformation.', url: 'https://www.matillion.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=matillion.com', dataAiHint: 'cloud etl', pricing: 'Paid' },
    { name: 'Talend', description: 'Data integration and data integrity.', url: 'https://www.talend.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=talend.com', dataAiHint: 'data integrity', pricing: 'Freemium' },
    { name: 'AWS Glue', description: 'A serverless data integration service.', url: 'https://aws.amazon.com/glue/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aws.amazon.com', dataAiHint: 'serverless etl', pricing: 'Paid' },
    { name: 'Azure Data Factory', description: 'Cloud-based data integration service.', url: 'https://azure.microsoft.com/en-us/products/data-factory/', image: 'https://www.google.com/s2/favicons?sz=128&domain=azure.microsoft.com', dataAiHint: 'azure data', pricing: 'Paid' },
    { name: 'Google Cloud Dataflow', description: 'Unified stream and batch data processing.', url: 'https://cloud.google.com/dataflow', image: 'https://www.google.com/s2/favicons?sz=128&domain=cloud.google.com', dataAiHint: 'stream processing', pricing: 'Paid' },
];
