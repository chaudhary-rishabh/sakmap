import React from 'react'
import Header from '../../layouts/Header'
import HomeLanding from './HomeLanding'
import Footer from '@/app/layouts/Footer'
import WhyUs from './Whyus'
import Guidedby from './Guidedby'
import CourseCategory from './CourseCategory'
import Tutors from './Tutors'
import Content from '@/app/components/Content'
import HomeContainer from './HomeContainer'
import Subscribe from './Subscribe'
import TestimonialHome from './TestimonialHome'

const Home = () => {
  return (
    <div>
      <HomeLanding />
      <HomeContainer />
      <Guidedby />
      <Content />
      <CourseCategory />
      <WhyUs />
      <Tutors />
      <TestimonialHome />
      <Subscribe />
    </div>
  )
}

export default Home