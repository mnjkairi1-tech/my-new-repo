

import type { Tool } from '@/lib/types';

export const cloudStorageTools: Tool[] = [
    { name: 'Google Drive', description: 'Store, share, and collaborate on files.', url: 'https://www.google.com/drive/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'cloud documents', pricing: 'Freemium' },
    { name: 'Dropbox', description: 'Cloud storage and file synchronization.', url: 'https://www.dropbox.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=dropbox.com', dataAiHint: 'file storage', pricing: 'Freemium' },
    { name: 'OneDrive', description: 'Microsoft\'s cloud storage service.', url: 'https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage', image: 'https://www.google.com/s2/favicons?sz=128&domain=microsoft.com', dataAiHint: 'file sharing', pricing: 'Freemium' },
    { name: 'Box', description: 'Cloud content management and file sharing.', url: 'https://www.box.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=box.com', dataAiHint: 'content cloud', pricing: 'Freemium' },
    { name: 'iCloud Drive', description: 'Apple\'s cloud storage service.', url: 'https://www.apple.com/icloud/icloud-drive/', image: 'https://www.google.com/s2/favicons?sz=128&domain=apple.com', dataAiHint: 'apple cloud', pricing: 'Freemium' },
    { name: 'MEGA', description: 'Secure cloud storage with end-to-end encryption.', url: 'https://mega.nz/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mega.nz', dataAiHint: 'encrypted storage', pricing: 'Freemium' },
    { name: 'pCloud', description: 'Secure cloud storage.', url: 'https://www.pcloud.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pcloud.com', dataAiHint: 'secure storage', pricing: 'Freemium' },
    { name: 'Sync.com', description: 'Secure cloud storage that protects your privacy.', url: 'https://www.sync.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sync.com', dataAiHint: 'private cloud', pricing: 'Paid' },
    { name: 'IDrive', description: 'Cloud backup and storage for multiple devices.', url: 'https://www.idrive.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=idrive.com', dataAiHint: 'cloud backup', pricing: 'Freemium' },
    { name: 'Nextcloud', description: 'The self-hosted productivity platform.', url: 'https://nextcloud.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=nextcloud.com', dataAiHint: 'self-hosted cloud', pricing: 'Free' },
];

