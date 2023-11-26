import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home'
import Trabajos from './views/Works'

function App() {
    return (

        <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Trabajos />} />
          </Routes>
          </BrowserRouter>
          </>
    )
}

export default App;
