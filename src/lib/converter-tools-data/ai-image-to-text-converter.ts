import type { Tool } from '@/lib/types';

export const aiImageToTextConverterTools: Tool[] = [
    { name: 'Google Cloud Vision AI', description: 'Derive insights from your images with OCR.', url: 'https://cloud.google.com/vision', image: 'https://www.google.com/s2/favicons?sz=128&domain=cloud.google.com', dataAiHint: 'ocr api', pricing: 'Paid' },
    { name: 'Adobe Scan', description: 'Mobile scanner app to create searchable PDFs.', url: 'https://www.adobe.com/acrobat/mobile/scanner-app.html', image: 'https://www.google.com/s2/favicons?sz=128&domain=adobe.com', dataAiHint: 'mobile scanner', pricing: 'Free' },
    { name: 'Nanonets', description: 'AI-based OCR software.', url: 'https://nanonets.com/online-ocr', image: 'https://www.google.com/s2/favicons?sz=128&domain=nanonets.com', dataAiHint: 'ai ocr', pricing: 'Freemium' },
    { name: 'Tesseract OCR', description: 'An open source OCR engine.', url: 'https://github.com/tesseract-ocr/tesseract', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'open source ocr', pricing: 'Free' },
    { name: 'Microsoft Lens', description: 'PDF scanner app with OCR.', url: 'https://www.microsoft.com/en-us/microsoft-365/lens', image: 'https://www.google.com/s2/favicons?sz=128&domain=microsoft.com', dataAiHint: 'pdf scanner', pricing: 'Free' },
    { name: 'Readiris', description: 'OCR software for PDF and documents.', url: 'https://www.irislink.com/readiris', image: 'https://www.google.com/s2/favicons?sz=128&domain=irislink.com', dataAiHint: 'ocr software', pricing: 'Paid' },
    { name: 'Abbyy FineReader', description: 'PDF editor with powerful OCR.', url: 'https://pdf.abbyy.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=abbyy.com', dataAiHint: 'pdf ocr', pricing: 'Paid' },
    { name: 'SimpleOCR', description: 'Free OCR software.', url: 'https://simpleocr.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=simpleocr.com', dataAiHint: 'free ocr', pricing: 'Free' },
    { name: 'OnlineOCR.net', description: 'Free online OCR service.', url: 'https://www.onlineocr.net/', image: 'https://www.google.com/s2/favicons?sz=128&domain=onlineocr.net', dataAiHint: 'online ocr', pricing: 'Free' },
    { name: 'i2OCR', description: 'Free online OCR that converts images to text.', url: 'https://www.i2ocr.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=i2ocr.com', dataAiHint: 'image to text', pricing: 'Free' },
];
