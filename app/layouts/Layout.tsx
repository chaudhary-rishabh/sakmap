import React, { ReactNode } from 'react';
import Header from '../layouts/Header';
import ProtectedHeader from '../layouts/ProtectedHeader';
import Footer from '../layouts/Footer';
import { useAuth } from '@/context/AuthContext';
import { useAuthActions } from '../../hooks/useAuthActions';

interface LayoutProps {
    children: ReactNode;
    isProtected?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, isProtected = true }) => {
    const { user } = useAuth();
    const { logout } = useAuthActions();

    return (
        <>
            {user ? <ProtectedHeader logout={logout} /> : <Header />}
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
