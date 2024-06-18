import './Menuhamburguesa.css' 
import Hotmail from '../Hotmail/Hotmail'
import Instagram from '../Instagram/Instagram'


function Menuhamburguesa({ open }) {

    return (<div className="menu-hamburguesa" hidden={!open}>

        <p className='titulo titulo-trabajos'>TRABAJOS</p> <p className='titulo titulo-argentina'>🌐ARGENTINA</p>
        <Hotmail />
        <Instagram />

    </div>)
}
export default Menuhamburguesa