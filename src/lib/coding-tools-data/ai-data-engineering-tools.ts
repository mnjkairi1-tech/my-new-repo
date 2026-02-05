
import type { Tool } from '@/lib/types';

export const aiDataEngineeringTools: Tool[] = [
    { name: 'Databricks', description: 'The Data and AI Company.', url: 'https://www.databricks.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=databricks.com', dataAiHint: 'data ai', pricing: 'Paid' },
    { name: 'Snowflake', description: 'The Data Cloud.', url: 'https://www.snowflake.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=snowflake.com', dataAiHint: 'data cloud', pricing: 'Paid' },
    { name: 'dbt', description: 'The transformation layer in the modern data stack.', url: 'https://www.getdbt.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=getdbt.com', dataAiHint: 'data stack', pricing: 'Freemium' },
    { name: 'Fivetran', description: 'Automated data integration.', url: 'https://www.fivetran.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=fivetran.com', dataAiHint: 'data integration', pricing: 'Paid' },
    { name: 'Apache Airflow', description: 'A platform to programmatically author, schedule, and monitor workflows.', url: 'https://airflow.apache.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=airflow.apache.org', dataAiHint: 'workflow platform', pricing: 'Free' },
    { name: 'Apache Spark', description: 'A unified analytics engine for large-scale data processing.', url: 'https://spark.apache.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=spark.apache.org', dataAiHint: 'data processing', pricing: 'Free' },
    { name: 'Stitch', description: 'A simple, powerful ETL service for developers.', url: 'https://www.stitchdata.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=stitchdata.com', dataAiHint: 'etl service', pricing: 'Freemium' },
    { name: 'Airbyte', description: 'An open-source data integration platform.', url: 'https://airbyte.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=airbyte.com', dataAiHint: 'open source etl', pricing: 'Free' },
    { name: 'Matillion', description: 'Cloud-native data integration and transformation.', url: 'https://www.matillion.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=matillion.com', dataAiHint: 'cloud etl', pricing: 'Paid' },
    { name: 'Great Expectations', description: 'Always know what to expect from your data.', url: 'https://greatexpectations.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=greatexpectations.io', dataAiHint: 'data validation', pricing: 'Free' },
];
