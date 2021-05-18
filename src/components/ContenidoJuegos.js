import React from 'react';
import { imagenes } from '../assets/imagenes';

export const ContenidoJuegos = () => {
    return (
        <section>
            <div className="juegos">
                <h3 className="play-no-limit">PLAY HAS NO LIMITS</h3>
                <h1 className="">Explorar PlayStation®</h1>
                <h3 className>Juegos increíbles, entretenimiento sin pausa. Nunca hubo un mejor momento para disfrutar PS</h3>

                <div className="cards-juegos">
                    <div className="card">
                        <img src={imagenes.godOfWar} alt="imagen juegos" />
                        <h4 className="title-card">God of war</h4>
                        <p>Juegos increíbles, entretenimiento sin pausa. Nunca hubo un mejor</p>
                        <button className="btn-card">Más información</button>
                    </div>
                    <div className="card">
                        <img src={imagenes.crash} alt="imagen juegos" />
                        <h4 className="title-card">Crash Bandicoot</h4>
                        <p>Juegos increíbles, entretenimiento sin pausa. Nunca hubo un mejor</p>
                        <button className="btn-card">Más información</button>
                    </div>
                    <div className="card">
                        <img src={imagenes.horizon} alt="imagen juegos" />
                        <h4 className="title-card">Horizon</h4>
                        <p>Juegos increíbles, entretenimiento sin pausa. Nunca hubo un mejor</p>
                        <button className="btn-card">Más información</button>
                    </div>
                    <div className="card">
                        <img src={imagenes.familiaPS} alt="imagen juegos" />
                        <h4 className="title-card">Familia PS</h4>
                        <p>Juegos increíbles, entretenimiento sin pausa. Nunca hubo un mejor</p>
                        <button className="btn-card">Más información</button>
                    </div>
                    <div className="card">
                        <img src={imagenes.theLasOfUs} alt="imagen juegos" />
                        <h4 className="title-card">The last of us</h4>
                        <p>Juegos increíbles, entretenimiento sin pausa. Nunca hubo un mejor</p>
                        <button className="btn-card">Más información</button>
                    </div>
                    
                </div>

            </div>
        </section>        
    )
}
