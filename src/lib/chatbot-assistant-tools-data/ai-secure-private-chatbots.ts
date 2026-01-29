
import type { Tool } from '@/lib/types';

export const aiSecurePrivateChatbotsTools: Tool[] = [
    { name: 'Rasa (On-Premise)', description: 'Deploy open-source conversational AI on your own infrastructure.', url: 'https://rasa.com/', image: 'https://picsum.photos/seed/rasa-secure/600/400', dataAiHint: 'on-premise ai', pricing: 'Freemium' },
    { name: 'Botpress (On-Premise)', description: 'An open-source, extensible chatbot builder you can host yourself.', url: 'https://botpress.com/', image: 'https://picsum.photos/seed/botpress-secure/600/400', dataAiHint: 'self-hosted bot', pricing: 'Freemium' },
    { name: 'Microsoft Bot Framework (Self-Hosted)', description: 'Host and manage your own bots built with Microsoft\'s framework.', url: 'https://dev.botframework.com/', image: 'https://picsum.photos/seed/ms-bot-secure/600/400', dataAiHint: 'self-hosted framework', pricing: 'Free' },
    { name: 'Kore.ai (On-Premise)', description: 'Enterprise conversational AI platform with on-premise deployment.', url: 'https://kore.ai/', image: 'https://picsum.photos/seed/koreai-secure/600/400', dataAiHint: 'enterprise security', pricing: 'Paid' },
    { name: 'Cognigy (On-Premise)', description: 'Deploy enterprise conversational AI on-premise for full data control.', url: 'https://www.cognigy.com/', image: 'https://picsum.photos/seed/cognigy-secure/600/400', dataAiHint: 'data control', pricing: 'Paid' },
    { name: 'Mindbehind', description: 'Secure chatbot platform with on-premise options.', url: 'https://mindbehind.com/', image: 'https://picsum.photos/seed/mindbehind/600/400', dataAiHint: 'secure platform', pricing: 'Paid' },
    { name: 'SnatchBot (On-Premise)', description: 'Create smart chatbots with on-premise deployment.', url: 'https://snatchbot.me/', image: 'https://picsum.photos/seed/snatchbot-secure/600/400', dataAiHint: 'smart chatbot', pricing: 'Paid' },
    { name: 'Chatwoot', description: 'Open-source customer engagement suite you can self-host.', url: 'https://www.chatwoot.com/', image: 'https://picsum.photos/seed/chatwoot/600/400', dataAiHint: 'open source customer', pricing: 'Freemium' },
    { name: 'Rocket.Chat', description: 'Open-source communication platform with chatbot features.', url: 'https://www.rocket.chat/', image: 'https://picsum.photos/seed/rocketchat/600/400', dataAiHint: 'open source chat', pricing: 'Freemium' },
    { name: 'Mattermost', description: 'Open-source collaboration platform with bot integrations.', url: 'https://mattermost.com/', image: 'https://picsum.photos/seed/mattermost/600/400', dataAiHint: 'open source collaboration', pricing: 'Freemium' },
];
