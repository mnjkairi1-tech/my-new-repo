'use client';

import React from 'react';
import { 
    Scissors, Bot, Wand2, Clapperboard, Type, Mic, FileText, Music, Sparkles, Film,
    Upload, Palette, Aperture, Wind, Trash2, Maximize, FastForward, ListVideo, Languages,
    Video, MessageSquare, Speaker, GitBranch, ShoppingCart, Home, User, Settings, BarChart,
    Layers, UserCheck, Repeat, FileLock2, Code, Smile
} from 'lucide-react';
import type { Tool } from '@/lib/types';


export type ToolCategory = {
    title: string;
    icon: React.ReactNode;
    tools: Tool[];
};

export const videoEditingToolData: ToolCategory[] = [
    {
        title: "AI Video Editors",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Runway', description: 'AI Magic Tools for video makers.', url: 'https://runwayml.com/', image: 'https://picsum.photos/seed/runway-vedit/600/400', dataAiHint: 'ai magic tools', pricing: 'Freemium' },
            { name: 'Veed.io', description: 'Online video editor with AI features.', url: 'https://www.veed.io/', image: 'https://picsum.photos/seed/veed-vedit/600/400', dataAiHint: 'online editor', pricing: 'Freemium' },
            { name: 'Descript', description: 'Edit video by editing text.', url: 'https://www.descript.com/', image: 'https://picsum.photos/seed/descript-vedit/600/400', dataAiHint: 'text-based editing', pricing: 'Freemium' },
            { name: 'Opus Clip', description: 'Turn long videos into viral shorts.', url: 'https://www.opus.pro/', image: 'https://picsum.photos/seed/opusclip-vedit/600/400', dataAiHint: 'viral shorts', pricing: 'Freemium' },
            { name: 'Wisecut', description: 'AI-powered video editor that automatically removes pauses.', url: 'https://www.wisecut.video/', image: 'https://picsum.photos/seed/wisecut-vedit/600/400', dataAiHint: 'auto editor', pricing: 'Freemium' },
            { name: 'Gling', description: 'AI that cuts silences and bad takes for you.', url: 'https://gling.ai/', image: 'https://picsum.photos/seed/gling-vedit/600/400', dataAiHint: 'youtube editor', pricing: 'Freemium' },
            { name: 'Timebolt', description: 'Automatically cut silences in videos.', url: 'https://www.timebolt.io/', image: 'https://picsum.photos/seed/timebolt-vedit/600/400', dataAiHint: 'silence cutter', pricing: 'Paid' },
            { name: 'Kamua', description: 'Automated video editing for creators.', url: 'https://kamua.com/', image: 'https://picsum.photos/seed/kamua-vedit/600/400', dataAiHint: 'creator tool', pricing: 'Paid' },
            { name: 'Vizard', description: 'AI video editor for content creators.', url: 'https://vizard.ai/', image: 'https://picsum.photos/seed/vizard-vedit/600/400', dataAiHint: 'content creator', pricing: 'Paid' },
            { name: 'Filmora', description: 'Easy-to-use video editing software with AI tools.', url: 'https://filmora.wondershare.com/', image: 'https://picsum.photos/seed/filmora-vedit/600/400', dataAiHint: 'user friendly', pricing: 'Freemium' },
            { name: 'CapCut', description: 'Free all-in-one video editor for social media.', url: 'https://www.capcut.com/', image: 'https://picsum.photos/seed/capcut-vedit/600/400', dataAiHint: 'social video', pricing: 'Free' },
            { name: 'Adobe Premiere Pro', description: 'Professional video editing with AI Sensei features.', url: 'https://www.adobe.com/products/premiere.html', image: 'https://picsum.photos/seed/premiere-vedit/600/400', dataAiHint: 'pro editing', pricing: 'Paid' },
            { name: 'Final Cut Pro', description: 'Professional video editing for Apple devices with ML features.', url: 'https://www.apple.com/final-cut-pro/', image: 'https://picsum.photos/seed/finalcut-vedit/600/400', dataAiHint: 'apple editing', pricing: 'Paid' },
            { name: 'DaVinci Resolve', description: 'Editing, color, VFX, and audio post-production with AI tools.', url: 'https://www.blackmagicdesign.com/products/davinciresolve', image: 'https://picsum.photos/seed/davinci-vedit/600/400', dataAiHint: 'color grading', pricing: 'Freemium' },
            { name: 'LumaFusion', description: 'Professional mobile video editing with AI features.', url: 'https://luma-touch.com/lumafusion-for-ios/', image: 'https://picsum.photos/seed/lumafusion-vedit/600/400', dataAiHint: 'mobile editing', pricing: 'Paid' },
            { name: 'PowerDirector', description: 'AI-powered video editing for all skill levels.', url: 'https://www.cyberlink.com/products/powerdirector-video-editing-software/', image: 'https://picsum.photos/seed/powerdirector-vedit/600/400', dataAiHint: 'all levels', pricing: 'Freemium' },
            { name: 'Magisto', description: 'Smart video editor powered by A.I.', url: 'https://www.magisto.com/', image: 'https://picsum.photos/seed/magisto-vedit/600/400', dataAiHint: 'vimeo create', pricing: 'Freemium' },
            { name: 'Type Studio', description: 'Text-based video editor.', url: 'https://www.typestudio.co/', image: 'https://picsum.photos/seed/typestudio-vedit/600/400', dataAiHint: 'video transcript', pricing: 'Freemium' },
        ]
    },
    {
        title: "Text-to-Video Generators",
        icon: <Type className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Pika', description: 'AI video generator for creative ideas.', url: 'https://pika.art/', image: 'https://picsum.photos/seed/pika-t2v/600/400', dataAiHint: 'creative video', pricing: 'Freemium' },
            { name: 'InVideo AI', description: 'Generate publish-ready videos from text prompts.', url: 'https://invideo.io/ai', image: 'https://picsum.photos/seed/invideo-t2v/600/400', dataAiHint: 'video automation', pricing: 'Freemium' },
            { name: 'Sora by OpenAI', description: 'AI model that can create realistic and imaginative scenes.', url: 'https://openai.com/sora', image: 'https://picsum.photos/seed/sora-t2v/600/400', dataAiHint: 'realistic scenes', pricing: 'Paid' },
            { name: 'Runway Gen-2', description: 'Generate video from text, images, or video clips.', url: 'https://runwayml.com/', image: 'https://picsum.photos/seed/runway-t2v/600/400', dataAiHint: 'ai video', pricing: 'Freemium' },
            { name: 'Synthesia', description: 'Create AI videos with AI avatars and voiceovers.', url: 'https://www.synthesia.io/', image: 'https://picsum.photos/seed/synthesia-t2v/600/400', dataAiHint: 'ai avatar', pricing: 'Paid' },
            { name: 'Luma Dream Machine', description: 'Create high-quality, realistic videos from text.', url: 'https://lumalabs.ai/dream-machine', image: 'https://picsum.photos/seed/luma-dream/600/400', dataAiHint: 'realistic video', pricing: 'Freemium' },
            { name: 'HeyGen AI', description: 'AI video generator with talking avatars.', url: 'https://www.heygen.com/', image: 'https://picsum.photos/seed/heygen-t2v/600/400', dataAiHint: 'talking avatar', pricing: 'Freemium' },
            { name: 'Pictory', description: 'Create videos from scripts or articles.', url: 'https://pictory.ai/', image: 'https://picsum.photos/seed/pictory-t2v/600/400', dataAiHint: 'article to video', pricing: 'Paid' },
            { name: 'Lumen5', description: 'Transform blog posts into videos.', url: 'https://lumen5.com/', image: 'https://picsum.photos/seed/lumen5-t2v/600/400', dataAiHint: 'blog to video', pricing: 'Freemium' },
            { name: 'Fliki', description: 'Turn text into videos with AI voices.', url: 'https://fliki.ai/', image: 'https://picsum.photos/seed/fliki-t2v/600/400', dataAiHint: 'ai voice video', pricing: 'Freemium' },
            { name: 'Deepbrain AI', description: 'Create realistic AI avatar videos.', url: 'https://www.deepbrain.io/', image: 'https://picsum.photos/seed/deepbrain-t2v/600/400', dataAiHint: 'hyperrealistic', pricing: 'Paid' },
            { name: 'Kaiber', description: 'Transform your ideas into visual stories.', url: 'https://www.kaiber.ai/', image: 'https://picsum.photos/seed/kaiber-t2v/600/400', dataAiHint: 'visual stories', pricing: 'Freemium' },
            { name: 'Veed.io Text-to-Video', description: 'Online video editor with text-to-video features.', url: 'https://www.veed.io/tools/text-to-video-converter', image: 'https://picsum.photos/seed/veedio-t2v/600/400', dataAiHint: 'video converter', pricing: 'Freemium' },
            { name: 'Designs.ai Videomaker', description: 'Create videos instantly from text.', url: 'https://designs.ai/videomaker', image: 'https://picsum.photos/seed/designsai-t2v/600/400', dataAiHint: 'instant video', pricing: 'Freemium' },
            { name: 'Hour One', description: 'Turn text into presenter-led videos.', url: 'https://hourone.ai/', image: 'https://picsum.photos/seed/hourone-t2v/600/400', dataAiHint: 'presenter video', pricing: 'Paid' },
            { name: 'Colossyan Creator', description: 'Create videos with AI actors.', url: 'https://www.colossyan.com/', image: 'https://picsum.photos/seed/colossyan-t2v/600/400', dataAiHint: 'ai actors', pricing: 'Paid' },
            { name: 'Elai.io', description: 'Generate videos from text with a digital presenter.', url: 'https://elai.io/', image: 'https://picsum.photos/seed/elai-t2v/600/400', dataAiHint: 'digital presenter', pricing: 'Paid' },
            { name: 'Steve.AI', description: 'AI video maker for social media.', url: 'https://www.steve.ai/', image: 'https://picsum.photos/seed/steveai-t2v/600/400', dataAiHint: 'social media', pricing: 'Freemium' },
            { name: 'Genmo', description: 'The creative copilot for video.', url: 'https://www.genmo.ai/', image: 'https://picsum.photos/seed/genmo-t2v/600/400', dataAiHint: 'video copilot', pricing: 'Freemium' },
            { name: 'Moonvalley', description: 'AI model for generating videos from text.', url: 'https://moonvalley.ai/', image: 'https://picsum.photos/seed/moonvalley-t2v/600/400', dataAiHint: 'cinematic video', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Voice & Audio Tools",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ElevenLabs', description: 'Realistic text-to-speech and voice cloning.', url: 'https://elevenlabs.io/', image: 'https://picsum.photos/seed/elevenlabs-audio/600/400', dataAiHint: 'ai voice', pricing: 'Freemium' },
            { name: 'Adobe Podcast Enhance', description: 'Remove noise and echo from voice recordings.', url: 'https://podcast.adobe.com/enhance', image: 'https://picsum.photos/seed/adobe-podcast/600/400', dataAiHint: 'audio enhance', pricing: 'Free' },
            { name: 'Murf AI', description: 'Go from text to speech with a versatile AI voice generator.', url: 'https://murf.ai/', image: 'https://picsum.photos/seed/murfai-audio/600/400', dataAiHint: 'ai voiceover', pricing: 'Freemium' },
            { name: 'Play.ht', description: 'AI-powered text to voice generator.', url: 'https://play.ht/', image: 'https://picsum.photos/seed/playht-audio/600/400', dataAiHint: 'voice generator', pricing: 'Freemium' },
            { name: 'Lovo.ai', description: 'AI voice generator and text-to-speech platform.', url: 'https://lovo.ai/', image: 'https://picsum.photos/seed/lovo-audio/600/400', dataAiHint: 'realistic voices', pricing: 'Freemium' },
            { name: 'Audo Studio', description: 'One-click audio cleaning and enhancement.', url: 'https://audo.ai/', image: 'https://picsum.photos/seed/audo-audio/600/400', dataAiHint: 'noise removal', pricing: 'Freemium' },
            { name: 'Lalal.ai', description: 'Stem splitter and voice cleaner.', url: 'https://www.lalal.ai/', image: 'https://picsum.photos/seed/lalalai-audio/600/400', dataAiHint: 'vocal remover', pricing: 'Freemium' },
            { name: 'Voicemod', description: 'Real-time AI voice changer and soundboard.', url: 'https://www.voicemod.net/', image: 'https://picsum.photos/seed/voicemod-audio/600/400', dataAiHint: 'voice changer', pricing: 'Freemium' },
            { name: 'Resemble.ai', description: 'AI voice generator for real-time voice cloning.', url: 'https://www.resemble.ai/', image: 'https://picsum.photos/seed/resemble-audio/600/400', dataAiHint: 'voice cloning', pricing: 'Paid' },
            { name: 'Descript Overdub', description: 'Create a text-to-speech model of your voice.', url: 'https://www.descript.com/overdub', image: 'https://picsum.photos/seed/descript-audio/600/400', dataAiHint: 'ai voice model', pricing: 'Freemium' },
            { name: 'Altered Studio', description: 'Professional AI voice performance editor.', url: 'https://www.altered.ai/', image: 'https://picsum.photos/seed/altered-audio/600/400', dataAiHint: 'voice performance', pricing: 'Paid' },
            { name: 'Cleanvoice AI', description: 'Automatically edit your podcast episodes.', url: 'https://cleanvoice.ai/', image: 'https://picsum.photos/seed/cleanvoice-audio/600/400', dataAiHint: 'podcast editing', pricing: 'Paid' },
            { name: 'Auphonic', description: 'Automatic audio post production web service.', url: 'https://auphonic.com/', image: 'https://picsum.photos/seed/auphonic-audio/600/400', dataAiHint: 'audio post production', pricing: 'Freemium' },
            { name: 'Krisp', description: 'AI-powered noise cancelling app.', url: 'https://krisp.ai/', image: 'https://picsum.photos/seed/krisp-audio/600/400', dataAiHint: 'noise cancelling', pricing: 'Freemium' },
            { name: 'Voice.ai', description: 'Real-time voice changer for PC.', url: 'https://voice.ai/', image: 'https://picsum.photos/seed/voiceai-audio/600/400', dataAiHint: 'pc voice changer', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Scripting & Storyboarding",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Jasper', description: 'AI content platform to help write video scripts.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-script-vedit/600/400', dataAiHint: 'video scripts', pricing: 'Paid' },
            { name: 'Boords', description: 'The modern storyboarding & animatic tool.', url: 'https://boords.com/', image: 'https://picsum.photos/seed/boords-vedit/600/400', dataAiHint: 'storyboard software', pricing: 'Paid' },
            { name: 'Copy.ai', description: 'Generate high-quality marketing and script copy.', url: 'https://www.copy.ai/', image: 'https://picsum.photos/seed/copyai-script-vedit/600/400', dataAiHint: 'marketing copy', pricing: 'Freemium' },
            { name: 'Writesonic', description: 'AI writer for creating SEO-friendly content.', url: 'https://writesonic.com/', image: 'https://picsum.photos/seed/writesonic-script/600/400', dataAiHint: 'seo script', pricing: 'Freemium' },
            { name: 'Rytr', description: 'An AI writing assistant for fast, affordable content.', url: 'https://rytr.me/', image: 'https://picsum.photos/seed/rytr-script-vedit/600/400', dataAiHint: 'writing assistant', pricing: 'Freemium' },
            { name: 'Final Draft', description: 'The industry-standard screenwriting software.', url: 'https://www.finaldraft.com/', image: 'https://picsum.photos/seed/finaldraft-script/600/400', dataAiHint: 'screenwriting', pricing: 'Paid' },
            { name: 'Celtx', description: 'All-in-one studio for writing, planning, and shooting.', url: 'https://www.celtx.com/', image: 'https://picsum.photos/seed/celtx-script/600/400', dataAiHint: 'pre-production', pricing: 'Freemium' },
            { name: 'Scrivener', description: 'A powerful content-generation tool for writers.', url: 'https://www.literatureandlatte.com/scrivener/overview', image: 'https://picsum.photos/seed/scrivener-script/600/400', dataAiHint: 'novel writing', pricing: 'Paid' },
            { name: 'StudioBinder', description: 'Production management software with scriptwriting features.', url: 'https://www.studiobinder.com/', image: 'https://picsum.photos/seed/studiobinder-script/600/400', dataAiHint: 'call sheets', pricing: 'Freemium' },
            { name: 'WriterDuet', description: 'Real-time collaborative screenwriting software.', url: 'https://writerduet.com/', image: 'https://picsum.photos/seed/writerduet-script/600/400', dataAiHint: 'collaboration', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Special Effects (VFX)",
        icon: <Sparkles className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Runway', description: 'Suite of AI magic tools including green screen, inpainting, etc.', url: 'https://runwayml.com/', image: 'https://picsum.photos/seed/runway-vfx/600/400', dataAiHint: 'vfx tools', pricing: 'Freemium' },
            { name: 'ActionVFX', description: 'High-quality stock footage for VFX.', url: 'https://www.actionvfx.com/', image: 'https://picsum.photos/seed/actionvfx-vedit/600/400', dataAiHint: 'vfx stock footage', pricing: 'Paid' },
            { name: 'Blender', description: 'Free and open source 3D creation suite with VFX capabilities.', url: 'https://www.blender.org/', image: 'https://picsum.photos/seed/blender-vfx/600/400', dataAiHint: '3d vfx', pricing: 'Free' },
            { name: 'Houdini', description: '3D procedural software for VFX artists.', url: 'https://www.sidefx.com/', image: 'https://picsum.photos/seed/houdini-vfx/600/400', dataAiHint: 'procedural vfx', pricing: 'Paid' },
            { name: 'Adobe After Effects', description: 'Visual effects and motion graphics software.', url: 'https://www.adobe.com/products/aftereffects.html', image: 'https://picsum.photos/seed/aftereffects-vfx/600/400', dataAiHint: 'motion graphics', pricing: 'Paid' },
            { name: 'Nuke', description: 'Node-based digital compositing and visual effects.', url: 'https://www.foundry.com/products/nuke', image: 'https://picsum.photos/seed/nuke-vfx/600/400', dataAiHint: 'compositing', pricing: 'Paid' },
            { name: 'Fusion', description: 'Part of DaVinci Resolve for advanced visual effects.', url: 'https://www.blackmagicdesign.com/products/davinciresolve/fusion', image: 'https://picsum.photos/seed/fusion-vfx/600/400', dataAiHint: 'node-based vfx', pricing: 'Freemium' },
            { name: 'HitFilm', description: 'The all-in-one video editor & VFX software.', url: 'https://fxhome.com/hitfilm', image: 'https://picsum.photos/seed/hitfilm-vfx/600/400', dataAiHint: 'vfx editor', pricing: 'Freemium' },
            { name: 'Ebsynth', description: 'Bring paintings to life with video synthesis.', url: 'https://ebsynth.com/', image: 'https://picsum.photos/seed/ebsynth-vfx/600/400', dataAiHint: 'video synthesis', pricing: 'Free' },
            { name: 'ZBrush', description: 'Digital sculpting tool for detailed models used in VFX.', url: 'https://www.maxon.net/en/zbrush', image: 'https://picsum.photos/seed/zbrush-vfx/600/400', dataAiHint: 'digital sculpting', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Video Enhancement & Upscaling",
        icon: <Upload className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Topaz Video AI', description: 'AI-powered video enhancement and upscaling.', url: 'https://www.topazlabs.com/topaz-video-ai', image: 'https://picsum.photos/seed/topaz-video/600/400', dataAiHint: 'video upscaling', pricing: 'Paid' },
            { name: 'DVDFab Video Enhancer AI', description: 'AI-powered video enhancement software.', url: 'https://www.dvdfab.cn/video-enhancer-ai.htm', image: 'https://picsum.photos/seed/dvdfab-video/600/400', dataAiHint: 'video enhancer', pricing: 'Paid' },
            { name: 'AVCLabs Video Enhancer AI', description: 'Upscale video from SD to HD, HD to 4K.', url: 'https://www.avclabs.com/video-enhancer-ai.html', image: 'https://picsum.photos/seed/avclabs-video/600/400', dataAiHint: '4k upscaling', pricing: 'Paid' },
            { name: 'HitPaw Video Enhancer', description: 'AI upscaling for videos.', url: 'https://www.hitpaw.com/video-enhancer.html', image: 'https://picsum.photos/seed/hitpaw-video/600/400', dataAiHint: 'video quality', pricing: 'Paid' },
            { name: 'VideoProc Converter AI', description: 'Upscale, stabilize, and convert videos with AI.', url: 'https://www.videoproc.com/video-converter/', image: 'https://picsum.photos/seed/videoproc-ai/600/400', dataAiHint: 'ai converter', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Color Correction & Grading",
        icon: <Palette className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Colourlab.ai', description: 'AI-powered color grading.', url: 'https://colourlab.ai/', image: 'https://picsum.photos/seed/colourlab-vedit/600/400', dataAiHint: 'color grading', pricing: 'Paid' },
            { name: 'DaVinci Resolve', description: 'Industry standard for color correction with AI features.', url: 'https://www.blackmagicdesign.com/products/davinciresolve', image: 'https://picsum.photos/seed/davinci-color/600/400', dataAiHint: 'pro color grading', pricing: 'Freemium' },
            { name: 'Adobe Premiere Pro Lumetri Color', description: 'AI-assisted color tools within Premiere Pro.', url: 'https://www.adobe.com/products/premiere.html', image: 'https://picsum.photos/seed/premiere-color/600/400', dataAiHint: 'lumetri color', pricing: 'Paid' },
            { name: 'Final Cut Pro Color Grading', description: 'Advanced color grading tools with ML enhancements.', url: 'https://www.apple.com/final-cut-pro/', image: 'https://picsum.photos/seed/finalcut-color/600/400', dataAiHint: 'video color', pricing: 'Paid' },
            { name: 'Color.io', description: 'Online photo & video color grading.', url: 'https://color.io/', image: 'https://picsum.photos/seed/colorio-video/600/400', dataAiHint: '3d luts', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Video Stabilization",
        icon: <Aperture className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Emulsify', description: 'AI-powered video stabilization.', url: 'https://emulsify.info/', image: 'https://picsum.photos/seed/emulsify-vedit/600/400', dataAiHint: 'stabilize video', pricing: 'Paid' },
            { name: 'Adobe Premiere Pro Warp Stabilizer', description: 'Stabilize shaky footage within Premiere Pro.', url: 'https://www.adobe.com/products/premiere.html', image: 'https://picsum.photos/seed/premiere-warp/600/400', dataAiHint: 'warp stabilizer', pricing: 'Paid' },
            { name: 'Final Cut Pro Stabilization', description: 'Built-in stabilization for shaky clips.', url: 'https://www.apple.com/final-cut-pro/', image: 'https://picsum.photos/seed/finalcut-stabilize/600/400', dataAiHint: 'video stabilization', pricing: 'Paid' },
            { name: 'DaVinci Resolve Stabilization', description: 'Advanced stabilization tools in the edit and color pages.', url: 'https://www.blackmagicdesign.com/products/davinciresolve', image: 'https://picsum.photos/seed/davinci-stabilize/600/400', dataAiHint: 'resolve stabilize', pricing: 'Freemium' },
            { name: 'VideoProc Converter AI', description: 'AI-powered video stabilization.', url: 'https://www.videoproc.com/video-converter/', image: 'https://picsum.photos/seed/videoproc-stabilize/600/400', dataAiHint: 'ai stabilize', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Background Removal for Video",
        icon: <Wind className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Unscreen', description: 'Remove video backgrounds 100% automatically.', url: 'https://www.unscreen.com/', image: 'https://picsum.photos/seed/unscreen-vedit/600/400', dataAiHint: 'video background', pricing: 'Freemium' },
            { name: 'Runway Green Screen', description: 'AI-powered rotoscoping and background removal.', url: 'https://runwayml.com/', image: 'https://picsum.photos/seed/runway-green/600/400', dataAiHint: 'rotoscoping', pricing: 'Freemium' },
            { name: 'Kapwing', description: 'Online video editor with background removal.', url: 'https://www.kapwing.com/tools/remove-background-from-video', image: 'https://picsum.photos/seed/kapwing-bg/600/400', dataAiHint: 'video bg remover', pricing: 'Freemium' },
            { name: 'CapCut', description: 'Mobile video editor with auto cutout features.', url: 'https://www.capcut.com/', image: 'https://picsum.photos/seed/capcut-bg/600/400', dataAiHint: 'auto cutout', pricing: 'Free' },
            { name: 'Veed.io Video Background Remover', description: 'One-click background removal for video.', url: 'https://www.veed.io/tools/video-background-remover', image: 'https://picsum.photos/seed/veed-bg/600/400', dataAiHint: 'one click bg', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Object Removal in Video",
        icon: <Trash2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Runway Inpainting', description: 'Remove any object from any video.', url: 'https://runwayml.com/', image: 'https://picsum.photos/seed/runway-inpaint-vedit/600/400', dataAiHint: 'video object removal', pricing: 'Freemium' },
            { name: 'Adobe After Effects Content-Aware Fill', description: 'Remove unwanted objects from video.', url: 'https://www.adobe.com/products/aftereffects.html', image: 'https://picsum.photos/seed/ae-caf/600/400', dataAiHint: 'content-aware video', pricing: 'Paid' },
            { name: 'DaVinci Resolve Object Removal', description: 'Object removal tool in the color page.', url: 'https://www.blackmagicdesign.com/products/davinciresolve', image: 'https://picsum.photos/seed/davinci-object/600/400', dataAiHint: 'resolve object', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Auto Re-framing & Resizing",
        icon: <Maximize className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Adobe Premiere Pro Auto Reframe', description: 'Automatically reframe video for different aspect ratios.', url: 'https://www.adobe.com/products/premiere.html', image: 'https://picsum.photos/seed/premiere-reframe/600/400', dataAiHint: 'auto reframe', pricing: 'Paid' },
            { name: 'Kamua', description: 'Automated reframing for social media.', url: 'https://kamua.com/', image: 'https://picsum.photos/seed/kamua-reframe/600/400', dataAiHint: 'social media video', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Slow Motion & Speed Ramping",
        icon: <FastForward className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Runway Motion Brush', description: 'Control motion and speed in your videos.', url: 'https://runwayml.com/motion-brush/', image: 'https://picsum.photos/seed/runway-motion-vedit/600/400', dataAiHint: 'motion brush', pricing: 'Freemium' },
            { name: 'Topaz Video AI', description: 'Create smooth slow motion with AI frame interpolation.', url: 'https://www.topazlabs.com/topaz-video-ai', image: 'https://picsum.photos/seed/topaz-slomo/600/400', dataAiHint: 'frame interpolation', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Video Summarization & Highlights",
        icon: <ListVideo className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Vidyo.ai', description: 'Make short videos from long ones instantly.', url: 'https://vidyo.ai/', image: 'https://picsum.photos/seed/vidyo-ai-vedit/600/400', dataAiHint: 'video clips', pricing: 'Freemium' },
            { name: 'Opus Clip', description: 'Turn long videos into viral shorts with AI.', url: 'https://www.opus.pro/', image: 'https://picsum.photos/seed/opusclip-sum/600/400', dataAiHint: 'viral shorts', pricing: 'Freemium' },
            { name: 'Gling', description: 'AI that finds the highlights in your videos.', url: 'https://gling.ai/', image: 'https://picsum.photos/seed/gling-sum/600/400', dataAiHint: 'video highlights', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Automated Video Dubbing",
        icon: <Languages className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Dubverse', description: 'AI-powered video dubbing.', url: 'https://dubverse.ai/', image: 'https://picsum.photos/seed/dubverse-vedit/600/400', dataAiHint: 'video dubbing', pricing: 'Freemium' },
            { name: 'Papercup', description: 'AI dubbing and video translation.', url: 'https://www.papercup.com/', image: 'https://picsum.photos/seed/papercup-vedit/600/400', dataAiHint: 'ai dubbing', pricing: 'Paid' },
            { name: 'HeyGen Video Translate', description: 'Translate your videos with AI.', url: 'https://www.heygen.com/', image: 'https://picsum.photos/seed/heygen-dub/600/400', dataAiHint: 'video translate', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Subtitle & Caption Generation",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Veed.io Subtitles', description: 'Automatically generate subtitles for your videos.', url: 'https://www.veed.io/tools/auto-subtitle-generator-sdi', image: 'https://picsum.photos/seed/veed-subs/600/400', dataAiHint: 'auto subtitles', pricing: 'Freemium' },
            { name: 'Descript', description: 'Automatic and human-powered transcription and subtitling.', url: 'https://www.descript.com/', image: 'https://picsum.photos/seed/descript-subs/600/400', dataAiHint: 'transcription service', pricing: 'Freemium' },
            { name: 'Happy Scribe', description: 'Transcription & Subtitles Services.', url: 'https://www.happyscribe.com/', image: 'https://picsum.photos/seed/happyscribe-subs/600/400', dataAiHint: 'subtitle service', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Video-to-Text (Transcription)",
        icon: <Speaker className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Happy Scribe', description: 'Transcription & Subtitles Services.', url: 'https://www.happyscribe.com/', image: 'https://picsum.photos/seed/happyscribe-vedit/600/400', dataAiHint: 'video transcription', pricing: 'Paid' },
            { name: 'Otter.ai', description: 'Transcribe meetings and conversations.', url: 'https://otter.ai/', image: 'https://picsum.photos/seed/otter-v2t/600/400', dataAiHint: 'audio transcription', pricing: 'Freemium' },
            { name: 'Trint', description: 'AI audio transcription that makes any audio and video searchable.', url: 'https://trint.com/', image: 'https://picsum.photos/seed/trint-v2t/600/400', dataAiHint: 'searchable audio', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Text-to-Music/Sound Effects",
        icon: <Music className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Soundraw', description: 'AI music generator for your videos.', url: 'https://soundraw.io/', image: 'https://picsum.photos/seed/soundraw-vedit/600/400', dataAiHint: 'ai music', pricing: 'Freemium' },
            { name: 'Boomy', description: 'Make instant music with artificial intelligence.', url: 'https://boomy.com/', image: 'https://picsum.photos/seed/boomy-vedit/600/400', dataAiHint: 'instant music', pricing: 'Freemium' },
            { name: 'AIVA', description: 'The AI composing emotional soundtrack music.', url: 'https://www.aiva.ai/', image: 'https://picsum.photos/seed/aiva-vedit/600/400', dataAiHint: 'soundtrack music', pricing: 'Freemium' },
            { name: 'Ecrett Music', description: 'AI music composer for creators.', url: 'https://ecrettmusic.com/', image: 'https://picsum.photos/seed/ecrett-vedit/600/400', dataAiHint: 'creator music', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Stock Footage & B-Roll Generation",
        icon: <GitBranch className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Artgrid', description: 'Unlimited stock footage for filmmakers.', url: 'https://artgrid.io/', image: 'https://picsum.photos/seed/artgrid-stock/600/400', dataAiHint: 'stock footage', pricing: 'Paid' },
            { name: 'Storyblocks', description: 'Royalty-free video, audio, and images.', url: 'https://www.storyblocks.com/', image: 'https://picsum.photos/seed/storyblocks-stock/600/400', dataAiHint: 'royalty-free', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Video for Social Media",
        icon: <ShoppingCart className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Lumen5', description: 'Transform blog posts into videos.', url: 'https://lumen5.com/', image: 'https://picsum.photos/seed/lumen5-vedit/600/400', dataAiHint: 'social video', pricing: 'Freemium' },
             { name: 'InVideo', description: 'Online video editor for social media.', url: 'https://invideo.io/', image: 'https://picsum.photos/seed/invideo-social/600/400', dataAiHint: 'video ad maker', pricing: 'Freemium' },
             { name: 'Wave.video', description: 'Create social media videos.', url: 'https://wave.video/', image: 'https://picsum.photos/seed/wave-social/600/400', dataAiHint: 'social media video', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Video for E-commerce",
        icon: <Home className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Vidy...', description: 'AI tool for creating product videos.', url: 'https://www.vidy.com/', image: 'https://picsum.photos/seed/vidy-ecom/600/400', dataAiHint: 'product video', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Video for Real Estate",
        icon: <User className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Personalized Video Creation",
        icon: <UserCheck className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Tavus', description: 'AI-powered personalized video generation.', url: 'https://www.tavus.io/', image: 'https://picsum.photos/seed/tavus-vedit/600/400', dataAiHint: 'personalized video', pricing: 'Paid' },
            { name: 'Yepic AI', description: 'Video translation and creation platform.', url: 'https://www.yepic.ai/', image: 'https://picsum.photos/seed/yepic-vedit/600/400', dataAiHint: 'video translation', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Interactive Video Tools",
        icon: <Layers className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Eko', description: 'Create interactive videos.', url: 'https://www.helloeko.com/', image: 'https://picsum.photos/seed/eko-interactive/600/400', dataAiHint: 'interactive video', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Video API & SDKs",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Cloudinary', description: 'Image and video API for developers.', url: 'https://cloudinary.com/', image: 'https://picsum.photos/seed/cloudinary-api/600/400', dataAiHint: 'video api', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Video Analytics",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [],
    },
    {
        title: "AI Video Content Repurposing",
        icon: <Repeat className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Vidyo.ai', description: 'Make short videos from long ones instantly.', url: 'https://vidyo.ai/', image: 'https://picsum.photos/seed/vidyo-repurpose/600/400', dataAiHint: 'repurpose video', pricing: 'Freemium' },
             { name: 'Opus Clip', description: 'Turn long videos into viral shorts with AI.', url: 'https://www.opus.pro/', image: 'https://picsum.photos/seed/opus-repurpose/600/400', dataAiHint: 'viral shorts', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Animation Tools",
        icon: <Film className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Vyond', description: 'Professional animated video software.', url: 'https://www.vyond.com/', image: 'https://picsum.photos/seed/vyond-vedit/600/400', dataAiHint: 'animation software', pricing: 'Paid' },
            { name: 'Animaker', description: 'Animated video maker with text-to-speech.', url: 'https://www.animaker.com/', image: 'https://picsum.photos/seed/animaker-anim/600/400', dataAiHint: 'animation maker', pricing: 'Freemium' },
            { name: 'Powtoon', description: 'Create animated videos and presentations.', url: 'https://www.powtoon.com/', image: 'https://picsum.photos/seed/powtoon-anim/600/400', dataAiHint: 'animated presentation', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Lip-Sync & Dubbing",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'HeyGen Lip Sync', description: 'AI video generator with talking avatars.', url: 'https://www.heygen.com/', image: 'https://picsum.photos/seed/heygen-lip-vedit/600/400', dataAiHint: 'lip sync', pricing: 'Freemium' },
            { name: 'Wombo', description: 'Make your selfies sing.', url: 'https://www.wombo.ai/', image: 'https://picsum.photos/seed/wombo-lip/600/400', dataAiHint: 'lip sync app', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Video Face Swap",
        icon: <Smile className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Reface', description: 'Face swap videos and GIFs.', url: 'https://reface.ai/', image: 'https://picsum.photos/seed/reface-vedit/600/400', dataAiHint: 'face swap', pricing: 'Freemium' },
            { name: 'Avatarify', description: 'Animate a photo of a person to become a puppet.', url: 'https://github.com/alievk/avatarify-python', image: 'https://picsum.photos/seed/avatarify-swap/600/400', dataAiHint: 'photo puppet', pricing: 'Free' },
        ]
    },
    {
        title: "AI Video Asset Management",
        icon: <FileLock2 className="w-5 h-5 text-primary"/>,
        tools: []
    }
]
