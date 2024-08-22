import imagen1 from "../Imagenes/1.png"
import imagen2 from "../Imagenes/2.png"
import imagen3 from "../Imagenes/pc.png"
import './Imagenes.css';


import React, { useState, useEffect } from 'react';

const imagenes = [
  imagen1,
  imagen2,
imagen3,
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
