import { useAuth } from '@/context/authContext';

import { Button } from '@/components/ui/button';

const Navbar = () => {
    const { user } = useAuth();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-foreground">Attendo</span>
                    </div>

                    <div className="flex items-center gap-4">
                        {
                            user ? (
                                <span>Loading...</span>
                            ) : (
                                <Button 
                                    variant="default" 
                                    className="bg-accent text-accent-foreground hover:bg-accent/90"
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