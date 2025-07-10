// Contacto.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import "../style/contacto.css"
import { useState } from 'react';
import Footer from './reusable/Footer';


function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    consulta: ''
  })
   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
  }
  const handleReset = () => {
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      consulta: ''
    });
  };
  return (
    <div>
      

      <main className='contactoMain'>
        <section className='contactoSection'>
          <p className='contactoPTitle'>CONTACTO</p>

          <div className='contactoContent'>

            <div className='contactoGps'>
              <p className='contactoPGps'>Si no, podés acercarte a nuestra más grande sede</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.991282986412!2d-58.37279733406419!3d-34.60438193435759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacd5cebe305%3A0x1c5677628906db1e!2sUniversidad%20Tecnol%C3%B3gica%20Nacional%20Rectorado!5e0!3m2!1ses!2sar!4v1746402937118!5m2!1ses!2sar"
                width="100%" height="250" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className='contactoInputsGeneral'>
              <form onSubmit={handleSubmit}>
              <input 
                  className='contactoInputs'
                  type="text" 
                  placeholder="Nombre y Apellido" 
                  name='nombre'
                  value={formData.nombre}
                  onChange={handleChange}
              />
              <input
                  className='contactoInputs' 
                  type="email" 
                  placeholder="Ingrese su email"
                  name='email'
                  value={formData.email}
                  onChange={handleChange} 
               />
              <input 
                  className='contactoInputs' 
                  type="number" 
                  placeholder="Número de teléfono" 
                  name='telefono'
                  value={formData.telefono}
                  onChange={handleChange}
              />
              <input 
                  className='contactoInputs' 
                  type="text" 
                  placeholder="Escribí tu consulta"
                  name='consulta'
                  value={formData.consulta}
                  onChange={handleChange}
              />
              <input 
                  className='contactoInputs' 
                  type='submit' 
                  id='contactoSend' 
                  value="Enviar"
                   onClick={handleReset} 
              />
             {/*  <button type='button' onClick={handleReset} className='contactoInputsButton'>
               Enviar
              </button> */}
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Contacto;

 