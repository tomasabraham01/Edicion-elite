import './Navbar.css'
import logo from './Logo.png'
import Hotmail from '../Hotmail/Hotmail'
import Instagram from '../Instagram/Instagram'
import MenuButton from '../Menuhamburguesa/Menuboton'
import Menuhamburguesa from '../Menuhamburguesa/Menuhamburguesa'



export default function Navbar({ open, handleClick }) {
    return (
        <div className='navbar'> 
        <div className='navegador'>
            <div className='contenedor-imagen'>
                <img className='logo' src={logo} alt="logo" />
                <h1 className="titulo">EDICION ELITE</h1>

            </div>
            <div className='contenedor'> 
           <a  className='titulo titulo-trabajos' href="#cuadrantes">Trabajos</a> <p className='titulo titulo-argentina'>🌐ARGENTINA</p>
                <Hotmail />
                <Instagram />


            </div>
            <MenuButton open={open} handleClick={handleClick} />   
         </div>
            < Menuhamburguesa open={open} />
         </div>
    )


}