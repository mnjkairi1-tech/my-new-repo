
import type { Tool } from '@/lib/types';

export const languageTranslationTools: Tool[] = [
    { name: 'DeepL', description: 'The world\'s most accurate translator.', url: 'https://www.deepl.com/translator', image: 'https://www.google.com/s2/favicons?sz=128&domain=deepl.com', dataAiHint: 'accurate translation', pricing: 'Freemium' },
    { name: 'Google Translate', description: 'Free service to instantly translate words and phrases.', url: 'https://translate.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=translate.google.com', dataAiHint: 'language translation', pricing: 'Free' },
    { name: 'Microsoft Translator', description: 'Translate text, voice, and images.', url: 'https://www.microsoft.com/en-us/translator/', image: 'https://www.google.com/s2/favicons?sz=128&domain=microsoft.com', dataAiHint: 'voice translation', pricing: 'Free' },
    { name: 'Reverso', description: 'Translation and dictionary with context.', url: 'https://www.reverso.net/text_translation.aspx?lang=EN', image: 'https://www.google.com/s2/favicons?sz=128&domain=reverso.net', dataAiHint: 'context translation', pricing: 'Freemium' },
    { name: 'Yandex Translate', description: 'Synchronized translation for text and websites.', url: 'https://translate.yandex.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=yandex.com', dataAiHint: 'image translation', pricing: 'Free' },
    { name: 'SYSTRAN', description: 'Translation software for businesses.', url: 'https://www.systransoft.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=systransoft.com', dataAiHint: 'business translation', pricing: 'Paid' },
    { name: 'iTranslate', description: 'The leading translation and dictionary app.', url: 'https://www.itranslate.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=itranslate.com', dataAiHint: 'translation app', pricing: 'Freemium' },
    { name: 'Papago', description: 'Naver\'s multilingual machine translation service.', url: 'https://papago.naver.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=naver.com', dataAiHint: 'korean translation', pricing: 'Free' },
    { name: 'PROMT.One', description: 'Free online translator and dictionary.', url: 'https://www.online-translator.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=online-translator.com', dataAiHint: 'online translator', pricing: 'Freemium' },
    { name: 'Weglot', description: 'Translate your website instantly.', url: 'https://weglot.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=weglot.com', dataAiHint: 'website translation', pricing: 'Paid' },
];
