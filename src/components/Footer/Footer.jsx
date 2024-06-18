import React from 'react';
import './Footer.css';
import Logito from './Logoempresa.png';
import Insta from './instagram.png';
import Phone from './telefono.png';
import Email from './gmail.png';
import Location from './ubi.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footerizquierda">
          <img src={Logito} alt="Logofooter" className="logo" />
          <p className="textologo">EDICION ELITE</p>
        </div>
        <div className="footercentro">
          <div className="items"> <h3 className='tituloservicio'>Servicios</h3>
            <ul>
              <li>Edición de vídeos</li>
              <li>Edición de fotos</li>
              <li>Paginas Web</li>
              <li>Manejo de Redes Sociales</li>
            </ul></div>
          <div className="items"> <h3 className='noseve'></h3>

            <ul>

              <li>Audiovisuales: Fotos y Vídeos</li>
              <li>Diseño Grafico</li>
              <li>Branding</li>
              <li>Construcción de Marca</li>

            </ul></div>


        </div>
        <div className="footerderecha">
          <h3 className='contactos'>Contacto</h3>
          <div className="contact-info">
           <a target="_blank" href="https://www.instagram.com/edicion.elite/"> <img src={Insta} alt="Instagram" /></a>
           <a target="_blank" href="https://www.instagram.com/edicion.elite/"> <p>Edicion.elite</p></a>
          </div>
          <div className="contact-info">
            <a target="_blank" href="https://wa.me/5492657625115"><img src={Phone} alt="Teléfono" /></a>
            <a target="_blank" href="https://wa.me/5492657625115"><p>2657625115</p></a>
          </div>
          <div className="contact-info">
          <a href="mailto:tomasabraham01@hotmail.com"> <img src={Email} alt="Email" /></a>
            <a href="mailto:tomasabraham01@hotmail.com"> <p>ejemplo@gmail.com</p></a>
          </div>
          <div className="contact-info">
            <img src={Location} alt="Ubicación" />
            <p>Argentina</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

