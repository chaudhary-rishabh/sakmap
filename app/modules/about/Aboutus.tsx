import React from 'react'
import Stats from './Stats'
import Blogs from './Blogs'
import TestimonialAbout from './TestimonialAbout'
import ImagesAbout from './ImagesAbout'
import AboutMain from './AboutMain'
import WhyUs from './WhyUs'

const Aboutus = () => {
    return (
        <>
            <AboutMain />
            <Stats />
            <Blogs />
            {/* <TestimonialAbout /> */}
            <WhyUs />
            <ImagesAbout />
        </>
    )
}

export default Aboutus