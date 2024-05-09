import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <>
      <Navbar fixed="bottom" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#impressum">Impressum</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

export default Footer;