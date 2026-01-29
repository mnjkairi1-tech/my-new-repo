'use client';

import React from 'react';
import { 
    File, FileText, ImageIcon, Video, Mic, ScanText, Mic2, FileSpreadsheet, FileArchive, Code,
    Languages, Database, RefreshCw, Bot, Box, Globe, DollarSign,
    Shuffle
} from 'lucide-react';

import type { Tool } from '@/lib/types';
import { aiFileConvertersTools } from './converter-tools-data/ai-file-converters';
import { aiPdfConvertersTools } from './converter-tools-data/ai-pdf-converters';
import { aiImageConverterTools } from './converter-tools-data/ai-image-converter-tools';
import { aiVideoConverterTools } from './converter-tools-data/ai-video-converter-tools';
import { aiAudioConverterTools } from './converter-tools-data/ai-audio-converter-tools';
import { aiDocumentFormatConverterTools } from './converter-tools-data/ai-document-format-converter';
import { aiImageToTextConverterTools } from './converter-tools-data/ai-image-to-text-converter';
import { aiTextToImageConverterTools } from './converter-tools-data/ai-text-to-image-converter';
import { aiTextToSpeechConverterTools } from './converter-tools-data/ai-text-to-speech-converter';
import { aiSpeechToTextConverterTools } from './converter-tools-data/ai-speech-to-text-converter';
import { aiImageToPdfConverterTools } from './converter-tools-data/ai-image-to-pdf-converter';
import { aiPdfToWordConverterTools } from './converter-tools-data/ai-pdf-to-word-converter';
import { aiPdfToExcelConverterTools } from './converter-tools-data/ai-pdf-to-excel-converter';
import { aiPdfToImageConverterTools } from './converter-tools-data/ai-pdf-to-image-converter';
import { aiWordToPdfConverterTools } from './converter-tools-data/ai-word-to-pdf-converter';
import { aiVideoToAudioConverterTools } from './converter-tools-data/ai-video-to-audio-converter';
import { aiAudioToTextConverterTools } from './converter-tools-data/ai-audio-to-text-converter';
import { aiAudioFormatConverterTools } from './converter-tools-data/ai-audio-format-converter';
import { aiVideoFormatConverterTools } from './converter-tools-data/ai-video-format-converter';
import { aiSubtitleConverterTools } from './converter-tools-data/ai-subtitle-converter';
import { aiCodeConverterTools } from './converter-tools-data/ai-code-converter';
import { aiLanguageTranslationConverterTools } from './converter-tools-data/ai-language-translation-converter';
import { aiDataFormatConverterTools } from './converter-tools-data/ai-data-format-converter';
import { aiCsvExcelConverterTools } from './converter-tools-data/ai-csv-excel-converter';
import { aiJsonXmlConverterTools } from './converter-tools-data/ai-json-xml-converter';
import { aiUnitConverterTools } from './converter-tools-data/ai-unit-converter';
import { aiCurrencyConverterTools } from './converter-tools-data/ai-currency-converter';
import { aiFileCompressionConverterTools } from './converter-tools-data/ai-file-compression-converter';
import { aiBatchConversionTools } from './converter-tools-data/ai-batch-conversion';
import { aiOnlineConversionPlatformsTools } from './converter-tools-data/ai-online-conversion-platforms';

export type ToolCategory = {
    title: string;
    icon: React.ReactNode;
    tools: Tool[];
};

