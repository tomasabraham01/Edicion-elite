import { useState } from 'react';
import React from 'react';
import './Videoinformativo.css';
import logoplay from './boton play.png';
import mundo from './mundo.png.png';
import Videop from '../Videop/Videop';



export default function Videoinformativo({ mostrar }) {

    return (
        <div className='video-container'>



            <div className='texto-derecha'>
                <h2>Trabajamos con una amplia
                    gama de clientes nacionales e internacionales</h2>

                <img src={mundo} alt="el mundo en el texto" />
            </div>
            <div className='portada'>

                <button className='videodeentrada' onClick={mostrar}>
                    <img src={logoplay} alt="logodelosvideos" />
                </button>
            </div>
        </div>
    );
}
