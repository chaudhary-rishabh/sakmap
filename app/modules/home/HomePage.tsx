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
import HomeContainer from './HomeContainer'

const Home = () => {
  return (
    <div>
      <Header />
      <HomeLanding />
      <HomeContainer />
      <Guidedby />
      {/* <AllCourses /> */}
      <Content />
      <CourseCategory />
      <WhyUs />
      <Tutors />
      <Footer />
    </div>
  )
}

export default Home