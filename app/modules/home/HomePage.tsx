import React from 'react'
import Header from '../../layouts/Header'
import HomeLanding from './HomeLanding'
import Footer from '@/app/layouts/Footer'
import WhyUs from './Whyus'
import CourseCategory from './CourseCategory'
import Tutors from './Tutors'
import Content from '@/app/components/Content'
import HomeContainer from './HomeContainer'
import Subscribe from './Subscribe'
import TestimonialHome from './TestimonialHome'
import Guidedby from './Guidedby'

const images = [
  { src: '/sakmap_experts1.png', alt: 'Sakmap Expert Mam', name: 'expert name', desc: 'description about experts', link: 'https://xyz.com' },
  { src: '/sakmap_experts2.png', alt: 'Sakmap Expert sir', name: 'expert name', desc: 'description about experts', link: 'https://xyz.com' },
  { src: '/sakmap_experts3.png', alt: 'Sakmap Expert sir', name: 'expert name', desc: 'description about experts', link: 'https://xyz.com' },
];

const Home = () => {
  return (
    <div>
      <HomeLanding />
      <HomeContainer />
      <Guidedby images={images} />
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