import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import '../style/home.css';
import NavBar from "./reusable/NavBar.jsx";
import Footer from './reusable/Footer';

function Home({ titulo, subtitulo, imagenFondo }) {
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (evento) => {
    setBusqueda(evento.target.value);
    console.log("Buscando:", evento.target.value);
  };

  return (
    <div 
      className="home"
      style={ imagenFondo ? { backgroundImage: `url(${imagenFondo})`, backgroundSize: "cover", backgroundPosition: "center" } : {} }
    >
      <main className="homeMain">
        <section className="homeSection">
          <div className="homeConteinerCarreras">
            <div className="homeCarrerasTexto">
              
              <h2 className="homeText">{titulo}</h2>
              <h3 className="homeText">{subtitulo}</h3>
            </div>

            <div className="homeCarrerasSearcher">
              <input 
                className="homeSearcherInput" 
                type="text" 
                placeholder="Busquemos tu carrera" 
                value={busqueda}
                onChange={handleChange}
              />
              <div className="homeBtn">
                <i className="fa fa-search"></i>
              </div>
            </div>

            <div className="homeImgCarreras">
              <img src="/assets/utn-index.jpg" alt="Sede de UTN" />
              
            </div>
          </div>

          <div className="homeOrdererList">
            <ul className="homeUl">
              <li className="homeLi">Estamos respaldados por el Ministerio de Educación de la Nación Argentina</li>
              <li className="homeLi">Los mejores y más accesibles aranceles de todo el país</li>
              <li className="homeLi">Asistencia virtual</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
      
      <Outlet />
    </div>
  );
}

export default Home;