export const converterToolData: ToolCategory[] = [
    {
        title: "AI File Converter Tools",
        icon: <File className="w-5 h-5 text-primary"/>,
        tools: aiFileConvertersTools
    },
    {
        title: "AI PDF Converter Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: aiPdfConvertersTools
    },
    {
        title: "AI Image Converter Tools",
        icon: <ImageIcon className="w-5 h-5 text-primary"/>,
        tools: aiImageConverterTools,
    },
    {
        title: "AI Video Converter Tools",
        icon: <Video className="w-5 h-5 text-primary"/>,
        tools: aiVideoConverterTools,
    },
    {
        title: "AI Audio Converter Tools",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: aiAudioConverterTools,
    },
    {
        title: "AI Document Format Converter",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: aiDocumentFormatConverterTools,
    },
    {
        title: "AI Image to Text Converter (OCR)",
        icon: <ScanText className="w-5 h-5 text-primary"/>,
        tools: aiImageToTextConverterTools,
    },
    {
        title: "AI Text to Image Converter",
        icon: <ImageIcon className="w-5 h-5 text-primary"/>,
        tools: aiTextToImageConverterTools,
    },
    {
        title: "AI Text to Speech Converter",
        icon: <Mic2 className="w-5 h-5 text-primary"/>,
        tools: aiTextToSpeechConverterTools,
    },
    {
        title: "AI Speech to Text Converter",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: aiSpeechToTextConverterTools,
    },
    {
        title: "AI Image to PDF Converter",
        icon: <File className="w-5 h-5 text-primary"/>,
        tools: aiImageToPdfConverterTools,
    },
    {
        title: "AI PDF to Word Converter",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: aiPdfToWordConverterTools,
    },
    {
        title: "AI PDF to Excel Converter",
        icon: <FileSpreadsheet className="w-5 h-5 text-primary"/>,
        tools: aiPdfToExcelConverterTools,
    },
    {
        title: "AI PDF to Image Converter",
        icon: <ImageIcon className="w-5 h-5 text-primary"/>,
        tools: aiPdfToImageConverterTools,
    },
    {
        title: "AI Word to PDF Converter",
        icon: <File className="w-5 h-5 text-primary"/>,
        tools: aiWordToPdfConverterTools,
    },
    {
        title: "AI Video to Audio Converter",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: aiVideoToAudioConverterTools,
    },
    {
        title: "AI Audio to Text Converter",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: aiAudioToTextConverterTools,
    },
    {
        title: "AI Audio Format Converter",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: aiAudioFormatConverterTools,
    },
    {
        title: "AI Video Format Converter",
        icon: <Video className="w-5 h-5 text-primary"/>,
        tools: aiVideoFormatConverterTools,
    },
    {
        title: "AI Subtitle Converter Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: aiSubtitleConverterTools,
    },
    {
        title: "AI Code Converter Tools",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: aiCodeConverterTools,
    },
    {
        title: "AI Language Translation Converter",
        icon: <Languages className="w-5 h-5 text-primary"/>,
        tools: aiLanguageTranslationConverterTools,
    },
    {
        title: "AI Data Format Converter",
        icon: <Database className="w-5 h-5 text-primary"/>,
        tools: aiDataFormatConverterTools,
    },
    {
        title: "AI CSV / Excel Converter",
        icon: <FileSpreadsheet className="w-5 h-5 text-primary"/>,
        tools: aiCsvExcelConverterTools,
    },
    {
        title: "AI JSON / XML Converter",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: aiJsonXmlConverterTools,
    },
    {
        title: "AI Unit Converter Tools",
        icon: <RefreshCw className="w-5 h-5 text-primary"/>,
        tools: aiUnitConverterTools,
    },
    {
        title: "AI Currency Converter Tools",
        icon: <DollarSign className="w-5 h-5 text-primary"/>,
        tools: aiCurrencyConverterTools,
    },
    {
        title: "AI File Compression Converter",
        icon: <FileArchive className="w-5 h-5 text-primary"/>,
        tools: aiFileCompressionConverterTools,
    },
    {
        title: "AI Batch Conversion Tools",
        icon: <Box className="w-5 h-5 text-primary"/>,
        tools: aiBatchConversionTools,
    },
    {
        title: "AI Online Conversion Platforms",
        icon: <Globe className="w-5 h-5 text-primary"/>,
        tools: aiOnlineConversionPlatformsTools,
    }
];
