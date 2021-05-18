import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/img/ps-logo.png';

export const Navbar = () => {
    return (
        <header>
            <div className="nav-bar contenedor">
                <nav className="navegacion-principal">
                    <Link to="#"><img className="logo" src={logo} alt="logo de ps"/></Link>
                    <Link to="#">Juegos</Link>
                    <Link to="#">Servicios</Link>
                    <Link to="#">Tienda</Link>
                </nav>
                <button className="btn-iniciar-sesion">Iniciar Sesión</button>
            </div>
        </header>
    )
}
