import Header from '@/app/layouts/Header'
import Layout from '@/app/layouts/Layout'
import EnvironmentModule from '@/app/modules/courses/Environment'
import React from 'react'

const Environment = () => {
    return (
        <>
            <Layout isProtected>
                <EnvironmentModule />
            </Layout>
        </>
    )
}

export default Environment