
'use client';

import React from 'react';
import { 
    FileText, Mic2, Voicemail, Bot, Wind, UserCheck, Users, Sparkles, Podcast, Music, Shuffle, Languages, Clock, Globe, Phone, BookOpen, Smile, Fingerprint, BookCopy, AudioLines, Route, Radio, Search, Shield, Wand2, MessageSquare
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

export const voiceAudioAiToolData: ToolCategory[] = [
    {
        title: "Speech-to-Text",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Otter.ai', description: 'AI meeting assistant that records audio and writes notes.', url: 'https://otter.ai/', image: 'https://picsum.photos/seed/otter-stt/600/400', dataAiHint: 'meeting notes', pricing: 'Freemium' },
            { name: 'Happy Scribe', description: 'Transcription & Subtitles Services.', url: 'https://www.happyscribe.com/', image: 'https://picsum.photos/seed/happyscribe-stt/600/400', dataAiHint: 'audio transcription', pricing: 'Paid' },
            { name: 'Descript', description: 'All-in-one audio & video editor with transcription.', url: 'https://www.descript.com/', image: 'https://picsum.photos/seed/descript-stt/600/400', dataAiHint: 'podcast editor', pricing: 'Freemium' },
        ]
    },
    {
        title: "Text-to-Speech",
        icon: <Mic2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ElevenLabs', description: 'AI Speech Synthesis.', url: 'https://elevenlabs.io/', image: 'https://picsum.photos/seed/elevenlabs-tts/600/400', dataAiHint: 'ai voice', pricing: 'Freemium' },
            { name: 'Murf.ai', description: 'Go from text to speech with a versatile AI voice generator.', url: 'https://murf.ai/', image: 'https://picsum.photos/seed/murf-tts/600/400', dataAiHint: 'voice generator', pricing: 'Freemium' },
            { name: 'Play.ht', description: 'AI-powered text to voice generator.', url: 'https://play.ht/', image: 'https://picsum.photos/seed/playht-audio/600/400', dataAiHint: 'voice generator', pricing: 'Freemium' },
            { name: 'Lovo.ai', description: 'AI voice generator and text-to-speech platform.', url: 'https://lovo.ai/', image: 'https://picsum.photos/seed/lovo-audio/600/400', dataAiHint: 'realistic voices', pricing: 'Freemium' },
        ]
    },
    {
        title: "Voice Cloning",
        icon: <Voicemail className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Resemble.ai', description: 'AI voice generator for real-time voice cloning.', url: 'https://www.resemble.ai/', image: 'https://picsum.photos/seed/resemble-clone/600/400', dataAiHint: 'voice cloning', pricing: 'Paid' },
            { name: 'ElevenLabs', description: 'Create entirely new synthetic voices from scratch.', url: 'https://elevenlabs.io/', image: 'https://picsum.photos/seed/elevenlabs-clone/600/400', dataAiHint: 'synthetic voice', pricing: 'Freemium' },
            { name: 'Voicemod', description: 'Real-time AI voice changer and soundboard.', url: 'https://www.voicemod.net/', image: 'https://picsum.photos/seed/voicemod-clone/600/400', dataAiHint: 'voice changer', pricing: 'Freemium' },
        ]
    },
    { 
        title: "AI Voice Assistants", 
        icon: <Bot className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Google Assistant', description: 'Your personal Google, always ready to help.', url: 'https://assistant.google.com/', image: 'https://picsum.photos/seed/google-assistant-voice/600/400', dataAiHint: 'voice assistant', pricing: 'Free' },
            { name: 'Amazon Alexa', description: 'The voice service that powers Echo devices.', url: 'https://www.amazon.com/alexa', image: 'https://picsum.photos/seed/alexa-voice/600/400', dataAiHint: 'smart speaker', pricing: 'Free' },
            { name: 'Siri', description: 'Apple\'s intelligent assistant built into its devices.', url: 'https://www.apple.com/siri/', image: 'https://picsum.photos/seed/siri-voice/600/400', dataAiHint: 'apple assistant', pricing: 'Free' },
        ] 
    },
    { 
        title: "Audio Noise Removal", 
        icon: <Wind className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Adobe Podcast Enhance', description: 'Remove noise and echo from voice recordings.', url: 'https://podcast.adobe.com/enhance', image: 'https://picsum.photos/seed/adobe-podcast/600/400', dataAiHint: 'audio enhance', pricing: 'Free' },
            { name: 'Krisp', description: 'AI-powered noise cancelling app.', url: 'https://krisp.ai/', image: 'https://picsum.photos/seed/krisp-audio/600/400', dataAiHint: 'noise cancelling', pricing: 'Freemium' },
            { name: 'Audo Studio', description: 'One-click audio cleaning and enhancement.', url: 'https://audo.ai/', image: 'https://picsum.photos/seed/audo-audio/600/400', dataAiHint: 'noise removal', pricing: 'Freemium' },
        ] 
    },
    { title: "Voice Recognition", icon: <UserCheck className="w-5 h-5 text-primary"/>, tools: [] },
    { 
        title: "Speaker Identification", 
        icon: <Users className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Otter.ai', description: 'Identifies different speakers in a conversation.', url: 'https://otter.ai/', image: 'https://picsum.photos/seed/otter-speaker/600/400', dataAiHint: 'speaker id', pricing: 'Freemium' },
            { name: 'Descript', description: 'Speaker detection for multi-speaker transcription.', url: 'https://www.descript.com/', image: 'https://picsum.photos/seed/descript-speaker/600/400', dataAiHint: 'speaker detection', pricing: 'Freemium' },
        ] 
    },
    { 
        title: "Audio Enhancement", 
        icon: <Sparkles className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Adobe Podcast Enhance', description: 'AI-powered audio cleaning.', url: 'https://podcast.adobe.com/enhance', image: 'https://picsum.photos/seed/adobe-podcast/600/400', dataAiHint: 'audio cleaning', pricing: 'Free' },
            { name: 'Audo Studio', description: 'One-click audio cleaning and enhancement.', url: 'https://audo.ai/', image: 'https://picsum.photos/seed/audo-audio/600/400', dataAiHint: 'noise removal', pricing: 'Freemium' },
        ] 
    },
    { 
        title: "Podcast AI Tools", 
        icon: <Podcast className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Descript', description: 'All-in-one audio & video editor for podcasters.', url: 'https://www.descript.com/', image: 'https://picsum.photos/seed/descript-podcast/600/400', dataAiHint: 'podcast editing', pricing: 'Freemium' },
            { name: 'Podcastle', description: 'AI-powered podcasting platform.', url: 'https://podcastle.ai/', image: 'https://picsum.photos/seed/podcastle/600/400', dataAiHint: 'audio creation', pricing: 'Freemium' },
            { name: 'Riverside.fm', description: 'Studio quality recording, anywhere.', url: 'https://riverside.fm/', image: 'https://picsum.photos/seed/riversidefm/600/400', dataAiHint: 'remote podcast', pricing: 'Freemium' },
        ] 
    },
    { 
        title: "AI Music Generation", 
        icon: <Music className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Soundraw', description: 'AI music generator.', url: 'https://soundraw.io/', image: 'https://picsum.photos/seed/soundraw-music/600/400', dataAiHint: 'ai music', pricing: 'Freemium' },
            { name: 'AIVA', description: 'The AI composing emotional soundtrack music.', url: 'https://www.aiva.ai/', image: 'https://picsum.photos/seed/aiva-music/600/400', dataAiHint: 'soundtrack music', pricing: 'Freemium' },
            { name: 'Boomy', description: 'Make instant music with artificial intelligence.', url: 'https://boomy.com/', image: 'https://picsum.photos/seed/boomy-music/600/400', dataAiHint: 'instant music', pricing: 'Freemium' },
        ] 
    },
    { 
        title: "Voice Changers", 
        icon: <Shuffle className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Voicemod', description: 'Real-time AI voice changer and soundboard.', url: 'https://www.voicemod.net/', image: 'https://picsum.photos/seed/voicemod-changer/600/400', dataAiHint: 'voice changer', pricing: 'Freemium' },
            { name: 'Altered Studio', description: 'Professional AI voice performance editor.', url: 'https://www.altered.ai/', image: 'https://picsum.photos/seed/altered-audio/600/400', dataAiHint: 'voice performance', pricing: 'Paid' },
            { name: 'Voice.ai', description: 'Real-time voice changer for PC.', url: 'https://voice.ai/', image: 'https://picsum.photos/seed/voiceai-audio/600/400', dataAiHint: 'pc voice changer', pricing: 'Freemium' },
        ] 
    },
    { 
        title: "AI Dubbing", 
        icon: <Languages className="w-5 h-5 text-primary"/>, 
        tools: [
             { name: 'HeyGen Video Translate', description: 'Translate your videos with AI voice cloning.', url: 'https://www.heygen.com/', image: 'https://picsum.photos/seed/heygen-dub/600/400', dataAiHint: 'video translate', pricing: 'Freemium' },
        ] 
    },
    { 
        title: "Real-Time Transcription", 
        icon: <Clock className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Otter.ai', description: 'Live transcribe your meetings and conversations.', url: 'https://otter.ai/', image: 'https://picsum.photos/seed/otter-live/600/400', dataAiHint: 'live transcription', pricing: 'Freemium' },
        ] 
    },
    { 
        title: "Audio Translation", 
        icon: <Globe className="w-5 h-5 text-primary"/>, 
        tools: [
             { name: 'HeyGen Video Translate', description: 'Translate your video audio into different languages.', url: 'https://www.heygen.com/', image: 'https://picsum.photos/seed/heygen-translate/600/400', dataAiHint: 'video translation', pricing: 'Freemium' },
        ] 
    },
    { title: "Call Analytics", icon: <Phone className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "IVR AI Systems", icon: <Bot className="w-5 h-5 text-primary"/>, tools: [] },
    { 
        title: "Audiobook Generation", 
        icon: <BookOpen className="w-5 h-5 text-primary"/>, 
        tools: [
             { name: 'ElevenLabs', description: 'Generate long-form audio content like audiobooks.', url: 'https://elevenlabs.io/', image: 'https://picsum.photos/seed/elevenlabs-audiobook/600/400', dataAiHint: 'audiobook creator', pricing: 'Freemium' },
             { name: 'Murf.ai', description: 'Create lifelike voiceovers for audiobooks.', url: 'https://murf.ai/', image: 'https://picsum.photos/seed/murf-audiobook/600/400', dataAiHint: 'voiceover', pricing: 'Freemium' },
        ] 
    },
    { title: "Emotion Detection (Voice)", icon: <Smile className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Voice Biometrics", icon: <Fingerprint className="w-5 h-5 text-primary"/>, tools: [] },
    { 
        title: "Audio Summarization", 
        icon: <BookCopy className="w-5 h-5 text-primary"/>, 
        tools: [
             { name: 'Descript', description: 'Automatically summarize audio and video content.', url: 'https://www.descript.com/', image: 'https://picsum.photos/seed/descript-summary/600/400', dataAiHint: 'content summary', pricing: 'Freemium' },
        ] 
    },
    { title: "Sound Classification", icon: <AudioLines className="w-5 h-5 text-primary"/>, tools: [] },
    { 
        title: "Meeting Audio AI", 
        icon: <Users className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Otter.ai', description: 'AI meeting assistant that writes notes.', url: 'https://otter.ai/', image: 'https://picsum.photos/seed/otter-stt/600/400', dataAiHint: 'meeting notes', pricing: 'Freemium' },
            { name: 'Fireflies.ai', description: 'AI assistant for your meetings.', url: 'https://fireflies.ai/', image: 'https://picsum.photos/seed/fireflies-meeting/600/400', dataAiHint: 'meeting recorder', pricing: 'Freemium' },
        ] 
    },
    { 
        title: "Singing Voice AI", 
        icon: <Music className="w-5 h-5 text-primary"/>, 
        tools: [
             { name: 'Boomy', description: 'Make instant music with AI-generated vocals.', url: 'https://boomy.com/', image: 'https://picsum.photos/seed/boomy-sing/600/400', dataAiHint: 'ai vocals', pricing: 'Freemium' },
        ] 
    },
    { 
        title: "Audio Restoration", 
        icon: <Wand2 className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Adobe Podcast Enhance', description: 'AI-powered audio cleaning.', url: 'https://podcast.adobe.com/enhance', image: 'https://picsum.photos/seed/adobe-restore/600/400', dataAiHint: 'audio cleaning', pricing: 'Free' },
        ] 
    },
    { title: "Voice Chatbots", icon: <MessageSquare className="w-5 h-5 text-primary"/>, tools: [] },
    { 
        title: "Language Learning Audio AI", 
        icon: <Languages className="w-5 h-5 text-primary"/>, 
        tools: [
             { name: 'Duolingo', description: 'Learn a language for free with audio lessons.', url: 'https://www.duolingo.com/', image: 'https://picsum.photos/seed/duolingo-audio/600/400', dataAiHint: 'language lessons', pricing: 'Freemium' },
             { name: 'Babbel', description: 'Language learning that gets you speaking.', url: 'https://www.babbel.com/', image: 'https://picsum.photos/seed/babbel-audio/600/400', dataAiHint: 'language speaking', pricing: 'Paid' },
        ] 
    },
    { title: "Smart Call Routing", icon: <Route className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Radio Automation AI", icon: <Radio className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Voice Search AI", icon: <Search className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "Audio Content Moderation", icon: <Shield className="w-5 h-5 text-primary"/>, tools: [] },
];

voiceAudioAiToolData.forEach(category => {
    if (category.tools.length === 0) {
        for (let i = 1; i <= 20; i++) {
            category.tools.push({
                name: `${category.title.replace(' Tools', '').trim()} Tool ${i}`,
                description: `A sample tool for the ${category.title} category.`,
                url: '#',
                image: `https://picsum.photos/seed/${category.title.toLowerCase().replace(/\s+/g, '-')}-${i}/600/400`,
                dataAiHint: 'audio tool',
                pricing: i % 3 === 0 ? 'Free' : (i % 2 === 0 ? 'Freemium' : 'Paid'),
            });
        }
    }
});
