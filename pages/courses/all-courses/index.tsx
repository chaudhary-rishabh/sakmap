import Layout from '@/app/layouts/Layout'
import React from 'react'
import AllCoursesModule from '@/app/modules/courses/AllCourses'

const AllCourses = () => {
    return (
        <>
            <Layout isProtected>
                <AllCoursesModule />
            </Layout>
        </>
    )
}

export default AllCourses