import React, { useState } from 'react';
import Card from './reusable/Cards.jsx';
import Footer from './reusable/Footer';
import '../style/carreras.css';

const carrerasData = [
  { titulo: "Desarrollo Web", imagen: "/assets/carreras-desarroladorBackend.jpg", grande: true },
  { titulo: "Crimen Organizado", imagen: "/assets/carreras-crimenOrganizado.png" },
  { titulo: "Ciberseguridad", imagen: "/assets/carreras-ciberseguridad.jpg" },
  { titulo: "Videojuegos", imagen: "/assets/carreras-desarrolloVideojueguil.jpg" },
  { titulo: "Excel", imagen: "/assets/carreras-excel.jpg" },
  { titulo: "Nutrición Deportiva", imagen: "/assets/carreras-nutricionDeportiva.jpg" },
  { titulo: "Gestión Municipal", imagen: "/assets/carreras-gestionMunicipal.jpg" },
];

function Carreras() {
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  const carrerasFiltradas = carrerasData.filter(carrera =>
    carrera.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <main className='carrerasMain'>
        <section className='carrerasSection'>
          <h2 className='carrerasH2'>Es momento de seguir y lograr cada uno de tus sueños.</h2>
          <div className="carrerasVideo">
            <iframe  
              width="1000" 
              height="600" 
              src="https://www.youtube.com/embed/pqNWeC0H1fI" 
              title="TECNICATURA UNIVERSITARIA EN PROGRAMACION UTN | INGRESO UTN" 
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>

        <section className="carrerasSection2">
          <h2 className='carrerasH2'>¿Qué carrera vas a elegir?</h2>

          
          <div className="carrerasCarrerasSearcher">
              <input 
                className="carrerasSearcherInput" 
                type="text" 
                placeholder="Busquemos tu carrera" 
                value={busqueda}
                onChange={handleChange}
              />
              <div className="carrerasBtn">
                <i className="fa fa-search"></i>
              </div>
            </div>

          <div className="carrerasGrid">
            {carrerasFiltradas.length > 0 ? (
              carrerasFiltradas.map((carrera, index) => (
                <Card 
                  key={index}
                  titulo={carrera.titulo}
                  imagen={carrera.imagen}
                  grande={carrera.grande}
                />
              ))
            ) : (
              <p style={{ textAlign: 'center', width: '100%' }}>No se encontró ninguna carrera</p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Carreras;
 