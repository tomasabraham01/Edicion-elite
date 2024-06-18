import React from 'react';
import './Formulario.css';

function Formulario() {
  return (
    <div className='fondodeformulario'>
      <h1 className="tipf">CONSULATANOS</h1>
      <form className='formulario'>
        <label className='diseñoformulario' htmlFor="nombre">Nombre:</label>
        <input className="datosdelformulario" type="text" id="nombre" name="nombre" required /><br />

        <label className='diseñoformulario' htmlFor="email">Email:</label>
        <input className="datosdelformulario" type="email" id="email" name="email" required /><br />

        <label className='diseñoformulario' htmlFor="telefono">Teléfono:</label>
        <input className="datosdelformulario" type="tel" id="telefono" name="telefono" /><br />

        <label className='diseñoformulario' htmlFor="mensaje">Mensaje:</label>
        <textarea className="datosdelformulario" id="mensaje" name="mensaje" required></textarea><br />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;
