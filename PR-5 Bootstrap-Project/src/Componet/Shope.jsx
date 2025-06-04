import { useState, useEffect } from "react";
import './Shope.css';  // CSS file import karo

function Shope() {
    const data = [
        { id: 1, image: "https://minion-vinovatheme.myshopify.com/cdn/shop/files/lb-1_88ecbdcc-c1c6-47af-9cb5-1f21ebae7c4c_360x.png?v=1617705755", btn: "Shop Now" },
        { id: 2, image: "https://minion-vinovatheme.myshopify.com/cdn/shop/files/lb-2_1e482937-4f64-4d3d-9e9f-feb36a836c0c_360x.png?v=1617705770", btn: "Shop Now" },
        { id: 3, image: "https://minion-vinovatheme.myshopify.com/cdn/shop/files/lb-3_243a2a47-8869-47c2-a1b7-ea9163d96e52_540x.png?v=1617705787", btn: "Shop Now" },
        { id: 4, image: "https://minion-vinovatheme.myshopify.com/cdn/shop/files/lb-4_d1d516ae-775a-453a-a97b-84c9e80f69cd_360x.png?v=1617705798", btn: "Shop Now" },
        { id: 5, image: "https://minion-vinovatheme.myshopify.com/cdn/shop/files/lb-5_fbd8fa3f-d8a8-4ef1-a023-c348c802ad38_360x.png?v=1617705810", btn: "Shop Now" },
        { id: 6, image: "https://minion-vinovatheme.myshopify.com/cdn/shop/files/lb-6_a88c6dc9-2f7b-4020-96b1-f01cd6593323_900x.png?v=1617705822", btn: "Shop Now" },
        { id: 7, image: "https://minion-vinovatheme.myshopify.com/cdn/shop/files/lb-7_177acd91-0dbb-4e63-8fe7-2311d1c193e8_360x.png?v=1617705832", btn: "Shop Now" },
        { id: 8, image: "https://minion-vinovatheme.myshopify.com/cdn/shop/files/lb-8_561008c8-c850-49d3-904c-f30189a60d38_360x.png?v=1617705843", btn: "Shop Now" },
    ];

    const [shopeLook, setShopeLook] = useState([]);

    useEffect(() => {
        setShopeLook(data);
    }, []);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="text-center mb-4">
                    <h2>Shop The Looks</h2>
                    <p>
                        Our latest endeavour features designs from around the world with materials so <br />
                        comfortable you won't want to wear anything else ever again.
                    </p>
                </div>
            </div>

            <div className="row shope-container">
                {shopeLook.map(item => (
                    <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="shope-item">
                            <div className="img-wrapper position-relative">
                                <img src={item.image} alt={`Item ${item.id}`} className="shope-img img-fluid" />
                                <div className="overlay">
                                    <button className="hover-button">{item.btn}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shope;
