import ContactPage from '@/app/modules/ContactPage'
import React from 'react'
import HomePage from '@/app/modules/home/HomePage';
import Layout from '@/app/layouts/Layout';

const contact = () => {
    return (
        <Layout isProtected>
            <ContactPage />
        </Layout>
    )
}

export default contact
