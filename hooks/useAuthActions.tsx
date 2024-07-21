// hooks/useAuthActions.ts
import { supabase } from '../supabase/supabaseClient';
import { useRouter } from 'next/router';

export const useAuthActions = () => {
    const router = useRouter();

    const login = async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) {
            if (error.message === 'Email not confirmed') {
                throw new Error('Please confirm your email address before logging in.');
            }
            throw error;
        }

        return data.user;
    };

    const signup = async (email: string, password: string) => {
        const maxRetries = 5;
        let attempt = 0;
        let success = false;

        while (attempt < maxRetries && !success) {
            try {
                const { error } = await supabase.auth.signUp({ email, password });
                if (error) throw error;
                success = true;
            } catch (error: unknown) {
                if (typeof error === 'object' && error !== null && 'status' in error) {
                    const err = error as { status: number };
                    if (err.status === 429) {
                        // Too many requests error
                        const waitTime = Math.pow(2, attempt) * 1000; // Exponential backoff
                        console.warn(`Rate limit exceeded. Retrying in ${waitTime / 1000} seconds...`);
                        await new Promise(resolve => setTimeout(resolve, waitTime));
                    } else {
                        throw error;
                    }
                } else {
                    throw error;
                }
            }
            attempt++;
        }

        if (!success) {
            throw new Error('Exceeded maximum retries due to rate limit.');
        }

        // Optionally, show a message to the user to check their email
        console.log('Signup successful. Please check your email to confirm your account.');
    };

    const logout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        router.push('/');
    };

    return { login, signup, logout };
};
