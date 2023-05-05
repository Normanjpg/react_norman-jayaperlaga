import React from "react";
import {
  Button,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbarcomp = () => {
  return (
    <Navbar bg="dark" expand="lg" className="p-3">
      <Container fluid>
        <Navbar.Brand href="#" className="text-light">
          <Link to="/">
            <img
              alt="logobrand"
              src="../src/assets/images/logo1000.jpg"
              width="30"
              height="30"
              className="d-inline-block rounded-circle align-text-top"
            />{" "}
            <a className="btn btn-dark btn-lg" href="#" role="button">
              LazyWatchLists
            </a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="bg-white" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/">
              <Nav.Link href="#welcome" className="text-light">
                Home
              </Nav.Link>
            </Link>
            <Link to="/aboutus">
              <Nav.Link href="#aboutus" className="text-light">
                About Us
              </Nav.Link>
            </Link>
            <NavDropdown
              title="List"
              className="custom-dropdown"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Movie</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">Series</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className="text-light">
              Make Playlist
            </Nav.Link>
            <Nav.Link href="#" className="text-light">
              Login
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-warning">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarcomp;
