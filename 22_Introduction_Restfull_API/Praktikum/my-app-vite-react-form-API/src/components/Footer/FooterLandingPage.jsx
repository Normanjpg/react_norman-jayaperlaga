import React from "react";

const FooterLandingPage = () => {
  return (
    <div>
      <div>
        <>
          {/* Footer */}
          <footer className="footer-top pt-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 footer-contact">
                  <h3 style={{ color: "#37517E", fontWeight: "bold" }}>
                    Arsha
                  </h3>
                  <p>
                    A108 Adam Street <br />
                    New York, NY 535022
                    <br />
                    United States <br />
                    <br />
                    <strong>Phone:</strong> +1 5589 55488 55
                    <br />
                    <strong>Email:</strong> info@example.com
                    <br />
                  </p>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4 style={{ color: "#37517E", fontWeight: "bold" }}>
                    Useful Links
                  </h4>
                  <ul className="list-unstyled ps-3">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Terms of service</li>
                    <li>Privacy policy</li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4 style={{ color: "#37517E", fontWeight: "bold" }}>
                    Our Services
                  </h4>
                  <ul className="list-unstyled ps-3">
                    <li>Web Design</li>
                    <li>Web Development</li>
                    <li>Product Management</li>
                    <li>Marketing</li>
                    <li>Graphic Design</li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4 style={{ color: "#37517E", fontWeight: "bold" }}>
                    Our Social Networks
                  </h4>
                  <p>
                    Cras fermentum odio eu feugiat lide par naso tierra videa
                    magna derita valies
                  </p>
                  <div className="social-links mt-3">
                    <img src="a.png" alt="instagram" className="ms-2" />
                    <img src="a.png" alt="twitter" className="ms-2" />
                    <img src="a.png" alt="facebook" className="ms-2" />
                    <img src="a.png" alt="youtube" className="ms-2" />
                    <img src="a.png" alt="linkedin" className="ms-2" />
                  </div>
                </div>
              </div>
            </div>
          </footer>
          {/* Copyright */}
          <div
            className="footer-bottom pt-4 pb-4"
            style={{ backgroundColor: "#37517E" }}
          >
            <div className="container">
              <div className="row">
                <div className="copyright col-6 text-white text-start">
                  © Copyright{" "}
                  <strong>
                    <span>Arsha</span>
                  </strong>
                  . All Rights Reserved
                </div>
                <div className="credits col-6 text-white text-end">
                  Designed by{" "}
                  <a
                    href="https://bootstrapmade.com/"
                    style={{ textDecoration: "none" }}
                  >
                    BootstrapMade
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default FooterLandingPage;
