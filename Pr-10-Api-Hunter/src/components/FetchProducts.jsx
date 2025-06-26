import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Reducer/fetchSlice';
import '../App.css'; // or wherever your CSS is

const FetchProducts = () => {
    const dispatch = useDispatch();
    const { products, loading } = useSelector((state) => state.fetchProducts);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className="container my-4">
            <h4 className="text-center mb-4">🧲 Products</h4>
            <div className="row">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    products.map((product) => (
                        <div className="col-md-4 mb-4" key={product.id}>
                            <div className="card card-custom h-100 shadow-sm bg-light">
                                <img
                                    src={product.thumbnail}
                                    className="card-img-top p-3"
                                    alt={product.title}
                                    style={{
                                        height: '200px',
                                        objectFit: 'contain',
                                        backgroundColor: '#f8f9fa',
                                    }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <h6 className="text-muted">{product.brand} | {product.category}</h6>
                                    <p><strong>Price:</strong> ${product.price}</p>
                                    <p><strong>Rating:</strong> ⭐ {product.rating}</p>
                                    <p><strong>In Stock:</strong> {product.stock}</p>
                                    <p className="text-muted small">{product.description.substring(0, 100)}...</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default FetchProducts;
