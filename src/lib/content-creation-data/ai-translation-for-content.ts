
import type { Tool } from '@/lib/types';

export const aiTranslationForContentTools: Tool[] = [
    { name: 'DeepL', description: 'The world\'s most accurate translator.', url: 'https://www.deepl.com/translator', image: 'https://picsum.photos/seed/deepl-translate/600/400', dataAiHint: 'accurate translation', pricing: 'Freemium' },
    { name: 'Google Translate', description: 'Instantly translates words, phrases, and web pages.', url: 'https://translate.google.com/', image: 'https://picsum.photos/seed/gtranslate-content/600/400', dataAiHint: 'web translator', pricing: 'Free' },
    { name: 'Weglot', description: 'Translate your website instantly.', url: 'https://weglot.com/', image: 'https://picsum.photos/seed/weglot/600/400', dataAiHint: 'website translation', pricing: 'Paid' },
    { name: 'Microsoft Translator', description: 'Translate text, voice, and images.', url: 'https://www.microsoft.com/en-us/translator/', image: 'https://picsum.photos/seed/ms-translator/600/400', dataAiHint: 'voice translation', pricing: 'Free' },
    { name: 'Reverso', description: 'Translation and dictionary.', url: 'https://www.reverso.net/text_translation.aspx?lang=EN', image: 'https://picsum.photos/seed/reverso-translate/600/400', dataAiHint: 'context translation', pricing: 'Freemium' },
    { name: 'Yandex Translate', description: 'Synchronized translation for text and websites.', url: 'https://translate.yandex.com/', image: 'https://picsum.photos/seed/yandex-translate/600/400', dataAiHint: 'image translation', pricing: 'Free' },
    { name: 'SYSTRAN', description: 'Translation software for businesses.', url: 'https://www.systransoft.com/', image: 'https://picsum.photos/seed/systran/600/400', dataAiHint: 'business translation', pricing: 'Paid' },
    { name: 'Unbabel', description: 'AI-powered language operations.', url: 'https://unbabel.com/', image: 'https://picsum.photos/seed/unbabel/600/400', dataAiHint: 'language ops', pricing: 'Paid' },
    { name: 'Smartling', description: 'Translation management system.', url: 'https://www.smartling.com/', image: 'https://picsum.photos/seed/smartling/600/400', dataAiHint: 'tms', pricing: 'Paid' },
    { name: 'Lokalise', description: 'Translation management for agile teams.', url: 'https://lokalise.com/', image: 'https://picsum.photos/seed/lokalise/600/400', dataAiHint: 'agile translation', pricing: 'Paid' },
];
