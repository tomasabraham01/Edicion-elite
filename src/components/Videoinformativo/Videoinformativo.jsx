

import './Videoinformativo.css';
import logoplay from './boton play.png';
import mundo from './mundo.png.png';

import React, { useState, useRef } from 'react';



export default function Videoinformativo(){

    const [expandido, setExpandido] = useState(false);
    const [play, setPlay] = useState(false);
    const videoref = useRef(null)
    const handleToggleExpandido = () => {
        setExpandido(!expandido);
        if (expandido) { videoref.current.play() } else { videoref.current.pause() }
    };

    return (
        <div className={`contenido ${expandido ? 'expandido' : ''}`} onClick={handleToggleExpandido}>
            {expandido ? (
                <>
                    <video controls ref={videoref}>
                        <source src={`src/components/Contenido/videos/${video}`} type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                    </video> </>
            ) : (
            
                    <div className='video-container'>



                        <div className='texto-derecha'>
                            <h2>Trabajamos con una amplia
                                gama de clientes nacionales e internacionales</h2>

                            <img src={mundo} alt="el mundo en el texto" />
                        </div>
                        <div className='portada'>

                            <button className='videodeentrada' >
                                <img src={logoplay} alt="logodelosvideos" />
                            </button>
                        </div>
                    </div>
                
            )}
        </div>
    );
}