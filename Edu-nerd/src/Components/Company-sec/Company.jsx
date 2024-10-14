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
             <i className="ri-vimeo-line"></i>Vimeo
            </h3>
          </Col>
          <Col lg="2" md="3">
            <h3 className="d-flex align-items-center gap-1">
            <i className="ri-pinterest-line"></i>Pinterest
            </h3>
          </Col>

          <Col lg="2" md="3">
            <h3 className="d-flex align-items-center gap-1">
            <i className="ri-dribbble-fill"></i>Dribbble
            </h3>
          </Col>
          <Col lg="2" md="3">
            <h3 className="d-flex align-items-center gap-1">
              {" "}
              <i className="ri-apple-line"></i>Apple
            </h3>
          </Col>
          <Col lg="2" md="3">
            <h3 className="d-flex align-items-center gap-1">
              {" "}
              <i className="ri-finder-line"></i>Finder
            </h3>
          </Col>
          <Col lg="2" md="3">
            <h3 className="d-flex align-items-center gap-1">
              {" "}
              <i className="ri-google-line"></i>Google
            </h3>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Company;
