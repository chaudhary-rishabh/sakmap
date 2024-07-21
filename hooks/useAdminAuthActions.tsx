import { supabase } from '../supabase/supabaseClient';
import { useRouter } from 'next/router';

export const useAdminAuthActions = () => {
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

    const logout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        router.push('/admin/wicmaoiessesac');
    };

    return { login, logout };
};
