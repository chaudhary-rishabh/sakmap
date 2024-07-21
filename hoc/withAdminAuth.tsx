import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../supabase/supabaseClient';

const withAdminAuth = (WrappedComponent: any) => {
    const WithAdminAuth = (props: any) => {
        const { user, loading } = useAuth();
        const router = useRouter();

        useEffect(() => {
            if (!loading && !user) {
                router.replace('/login');
            }
        }, [user, loading, router]);

        if (loading) {
            return <div>Loading...</div>; // or a loading spinner
        }

        if (!user) {
            return null; // or a redirect component
        }

        return <WrappedComponent {...props} />;
    };

    // Set the display name of the HOC for better debugging
    if (process.env.NODE_ENV !== 'production') {
        const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
        WithAdminAuth.displayName = `withAdminAuth(${wrappedComponentName})`;
    }

    return WithAdminAuth;
};

export default withAdminAuth;
