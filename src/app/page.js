'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/authContext";

import { auth, googleProvider } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function LandingPage() {
    const router = useRouter();
    const { user } = useAuth();
        
    useEffect(() => {
        if (user) {
            router.replace('/dashboard');
        }
    }, [user, router]);

    if (user) return <p>Loading...</p>
    
    
    
    return (
        <>
            <Hero />
            <Features />
        </>
    );
}
