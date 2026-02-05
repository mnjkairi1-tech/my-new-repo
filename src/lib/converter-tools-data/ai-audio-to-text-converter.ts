import type { Tool } from '@/lib/types';

export const aiAudioToTextConverterTools: Tool[] = [
    { name: 'Happy Scribe', description: 'Transcription & Subtitles Services.', url: 'https://www.happyscribe.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=happyscribe.com', dataAiHint: 'audio transcription', pricing: 'Paid' },
    { name: 'Otter.ai', description: 'AI meeting assistant that transcribes audio.', url: 'https://otter.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=otter.ai', dataAiHint: 'meeting notes', pricing: 'Freemium' },
    { name: 'Rev', description: 'Human-powered and automated transcription.', url: 'https://www.rev.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=rev.com', dataAiHint: 'human transcription', pricing: 'Paid' },
    { name: 'OpenAI Whisper', description: 'A general-purpose speech recognition model.', url: 'https://openai.com/research/whisper', image: 'https://www.google.com/s2/favicons?sz=128&domain=openai.com', dataAiHint: 'speech recognition', pricing: 'Free' },
    { name: 'Descript', description: 'All-in-one editor with automatic transcription.', url: 'https://www.descript.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=descript.com', dataAiHint: 'podcast editor', pricing: 'Freemium' },
    { name: 'AssemblyAI', description: 'AI models for speech-to-text and more.', url: 'https://www.assemblyai.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=assemblyai.com', dataAiHint: 'speech-to-text api', pricing: 'Paid' },
    { name: 'Deepgram', description: 'Speech-to-text API for enterprises.', url: 'https://deepgram.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=deepgram.com', dataAiHint: 'enterprise stt', pricing: 'Paid' },
    { name: 'Google Cloud Speech-to-Text', description: 'Accurate speech transcription.', url: 'https://cloud.google.com/speech-to-text', image: 'https://www.google.com/s2/favicons?sz=128&domain=cloud.google.com', dataAiHint: 'gcp speech', pricing: 'Paid' },
    { name: 'Amazon Transcribe', description: 'Automatically convert speech to text.', url: 'https://aws.amazon.com/transcribe/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aws.amazon.com', dataAiHint: 'aws speech', pricing: 'Paid' },
    { name: 'Nuance Dragon', description: 'Speech recognition software.', url: 'https://www.nuance.com/dragon.html', image: 'https://www.google.com/s2/favicons?sz=128&domain=nuance.com', dataAiHint: 'dictation software', pricing: 'Paid' },
];
