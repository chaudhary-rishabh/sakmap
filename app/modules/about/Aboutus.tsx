import Layout from '@/app/layouts/Layout'
import React from 'react'
import Stats from './Stats'
import Blogs from './Blogs'
import TestimonialAbout from './TestimonialAbout'
import ImagesAbout from './ImagesAbout'
import AboutMain from './AboutMain'
import WhyUs from './WhyUs'

const Aboutus = () => {
    return (
        // why us, our vision, our goal, 
        <Layout isProtected={false}>
            <AboutMain />
            <Stats />
            <Blogs />
            {/* <TestimonialAbout /> */}
            <WhyUs />
            <ImagesAbout />
        </Layout>
    )
}

export default Aboutus