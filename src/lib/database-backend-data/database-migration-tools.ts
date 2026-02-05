
import type { Tool } from '@/lib/types';

export const databaseMigrationTools: Tool[] = [
    { name: 'Flyway', description: 'Database migrations made easy.', url: 'https://flywaydb.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=flywaydb.org', dataAiHint: 'database migrations', pricing: 'Free' },
    { name: 'Liquibase', description: 'Open source database schema change management.', url: 'https://www.liquibase.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=liquibase.org', dataAiHint: 'schema change', pricing: 'Freemium' },
    { name: 'Prisma Migrate', description: 'Declarative data modeling and migration tool.', url: 'https://www.prisma.io/migrate', image: 'https://www.google.com/s2/favicons?sz=128&domain=prisma.io', dataAiHint: 'data modeling', pricing: 'Free' },
    { name: 'Drizzle Kit', description: 'A CLI migration tool for Drizzle ORM.', url: 'https://orm.drizzle.team/drizzle-kit/overview', image: 'https://www.google.com/s2/favicons?sz=128&domain=orm.drizzle.team', dataAiHint: 'cli migration', pricing: 'Free' },
    { name: 'AWS Database Migration Service', description: 'Migrate your databases to AWS with minimal downtime.', url: 'https://aws.amazon.com/dms/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aws.amazon.com', dataAiHint: 'aws migration', pricing: 'Paid' },
    { name: 'Google Cloud Database Migration Service', description: 'Serverless database migrations.', url: 'https://cloud.google.com/database-migration', image: 'https://www.google.com/s2/favicons?sz=128&domain=cloud.google.com', dataAiHint: 'gcp migration', pricing: 'Paid' },
    { name: 'Azure Database Migration Service', description: 'Migrate your on-premises databases to Azure.', url: 'https://azure.microsoft.com/en-us/products/database-migration/', image: 'https://www.google.com/s2/favicons?sz=128&domain=azure.microsoft.com', dataAiHint: 'azure migration', pricing: 'Paid' },
    { name: 'Alembic', description: 'A lightweight database migration tool for usage with the SQLAlchemy.', url: 'https://alembic.sqlalchemy.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=alembic.sqlalchemy.org', dataAiHint: 'python migration', pricing: 'Free' },
    { name: 'Django Migrations', description: 'The built-in migration tool for the Django web framework.', url: 'https://docs.djangoproject.com/en/stable/topics/migrations/', image: 'https://www.google.com/s2/favicons?sz=128&domain=djangoproject.com', dataAiHint: 'django orm', pricing: 'Free' },
    { name: 'Rails Active Record Migrations', description: 'A way to evolve your database schema over time.', url: 'https://guides.rubyonrails.org/active_record_migrations.html', image: 'https://www.google.com/s2/favicons?sz=128&domain=guides.rubyonrails.org', dataAiHint: 'ruby on rails', pricing: 'Free' },
];
