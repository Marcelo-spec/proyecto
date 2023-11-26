import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import { BsWhatsapp } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

function Footer() {

  // Redes de contacto //
  const whatsappLink = 'https://wa.me/+56987267680'; 
  const emailAddress = 'luisperezmuebles@gmail.com';

  return (
    <MDBFooter className='footer bg-dark text-white text-center'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg="6" md="12" className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Para más información</h5>

            <p>
             Puedes contactarte conmigo para servicios en mueblería a medida y con diseños personalizados,
             también se ofrece servicio de gasfitería, electricidad básica
            </p>
          </MDBCol>

          <MDBCol lg="3" md="6" className='ms-auto mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Contacto</h5>

            <ul className='list-unstyled mt-4'>
              <li>
                <a href={whatsappLink} className='text-white' target='blank' style={{ textDecoration: 'underline' }}>
                  <BsWhatsapp/> +56987267680
                </a>
              </li>
              <li>
                <a href={`mailto:${emailAddress}`} className='text-white' target='blank' style={{ textDecoration: 'underline' }}>
                  <IoMdMail/> luisperezmuebles@gmail.com
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <span>© 2024 Copyright </span>
        <a className='text-white' href='https://www.mueblerialuisperez.cl'>
          mueblerialuisperez.cl
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer