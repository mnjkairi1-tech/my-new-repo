
import type { Tool } from '@/lib/types';

export const backupRecoveryTools: Tool[] = [
    { name: 'Veeam', description: 'Backup and replication software for virtual, physical, and cloud.', url: 'https://www.veeam.com/', image: 'https://picsum.photos/seed/veeam/600/400', dataAiHint: 'data protection', pricing: 'Freemium' },
    { name: 'Acronis Cyber Protect', description: 'Cyber protection with backup and recovery.', url: 'https://www.acronis.com/en-us/products/cyber-protect/', image: 'https://picsum.photos/seed/acronis-backup/600/400', dataAiHint: 'cyber protection', pricing: 'Paid' },
    { name: 'Duplicati', description: 'Free backup software to store encrypted backups online.', url: 'https://www.duplicati.com/', image: 'https://picsum.photos/seed/duplicati-backup/600/400', dataAiHint: 'open source backup', pricing: 'Free' },
    { name: 'Backblaze', description: 'Cloud backup and storage.', url: 'https://www.backblaze.com/', image: 'https://picsum.photos/seed/backblaze/600/400', dataAiHint: 'cloud backup', pricing: 'Paid' },
    { name: 'pg_dump / pg_restore', description: 'Native utility for backing up and restoring PostgreSQL databases.', url: 'https://www.postgresql.org/docs/current/app-pgdump.html', image: 'https://picsum.photos/seed/pgdump/600/400', dataAiHint: 'postgres backup', pricing: 'Free' },
    { name: 'mysqldump', description: 'A database backup program for MySQL.', url: 'https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html', image: 'https://picsum.photos/seed/mysqldump/600/400', dataAiHint: 'mysql backup', pricing: 'Free' },
    { name: 'Barman', description: 'Backup and Recovery Manager for PostgreSQL.', url: 'https://www.pgbarman.org/', image: 'https://picsum.photos/seed/barman/600/400', dataAiHint: 'postgres recovery', pricing: 'Free' },
    { name: 'Restic', description: 'Fast, secure, efficient backup program.', url: 'https://restic.net/', image: 'https://picsum.photos/seed/restic-backup/600/400', dataAiHint: 'open source backup', pricing: 'Free' },
    { name: 'BorgBackup', description: 'A deduplicating backup program.', url: 'https://www.borgbackup.org/', image: 'https://picsum.photos/seed/borgbackup/600/400', dataAiHint: 'deduplication', pricing: 'Free' },
    { name: 'Commvault', description: 'Data protection and data management software.', url: 'https://www.commvault.com/', image: 'https://picsum.photos/seed/commvault-backup/600/400', dataAiHint: 'data management', pricing: 'Paid' },
];
