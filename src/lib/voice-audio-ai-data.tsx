
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
            { name: 'Otter.ai', description: 'AI meeting assistant that records audio and writes notes.', url: 'https://otter.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=otter.ai', dataAiHint: 'meeting notes', pricing: 'Freemium' },
            { name: 'Happy Scribe', description: 'Transcription & Subtitles Services.', url: 'https://www.happyscribe.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=happyscribe.com', dataAiHint: 'audio transcription', pricing: 'Paid' },
            { name: 'Descript', description: 'All-in-one audio & video editor with transcription.', url: 'https://www.descript.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=descript.com', dataAiHint: 'podcast editor', pricing: 'Freemium' },
            { name: 'Rev', description: 'Human-powered and automated transcription.', url: 'https://www.rev.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=rev.com', dataAiHint: 'human transcription', pricing: 'Paid' },
            { name: 'Scribie', description: 'Manual and automated transcription services.', url: 'https://scribie.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=scribie.com', dataAiHint: 'video transcription', pricing: 'Paid' },
        ]
    },
    {
        title: "Text-to-Speech",
        icon: <Mic2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ElevenLabs', description: 'AI Speech Synthesis.', url: 'https://elevenlabs.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=elevenlabs.io', dataAiHint: 'ai voice', pricing: 'Freemium' },
            { name: 'Murf.ai', description: 'Go from text to speech with a versatile AI voice generator.', url: 'https://murf.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=murf.ai', dataAiHint: 'voice generator', pricing: 'Freemium' },
            { name: 'Play.ht', description: 'AI-powered text to voice generator.', url: 'https://play.ht/', image: 'https://www.google.com/s2/favicons?sz=128&domain=play.ht', dataAiHint: 'voice generator', pricing: 'Freemium' },
            { name: 'Lovo.ai', description: 'AI voice generator and text-to-speech platform.', url: 'https://lovo.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lovo.ai', dataAiHint: 'realistic voices', pricing: 'Freemium' },
        ]
    },
    {
        title: "Voice Cloning",
        icon: <Voicemail className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Resemble.ai', description: 'AI voice generator for real-time voice cloning.', url: 'https://www.resemble.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=resemble.ai', dataAiHint: 'voice cloning', pricing: 'Paid' },
            { name: 'ElevenLabs', description: 'Create entirely new synthetic voices from scratch.', url: 'https://elevenlabs.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=elevenlabs.io', dataAiHint: 'synthetic voice', pricing: 'Freemium' },
            { name: 'Voicemod', description: 'Real-time AI voice changer and soundboard.', url: 'https://www.voicemod.net/', image: 'https://www.google.com/s2/favicons?sz=128&domain=voicemod.net', dataAiHint: 'voice changer', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Voice Assistants",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Assistant', description: 'Your personal Google, always ready to help.', url: 'https://assistant.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'voice assistant', pricing: 'Free' },
            { name: 'Amazon Alexa', description: 'The voice service that powers Echo devices.', url: 'https://www.amazon.com/alexa', image: 'https://www.google.com/s2/favicons?sz=128&domain=amazon.com', dataAiHint: 'smart speaker', pricing: 'Free' },
            { name: 'Siri', description: 'Apple\'s intelligent assistant built into its devices.', url: 'https://www.apple.com/siri/', image: 'https://www.google.com/s2/favicons?sz=128&domain=apple.com', dataAiHint: 'apple assistant', pricing: 'Free' },
        ]
    },
    {
        title: "Audio Noise Removal",
        icon: <Wind className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Adobe Podcast Enhance', description: 'Remove noise and echo from voice recordings.', url: 'https://podcast.adobe.com/enhance', image: 'https://www.google.com/s2/favicons?sz=128&domain=adobe.com', dataAiHint: 'audio enhance', pricing: 'Free' },
            { name: 'Krisp', description: 'AI-powered noise cancelling app.', url: 'https://krisp.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=krisp.ai', dataAiHint: 'noise cancelling', pricing: 'Freemium' },
            { name: 'Audo Studio', description: 'One-click audio cleaning and enhancement.', url: 'https://audo.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=audo.ai', dataAiHint: 'noise removal', pricing: 'Freemium' },
        ]
    },
    {
        title: "Voice Recognition",
        icon: <UserCheck className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Cloud Speech-to-Text', description: 'Speech-to-text with speaker diarization.', url: 'https://cloud.google.com/speech-to-text', image: 'https://www.google.com/s2/favicons?sz=128&domain=cloud.google.com', dataAiHint: 'speaker recognition', pricing: 'Paid' },
            { name: 'Amazon Transcribe', description: 'Automatic speech recognition with speaker identification.', url: 'https://aws.amazon.com/transcribe/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aws.amazon.com', dataAiHint: 'aws speech', pricing: 'Paid' },
            { name: 'Deepgram', description: 'Speech-to-text API with speaker recognition.', url: 'https://deepgram.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=deepgram.com', dataAiHint: 'enterprise stt', pricing: 'Paid' },
        ]
    },
    {
        title: "Speaker Identification",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Otter.ai', description: 'Identifies different speakers in a conversation.', url: 'https://otter.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=otter.ai', dataAiHint: 'speaker id', pricing: 'Freemium' },
            { name: 'Descript', description: 'Speaker detection for multi-speaker transcription.', url: 'https://www.descript.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=descript.com', dataAiHint: 'speaker detection', pricing: 'Freemium' },
            { name: 'AssemblyAI', description: 'AI models for speech-to-text including speaker diarization.', url: 'https://www.assemblyai.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=assemblyai.com', dataAiHint: 'speaker diarization', pricing: 'Paid' },
        ]
    },
    {
        title: "Audio Enhancement",
        icon: <Sparkles className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Adobe Podcast Enhance', description: 'AI-powered audio cleaning.', url: 'https://podcast.adobe.com/enhance', image: 'https://www.google.com/s2/favicons?sz=128&domain=adobe.com', dataAiHint: 'audio cleaning', pricing: 'Free' },
            { name: 'Audo Studio', description: 'One-click audio cleaning and enhancement.', url: 'https://audo.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=audo.ai', dataAiHint: 'noise removal', pricing: 'Freemium' },
            { name: 'Lalal.ai', description: 'Stem splitter and voice cleaner.', url: 'https://www.lalal.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lalal.ai', dataAiHint: 'vocal remover', pricing: 'Freemium' },
        ]
    },
    {
        title: "Podcast AI Tools",
        icon: <Podcast className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Descript', description: 'All-in-one audio & video editor for podcasters.', url: 'https://www.descript.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=descript.com', dataAiHint: 'podcast editing', pricing: 'Freemium' },
            { name: 'Podcastle', description: 'AI-powered podcasting platform.', url: 'https://podcastle.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=podcastle.ai', dataAiHint: 'audio creation', pricing: 'Freemium' },
            { name: 'Riverside.fm', description: 'Studio quality recording, anywhere.', url: 'https://riverside.fm/', image: 'https://www.google.com/s2/favicons?sz=128&domain=riverside.fm', dataAiHint: 'remote podcast', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Music Generation",
        icon: <Music className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Soundraw', description: 'AI music generator.', url: 'https://soundraw.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=soundraw.io', dataAiHint: 'ai music', pricing: 'Freemium' },
            { name: 'AIVA', description: 'The AI composing emotional soundtrack music.', url: 'https://www.aiva.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aiva.ai', dataAiHint: 'soundtrack music', pricing: 'Freemium' },
            { name: 'Boomy', description: 'Make instant music with artificial intelligence.', url: 'https://boomy.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=boomy.com', dataAiHint: 'instant music', pricing: 'Freemium' },
        ]
    },
    {
        title: "Voice Changers",
        icon: <Shuffle className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Voicemod', description: 'Real-time AI voice changer and soundboard.', url: 'https://www.voicemod.net/', image: 'https://www.google.com/s2/favicons?sz=128&domain=voicemod.net', dataAiHint: 'voice changer', pricing: 'Freemium' },
            { name: 'Altered Studio', description: 'Professional AI voice performance editor.', url: 'https://www.altered.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=altered.ai', dataAiHint: 'voice performance', pricing: 'Paid' },
            { name: 'Voice.ai', description: 'Real-time voice changer for PC.', url: 'https://voice.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=voice.ai', dataAiHint: 'pc voice changer', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Dubbing",
        icon: <Languages className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'HeyGen Video Translate', description: 'Translate your videos with AI voice cloning.', url: 'https://www.heygen.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=heygen.com', dataAiHint: 'video translate', pricing: 'Freemium' },
             { name: 'Dubverse', description: 'AI-powered video dubbing.', url: 'https://dubverse.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=dubverse.ai', dataAiHint: 'ai dubbing', pricing: 'Freemium' },
             { name: 'Papercup', description: 'AI dubbing and video translation.', url: 'https://www.papercup.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=papercup.com', dataAiHint: 'video translation', pricing: 'Paid' },
        ]
    },
    {
        title: "Real-Time Transcription",
        icon: <Clock className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Otter.ai', description: 'Live transcribe your meetings and conversations.', url: 'https://otter.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=otter.ai', dataAiHint: 'live transcription', pricing: 'Freemium' },
            { name: 'Deepgram', description: 'Real-time speech-to-text API.', url: 'https://deepgram.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=deepgram.com', dataAiHint: 'stt api', pricing: 'Paid' },
        ]
    },
    {
        title: "Audio Translation",
        icon: <Globe className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'HeyGen Video Translate', description: 'Translate your video audio into different languages.', url: 'https://www.heygen.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=heygen.com', dataAiHint: 'video translation', pricing: 'Freemium' },
             { name: 'Rask AI', description: 'AI video localization and dubbing tool.', url: 'https://www.rask.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=rask.ai', dataAiHint: 'video localization', pricing: 'Paid' },
        ]
    },
    {
        title: "Call Analytics",
        icon: <Phone className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Gong', description: 'Revenue intelligence platform for sales calls.', url: 'https://www.gong.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=gong.io', dataAiHint: 'revenue intelligence', pricing: 'Paid' },
            { name: 'Chorus.ai', description: 'Conversation intelligence for sales teams.', url: 'https://www.chorus.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=chorus.ai', dataAiHint: 'conversation intelligence', pricing: 'Paid' },
            { name: 'Invoca', description: 'Conversation intelligence for marketing and sales.', url: 'https://www.invoca.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=invoca.com', dataAiHint: 'call tracking', pricing: 'Paid' },
        ]
    },
    {
        title: "IVR AI Systems",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Twilio Autopilot', description: 'Build intelligent IVRs and bots.', url: 'https://www.twilio.com/autopilot', image: 'https://www.google.com/s2/favicons?sz=128&domain=twilio.com', dataAiHint: 'intelligent ivr', pricing: 'Paid' },
            { name: 'Google Cloud Dialogflow', description: 'Create conversational IVRs.', url: 'https://cloud.google.com/dialogflow', image: 'https://www.google.com/s2/favicons?sz=128&domain=cloud.google.com', dataAiHint: 'conversational ivr', pricing: 'Paid' },
            { name: 'Amazon Lex', description: 'Build conversational interfaces for your applications.', url: 'https://aws.amazon.com/lex/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aws.amazon.com', dataAiHint: 'aws chatbot', pricing: 'Paid' },
        ]
    },
    {
        title: "Audiobook Generation",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'ElevenLabs', description: 'Generate long-form audio content like audiobooks.', url: 'https://elevenlabs.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=elevenlabs.io', dataAiHint: 'audiobook creator', pricing: 'Freemium' },
             { name: 'Murf.ai', description: 'Create lifelike voiceovers for audiobooks.', url: 'https://murf.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=murf.ai', dataAiHint: 'voiceover', pricing: 'Freemium' },
             { name: 'Play.ht', description: 'AI-powered text to voice generator for audiobooks.', url: 'https://play.ht/', image: 'https://www.google.com/s2/favicons?sz=128&domain=play.ht', dataAiHint: 'voice generator', pricing: 'Freemium' },
        ]
    },
    {
        title: "Emotion Detection (Voice)",
        icon: <Smile className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Vokaturi', description: 'Open-source emotion recognition from voice.', url: 'https://vokaturi.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=vokaturi.com', dataAiHint: 'emotion recognition', pricing: 'Free' },
            { name: 'Beyond Verbal', description: 'Voice and emotions analytics.', url: 'https://www.beyondverbal.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=beyondverbal.com', dataAiHint: 'emotions analytics', pricing: 'Paid' },
        ]
    },
    {
        title: "Voice Biometrics",
        icon: <Fingerprint className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Nuance', description: 'Voice biometrics for authentication.', url: 'https://www.nuance.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=nuance.com', dataAiHint: 'voice authentication', pricing: 'Paid' },
            { name: 'Pindrop', description: 'Voice security and authentication.', url: 'https://www.pindrop.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pindrop.com', dataAiHint: 'voice security', pricing: 'Paid' },
        ]
    },
    {
        title: "Audio Summarization",
        icon: <BookCopy className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Descript', description: 'Automatically summarize audio and video content.', url: 'https://www.descript.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=descript.com', dataAiHint: 'content summary', pricing: 'Freemium' },
             { name: 'Sembly AI', description: 'Turns your meetings into text, summaries, and insights.', url: 'https://www.sembly.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sembly.ai', dataAiHint: 'meeting summary', pricing: 'Freemium' },
        ]
    },
    {
        title: "Sound Classification",
        icon: <AudioLines className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Cloud Sound Recognition', description: 'Identify sounds using machine learning.', url: 'https://cloud.google.com/sound-recognition', image: 'https://www.google.com/s2/favicons?sz=128&domain=cloud.google.com', dataAiHint: 'sound recognition', pricing: 'Paid' },
        ]
    },
    {
        title: "Meeting Audio AI",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Otter.ai', description: 'AI meeting assistant that writes notes.', url: 'https://otter.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=otter.ai', dataAiHint: 'meeting notes', pricing: 'Freemium' },
            { name: 'Fireflies.ai', description: 'AI assistant for your meetings.', url: 'https://fireflies.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=fireflies.ai', dataAiHint: 'meeting recorder', pricing: 'Freemium' },
            { name: 'Fathom', description: 'Free AI Notetaker for Zoom meetings.', url: 'https://fathom.video/', image: 'https://www.google.com/s2/favicons?sz=128&domain=fathom.video', dataAiHint: 'zoom notes', pricing: 'Free' },
        ]
    },
    {
        title: "Singing Voice AI",
        icon: <Music className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Boomy', description: 'Make instant music with AI-generated vocals.', url: 'https://boomy.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=boomy.com', dataAiHint: 'ai vocals', pricing: 'Freemium' },
             { name: 'Suno AI', description: 'Create songs with AI.', url: 'https://www.suno.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=suno.ai', dataAiHint: 'song ai', pricing: 'Freemium' },
        ]
    },
    {
        title: "Audio Restoration",
        icon: <Wand2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Adobe Podcast Enhance', description: 'AI-powered audio cleaning.', url: 'https://podcast.adobe.com/enhance', image: 'https://www.google.com/s2/favicons?sz=128&domain=adobe.com', dataAiHint: 'audio cleaning', pricing: 'Free' },
            { name: 'Audo Studio', description: 'One-click audio cleaning and enhancement.', url: 'https://audo.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=audo.ai', dataAiHint: 'noise removal', pricing: 'Freemium' },
        ]
    },
    {
        title: "Voice Chatbots",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Rasa', description: 'Build text- and voice-based AI assistants.', url: 'https://rasa.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=rasa.com', dataAiHint: 'voice assistants', pricing: 'Freemium' },
            { name: 'Google Cloud Dialogflow', description: 'Platform for building voice and text conversational interfaces.', url: 'https://cloud.google.com/dialogflow', image: 'https://www.google.com/s2/favicons?sz=128&domain=cloud.google.com', dataAiHint: 'conversational ui', pricing: 'Paid' },
        ]
    },
    {
        title: "Language Learning Audio AI",
        icon: <Languages className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Duolingo', description: 'Learn a language for free with audio lessons.', url: 'https://www.duolingo.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=duolingo.com', dataAiHint: 'language lessons', pricing: 'Freemium' },
             { name: 'Babbel', description: 'Language learning that gets you speaking.', url: 'https://www.babbel.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=babbel.com', dataAiHint: 'language speaking', pricing: 'Paid' },
        ]
    },
    {
        title: "Smart Call Routing",
        icon: <Route className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Five9', description: 'Cloud contact center software with intelligent routing.', url: 'https://www.five9.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=five9.com', dataAiHint: 'contact center', pricing: 'Paid' },
        ]
    },
    {
        title: "Radio Automation AI",
        icon: <Radio className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Radio.co', description: 'Create your own internet radio station.', url: 'https://radio.co/', image: 'https://www.google.com/s2/favicons?sz=128&domain=radio.co', dataAiHint: 'internet radio', pricing: 'Paid' },
        ]
    },
    {
        title: "Voice Search AI",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Assistant', description: 'Voice search capabilities on multiple devices.', url: 'https://assistant.google.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=google.com', dataAiHint: 'google search', pricing: 'Free' },
        ]
    },
    {
        title: "Audio Content Moderation",
        icon: <Shield className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Hive AI', description: 'AI models for content moderation.', url: 'https://thehive.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=thehive.ai', dataAiHint: 'content moderation', pricing: 'Paid' },
        ]
    }
];
