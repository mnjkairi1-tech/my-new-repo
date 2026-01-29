
'use client';

import React from 'react';
import { 
    ImageIcon, Sparkles, Wand2, Trash2, Crop, User, Sun, Camera, Palette, Filter,
    Type, Edit, GitBranch, KeyRound, Square, Bot, Package, Users as UsersIcon, Tv, ZoomIn, Smile, FileImage, 
    Text, ScanText, Settings
} from 'lucide-react';
import type { Tool } from '@/lib/types';
import { aiPhotoEditorTools } from './image-editing-data/ai-photo-editor';
import { aiBackgroundRemovalTools } from './image-editing-data/ai-background-removal-tools';
import { aiImageEnhancementUpscalerTools } from './image-editing-data/ai-image-enhancement-upscaler';
import { aiObjectRemovalTools } from './image-editing-data/ai-object-removal';
import { aiImageRetouchingTools } from './image-editing-data/ai-image-retouching-tools';
import { aiPortraitEditingTools } from './image-editing-data/ai-portrait-editing-tools';
import { aiFaceEnhancementSkinRetouchTools } from './image-editing-data/ai-face-enhancement-skin-retouch';
import { aiPhotoRestorationTools } from './image-editing-data/ai-photo-restoration';
import { aiColorCorrectionGradingTools } from './image-editing-data/ai-color-correction-grading';
import { aiImageFiltersEffectsTools } from './image-editing-data/ai-image-filters-effects';
import { aiTextToImageGeneratorTools } from './image-editing-data/ai-text-to-image-generator';
import { aiImageToImageEditingTools } from './image-editing-data/ai-image-to-image-editing-tools';
import { aiLogoGraphicDesignTools } from './image-editing-data/ai-logo-graphic-design-tools';
import { aiThumbnailBannerCreatorTools } from './image-editing-data/ai-thumbnail-banner-creator';
import { aiSocialMediaImageTools } from './image-editing-data/ai-social-media-image-tools';
import { aiImageResizeCropTools } from './image-editing-data/ai-image-resize-crop-tools';
import { aiImageCompressionTools } from './image-editing-data/ai-image-compression-tools';
import { aiProductPhotoEditingTools } from './image-editing-data/ai-product-photo-editing-tools';
import { aiEcommerceImageTools } from './image-editing-data/ai-ecommerce-image-tools';
import { aiMockupTemplateGeneratorTools } from './image-editing-data/ai-mockup-template-generator';
import { aiBackgroundBlurBokehTools } from './image-editing-data/ai-background-blur-bokeh-tools';
import { aiImageNoiseReductionTools } from './image-editing-data/ai-image-noise-reduction-tools';
import { aiCartoonAnimeImageGeneratorTools } from './image-editing-data/ai-cartoon-anime-image-generator';
import { aiFaceSwapImageTools } from './image-editing-data/ai-face-swap-image-tools';
import { aiAvatarProfilePictureGeneratorTools } from './image-editing-data/ai-avatar-profile-picture-generator';
import { aiOcrImageToTextTools } from './image-editing-data/ai-ocr-image-to-text-tools';
import { aiImageMetadataOptimizationTools } from './image-editing-data/ai-image-metadata-optimization-tools';


export type ToolCategory = {
    title: string;
    icon: React.ReactNode;
    tools: Tool[];
};

