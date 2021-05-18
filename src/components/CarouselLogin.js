import React from 'react'

export const CarouselLogin = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item img-1 min-vh-100 active">
                    {/* <!-- Imagen en CSS --> */ }
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="fw-bold">First slide label</h5>
                        <p className="text-muted text-decoration-none">Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                    <div className="carousel-item  img-2 min-vh-100">
                        { /* <!-- Imagen en CSS --> */ }
                        <div className="carousel-caption d-none d-md-block">
                          <h5 className="fw-bold">Second slide label</h5>
                          <p className="text-muted text-decoration-none">Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
