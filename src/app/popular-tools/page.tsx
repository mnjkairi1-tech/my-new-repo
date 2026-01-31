
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Share2, TrendingUp, Video, ImageIcon, Film, Mic, Voicemail, Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/lib/language';
import { type Tool as BaseTool } from '@/lib/types';
import { useUserPreferences } from '@/context/user-preferences-context';
import { cn } from '@/lib/utils';
import { getCloudinaryUrl } from '@/lib/cloudinary';

type Tool = Omit<BaseTool, 'description' | 'isNew'>;

const textToVideoTools: Tool[] = [
  { name: 'Runway', url: 'https://runwayml.com/', image: 'https://picsum.photos/seed/runway-pop/300/200', category: 'Video', dataAiHint: 'abstract animation', isTrending: true },
  { name: 'Pika', url: 'https://pika.art/', image: 'https://picsum.photos/seed/pika-pop/300/200', category: 'Video', dataAiHint: 'cinematic video', isTrending: true },
  { name: 'InVideo', url: 'https://invideo.io/', image: 'https://picsum.photos/seed/invideo-video/300/200', category: 'Video', dataAiHint: 'ai video editor', isTrending: true },
  { name: 'Synthesia', url: 'https://www.synthesia.io/', image: 'https://picsum.photos/seed/synthesia-video/300/200', category: 'Video', dataAiHint: 'ai avatars', isTrending: true },
  { name: 'HeyGen', url: 'https://www.heygen.com/', image: 'https://picsum.photos/seed/heygen-video/300/200', category: 'Video', dataAiHint: 'generative video', isTrending: true },
  { name: 'Pictory', url: 'https://pictory.ai/', image: 'https://picsum.photos/seed/pictory-video/300/200', category: 'Video', dataAiHint: 'video from script', isTrending: true },
];

const textToImageTools: Tool[] = [
    { name: 'Bing Image Creator', url: 'https://www.bing.com/images/create', image: 'https://picsum.photos/seed/bing-creator/300/200', category: 'Image', dataAiHint: 'dalle ai', isTrending: true },
    { name: 'Adobe Firefly', url: 'https://firefly.adobe.com/', image: 'https://picsum.photos/seed/adobe-firefly/300/200', category: 'Image', dataAiHint: 'generative fill', isTrending: true },
    { name: 'Canva AI', url: 'https://www.canva.com/ai-image-generator/', image: 'https://picsum.photos/seed/canva-ai/300/200', category: 'Image', dataAiHint: 'design tool', isTrending: true },
    { name: 'Stable Diffusion Online', url: 'https://stablediffusionweb.com/', image: 'https://picsum.photos/seed/stable-diffusion/300/200', category: 'Image', dataAiHint: 'open source ai', isTrending: false },
    { name: 'Leonardo AI', url: 'https://leonardo.ai/', image: 'https://picsum.photos/seed/leonardo-ai/300/200', category: 'Image', dataAiHint: 'game assets', isTrending: true },
];

const imageToVideoTools: Tool[] = [
    { name: 'Pika Labs', url: 'https://pika.art/', image: 'https://picsum.photos/seed/pika-labs/300/200', category: 'Video', dataAiHint: 'generative video', isTrending: true },
    { name: 'Runway Gen-2', url: 'https://runwayml.com/', image: 'https://picsum.photos/seed/runway-gen2/300/200', category: 'Video', dataAiHint: 'ai magic tools', isTrending: true },
    { name: 'Kaiber AI', url: 'https://www.kaiber.ai/', image: 'https://picsum.photos/seed/kaiber-ai/300/200', category: 'Video', dataAiHint: 'visual storytelling', isTrending: true },
    { name: 'CapCut', url: 'https://www.capcut.com/', image: 'https://picsum.photos/seed/capcut-anim/300/200', category: 'Video', dataAiHint: 'image animation', isTrending: true },
    { name: 'Animaker AI', description: 'AI-powered tool for creating animated videos.', url: 'https://www.animaker.com/', image: 'https://picsum.photos/seed/animaker-ai/300/200', dataAiHint: 'animation maker', pricing: 'Freemium' },
];

