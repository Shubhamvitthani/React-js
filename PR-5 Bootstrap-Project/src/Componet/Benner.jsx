import React, { useEffect } from 'react';
import './Benner.css'; // Link to custom styles

function Benner() {
  useEffect(() => {
    const carouselElement = document.querySelector('#carouselExampleFade');
    if (carouselElement && window.bootstrap) {
      new window.bootstrap.Carousel(carouselElement, {
        interval: 4000,
        ride: 'carousel',
        pause: false,
        wrap: true,
        touch: true,
      });
    }
  }, []);

  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://minion-vinovatheme.myshopify.com/cdn/shop/files/slideshow-1_f9506a0f-cd22-46e1-89e6-dfb216eda48b_1920x950.jpg?v=1617703696"
            className="d-block w-100"
            alt="Summer Collection"
          />
          <div className="carousel-caption d-none d-md-block text-start hero-content">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-8 col-lg-6">
                  <p className="trend-label">LATEST IN STYLE</p>
                  <h1 className="hero-title">
                    SUMMER'S <br />
                    <span>HOTTEST DROPS</span>
                  </h1>
                  <p className="hero-subtitle">Discover the boldest looks of the season</p>
                  <button className="shop-button">SHOP NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="https://minion-vinovatheme.myshopify.com/cdn/shop/files/slideshow-2_776428d6-b3e7-4a7f-9fe5-d18ba9b28a8f_1920x950.jpg?v=1617703707"
            className="d-block w-100"
            alt="Explore Style"
          />
          <div className="carousel-caption d-none d-md-block text-start hero-content">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-8 col-lg-6">
                  <p className="trend-label">NEW ARRIVALS</p>
                  <h1 className="hero-title">
                    STEP INTO <br />
                    <span>STYLE</span>
                  </h1>
                  <p className="hero-subtitle">Chic outfits made for warm days</p>
                  <button className="shop-button">DISCOVER NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="https://minion-vinovatheme.myshopify.com/cdn/shop/files/slideshow-3_8d153831-1053-4b01-9846-85b389bc650a_1920x950.jpg?v=1617703716"
            className="d-block w-100"
            alt="Fresh Looks"
          />
          <div className="carousel-caption d-none d-md-block text-start hero-content">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-8 col-lg-6">
                  <p className="trend-label">EDITOR'S PICK</p>
                  <h1 className="hero-title">
                    ELEVATE YOUR <br />
                    <span>LOOK</span>
                  </h1>
                  <p className="hero-subtitle">Timeless essentials, redefined</p>
                  <button className="shop-button">VIEW COLLECTION</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Benner;
