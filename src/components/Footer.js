import React from 'react';
import { Link } from 'react-router-dom';
import ps5badge from '../assets/img/ps5-badge.png';
import logoSony from '../assets/img/sie.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-contenido contenedor">
                <img src={ps5badge} className="img-footer" alt="logo de ps5" />
                <img src={logoSony} className="svg-footer" alt="imagen de sony" />
                <nav className="navegacion-footer">
                    <Link to="#">Soporte</Link>
                    <Link to="#">Politicas de PS</Link>
                    <Link to="#">Facebook</Link>
                </nav>
            </div>
        </footer>
    )
}
