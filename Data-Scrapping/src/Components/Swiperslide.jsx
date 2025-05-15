import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import '../styles/Swiperslide.css'
const Swiperslide = ({ swiperList }) => {
    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Best Sellers</h1>
            <div className="row justify-content-center">
                {swiperList.map((swipe, i) => (
                    <div key={i} className="col-sm-6 col-md-4 col-lg-4 d-flex">
                        <div className="card shadow-sm mb-4 w-100 fade-in">
                            <img
                                src={swipe.image}
                                className="card-img-top"
                                alt={swipe.title}
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{swipe.title}</h5>
                                <p className="card-text">{swipe.description}</p>
                                <p className="text-muted fw-bold">Price: {swipe.price}</p>
                                <button className="btn btn-outline-success mt-auto">
                                    <FaShoppingCart size={20} className="me-2" />
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    )
}

export default Swiperslide
