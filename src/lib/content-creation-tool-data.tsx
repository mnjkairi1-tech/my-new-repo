
'use client';

import React from 'react';
import { 
    ImageIcon, Video, Film, Mic2, FileText, Scissors, Mic, Music, UserSquare, Presentation, Podcast, Book,
    Users, Mail, Sparkles, Image, PartyPopper, Bot, BookOpen, Repeat, Languages, Gamepad, Cuboid,
    AudioLines, Recycle, Lightbulb
} from 'lucide-react';
import type { Tool } from '@/lib/types';

import { textToImageTools } from './content-creation-data/text-to-image-tools';
import { imageToVideoTools } from './content-creation-data/image-to-video-tools';
import { textToVideoTools } from './content-creation-data/text-to-video-tools';
import { textToVoiceTools } from './content-creation-data/text-to-voice-tools';
import { voiceToVoiceTools } from './content-creation-data/voice-to-voice-tools';
import { aiMusicSoundEffectsTools } from './content-creation-data/ai-music-sound-effects';
import { scriptWritingTools } from './content-creation-data/script-writing-tools';
import { videoEditingTools } from './content-creation-data/video-editing-tools';
import { aiAvatarGeneratorsTools } from './content-creation-data/ai-avatar-generators';
import { aiPresentationMakersTools } from './content-creation-data/ai-presentation-makers';
import { aiPodcastingTools } from './content-creation-data/ai-podcasting-tools';
import { aiBlogArticleWritersTools } from './content-creation-data/ai-blog-article-writers';
import { aiSocialMediaContentTools } from './content-creation-data/ai-social-media-content';
import { aiAdCopyGeneratorsTools } from './content-creation-data/ai-ad-copy-generators';
import { aiEmailCopywritersTools } from './content-creation-data/ai-email-copywriters';
import { aiVideoScriptWritersTools } from './content-creation-data/ai-video-script-writers';
import { aiImageUpscalersTools } from './content-creation-data/ai-image-upscalers';
import { aiPhotoRetouchingTools } from './content-creation-data/ai-photo-retouching';
import { aiMemeGeneratorsTools } from './content-creation-data/ai-meme-generators';
import { aiStoryGeneratorsTools } from './content-creation-data/ai-story-generators';
import { aiContentSummarizersTools } from './content-creation-data/ai-content-summarizers';
import { aiParaphrasingTools } from './content-creation-data/ai-paraphrasing-tools';
import { aiGrammarStyleCheckersTools } from './content-creation-data/ai-grammar-style-checkers';
import { aiTranslationForContentTools } from './content-creation-data/ai-translation-for-content';
import { aiCharacterGeneratorsTools } from './content-creation-data/ai-character-generators';
import { aiGameAssetGeneratorsTools } from './content-creation-data/ai-game-asset-generators';
import { ai3dModelGeneratorsTools } from './content-creation-data/ai-3d-model-generators';
import { aiVoiceChangersTools } from './content-creation-data/ai-voice-changers';
import { aiContentRepurposingTools } from './content-creation-data/ai-content-repurposing';
import { aiIdeaGeneratorsTools } from './content-creation-data/ai-idea-generators';

export type ToolCategory = {
    title: string;
    icon: React.ReactNode;
    tools: Tool[];
};

