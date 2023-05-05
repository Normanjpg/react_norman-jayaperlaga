import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="my-aboutus-section" id="aboutus">
      <Container>
        <Row>
          <Col>
            <img
              src="../src/assets/images/logo1000.jpg"
              height="30%"
              width="30%"
              alt="Moon War"
              className="img-fluid rounded-circle img-thumbnail"
            />
          </Col>
          <Col>
          <h1 className="text-black" style={{fontWeight:'bold'}}>About Us</h1>
            <p className="text-black">
              The dynamic gaming world is always changing, which is why MOON WAR
              makes it a priority to ensure you`re informed with the latest
              industry news.
            </p>
            <p className="text-black">
              We are here for you, so explore the forum to learn more tips,
              tricks and hacks with industry experts.
            </p>
            <Link to="/aboutus">
            <a className="btn btn-dark btn-lg" href="#" role="button">
              Learn more
            </a>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
