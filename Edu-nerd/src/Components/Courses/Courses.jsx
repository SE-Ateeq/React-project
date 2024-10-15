import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import courseImg1 from "../../assets/images/web-design.png"
import courseImg2 from "../../assets/images/graphics-design.png"
import courseImg3 from "../../assets/images/ui-ux.png"
import "./Courses.css";
import CoursesCard from './CoursesCard'

const coursesData=[
    {
        id:"01",
        title:"Web Design Bootcamp-2024 for Beginners",
        lesson:12,
        students:12.5,
        ratting:5.9,
        imgUrl: courseImg1
    },
    {
        id:"02",
        title:"Professional Graphic Design, PhotoShop, Adobe XD, Figma",
        lesson:12,
        students:12.5,
        ratting:5.9,
        imgUrl: courseImg2
    },
    {
        id:"03",
        title:"UI/UX Bootcamp for Beginners in 2024",
        lesson:12,
        students:12.5,
        ratting:5.9,
        imgUrl: courseImg3
    }
]

const Courses = () => {
  return (
    <section className='mb-5'>
      <Container>
        <Row>
            <Col lg="12">
                <div className="course_top">
                    <div className="course_top_left w-50">
                        <h2>Our Popular Courses</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Vitae consequatur sequi est vel minima, 
                             aliquam possimus fugit ipsum at voluptatum!
                        </p>
                    </div>
                    <div className='w-50 text-end'>
                        <button className="btn btn-primary mb-5">See All</button>
                    </div>
                </div>
            </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6">
              <CoursesCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );   
};

export default Courses