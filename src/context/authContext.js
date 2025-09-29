'use client';

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/lib/firebase";

const authContext = createContext({ user: null });

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => setUser(user));
        
        return () => unsubscribe();
    }, []);

    return (
        <authContext.Provider value={{ user }}>
            {children}
        </authContext.Provider>
    )
}

export const useAuth = () => useContext(authContext);
