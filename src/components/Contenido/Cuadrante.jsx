import React, { useState,useRef } from 'react';
import './Contenido.css';

 

export default function Cuadrante({ titulo,img,video}) {
  const [expandido, setExpandido] = useState(false);

  const videoref=useRef(null) 
  const handleToggleExpandido = () => {
    setExpandido(val => !val);
    (expandido) ? videoref.current.play() : videoref.current.pause()
  };

  return (
    <div className={`contenido ${expandido ? 'expandido' : ''}`} onClick={handleToggleExpandido}>
      {expandido ? (
        <>
        <video controls ref={videoref}>
          <source src={video} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video> </>
      ) : (
        <>
          <img src={img} alt={`Portada de ${titulo}`} />
          <div className="overlay">
            <h3>{titulo}</h3>
          </div>
        </>
      )}
    </div>
  );
}