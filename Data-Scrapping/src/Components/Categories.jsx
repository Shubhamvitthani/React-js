import React from 'react'

const Categories = ({ categoriesList }) => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Explore Categories</h2>
      <div className="row justify-content-center">
        {categoriesList.map((cat, i) => (
          <div
            key={i}
            className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center my-3"
          >
            <div
              className="card d-flex flex-column align-items-center justify-content-center"
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                maxWidth: "200px",
                textTransform: "capitalize",
              }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid"
                style={{ height: "60%", objectFit: "contain" }}
              />
              <div className="text-center mt-2">
                <h6 className="mb-0">{cat.name}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


  )
}

export default Categories
