
import type { Tool } from '@/lib/types';

export const aiEtlDataIntegrationTools: Tool[] = [
    { name: 'Fivetran', description: 'Automated data integration.', url: 'https://www.fivetran.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=fivetran.com', dataAiHint: 'elt platform', pricing: 'Paid' },
    { name: 'Stitch', description: 'A simple, powerful ETL service for developers.', url: 'https://www.stitchdata.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=stitchdata.com', dataAiHint: 'etl service', pricing: 'Freemium' },
    { name: 'Airbyte', description: 'Open-source data integration platform.', url: 'https://airbyte.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=airbyte.com', dataAiHint: 'open source etl', pricing: 'Free' },
    { name: 'Matillion', description: 'Cloud-native data integration and transformation.', url: 'https://www.matillion.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=matillion.com', dataAiHint: 'cloud etl', pricing: 'Paid' },
    { name: 'AWS Glue', description: 'A serverless data integration service.', url: 'https://aws.amazon.com/glue/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aws.amazon.com', dataAiHint: 'serverless etl', pricing: 'Paid' },
    { name: 'Azure Data Factory', description: 'Cloud-based data integration service.', url: 'https://azure.microsoft.com/en-us/products/data-factory/', image: 'https://www.google.com/s2/favicons?sz=128&domain=azure.microsoft.com', dataAiHint: 'azure data', pricing: 'Paid' },
    { name: 'Google Cloud Data Fusion', description: 'A fully managed, cloud-native data integration service.', url: 'https://cloud.google.com/data-fusion', image: 'https://www.google.com/s2/favicons?sz=128&domain=cloud.google.com', dataAiHint: 'gcp data', pricing: 'Paid' },
    { name: 'Talend', description: 'Data integration and data integrity.', url: 'https://www.talend.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=talend.com', dataAiHint: 'data integrity', pricing: 'Freemium' },
    { name: 'Hevo Data', description: 'A no-code data pipeline.', url: 'https://hevodata.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=hevodata.com', dataAiHint: 'no-code pipeline', pricing: 'Paid' },
    { name: 'Rivery', description: 'The complete data integration platform.', url: 'https://rivery.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=rivery.io', dataAiHint: 'data ops', pricing: 'Paid' },
];
