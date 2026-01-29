
import type { Tool } from '@/lib/types';

export const aiEtlDataIntegrationTools: Tool[] = [
    { name: 'Fivetran', description: 'Automated data integration.', url: 'https://www.fivetran.com/', image: 'https://picsum.photos/seed/fivetran-etl/600/400', dataAiHint: 'elt platform', pricing: 'Paid' },
    { name: 'Stitch', description: 'A simple, powerful ETL service for developers.', url: 'https://www.stitchdata.com/', image: 'https://picsum.photos/seed/stitch-etl/600/400', dataAiHint: 'etl service', pricing: 'Freemium' },
    { name: 'Airbyte', description: 'Open-source data integration platform.', url: 'https://airbyte.com/', image: 'https://picsum.photos/seed/airbyte/600/400', dataAiHint: 'open source etl', pricing: 'Free' },
    { name: 'Matillion', description: 'Cloud-native data integration and transformation.', url: 'https://www.matillion.com/', image: 'https://picsum.photos/seed/matillion/600/400', dataAiHint: 'cloud etl', pricing: 'Paid' },
    { name: 'AWS Glue', description: 'A serverless data integration service.', url: 'https://aws.amazon.com/glue/', image: 'https://picsum.photos/seed/aws-glue/600/400', dataAiHint: 'serverless etl', pricing: 'Paid' },
    { name: 'Azure Data Factory', description: 'Cloud-based data integration service.', url: 'https://azure.microsoft.com/en-us/products/data-factory/', image: 'https://picsum.photos/seed/adf-etl/600/400', dataAiHint: 'azure data', pricing: 'Paid' },
    { name: 'Google Cloud Data Fusion', description: 'A fully managed, cloud-native data integration service.', url: 'https://cloud.google.com/data-fusion', image: 'https://picsum.photos/seed/gcp-datafusion/600/400', dataAiHint: 'gcp data', pricing: 'Paid' },
    { name: 'Talend', description: 'Data integration and data integrity.', url: 'https://www.talend.com/', image: 'https://picsum.photos/seed/talend-etl/600/400', dataAiHint: 'data integrity', pricing: 'Freemium' },
    { name: 'Hevo Data', description: 'A no-code data pipeline.', url: 'https://hevodata.com/', image: 'https://picsum.photos/seed/hevo-data/600/400', dataAiHint: 'no-code pipeline', pricing: 'Paid' },
    { name: 'Rivery', description: 'The complete data integration platform.', url: 'https://rivery.io/', image: 'https://picsum.photos/seed/rivery-data/600/400', dataAiHint: 'data ops', pricing: 'Paid' },
];
