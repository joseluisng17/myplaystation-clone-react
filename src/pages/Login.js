import React from 'react'
import { CarouselLogin } from '../components/CarouselLogin'
import { FormLogin } from '../components/FormLogin'

export const Login = () => {
    return (
        <section className="bg-dark">
            <div className="row g-0">

                { /* <!-- SECCION DEL CAROUSEL --> */}
                <div className="col-lg-6 d-none d-lg-block">
                    <CarouselLogin />
                </div>

                { /* <!-- SECCION DEL FORMULARIO --> */ }
                <div className="col-lg-6 d-flex min-vh-100 flex-column justify-content-betwen">
                    <FormLogin />
                </div>

            </div>
        </section>
    )
}
