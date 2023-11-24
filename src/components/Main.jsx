import React from "react";
import fotoHome from '../assets/img/fotoHome.jpg'

function Main() {
    return(
        <main className="text-center pt-4">
          <img src={fotoHome} alt="Libreta" style={{width:'400px', borderRadius:"200px"}} />
          <p className="textMain">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptates sequi cumque possimus ipsum! Voluptatibus dicta possimus dolores quod culpa, fugiat, quia perferendis, harum quasi facere excepturi voluptate delectus voluptatem.</p>
          </main>

    )
}

export default Main