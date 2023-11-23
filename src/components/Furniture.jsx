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
import mamparas from '../assets/img/mamparas.jpeg'



function text() {
return(
    <div className="textletter">
    <h1 className="text-center pt-2">Trabajos</h1>
    <p className="text-center">Aqui puedes ver ejemplos variados de trabajos realizados</p>
    <p className="text-center">Desde puertas, ventanas, comedores, entre otros</p>
    <Container fluid className='text-center'>
    {/* Primera fila */}
    <Row className='p-2'>
      <Col><img src={banca} alt="banca" style={{width:'400px'}} /></Col>
      <Col><img src={puerta} alt="puerta" style={{width:'400px'}}/></Col>
      <Col><img src={ventana} alt="ventana" style={{width:'400px'}} /></Col>
    </Row>

    {/* Segunda fila */}
    <Row>
      <Col><img src={botiquin} alt="botiquin" style={{width:'400px'}}/></Col>
      <Col><img src={puertaDos} alt="puerta" style={{width:'400px'}}/></Col>
      <Col><img src={puertaTres} alt="puerta" style={{width:'400px'}}/></Col>
    </Row>

    {/* Tercera fila */}
    <Row>
      <Col><img src={puertaCuatro} alt="botiquin" style={{width:'400px'}}/></Col>
      <Col><img src={sillas} alt="botiquin" style={{width:'400px'}}/></Col>
      <Col><img src={mueble} alt="banca" style={{width:'400px'}} /></Col>
    </Row>

    {/* Cuarta fila */}
    <Row>
      <Col><img src={comedor} alt="botiquin" style={{width:'400px'}}/></Col>
      <Col><img src={puertaCinco} alt="botiquin" style={{width:'400px'}}/></Col>
      <Col><img src={mesaDeCentro} alt="banca" style={{width:'400px'}} /></Col>
    </Row>

    {/* Quinta fila */}
    <Row>
      <Col><img src={mesa} alt="banca" style={{width:'400px'}} /></Col>
      <Col><img src={muebleDos} alt="banca" style={{width:'400px'}} /></Col>
      <Col><img src={camarote} alt="banca" style={{width:'400px'}} /></Col>
    </Row>

    {/* Sexta fila */}
    <Row>
      <Col><img src={muebleTres} alt="botiquin" style={{width:'400px'}}/></Col>
      <Col><img src={puertaSeis} alt="botiquin" style={{width:'400px'}}/></Col>
      <Col><img src={puertaSiete} alt="botiquin" style={{width:'400px'}}/></Col>
    </Row>

    {/* Séptima fila */}
    <Row>
      <Col><img src={mamparas} alt="botiquin" style={{width:'400px'}}/></Col>
      <Col><img src={ventanaDos} alt="botiquin" style={{width:'400px'}}/></Col>
      <Col><img src={ventanaTres} alt="botiquin" style={{width:'400px'}}/></Col>
    </Row>
  </Container>
    </div>
  
)
}

export default text