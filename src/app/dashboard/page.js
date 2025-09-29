'use client';

import React from 'react'

import { useAuth } from '@/context/authContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { auth } from '@/lib/firebase';

const Dashboard = () => {
    const router = useRouter();
    const { user } = useAuth();

    useEffect(() => {
        if (!user) {
            router.replace('/');
        }
    }, [user, router]);

    if (!user) return <p>Loading...</p>

    const handleLogout = async () => {
        try {
            await auth.signOut();

            router.replace('/');
        } catch (error) {
            console.error("Error during sign-out:", error);
        }  
    }
    
    return (
        <div>
            <img src={user.photoURL} alt={user.displayName} />
            Welcome, {user.displayName}

            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard