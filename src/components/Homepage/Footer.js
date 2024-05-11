import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <>
      <Navbar className="navbar-custom" expand="lg">
        <Container fluid>
          <Nav.Link as={Link} to="/impressum">Impressum</Nav.Link>
        </Container>
      </Navbar>
      </>
  );
}

export default Footer;