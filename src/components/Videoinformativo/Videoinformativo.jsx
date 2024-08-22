import '../Contenido/Contenido.css';
import './Videoinformativo.css';
import logoplay from './boton play.png';
import mundo from './mundo.png.png';
import portada from "./pic.png"
import video from "../Videoinformativo/informativo.mp4"

import React, { useState, useRef } from 'react';

export default function Videoinformativo() {

    const [expandido, setExpandido] = useState(false);
    const videoref = useRef(null)
    const handleToggleExpandido = () => {
        setExpandido(!expandido);
        if (expandido) { videoref.current.play() } else { videoref.current.pause() }
    };

    return (
        <div className='video-container'>
            <div className='texto-derecha'>
                <h2>Trabajamos con una amplia
                    gama de clientes nacionales e internacionales</h2>
                <img src={mundo} alt="el mundo en el texto" />
            </div>
            <div className='portada' onClick={handleToggleExpandido}>
                    {expandido ? (
                        <div className={`contenido expandido`} style={{ width: '100%', height: '100%' }}>
                            <video controls ref={videoref}>
                                <source src={video} type="video/mp4" />
                                Tu navegador no soporta el elemento de video.
                            </video> 
                        </div>
                    ) : (
                        <button className='videodeentrada' >
                            <img src={logoplay} alt="logodelosvideos" />
                        </button>
                    )}
            </div>
        </div>
    );
}