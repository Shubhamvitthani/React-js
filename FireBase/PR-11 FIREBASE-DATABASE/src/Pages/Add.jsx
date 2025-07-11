import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getDatabase, set, ref } from 'firebase/database';
import { app } from '../Firebase';
// Add.css 
import './Add.css'; // Ensure you have the correct path to your CSS file

const Add = () => {
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    name: '',
    email: '',
    contect: '',
    password: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const db = getDatabase(app);

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      userid: Math.floor(Math.random() * 1000),
      ...formInput,
    };

    set(ref(db, `users/${obj.userid}`), obj)
      .then(() => {
        alert('Data added successfully!');
        navigate(`/`);
        setFormInput({
          name: '',
          email: '',
          contect: '',
          password: '',
          company: '',
          message: '',
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="container-fluid bg-dark text-white py-5 min-vh-100">
      <div className="container">
        <div className="card bg-black border border-secondary shadow-lg rounded-4 overflow-hidden">
          <div className="row g-0">

            {/* Sidebar */}
            <div className="col-md-4 bg-gradient p-4 text-white" style={{ background: "linear-gradient(to bottom, #990000, #660000)" }}>
              <h2 className="text-center mb-4" style={{ color: "#dc3545" }}>User Management</h2>
              <Link to="/add" className="btn btn-outline-light mt-4 w-100">← Back to Users</Link>
            </div>

            {/* Form Section */}
            <div className="col-md-8 p-5">
              <h3 className="mb-4" style={{ color: "#dc3545" }}>📨 Add New User</h3>
              <form onSubmit={handleSubmit}>
                <div className="row mb-4">
                  <div className="col-md-6 mb-3">
                    <div className="form-floating-box">
                      <input
                        type="text"
                        className="form-control dark-input"
                        name="name"
                        value={formInput.name}
                        onChange={handleChange}
                        placeholder=""
                        required
                      />
                      <label>Full Name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="form-floating-box">
                      <input
                        type="text"
                        className="form-control dark-input"
                        name="company"
                        value={formInput.company}
                        onChange={handleChange}
                        placeholder=""
                      />
                      <label>Company</label>
                    </div>
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-md-6 mb-3">
                    <div className="form-floating-box">
                      <input
                        type="email"
                        className="form-control dark-input"
                        name="email"
                        value={formInput.email}
                        onChange={handleChange}
                        placeholder=""
                        required
                      />
                      <label>Email Address</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="form-floating-box">
                      <input
                        type="text"
                        className="form-control dark-input"
                        name="contect"
                        value={formInput.contect}
                        onChange={handleChange}
                        placeholder=""
                      />
                      <label>Phone Number</label>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="form-floating-box">
                    <input
                      type="password"
                      className="form-control dark-input"
                      name="password"
                      value={formInput.password}
                      onChange={handleChange}
                      placeholder=""
                    />
                    <label>Password</label>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="form-floating-box">
                    <textarea
                      className="form-control dark-input"
                      name="message"
                      value={formInput.message}
                      onChange={handleChange}
                      placeholder=""
                      rows="3"
                    />
                    <label>Message</label>
                  </div>
                </div>

                <button type="submit" className="btn btn-danger w-100 py-2 fw-bold">
                  ➕ Submit User
                </button>
              </form>



            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
