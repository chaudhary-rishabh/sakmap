import Layout from '@/app/layouts/Layout'
import RSModule from '@/app/modules/courses/RS'
import React from 'react'

const Environment = () => {
    return (
        <>
            <Layout isProtected>
                <RSModule />
            </Layout>
        </>
    )
}

export default Environment