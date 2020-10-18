import React from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import {Link} from "gatsby";

export default (props) => (
<Navbar bg="light" expand="xs">
  <Navbar.Brand href="/">Awesome-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)