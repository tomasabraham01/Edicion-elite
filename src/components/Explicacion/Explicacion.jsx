import React from 'react';
import './Explicacion.css';
import fondo from "./fondo.png"


export default function Explicacion() {
  return (
    <div className="explicacion-container">
      <div className="titulo-principal">
        <h2>Diseño integral para tu EMPRESA, PYME O NEGOCIO</h2>
      </div>
      <div className="textojuntos">
        <div className="izquierda">
          <h3>REDES</h3>
          <p>En el mundo digital de hoy, las redes sociales son el corazón de la interacción y la conexión. En Edición Élite, nos especializamos en crear y administrar el contenido de tus redes sociales para llevar tu presencia en línea al siguiente nivel.</p>
        </div>
        <div className="centro">
          <h3>EDICION</h3>
          <p>Cada proyecto es único, y nos aseguramos de que cada detalle refleje tu estilo y personalidad. Con una atención meticulosa a cada aspecto del proceso de edición, creamos resultados que destacan y te diferencian en un mundo saturado de imágenes.</p>
        </div>
        <div className="derecha">
          <h3>BRANDING</h3>
          <p>El branding es más que un logotipo o un eslogan: es la identidad de tu marca. En Edición Élite, te ayudamos a construir una identidad de marca sólida y memorable que resuene con tu audiencia.</p>
        </div>
      </div>
    </div>
  );
}
