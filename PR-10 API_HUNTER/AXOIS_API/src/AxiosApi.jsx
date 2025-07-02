import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './Redux/Action/AxoisAction';
import 'bootstrap/dist/css/bootstrap.min.css';

const AxiosApi = () => {
    const dispatch = useDispatch();
    const { products, loading } = useSelector((state) => state.productData);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className="container mt-4">
            <h2 className="mb-4 text-center">📦 Product List</h2>
            {loading ? (
                <div className="text-center">Loading...</div>
            ) : (
                <div className="row">
                    {products.map((product) => (
                        <div className="col-md-3 mb-4" key={product.id}>
                            <div className="card h-100">
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="card-img-top"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">${product.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AxiosApi;
