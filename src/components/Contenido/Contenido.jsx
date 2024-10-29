import Cuadrante from "./Cuadrante";
import './Contenido.css';
import deporte from "/images/deporte.jpg"
import comida from "/images/ger.png"
import personal from "/images/marcapersonal.png"
import elite from "/images/elite.png"
import atleta from "/images/atle.png"
import motion from "/images/2d.png"
import psico from "/images/psico.png"
import nutri from "/images/nutri.jpg"
import perfume from "/images/esta.png"
import traiding from "/images/traiding.jpg"

import competicion from "/videos/competicion1.mp4"
import gerva4 from "/videos/gerva4.mp4"
import marca from "/videos/marca.mp4"
import adviser from "/videos/adviser.mp4"
import lucho from "/videos/lucho.mp4"
import graphic from "/videos/graphic.mp4"
import asier from "/videos/asier.mp4"
import alex from "/videos/alex.mp4"
import perfume1 from "/videos/perfume.mp4"
import jorge from "/videos/jorge.mp4"

function Contenido() {
  return (
    <div id='cuadrantes' className='cuadrantes'>
      <Cuadrante img={deporte} video={competicion} titulo="DEPORTE" />
      <Cuadrante img={comida} video={gerva4} titulo="GASTRONOMIA" />
      <Cuadrante img={personal} video={marca} titulo="MARCA PERSONAL" />
      <Cuadrante img= {elite} video={adviser} titulo="ELITE ADVISER" />
      <Cuadrante img={atleta} video={lucho} titulo="ATLETA" />
      <Cuadrante img={motion} video={graphic} titulo="MOTION GRAPHICS" />
      <Cuadrante img={psico} video={asier} titulo="PSICOLOGO DEPORTIVO" />
      <Cuadrante img={nutri} video={alex} titulo="NUTRICIONISTA" />
      <Cuadrante img={perfume} video={perfume1} titulo="PUBLICIDAD" />
      <Cuadrante img={traiding} video={jorge} titulo="JORGE CAMPOS" />
    </div>
  );
}

export default Contenido;
