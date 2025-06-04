import React, { useState } from 'react';

function Filter() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    { id: 1, title: 'girl', name: 'Girls Floral Dress', price: '$29.00', rating: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr2LOFjEGfSwEF5JPysaL2WdwSqu9Cl4ZOyg&s' },
    { id: 2, title: 'men', name: 'Men Casual Shirt', price: '$45.00', rating: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYi7mAWPTsRpzNBsOdm8f00nysNBxO5RPM-Q&s' },
    { id: 3, title: 'kids', name: 'Kids Sports Jacket', price: '$35.00', rating: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwhKSVXSvw2OTv1x5sxHS3XuIACkPUejONVQ&s' },
    { id: 4, title: 'girl', name: 'Girls Summer Top', price: '$25.00', rating: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTRf0eIutRF7f8XyzdoDtwkMQGoDM3Tf5H6A&s' },
    { id: 5, title: 'men', name: 'Men Formal Pants', price: '$55.00', rating: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB8GOO4HJvBMsGi4fso9Z3eKbroVj_9Dm2fw&s' },
    { id: 6, title: 'kids', name: 'Kids Denim Jeans', price: '$28.00', rating: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaw_F4OVtZ2DLjw6v0_ZracsynPSolbkwNxA&s' },
    { id: 7, title: 'girl', name: 'Girls Winter Coat', price: '$60.00', rating: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OS9rZa1-RlCsx6apH3aNmIPhLNeHmq1z_w&s' },
    { id: 8, title: 'men', name: 'Men Leather Jacket', price: '$120.00', rating: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRiSjnvYwLlc_NLhrWyNc9AEG8Fqi-_OAfw&s' },
    { id: 9, title: 'kids', name: 'Kids Hoodie', price: '$30.00', rating: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxIYunQISYdFs9dBnineiQKRTWDV_RjlfZdw&s' },
    { id: 10, title: 'girl', name: 'Girls Casual Sneakers', price: '$40.00', rating: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0GIj-5iHJMgXXMLJpp_lMVt80W50-6AGlvA&s' },
    { id: 11, title: 'men', name: 'Men Running Shoes', price: '$65.00', rating: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkn_svcUJjG3_xU67Bb9A8Q10izyZ_hpznkQ&s' },
    { id: 12, title: 'kids', name: 'Kids Sandals', price: '$22.00', rating: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzvL3A35MFRJd1qKd4VJlL5w6HOk9u83-rUA&s' },
  ];

  const categories = ['girl', 'men', 'kids'];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.title === selectedCategory);

  const buttonStyle = (active) => ({
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: active ? '#000' : '#fff',
    color: active ? '#fff' : '#000',
    border: '2px solid #000',
    borderRadius: '6px',
    padding: '10px 18px',
    margin: '0 8px 8px 8px',  // add bottom margin for wrapping on small screens
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '14px',
    textTransform: 'uppercase',
    userSelect: 'none',
    minWidth: '80px',
  });

  const buttonHoverFillStyle = {
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, #000, #444)',
    transition: 'left 0.4s ease',
    zIndex: 0,
  };

  const buttonTextStyle = {
    position: 'relative',
    zIndex: 1,
    transition: 'color 0.4s ease',
  };

  const containerStyle = {
    padding: '20px 10px',  // reduce padding for smaller screens
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    backgroundColor: 'transparent',
  };

  const cardStyle = {
    width: '100%',
    maxWidth: '290px',
    border: 'none',
    boxShadow: 'none',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    cursor: 'default',
    borderRadius: '10px',
    position: 'relative',
    backgroundColor: 'transparent',
    margin: '12px',
    textAlign: 'center',
    boxSizing: 'border-box',
  };

  const imageContainerStyle = {
    width: '100%',
    maxWidth: '280px',
    height: '280px',
    position: 'relative',
    borderRadius: '10px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto 10px auto', // center image container
  };

  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    filter: 'none',
    transition: 'none',
  };

  const overlayStyle = {
    position: 'relative',
    padding: '8px 10px',
    borderRadius: '0 0 10px 10px',
    backgroundColor: '#fff',
  };

  const textStyle = {
    fontWeight: '700',
    fontSize: '16px',
    margin: '4px 0 6px 0',
    color: '#222',
  };

  const priceStyle = {
    fontWeight: '800',
    fontSize: '15px',
    color: '#111',
    margin: 0,
  };

  const starStyle = {
    color: 'black',
    fontSize: '18px',
    marginRight: '3px',
    fontWeight: 'bold',
  };

  const sectionTitleStyle = {
    textTransform: 'capitalize',
    fontSize: '22px',
    fontWeight: '700',
    marginTop: '40px',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#222',
  };

  function handleMouseEnter(e) {
    const hoverDiv = e.currentTarget.querySelector('.hoverFill');
    if (hoverDiv) hoverDiv.style.left = '0';

    const textSpan = e.currentTarget.querySelector('span');
    if (textSpan) textSpan.style.color = '#fff';
  }

  function handleMouseLeave(e) {
    const hoverDiv = e.currentTarget.querySelector('.hoverFill');
    if (hoverDiv) hoverDiv.style.left = '-100%';

    const textSpan = e.currentTarget.querySelector('span');
    if (textSpan) textSpan.style.color = e.currentTarget.style.backgroundColor === 'rgb(0, 0, 0)' ? '#fff' : '#000';
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h2 style={{ fontSize: '25px', marginBottom: "25px" }} className="fw-bold">
            PRODUCTS
          </h2>

          <div className="d-flex justify-content-center flex-wrap mb-4">
            <button
              style={buttonStyle(selectedCategory === 'all')}
              onClick={() => setSelectedCategory('all')}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="hoverFill" style={buttonHoverFillStyle}></div>
              <span style={buttonTextStyle}>ALL</span>
            </button>

            {categories.map((category) => (
              <button
                key={category}
                style={buttonStyle(selectedCategory === category)}
                onClick={() => setSelectedCategory(category)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="hoverFill" style={buttonHoverFillStyle}></div>
                <span style={buttonTextStyle}>{category.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
            style={{ marginBottom: '24px' }}
          >
            <div className="card" style={cardStyle}>
              <div style={imageContainerStyle}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={imageStyle}
                  draggable={false}
                />
              </div>

              <div style={overlayStyle}>
                <p style={textStyle}>{product.name}</p>
                <p style={{ margin: '0 0 6px 0' }}>
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} style={starStyle}>
                        {i < product.rating ? '★' : '☆'}
                      </span>
                    ))}
                </p>
                <p style={priceStyle}>{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;
