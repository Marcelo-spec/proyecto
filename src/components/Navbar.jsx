import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/MuebleríaLuisPérezlogo.png'

function NavigationBar() {
  return (
    <>
<Navbar expand="lg" className="bg-dark">
<Container>
<img src={logo} alt='logo' style={{width: "130px", marginLeft: "2px"}}></img>
  <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-primary text-center'/>
  <Navbar.Collapse id="basic-navbar-nav " className='text-end'>
    <Nav className="ms-auto " style={{gap:"9px"}}>
      <Nav.Link href="#home" style={{color: "white"}}>Home</Nav.Link>
      <Nav.Link href="#works" style={{color: "white"}}>Trabajos</Nav.Link>
      <Nav.Link href="#contact" style={{color: "white"}}>Contacto</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
  </>
  );
}


export default NavigationBar;