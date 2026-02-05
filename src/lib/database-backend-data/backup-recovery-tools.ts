
import type { Tool } from '@/lib/types';

export const backupRecoveryTools: Tool[] = [
    { name: 'Veeam', description: 'Backup and replication software for virtual, physical, and cloud.', url: 'https://www.veeam.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=veeam.com', dataAiHint: 'data protection', pricing: 'Freemium' },
    { name: 'Acronis Cyber Protect', description: 'Cyber protection with backup and recovery.', url: 'https://www.acronis.com/en-us/products/cyber-protect/', image: 'https://www.google.com/s2/favicons?sz=128&domain=acronis.com', dataAiHint: 'cyber protection', pricing: 'Paid' },
    { name: 'Duplicati', description: 'Free backup software to store encrypted backups online.', url: 'https://www.duplicati.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=duplicati.com', dataAiHint: 'open source backup', pricing: 'Free' },
    { name: 'Backblaze', description: 'Cloud backup and storage.', url: 'https://www.backblaze.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=backblaze.com', dataAiHint: 'cloud backup', pricing: 'Paid' },
    { name: 'pg_dump / pg_restore', description: 'Native utility for backing up and restoring PostgreSQL databases.', url: 'https://www.postgresql.org/docs/current/app-pgdump.html', image: 'https://www.google.com/s2/favicons?sz=128&domain=postgresql.org', dataAiHint: 'postgres backup', pricing: 'Free' },
    { name: 'mysqldump', description: 'A database backup program for MySQL.', url: 'https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html', image: 'https://www.google.com/s2/favicons?sz=128&domain=dev.mysql.com', dataAiHint: 'mysql backup', pricing: 'Free' },
    { name: 'Barman', description: 'Backup and Recovery Manager for PostgreSQL.', url: 'https://www.pgbarman.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pgbarman.org', dataAiHint: 'postgres recovery', pricing: 'Free' },
    { name: 'Restic', description: 'Fast, secure, efficient backup program.', url: 'https://restic.net/', image: 'https://www.google.com/s2/favicons?sz=128&domain=restic.net', dataAiHint: 'open source backup', pricing: 'Free' },
    { name: 'BorgBackup', description: 'A deduplicating backup program.', url: 'https://www.borgbackup.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=borgbackup.org', dataAiHint: 'deduplication', pricing: 'Free' },
    { name: 'Commvault', description: 'Data protection and data management software.', url: 'https://www.commvault.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=commvault.com', dataAiHint: 'data management', pricing: 'Paid' },
];
