
import type { Tool } from '@/lib/types';

export const aiTranslationLocalizationTools: Tool[] = [
    { name: 'DeepL', description: 'The world\'s most accurate translator.', url: 'https://www.deepl.com/translator', image: 'https://www.google.com/s2/favicons?sz=128&domain=deepl.com', dataAiHint: 'accurate translation', pricing: 'Freemium' },
    { name: 'Google Translate', description: 'Instantly translates words, phrases, and web pages.', url: 'https://translate.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'web translator', pricing: 'Free' },
    { name: 'Weglot', description: 'Translate your website instantly.', url: 'https://weglot.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=weglot.com', dataAiHint: 'website translation', pricing: 'Paid' },
    { name: 'Microsoft Translator', description: 'Translate text, voice, and images.', url: 'https://www.microsoft.com/en-us/translator/', image: 'https://www.google.com/s2/favicons?sz=128&domain=microsoft.com', dataAiHint: 'voice translation', pricing: 'Free' },
    { name: 'Reverso', description: 'Translation and dictionary.', url: 'https://www.reverso.net/text_translation.aspx?lang=EN', image: 'https://www.google.com/s2/favicons?sz=128&domain=reverso.net', dataAiHint: 'context translation', pricing: 'Freemium' },
    { name: 'Yandex Translate', description: 'Synchronized translation for text and websites.', url: 'https://translate.yandex.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=yandex.com', dataAiHint: 'image translation', pricing: 'Free' },
    { name: 'SYSTRAN', description: 'Translation software for businesses.', url: 'https://www.systransoft.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=systransoft.com', dataAiHint: 'business translation', pricing: 'Paid' },
    { name: 'Unbabel', description: 'AI-powered language operations.', url: 'https://unbabel.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=unbabel.com', dataAiHint: 'language ops', pricing: 'Paid' },
    { name: 'Smartling', description: 'Translation management system.', url: 'https://www.smartling.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=smartling.com', dataAiHint: 'tms', pricing: 'Paid' },
    { name: 'Lokalise', description: 'Translation management for agile teams.', url: 'https://lokalise.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lokalise.com', dataAiHint: 'agile translation', pricing: 'Paid' },
];
