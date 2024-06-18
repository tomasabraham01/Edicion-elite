import React, { useState } from 'react';
import './Contenido.css';

function Cuadrante({ titulo,img}) {
  const [expandido, setExpandido] = useState(false);

  const handleToggleExpandido = () => {
    setExpandido(!expandido);
  };

  return (
    <div className={`contenido ${expandido ? 'expandido' : ''}`} onClick={handleToggleExpandido}>
      {expandido ? (
        <video controls>
          <source src="ruta/a/tu/video.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      ) : (
        <>
          <img src={`src/components/Contenido/${img}`} alt={`Portada de ${titulo}`} />
          <div className="overlay">
            <h3>{titulo}</h3>
          </div>
        </>
      )}
    </div>
  );
}


function Contenido() {
  return (
    <div id='cuadrantes' className='cuadrantes'>
      <Cuadrante img='DEPORTE.JPG' titulo="DEPORTE" />
      <Cuadrante img='GERVA.PNG' titulo="GASTRONOMIA" />
      <Cuadrante img='marca.JPG' titulo="MARCA PERSONAL" />
      <Cuadrante img='ELITEADVISERR.png' titulo="ELITE ADVISER" />
      <Cuadrante img='ATLETA.png' titulo="ATLETA" />
      <Cuadrante img='MOTION GRAPHICS.PNG' titulo="MOTION GRAPHICS" />
      <Cuadrante img='PSICOLOGOD.PNG' titulo="PSICOLOGO DEPORTIVO" />
      <Cuadrante img='NUTRICIONISTA.jpg' titulo="NUTRICIONISTA" />
      <Cuadrante img='VIIAJES.jpg' titulo="VIAJES" />
      <Cuadrante img='portadas.jpg' titulo="PORTADAS Y FOTOGRAFIAS" />
    </div>
  );
}

export default Contenido;
