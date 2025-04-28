import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "bootstrap"; // Import Bootstrap Carousel

const App = () => {
  const [properties, setProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchProperties = async () => {
    try {
      const res = await fetch("http://localhost:5000/properties");
      const data = await res.json();
      setProperties(data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    fetchProperties();

    // Initialize all carousels after the component mounts
    const carousels = document.querySelectorAll(".carousel");
    carousels.forEach((carousel) => {
      new Carousel(carousel);
    });
  }, []);

  // Filter properties by bedrooms
  const filteredProperties = properties.filter((prop) =>
    searchTerm === ""
      ? true
      : prop.bedrooms.toString().includes(searchTerm.trim())
  );

  // Handle BHK input change to prevent negative numbers
  const handleSearchChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^[0-9]*$/.test(value)) {
      setSearchTerm(value); // Only update the state if the input is a non-negative number
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-primary mb-4">🏡 Real Estate Listings</h2>

      {/* Search Bar */}
      <div className="d-flex justify-content-center mb-5">
        <div className="input-group w-auto">
          <input
            type="number"
            className="form-control"
            placeholder="Enter BHK (Bedrooms)"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button
            className="btn btn-outline-primary"
            onClick={() => console.log("Search:", searchTerm)}
          >
            Search BHK
          </button>
        </div>
      </div>

      <div className="row">
        {filteredProperties.map((prop) => (
          <div className="col-md-4 mb-4" key={prop.id}>
            <div className="card h-100 shadow-sm border-0 rounded-4">
              {/* Carousel */}
              {prop.images && prop.images.length > 0 && (
                <div
                  id={`carousel-${prop.id}`}
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {prop.images.map((img, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${index === 0 ? "active" : ""}`}
                      >
                        <img
                          src={img}
                          className="d-block w-100"
                          alt={`property-${index}`}
                          style={{ height: "200px", objectFit: "cover" }}
                        />
                      </div>
                    ))}
                  </div>
                  {prop.images.length > 1 && (
                    <>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target={`#carousel-${prop.id}`}
                        data-bs-slide="prev"
                      >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target={`#carousel-${prop.id}`}
                        data-bs-slide="next"
                      >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                      </button>
                    </>
                  )}
                </div>
              )}

              <div className="card-body">
                <h5 className="card-title text-dark">{prop.title}</h5>
                <p className="text-muted">{prop.description}</p>
                <p className="fw-bold text-success">
                  💰 ${prop.price.toLocaleString()}
                </p>
                <p className="text-muted mb-1">
                  📍 {prop.location?.address}, {prop.location?.city},{" "}
                  {prop.location?.state}
                </p>
                <p className="badge bg-info text-dark">{prop.propertyType}</p>
                <p className="mb-0">
                  🛏️ {prop.bedrooms} | 🛁 {prop.bathrooms} | 📐 {prop.area} sqft
                </p>
              </div>

              <div className="card-footer bg-light border-top-0 text-center">
                <small className="text-muted">Agent: {prop.agent?.name}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
