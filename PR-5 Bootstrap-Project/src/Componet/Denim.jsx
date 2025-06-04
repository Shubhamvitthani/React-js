import './Collection.css';

function Collection() {
    return (
        <div className="container my-5">
            <h2 className="text-center fw-bold">DENIM COLLECTION</h2>
            <p className="text-center text-muted mb-5">
                Explore the best trends for girls and women at SaleHub! Clothes, shoes and cool accessories for a new <br className="d-none d-md-block" />season are available now at SaleHub online.
            </p>

            <div className="row mt-4">
                {/* Left Large Image */}
                <div className="col-12 col-md-8 mb-4">
                    <div className="position-relative collection-image-wrapper">
                        <img
                            src="https://minion-vinovatheme.myshopify.com/cdn/shop/files/banner_1_900x.png?v=1615515282"
                            alt="Denim Jacket"
                            className="img-fluid w-100 rounded collection-image"
                        />
                        <div className="position-absolute bottom-0 start-0 p-3 text-white">
                            <h4 className="fw-bold">DENIM-JACKET</h4>
                            <p>14 Denim-Jacket Outfits to Live in Now That It Is Fall</p>
                            <p>SHOP THE COLLECTION</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4 d-flex flex-column gap-4">
                    <div className="position-relative collection-image-wrapper">
                        <img
                            src="https://minion-vinovatheme.myshopify.com/cdn/shop/files/bn-2_676a7adf-ea7b-4fa1-8848-8517abdc2793_540x.jpg?v=1616643656"
                            alt="Denim Mini Skirt"
                            className="img-fluid rounded collection-image"
                        />
                        <div className="position-absolute bottom-0 start-0 p-2 text-white">
                            <h6 className="fw-bold">DENIM MINI SKIRT</h6>
                            <p>SHOP THE COLLECTION</p>
                        </div>
                    </div>

                    {/* Bottom Right Image */}
                    <div className="position-relative collection-image-wrapper">
                        <img
                            src="https://minion-vinovatheme.myshopify.com/cdn/shop/files/banner_3_540x.png?v=1615515309"
                            alt="Hooded Denim"
                            className="img-fluid rounded collection-image"
                        />
                        <div className="position-absolute bottom-0 start-0 p-2 text-white">
                            <h6 className="fw-bold">HOODED DENIM</h6>
                            <p className="mb-1">Subtitle from happy customers</p>
                            <p>SHOP THE COLLECTION</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collection;
