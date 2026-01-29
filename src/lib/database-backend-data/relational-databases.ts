
import type { Tool } from '@/lib/types';

export const relationalDatabasesTools: Tool[] = [
    { name: 'PostgreSQL', description: 'The World\'s Most Advanced Open Source Relational Database.', url: 'https://www.postgresql.org/', image: 'https://picsum.photos/seed/postgresql/600/400', dataAiHint: 'sql database', pricing: 'Free' },
    { name: 'MySQL', description: 'The world\'s most popular open source database.', url: 'https://www.mysql.com/', image: 'https://picsum.photos/seed/mysql/600/400', dataAiHint: 'sql database', pricing: 'Free' },
    { name: 'MariaDB', description: 'The open source relational database.', url: 'https://mariadb.org/', image: 'https://picsum.photos/seed/mariadb/600/400', dataAiHint: 'mysql fork', pricing: 'Free' },
    { name: 'SQLite', description: 'A C-language library that implements a small, fast, self-contained SQL database engine.', url: 'https://www.sqlite.org/', image: 'https://picsum.photos/seed/sqlite/600/400', dataAiHint: 'embedded sql', pricing: 'Free' },
    { name: 'Microsoft SQL Server', description: 'An enterprise-grade relational database management system from Microsoft.', url: 'https://www.microsoft.com/en-us/sql-server', image: 'https://picsum.photos/seed/mssql/600/400', dataAiHint: 'microsoft sql', pricing: 'Paid' },
    { name: 'Oracle Database', description: 'A multi-model database management system produced and marketed by Oracle Corporation.', url: 'https://www.oracle.com/database/', image: 'https://picsum.photos/seed/oracle-db/600/400', dataAiHint: 'enterprise db', pricing: 'Paid' },
    { name: 'CockroachDB', description: 'A distributed SQL database built on a transactional and strongly-consistent key-value store.', url: 'https://www.cockroachlabs.com/', image: 'https://picsum.photos/seed/cockroachdb/600/400', dataAiHint: 'distributed sql', pricing: 'Freemium' },
    { name: 'TiDB', description: 'An open-source, distributed, NewSQL database.', url: 'https://pingcap.com/products/tidb/', image: 'https://picsum.photos/seed/tidb/600/400', dataAiHint: 'htap database', pricing: 'Freemium' },
    { name: 'YugabyteDB', description: 'A high-performance, cloud-native distributed SQL database.', url: 'https://www.yugabyte.com/', image: 'https://picsum.photos/seed/yugabytedb/600/400', dataAiHint: 'cloud-native sql', pricing: 'Freemium' },
    { name: 'Amazon Aurora', description: 'MySQL and PostgreSQL-compatible relational database built for the cloud.', url: 'https://aws.amazon.com/rds/aurora/', image: 'https://picsum.photos/seed/aurora/600/400', dataAiHint: 'aws database', pricing: 'Paid' },
];