export const contentCreationToolData: ToolCategory[] = [
    {
        title: "Text-to-Image Tools",
        icon: <ImageIcon className="w-5 h-5 text-primary"/>,
        tools: textToImageTools,
    },
    {
        title: "Image-to-Video Tools",
        icon: <Film className="w-5 h-5 text-primary"/>,
        tools: imageToVideoTools,
    },
    {
        title: "Text-to-Video Tools",
        icon: <Video className="w-5 h-5 text-primary"/>,
        tools: textToVideoTools,
    },
    {
        title: "Text-to-Voice Tools",
        icon: <Mic2 className="w-5 h-5 text-primary"/>,
        tools: textToVoiceTools,
    },
    {
        title: "Voice-to-Voice Tools",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: voiceToVoiceTools,
    },
    {
        title: "AI Music & Sound Effects",
        icon: <Music className="w-5 h-5 text-primary"/>,
        tools: aiMusicSoundEffectsTools,
    },
    {
        title: "Script Writing Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: scriptWritingTools,
    },
    {
        title: "Video Editing Tools",
        icon: <Scissors className="w-5 h-5 text-primary"/>,
        tools: videoEditingTools,
    },
    {
        title: "AI Avatar Generators",
        icon: <UserSquare className="w-5 h-5 text-primary"/>,
        tools: aiAvatarGeneratorsTools,
    },
    {
        title: "AI Presentation Makers",
        icon: <Presentation className="w-5 h-5 text-primary"/>,
        tools: aiPresentationMakersTools,
    },
    {
        title: "AI Podcasting Tools",
        icon: <Podcast className="w-5 h-5 text-primary"/>,
        tools: aiPodcastingTools,
    },
    {
        title: "AI Blog & Article Writers",
        icon: <Book className="w-5 h-5 text-primary"/>,
        tools: aiBlogArticleWritersTools,
    },
    {
        title: "AI Social Media Content",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: aiSocialMediaContentTools,
    },
    {
        title: "AI Ad Copy Generators",
        icon: <Mail className="w-5 h-5 text-primary"/>,
        tools: aiAdCopyGeneratorsTools,
    },
    {
        title: "AI Email Copywriters",
        icon: <Mail className="w-5 h-5 text-primary"/>,
        tools: aiEmailCopywritersTools,
    },
    {
        title: "AI Video Script Writers",
        icon: <Video className="w-5 h-5 text-primary"/>,
        tools: aiVideoScriptWritersTools,
    },
    {
        title: "AI Image Upscalers",
        icon: <Image className="w-5 h-5 text-primary"/>,
        tools: aiImageUpscalersTools,
    },
    {
        title: "AI Photo Retouching",
        icon: <Sparkles className="w-5 h-5 text-primary"/>,
        tools: aiPhotoRetouchingTools,
    },
    {
        title: "AI Meme Generators",
        icon: <PartyPopper className="w-5 h-5 text-primary"/>,
        tools: aiMemeGeneratorsTools,
    },
    {
        title: "AI Story Generators",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: aiStoryGeneratorsTools,
    },
    {
        title: "AI Content Summarizers",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: aiContentSummarizersTools,
    },
    {
        title: "AI Paraphrasing Tools",
        icon: <Repeat className="w-5 h-5 text-primary"/>,
        tools: aiParaphrasingTools,
    },
    {
        title: "AI Grammar & Style Checkers",
        icon: <Sparkles className="w-5 h-5 text-primary"/>,
        tools: aiGrammarStyleCheckersTools,
    },
    {
        title: "AI Translation for Content",
        icon: <Languages className="w-5 h-5 text-primary"/>,
        tools: aiTranslationForContentTools,
    },
    {
        title: "AI Character Generators",
        icon: <UserSquare className="w-5 h-5 text-primary"/>,
        tools: aiCharacterGeneratorsTools,
    },
    {
        title: "AI Game Asset Generators",
        icon: <Gamepad className="w-5 h-5 text-primary"/>,
        tools: aiGameAssetGeneratorsTools,
    },
    {
        title: "AI 3D Model Generators",
        icon: <Cuboid className="w-5 h-5 text-primary"/>,
        tools: ai3dModelGeneratorsTools,
    },
    {
        title: "AI Voice Changers",
        icon: <AudioLines className="w-5 h-5 text-primary"/>,
        tools: aiVoiceChangersTools,
    },
    {
        title: "AI Content Repurposing",
        icon: <Recycle className="w-5 h-5 text-primary"/>,
        tools: aiContentRepurposingTools,
    },
    {
        title: "AI Idea Generators",
        icon: <Lightbulb className="w-5 h-5 text-primary"/>,
        tools: aiIdeaGeneratorsTools,
    }
];
