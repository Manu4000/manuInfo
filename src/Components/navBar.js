import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Styles.css"
import logo from "./img/LogoManu.png"

function Navegacion() {
  return (

    <Navbar className="background fixed-top" collapseOnSelect expand="lg" variant="dark">
      <Container>
        <img src={logo} className="logo" id='principio' />
        <Navbar.Brand href="principio">Manuel Torres Full Stack </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="ms-auto ">
            <Nav.Link href="#about" className='text-light'>Acerca de Mi</Nav.Link>
            <Nav.Link href="#conocimientos" className='text-light'>Conocimientos</Nav.Link>
            <Nav.Link href="#pricing" className='text-light'>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}


export default Navegacion;