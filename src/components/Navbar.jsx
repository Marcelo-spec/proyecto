import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/img/MuebleríaLuisPérezlogo.png';

function NavigationBar() {
  const location = useLocation();

  const getNavbarContent = () => {
    if (location.pathname === '/') {
      // Página de inicio
      return (
        <Nav className="ms-auto" style={{ gap: '9px' }}>
          <Link to="/Trabajos" style={{ textDecoration: 'none', color: '#ffffff' }}>
            Ver Trabajos
          </Link>
        </Nav>
      );
    } else if (location.pathname === '/Trabajos') {
      // Página de trabajos
      return (
        <Nav className="ms-auto" style={{ gap: '9px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#ffffff' }}>
            Volver
          </Link>
        </Nav>
      );
    }

    // Por defecto, si no coincide con ninguna ruta conocida, muestra el Navbar de la página de inicio
    return (
      <Nav className="ms-auto" style={{ gap: '9px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#ffffff' }}>
          Volver
        </Link>
        <Link to="/Trabajos" style={{ textDecoration: 'none', color: '#ffffff' }}>
          Ver Trabajos
        </Link>
      </Nav>
    );
  };

  return (
    <>
      <Navbar expand="lg" className="bg-dark">
        <Container>
          <img src={logo} alt="logo" style={{ width: '130px', marginLeft: '2px' }}></img>
          {getNavbarContent()}
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;