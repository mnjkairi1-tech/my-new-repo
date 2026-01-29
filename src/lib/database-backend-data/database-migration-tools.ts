
import type { Tool } from '@/lib/types';

export const databaseMigrationTools: Tool[] = [
    { name: 'Flyway', description: 'Database migrations made easy.', url: 'https://flywaydb.org/', image: 'https://picsum.photos/seed/flyway/600/400', dataAiHint: 'database migrations', pricing: 'Free' },
    { name: 'Liquibase', description: 'Open source database schema change management.', url: 'https://www.liquibase.org/', image: 'https://picsum.photos/seed/liquibase/600/400', dataAiHint: 'schema change', pricing: 'Freemium' },
    { name: 'Prisma Migrate', description: 'Declarative data modeling and migration tool.', url: 'https://www.prisma.io/migrate', image: 'https://picsum.photos/seed/prisma-migrate/600/400', dataAiHint: 'data modeling', pricing: 'Free' },
    { name: 'Drizzle Kit', description: 'A CLI migration tool for Drizzle ORM.', url: 'https://orm.drizzle.team/drizzle-kit/overview', image: 'https://picsum.photos/seed/drizzle-kit/600/400', dataAiHint: 'cli migration', pricing: 'Free' },
    { name: 'AWS Database Migration Service', description: 'Migrate your databases to AWS with minimal downtime.', url: 'https://aws.amazon.com/dms/', image: 'https://picsum.photos/seed/aws-dms/600/400', dataAiHint: 'aws migration', pricing: 'Paid' },
    { name: 'Google Cloud Database Migration Service', description: 'Serverless database migrations.', url: 'https://cloud.google.com/database-migration', image: 'https://picsum.photos/seed/gcp-dms/600/400', dataAiHint: 'gcp migration', pricing: 'Paid' },
    { name: 'Azure Database Migration Service', description: 'Migrate your on-premises databases to Azure.', url: 'https://azure.microsoft.com/en-us/products/database-migration/', image: 'https://picsum.photos/seed/azure-dms/600/400', dataAiHint: 'azure migration', pricing: 'Paid' },
    { name: 'Alembic', description: 'A lightweight database migration tool for usage with the SQLAlchemy.', url: 'https://alembic.sqlalchemy.org/', image: 'https://picsum.photos/seed/alembic/600/400', dataAiHint: 'python migration', pricing: 'Free' },
    { name: 'Django Migrations', description: 'The built-in migration tool for the Django web framework.', url: 'https://docs.djangoproject.com/en/stable/topics/migrations/', image: 'https://picsum.photos/seed/django-migrations/600/400', dataAiHint: 'django orm', pricing: 'Free' },
    { name: 'Rails Active Record Migrations', description: 'A way to evolve your database schema over time.', url: 'https://guides.rubyonrails.org/active_record_migrations.html', image: 'https://picsum.photos/seed/rails-migrations/600/400', dataAiHint: 'ruby on rails', pricing: 'Free' },
];
