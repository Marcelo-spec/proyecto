import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home'
import Trabajos from './views/Works'
import Contacto from './views/Contacto'

function App() {
    return (

        <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Trabajos />} />
          <Route path="/Contact" element={<Contacto />} />
          </Routes>
          </BrowserRouter>
          </>
    )
}

export default App;
