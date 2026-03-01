'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ClubHeader } from '@/components/club-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X, Scale, Info, ExternalLink } from 'lucide-react';
import { useUserPreferences } from '@/context/user-preferences-context';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const FeatureRow = ({ label, tool1Value, tool2Value, isMidnight }: { label: string, tool1Value: string | React.ReactNode, tool2Value: string | React.ReactNode, isMidnight: boolean }) => (
    <div className={cn(
        "grid grid-cols-3 items-center gap-4 py-6 border-b text-center min-h-[5rem]",
        isMidnight ? "border-white/10" : "border-border/50"
    )}>
        <div className="text-sm font-bold text-right px-2 leading-relaxed">{tool1Value}</div>
        <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">{label}</div>
        <div className="text-sm font-bold text-left px-2 leading-relaxed">{tool2Value}</div>
    </div>
);


export default function CompareToolsPage() {
    const { comparisonList, clearComparison, theme } = useUserPreferences();
    const isMidnight = theme === 'midnight-glass';
    const router = useRouter();

    React.useEffect(() => {
        if (comparisonList.length < 2) {
            router.push('/?tab=tools');
        }
    }, [comparisonList, router]);

    if (comparisonList.length < 2) {
        return (
            <div className="bg-background min-h-screen flex flex-col items-center justify-center font-body p-6 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Scale className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-2xl font-black mb-2">Needs 2 Tools</h2>
                <p className="text-muted-foreground mb-8">Select two tools from the catalog to compare them side-by-side.</p>
                <Button onClick={() => router.push('/?tab=tools')} className="rounded-full h-12 px-8 font-bold">Go to Catalog</Button>
            </div>
        );
    }
    
    const [tool1, tool2] = comparisonList;

    const features = [
        { label: 'Category', value1: tool1.category || 'AI General', value2: tool2.category || 'AI General' },
        { label: 'Pricing', value1: tool1.pricing || 'Freemium', value2: tool2.pricing || 'Freemium' },
        { label: 'Availability', value1: <div className="flex items-center justify-end gap-1 text-green-500 font-bold"><Check className="w-4 h-4" /> Live</div>, value2: <div className="flex items-center justify-start gap-1 text-green-500 font-bold"><Check className="w-4 h-4" /> Live</div> },
        { label: 'Description', value1: tool1.description || 'Professional AI tool for creative workflows.', value2: tool2.description || 'Advanced AI solution for modern productivity.' },
        { label: 'Quick View', value1: <a href={tool1.url} target="_blank" rel="noopener" className="text-primary hover:underline inline-flex items-center gap-1">Open <ExternalLink className="w-3 h-3"/></a>, value2: <a href={tool2.url} target="_blank" rel="noopener" className="text-primary hover:underline inline-flex items-center gap-1">Open <ExternalLink className="w-3 h-3"/></a> },
    ];


  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative overflow-x-hidden">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-4xl p-4 md:p-10 pb-32">
        <ClubHeader title="AI Comparison" showBackButton />
        
        <div className="mt-8 space-y-6">
          <div className="grid grid-cols-2 gap-4">
              {[tool1, tool2].map((tool, i) => (
                  <Card key={i} className={cn(
                      "p-4 flex flex-col items-center text-center rounded-[2rem] border-none shadow-xl",
                      isMidnight ? "glass-card-effect" : "bg-card"
                  )}>
                      <div className="relative w-16 h-16 mb-3">
                          <Image src={tool.image} alt={tool.name} fill className="object-contain" unoptimized />
                      </div>
                      <h3 className="font-black text-lg tracking-tight uppercase">{tool.name}</h3>
                  </Card>
              ))}
          </div>

          <Card className={cn(
            "bg-card/80 backdrop-blur-xl border-none shadow-2xl rounded-[2.5rem] overflow-hidden",
            isMidnight && "glass-card-effect"
          )}>
            <CardHeader className="border-b border-border/20 py-8">
              <CardTitle className="text-center flex items-center justify-center gap-3">
                  <Info className="w-6 h-6 text-primary" />
                  Real-time Benchmarks
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {features.map((feature, index) => (
                <FeatureRow 
                  key={index}
                  label={feature.label}
                  tool1Value={feature.value1}
                  tool2Value={feature.value2}
                  isMidnight={isMidnight}
                />
              ))}
               <div className="p-8 text-center flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                        variant="destructive" 
                        onClick={() => { clearComparison(); router.push('/?tab=tools'); }}
                        className="rounded-full h-12 px-10 font-bold shadow-lg"
                    >
                        Clear Selection
                    </Button>
                    <Button 
                        onClick={() => router.push('/?tab=tools')}
                        className="rounded-full h-12 px-10 font-bold bg-primary text-white shadow-lg"
                    >
                        Find More Tools
                    </Button>
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
