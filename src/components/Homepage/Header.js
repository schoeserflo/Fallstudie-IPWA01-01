import React from 'react';
import { Container, Row, Col, Navbar,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CO from '../Kohlenstoffdioxid/App_Co';

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
          <Navbar.Brand href= <Link to ={CO}>Kohlenstoffdioxid </Link> style={{ color: 'white' }}>Kohlenstoffdioxid</Navbar.Brand>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
export default Header