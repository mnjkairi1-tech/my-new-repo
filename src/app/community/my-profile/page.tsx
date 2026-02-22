'use client';

import React, { Suspense, useState, useEffect } from 'react';
import { useUser, useFirestore, useCollection, useMemoFirebase, setDocumentNonBlocking, useDoc } from '@/firebase';
import { collection, query, where, Timestamp, doc } from 'firebase/firestore';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, Star, MoreVertical, Edit, Heart, History, ChevronRight, Copy, Loader2, PlusCircle } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { ClubHeader } from '@/components/club-header';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ProfileDetails } from '@/components/settings/profile-details';
import { useUserPreferences } from '@/context/user-preferences-context';
import { cn } from '@/lib/utils';
import type { Tool } from '@/lib/types';
import { useLanguage } from '@/lib/language';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { validateAndGetToolInfo } from '@/ai/flows/validate-tool-url';

interface Group {
    id: string;
    name: string;
    description: string;
    memberCount: number;
    avatar: string;
    createdAt: Timestamp;
    ownerId: string;
}

interface UserProfile {
    displayName: string;
    photoURL: string;
}

const MyProfileSkeleton = () => (
    <div className="p-6">
        <div className="flex items-center gap-4">
            <Skeleton className="h-20 w-20 rounded-none" />
            <div className="space-y-2">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-4 w-64" />
            </div>
        </div>
        <Skeleton className="h-8 w-32 mt-8 mb-4" />
        <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
                <Card key={i} className="p-4 flex items-center gap-4 rounded-none">
                    <Skeleton className="h-14 w-14 rounded-none" />
                    <div className="flex-grow space-y-2">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                    </div>
                </Card>
            ))}
        </div>
    </div>
);