export const imageEditingToolData: ToolCategory[] = [
    {
        title: "AI Photo Editor",
        icon: <ImageIcon className="w-5 h-5 text-primary"/>,
        tools: aiPhotoEditorTools
    },
    {
        title: "AI Background Removal Tools",
        icon: <Trash2 className="w-5 h-5 text-primary"/>,
        tools: aiBackgroundRemovalTools
    },
    {
        title: "AI Image Enhancement & Upscaler",
        icon: <Sparkles className="w-5 h-5 text-primary"/>,
        tools: aiImageEnhancementUpscalerTools
    },
    {
        title: "AI Object Removal (Magic Eraser)",
        icon: <Wand2 className="w-5 h-5 text-primary"/>,
        tools: aiObjectRemovalTools
    },
    {
        title: "AI Image Retouching Tools",
        icon: <Edit className="w-5 h-5 text-primary"/>,
        tools: aiImageRetouchingTools
    },
    {
        title: "AI Portrait Editing Tools",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: aiPortraitEditingTools
    },
    {
        title: "AI Face Enhancement & Skin Retouch",
        icon: <Smile className="w-5 h-5 text-primary"/>,
        tools: aiFaceEnhancementSkinRetouchTools
    },
    {
        title: "AI Photo Restoration (Old Photos)",
        icon: <Camera className="w-5 h-5 text-primary"/>,
        tools: aiPhotoRestorationTools
    },
    {
        title: "AI Color Correction & Grading",
        icon: <Palette className="w-5 h-5 text-primary"/>,
        tools: aiColorCorrectionGradingTools
    },
    {
        title: "AI Image Filters & Effects",
        icon: <Filter className="w-5 h-5 text-primary"/>,
        tools: aiImageFiltersEffectsTools
    },
    {
        title: "AI Text-to-Image Generator",
        icon: <Type className="w-5 h-5 text-primary"/>,
        tools: aiTextToImageGeneratorTools
    },
    {
        title: "AI Image-to-Image Editing Tools",
        icon: <GitBranch className="w-5 h-5 text-primary"/>,
        tools: aiImageToImageEditingTools
    },
    {
        title: "AI Logo & Graphic Design Tools",
        icon: <Package className="w-5 h-5 text-primary"/>,
        tools: aiLogoGraphicDesignTools
    },
    {
        title: "AI Thumbnail & Banner Creator",
        icon: <Tv className="w-5 h-5 text-primary"/>,
        tools: aiThumbnailBannerCreatorTools
    },
    {
        title: "AI Social Media Image Tools",
        icon: <UsersIcon className="w-5 h-5 text-primary"/>,
        tools: aiSocialMediaImageTools
    },
    {
        title: "AI Image Resize & Crop Tools",
        icon: <Crop className="w-5 h-5 text-primary"/>,
        tools: aiImageResizeCropTools
    },
    {
        title: "AI Image Compression Tools",
        icon: <ZoomIn className="w-5 h-5 text-primary" style={{ transform: 'scaleX(-1)' }}/>,
        tools: aiImageCompressionTools
    },
    {
        title: "AI Product Photo Editing Tools",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: aiProductPhotoEditingTools
    },
    {
        title: "AI E-commerce Image Tools",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: aiEcommerceImageTools
    },
    {
        title: "AI Mockup & Template Generator",
        icon: <FileImage className="w-5 h-5 text-primary"/>,
        tools: aiMockupTemplateGeneratorTools
    },
    {
        title: "AI Background Blur & Bokeh Tools",
        icon: <Sparkles className="w-5 h-5 text-primary"/>,
        tools: aiBackgroundBlurBokehTools
    },
    {
        title: "AI Image Noise Reduction Tools",
        icon: <Wand2 className="w-5 h-5 text-primary"/>,
        tools: aiImageNoiseReductionTools
    },
    {
        title: "AI Cartoon / Anime Image Generator",
        icon: <Smile className="w-5 h-5 text-primary"/>,
        tools: aiCartoonAnimeImageGeneratorTools
    },
    {
        title: "AI Face Swap Image Tools",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: aiFaceSwapImageTools
    },
    {
        title: "AI Avatar & Profile Picture Generator",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: aiAvatarProfilePictureGeneratorTools
    },
    {
        title: "AI OCR (Image to Text) Tools",
        icon: <ScanText className="w-5 h-5 text-primary"/>,
        tools: aiOcrImageToTextTools
    },
    {
        title: "AI Image Metadata & Optimization Tools",
        icon: <Settings className="w-5 h-5 text-primary"/>,
        tools: aiImageMetadataOptimizationTools
    }
];
