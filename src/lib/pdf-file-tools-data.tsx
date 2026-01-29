'use client';

import React from 'react';
import { 
    Bot, FileText, File, Edit, FileKey, Lock, Share, FileArchive, Merge, Scissors, RotateCcw,
    FileImage, Eye, FileSignature, CheckCircle, FilePlus, ScanSearch, Cloud, Type
} from 'lucide-react';

export type Tool = {
    name: string;
    description: string;
    url: string;
    image: string;
    dataAiHint: string;
    pricing: 'Free' | 'Paid' | 'Freemium';
};

export type ToolCategory = {
    title: string;
    icon: React.ReactNode;
    tools: Tool[];
};

export const pdfFileToolData: ToolCategory[] = [
    {
        title: "AI PDF Tools",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ChatPDF', description: 'Chat with any PDF document.', url: 'https://www.chatpdf.com/', image: 'https://picsum.photos/seed/chatpdf-pdf/600/400', dataAiHint: 'pdf chat', pricing: 'Freemium' },
            { name: 'Humata AI', description: 'Your AI for files. Ask questions and get answers.', url: 'https://www.humata.ai/', image: 'https://picsum.photos/seed/humata-pdf/600/400', dataAiHint: 'document ai', pricing: 'Freemium' },
            { name: 'PDFgear', description: 'Free PDF editor and converter with AI chat.', url: 'https://www.pdfgear.com/', image: 'https://picsum.photos/seed/pdfgear-ai/600/400', dataAiHint: 'ai pdf', pricing: 'Free' },
        ]
    },
    {
        title: "PDF Converters",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Smallpdf', description: 'Online PDF converter to Word, Excel, JPG, and more.', url: 'https://smallpdf.com/pdf-converter', image: 'https://picsum.photos/seed/smallpdf-converter/600/400', dataAiHint: 'pdf conversion', pricing: 'Freemium' },
            { name: 'iLovePDF', description: 'Every tool you need to work with PDFs in one place.', url: 'https://www.ilovepdf.com/', image: 'https://picsum.photos/seed/ilovepdf-tools/600/400', dataAiHint: 'pdf tools', pricing: 'Freemium' },
            { name: 'Adobe Acrobat Converter', description: 'Convert PDFs to and from Microsoft Office formats.', url: 'https://www.adobe.com/acrobat/online/pdf-to-word.html', image: 'https://picsum.photos/seed/acrobat-converter/600/400', dataAiHint: 'adobe pdf', pricing: 'Free' },
        ]
    },
    {
        title: "PDF Editors",
        icon: <Edit className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Adobe Acrobat Pro', description: 'The complete PDF solution.', url: 'https://www.adobe.com/acrobat/acrobat-pro.html', image: 'https://picsum.photos/seed/acrobat-pro/600/400', dataAiHint: 'pro pdf', pricing: 'Paid' },
            { name: 'PDF Expert', description: 'The go-to PDF editor for Mac, iPhone and iPad.', url: 'https://pdfexpert.com/', image: 'https://picsum.photos/seed/pdfexpert/600/400', dataAiHint: 'mac pdf', pricing: 'Paid' },
            { name: 'Sejda', description: 'Easy, pleasant and productive PDF editor.', url: 'https://www.sejda.com/', image: 'https://picsum.photos/seed/sejda/600/400', dataAiHint: 'online editor', pricing: 'Freemium' },
        ]
    },
    {
        title: "PDF Security &amp; Protection",
        icon: <Lock className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Smallpdf Protect PDF', description: 'Encrypt your PDF with a password.', url: 'https://smallpdf.com/protect-pdf', image: 'https://picsum.photos/seed/smallpdf-protect/600/400', dataAiHint: 'password protect', pricing: 'Freemium' },
            { name: 'iLovePDF Protect PDF', description: 'Add a password and encrypt your PDF file.', url: 'https://www.ilovepdf.com/protect-pdf', image: 'https://picsum.photos/seed/ilovepdf-protect/600/400', dataAiHint: 'encrypt pdf', pricing: 'Free' },
        ]
    },
    {
        title: "File Compression",
        icon: <FileArchive className="w-5 h-5 text-primary"/>,
        tools: [
            { name: '7-Zip', description: 'A free and open-source file archiver.', url: 'https://www.7-zip.org/', image: 'https://picsum.photos/seed/7zip-compress/600/400', dataAiHint: 'file archiver', pricing: 'Free' },
            { name: 'WinRAR', description: 'A powerful archive manager.', url: 'https://www.win-rar.com/', image: 'https://picsum.photos/seed/winrar-compress/600/400', dataAiHint: 'rar file', pricing: 'Freemium' },
            { name: 'PeaZip', description: 'Free file archiver utility.', url: 'https://peazip.github.io/', image: 'https://picsum.photos/seed/peazip/600/400', dataAiHint: 'open source', pricing: 'Free' },
        ]
    },
    {
        title: "Large File Sharing",
        icon: <Share className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'WeTransfer', description: 'The simplest way to send your files around the world.', url: 'https://wetransfer.com/', image: 'https://picsum.photos/seed/wetransfer/600/400', dataAiHint: 'send files', pricing: 'Freemium' },
            { name: 'Filemail', description: 'Send large files fast.', url: 'https://www.filemail.com/', image: 'https://picsum.photos/seed/filemail/600/400', dataAiHint: 'large files', pricing: 'Freemium' },
            { name: 'SendAnywhere', description: 'Easy, quick, and unlimited file sharing.', url: 'https://send-anywhere.com/', image: 'https://picsum.photos/seed/sendanywhere/600/400', dataAiHint: 'quick sharing', pricing: 'Freemium' },
        ]
    },
    {
        title: "OCR Tools",
        icon: <ScanSearch className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Adobe Scan', description: 'Mobile scanner app to create searchable PDFs.', url: 'https://www.adobe.com/acrobat/mobile/scanner-app.html', image: 'https://picsum.photos/seed/adobescan-ocr/600/400', dataAiHint: 'mobile scanner', pricing: 'Free' },
            { name: 'Google Cloud Vision AI', description: 'Derive insights from your images with OCR.', url: 'https://cloud.google.com/vision', image: 'https://picsum.photos/seed/gvision-ocr/600/400', dataAiHint: 'ocr api', pricing: 'Paid' },
            { name: 'Nanonets', description: 'AI-based OCR software for intelligent document processing.', url: 'https://nanonets.com/online-ocr', image: 'https://picsum.photos/seed/nanonets/600/400', dataAiHint: 'intelligent ocr', pricing: 'Freemium' },
        ]
    },
    {
        title: "Cloud Storage",
        icon: <Cloud className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Drive', description: 'Store, share, and collaborate on files.', url: 'https://www.google.com/drive/', image: 'https://picsum.photos/seed/gdrive-storage/600/400', dataAiHint: 'cloud documents', pricing: 'Freemium' },
            { name: 'Dropbox', description: 'Cloud storage and file synchronization.', url: 'https://www.dropbox.com/', image: 'https://picsum.photos/seed/dropbox-storage/600/400', dataAiHint: 'file storage', pricing: 'Freemium' },
            { name: 'OneDrive', description: 'Microsoft\'s cloud storage service.', url: 'https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage', image: 'https://picsum.photos/seed/onedrive/600/400', dataAiHint: 'file sharing', pricing: 'Freemium' },
        ]
    },
    {
        title: "PDF Merging &amp; Splitting",
        icon: <Merge className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'iLovePDF Merge PDF', description: 'Combine PDFs in the order you want.', url: 'https://www.ilovepdf.com/merge_pdf', image: 'https://picsum.photos/seed/ilovepdf-merge/600/400', dataAiHint: 'combine pdf', pricing: 'Free' },
            { name: 'Smallpdf Split PDF', description: 'Extract pages from your PDF.', url: 'https://smallpdf.com/split-pdf', image: 'https://picsum.photos/seed/smallpdf-split/600/400', dataAiHint: 'extract pages', pricing: 'Freemium' },
        ]
    },
    {
        title: "File Naming &amp; Organization",
        icon: <Type className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Bulk Rename Utility', description: 'A free file renaming software for Windows.', url: 'https://www.bulkrenameutility.co.uk/', image: 'https://picsum.photos/seed/bulkrenamer/600/400', dataAiHint: 'file renamer', pricing: 'Free' },
        ]
    }
];
