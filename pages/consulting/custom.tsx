import ConsultingPage from '@/app/modules/ConsultingPage'
import React from 'react'
import Layout from '@/app/layouts/Layout'

const custom = () => {
    return (
        <Layout isProtected>
            <ConsultingPage />
        </Layout>
    )
}

export default custom