import "./App.css";
import Home from "./components/Home";
import Investigacion from "./components/Investigacion";
import Carreras from "./components/Carreras";
import Becas from "./components/Becas";
import Contacto from "./components/Contacto";
import NavBar from "./components/reusable/NavBar";
import Cards from "./components/reusable/Cards";
import "./style/fonts.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Cards/>
      <NavBar />
      {<Routes>
        <Route path="/" element={<Home 
      titulo="Educación de primera calidad"
      subtitulo="Más de 3 décadas formando profesionales a lo largo y ancho del país"
      imagenFondo="/assets/fondo-utn.jpg"
    />} />
        <Route path="/investigacion" element={<Investigacion />} />
        <Route path="/carreras" element={<Carreras />} />
        <Route path="/becas" element={<Becas />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>}
    </>
  );
}

export default App;
