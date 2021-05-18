import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/ps5-badge.png';

export const FormLogin = () => {
    return (
        <>
            <div className="px-lg-5 pt-lg-4 pb-lg-3 p-4 mb-5">
                <img src={logo} className="img-fluid logo-login" alt="Logo de ps5" />
            </div> 
            <div className="px-lg-5 py-lg-4 p-4 d-flex flex-column justify-content-center mt-4">
                <h1 className="fw-bold mb-4">Bienvenido de vuelta</h1>
                <form className="mb-5">
                    <div className="mb-4">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email</label>
                        <input type="email" className="form-control bg-dark-x border-0 input-login" placeholder="Ingresa tu email"id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Contraseña</label>
                        <input type="password" className="form-control bg-dark-x border-0 mb-2 input-login" placeholder="Ingresa tu contraseña" id="exampleInputPassword1" />
                        <Link to="#" id="emailHelp" className="form-text text-muted text-decoration-none">¿Has olvidado tu contraseña?</Link>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 btn-login">Iniciar Sesión</button>
                </form>

                { /* <!-- text-mured es para que este en color gris--> */ }
                <p className="fw-bold text-center text-muted">O Inicia Sesión Con</p>
                <div className="d-flex justify-content-around">
                    <button type="submit" className="btn btn-outline-light flex-grow-1 m-2 btn-login">Google</button>
                    <button type="submit" className="btn btn-outline-light flex-grow-1 m-2 btn-login">Facebook</button>
                </div>

                <div className="text-center px-lg-5 pt-lg-3 pb-lg-4 p-4">
                    <p className="d-inline-block mb-0">¿Todavía no tienes una vuenta?</p> <Link to="#" className="text-light fw-bold text-decoration-none">Crea una ahora</Link>
                </div>
            </div>
        </>
    )
}
