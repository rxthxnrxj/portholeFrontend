import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";

function Footer() {
  return (
    <Container>
      <Row className='mt-5'>
        <Col className='text-center py-3'>by <strong style={{fontWeight:'800'}}>ELC {`(10, 31, 41, 45)`}</strong></Col>
      </Row>
    </Container>
  );
}

export default Footer;