function MyProfilePageContent() {
    const { user, isUserLoading } = useUser();
    const firestore = useFirestore();
    const [isEditDialogOpen, setIsEditDialogOpen] = React.useState(false);
    const { heartedTools, starredTools, recentTools, handleHeartToggle, handleStarToggle } = useUserPreferences();
    const [activeSavedTab, setActiveSavedTab] = useState('recent');
    const { t } = useLanguage();
    const { toast } = useToast();

    const [customToolUrl, setCustomToolUrl] = useState('');
    const [isSubmittingUrl, setIsSubmittingUrl] = useState(false);

    const userProfileRef = useMemoFirebase(() => firestore && user ? doc(firestore, 'user_profiles', user.uid) : null, [firestore, user]);
    const { data: userProfileData, isLoading: isProfileLoading } = useDoc<UserProfile>(userProfileRef);

    useEffect(() => {
        if (user && firestore && !isProfileLoading && !userProfileData) {
            const profileData = {
                displayName: user.displayName || user.email?.split('@')[0] || 'Anonymous',
                photoURL: user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || user.email || 'A')}&background=random&color=fff&size=128`,
            };
            setDocumentNonBlocking(userProfileRef!, profileData, { merge: true });
        }
    }, [user, firestore, userProfileData, isProfileLoading, userProfileRef]);


    const groupsRef = useMemoFirebase(() => {
        if (!firestore) return null;
        return collection(firestore, 'groups');
    }, [firestore]);

    const ownedGroupsQuery = useMemoFirebase(() => {
        if (!groupsRef || !user) return null;
        return query(groupsRef, where('ownerId', '==', user.uid));
    }, [groupsRef, user]);

    const { data: ownedClubs, isLoading: areClubsLoading } = useCollection<Group>(ownedGroupsQuery);

    const handleAddCustomTool = async () => {
        let urlToValidate = customToolUrl.trim();
        if (!urlToValidate) {
            toast({ variant: 'destructive', title: 'Invalid URL', description: 'Please enter a valid URL.' });
            return;
        }

        // Auto-add https if missing
        if (!urlToValidate.startsWith('http://') && !urlToValidate.startsWith('https://')) {
            urlToValidate = 'https://' + urlToValidate;
        }

        setIsSubmittingUrl(true);
        try {
            const url = new URL(urlToValidate);
            const validationResult = await validateAndGetToolInfo({ url: urlToValidate });

            if (validationResult.isSafe) {
                const faviconUrl = `https://www.google.com/s2/favicons?sz=128&domain=${url.hostname}`;
                const newTool: Tool = {
                    name: validationResult.toolName || url.hostname,
                    url: urlToValidate,
                    description: validationResult.toolDescription || 'User-added tool.',
                    image: faviconUrl,
                    dataAiHint: validationResult.toolName?.toLowerCase().split(' ').slice(0, 2).join(' ') || 'custom tool',
                    pricing: 'Freemium', 
                    category: 'Custom',
                };
                
                handleHeartToggle(newTool);
                
                toast({
                    title: 'Tool Added!',
                    description: `${newTool.name} has been added to your list.`,
                });
                setCustomToolUrl('');
            } else {
                toast({
                    variant: 'destructive',
                    title: 'Error',
                    description: validationResult.reason || 'This URL could not be validated.',
                });
            }
        } catch (error: any) {
             toast({
                variant: 'destructive',
                title: 'Invalid URL',
                description: 'Please enter a valid web address (e.g., example.com).',
            });
        } finally {
            setIsSubmittingUrl(false);
        }
    };

    if (isUserLoading || areClubsLoading) {
        return (
             <div className="bg-background text-foreground min-h-screen flex flex-col items-center justify-start font-body relative">
                <div className="absolute inset-0 z-0 opacity-50">
                    <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
                </div>
                <div className="relative z-10 w-full max-w-lg p-0 md:p-6 h-screen">
                     <div className="bg-card/80 backdrop-blur-3xl md:rounded-none shadow-2xl flex flex-col h-full border-t-2 border-white/50 soft-shadow">
                        <div className="p-4 border-b">
                            <ClubHeader title="My Profile" showBackButton />
                        </div>
                        <MyProfileSkeleton />
                    </div>
                </div>
            </div>
        );
    }
    
    if (!user) {
        return (
            <div className="bg-background text-foreground min-h-screen flex flex-col items-center justify-start font-body relative">
                 <div className="absolute inset-0 z-0 opacity-50">
                    <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
                </div>
                <div className="relative z-10 w-full max-w-lg p-0 md:p-6 h-screen">
                    <div className="bg-card/80 backdrop-blur-3xl md:rounded-none shadow-2xl flex flex-col h-full border-t-2 border-white/50 soft-shadow">
                         <div className="p-4 border-b">
                            <ClubHeader title="My Profile" showBackButton />
                        </div>
                        <div className="flex flex-col items-center justify-center flex-grow text-center p-6">
                            <h2 className="text-xl font-semibold">Please sign in to view your profile.</h2>
                            <Link href="/?tab=settings" className='mt-4'>
                                <Button className="rounded-none">Sign In</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-background text-foreground min-h-screen flex flex-col items-center justify-start font-body relative animate-fade-in-up">
            <div className="absolute inset-0 z-0 opacity-50">
                <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
            </div>

            <div className="relative z-10 w-full max-w-lg p-0 md:p-6 h-screen">
                <div className="bg-card/80 backdrop-blur-3xl md:rounded-none shadow-2xl flex flex-col h-full border-t-2 border-white/50 soft-shadow">
                    <div className="p-4 border-b flex justify-between items-center">
                        <ClubHeader title="My Profile" showBackButton />
                         <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="rounded-none h-12 w-12">
                                        <MoreVertical className="w-6 h-6"/>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DialogTrigger asChild>
                                        <DropdownMenuItem>
                                            <Edit className="mr-2 h-4 w-4" />
                                            <span>Edit Profile</span>
                                        </DropdownMenuItem>
                                    </DialogTrigger>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <DialogContent className="rounded-none">
                                <DialogHeader>
                                <DialogTitle>Edit Profile</DialogTitle>
                                </DialogHeader>
                                <ProfileDetails />
                            </DialogContent>
                        </Dialog>
                    </div>

                    <main className="flex-grow overflow-y-auto no-scrollbar p-6 pb-24">
                        <div className="flex items-center gap-4 mb-8">
                            <Avatar className="h-20 w-20 border-4 border-white shadow-lg rounded-none">
                                <AvatarImage src={user.photoURL || ''} alt={user.displayName || 'User'} className="rounded-none" />
                                <AvatarFallback className="rounded-none">{(user.displayName || user.email || 'U').charAt(0).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <div>
                                <h1 className="text-2xl font-bold">{user.displayName || 'Community Member'}</h1>
                                <div className="flex items-center gap-2 mt-1">
                                    <p className="text-muted-foreground">{user.email}</p>
                                    <Link href="/avatar-editor">
                                        <Button variant="outline" size="sm" className="text-xs h-7 rounded-none">Change Avatar</Button>
                                    </Link>
                                </div>
                                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                                    <span className="font-mono text-xs">UID: {user.uid.substring(0, 12)}...</span>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="w-6 h-6 rounded-none"
                                        onClick={() => {
                                            navigator.clipboard.writeText(user.uid);
                                            toast({ title: 'User ID Copied!' });
                                        }}
                                    >
                                        <Copy className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                         <div className="my-6">
                            <Label htmlFor="custom-tool-url" className="text-muted-foreground text-sm px-1">Have a favorite tool? Add it by link.</Label>
                            <div className="flex gap-2 items-center mt-1">
                                <Input 
                                    id="custom-tool-url"
                                    placeholder="Put link of an AI tool" 
                                    value={customToolUrl}
                                    onChange={(e) => setCustomToolUrl(e.target.value)}
                                    className="h-12 bg-secondary rounded-none"
                                    disabled={isSubmittingUrl}
                                />
                                <Button onClick={handleAddCustomTool} className="h-12 w-12 flex-shrink-0 rounded-none" size="icon" disabled={isSubmittingUrl}>
                                    {isSubmittingUrl ? <Loader2 className="w-5 h-5 animate-spin"/> : <Heart className="w-5 h-5"/>}
                                </Button>
                            </div>
                        </div>

                        <section className="mt-6 mb-8">
                            <div className="flex justify-center items-center gap-8 my-4">
                                <div className="flex flex-col items-center gap-2">
                                    <Button variant={activeSavedTab === 'heart' ? 'secondary' : 'ghost'} size="icon" onClick={() => setActiveSavedTab('heart')} className="w-20 h-16 rounded-none bg-pink-100/50 text-pink-500 shadow-lg soft-shadow"><Heart className="w-7 h-7"/></Button>
                                    <span className="text-sm font-medium text-muted-foreground">Hearted</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <Button variant={activeSavedTab === 'recent' ? 'secondary' : 'ghost'} size="icon" onClick={() => setActiveSavedTab('recent')} className="w-24 h-20 rounded-none bg-blue-100/50 text-blue-500 shadow-lg soft-shadow"><History className="w-9 h-9"/></Button>
                                    <span className="text-sm font-medium text-muted-foreground">Recent</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <Button variant={activeSavedTab === 'star' ? 'secondary' : 'ghost'} size="icon" onClick={() => setActiveSavedTab('star')} className="w-20 h-16 rounded-none bg-yellow-100/50 text-yellow-500 shadow-lg soft-shadow"><Star className="w-7 h-7"/></Button>
                                    <span className="text-sm font-medium text-muted-foreground">Starred</span>
                                </div>
                            </div>
                            
                            {activeSavedTab === 'recent' && (
                                 <div className="mt-4">
                                    {recentTools.length > 0 ? (
                                        <div className="space-y-3">
                                        {recentTools.map((tool, index) => (
                                            <a href={tool.url} target="_blank" rel="noopener noreferrer" key={`${tool.name}-${index}`}>
                                                <Card className="p-3 flex items-center gap-4 bg-card border-none rounded-none soft-shadow hover:bg-accent/50 transition-colors">
                                                    {tool.image && <Image src={tool.image} alt={tool.name} width="56" height="56" className="rounded-none" data-ai-hint={tool.dataAiHint} unoptimized />}
                                                    <div className="flex-grow">
                                                        <h5 className="font-semibold text-base">{tool.name}</h5>
                                                        <p className="text-sm text-muted-foreground">{tool.category}</p>
                                                    </div>
                                                    <Button variant="ghost" size="icon" className="text-muted-foreground rounded-none w-10 h-10">
                                                        <ChevronRight />
                                                    </Button>
                                                </Card>
                                            </a>
                                        ))}
                                        </div>
                                    ) : (
                                        <div className="text-center py-10 text-muted-foreground">
                                            <History className="mx-auto w-10 h-10" />
                                            <p className="mt-4 text-base">{t('home.recents.empty')}</p>
                                            <p className="text-sm">{t('home.recents.emptyDescription')}</p>
                                        </div>
                                    )}
                                </div>
                            )}
                            
                            {activeSavedTab === 'heart' && (
                                <div className="mt-4">
                                {heartedTools.length > 0 ? (
                                    <div className="space-y-3">
                                    {heartedTools.map((tool, index) => (
                                         <a href={tool.url} target="_blank" rel="noopener noreferrer" key={`${tool.name}-${index}`}>
                                            <Card className="p-3 flex items-center gap-4 bg-card border-none rounded-none soft-shadow hover:bg-accent/50 transition-colors">
                                                {tool.image && <Image src={tool.image} alt={tool.name} width="56" height="56" className="rounded-none" data-ai-hint={tool.dataAiHint} unoptimized />}
                                                <div className="flex-grow">
                                                    <h5 className="font-semibold text-base">{tool.name}</h5>
                                                    <p className="text-sm text-muted-foreground">{tool.category}</p>
                                                </div>
                                                <Button variant="ghost" size="icon" className="text-red-500 rounded-none w-10 h-10" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleHeartToggle(tool as Tool); }}>
                                                    <Heart className="fill-current"/>
                                                </Button>
                                            </Card>
                                        </a>
                                    ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-10 text-muted-foreground">
                                        <Heart className="mx-auto w-10 h-10" />
                                        <p className="mt-4 text-base">No hearted tools yet.</p>
                                        <p className="text-sm">Tools you heart will appear here.</p>
                                    </div>
                                )}
                                </div>
                            )}

                            {activeSavedTab === 'star' && (
                                 <div className="mt-4">
                                    {starredTools.length > 0 ? (
                                        <div className="space-y-3">
                                        {starredTools.map((tool, index) => (
                                            <a href={tool.url} target="_blank" rel="noopener noreferrer" key={`${tool.name}-${index}`}>
                                                <Card className="p-3 flex items-center gap-4 bg-card border-none rounded-none soft-shadow hover:bg-accent/50 transition-colors">
                                                    {tool.image && <Image src={tool.image} alt={tool.name} width="56" height="56" className="rounded-none" data-ai-hint={tool.dataAiHint} unoptimized />}
                                                    <div className="flex-grow">
                                                        <h5 className="font-semibold text-base">{tool.name}</h5>
                                                        <p className="text-sm text-muted-foreground">{tool.category}</p>
                                                    </div>
                                                    <Button variant="ghost" size="icon" className="text-yellow-400 rounded-none w-10 h-10" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleStarToggle(tool as Tool); }}>
                                                        <Star className="fill-current"/>
                                                    </Button>
                                                </Card>
                                            </a>
                                        ))}
                                        </div>
                                    ) : (
                                        <div className="text-center py-10 text-muted-foreground">
                                            <Star className="mx-auto w-10 h-10" />
                                            <p className="mt-4 text-base">No starred tools yet.</p>
                                            <p className="text-sm">Tools you star will appear here.</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </section>


                        <h2 className="text-xl font-semibold mb-4">My Created Groups</h2>
                        
                        <div className="space-y-3">
                            {ownedClubs && ownedClubs.length > 0 ? (
                                ownedClubs.map((club) => (
                                    <Link href={`/community/${club.id}`} key={club.id} className="block group">
                                        <Card className="p-4 flex items-center gap-4 hover:bg-accent/50 transition-colors duration-200 soft-shadow rounded-none">
                                            <Avatar className="h-14 w-14 border-2 border-white rounded-none">
                                                <AvatarImage src={`https://ui-avatars.com/api/?name=${encodeURIComponent(club.name)}&background=random&color=fff&size=128`} alt={club.name} className="rounded-none" />
                                                <AvatarFallback className="rounded-none">{club.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex-grow overflow-hidden">
                                                <h3 className="font-semibold truncate text-lg">{club.name}</h3>
                                                <p className="text-sm text-muted-foreground truncate">{club.description}</p>
                                            </div>
                                            <div className="flex items-center text-sm text-muted-foreground">
                                                <Users className="w-4 h-4 mr-1" />
                                                <span>{club.memberCount}</span>
                                            </div>
                                        </Card>
                                    </Link>
                                ))
                            ) : (
                                <div className="text-center py-16 text-muted-foreground border-2 border-dashed rounded-none">
                                    <p className="font-semibold">You haven't created any groups yet.</p>
                                    <p className="text-sm mt-1">Why not start a new community?</p>
                                    <Link href="/community/create">
                                        <Button className="mt-4 rounded-none">Create a Group</Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default function MyProfilePage() {
    return (
        <Suspense fallback={<MyProfileSkeleton />}>
            <MyProfilePageContent />
        </Suspense>
    )
}
