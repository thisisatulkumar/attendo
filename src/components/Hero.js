import { Button } from "@/components/ui/button";

import { ArrowRight } from "lucide-react";

import heroBg from "@/assets/hero-bg.jpg";

import { handleGoogleSignIn } from "@/lib/firebase";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img 
                    src={heroBg.src} 
                    alt="Students in modern classroom" 
                    className="h-full w-full object-cover"
                />
                
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-zinc-950/50 to-zinc-900/40" />
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                <div className="mx-auto max-w-4xl text-center">
                    <div className="animate-fade-in">
                        <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                            Never Miss a Class,{" "}
                            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                                Track Smartly
                            </span>
                        </h1>
                    </div>
                
                    <div className="animate-slide-up">
                        <p className="mb-8 text-lg text-muted-foreground sm:text-xl lg:text-2xl">
                            Your intelligent attendance companion. Manage schedules, track presence, 
                            and maintain perfect attendance effortlessly.
                        </p>
                    </div>

                    <div className="animate-fade-in flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <Button 
                            size="lg" 
                            className="group bg-blue-600 text-white hover:bg-blue-700 transition-colors hover:cursor-pointer"
                            onClick={handleGoogleSignIn}
                        >
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-blue-600/10 blur-3xl" />
        </section>
    );
}

export default Hero