// context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AuthContextType, User } from './types';
import { supabase } from '../supabase/supabaseClient';

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSession = async () => {
            const { data: sessionData, error } = await supabase.auth.getSession();
            if (error) {
                // Handle error
                console.error('Error fetching session:', error.message);
                setLoading(false);
                return;
            }
            if (sessionData) {
                // If sessionData exists, extract the user
                const sessionUser = sessionData.session?.user as User | null;
                setUser(sessionUser);
            } else {
                // If sessionData is null, set user to null
                setUser(null);
            }
            setLoading(false);
        };


        getSession();

        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            const sessionUser = session?.user as User | null;
            setUser(sessionUser);
            setLoading(false);
        });

        return () => {
            authListener?.subscription.unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
