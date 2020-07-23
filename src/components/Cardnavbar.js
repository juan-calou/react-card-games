import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import "./styles/Navbar.css";

class Cardnavbar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Card Games</Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/info">
            Info
          </Link>
          <Link className="nav-link" to="/guess">
            Guess
          </Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Cardnavbar;
