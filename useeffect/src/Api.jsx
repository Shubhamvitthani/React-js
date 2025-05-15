import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"; // Custom CSS for animations

const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setData(data.recipes));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">Delicious Recipes 🍽️</h2>
      <div className="row">
        {data.map((val) => (
          <div key={val.id} className="col-md-4">
            <div className="card recipe-card shadow-lg border-0 rounded-4 overflow-hidden">
              <img
                src={val.image}
                className="card-img-top p-2 rounded-3 img-hover"
                alt={val.name}
              />
              <div className="card-body text-center">
                <h5 className="card-title text-dark fw-bold">{val.name}</h5>
                <p className="text-muted">Cuisine: {val.cuisine}</p>
                <p className="badge bg-primary">Prep Time: {val.prepTimeMinutes} min</p>
                <p className="badge bg-success">Cook Time: {val.cookTimeMinutes} min</p>
                <p className="badge bg-warning">Servings: {val.servings}</p>
                <p className="text-dark fw-bold">⭐ Rating: {val.rating}</p>
                <ul className="list-unstyled">
                  {val.tags.map((tag, i) => (
                    <li key={i} className="badge bg-secondary m-1">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Api;