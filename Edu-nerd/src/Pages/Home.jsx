import React from 'react'
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero-sec/Hero';
import Company from '../Components/Company-sec/Company';
import About from '../Components/About-us/About';
import Courses from '../Components/Courses/Courses';
import Choose from '../Components/Choose-us/Choose';

function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Company />
    <About />
    <Courses />
    <Choose />
    </>
  )
}

export default Home;