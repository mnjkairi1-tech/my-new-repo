import type { Tool } from '@/lib/types';

export const aiDocumentFormatConverterTools: Tool[] = [
    { name: 'CloudConvert Document', description: 'Convert between DOCX, PDF, TXT, HTML and more.', url: 'https://cloudconvert.com/document-converter', image: 'https://www.google.com/s2/favicons?sz=128&domain=cloudconvert.com', dataAiHint: 'doc formats', pricing: 'Freemium' },
    { name: 'Pandoc', description: 'A universal document converter.', url: 'https://pandoc.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pandoc.org', dataAiHint: 'universal converter', pricing: 'Free' },
    { name: 'DocuPub', description: 'Free online document converter.', url: 'https://www.docupub.com/document-converter', image: 'https://www.google.com/s2/favicons?sz=128&domain=docupub.com', dataAiHint: 'online document', pricing: 'Free' },
    { name: 'Smallpdf', description: 'A suite of tools for PDF and document conversion.', url: 'https://smallpdf.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=smallpdf.com', dataAiHint: 'pdf tools', pricing: 'Freemium' },
    { name: 'iLovePDF', description: 'Tools for converting documents to and from PDF.', url: 'https://www.ilovepdf.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ilovepdf.com', dataAiHint: 'pdf tools', pricing: 'Freemium' },
    { name: 'Zamzar', description: 'Supports over 1100 conversion types.', url: 'https://www.zamzar.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=zamzar.com', dataAiHint: 'file conversion', pricing: 'Freemium' },
    { name: 'Convertio', description: 'Convert files online from one format to another.', url: 'https://convertio.co/', image: 'https://www.google.com/s2/favicons?sz=128&domain=convertio.co', dataAiHint: 'online converter', pricing: 'Freemium' },
    { name: 'LibreOffice', description: 'Free office suite that can open and save in many formats.', url: 'https://www.libreoffice.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=libreoffice.org', dataAiHint: 'office suite', pricing: 'Free' },
    { name: 'Calibre', description: 'E-book management tool with conversion features.', url: 'https://calibre-ebook.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=calibre-ebook.com', dataAiHint: 'ebook converter', pricing: 'Free' },
    { name: 'Doxillion', description: 'Multi-format document converter for Windows and Mac.', url: 'https://www.nchsoftware.com/documentconvert/index.html', image: 'https://www.google.com/s2/favicons?sz=128&domain=nchsoftware.com', dataAiHint: 'document converter', pricing: 'Freemium' },
];
