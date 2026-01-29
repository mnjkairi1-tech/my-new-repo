
import type { Tool } from '@/lib/types';

export const cloudStorageTools: Tool[] = [
    { name: 'Google Drive', description: 'Store, share, and collaborate on files.', url: 'https://www.google.com/drive/', image: 'https://picsum.photos/seed/gdrive-storage/600/400', dataAiHint: 'cloud documents', pricing: 'Freemium' },
    { name: 'Dropbox', description: 'Cloud storage and file synchronization.', url: 'https://www.dropbox.com/', image: 'https://picsum.photos/seed/dropbox-storage/600/400', dataAiHint: 'file storage', pricing: 'Freemium' },
    { name: 'OneDrive', description: 'Microsoft\'s cloud storage service.', url: 'https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage', image: 'https://picsum.photos/seed/onedrive/600/400', dataAiHint: 'file sharing', pricing: 'Freemium' },
    { name: 'Box', description: 'Cloud content management and file sharing.', url: 'https://www.box.com/', image: 'https://picsum.photos/seed/box-storage/600/400', dataAiHint: 'content cloud', pricing: 'Freemium' },
    { name: 'iCloud Drive', description: 'Apple\'s cloud storage service.', url: 'https://www.apple.com/icloud/icloud-drive/', image: 'https://picsum.photos/seed/icloud/600/400', dataAiHint: 'apple cloud', pricing: 'Freemium' },
    { name: 'MEGA', description: 'Secure cloud storage with end-to-end encryption.', url: 'https://mega.nz/', image: 'https://picsum.photos/seed/mega-storage/600/400', dataAiHint: 'encrypted storage', pricing: 'Freemium' },
    { name: 'pCloud', description: 'Secure cloud storage.', url: 'https://www.pcloud.com/', image: 'https://picsum.photos/seed/pcloud-storage/600/400', dataAiHint: 'secure storage', pricing: 'Freemium' },
    { name: 'Sync.com', description: 'Secure cloud storage that protects your privacy.', url: 'https://www.sync.com/', image: 'https://picsum.photos/seed/sync-storage/600/400', dataAiHint: 'private cloud', pricing: 'Paid' },
    { name: 'IDrive', description: 'Cloud backup and storage for multiple devices.', url: 'https://www.idrive.com/', image: 'https://picsum.photos/seed/idrive-storage/600/400', dataAiHint: 'cloud backup', pricing: 'Freemium' },
    { name: 'Nextcloud', description: 'The self-hosted productivity platform.', url: 'https://nextcloud.com/', image: 'https://picsum.photos/seed/nextcloud-storage/600/400', dataAiHint: 'self-hosted cloud', pricing: 'Free' },
];
