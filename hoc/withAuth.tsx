// components/withAuth.tsx
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

const withAuth = (WrappedComponent: React.ComponentType) => {
    const WithAuthComponent = (props: any) => {
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

    WithAuthComponent.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return WithAuthComponent;
};

export default withAuth;
