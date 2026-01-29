import type { Tool } from '@/lib/types';

export const aiImageToTextConverterTools: Tool[] = [
    { name: 'Google Cloud Vision AI', description: 'Derive insights from your images with OCR.', url: 'https://cloud.google.com/vision', image: 'https://picsum.photos/seed/gvision-ocr-convert/600/400', dataAiHint: 'ocr api', pricing: 'Paid' },
    { name: 'Adobe Scan', description: 'Mobile scanner app to create searchable PDFs.', url: 'https://www.adobe.com/acrobat/mobile/scanner-app.html', image: 'https://picsum.photos/seed/adobescan-ocr/600/400', dataAiHint: 'mobile scanner', pricing: 'Free' },
    { name: 'Nanonets', description: 'AI-based OCR software.', url: 'https://nanonets.com/online-ocr', image: 'https://picsum.photos/seed/nanonets/600/400', dataAiHint: 'ai ocr', pricing: 'Freemium' },
    { name: 'Tesseract OCR', description: 'An open source OCR engine.', url: 'https://github.com/tesseract-ocr/tesseract', image: 'https://picsum.photos/seed/tesseract/600/400', dataAiHint: 'open source ocr', pricing: 'Free' },
    { name: 'Microsoft Lens', description: 'PDF scanner app with OCR.', url: 'https://www.microsoft.com/en-us/microsoft-365/lens', image: 'https://picsum.photos/seed/mslens-ocr/600/400', dataAiHint: 'pdf scanner', pricing: 'Free' },
    { name: 'Readiris', description: 'OCR software for PDF and documents.', url: 'https://www.irislink.com/readiris', image: 'https://picsum.photos/seed/readiris/600/400', dataAiHint: 'ocr software', pricing: 'Paid' },
    { name: 'Abbyy FineReader', description: 'PDF editor with powerful OCR.', url: 'https://pdf.abbyy.com/', image: 'https://picsum.photos/seed/abbyy-ocr/600/400', dataAiHint: 'pdf ocr', pricing: 'Paid' },
    { name: 'SimpleOCR', description: 'Free OCR software.', url: 'https://simpleocr.com/', image: 'https://picsum.photos/seed/simpleocr/600/400', dataAiHint: 'free ocr', pricing: 'Free' },
    { name: 'OnlineOCR.net', description: 'Free online OCR service.', url: 'https://www.onlineocr.net/', image: 'https://picsum.photos/seed/onlineocr/600/400', dataAiHint: 'online ocr', pricing: 'Free' },
    { name: 'i2OCR', description: 'Free online OCR that converts images to text.', url: 'https://www.i2ocr.com/', image: 'https://picsum.photos/seed/i2ocr/600/400', dataAiHint: 'image to text', pricing: 'Free' },
];
