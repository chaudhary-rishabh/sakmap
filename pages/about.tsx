import Aboutus from '@/app/modules/about/Aboutus'
import React from 'react'
import Layout from '@/app/layouts/Layout';

const about = () => {
    return (
        <Layout isProtected>
            <Aboutus />
        </Layout>
    )
}

export default about