import React from "react";
import "./style.css";
import { Nav, Navbar } from 'react-bootstrap';

//Bootstrap Navigation Bar that is collapsable. Link is the React equivalent of <a> tag
function Navigationbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/About"><h3>Meena Ambalam</h3></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/project">Portfolio</Nav.Link>
          <Nav.Link href="/resume">Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigationbar;
