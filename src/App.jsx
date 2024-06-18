import Navbar from './components/navbar/Navbar'
import Trabajos from './components/Trabajos/Trabajos'
import Ubicacion from './components/Ubicacion/Ubicacion'
import Hotmail from './components/Hotmail/Hotmail'
import Instagram from './components/Instagram/Instagram'
import Formulario from './components/Formulario/Formulario'
import Texto from './components/Texto/Texto'
import './App.css';
import Descripcion from './components/Descripcion/Descripcion'
import Videoinformativo from './components/Videoinformativo/Videoinformativo'
import Explicacion from './components/Explicacion/Explicacion'
import Llamado from './components/Llamado/Llamado'
import Videop from './components/Videop/Videop'
import Imagenes from './components/Imagenes/Imagenes'
import Atp from './components/Atp/Atp'
import Footer from './components/Footer/Footer'
import Contenido from './components/Contenido/Contenido' 
import Testimonios from './components/Testimonios/Testimonios' 
import { useState } from 'react'


function App() {
  const[mostrar,setMostrar]=useState(false)
  function vervideo (){
  setMostrar(!mostrar)
  console.log (mostrar)
  
    } 

    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(!open);
    };

  return (
    <>
     <Navbar open={open} handleClick={handleClick} /> 
     <div className='diseño'>
     <Texto/>
     <Formulario/>
     </div>
     <Descripcion/>
     {mostrar&&<Videop/>}
     <Videoinformativo mostrar={vervideo} />
     <Explicacion/>
     <Llamado/>
     <Imagenes/>
     <Atp/>
     <Contenido/>
     <Testimonios/>
     <Footer/>



    </>
  )
}

export default App
