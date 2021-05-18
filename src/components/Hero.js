import React from 'react';
import badgeHero  from '../assets/img/ps5-badge.png';

export const Hero = () => {
    return (
        <>
            <section className="hero">
                <div className="contenido-hero contenedor">
                    <img src={badgeHero} className="imagen-titulo-hero" alt="titulo en el hero de ps5" />
                    <h2 className="titulo-hero" >Spider-Man mile morales</h2>
                    <p className="hero-descripcion">
                        Prueba jugar con Mile morales y defender la ciudad de New York,
                        recorre toda la ciudad a traves de los muros y ve los hermosos paisajes que ofrece NY.
                    </p>
                    <button className="btn-hero">Comprar ahora</button>
                </div>
            </section>
        </>
    )
}
