import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Welcome = () => {
  return (
    <div className="my-home-section min-vh-100 w-100" id="welcome">
      <Container>
        <Row>
          <Col>
            <h1 className="text-welcome">Welcome to LazyWatchLists</h1>
            <h6 style={{ color: "black" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </h6>
            <img
              className="rounded-circle img-fluid mx-auto d-block m-3"
              style={{ display: "inline-block" }}
              src="../src/assets/images/logo1000.jpg"
              width="15%"
              height="15%"
              alt="welcome logo"
            />
            <div className="p-3">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search Movie Name"
                  aria-label="Search"
                />
                <button className="btn btn-outline-warning" type="submit">
                  Search
                </button>
              </form>
            </div>
            <a href="#ListPreview">
              <button type="button" className="btn btn-success mt-3 mb-5">
                Get Started
              </button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Welcome;
