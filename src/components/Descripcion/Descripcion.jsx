import './Descripcion.css'; 
import logoedicion from './Logo Completo.png' 
import logoagencia from './prw.png'


export default function Descripcion() {
  return (
    <div className="descripcion">
      <div className="logo-left">
        {/*imagen de logo izquierdo */}
        <img src={logoedicion} alt="logodeedicion" />
      </div>
      <div className="text-container">
        <h1 className="Descripcion">TE EDITAMOS EN TIEMPO Y FORMA</h1>
        <p>Somos principales editores de la agencia de marketing ELITE ADVISER siendo un equipo creativo que se centra en las necesidades de nuestros clientes</p>
      </div>
      <div className="logo-right">
        {/*imagen de logo derecho */}
        <img src={logoagencia} alt="logoagencia" />
      </div>
    </div>
  );
}
