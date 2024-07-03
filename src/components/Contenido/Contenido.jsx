import Cuadrante from "./Cuadrante";
import './Contenido.css';


function Contenido() {
  return (
    <div id='cuadrantes' className='cuadrantes'>
      <Cuadrante img='DEPORTE.JPG' video="/tuma video competicion 1.mp4"  titulo="DEPORTE" />
      <Cuadrante img='GERVA.PNG' video="/gerva receta 4.mp4" titulo="GASTRONOMIA" />
      <Cuadrante img='marca.JPG'video="/marca.MP4" titulo="MARCA PERSONAL" />
      <Cuadrante img='ELITEADVISERR.png'video="/ADVISER VIDEO.MP4" titulo="ELITE ADVISER" />
      <Cuadrante img='ATLETA.png' video="" titulo="ATLETA" />
      <Cuadrante img='MOTION GRAPHICS.PNG' video="/GRAPHIC.mp4" titulo="MOTION GRAPHICS" />
      <Cuadrante img='PSICOLOGOD.PNG' video="/ASIER VIDEO.mp4" titulo="PSICOLOGO DEPORTIVO" />
      <Cuadrante img='NUTRICIONISTA.jpg' video="/alex video pag.mp4" titulo="NUTRICIONISTA" />
      <Cuadrante img='VIIAJES.jpg' video="" titulo="VIAJES" />
      <Cuadrante img='portadas.jpg' video="" titulo="PORTADAS Y FOTOGRAFIAS" />
    </div>
  );
}

export default Contenido;
