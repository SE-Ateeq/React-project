import React from "react";
import { Container, Row, Col } from "reactstrap";

import "./Company.css";
const Company = ()=> {
  return (
    <section>
      <Container className="mb-5">
        <Row>
          <Col lg="2" md="3">
             <h5 className="d-flex align-items-center gap-1">
             <i className="ri-vimeo-line"></i>Vimeo
            </h5>
          </Col>
          <Col lg="2" md="3">
            <h5 className="d-flex align-items-center gap-1">
            <i className="ri-pinterest-line"></i>Pinterest
            </h5>
          </Col>

          <Col lg="2" md="3">
            <h5 className="d-flex align-items-center gap-1">
            <i className="ri-dribbble-fill"></i>Dribbble
            </h5>
          </Col>
          <Col lg="2" md="3">
            <h5 className="d-flex align-items-center gap-1">
              {" "}
              <i className="ri-apple-line"></i>Apple
            </h5>
          </Col>
          <Col lg="2" md="3">
            <h5 className="d-flex align-items-center gap-1">
              {" "}
              <i className="ri-finder-line"></i>Finder
            </h5>
          </Col>
          <Col lg="2" md="3">
            <h5 className="d-flex align-items-center gap-1">
              {" "}
              <i className="ri-google-line"></i>Google
            </h5>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Company;
