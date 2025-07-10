import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';


function NavBar() {
  return (
    <header className="generalHeader">
      <Link to="/">
        <img src="/assets/logoUTN.png" alt="Inicio" style={{ width: "200px" }} />
      </Link>
      <h1>UNIVERSIDAD TECNOLÓGICA NACIONAL</h1>
      <nav className="navBar">
        <Link to="/carreras">Carreras</Link>
        <Link to="/becas">Becas</Link>
        <Link to="/investigacion">Investigación</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
}

export default NavBar

