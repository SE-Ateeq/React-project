import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import chooseImg from "../../assets/images/why-choose-us.png";
import "./Choose.css";
import ReactPlayer from "react-player";

const Choose = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section className="mb-5">
      <Container>
        <Row>
          <Col lg="6">
            <div className="choose_content">
              <h2>Why Choose Us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                necessitatibus enim provident error aliquam nihil, est, eos
                doloribus rem possimus facilis mollitia eligendi dicta?
                Voluptatum, neque doloremque. Praesentium quod qui assumenda
                dolorem pariatur veritatis ullam.
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="choose_img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=W7up-w1QYpw"
                  controls
                  width="100%"
                  height="300px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play_icon">
                  <i
                    className="fa-regular fa-circle-play"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Choose;
