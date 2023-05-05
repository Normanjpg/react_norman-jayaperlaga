import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footercomp = () => {
  return (
    <div className="my-footer-section pt-4">
      <Container>
        <Row>
          <Col>
            <div className="left box pb-5">
              <div
                className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto"
                style={{ width: 130, height: 130 }}
              >
                <img
                  src="../src/assets/images/logo1000.jpg"
                  height={130}
                  alt="logofooter"
                  className="rounded-circle"
                  loading="lazy"
                />
              </div>
              <h2>About us</h2>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ducimus iusto adipisci quaerat vero libero ad laboriosam.
                </p>
                <div className="social">
                  <a
                    href="https://web.facebook.com/norman.jayaperlaga"
                    target="_blank"
                  >
                    <span className="fab fa-facebook" />
                  </a>
                  <a href="https://instagram.com/norman_jayap" target="_blank">
                    <span className="fab fa-instagram" />
                  </a>
                  <a href="https://github.com/Normanjpg" target="_blank">
                    <span className="fab fa-github" />
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="center box pt-5">
              <h2>Address</h2>
              <div className="content">
                <div className="place">
                  <span className="fas fa-map-marker-alt" />
                  <span className="text">Surabaya, Jawa Timur</span>
                </div>
                <div className="phone">
                  <span className="fas fa-phone-alt" />
                  <span className="text">+6285155131422</span>
                </div>
                <div className="email">
                  <span className="fas fa-envelope" />
                  <span className="text">normanjmusic22@gmail.com</span>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="right box pt-5">
              <h2>Contact us</h2>
              <div className="content">
                <form action="#">
                  <div className="email">
                    <div className="text">Email *</div>
                    <input type="email" required="" />
                  </div>
                  <div className="msg">
                    <div className="text">Message *</div>
                    <textarea
                      rows={2}
                      cols={25}
                      required=""
                      defaultValue={""}
                    />
                  </div>
                  <div className="btn">
                    <button type="submit">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="bottom">
            <span className="credit">
              Created By
              <a
                href="https://www.github.com/Normanjpg"
                target="_blank"
                id="my"
              >
                Norman Jayaperlaga
              </a>
              |
            </span>
            <span className="far fa-copyright" />
            <span> 2023 All rights reserved.</span>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Footercomp;