const textToSpeechTools: Tool[] = [
    { name: 'ElevenLabs', url: 'https://elevenlabs.io/', image: 'https://picsum.photos/seed/elevenlabs-tts/300/200', category: 'Audio', dataAiHint: 'ai voice', isTrending: true },
    { name: 'Voicemod', url: 'https://www.voicemod.net/', image: 'https://picsum.photos/seed/voicemod-tts/300/200', category: 'Audio', dataAiHint: 'voice changer', isTrending: true },
    { name: 'Google TTS', url: 'https://cloud.google.com/text-to-speech', image: 'https://picsum.photos/seed/google-tts/300/200', category: 'Audio', dataAiHint: 'cloud voice', isTrending: false },
    { name: 'Murf.ai', url: 'https://murf.ai/', image: 'https://picsum.photos/seed/murf-tts/300/200', category: 'Audio', dataAiHint: 'voiceover', isTrending: true },
    { name: 'TTSMaker', url: 'https://ttsmaker.com/', image: 'https://picsum.photos/seed/ttsmaker-tts/300/200', category: 'Audio', dataAiHint: 'free tts', isTrending: false },
];

const voiceCloningTools: Tool[] = [
    { name: 'ElevenLabs', url: 'https://elevenlabs.io/', image: 'https://picsum.photos/seed/elevenlabs-vc/300/200', category: 'Audio', dataAiHint: 'voice cloning', isTrending: true },
    { name: 'Voicemod', url: 'https://www.voicemod.net/', image: 'https://picsum.photos/seed/voicemod-vc/300/200', category: 'Audio', dataAiHint: 'ai voice', isTrending: true },
    { name: 'Resemble AI', description: 'Your complete generative voice AI toolkit.', url: 'https://www.resemble.ai/', image: 'https://picsum.photos/seed/resemble-vc/300/200', dataAiHint: 'custom voice', pricing: 'Paid' },
    { name: 'Uberduck', description: 'Text-to-speech and voice cloning.', url: 'https://uberduck.ai/', image: 'https://picsum.photos/seed/uberduck-vc/300/200', dataAiHint: 'text to rap', pricing: 'Freemium' },
];

const ToolCard = React.memo(({ tool, onShare, t, isClient }: { tool: Tool, onShare: (e: React.MouseEvent, tool: Tool) => void, t: (key: string) => string, isClient: boolean }) => {
  const { starredTools, handleStarToggle } = useUserPreferences();
  const isStarred = isClient && starredTools.some(t => t.name === tool.name);

  const handleStarClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    handleStarToggle(tool as BaseTool);
  }

  return (
    <Link href={tool.url} key={tool.name} target="_blank" rel="noopener noreferrer" className="block group w-28 shrink-0">
      <Card 
        className="bg-white/80 border-none rounded-3xl soft-shadow transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg overflow-hidden h-full flex flex-col"
      >
        <div className="relative">
            <img
              src={getCloudinaryUrl(tool.image)}
              alt={tool.name}
              width="120"
              height="90"
              className="w-full h-auto aspect-[4/3] object-cover"
              data-ai-hint={tool.dataAiHint}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute top-1 right-1 bg-primary/80 text-primary-foreground rounded-full p-1 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-3 h-3"/>
            </div>
        </div>
        <CardContent className='p-2 flex flex-col flex-grow'>
          <CardTitle className="text-xs font-bold text-foreground leading-tight line-clamp-2 flex-grow">{tool.name}</CardTitle>
          <div className="flex items-center justify-end gap-1 mt-1">
              <Button variant="ghost" size="icon" className="w-6 h-6 rounded-full text-foreground/80 bg-white/30 hover:bg-white/50" onClick={(e) => onShare(e, tool)}>
                  <Share2 className="w-3 h-3" />
              </Button>
              <Button variant="ghost" size="icon" className="w-6 h-6 rounded-full text-foreground/80 bg-white/30 hover:bg-white/50" onClick={handleStarClick}>
                  <Star className={cn('w-3.5 h-3.5 transition-all', isClient && isStarred ? 'fill-yellow-300 text-yellow-300' : 'text-foreground/60')}/>
              </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
});
ToolCard.displayName = 'ToolCard';


