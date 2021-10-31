import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "./Navigation.css";

//set active page color code
const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "red" };
  } else {
    return { color: "white" };
  }
};

const Navigation = ({ history }) => {
  return (
    <>
      <section className="navigation">
        <Navbar fixed="top" expand="lg">
          <Navbar.Brand href="#">Emergency</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" style={{backgroundColor: '#242733',padding: '1px 30px'}}>
            <Nav
              className="my-2 my-lg-0"
              style={{ marginLeft: "auto" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/" style={isActive(history, "/")}>
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/profile"
                style={isActive(history, "/profile")}
              >
                Profile
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/myservices"
                style={isActive(history, "/myservices")}
              >
                My Service
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/police"
                style={isActive(history, "/police")}
              >
                Police Stations
              </Nav.Link>
              <Nav.Link as={Link} to="/fire" style={isActive(history, "/fire")}>
                Fire Services
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/services"
                style={isActive(history, "/services")}
              >
                Get Services
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/adminlogincheck"
                style={isActive(history, "/adminlogincheck")}
              >
                Admin
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/userlogincheck"
                style={isActive(history, "/userlogincheck")}
              >
                Sign In
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/signup"
                style={isActive(history, "/signup")}
              >
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </section>
    </>
  );
};

export default withRouter(Navigation);
