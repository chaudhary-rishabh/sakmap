// components/Layout.tsx
import React, { ReactNode } from 'react';
import Header from '../layouts/Header';
import ProtectedHeader from '../layouts/ProtectedHeader';
import Footer from '../layouts/Footer';

interface LayoutProps {
    children: ReactNode;
    isProtected?: boolean;  // Add a prop to conditionally render headers
}

const Layout: React.FC<LayoutProps> = ({ children, isProtected = false }) => {
    return (
        <>
            {isProtected ? <ProtectedHeader /> : <Header />}
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
