import React from 'react';
import { ContenidoJuegos } from '../components/ContenidoJuegos';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { TiendaPlay } from '../components/TiendaPlay';


export const Home = () => {
    return (
        <>
          <Navbar /> 
          <Hero /> 
          <ContenidoJuegos />
          <TiendaPlay />
          <Footer />
        </>
    )
}
