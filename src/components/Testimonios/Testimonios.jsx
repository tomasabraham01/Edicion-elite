

import './Testimonios.css';


import React, { useState, useEffect } from 'react';

const imagenes = [
  'src/components/Testimonios/tuma.png',
  'src/components/Testimonios/franco.png',
  'src/components/Testimonios/gervacio.png',
  'src/components/Testimonios/valen.png',
  'src/components/Testimonios/asier.png',
  'src/components/Testimonios/alex.png',
  'src/components/Testimonios/lucho.png',
];

export default function Galeria() {
  const [indiceImagen, setIndiceImagen] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      //  indice de la imagen para mostrar la siguiente imagen
      setIndiceImagen((prevIndice) => (prevIndice + 1) % imagenes.length);
    }, 5000); //  tiempo entre cada cambio de imagen (en milisegundos)

    return () => clearInterval(intervalo); 
  }, [indiceImagen]); 

  return (
    <div className="contenedor-imagenes">
      <img src={imagenes[indiceImagen]} alt={`Imagen ${indiceImagen + 1}`} className="imagen" />
    </div>
  );
  
}
