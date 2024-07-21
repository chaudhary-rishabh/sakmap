import Layout from '@/app/layouts/Layout'
import Privacy from '@/app/modules/Privacy'
import React from 'react'

const privacy = () => {
    return (
        <Layout isProtected>
            <Privacy />
        </Layout>
    )
}

export default privacy