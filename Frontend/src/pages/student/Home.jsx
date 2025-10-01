import React from 'react'
import Hero from '../../components/students/Hero.jsx';
import Companies from '../../components/students/Companies.jsx';
import Footer from '../../components/students/Footer.jsx';
import Testimonial from '../../components/students/TestimonialsSection.jsx';
import CourseSection from '../../components/students/CourseSection.jsx';
import CourseTags from '../../components/students/CourseTags.jsx';

const Home = () => {
  return (
    <div className='flex flex-col items-center text-center'>
      {/* <CourseTags/> */}
      <Hero />
      <Companies/>
      <CourseSection/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Home
