import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import "./Styles.css"
import logo from "./img/LogoManu.png"

export function Navegacion() {
  return (
    <Navbar className="background fixed-top" collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#principio">
          <img src={logo} className="logo" alt="Logo" />
          Manuel Torres Full Stack
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about" className="text-light">
              Acerca de Mí
            </Nav.Link>
            <Nav.Link href="#conocimientos" className="text-light">
              Conocimientos
            </Nav.Link>
            <Nav.Link href="#Contacto" className="text-light">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Navegacion;