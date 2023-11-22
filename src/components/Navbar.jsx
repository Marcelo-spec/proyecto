import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/MuebleríaLuisPérezlogo.png'
import {Link} from 'react-router-dom'
 
function NavigationBar() {
  return (
    <>
<Navbar expand="lg" className="bg-dark">
<Container>
<img src={logo} alt='logo' style={{width: "130px", marginLeft: "2px"}}></img>
  <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-primary text-center'/>
  <Navbar.Collapse id="basic-navbar-nav " className='text-end'>
    <Nav className="ms-auto" style={{gap:"9px",}}>
    <Link to ='/' style={{textDecoration:"none", color:"#ffffff"}}>Home</Link>
    <Link to='/works' style={{textDecoration:"none", color:"#ffffff"}}>Trabajos</Link>
    <Link to='/contact' style={{textDecoration:"none", color:"#ffffff"}}>Contacto</Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
  </>
  );
}


export default NavigationBar;