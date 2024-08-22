import Cuadrante from "./Cuadrante";
import './Contenido.css';
import deporte from "../Contenido/deporte.jpg"
import comida from "../Contenido/ger.png"
import personal from "../Contenido/marcapersonal.png"
import elite from "../Contenido/elite.png"
import atleta from "../Contenido/atle.png"
import motion from "../Contenido/2d.png"
import psico from "../Contenido/psico.png"
import nutri from "../Contenido/nutri.jpg"
import perfume from "../Contenido/esta.png"
import traiding from "../Contenido/traiding.jpg"


function Contenido() {
  return (
    <div id='cuadrantes' className='cuadrantes'>
      <Cuadrante img={deporte} video="/tuma video competicion 1.mp4"  titulo="DEPORTE" />
      <Cuadrante img={comida} video="/gerva receta 4.mp4" titulo="GASTRONOMIA" />
      <Cuadrante img={personal} video="/marca.MP4" titulo="MARCA PERSONAL" />
      <Cuadrante img= {elite} video="/ADVISER VIDEO.MP4" titulo="ELITE ADVISER" />
      <Cuadrante img={atleta} video="/LUCHO MARVEL.mp4" titulo="ATLETA" />
      <Cuadrante img={motion} video="/GRAPHIC.mp4" titulo="MOTION GRAPHICS" />
      <Cuadrante img={psico} video="/ASIER VIDEO.mp4" titulo="PSICOLOGO DEPORTIVO" />
      <Cuadrante img={nutri} video="/alex video pag.mp4" titulo="NUTRICIONISTA" />
      <Cuadrante img={perfume} video="/PERFUME ESTE.mp4" titulo="PUBLICIDAD" />
      <Cuadrante img={traiding} video="src/components/Contenido/videos/jorge.mp4/jorge.mp4" titulo="JORGE CAMPOS" />
    </div>
  );
}

export default Contenido;
