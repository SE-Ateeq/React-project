import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./About.css";
import aboutImg from "../../assets/images/about-us.png";
import CountUp from "react-countup";

const About = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <img src={aboutImg} alt="" className="w-100" />
          </Col>
          <Col>
            <div className="about_content">
              <h2>About Us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                officiis repudiandae asperiores corporis nostrum magni
                laboriosam laudantium eum atque rem.
              </p>

              <div className="about_counter">
                <div className="d-flex gap-5 align-items-center">
                  <div className="single_counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>

                    <p className="counter_title">Completed Projects</p>
                  </div>
                  <div className="single_counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="M" />
                    </span>

                    <p className="counter_title">Patient Around World</p>
                  </div>
                </div>
                <div className="d-flex gap-5 align-items-center">
                  <div className="single_counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>

                    <p className="counter_title">Completed Projects</p>
                  </div>
                  <div className="single_counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="M" />
                    </span>

                    <p className="counter_title">Patient Around World</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
