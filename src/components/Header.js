import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Co2 Fußabdruck</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#startseite">Startseite</Nav.Link>
            <Nav.Link href="#über">Über uns</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

export default Header;
