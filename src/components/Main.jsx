import React from "react";
import fotoHome from '../assets/img/fotoHome.jpg'

function Main() {
    return(
        <main className="text-center pt-4 ">
          <img src={fotoHome} alt="Libreta" style={{width:'400px', borderRadius:"200px"}} className="mobileversion" />
          <p className="textMain mt-4">Con más de 25 años de experiencia en el rubro de la carpintería, trabajando todo tipo de maderas y muebles en linea plana con todo tipo de placas</p>
          <p className="textMain mt-2">Terminaciones en construcción, mantención y reparación en muebles del hogar</p>
          <p className="textMain mt-2">En trabajos anexos también se ofrece servicio en gasfitería, ya sean arranques, conexiones e instalaciones de calefont</p>
          <p className="textMain mt-2 mb-4">Me destaco por mi responsabilidad y seriedad en mis trabajos, buena disposición y muy transparente en mis tratos con mis clientes</p>

          </main>

    )
}

export default Main