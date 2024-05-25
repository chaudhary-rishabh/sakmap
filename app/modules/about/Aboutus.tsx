import Carousel from '@/app/components/Carousel/Slider'
import Slider from '@/app/components/Carousel/Slider'
import Layout from '@/app/layouts/Layout'
import React from 'react'
import Stats from './Stats'
import Blogs from './Blogs'
import TestimonialAbout from './TestimonialAbout'
import ImagesAbout from './ImagesAbout'
import AboutMain from './AboutMain'

const Aboutus = () => {
    return (
        // why us, our vision, our goal, 
        <Layout isProtected={false}>
            <AboutMain />
            <Stats />
            <Blogs />
            <TestimonialAbout />
            <ImagesAbout />
        </Layout>
    )
}

export default Aboutus