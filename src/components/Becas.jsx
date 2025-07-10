import React from 'react'
import { Link } from 'react-router-dom'
import '../style/becas.css';
import Footer from './reusable/Footer';



function Becas() {
  return (
    <div>
      

      <main className='becasMain'>
        <section>
          <h2 className='becasH2'>Nuestra política educacional es que todo el mundo tenga acceso a poder lograr sus sueños</h2>
          <p className='becasP'>Pudiendo así formarse profesionalmente y generar oportunidades igualitarias de educación y egreso para todo tipo de público</p>

          <div className="becasBarraDUal">

            <div className="becasCollapsibleContainer">
              <input className="becasInput" type="checkbox" id='becasCollapsibleHead' />
              <label className='becasLabel' htmlFor="becasCollapsibleHead">REQUISITOS</label>
              <div className="becasCollapsibleText">
                <ul className='becasUL'>
                  <li className='becasLI'>Ser argentino/a nativo/a o naturalizado/a o extranjero/a...</li>
                  <li className='becasLI'>Edad entre 18 y 30 años según tu situación académica</li>
                  <li className='becasLI'>No adeudar materias al momento de la inscripción</li>
                  <li className='becasLI'>Ingresos familiares hasta 3 SMVM</li>
                  <li className='becasLI'>Ser estudiante regular o tener 2 materias aprobadas</li>
                </ul>
              </div>
            </div>

            <div className="becasCollapsibleContainer">
              <input className="becasInput" type="checkbox" id='becasCollapsibleHead1' />
              <label className='becasLabel' htmlFor="becasCollapsibleHead1">TIPO DE BECAS INTERNACIONALES</label>
              <div className="becasCollapsibleText">
                <ul className='becasUL'>
                  <li className='becasLI'>
                    <a href="https://utn.edu.ar/es/secretaria-rrii/srrii-utn-daad" target="_blank" rel="noopener noreferrer">DAAD</a>
                  </li>
                  <li className='becasLI'>
                    <a href="https://utn.edu.ar/es/secretaria-rrii/iaeste" target="_blank" rel="noopener noreferrer">IAESTE</a>
                  </li>
                  <li className='becasLI'>
                    <a href="https://www.utn.edu.ar/es/secretaria-rrii/srrii-pila" target="_blank" rel="noopener noreferrer">PILA</a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        <section className="becasSectionBelgrano">

          <h2 className="becasTitleBelgrano">Nos complace anunciar uno de los mejores apoyos económicos nacionales</h2>
          <h2 className='becasH2Belgrano'>-Manuel Belgrano</h2>

          <p className='becasPBelgrano'>
            Las <b>Becas Manuel Belgrano</b> tienen como principal objetivo proporcionar un incentivo económico en forma de Beca de estudio
            para que jóvenes provenientes de hogares de bajos ingresos realicen una carrera universitaria o una tecnicatura en una disciplina
            considerada estratégica para el desarrollo económico y productivo del país.
            Se consideran estratégicas las disciplinas pertenecientes a las siguientes áreas: Alimentos, Ambiente, Computación e Informática,
            Energía, Gas, Minería, Movilidad y Transporte, y Petróleo.
          </p>

          <div className="becasCollapsibleContainer">
            <input className="becasInput" type="checkbox" id="becasCollapsibleBelgrano" />
            <label className='becasLabel' htmlFor="becasCollapsibleBelgrano">REQUISITOS</label>
            <div className="becasCollapsibleText">
              <ul className='becasUL'>
                <li className='becasLI'>Argentinos/as nativos/as o naturalizados/as con DNI.</li>
                <li className='becasLI'>Estudiantes regulares de universidades nacionales y provinciales de gestión pública...</li>
                <li className='becasLI'>Estudiantes ingresantes entre 18 y 30 años y estudiantes cursantes hasta 35 años.</li>
                <li className='becasLI'>Postulantes con discapacidad o pueblos originarios sin límite de edad.</li>
                <li className='becasLI'>Ingresos familiares menores a 3 salarios mínimos, vitales y móviles.</li>
              </ul>
            </div>
          </div>

          <a className="becasBelgranoLink" href="https://www.argentina.gob.ar/educacion/becas/becas-manuel-belgrano" target="_blank" rel="noopener noreferrer">
            INSCRIPCIÓN
          </a>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Becas;
