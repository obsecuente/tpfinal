import React from 'react'
import { Outlet,Link, } from  'react-router-dom'
import '../style/investigacion.css';
import NavBar from "./reusable/NavBar.jsx";
import Footer from './reusable/Footer';

function Investigacion() {
  return (
<div className='investigacion'>

<main className='investMain'>
            
            <section className='investSection'>
                <h2 className='investH2'>Presentación de Proyectos de Investigación y Desarrollo en el Sistema de Administración de Proyectos de Ciencia y Tecnología</h2>
                <div className="investCards">

                    <div className="investCard">

                        <div className="investCardOneTitle">
                            <h3 className='investH3'>Energía Undimotriz</h3>
                        </div>
                        <div className="investCardOneImage">
                            <img className="investImg" src="/assets/project-cardOne.jpg" alt="Proyecto de energia Audiomotriz" />
                        </div>
                        <div className="investCardOneInfo"> 
                            <p className='investP'>Acá va informacion</p>
                        </div>
                        <div className="investCardOneButton">
                            <a href="" className='investA'>Más info</a>
                        </div>
                    </div>

                    <div className="investCard">

                        <div className="investCardTwoTitle">
                            <h3 className='investH3'>Gestión de Microrredes Eléctricas</h3>
                        </div>
                        <div className="investCardTwoImage">
                            <img className="investImg" src="/assets/project-cardTwo.png" alt="Gestion Microrredes" />
                        </div>
                        <div className="investCardTwoInfo">
                            <p className='investP'>Acá va información</p>
                        </div>
                        <div className="investCardTwoButton">
                            <a href="" className='investA'>Más info</a>
                        </div>
                    </div>

                    <div className="investCard">

                        <div className="investCardThreeTitle">
                            <h3 className='investH3'>Prevencion de Enfermedades </h3>
                        </div>
                        <div className="investCardThreeImg">
                            <img className="investImg" src="/assets/project-cardThree.jpg" alt="Cardiovascular" />                          
                        </div>
                        <div className="investCard-ThreeInfo">
                            <p className='investP'>Acá va información</p>
                        </div>
                        <div className="investCard-ThreeButton">
                            <a href="" className='investA'>Más info</a>
                        </div>
                    
                    </div>
                    
                </div>
            </section>
            
        </main>
        <Footer />
</div>
  )
}

export default Investigacion