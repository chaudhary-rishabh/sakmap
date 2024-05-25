import React from 'react'
import Header from '../../layouts/Header'
import HomeLanding from './HomeLanding'
import Footer from '@/app/layouts/Footer'
import WhyUs from './Whyus'
import Guidedby from './Guidedby'
import CourseCategory from './CourseCategory'
import Tutors from './Tutors'
import AllCourses from './AllCourses'
import TestimonialCarousel from '@/app/components/Carousel/TestimonialCarousel'
import Content from '@/app/components/Content'

const Home = () => {
  return (
    <div>
      <Header />
      <HomeLanding />
      <Guidedby />
      {/* <AllCourses /> */}
      <Content />
      <CourseCategory />
      <WhyUs />
      <Tutors />
      <TestimonialCarousel />
      <Footer />
    </div>
  )
}

export default Home