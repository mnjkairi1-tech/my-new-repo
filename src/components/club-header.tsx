'use client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Plus } from 'lucide-react';
import { useUser } from '@/firebase/auth/use-user';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const ClubHeader = ({ title, showCreateButton, showProfileButton, showBackButton }: { title: string, showCreateButton?: boolean, showProfileButton?: boolean, showBackButton?: boolean }) => {
    const router = useRouter();
    const { user } = useUser();
    return (
        <div className="flex items-center justify-between h-12">
            <div className='flex items-center gap-1'>
                {showBackButton && <Button variant="ghost" size="icon" className="rounded-full w-12 h-12" onClick={() => router.back()}><ArrowLeft /></Button>}
                <h1 className="text-xl font-bold">{title}</h1>
            </div>
            <div className="flex items-center gap-2">
                {showProfileButton && user && (
                    <Link href="/community/my-profile">
                        <Avatar className="h-10 w-10 cursor-pointer">
                            <AvatarImage src={user.photoURL ?? undefined} />
                            <AvatarFallback>{(user.displayName || user.email || 'U').charAt(0).toUpperCase()}</AvatarFallback>
                        </Avatar>
                    </Link>
                )}
                {showCreateButton && <Button asChild className="rounded-full font-semibold h-10"><Link href="/community/create"><Plus className="w-4 h-4 mr-1"/>Create</Link></Button>}
            </div>
        </div>
    );
};
