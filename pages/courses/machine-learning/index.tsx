import Header from '@/app/layouts/Header'
import Layout from '@/app/layouts/Layout'
import MachineLearningModule from '@/app/modules/courses/MachineLearning'
import React from 'react'

const Environment = () => {
    return (
        <>
            <Layout isProtected>
                <MachineLearningModule />
            </Layout>
        </>
    )
}

export default Environment