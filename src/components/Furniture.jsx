import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import banca from '../assets/img/banca.jpeg'
import puerta from '../assets/img/puerta.jpeg'
import ventana from '../assets/img/ventana.jpeg'
import botiquin from '../assets/img/botiquin.jpeg'
import puertaDos from '../assets/img/puertaDos.jpeg'
import puertaTres from '../assets/img/puertaTres.jpeg'
import puertaCuatro from '../assets/img/puertaCuatro.jpeg'
import puertaCinco from '../assets/img/puertaCinco.jpeg'
import puertaSeis from '../assets/img/puertaSeis.jpeg'
import puertaSiete from '../assets/img/puertaSiete.jpeg'
import mesa from '../assets/img/mesa.jpeg'
import mesaDeCentro from '../assets/img/mesaDeCentro.jpeg'
import mueble from '../assets/img/mueble.jpeg'
import muebleDos from '../assets/img/muebleDos.jpeg'
import camarote from '../assets/img/camarote.jpeg'
import sillas from '../assets/img/sillas.jpeg'
import muebleTres from '../assets/img/muebleTres.jpeg'
import ventanaDos from '../assets/img/ventanaDos.jpeg'
import ventanaTres from '../assets/img/ventanaTres.jpeg'
import comedor from '../assets/img/comedor.jpeg'
import muebleCuatro from '../assets/img/muebleCuatro.jpeg'
import muebleCinco from '../assets/img/muebleCinco.jpeg'
import muebleSeis from '../assets/img/muebleSeis.jpeg'
import muebleSiete from '../assets/img/muebleSiete.jpeg'


function text() {
return(
    <div className="textletter">
    <h1 className="text-center pt-2">Trabajos</h1>
    <p className="text-center">Aquí puedes ver ejemplos variados de trabajos realizados</p>
    <p className="text-center">Desde puertas, ventanas, comedores, entre otros</p>
    <Container fluid className='text-center'>
    {/* Primera fila */}
    <Row>
      <Col className='mt-4'><img src={banca} alt="banca" style={{width:'400px'}} /></Col>
      <Col className='mt-4'><img src={puerta} alt="puerta" style={{width:'400px'}}/></Col>
      <Col className='mt-4'><img src={ventana} alt="ventana" style={{width:'400px'}} /></Col>
    </Row>

    {/* Segunda fila */}
    <Row>
      <Col className='mt-4'><img src={botiquin} alt="botiquin" style={{width:'400px'}}/></Col>
      <Col className='mt-4'><img src={puertaDos} alt="puerta" style={{width:'400px'}}/></Col>
      <Col className='mt-4'><img src={puertaTres} alt="puerta" style={{width:'400px'}}/></Col>
    </Row>

    {/* Tercera fila */}
    <Row>
      <Col className='mt-4'><img src={puertaCuatro} alt="puerta" style={{width:'400px'}}/></Col>
      <Col className='mt-4'><img src={sillas} alt="silla" style={{width:'400px'}}/></Col>
      <Col className='mt-4'><img src={mueble} alt="banca" style={{width:'400px'}} /></Col>
    </Row>

    {/* Cuarta fila */}
    <Row>
      <Col className='mt-4'><img src={comedor} alt="comedor" style={{width:'400px', height:'400px'}}/></Col>
      <Col className='mt-4'><img src={puertaCinco} alt="puerta" style={{width:'400px'}}/></Col>
      <Col className='mt-4'><img src={mesaDeCentro} alt="mesa" style={{width:'400px'}} /></Col>
    </Row>

    {/* Quinta fila */}
    <Row>
      <Col className='mt-4'><img src={mesa} alt="mesa" style={{width:'380px'}} /></Col>
      <Col className='mt-4'><img src={muebleDos} alt="mueble" style={{width:'400px', height:'280px'}} /></Col>
      <Col className='mt-4'><img src={camarote} alt="camarote" style={{width:'400px', height:'290px'}} /></Col>
    </Row>

    {/* Sexta fila */}
    <Row>
      <Col className='mt-4'><img src={muebleTres} alt="mueble" style={{width:'400px'}}/></Col>
      <Col className='mt-4'><img src={puertaSeis} alt="puerta" style={{width:'400px'}}/></Col>
      <Col className='mt-4'><img src={puertaSiete} alt="puerta" style={{width:'400px'}}/></Col>
    </Row>

    {/* Séptima fila */}
    <Row>
      <Col className='mt-4'><img src={muebleCuatro} alt="mueble" style={{width:'380px'}}/></Col>
      <Col className='mt-4'><img src={ventanaDos} alt="ventana" style={{width:'400px'}}/></Col>
      <Col className='mt-4 mb-2'><img src={ventanaTres} alt="ventana" style={{width:'400px'}}/></Col>
    </Row>

     {/* Octava fila */}
     <Row>
      <Col className='mt-4'><img src={muebleCinco} alt="mueble" style={{width:'420px'}}/></Col>
      <Col className='mt-4'><img src={muebleSeis} alt="mueble" style={{width:'400px'}}/></Col>
      <Col className='mt-4 mb-2'><img src={muebleSiete} alt="mueble" style={{width:'400px'}}/></Col>
    </Row>
  </Container>
    </div>
  
)
}

export default text