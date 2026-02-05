
import type { Tool } from '@/lib/types';

export const cloudManagedDatabasesTools: Tool[] = [
    { name: 'Amazon RDS', description: 'Managed relational database service for MySQL, PostgreSQL, Oracle, SQL Server, and MariaDB.', url: 'https://aws.amazon.com/rds/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aws.amazon.com', dataAiHint: 'managed sql', pricing: 'Paid' },
    { name: 'Google Cloud SQL', description: 'Fully managed relational database service for MySQL, PostgreSQL, and SQL Server.', url: 'https://cloud.google.com/sql', image: 'https://www.google.com/s2/favicons?sz=128&domain=cloud.google.com', dataAiHint: 'google sql', pricing: 'Paid' },
    { name: 'Azure SQL Database', description: 'Managed, intelligent SQL in the cloud.', url: 'https://azure.microsoft.com/en-us/products/azure-sql/database/', image: 'https://www.google.com/s2/favicons?sz=128&domain=azure.microsoft.com', dataAiHint: 'azure sql', pricing: 'Paid' },
    { name: 'MongoDB Atlas', description: 'The global cloud database for modern applications.', url: 'https://www.mongodb.com/cloud/atlas', image: 'https://www.google.com/s2/favicons?sz=128&domain=mongodb.com', dataAiHint: 'managed mongodb', pricing: 'Freemium' },
    { name: 'Amazon DynamoDB', description: 'Fast and flexible NoSQL database service.', url: 'https://aws.amazon.com/dynamodb/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aws.amazon.com', dataAiHint: 'aws nosql', pricing: 'Paid' },
    { name: 'PlanetScale', description: 'The MySQL-compatible serverless database platform.', url: 'https://planetscale.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=planetscale.com', dataAiHint: 'serverless sql', pricing: 'Freemium' },
    { name: 'Neon', description: 'Serverless, fault-tolerant, and branchable PostgreSQL.', url: 'https://neon.tech/', image: 'https://www.google.com/s2/favicons?sz=128&domain=neon.tech', dataAiHint: 'serverless postgres', pricing: 'Freemium' },
    { name: 'Supabase', description: 'An open source Firebase alternative with a managed PostgreSQL database.', url: 'https://supabase.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=supabase.com', dataAiHint: 'postgres backend', pricing: 'Freemium' },
    { name: 'Fauna', description: 'A distributed, serverless, transactional database.', url: 'https://fauna.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=fauna.com', dataAiHint: 'serverless database', pricing: 'Freemium' },
    { name: 'Aiven', description: 'Managed open source data technologies on all major clouds.', url: 'https://aiven.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aiven.io', dataAiHint: 'managed open source', pricing: 'Paid' },
];
