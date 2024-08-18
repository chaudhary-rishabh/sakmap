import Aboutus from '@/app/modules/about/Aboutus'
import React from 'react'
import Layout from '@/app/layouts/Layout';
import Head from 'next/head';

const About = () => {
    return (
        <Layout isProtected>
            <Head>
                <title>About Us | SAKMAP</title>
                <meta name="description" content="Learn more about Sakmap and what we do." />
                <meta name="keywords" content="About Us, SAKMAP, What We Do" />
                <meta property="og:title" content="About Us | sakmap.com" />
                <meta property="og:description" content="Learn more about Sakmap and what we do." />
                <meta property="og:url" content="https://sakmap.com/about" />
                <link rel="canonical" href="https://sakmap.com/about" />
            </Head>
            <Aboutus />
        </Layout>
    )
}

export default About