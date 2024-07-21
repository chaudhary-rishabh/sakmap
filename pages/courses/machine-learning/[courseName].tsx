import Layout from '@/app/layouts/Layout'
import CourseDetails from '@/app/modules/course-details/CourseDetails'
import React from 'react'

const CourseDetailsAI = () => {
    return (
        <>
            <Layout isProtected>
                <CourseDetails />
            </Layout>
        </>
    )
}

export default CourseDetailsAI