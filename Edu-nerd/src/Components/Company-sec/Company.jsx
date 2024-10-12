import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./Company.css";
const Company = ()=> {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="2" md="3">
             <h3 className="d-flex align-items-center gap-1">
              <i className="fa-brands fa-square-vimeo"></i>Vimeo
            </h3>
          </Col>
          <Col lg="2" md="3">
            <h3 className="d-flex align-items-center gap-1">
              <i className="fa-brands fa-pinterest"></i>Pinterest
            </h3>
          </Col>

          <Col lg="2" md="3">
            <h3 className="d-flex align-items-center gap-1">
              <i className="fa-brands fa-dribbble"></i>Dribbble
            </h3>
          </Col>
          <Col lg="2" md="3">
            <h3 className="d-flex align-items-center gap-1">
              {" "}
              <i className="fa-brands fa-apple"></i>Apple
            </h3>
          </Col>
          <Col lg="2" md="3">
            <h3 className="d-flex align-items-center gap-1">
              {" "}
              <i className="fa-solid fa-users-viewfinder"></i>Finder
            </h3>
          </Col>
          <Col lg="2" md="3">
            <h3 className="d-flex align-items-center gap-1">
              {" "}
              <i className="fa-brands fa-google"></i>Google
            </h3>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Company;
