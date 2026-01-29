
import type { Tool } from '@/lib/types';

export const cloudManagedDatabasesTools: Tool[] = [
    { name: 'Amazon RDS', description: 'Managed relational database service for MySQL, PostgreSQL, Oracle, SQL Server, and MariaDB.', url: 'https://aws.amazon.com/rds/', image: 'https://picsum.photos/seed/aws-rds/600/400', dataAiHint: 'managed sql', pricing: 'Paid' },
    { name: 'Google Cloud SQL', description: 'Fully managed relational database service for MySQL, PostgreSQL, and SQL Server.', url: 'https://cloud.google.com/sql', image: 'https://picsum.photos/seed/gcp-sql/600/400', dataAiHint: 'google sql', pricing: 'Paid' },
    { name: 'Azure SQL Database', description: 'Managed, intelligent SQL in the cloud.', url: 'https://azure.microsoft.com/en-us/products/azure-sql/database/', image: 'https://picsum.photos/seed/azuresql/600/400', dataAiHint: 'azure sql', pricing: 'Paid' },
    { name: 'MongoDB Atlas', description: 'The global cloud database for modern applications.', url: 'https://www.mongodb.com/cloud/atlas', image: 'https://picsum.photos/seed/mongodb-atlas/600/400', dataAiHint: 'managed mongodb', pricing: 'Freemium' },
    { name: 'Amazon DynamoDB', description: 'Fast and flexible NoSQL database service.', url: 'https://aws.amazon.com/dynamodb/', image: 'https://picsum.photos/seed/dynamodb/600/400', dataAiHint: 'aws nosql', pricing: 'Paid' },
    { name: 'PlanetScale', description: 'The MySQL-compatible serverless database platform.', url: 'https://planetscale.com/', image: 'https://picsum.photos/seed/planetscale/600/400', dataAiHint: 'serverless sql', pricing: 'Freemium' },
    { name: 'Neon', description: 'Serverless, fault-tolerant, and branchable PostgreSQL.', url: 'https://neon.tech/', image: 'https://picsum.photos/seed/neon-tech/600/400', dataAiHint: 'serverless postgres', pricing: 'Freemium' },
    { name: 'Supabase', description: 'An open source Firebase alternative with a managed PostgreSQL database.', url: 'https://supabase.com/', image: 'https://picsum.photos/seed/supabase-db/600/400', dataAiHint: 'postgres backend', pricing: 'Freemium' },
    { name: 'Fauna', description: 'A distributed, serverless, transactional database.', url: 'https://fauna.com/', image: 'https://picsum.photos/seed/fauna/600/400', dataAiHint: 'serverless database', pricing: 'Freemium' },
    { name: 'Aiven', description: 'Managed open source data technologies on all major clouds.', url: 'https://aiven.io/', image: 'https://picsum.photos/seed/aiven/600/400', dataAiHint: 'managed open source', pricing: 'Paid' },
];
