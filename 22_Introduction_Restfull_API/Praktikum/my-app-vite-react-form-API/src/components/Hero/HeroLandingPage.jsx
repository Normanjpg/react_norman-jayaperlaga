import React from "react";

const HeroLandingPage = () => {
  return (
    <div>
      <div>
        <section
          className="main-form d-flex justify-content-center pt-5 pb-5"
          style={{ backgroundColor: "#F3F5FA" }}
        >
          <div className="container">
            <div className="row">
              <div className="text-center">
                <h3 style={{ color: "#37517E", fontSize: 24 }}>
                  Join Our Newsletter
                </h3>
                <p style={{ color: "#444444" }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                  rerum amet fuga!
                </p>
              </div>
              <form
                id="form1"
                className="text-center"
                action="CreateAccount.html"
              >
                <div className="input-group mb-3 mt-2">
                  <input
                    type="email"
                    className="form-control"
                    style={{ borderLeft: 15 }}
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn text-white"
                    style={{ backgroundColor: "#47B2E4", borderRight: 15 }}
                    type="submit"
                    id="button-addon2"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroLandingPage;