export default function PopularToolsPage() {
    const { t } = useLanguage();
    const { toast } = useToast();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleShareTool = React.useCallback(async (e: React.MouseEvent, tool: Tool) => {
        e.preventDefault();
        e.stopPropagation();
    
        const shareData = {
          title: tool.name,
          text: `Check out this AI tool: ${tool.name}`,
          url: tool.url,
        };
    
        if (navigator.share) {
          try {
            await navigator.share(shareData);
          } catch (err) {
            console.error("Error sharing:", err);
          }
        } else {
          navigator.clipboard.writeText(tool.url);
          toast({
            title: "Link Copied!",
            description: `${tool.name}'s URL has been copied to your clipboard.`,
          });
        }
      }, [toast]);


  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      <div className="relative z-10 w-full max-w-sm pt-6 px-4">
        <header className="flex items-center gap-4">
          <Link href="/" passHref>
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-sm">
              <ArrowLeft />
            </Button>
          </Link>
          <div className='flex items-center gap-2'>
            <TrendingUp className="w-6 h-6 text-foreground" />
            <h1 className="text-2xl font-bold text-foreground">
              {t('home.popularTools.title')}
            </h1>
          </div>
        </header>
      </div>

      <main className="relative z-10 w-full max-w-sm flex-1 bg-card/80 backdrop-blur-3xl rounded-t-[2.5rem] shadow-2xl flex flex-col min-h-0 border-t-2 border-white/50 soft-shadow mt-6">
        <div className="flex-grow overflow-y-auto no-scrollbar p-4 space-y-6">
            <section>
                <div className="flex justify-between items-center mb-3">
                    <h2 className="font-semibold text-xl flex items-center gap-2">
                        <Video className="w-5 h-5 text-primary"/>
                        Text to Video
                    </h2>
                    <Button variant="link" className="text-primary p-0 h-auto font-semibold">{t('home.seeAll')}</Button>
                </div>
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 horizontal-scroll-container">
                    {textToVideoTools.map((tool) => (
                        <ToolCard
                            key={tool.name}
                            tool={tool}
                            onShare={(e) => handleShareTool(e, tool)}
                            t={t}
                            isClient={isClient}
                        />
                    ))}
                </div>
            </section>
            
            <section>
                <div className="flex justify-between items-center mb-3">
                    <h2 className="font-semibold text-xl flex items-center gap-2">
                        <ImageIcon className="w-5 h-5 text-primary"/>
                        Text to Image
                    </h2>
                    <Button variant="link" className="text-primary p-0 h-auto font-semibold">{t('home.seeAll')}</Button>
                </div>
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 horizontal-scroll-container">
                    {textToImageTools.map((tool) => (
                        <ToolCard
                            key={tool.name}
                            tool={tool}
                            onShare={(e) => handleShareTool(e, tool)}
                            t={t}
                            isClient={isClient}
                        />
                    ))}
                </div>
            </section>
            
            <section>
                <div className="flex justify-between items-center mb-3">
                    <h2 className="font-semibold text-xl flex items-center gap-2">
                        <Film className="w-5 h-5 text-primary"/>
                        Image to video
                    </h2>
                    <Button variant="link" className="text-primary p-0 h-auto font-semibold">{t('home.seeAll')}</Button>
                </div>
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 horizontal-scroll-container">
                    {imageToVideoTools.map((tool) => (
                        <ToolCard
                            key={tool.name}
                            tool={tool}
                            onShare={(e) => handleShareTool(e, tool)}
                            t={t}
                            isClient={isClient}
                        />
                    ))}
                </div>
            </section>
            <section>
                <div className="flex justify-between items-center mb-3">
                    <h2 className="font-semibold text-xl flex items-center gap-2">
                        <Mic className="w-5 h-5 text-primary"/>
                        Text to Speech
                    </h2>
                    <Button variant="link" className="text-primary p-0 h-auto font-semibold">{t('home.seeAll')}</Button>
                </div>
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 horizontal-scroll-container">
                    {textToSpeechTools.map((tool) => (
                        <ToolCard
                            key={tool.name}
                            tool={tool}
                            onShare={(e) => handleShareTool(e, tool)}
                            t={t}
                            isClient={isClient}
                        />
                    ))}
                </div>
            </section>
             <section>
                <div className="flex justify-between items-center mb-3">
                    <h2 className="font-semibold text-xl flex items-center gap-2">
                        <Voicemail className="w-5 h-5 text-primary"/>
                        Voice Cloning
                    </h2>
                    <Button variant="link" className="text-primary p-0 h-auto font-semibold">{t('home.seeAll')}</Button>
                </div>
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 horizontal-scroll-container">
                    {voiceCloningTools.map((tool) => (
                        <ToolCard
                            key={tool.name}
                            tool={tool}
                            onShare={(e) => handleShareTool(e, tool)}
                            t={t}
                            isClient={isClient}
                        />
                    ))}
                </div>
            </section>
        </div>
      </main>
    </div>
  );
}
