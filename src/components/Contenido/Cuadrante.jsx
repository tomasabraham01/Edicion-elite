import React, { useState,useRef } from 'react';
import './Contenido.css';

 

export default function Cuadrante({ titulo,img,video}) {
  const [expandido, setExpandido] = useState(false);
  const [play, setPlay] = useState(false);
  const videoref=useRef(null) 
  const handleToggleExpandido = () => {
    setExpandido(!expandido);
    if (expandido){videoref.current.play()} else{videoref.current.pause()}
  };

  return (
    <div className={`contenido ${expandido ? 'expandido' : ''}`} onClick={handleToggleExpandido}>
      {expandido ? (
        <>
        <video controls ref={videoref}>
          <source src={`src/components/Contenido/videos/${video}`} type="video/mp4" />
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