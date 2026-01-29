import type { Tool } from '@/lib/types';

export const aiTextToImageConverterTools: Tool[] = [
    { name: 'Midjourney', description: 'AI art generator via Discord.', url: 'https://www.midjourney.com/', image: 'https://picsum.photos/seed/midjourney-convert/600/400', dataAiHint: 'discord art', pricing: 'Paid' },
    { name: 'DALL·E 3', description: 'OpenAI\'s image generation model.', url: 'https://openai.com/dall-e-3', image: 'https://picsum.photos/seed/dalle3-convert/600/400', dataAiHint: 'openai image', pricing: 'Freemium' },
    { name: 'Stable Diffusion', description: 'Open source text-to-image model.', url: 'https://stablediffusionweb.com/', image: 'https://picsum.photos/seed/sd-generate-convert/600/400', dataAiHint: 'open source', pricing: 'Free' },
    { name: 'Leonardo AI', description: 'Produce stunning game assets and creative art.', url: 'https://leonardo.ai/', image: 'https://picsum.photos/seed/leonardo-convert/600/400', dataAiHint: 'game assets', pricing: 'Freemium' },
    { name: 'Ideogram', description: 'Generate images with reliable text rendering.', url: 'https://ideogram.ai/', image: 'https://picsum.photos/seed/ideogram-convert/600/400', dataAiHint: 'ai typography', pricing: 'Freemium' },
    { name: 'Bing Image Creator', description: 'Create AI images with DALL·E 3.', url: 'https://www.bing.com/images/create', image: 'https://picsum.photos/seed/bing-create-convert/600/400', dataAiHint: 'free dalle3', pricing: 'Free' },
    { name: 'Adobe Firefly', description: 'Generative AI for creative expression.', url: 'https://firefly.adobe.com/', image: 'https://picsum.photos/seed/firefly-convert/600/400', dataAiHint: 'adobe ai', pricing: 'Freemium' },
    { name: 'Canva AI Image Generator', description: 'Create stunning visuals from text.', url: 'https://www.canva.com/ai-image-generator/', image: 'https://picsum.photos/seed/canva-convert/600/400', dataAiHint: 'design ai', pricing: 'Freemium' },
    { name: 'NightCafe Creator', description: 'AI Art Generator. Create amazing artworks.', url: 'https://creator.nightcafe.studio/', image: 'https://picsum.photos/seed/nightcafe-convert/600/400', dataAiHint: 'art creator', pricing: 'Freemium' },
    { name: 'DreamStudio', description: 'Stability AI\'s official image generation tool.', url: 'https://dreamstudio.ai/', image: 'https://picsum.photos/seed/dreamstudio-convert/600/400', dataAiHint: 'stability ai', pricing: 'Paid' },
];
