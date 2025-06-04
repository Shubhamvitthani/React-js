import 'bootstrap-icons/font/bootstrap-icons.css';
import './Footer.css'; // Custom CSS for styling

const Footer = () => {
    return (
        <>
            <footer className="bg-light py-5">
                <div className="container">
                    <div className="row text-muted">
                        {/* Company Info */}
                        <div className="col-12 col-sm-6 col-md-3 mb-4 footer-section">
                            <h5 className="fw-bold text-dark">Salehub</h5>
                            <p className="mb-1">We’re available by phone +123-456-789</p>
                            <p className="mb-1">info@example.com</p>
                            <p>Monday till Friday 10 to 6 EST</p>
                            <div className="d-flex gap-2 mt-2">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSWOPoyliln9fC_LJRJ9dheErkOJNnmhzSLw&s" alt="Amex" height="20" />
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsNgW6FaeEe3QP2NMKcry5tSEINxi2Slv8og&s" alt="Visa" height="20" />
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfFiXtMWdFcj3PJS1Tt7LK_ofnDWnfv6knrw&s" alt="PayPal" height="20" />
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnVoSJiQE9AVhqR_KAUzqMmogL5gkvR_x07Q&s" alt="Express" height="20" />
                            </div>
                        </div>

                        {/* About Us */}
                        <div className="col-12 col-sm-6 col-md-2 mb-4 footer-section">
                            <h6 className="fw-bold text-dark">About Us</h6>
                            <ul className="list-unstyled">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Factories</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Help and advice</a></li>
                                <li><a href="#">Shipping & Returns</a></li>
                                <li><a href="#">Terms and conditions</a></li>
                                <li><a href="#">Refund Policy</a></li>
                            </ul>
                        </div>

                        {/* Our Shop */}
                        <div className="col-12 col-sm-6 col-md-3 mb-4 footer-section">
                            <h6 className="fw-bold text-dark">Our Shop</h6>
                            <ul className="list-unstyled">
                                <li><a href="#">New Arrivals</a></li>
                                <li><a href="#">Top Trending</a></li>
                                <li><a href="#">Autumn Collection</a></li>
                                <li><a href="#">Back in Stock</a></li>
                                <li><a href="#">Bikini Tops</a></li>
                                <li><a href="#">Bikini Bottoms</a></li>
                                <li><a href="#">Swimwear</a></li>
                                <li><a href="#">Denim Collection</a></li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="col-12 col-sm-6 col-md-4 footer-section">
                            <h6 className="fw-bold text-dark">Newsletter</h6>
                            <p className="mb-1">Receive our weekly newsletter.</p>
                            <p className="mb-3">For dietary content, fashion insider and the best offers.</p>
                            <div className="newsletter-joined d-flex">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="form-control newsletter-input"
                                />
                                <button className="join-btn ms-2 d-flex align-items-center">
                                    <span>Join</span>
                                    <i className="bi bi-arrow-right arrow-icon ms-1"></i>
                                </button>
                            </div>

                            <div className="mt-3 d-flex gap-3 fs-5 social-icons">
                                <i className="bi bi-facebook"></i>
                                <i className="bi bi-twitter"></i>
                                <i className="bi bi-pinterest"></i>
                                <i className="bi bi-vimeo"></i>
                                <i className="bi bi-instagram"></i>
                            </div>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="text-center mt-5 border-top pt-3 d-md-flex justify-content-between footer-bottom">
                        <p className="mb-0 small">&copy; 2021 Vinovathemes. All rights reserved.</p>
                        <div className="d-flex gap-3 small justify-content-center justify-content-md-start mt-3 mt-md-0">
                            <span className="fw-bold">USD</span>
                            <span>|</span>
                            <a href="#">Privacy Policy</a>
                            <span>|</span>
                            <a href="#">Terms of Use</a>
                            <span>|</span>
                            <a href="#">FAQs</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
