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
            { name: 'ChatPDF', description: 'Chat with any PDF document.', url: 'https://www.chatpdf.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=chatpdf.com', dataAiHint: 'pdf chat', pricing: 'Freemium' },
            { name: 'Humata AI', description: 'Your AI for files. Ask questions and get answers.', url: 'https://www.humata.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=humata.ai', dataAiHint: 'document ai', pricing: 'Freemium' },
            { name: 'PDFgear', description: 'Free PDF editor and converter with AI chat.', url: 'https://www.pdfgear.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pdfgear.com', dataAiHint: 'ai pdf', pricing: 'Free' },
        ]
    },
    {
        title: "PDF Converters",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Smallpdf', description: 'Online PDF converter to Word, Excel, JPG, and more.', url: 'https://smallpdf.com/pdf-converter', image: 'https://www.google.com/s2/favicons?sz=128&domain=smallpdf.com', dataAiHint: 'pdf conversion', pricing: 'Freemium' },
            { name: 'iLovePDF', description: 'Every tool you need to work with PDFs in one place.', url: 'https://www.ilovepdf.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ilovepdf.com', dataAiHint: 'pdf tools', pricing: 'Freemium' },
            { name: 'Adobe Acrobat Converter', description: 'Convert PDFs to and from Microsoft Office formats.', url: 'https://www.adobe.com/acrobat/online/pdf-to-word.html', image: 'https://www.google.com/s2/favicons?sz=128&domain=adobe.com', dataAiHint: 'adobe pdf', pricing: 'Free' },
        ]
    },
    {
        title: "PDF Editors",
        icon: <Edit className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Adobe Acrobat Pro', description: 'The complete PDF solution.', url: 'https://www.adobe.com/acrobat/acrobat-pro.html', image: 'https://www.google.com/s2/favicons?sz=128&domain=adobe.com', dataAiHint: 'pro pdf', pricing: 'Paid' },
            { name: 'PDF Expert', description: 'The go-to PDF editor for Mac, iPhone and iPad.', url: 'https://pdfexpert.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pdfexpert.com', dataAiHint: 'mac pdf', pricing: 'Paid' },
            { name: 'Sejda', description: 'Easy, pleasant and productive PDF editor.', url: 'https://www.sejda.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sejda.com', dataAiHint: 'online editor', pricing: 'Freemium' },
        ]
    },
    {
        title: "PDF Security & Protection",
        icon: <Lock className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Smallpdf Protect PDF', description: 'Encrypt your PDF with a password.', url: 'https://smallpdf.com/protect-pdf', image: 'https://www.google.com/s2/favicons?sz=128&domain=smallpdf.com', dataAiHint: 'password protect', pricing: 'Freemium' },
            { name: 'iLovePDF Protect PDF', description: 'Add a password and encrypt your PDF file.', url: 'https://www.ilovepdf.com/protect-pdf', image: 'https://www.google.com/s2/favicons?sz=128&domain=ilovepdf.com', dataAiHint: 'encrypt pdf', pricing: 'Free' },
        ]
    },
    {
        title: "File Compression",
        icon: <FileArchive className="w-5 h-5 text-primary"/>,
        tools: [
            { name: '7-Zip', description: 'A free and open-source file archiver.', url: 'https://www.7-zip.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=7-zip.org', dataAiHint: 'file archiver', pricing: 'Free' },
            { name: 'WinRAR', description: 'A powerful archive manager.', url: 'https://www.win-rar.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=win-rar.com', dataAiHint: 'rar file', pricing: 'Freemium' },
            { name: 'PeaZip', description: 'Free file archiver utility.', url: 'https://peazip.github.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=peazip.github.io', dataAiHint: 'open source', pricing: 'Free' },
        ]
    },
    {
        title: "Large File Sharing",
        icon: <Share className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'WeTransfer', description: 'The simplest way to send your files around the world.', url: 'https://wetransfer.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=wetransfer.com', dataAiHint: 'send files', pricing: 'Freemium' },
            { name: 'Filemail', description: 'Send large files fast.', url: 'https://www.filemail.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=filemail.com', dataAiHint: 'large files', pricing: 'Freemium' },
            { name: 'SendAnywhere', description: 'Easy, quick, and unlimited file sharing.', url: 'https://send-anywhere.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=send-anywhere.com', dataAiHint: 'quick sharing', pricing: 'Freemium' },
        ]
    },
    {
        title: "OCR Tools",
        icon: <ScanSearch className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Adobe Scan', description: 'Mobile scanner app to create searchable PDFs.', url: 'https://www.adobe.com/acrobat/mobile/scanner-app.html', image: 'https://www.google.com/s2/favicons?sz=128&domain=adobe.com', dataAiHint: 'mobile scanner', pricing: 'Free' },
            { name: 'Google Cloud Vision AI', description: 'Derive insights from your images with OCR.', url: 'https://cloud.google.com/vision', image: 'https://www.google.com/s2/favicons?sz=128&domain=cloud.google.com', dataAiHint: 'ocr api', pricing: 'Paid' },
            { name: 'Nanonets', description: 'AI-based OCR software for intelligent document processing.', url: 'https://nanonets.com/online-ocr', image: 'https://www.google.com/s2/favicons?sz=128&domain=nanonets.com', dataAiHint: 'intelligent ocr', pricing: 'Freemium' },
        ]
    },
    {
        title: "Cloud Storage",
        icon: <Cloud className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Drive', description: 'Store, share, and collaborate on files.', url: 'https://www.google.com/drive/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'cloud documents', pricing: 'Freemium' },
            { name: 'Dropbox', description: 'Cloud storage and file synchronization.', url: 'https://www.dropbox.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=dropbox.com', dataAiHint: 'file storage', pricing: 'Freemium' },
            { name: 'OneDrive', description: 'Microsoft\'s cloud storage service.', url: 'https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage', image: 'https://www.google.com/s2/favicons?sz=128&domain=microsoft.com', dataAiHint: 'file sharing', pricing: 'Freemium' },
        ]
    },
    {
        title: "PDF Merging & Splitting",
        icon: <Merge className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'iLovePDF Merge PDF', description: 'Combine PDFs in the order you want.', url: 'https://www.ilovepdf.com/merge_pdf', image: 'https://www.google.com/s2/favicons?sz=128&domain=ilovepdf.com', dataAiHint: 'combine pdf', pricing: 'Free' },
            { name: 'Smallpdf Split PDF', description: 'Extract pages from your PDF.', url: 'https://smallpdf.com/split-pdf', image: 'https://www.google.com/s2/favicons?sz=128&domain=smallpdf.com', dataAiHint: 'extract pages', pricing: 'Freemium' },
        ]
    },
    {
        title: "File Naming & Organization",
        icon: <Type className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Bulk Rename Utility', description: 'A free file renaming software for Windows.', url: 'https://www.bulkrenameutility.co.uk/', image: 'https://www.google.com/s2/favicons?sz=128&domain=bulkrenameutility.co.uk', dataAiHint: 'file renamer', pricing: 'Free' },
        ]
    }
];
