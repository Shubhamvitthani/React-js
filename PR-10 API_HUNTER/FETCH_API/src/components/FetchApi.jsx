import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiData } from '../Redux/Action/ActionApi';

const categories = [
  'Life',
  'Motivation',
  'Love',
  'Success',
  'Wisdom',
  'Humor',
  'Philosophy',
  'Random'
];

const getRandomCategory = () => {
  const index = Math.floor(Math.random() * categories.length);
  return categories[index];
};

const FetchApi = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.api);

  useEffect(() => {
    dispatch(fetchApiData());
  }, [dispatch]);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">📜 Inspirational Quotes (FETCH API)</h2>

      {loading && <h5 className="text-center">Loading...</h5>}
      {error && <p className="text-danger text-center">Error: {error}</p>}

      <div className="row">
        {data && data.map((item, idx) => {
          const category = getRandomCategory();

          return (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{item.quote}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Author: {item.author}</h6>
                  <h6 className="card-subtitle mb-2 text-muted">Category: {category}</h6>
                  <blockquote className="blockquote mb-3">
                    <p className="mb-0">“{item.quote}”</p>
                    <footer className="blockquote-footer mt-2">{item.author}</footer>
                  </blockquote>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FetchApi;
