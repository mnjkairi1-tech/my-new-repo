

import type { Tool } from '@/lib/types';
import { getImage, getHint } from '@/lib/placeholder-images';

export const aiCustomerSupportTools: Tool[] = [
    { name: 'Zendesk', description: 'Customer service software with AI capabilities.', url: 'https://www.zendesk.com/', image: getImage('biz-zendesk'), dataAiHint: getHint('biz-zendesk'), pricing: 'Paid' },
    { name: 'Intercom', description: 'Customer service platform for scaling businesses.', url: 'https://www.intercom.com/', image: getImage('biz-intercom'), dataAiHint: getHint('biz-intercom'), pricing: 'Paid' },
    { name: 'Freshdesk', description: 'Cloud-based customer support software.', url: 'https://freshdesk.com/', image: 'https://picsum.photos/seed/freshdesk-support/600/400', dataAiHint: 'helpdesk software', pricing: 'Freemium' },
    { name: 'Help Scout', description: 'A delightful, human-centered customer service platform.', url: 'https://www.helpscout.com/', image: 'https://picsum.photos/seed/helpscout-support/600/400', dataAiHint: 'shared inbox', pricing: 'Paid' },
    { name: 'Gorgias', description: 'Customer service platform for e-commerce.', url: 'https://www.gorgias.com/', image: 'https://picsum.photos/seed/gorgias-biz/600/400', dataAiHint: 'ecommerce helpdesk', pricing: 'Paid' },
    { name: 'LiveChat', description: 'Live chat software with chatbot capabilities.', url: 'https://www.livechat.com/', image: 'https://picsum.photos/seed/livechat-support/600/400', dataAiHint: 'chatbot software', pricing: 'Paid' },
    { name: 'Tidio', description: 'A comprehensive live chat and chatbot solution.', url: 'https://www.tidio.com/', image: 'https://picsum.photos/seed/tidio-support/600/400', dataAiHint: 'live chat', pricing: 'Freemium' },
    { name: 'Front', description: 'The customer communication hub.', url: 'https://front.com/', image: 'https://picsum.photos/seed/front-support/600/400', dataAiHint: 'communication hub', pricing: 'Paid' },
    { name: 'Gladly', description: 'A radically personal customer service platform.', url: 'https://www.gladly.com/', image: 'https://picsum.photos/seed/gladly-support/600/400', dataAiHint: 'personal service', pricing: 'Paid' },
    { name: 'Kayako', description: 'Help desk software for personal customer service.', url: 'https://www.kayako.com/', image: 'https://picsum.photos/seed/kayako-support/600/400', dataAiHint: 'help desk', pricing: 'Paid' },
];

