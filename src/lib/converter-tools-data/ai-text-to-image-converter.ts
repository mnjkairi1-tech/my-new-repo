import type { Tool } from '@/lib/types';

export const aiTextToImageConverterTools: Tool[] = [
    { name: 'Midjourney', description: 'AI art generator via Discord.', url: 'https://www.midjourney.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=midjourney.com', dataAiHint: 'discord art', pricing: 'Paid' },
    { name: 'DALL·E 3', description: 'OpenAI\'s image generation model.', url: 'https://openai.com/dall-e-3', image: 'https://www.google.com/s2/favicons?sz=128&domain=openai.com', dataAiHint: 'openai image', pricing: 'Freemium' },
    { name: 'Stable Diffusion', description: 'Open source text-to-image model.', url: 'https://stablediffusionweb.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=stablediffusionweb.com', dataAiHint: 'open source', pricing: 'Free' },
    { name: 'Leonardo AI', description: 'Produce stunning game assets and creative art.', url: 'https://leonardo.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=leonardo.ai', dataAiHint: 'game assets', pricing: 'Freemium' },
    { name: 'Ideogram', description: 'Generate images with reliable text rendering.', url: 'https://ideogram.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ideogram.ai', dataAiHint: 'ai typography', pricing: 'Freemium' },
    { name: 'Bing Image Creator', description: 'Create AI images with DALL·E 3.', url: 'https://www.bing.com/images/create', image: 'https://www.google.com/s2/favicons?sz=128&domain=bing.com', dataAiHint: 'free dalle3', pricing: 'Free' },
    { name: 'Adobe Firefly', description: 'Generative AI for creative expression.', url: 'https://firefly.adobe.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=adobe.com', dataAiHint: 'adobe ai', pricing: 'Freemium' },
    { name: 'Canva AI Image Generator', description: 'Create stunning visuals from text.', url: 'https://www.canva.com/ai-image-generator/', image: 'https://www.google.com/s2/favicons?sz=128&domain=canva.com', dataAiHint: 'design ai', pricing: 'Freemium' },
    { name: 'NightCafe Creator', description: 'AI Art Generator. Create amazing artworks.', url: 'https://creator.nightcafe.studio/', image: 'https://www.google.com/s2/favicons?sz=128&domain=creator.nightcafe.studio', dataAiHint: 'art creator', pricing: 'Freemium' },
    { name: 'DreamStudio', description: 'Stability AI\'s official image generation tool.', url: 'https://dreamstudio.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=dreamstudio.ai', dataAiHint: 'stability ai', pricing: 'Paid' },
];
