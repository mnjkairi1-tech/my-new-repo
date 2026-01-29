import type { Tool } from '@/lib/types';

export const aiSpeechToTextConverterTools: Tool[] = [
    { name: 'OpenAI Whisper', description: 'A general-purpose speech recognition model.', url: 'https://openai.com/research/whisper', image: 'https://picsum.photos/seed/whisper-convert/600/400', dataAiHint: 'speech recognition', pricing: 'Free' },
    { name: 'Otter.ai', description: 'Transcribe meetings and conversations.', url: 'https://otter.ai/', image: 'https://picsum.photos/seed/otter-convert/600/400', dataAiHint: 'audio transcription', pricing: 'Freemium' },
    { name: 'Happy Scribe', description: 'Transcription & Subtitles Services.', url: 'https://www.happyscribe.com/', image: 'https://picsum.photos/seed/happyscribe-stt/600/400', dataAiHint: 'transcription service', pricing: 'Paid' },
    { name: 'Descript', description: 'All-in-one audio & video editor with transcription.', url: 'https://www.descript.com/', image: 'https://picsum.photos/seed/descript-stt/600/400', dataAiHint: 'podcast editor', pricing: 'Freemium' },
    { name: 'Rev', description: 'Human-powered and automated transcription.', url: 'https://www.rev.com/', image: 'https://picsum.photos/seed/rev-a2t/600/400', dataAiHint: 'human transcription', pricing: 'Paid' },
    { name: 'AssemblyAI', description: 'AI models for speech-to-text and more.', url: 'https://www.assemblyai.com/', image: 'https://picsum.photos/seed/assemblyai-stt/600/400', dataAiHint: 'speech-to-text api', pricing: 'Paid' },
    { name: 'Deepgram', description: 'Speech-to-text API for enterprises.', url: 'https://deepgram.com/', image: 'https://picsum.photos/seed/deepgram-stt/600/400', dataAiHint: 'enterprise stt', pricing: 'Paid' },
    { name: 'Google Cloud Speech-to-Text', description: 'Accurate speech transcription.', url: 'https://cloud.google.com/speech-to-text', image: 'https://picsum.photos/seed/gcp-stt/600/400', dataAiHint: 'gcp speech', pricing: 'Paid' },
    { name: 'Amazon Transcribe', description: 'Automatically convert speech to text.', url: 'https://aws.amazon.com/transcribe/', image: 'https://picsum.photos/seed/aws-transcribe/600/400', dataAiHint: 'aws speech', pricing: 'Paid' },
    { name: 'Nuance Dragon', description: 'Speech recognition software.', url: 'https://www.nuance.com/dragon.html', image: 'https://picsum.photos/seed/nuance-dragon/600/400', dataAiHint: 'dictation software', pricing: 'Paid' },
];
