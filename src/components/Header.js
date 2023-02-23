import React from "react";
import { Container, Row, Col, Navbar, Nav,NavDropdown  } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>PORTHOLE</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {/* <LinkContainer to="/deploy">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>DEPLOY
                </Nav.Link>
              </LinkContainer> */}
              <LinkContainer to="/deploy">
                <Nav.Link className='text-capitalize'>
                  <i className="fas fa-shopping-cart"></i>DEPLOY
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/add">
                <Nav.Link className='text-capitalize'>
                  <i className="fas fa-shopping-cart"></i>+ ADD
                </Nav.Link>
              </LinkContainer>
              <NavDropdown title={'Admin'} id="username" className='text-capitalize'>
                <LinkContainer to="/profile">
                  <NavDropdown.Item className='text-capitalize'>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
