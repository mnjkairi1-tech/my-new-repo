import type { Tool } from '@/lib/types';

export const aiDocumentFormatConverterTools: Tool[] = [
    { name: 'CloudConvert Document', description: 'Convert between DOCX, PDF, TXT, HTML and more.', url: 'https://cloudconvert.com/document-converter', image: 'https://picsum.photos/seed/cc-doc-convert/600/400', dataAiHint: 'doc formats', pricing: 'Freemium' },
    { name: 'Pandoc', description: 'A universal document converter.', url: 'https://pandoc.org/', image: 'https://picsum.photos/seed/pandoc/600/400', dataAiHint: 'universal converter', pricing: 'Free' },
    { name: 'DocuPub', description: 'Free online document converter.', url: 'https://www.docupub.com/document-converter', image: 'https://picsum.photos/seed/docupub/600/400', dataAiHint: 'online document', pricing: 'Free' },
    { name: 'Smallpdf', description: 'A suite of tools for PDF and document conversion.', url: 'https://smallpdf.com/', image: 'https://picsum.photos/seed/smallpdf-doc/600/400', dataAiHint: 'pdf tools', pricing: 'Freemium' },
    { name: 'iLovePDF', description: 'Tools for converting documents to and from PDF.', url: 'https://www.ilovepdf.com/', image: 'https://picsum.photos/seed/ilovepdf-doc/600/400', dataAiHint: 'pdf tools', pricing: 'Freemium' },
    { name: 'Zamzar', description: 'Supports over 1100 conversion types.', url: 'https://www.zamzar.com/', image: 'https://picsum.photos/seed/zamzar-doc/600/400', dataAiHint: 'file conversion', pricing: 'Freemium' },
    { name: 'Convertio', description: 'Convert files online from one format to another.', url: 'https://convertio.co/', image: 'https://picsum.photos/seed/convertio-doc/600/400', dataAiHint: 'online converter', pricing: 'Freemium' },
    { name: 'LibreOffice', description: 'Free office suite that can open and save in many formats.', url: 'https://www.libreoffice.org/', image: 'https://picsum.photos/seed/libreoffice-doc/600/400', dataAiHint: 'office suite', pricing: 'Free' },
    { name: 'Calibre', description: 'E-book management tool with conversion features.', url: 'https://calibre-ebook.com/', image: 'https://picsum.photos/seed/calibre-doc/600/400', dataAiHint: 'ebook converter', pricing: 'Free' },
    { name: 'Doxillion', description: 'Multi-format document converter for Windows and Mac.', url: 'https://www.nchsoftware.com/documentconvert/index.html', image: 'https://picsum.photos/seed/doxillion/600/400', dataAiHint: 'document converter', pricing: 'Freemium' },
];
