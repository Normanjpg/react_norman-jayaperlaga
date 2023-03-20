import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-sm">
        <div className="container-fluid">
          <a
            className="navbar-brand ms-4"
            href="LandingPage.html"
            style={{ fontWeight: "bolder" }}
          >
            Simple Header
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav me-4">
              <li className="nav-item me-3">
                <NavLink
                  to="/"
                  className="nav-link active text-white"
                  style={{ backgroundColor: "#0D6EFD", borderRadius: 4 }}
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink
                  to="/CreateProduct"
                  className="nav-link active text-primary"
                  aria-current="page"
                >
                  Create Product
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink
                  to="/DataProduct"
                  className="nav-link active text-primary"
                  aria-current="page"
                >
                  Data Product
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <a
                  className="nav-link active text-primary"
                  aria-current="page"
                  href="#"
                >
                  Feature
                </a>
              </li>
              <li className="nav-item me-3">
                <a
                  className="nav-link active text-primary"
                  aria-current="page"
                  href="#"
                >
                  Pricing
                </a>
              </li>
              <li className="nav-item me-3">
                <a
                  className="nav-link active text-primary"
                  aria-current="page"
                  href="#"
                >
                  FAQs
                </a>
              </li>
              <li className="nav-item me-3">
                <a
                  className="nav-link active text-primary"
                  aria-current="page"
                  href="#"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
