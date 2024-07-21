import Layout from '@/app/layouts/Layout'
import Terms from '@/app/modules/Terms'
import React from 'react'

const terms = () => {
    return (
        <Layout isProtected>
            <Terms />
        </Layout>
    )
}

export default terms