import React from 'react'
import Header from '../../layouts/Header'
import HomeLanding from './HomeLanding'
import Footer from '@/app/layouts/Footer'
import WhyUs from './Whyus'
import Guidedby from './Guidedby'
import CourseCategory from './CourseCategory'
import Tutors from './Tutors'
import AllCourses from './AllCourses'
import Content from '@/app/components/Content'
import HomeContainer from './HomeContainer'
import HeaderHome from './HeaderHome'
import Subscribe from './Subscribe'
import TestimonialHome from './TestimonialHome'

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
      {/* <HeaderHome heading="What our students say" /> */}
      <Tutors />
      <TestimonialHome />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default Home