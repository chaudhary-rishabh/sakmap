import Layout from '@/app/layouts/Layout'
import GISModule from '@/app/modules/courses/GIS'
import React from 'react'

const Gis = () => {
    return (
        <>
            <Layout isProtected>
                <GISModule />
            </Layout>
        </>
    )
}

export default Gis