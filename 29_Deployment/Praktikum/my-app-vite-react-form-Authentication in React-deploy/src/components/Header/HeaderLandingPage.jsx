import React from "react";

const HeaderLandingPage = () => {
  return (
    <div>
      <div>
        <section className="d-flex pt-5" style={{ backgroundColor: "#37517E" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
                <h1
                  className="text-white"
                  style={{ fontWeight: "bold", fontSize: 48 }}
                >
                  Better Solutions For Your Business
                </h1>
                <h2 className="text-white-50" style={{ fontSize: "medium" }}>
                  We are team of talented designers making websites with
                  Bootstrap
                </h2>
                <div className="row d-flex justify-content-lg-start justify-content-center mb-5">
                  <a
                    href="CreateAccount.html"
                    className="btn text-white mt-5"
                    style={{
                      backgroundColor: "#47B2E4",
                      borderRadius: 50,
                      height: 45,
                      width: "147.36px",
                    }}
                  >
                    Get Started
                  </a>
                  <a
                    href="#"
                    className="btn text-white mt-5"
                    style={{ height: 45, width: "147.36px" }}
                  >
                    Watch Video
                  </a>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 hero-img">
                <img src="hero-img.png" alt="hero-img" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeaderLandingPage;
