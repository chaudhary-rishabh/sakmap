import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AuthContextType } from './types';

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<{ name: string } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a user fetch
        setTimeout(() => {
            const fetchedUser = { name: 'John Doe' }; // Replace with real user fetching logic
            setUser(fetchedUser);
            setLoading(false);
        }, 1000);
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
