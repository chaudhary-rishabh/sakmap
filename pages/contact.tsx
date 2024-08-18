import ContactPage from '@/app/modules/ContactPage'
import React from 'react'
import HomePage from '@/app/modules/home/HomePage';
import Layout from '@/app/layouts/Layout';
import Head from 'next/head';
const contact = () => {
    return (
        <Layout isProtected>
            <Head>
                <title>Contact Us | SAKMAP</title>
                <meta name="description" content="contact us at Sakmap and what we do." />
                <meta name="keywords" content="contact Us, SAKMAP, What We Do" />
                <meta property="og:title" content="contact Us | sakmap.com" />
                <meta property="og:description" content="contact us at Sakmap and what we do." />
                <meta property="og:url" content="https://sakmap.com/about" />
                <link rel="canonical" href="https://sakmap.com/about" />
            </Head>
            <ContactPage />
        </Layout>
    )
}

export default contact
