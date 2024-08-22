import './Testimonios.css';

import imagent from "./tuma.png";
import imagenf from "./franco.png";
import imageng from "./gervacio.png";
import imagenv from "./valen.png";
import imagena from "./asier.png";
import imagenal from "./alex.png";
import imagenl from "./lucho.png";

import React, { useState, useEffect } from 'react';

const imagenes = [
  imagent,
  imagenf,
  imageng,
  imagenv,
  imagena,
  imagenal,
  imagenl,
];

export default function Galeria() {
  const [indiceImagen, setIndiceImagen] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      // Cambia al siguiente índice de imagen
      setIndiceImagen((prevIndice) => (prevIndice + 1) % imagenes.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(intervalo); 
  }, []); // Elimina `indiceImagen` de las dependencias para evitar reinicios innecesarios

  return (
    <div className="contenedor-imagenes">
      <img src={imagenes[indiceImagen]} alt={`Imagen ${indiceImagen + 1}`} className="imagen" />
    </div>
  );
}
