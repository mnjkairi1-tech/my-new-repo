
import type { Tool } from '@/lib/types';

export const aiObjectRemovalVideoTools: Tool[] = [
    { name: 'Runway Inpainting', description: 'Remove any object from any video.', url: 'https://runwayml.com/', image: 'https://picsum.photos/seed/runway-inpaint-vedit/600/400', dataAiHint: 'video object removal', pricing: 'Freemium' },
    { name: 'Adobe After Effects Content-Aware Fill', description: 'Remove unwanted objects from video.', url: 'https://www.adobe.com/products/aftereffects.html', image: 'https://picsum.photos/seed/ae-caf/600/400', dataAiHint: 'content-aware video', pricing: 'Paid' },
    { name: 'DaVinci Resolve Object Removal', description: 'Object removal tool in the color page.', url: 'https://www.blackmagicdesign.com/products/davinciresolve', image: 'https://picsum.photos/seed/davinci-object/600/400', dataAiHint: 'resolve object', pricing: 'Paid' },
    { name: 'Synthesia', description: 'AI video generation platform with object removal features.', url: 'https://www.synthesia.io/', image: 'https://picsum.photos/seed/synthesia-remove/600/400', dataAiHint: 'ai video', pricing: 'Paid' },
    { name: 'Pika', description: 'AI video platform with in-painting and object removal.', url: 'https://pika.art/', image: 'https://picsum.photos/seed/pika-remove/600/400', dataAiHint: 'video inpainting', pricing: 'Freemium' },
    { name: 'Veed.io', description: 'Online video editor with object removal tools.', url: 'https://www.veed.io/', image: 'https://picsum.photos/seed/veed-remove/600/400', dataAiHint: 'online editor', pricing: 'Freemium' },
    { name: 'Inpaint Video', description: 'Remove objects from your videos online.', url: 'https://theinpaint.com/video-inpainting-tool', image: 'https://picsum.photos/seed/inpaint-video/600/400', dataAiHint: 'online inpainting', pricing: 'Paid' },
    { name: 'HitPaw Video Object Remover', description: 'AI-powered object remover for videos.', url: 'https://www.hitpaw.com/video-object-remover.html', image: 'https://picsum.photos/seed/hitpaw-object/600/400', dataAiHint: 'ai remover', pricing: 'Paid' },
    { name: 'Media.io', description: 'Online video editor with object removal features.', url: 'https://www.media.io/', image: 'https://picsum.photos/seed/mediaio-object/600/400', dataAiHint: 'online video tools', pricing: 'Freemium' },
    { name: 'Mocha Pro', description: 'Planar tracking and roto-masking tool for VFX.', url: 'https://borisfx.com/products/mocha-pro/', image: 'https://picsum.photos/seed/mochapro/600/400', dataAiHint: 'planar tracking', pricing: 'Paid' },
];
