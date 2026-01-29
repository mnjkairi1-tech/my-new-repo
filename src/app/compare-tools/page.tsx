'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ClubHeader } from '@/components/club-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check, X, Star } from 'lucide-react';
import { useUserPreferences } from '@/context/user-preferences-context';
import { useRouter } from 'next/navigation';
import { Tool } from '@/lib/types';

const FeatureRow = ({ label, tool1Value, tool2Value }: { label: string, tool1Value: string | React.ReactNode, tool2Value: string | React.ReactNode }) => (
    <div className="grid grid-cols-3 items-center gap-4 py-4 border-b text-center min-h-[5rem]">
        <div className="text-sm font-medium text-right px-2">{tool1Value}</div>
        <div className="text-xs font-semibold text-muted-foreground uppercase">{label}</div>
        <div className="text-sm font-medium text-left px-2">{tool2Value}</div>
    </div>
);


export default function CompareToolsPage() {
    const { comparisonList, clearComparison } = useUserPreferences();
    const router = useRouter();

    React.useEffect(() => {
        if (comparisonList.length < 2) {
            router.push('/?tab=tools');
        }
    }, [comparisonList, router]);

    if (comparisonList.length < 2) {
        return (
            <div className="bg-background min-h-screen flex flex-col items-center justify-center font-body">
                <p>Please select two tools to compare.</p>
                <Link href="/?tab=tools" className='mt-4'>
                    <Button>Go to Tools</Button>
                </Link>
            </div>
        );
    }
    
    const [tool1, tool2] = comparisonList;

    const features = [
        { label: 'Category', value1: tool1.category || 'N/A', value2: tool2.category || 'N/A' },
        { label: 'Pricing Model', value1: tool1.pricing || 'N/A', value2: tool2.pricing || 'N/A' },
        { label: 'Primary Use Case', value1: 'Generating artistic, stylized images with a strong community aspect.', value2: 'Creating photorealistic and creative images from natural language prompts with strong integration capabilities.' },
        { label: 'Ease of Use', value1: 'Moderate (Discord-based interface)', value2: 'Easy (Web interface)' },
        { label: 'Trending', value1: tool1.isTrending ? <Check className="mx-auto text-green-500"/> : <X className="mx-auto text-red-500"/>, value2: tool2.isTrending ? <Check className="mx-auto text-green-500"/> : <X className="mx-auto text-red-500"/> },
        { label: 'Key Differentiator', value1: 'Distinct artistic style and a very active community.', value2: 'Deep integration with other products and superior natural language understanding.' },
        { label: 'Best For', value1: 'Artists, designers, and creative professionals.', value2: 'General users, developers, and content creators.' },
        { label: 'API Access', value1: <X className="mx-auto text-red-500"/>, value2: <Check className="mx-auto text-green-500"/> },
        { label: 'Description', value1: tool1.description, value2: tool2.description },
    ];


  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      <div className="relative z-10 w-full max-w-4xl p-6">
        <ClubHeader title="Compare AI Tools" showBackButton />
        <div className="mt-6">
          <Card className="bg-card/80 backdrop-blur-sm soft-shadow">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl">{tool1.name} vs. {tool2.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
                <div className="grid grid-cols-3 items-center gap-4 text-center mb-4">
                    <h3 className="text-lg font-bold text-primary">{tool1.name}</h3>
                    <div />
                    <h3 className="text-lg font-bold text-primary">{tool2.name}</h3>
                </div>
              {features.map((feature, index) => (
                <FeatureRow 
                  key={index}
                  label={feature.label}
                  tool1Value={feature.value1}
                  tool2Value={feature.value2}
                />
              ))}
               <div className="mt-8 text-center">
                    <Button onClick={() => { clearComparison(); router.push('/?tab=tools'); }}>Clear Comparison</Button>
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
