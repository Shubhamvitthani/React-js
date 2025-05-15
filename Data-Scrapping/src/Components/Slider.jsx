import React from 'react'

const Slider = ({ sliderList }) => {
    return (
        <div>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    {
                        sliderList.map((slider, i) => {
                            return (
                                <div className="carousel-item active">
                                    <img src={slider.image} className="d-block w-100" alt={slider.image} />
                                </div>
                            )
                        })
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    )
}

export default Slider
