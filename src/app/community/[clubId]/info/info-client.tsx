
'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useFirestore, useDoc, useCollection, useUser, useMemoFirebase } from '@/firebase';
import { doc, collection, query, orderBy, Timestamp, addDoc, serverTimestamp, getDoc, setDoc, increment, updateDoc, deleteDoc } from 'firebase/firestore';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Bell, Search, Users, Image as ImageIcon, Link2, FileText, Lock, BadgeCheck, Phone, MoreVertical, Video, Star, BellOff, Edit, UserPlus, Plus, ChevronRight, Loader2, User as UserIcon, Trash2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"

import { Input } from '@/components/ui/input';
import { allToolsServer } from '@/lib/all-tools-server';
import type { Tool } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { addDocumentNonBlocking, setDocumentNonBlocking, updateDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { validateAndGetToolInfo } from '@/ai/flows/validate-tool-url';

interface Group {
    id: string;
    name: string;
    description: string;
    memberCount: number;
    avatar: string;
    isPublic: boolean;
    ownerId: string;
    allowMembersToAddMembers?: boolean;
}

interface GroupMember {
    userId: string;
    joinedAt: Timestamp;
    role: 'member' | 'admin' | 'owner';
    displayName?: string;
    photoURL?: string;
}

interface GroupTool {
    id?: string;
    toolName: string;
    toolUrl: string;
    toolDescription?: string;
    toolImage?: string;
    addedBy: string;
    addedAt: Timestamp;
    upvotes: number;
}

interface UserProfile {
    displayName: string;
    photoURL: string;
}

function AddMemberDialog({ clubId, groupRef }: { clubId: string, groupRef: any }) {
    const firestore = useFirestore();
    const { user } = useUser();
    const { toast } = useToast();
    const [uidToSearch, setUidToSearch] = useState('');
    const [searchedUid, setSearchedUid] = useState<string | null>(null);
    const [searchError, setSearchError] = useState<string | null>(null);
    const [isAddingMember, setIsAddingMember] = useState(false);

    const searchedUserRef = useMemoFirebase(() => {
        if (!firestore || !searchedUid) return null;
        return doc(firestore, 'user_profiles', searchedUid);
    }, [firestore, searchedUid]);

    const { data: searchedUser, isLoading: isSearchingUser, error: searchHookError } = useDoc<UserProfile>(searchedUserRef);

    useEffect(() => {
        if (searchedUid && !isSearchingUser && !searchedUser && !searchHookError) {
            setSearchError('User not found.');
        } else {
            setSearchError(null);
        }
    }, [searchedUid, isSearchingUser, searchedUser, searchHookError]);

    const handleSearchUser = () => {
        if (uidToSearch.trim()) {
            setSearchedUid(uidToSearch.trim());
        }
    };

    const handleAddMember = async () => {
        if (!user || !firestore || !clubId || !searchedUid || !searchedUser) return;

        setIsAddingMember(true);

        const memberRef = doc(firestore, 'groups', clubId, 'members', searchedUid);
        const memberData = {
            userId: searchedUid,
            joinedAt: serverTimestamp(),
            role: 'member',
            displayName: searchedUser.displayName,
            photoURL: searchedUser.photoURL,
        };

        const userGroupMembershipRef = doc(firestore, 'users', searchedUid, 'groupMemberships', clubId);

        try {
            await setDoc(memberRef, memberData, { merge: false });
            await setDoc(userGroupMembershipRef, { groupId: clubId }, { merge: false });
            await updateDoc(groupRef, { memberCount: increment(1) });
            
            toast({
                title: 'Member Added!',
                description: `${searchedUser.displayName} has been added to the club.`,
            });
            setUidToSearch('');
            setSearchedUid(null);

        } catch (error: any) {
             toast({
                variant: 'destructive',
                title: 'Error adding member',
                description: error.message || 'Something went wrong. Please try again.',
            });
        } finally {
            setIsAddingMember(false);
        }
    };

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Add a New Member</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
                <div className="flex gap-2">
                    <Input
                        placeholder="Enter User ID"
                        value={uidToSearch}
                        onChange={(e) => setUidToSearch(e.target.value)}
                    />
                    <Button onClick={handleSearchUser} disabled={isSearchingUser}>
                        {isSearchingUser ? <Loader2 className="animate-spin" /> : 'Search'}
                    </Button>
                </div>
                {isSearchingUser && <div className="text-center p-4"><Loader2 className="animate-spin mx-auto"/></div>}
                {searchError && <p className="text-sm text-destructive">{searchError}</p>}
                {searchedUser && searchedUid && (
                    <Card className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src={searchedUser.photoURL} alt={searchedUser.displayName} />
                                <AvatarFallback>{searchedUser.displayName?.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <p className="font-semibold">{searchedUser.displayName}</p>
                        </div>
                        <Button onClick={handleAddMember} disabled={isAddingMember}>
                            {isAddingMember ? <Loader2 className="animate-spin" /> : <UserPlus className="w-4 h-4 mr-2" />}
                            Add
                        </Button>
                    </Card>
                )}
            </div>
            <DialogFooter>
                <DialogClose asChild>
                    <Button variant="outline">Close</Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    );
}

export default function GroupInfoPageClient({ clubId }: { clubId: string }) {
    const router = useRouter();
    const firestore = useFirestore();
    const { user } = useUser();
    const { toast } = useToast();
    const [searchTerm, setSearchTerm] = useState('');
    const [customToolUrl, setCustomToolUrl] = useState('');
    const [isAddToolOpen, setIsAddToolOpen] = useState(false);
    const [isAddMemberOpen, setIsAddMemberOpen] = useState(false);
    const [isSubmittingUrl, setIsSubmittingUrl] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);


    const groupRef = useMemoFirebase(() => {
        if (!firestore) return null;
        return doc(firestore, 'groups', clubId);
    }, [firestore, clubId]);
    const { data: clubData, isLoading: groupLoading } = useDoc<Group>(groupRef);

    const membersQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        return query(collection(firestore, 'groups', clubId, 'members'), orderBy('role'));
    }, [firestore, clubId]);
    const { data: members, isLoading: membersLoading } = useCollection<GroupMember>(membersQuery);

    const toolsRef = useMemoFirebase(() => {
        if (!firestore) return null;
        return collection(firestore, 'groups', clubId, 'tools');
    }, [firestore, clubId]);
    const toolsQuery = useMemoFirebase(() => {
        if (!toolsRef) return null;
        return query(toolsRef, orderBy('addedAt', 'desc'));
    }, [toolsRef]);
    const { data: groupTools, isLoading: toolsLoading } = useCollection<GroupTool>(toolsQuery);

    const handleBack = () => {
        router.back();
    };

    const handleDeleteGroup = async () => {
        if (!user || !clubData || user.uid !== clubData.ownerId || !groupRef) {
            toast({ variant: 'destructive', title: 'Permission Denied', description: 'Only the group owner can delete this group.' });
            return;
        }

        setIsDeleting(true);
        try {
            await deleteDoc(groupRef);
            toast({ title: 'Group Deleted', description: `"${clubData.name}" has been permanently deleted.` });
            
            setTimeout(() => {
                router.push('/community');
            }, 1000);

        } catch (error: any) {
            console.error("Error deleting group:", error);
            toast({ variant: 'destructive', title: 'Error', description: 'Could not delete the group. Please try again.' });
            setIsDeleting(false);
        }
    };

    const filteredTools = useMemo(() => {
        if (!searchTerm) {
            return allToolsServer;
        }
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return allToolsServer
            .filter(tool => 
                tool.name.toLowerCase().includes(lowerCaseSearchTerm) ||
                (tool.description && tool.description.toLowerCase().includes(lowerCaseSearchTerm)) ||
                (tool.category && tool.category.toLowerCase().includes(lowerCaseSearchTerm))
            )
            .slice(0, 50); // Limit results for performance
    }, [searchTerm]);

    const handleAddTool = async (tool: Pick<Tool, 'name'|'url'|'description'|'image'>) => {
        if (!user || !firestore || !toolsRef) return;

        const newToolData = {
            toolName: tool.name,
            toolUrl: tool.url,
            toolDescription: tool.description || '',
            toolImage: tool.image || '',
            addedBy: user.uid,
            addedAt: serverTimestamp(),
            upvotes: 0,
        };

        addDocumentNonBlocking(toolsRef, newToolData);
        toast({
            title: "Tool Added!",
            description: `${tool.name} has been added to the club.`,
        });
        setIsAddToolOpen(false); // Close dialog on success
    };
    
    const handleAddCustomTool = async () => {
        if (!customToolUrl.trim()) {
            toast({ variant: 'destructive', title: 'Invalid URL', description: 'Please enter a valid URL.' });
            return;
        }
    
        setIsSubmittingUrl(true);
        try {
            // Basic client-side validation first
            const url = new URL(customToolUrl);
    
            const validationResult = await validateAndGetToolInfo({ url: customToolUrl });
    
            if (validationResult.isAiTool && validationResult.isSafe) {
                const faviconUrl = `https://www.google.com/s2/favicons?sz=128&domain=${url.hostname}`;
                await handleAddTool({
                    name: validationResult.toolName || url.hostname,
                    url: customToolUrl,
                    description: validationResult.toolDescription || 'User-added AI tool.',
                    image: faviconUrl,
                });
                setCustomToolUrl(''); // Clear on success
            } else {
                toast({
                    variant: 'destructive',
                    title: 'Validation Failed',
                    description: validationResult.reason || 'This does not appear to be a valid AI tool.',
                });
            }
        } catch (error: any) {
             toast({
                variant: 'destructive',
                title: 'Error',
                description: error.message.includes('Invalid URL') ? 'Please enter a valid URL format (e.g., https://example.com).' : (error.message || 'An unexpected error occurred.'),
            });
        } finally {
            setIsSubmittingUrl(false);
        }
    };


    const InfoPageSkeleton = () => (
        <div className="flex flex-col">
            <div className="relative h-72 bg-muted">
                <Skeleton className="h-full w-full" />
            </div>
            <div className="p-4 space-y-4">
                <Skeleton className="h-8 w-3/4" />
                <div className="flex justify-around">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                            <Skeleton className="h-10 w-10 rounded-full" />
                            <Skeleton className="h-4 w-12" />
                        </div>
                    ))}
                </div>
                 <Skeleton className="h-20 w-full" />
                 <Skeleton className="h-20 w-full" />
                 <Skeleton className="h-20 w-full" />
            </div>
        </div>
    );

    if (groupLoading) {
        return (
            <div className="bg-background min-h-screen">
                <InfoPageSkeleton />
            </div>
        );
    }
    
    return (
        <div className="bg-background min-h-screen font-body">
            <div className="relative">
                <div className="relative h-72">
                    <Image
                        src={clubData?.avatar || "https://picsum.photos/seed/default-group/800/600"}
                        alt={clubData?.name || "Group"}
                        fill
                        className="object-cover bg-muted"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <Button variant="ghost" size="icon" className="absolute top-4 left-4 w-12 h-12 rounded-full bg-black/20 text-white backdrop-blur-sm" onClick={handleBack}>
                        <ArrowLeft />
                    </Button>
                    <div className="absolute top-4 right-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-black/20 text-white backdrop-blur-sm">
                                    <MoreVertical />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                    <Edit className="mr-2 h-4 w-4" />
                                    <span>Edit Group</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem onSelect={() => setIsAddMemberOpen(true)}>
                                    <UserPlus className="mr-2 h-4 w-4" />
                                    <span>Add Members</span>
                                </DropdownMenuItem>
                                {user?.uid === clubData?.ownerId && (
                                    <>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem
                                            onSelect={() => setIsDeleteDialogOpen(true)}
                                            className="text-destructive focus:bg-destructive/10 focus:text-destructive"
                                        >
                                            <Trash2 className="mr-2 h-4 w-4" />
                                            <span>Delete Group</span>
                                        </DropdownMenuItem>
                                    </>
                                )}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Dialog open={isAddMemberOpen} onOpenChange={setIsAddMemberOpen}>
                           <AddMemberDialog clubId={clubId} groupRef={groupRef} />
                        </Dialog>

                        <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will permanently delete the
                                        "{clubData?.name}" group and all of its data.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
                                    <AlertDialogAction
                                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                        onClick={handleDeleteGroup}
                                        disabled={isDeleting}
                                    >
                                        {isDeleting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Deleting...</> : 'Delete'}
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
                <div className="p-4 bg-background rounded-t-3xl -mt-6 relative z-10">
                    <h1 className="text-3xl font-bold">{clubData?.name}</h1>
                    <p className="text-muted-foreground">Active</p>

                    <div className="flex justify-around my-6">
                        <div className="flex flex-col items-center gap-1 text-primary">
                            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-primary/10"><Users /></Button>
                            <span className="text-xs">Community</span>
                        </div>
                         <div className="flex flex-col items-center gap-1 text-muted-foreground">
                            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-secondary"><Search/></Button>
                            <span className="text-xs">Search</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-muted-foreground">
                            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-secondary"><BellOff/></Button>
                            <span className="text-xs">Mute</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Card className="p-4 rounded-2xl bg-card/80">
                            <p className="text-muted-foreground text-sm">About</p>
                            <p className="font-semibold">{clubData?.description}</p>
                        </Card>
                        
                        <Dialog open={isAddToolOpen} onOpenChange={setIsAddToolOpen}>
                            <DialogTrigger asChild>
                                <Card className="p-4 rounded-2xl bg-card/80 cursor-pointer hover:bg-accent/50">
                                    <h3 className="text-muted-foreground font-semibold mb-2">Add AI Tools</h3>
                                    <p className="text-sm text-muted-foreground mb-4">Share your favorite AI tools with the community.</p>
                                    <Button className="w-full">
                                        <Plus className="mr-2 h-4 w-4"/>
                                        Add Tool
                                    </Button>
                                </Card>
                            </DialogTrigger>
                            <DialogContent className="max-w-sm h-[80vh] flex flex-col">
                                <DialogHeader>
                                    <DialogTitle>Add a Tool</DialogTitle>
                                </DialogHeader>
                                <div className="flex gap-2 items-center border-b pb-4">
                                    <Input 
                                        placeholder="Put your AI web link" 
                                        value={customToolUrl}
                                        onChange={(e) => setCustomToolUrl(e.target.value)}
                                        className="h-10"
                                        disabled={isSubmittingUrl}
                                    />
                                    <Button onClick={handleAddCustomTool} className="h-10" disabled={isSubmittingUrl}>
                                        {isSubmittingUrl ? <Loader2 className="w-4 h-4 animate-spin"/> : 'Add'}
                                    </Button>
                                </div>
                                <div className="relative mt-4">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"/>
                                    <Input placeholder="Search tools..." className="pl-10" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
                                </div>
                                <div className="flex-grow overflow-y-auto -mx-6 px-6">
                                    <div className='space-y-2 py-4'>
                                        {filteredTools.map(tool => (
                                            <div key={tool.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent">
                                                <Image src={tool.image} alt={tool.name} width="40" height="40" className="rounded-md" unoptimized />
                                                <div className="flex-grow">
                                                    <p className="font-semibold">{tool.name}</p>
                                                </div>
                                                <Button size="sm" onClick={() => handleAddTool(tool as Tool)}>Add</Button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                        
                        <div className='bg-card/80 rounded-2xl'>
                            <div className="p-4">
                                <h3 className="text-muted-foreground font-semibold mb-2">Media, links, and docs</h3>
                                <div className="grid grid-cols-4 gap-2 mt-2">
                                    <Skeleton className="w-full aspect-square rounded-lg" />
                                    <Skeleton className="w-full aspect-square rounded-lg" />
                                    <Skeleton className="w-full aspect-square rounded-lg" />
                                    <Skeleton className="w-full aspect-square rounded-lg bg-secondary flex items-center justify-center text-primary font-bold">11+</Skeleton>
                                </div>
                            </div>
                            <Separator />
                             <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-accent/50">
                               <div className='flex items-center gap-4'>
                                 <Star className="w-5 h-5 text-muted-foreground"/>
                                 <span>Starred Messages</span>
                               </div>
                               <ChevronRight className="w-5 h-5 text-muted-foreground"/>
                            </div>
                            <Separator/>
                             <div className="flex items-center justify-between p-4">
                               <div className='flex items-center gap-4'>
                                 <Bell className="w-5 h-5 text-muted-foreground"/>
                                 <span>Notifications</span>
                               </div>
                               <span className="text-muted-foreground">On</span>
                            </div>
                        </div>

                         <div className='bg-card/80 rounded-2xl p-4'>
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-muted-foreground font-semibold">{clubData?.memberCount || 0} members</h3>
                                <Button variant="ghost" size="icon"><Search/></Button>
                            </div>
                            <div className="space-y-4">
                                {membersLoading ? <MemberListSkeleton /> : members?.map((member) => (
                                    <div key={member.userId} className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <Avatar className='h-12 w-12'>
                                                <AvatarImage src={member.photoURL ?? undefined} />
                                                <AvatarFallback>{member.displayName?.charAt(0) || 'U'}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-semibold">{member.userId === user?.uid ? 'You' : member.displayName || 'Community Member'}</p>
                                                {member.role === 'owner' && <p className='text-xs text-muted-foreground'>Group Creator</p>}
                                            </div>
                                        </div>
                                        {member.role === 'owner' && <BadgeCheck className='text-green-500' />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const MemberListSkeleton = () => (
    <div className='space-y-4'>
        {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="flex-grow space-y-2">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-3 w-1/2" />
                </div>
            </div>
        ))}
    </div>
);






