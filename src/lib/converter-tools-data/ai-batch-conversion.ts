import type { Tool } from '@/lib/types';

export const aiBatchConversionTools: Tool[] = [
    { name: 'XnConvert', description: 'A powerful and free cross-platform batch image processor.', url: 'https://www.xnview.com/en/xnconvert/', image: 'https://picsum.photos/seed/xnconvert-batch/600/400', dataAiHint: 'batch processing', pricing: 'Free' },
    { name: 'Filestar', description: 'Convert Anything to Anything, with batch capabilities.', url: 'https://filestar.com/', image: 'https://picsum.photos/seed/filestar/600/400', dataAiHint: 'file skills', pricing: 'Freemium' },
    { name: 'IrfanView', description: 'A fast image viewer with powerful batch conversion.', url: 'https://www.irfanview.com/', image: 'https://picsum.photos/seed/irfanview-batch/600/400', dataAiHint: 'image viewer', pricing: 'Free' },
    { name: 'FFmpeg', description: 'Command-line tool for batch converting audio and video.', url: 'https://ffmpeg.org/', image: 'https://picsum.photos/seed/ffmpeg-batch/600/400', dataAiHint: 'command-line', pricing: 'Free' },
    { name: 'CloudConvert', description: 'Supports batch conversion of over 200 formats.', url: 'https://cloudconvert.com/', image: 'https://picsum.photos/seed/cloudconvert-batch/600/400', dataAiHint: 'online batch', pricing: 'Freemium' },
    { name: 'Mogrify (ImageMagick)', description: 'Command-line tool for batch image processing.', url: 'https://imagemagick.org/script/mogrify.php', image: 'https://picsum.photos/seed/mogrify-batch/600/400', dataAiHint: 'image processing', pricing: 'Free' },
    { name: 'Adobe Lightroom Classic', description: 'Batch export and convert RAW image files.', url: 'https://www.adobe.com/products/photoshop-lightroom-classic.html', image: 'https://picsum.photos/seed/lightroom-batch/600/400', dataAiHint: 'photo workflow', pricing: 'Paid' },
    { name: 'dBpoweramp', description: 'Audio converter with batch processing capabilities.', url: 'https://www.dbpoweramp.com/', image: 'https://picsum.photos/seed/dbpoweramp-batch/600/400', dataAiHint: 'audio converter', pricing: 'Paid' },
    { name: 'HandBrake', description: 'Open-source video transcoder with batch queueing.', url: 'https://handbrake.fr/', image: 'https://picsum.photos/seed/handbrake-batch/600/400', dataAiHint: 'video transcoder', pricing: 'Free' },
    { name: 'Doxillion', description: 'Batch convert document file formats.', url: 'https://www.nchsoftware.com/documentconvert/index.html', image: 'https://picsum.photos/seed/doxillion-batch/600/400', dataAiHint: 'document converter', pricing: 'Freemium' },
];
