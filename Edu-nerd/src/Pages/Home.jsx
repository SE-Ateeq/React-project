import React from 'react'
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero-sec/Hero';
import Company from '../Components/Company-sec/Company';
import About from '../Components/About-us/About';
import Courses from '../Components/Courses/Courses';
import Choose from '../Components/Choose-us/Choose';
import Features from '../Components/Feature-sec/Features';
import FreeCourse from "../Components/FreeCourse-sec/FreeCourse";
import Testimonials from '../Components/Testimonials-sec/Testimonials';
import Newsletter from '../Components/Newsletter-sec/Newsletter';
import Footer from '../Components/Footer/Footer';

function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Company />
    <About />
    <Courses />
    <Choose />
    <Features />
    <FreeCourse />
    <Testimonials />
    <Newsletter />
    <Footer />
  
  
    </>
  )
}

export default Home;