import React from 'react'

import { Container, Row, Col } from 'reactstrap';
import heroImg from "../../assets/images/hero-img1.png"
import "./Hero.css";


const Hero = () => {
  return (
   <Container className='mb-5'>
    <Row>
        <Col lg="6" md="6">
            <div className="hero_content">
            <h2 className='mb-4'>
             Anytime Anywhere <br /> Learn on our Suitable <br />Schedule</h2>
            <p className='mb-4'>
             Lorem ipsum dolor, sit amet consectetur <br />adipisicing elit.
             Consectetur doloremque ipsa facere. <br />Voluptate neque distinctio,
             omnis maxime  aspernatur odio!</p>
             <div className="search">
                <input type="text" placeholder='Search'/>
                <button className="btn btn-success">Search</button>
            </div>
            </div>
            
        </Col>
        <Col lg="6" md="6">
            <img src={heroImg} alt="" className='w-100' />
        </Col>
    </Row>
   </Container>
  )
}

export default Hero;