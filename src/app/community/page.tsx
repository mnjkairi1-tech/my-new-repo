
'use client';

import React, { useState, Suspense } from 'react';
import { ClubHeader } from '@/components/club-header';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Users, Star } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { BottomNavBar } from '@/components/bottom-nav-bar';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import { getCloudinaryUrl } from '@/lib/cloudinary';

interface Group {
    id: string;
    name: string;
    description: string;
    memberCount: number;
    avatar: string;
}

function CommunityPageContent() {
    const [searchTerm, setSearchTerm] = useState('');
    const firestore = useFirestore();

    const groupsQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        return query(collection(firestore, 'groups'), orderBy('memberCount', 'desc'));
    }, [firestore]);

    const { data: clubs, isLoading } } = useCollection<Group>(groupsQuery);

    const filteredClubs = React.useMemo(() => {
        if (!clubs) return [];
        if (!searchTerm) return clubs;
        return clubs.filter(club => 
            club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            club.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [clubs, searchTerm]);

    const ClubListSkeleton = () => (
        <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
                <Card key={i} className="p-4 flex items-center gap-4 bg-card/80 backdrop-blur-sm soft-shadow">
                    <Skeleton className="h-14 w-14 rounded-full" />
                    <div className="flex-grow space-y-2">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                    </div>
                    <div className="flex flex-col items-center shrink-0 space-y-2">
                        <Skeleton className="h-4 w-6" />
                        <Skeleton className="h-5 w-5" />
                    </div>
                </Card>
            ))}
        </div>
    );

  return (
    <div className="bg-background text-foreground min-h-screen font-body relative flex flex-col">
       <div className="absolute inset-0 z-0 opacity-50" style={{
         background: 'hsl(var(--background))',
       }}>
      </div>

      <div className="relative z-10 w-full max-w-lg mx-auto flex flex-col flex-grow">
          <div className="p-4 border-b flex-shrink-0 bg-card/80 backdrop-blur-sm">
              <ClubHeader title="Community" showCreateButton showProfileButton showBackButton />
          </div>

          <div className="p-4 flex-shrink-0">
              <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                      placeholder="Search clubs..."
                      className="pl-12 bg-card rounded-full h-12 border-border soft-shadow"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                  />
              </div>
          </div>

          <main className="flex-grow overflow-y-auto no-scrollbar p-4 pt-0 space-y-3 pb-24">
            {isLoading ? (
                <ClubListSkeleton />
            ) : filteredClubs.length > 0 ? (
              filteredClubs.map((club) => (
                  <Link href={`/community/${club.id}`} key={club.id} className="block group">
                  <Card className="p-4 flex items-center gap-4 hover:bg-accent/50 transition-colors duration-200 soft-shadow bg-card/80 backdrop-blur-sm">
                      <Avatar className="h-14 w-14 border-2 border-background">
                      <AvatarImage src={getCloudinaryUrl(club.avatar)} alt={club.name} />
                      <AvatarFallback>{club.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-grow overflow-hidden">
                          <h2 className="font-semibold truncate text-lg">{club.name}</h2>
                          <p className="text-sm text-muted-foreground truncate">{club.description}</p>
                      </div>
                      <div className="flex flex-col items-center shrink-0 gap-1">
                          <div className="flex items-center text-sm text-muted-foreground">
                              <Users className="w-4 h-4 mr-1" />
                              <span>{club.memberCount > 999 ? `${(club.memberCount/1000).toFixed(1)}k` : club.memberCount}</span>
                          </div>
                          <Star className="w-5 h-5 text-muted-foreground/50" />
                      </div>
                  </Card>
                  </Link>
              ))
            ) : (
              <div className="text-center py-16 text-muted-foreground border-2 border-dashed rounded-2xl">
                  <p className="font-semibold">No clubs found</p>
                  <p className="text-sm mt-1">Try a different search or create a new club!</p>
                  <Link href="/community/create">
                      <Button className="mt-4">Create a Group</Button>
                  </Link>
              </div>
            )}
          </main>
          
      </div>
      <Suspense fallback={null}>
        <BottomNavBar />
      </Suspense>
    </div>
  );
}

export default function CommunityPage() {
    return (
        <Suspense>
            <CommunityPageContent />
        </Suspense>
    )
}
