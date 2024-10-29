import './Videop.css';
import Cuadrante from '../Contenido/Cuadrante';
import portada from "/images/pic.png"

export default function Videop() {
  return (
    <div className='videoyoutube'>
      <Cuadrante

 img={portada} video="/tuma video competicion 1.mp4"  titulo="DEPORTE" 
      ></Cuadrante>
    </div>

  );
}
