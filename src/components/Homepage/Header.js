import React from 'react';
import { Container, Row, Col, Navbar, Nav} from 'react-bootstrap';


    function Header() {
      return (
    <Navbar expand="lg" style={{ backgroundColor: '#4CAF50' }}>
    <Container fluid>
      <Row className="w-100">
        <Col xs={4} className="d-flex align-items-center justify-content-start">
          <Navbar.Brand href='#' style={{ color: 'white' }}>Green-Hand</Navbar.Brand>
        </Col>
        <Col xs={4} className="d-flex align-items-center justify-content-center">
          <img src="/Green.png" alt="Firmenlogo" style={{ height: '50px' }} />
        </Col>
        <Col xs={4} className="d-flex align-items-center justify-content-end">
        <Nav.Link href='Co' style={{ color: 'white' }}>Über CO2</Nav.Link>
        </Col>

      </Row>
    </Container>
  </Navbar>
  );
}
export default Header