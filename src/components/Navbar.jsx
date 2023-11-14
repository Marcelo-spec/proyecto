import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/MuebleríaLuisPérezlogo.png'

function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
         <img src={logo} alt='logo' style={{width: "130px", marginLeft: "2px"}}></img>
          <Nav className="ms-auto">
            <Navbar.Collapse>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#works">Trabajos</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;