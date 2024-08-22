import React from 'react';
import './Texto.css';
import fondot from "./fondot.png"

export default function Texto() {
  return (
    <section className="servicios">
      <h2>Es el momento perfecto para invertir en nuestra marca y llevarla al siguiente nivel</h2>
      <div className="servicios-grid">
        <div className="servicio">
          <h3>Edición de Videos</h3>
        </div>
        <div className="servicio">
          <h3>Edición de Fotos</h3>
        </div>
        <div className="servicio">
          <h3>Páginas Web</h3>
        </div>
        <div className="servicio">
          <h3>Manejo de Redes Sociales</h3>
        </div>
        <div className="servicio">
          <h3>Audiovisual: Fotos y Videos</h3>
        </div>
        <div className="servicio">
          <h3>Branding</h3>
        </div>
        <div className="servicio">
          <h3>Diseño Gráfico</h3>
        </div>
        <div className="servicio">
          <h3>Construcción de Marca</h3>
        </div>
      </div>
    </section>
  );
}
