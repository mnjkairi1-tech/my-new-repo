
'use client';

import React from 'react';
import { 
    Scissors, Bot, Wand2, Clapperboard, Type, Mic, FileText, Music, Sparkles, Film,
    Upload, Palette, Aperture, Wind, Trash2, Maximize, FastForward, ListVideo, Languages,
    Video, MessageSquare, Speaker, GitBranch, ShoppingCart, Home, User, Settings, BarChart,
    Layers, UserCheck, Repeat, FileLock2, Code, Smile
} from 'lucide-react';
import type { Tool } from '@/lib/types';
import { aiVideoEditorsTools } from './video-editing-data/ai-video-editors';
import { textToVideoGeneratorsTools } from './video-editing-data/text-to-video-generators';
import { aiVoiceAudioTools } from './video-editing-data/ai-voice-audio-tools';
import { aiScriptingStoryboardingTools } from './video-editing-data/ai-scripting-storyboarding';
import { aiSpecialEffectsVfxTools } from './video-editing-data/ai-special-effects-vfx';
import { aiVideoEnhancementUpscalingTools } from './video-editing-data/ai-video-enhancement-upscaling';
import { aiColorCorrectionGradingTools } from './video-editing-data/ai-color-correction-grading';
import { aiVideoStabilizationTools } from './video-editing-data/ai-video-stabilization';
import { aiBackgroundRemovalVideoTools } from './video-editing-data/ai-background-removal-video';
import { aiObjectRemovalVideoTools } from './video-editing-data/ai-object-removal-video';
import { aiAutoReframingResizingTools } from './video-editing-data/ai-auto-reframing-resizing';
import { aiSlowMotionSpeedRampingTools } from './video-editing-data/ai-slow-motion-speed-ramping';
import { aiVideoSummarizationHighlightsTools } from './video-editing-data/ai-video-summarization-highlights';
import { aiAutomatedVideoDubbingTools } from './video-editing-data/ai-automated-video-dubbing';
import { aiSubtitleCaptionGenerationTools } from './video-editing-data/ai-subtitle-caption-generation';
import { aiVideoToTextTranscriptionTools } from './video-editing-data/ai-video-to-text-transcription';
import { aiTextToMusicSoundEffectsTools } from './video-editing-data/ai-text-to-music-sound-effects';
import { aiStockFootageBRollGenerationTools } from './video-editing-data/ai-stock-footage-b-roll-generation';
import { aiVideoForSocialMediaTools } from './video-editing-data/ai-video-for-social-media';
import { aiVideoForEcommerceTools } from './video-editing-data/ai-video-for-ecommerce';
import { aiVideoForRealEstateTools } from './video-editing-data/ai-video-for-real-estate';
import { aiPersonalizedVideoCreationTools } from './video-editing-data/ai-personalized-video-creation';
import { aiInteractiveVideoTools } from './video-editing-data/ai-interactive-video-tools';
import { aiVideoApiSdksTools } from './video-editing-data/ai-video-api-sdks';
import { aiVideoAnalyticsTools } from './video-editing-data/ai-video-analytics';
import { aiVideoContentRepurposingTools } from './video-editing-data/ai-video-content-repurposing';
import { aiAnimationTools } from './video-editing-data/ai-animation-tools';
import { aiLipSyncDubbingTools } from './video-editing-data/ai-lip-sync-dubbing';
import { aiVideoFaceSwapTools } from './video-editing-data/ai-video-face-swap';
import { aiVideoAssetManagementTools } from './video-editing-data/ai-video-asset-management';

export type ToolCategory = {
    title: string;
    icon: React.ReactNode;
    tools: Tool[];
};

