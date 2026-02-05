import type { Tool } from '@/lib/types';

export const aiAudioConverterTools: Tool[] = [
    { name: 'CloudConvert Audio', description: 'Convert between MP3, WAV, M4A, FLAC and more.', url: 'https://cloudconvert.com/audio-converter', image: 'https://www.google.com/s2/favicons?sz=128&domain=cloudconvert.com', dataAiHint: 'audio formats', pricing: 'Freemium' },
    { name: 'Audacity', description: 'Free audio editor with conversion capabilities.', url: 'https://www.audacityteam.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=audacityteam.org', dataAiHint: 'audio editor', pricing: 'Free' },
    { name: 'Freac', description: 'Free audio converter and CD ripper.', url: 'https://www.freac.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=freac.org', dataAiHint: 'cd ripper', pricing: 'Free' },
    { name: 'MediaHuman Audio Converter', description: 'A freeware application for macOS and Windows.', url: 'https://www.mediahuman.com/audio-converter.html', image: 'https://www.google.com/s2/favicons?sz=128&domain=mediahuman.com', dataAiHint: 'free audio', pricing: 'Free' },
    { name: 'Online Audio Converter', description: 'Convert audio files for free.', url: 'https://online-audio-converter.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=online-audio-converter.com', dataAiHint: 'free audio', pricing: 'Free' },
    { name: 'Switch Audio Converter', description: 'A multi-format audio file converter.', url: 'https://www.nch.com.au/switch/index.html', image: 'https://www.google.com/s2/favicons?sz=128&domain=nch.com.au', dataAiHint: 'nch software', pricing: 'Freemium' },
    { name: 'VLC Media Player', description: 'Can also be used for audio format conversion.', url: 'https://www.videolan.org/vlc/', image: 'https://www.google.com/s2/favicons?sz=128&domain=videolan.org', dataAiHint: 'media player', pricing: 'Free' },
    { name: 'XLD', description: 'X Lossless Decoder for Mac.', url: 'https://tmkk.undo.jp/xld/index_e.html', image: 'https://www.google.com/s2/favicons?sz=128&domain=undo.jp', dataAiHint: 'lossless audio', pricing: 'Free' },
    { name: 'dBpoweramp', description: 'Audio converter, CD ripper, and editor.', url: 'https://www.dbpoweramp.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=dbpoweramp.com', dataAiHint: 'cd ripper', pricing: 'Paid' },
    { name: 'FFmpeg', description: 'A complete solution to convert audio and video.', url: 'https://ffmpeg.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ffmpeg.org', dataAiHint: 'command line', pricing: 'Free' },
];
