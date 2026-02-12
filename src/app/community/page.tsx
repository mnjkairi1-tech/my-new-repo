

'use client';

import React, { useState, Suspense, useMemo } from 'react';
import { ClubHeader } from '@/components/club-header';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Users, Star, Pin } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { BottomNavBar } from '@/components/bottom-nav-bar';
import { useCollection, useFirestore, useMemoFirebase, useUser } from '@/firebase';
import { collection, query, where } from 'firebase/firestore';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useUserPreferences } from '@/context/user-preferences-context';
import { cn } from '@/lib/utils';

interface Group {
    id: string;
    name: string;
    description: string;
    memberCount: number;
    avatar: string;
    isPublic: boolean;
}

function ClubCard({ club, isMember }: { club: Group; isMember: boolean }) {
    const { pinnedGroups, handlePinGroupToggle } = useUserPreferences();
    const isPinned = pinnedGroups.has(club.id);

    const handlePinClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        handlePinGroupToggle(club.id);
    };
    
    return (
        <Link href={`/community/${club.id}`} key={club.id} className="block group">
            <Card className="p-4 flex items-center gap-4 hover:bg-accent/50 transition-colors duration-200 soft-shadow bg-card/80 backdrop-blur-sm rounded-none">
                <Avatar className="h-14 w-14 border-2 border-background">
                    <AvatarImage src={`https://ui-avatars.com/api/?name=${encodeURIComponent(club.name)}&background=random&color=fff&size=128`} alt={club.name} />
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
                    <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full" onClick={handlePinClick}>
                        <Pin className={cn("w-5 h-5 text-muted-foreground/50 transition-colors", isPinned && "fill-primary text-primary")} />
                    </Button>
                </div>
            </Card>
        </Link>
    );
}


function CommunityPageContent() {
    const [searchTerm, setSearchTerm] = useState('');
    const firestore = useFirestore();
    const { user, isUserLoading } = useUser();
    const { pinnedGroups } = useUserPreferences();

    const publicGroupsQuery = useMemoFirebase(() => {
        if (!firestore || !user) return null;
        return query(collection(firestore, 'groups'), where('isPublic', '==', true));
    }, [firestore, user]);

    const { data: publicClubs, isLoading: publicClubsLoading } = useCollection<Group>(publicGroupsQuery);
    
    const userGroupMembershipsQuery = useMemoFirebase(() => {
        if (!firestore || !user) return null;
        return collection(firestore, 'users', user.uid, 'groupMemberships');
    }, [firestore, user]);
    
    const { data: userGroupMemberships, isLoading: membershipsLoading } = useCollection<{groupId: string}>(userGroupMembershipsQuery);

    const privateGroupIds = useMemo(() => {
        return userGroupMemberships?.map(m => m.groupId) || [];
    }, [userGroupMemberships]);

    const { data: privateClubsData, isLoading: privateClubsLoading } = useCollection<Group>(
      useMemoFirebase(() => {
          if (!firestore || !privateGroupIds.length) return null;
          return query(collection(firestore, 'groups'), where('__name__', 'in', privateGroupIds), where('isPublic', '==', false));
      }, [firestore, privateGroupIds])
    );

    const sortClubs = (clubs: Group[]) => {
        return clubs.sort((a, b) => {
            const aIsPinned = pinnedGroups.has(a.id);
            const bIsPinned = pinnedGroups.has(b.id);
            if (aIsPinned && !bIsPinned) return -1;
            if (!aIsPinned && bIsPinned) return 1;
            return (b.memberCount || 0) - (a.memberCount || 0);
        });
    }

    const filteredPublicClubs = useMemo(() => {
        if (!publicClubs) return [];
        let clubs = publicClubs;
        if (searchTerm) {
            clubs = clubs.filter(club => 
                club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                club.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        return sortClubs(clubs);
    }, [publicClubs, searchTerm, pinnedGroups]);
    
    const filteredPrivateClubs = useMemo(() => {
        if (!privateClubsData) return [];
        let clubs = privateClubsData;
        if (searchTerm) {
             clubs = clubs.filter(club => 
                club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                club.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        return sortClubs(clubs);
    }, [privateClubsData, searchTerm, pinnedGroups]);

    const ClubListSkeleton = () => (
        <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
                <Card key={i} className="p-4 flex items-center gap-4 bg-card/80 backdrop-blur-sm soft-shadow rounded-none">
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
    
    const isLoading = isUserLoading || (user && (publicClubsLoading || membershipsLoading || privateClubsLoading));

    return (
        <div className="bg-background text-foreground min-h-screen font-body relative flex flex-col">
            <div className="absolute inset-0 z-0 opacity-50" style={{ background: 'hsl(var(--background))' }}></div>

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

                <Tabs defaultValue="public" className="flex-grow flex flex-col min-h-0">
                    <TabsList className="grid w-full grid-cols-2 mx-4">
                        <TabsTrigger value="public">Public</TabsTrigger>
                        <TabsTrigger value="private">Private</TabsTrigger>
                    </TabsList>
                    <TabsContent value="public" className="flex-grow overflow-y-auto no-scrollbar p-4 pt-2">
                        <div className="space-y-3">
                            {isLoading ? (
                                <ClubListSkeleton />
                            ) : !user ? (
                                <div className="text-center py-16 text-muted-foreground border-2 border-dashed rounded-xl">
                                    <p className="font-semibold">Sign in to discover public clubs.</p>
                                    <Link href="/?tab=settings">
                                        <Button className="mt-4">Sign In</Button>
                                    </Link>
                                </div>
                            ) : filteredPublicClubs.length > 0 ? (
                                filteredPublicClubs.map((club) => (
                                    <ClubCard key={club.id} club={club} isMember={true} />
                                ))
                            ) : (
                                <div className="text-center py-16 text-muted-foreground border-2 border-dashed rounded-xl">
                                    <p className="font-semibold">No public clubs found</p>
                                    <p className="text-sm mt-1">Try a different search or create a new club!</p>
                                    <Link href="/community/create">
                                        <Button className="mt-4">Create a Group</Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </TabsContent>
                    <TabsContent value="private" className="flex-grow overflow-y-auto no-scrollbar p-4 pt-2">
                         <div className="space-y-3">
                            {isLoading ? (
                                <ClubListSkeleton />
                            ) : !user ? (
                                <div className="text-center py-16 text-muted-foreground border-2 border-dashed rounded-xl">
                                    <p className="font-semibold">Sign in to see your private clubs.</p>
                                    <Link href="/?tab=settings">
                                        <Button className="mt-4">Sign In</Button>
                                    </Link>
                                </div>
                            ) : filteredPrivateClubs.length > 0 ? (
                                filteredPrivateClubs.map((club) => (
                                    <ClubCard key={club.id} club={club} isMember={true} />
                                ))
                            ) : (
                                <div className="text-center py-16 text-muted-foreground border-2 border-dashed rounded-xl">
                                    <p className="font-semibold">You are not a member of any private clubs.</p>
                                    <p className="text-sm mt-1">Join one or create your own!</p>
                                     <Link href="/community/create">
                                        <Button className="mt-4">Create a Group</Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
            <Suspense fallback={null}>
                <BottomNavBar activeTab="community"/>
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