export const videoEditingToolData: ToolCategory[] = [
    {
        title: "AI Video Editors",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: aiVideoEditorsTools
    },
    {
        title: "Text-to-Video Generators",
        icon: <Type className="w-5 h-5 text-primary"/>,
        tools: textToVideoGeneratorsTools
    },
    {
        title: "AI Voice & Audio Tools",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: aiVoiceAudioTools
    },
    {
        title: "AI Scripting & Storyboarding",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: aiScriptingStoryboardingTools
    },
    {
        title: "AI Special Effects (VFX)",
        icon: <Sparkles className="w-5 h-5 text-primary"/>,
        tools: aiSpecialEffectsVfxTools
    },
    {
        title: "AI Video Enhancement & Upscaling",
        icon: <Upload className="w-5 h-5 text-primary"/>,
        tools: aiVideoEnhancementUpscalingTools
    },
    {
        title: "AI Color Correction & Grading",
        icon: <Palette className="w-5 h-5 text-primary"/>,
        tools: aiColorCorrectionGradingTools
    },
    {
        title: "AI Video Stabilization",
        icon: <Aperture className="w-5 h-5 text-primary"/>,
        tools: aiVideoStabilizationTools
    },
    {
        title: "AI Background Removal for Video",
        icon: <Wind className="w-5 h-5 text-primary"/>,
        tools: aiBackgroundRemovalVideoTools
    },
    {
        title: "AI Object Removal in Video",
        icon: <Trash2 className="w-5 h-5 text-primary"/>,
        tools: aiObjectRemovalVideoTools
    },
    {
        title: "AI Auto Re-framing & Resizing",
        icon: <Maximize className="w-5 h-5 text-primary"/>,
        tools: aiAutoReframingResizingTools
    },
    {
        title: "AI Slow Motion & Speed Ramping",
        icon: <FastForward className="w-5 h-5 text-primary"/>,
        tools: aiSlowMotionSpeedRampingTools
    },
    {
        title: "AI Video Summarization & Highlights",
        icon: <ListVideo className="w-5 h-5 text-primary"/>,
        tools: aiVideoSummarizationHighlightsTools
    },
    {
        title: "AI Automated Video Dubbing",
        icon: <Languages className="w-5 h-5 text-primary"/>,
        tools: aiAutomatedVideoDubbingTools
    },
    {
        title: "AI Subtitle & Caption Generation",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: aiSubtitleCaptionGenerationTools
    },
    {
        title: "AI Video-to-Text (Transcription)",
        icon: <Speaker className="w-5 h-5 text-primary"/>,
        tools: aiVideoToTextTranscriptionTools
    },
    {
        title: "AI Text-to-Music/Sound Effects",
        icon: <Music className="w-5 h-5 text-primary"/>,
        tools: aiTextToMusicSoundEffectsTools
    },
    {
        title: "AI Stock Footage & B-Roll Generation",
        icon: <GitBranch className="w-5 h-5 text-primary"/>,
        tools: aiStockFootageBRollGenerationTools
    },
    {
        title: "AI Video for Social Media",
        icon: <ShoppingCart className="w-5 h-5 text-primary"/>,
        tools: aiVideoForSocialMediaTools
    },
    {
        title: "AI Video for E-commerce",
        icon: <Home className="w-5 h-5 text-primary"/>,
        tools: aiVideoForEcommerceTools
    },
    {
        title: "AI Video for Real Estate",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: aiVideoForRealEstateTools
    },
    {
        title: "AI Personalized Video Creation",
        icon: <UserCheck className="w-5 h-5 text-primary"/>,
        tools: aiPersonalizedVideoCreationTools
    },
    {
        title: "AI Interactive Video Tools",
        icon: <Layers className="w-5 h-5 text-primary"/>,
        tools: aiInteractiveVideoTools
    },
    {
        title: "AI Video API & SDKs",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: aiVideoApiSdksTools
    },
    {
        title: "AI Video Analytics",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: aiVideoAnalyticsTools
    },
    {
        title: "AI Video Content Repurposing",
        icon: <Repeat className="w-5 h-5 text-primary"/>,
        tools: aiVideoContentRepurposingTools
    },
    {
        title: "AI Animation Tools",
        icon: <Film className="w-5 h-5 text-primary"/>,
        tools: aiAnimationTools
    },
    {
        title: "AI Lip-Sync & Dubbing",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: aiLipSyncDubbingTools
    },
    {
        title: "AI Video Face Swap",
        icon: <Smile className="w-5 h-5 text-primary"/>,
        tools: aiVideoFaceSwapTools
    },
    {
        title: "AI Video Asset Management",
        icon: <FileLock2 className="w-5 h-5 text-primary"/>,
        tools: aiVideoAssetManagementTools
    }
];
