'use client';

import { auth, handleGoogleSignIn } from '@/lib/firebase';
import { signOut } from 'firebase/auth';

import { useAuth } from '@/context/authContext';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage 
} from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
    const { user } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await signOut(auth);

            router.push('/');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-[#000000] backdrop-blur-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-foreground">Attendo</span>
                    </div>

                    <div className="flex items-center gap-4">
                        {
                            user ? (
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Avatar className="cursor-pointer hover:opacity-80 transition-opacity">
                                            <AvatarImage 
                                                src={user.photoURL} 
                                                alt={user.displayName} 
                                            />
                                                <AvatarFallback>
                                                    {user.displayName?.charAt(0)}
                                                </AvatarFallback>
                                        </Avatar>
                                    </DropdownMenuTrigger>

                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem onClick={() => router.push('/dashboard')}>
                                           
                                            Dashboard
                                        </DropdownMenuItem>

                                        <DropdownMenuItem onClick={handleLogout}>
                                            Logout
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <Button 
                                    variant="default" 
                                    className="bg-blue-600 text-white hover:bg-blue-700 hover:cursor-pointer transition-colors"
                                    onClick={handleGoogleSignIn}
                                >
                                    Sign In
                                </Button>
                            )
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar