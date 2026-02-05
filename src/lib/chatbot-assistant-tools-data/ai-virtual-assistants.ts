
import type { Tool } from '@/lib/types';

export const aiVirtualAssistantsTools: Tool[] = [
    { name: 'Microsoft Copilot', description: 'Your everyday AI companion integrated into Microsoft products.', url: 'https://copilot.microsoft.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=microsoft.com', dataAiHint: 'ai companion', pricing: 'Free' },
    { name: 'Siri', description: 'Apple\'s intelligent assistant built into its devices.', url: 'https://www.apple.com/siri/', image: 'https://www.google.com/s2/favicons?sz=128&domain=apple.com', dataAiHint: 'apple assistant', pricing: 'Free' },
    { name: 'Amazon Alexa', description: 'The voice service that powers Echo devices and more.', url: 'https://www.amazon.com/alexa', image: 'https://www.google.com/s2/favicons?sz=128&domain=amazon.com', dataAiHint: 'smart speaker', pricing: 'Free' },
    { name: 'Google Assistant', description: 'Your personal Google, always ready to help.', url: 'https://assistant.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=assistant.google.com', dataAiHint: 'voice assistant', pricing: 'Free' },
    { name: 'Cortana', description: 'Microsoft\'s personal productivity assistant.', url: 'https://www.microsoft.com/en-us/cortana', image: 'https://www.google.com/s2/favicons?sz=128&domain=microsoft.com', dataAiHint: 'productivity assistant', pricing: 'Free' },
    { name: 'Bixby', description: 'Samsung\'s intelligent assistant.', url: 'https://www.samsung.com/global/galaxy/apps/bixby/', image: 'https://www.google.com/s2/favicons?sz=128&domain=samsung.com', dataAiHint: 'samsung assistant', pricing: 'Free' },
    { name: 'Mycroft', description: 'The open source voice assistant.', url: 'https://mycroft.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mycroft.ai', dataAiHint: 'open source voice', pricing: 'Free' },
    { name: 'Hound', description: 'A faster and smarter voice assistant.', url: 'https://soundhound.com/hound/', image: 'https://www.google.com/s2/favicons?sz=128&domain=soundhound.com', dataAiHint: 'natural language', pricing: 'Free' },
    { name: 'DataBot', description: 'Virtual talking robot assistant.', url: 'https://www.databotapp.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=databot.app', dataAiHint: 'virtual robot', pricing: 'Freemium' },
    { name: 'Lyra', description: 'A personal AI assistant for your device.', url: 'https://lyra-assistant.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'personal assistant', pricing: 'Free' },
];
