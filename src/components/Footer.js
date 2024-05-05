import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed="bottom">
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