import React, { useContext, useEffect } from 'react';
import { imagenes } from '../assets/imagenes';
import { ElementContext } from '../context/elementos/ElementContext';


export const TiendaPlay = () => {

    const { elementState, cargarProduct } = useContext( ElementContext );
    const { elements } = elementState;

    // en este use disparch no le paso cargarProductos a los corchetes de el useEffect porque entra en un ciclo infinito
    // por eso agrego las lineas de eslint-idsable..  para que no marque error en la consola
    // otra forma de solucionarlo es usar el dispatch y con el dispatch ejecutar la funcion en ElementContext, como se hace en redux
    useEffect(() => {
        cargarProduct()

        // eslint-disable-next-line
    },[]);


    return (
        <section>
            
            <div className="bg-dark anuncio-tienda">
                <h1 className="">Explorar Nuestra tienda PS</h1>
                <h3 className="descripcion-tienda">Encuentra Juegos, consolas y más</h3>
            </div>

            <div className="juegos">
                <h1 className="">Explorar PlayStation®</h1>
                <h3 className="">Juegos increíbles, entretenimiento sin pausa. Nunca hubo un mejor momento para disfrutar PS</h3>

                <div className="cards-juegos">

                    {
                        elements.map( element => (
                            <div className="card">
                                <img src={`http://localhost:4000/${element.imagePath}`}  alt="imagen tienda" />
                                <h4 className="title-card">{element.title}</h4>
                                <p>{element.description}</p>
                                <button className="btn-card-tienda">Comprar</button>
                            </div>
                        ))
                    }


                    <div className="card">
                        <img src={imagenes.familiaPS} alt="imagen juegos" />
                        <h4 className="title-card">Familia PS</h4>
                        <p>Juegos increíbles, entretenimiento sin pausa. Nunca hubo un mejor</p>
                        <button className="btn-card-tienda">Comprar</button>
                    </div>
                    <div className="card">
                        <img src={imagenes.theLasOfUs} alt="imagen juegos" />
                        <h4 className="title-card">The last of us</h4>
                        <p>Juegos increíbles, entretenimiento sin pausa. Nunca hubo un mejor</p>
                        <button className="btn-card-tienda">Comprar</button>
                    </div>
                    
                </div>

            </div>
        </section>        
    )
}
