import React from 'react';
import { Container, Row, Col, Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';



    function Header() {
      return (
    <Navbar expand="lg" style={{ backgroundColor: '#4CAF50' }}>
    <Container fluid>
      <Row className="w-100">
        <Col xs={4} className="d-flex align-items-center justify-content-start">
          <Nav.Link as={Link} to="/" style={{ color: 'white' }}>Green-Hand</Nav.Link>
        </Col>
        <Col xs={4} className="d-flex align-items-center justify-content-center">
          <Link to="/">
            <img src="/Green.png" alt="Firmenlogo" style={{ height: '50px' }} />
          </Link>
        </Col>
        <Col xs={4} className="d-flex align-items-center justify-content-end">
        <Nav.Link as={Link} to="/co" style={{ color: 'white' }}>Über CO2</Nav.Link>
        </Col>

      </Row>
    </Container>
  </Navbar>
  );
}
export default Header