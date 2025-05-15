import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

function App() {
  const [input, setInput] = useState({
    username: "",
    useremail: "",
    userpassword: "",
    usergender: "",
    usercity: "",
    courses: []
  });

  const inputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (checked) {
        setInput({
          ...input,
          courses: [...input.courses, value]
        });
      } else {
        setInput({
          ...input,
          courses: input.courses.filter(val => val !== value)
        });
      }
    } else {
      setInput({
        ...input,
        [name]: value
      });
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.warn(input);
    alert("Form Submitted");
    setInput({
      username: "",
      useremail: "",
      userpassword: "",
      usergender: "",
      usercity: "",
      courses: []
    });
  };

  return (
    <div className="box d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg rounded" style={{ maxWidth: "500px", width: "100%" }}>
        <h2 className="text-center mb-4">
          <i className="fas fa-user-plus me-2"></i>
          Registration Form
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-user"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="username"
                value={input.username}
                onChange={inputChange}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                name="useremail"
                value={input.useremail}
                onChange={inputChange}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                name="userpassword"
                value={input.userpassword}
                onChange={inputChange}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label d-block">Gender</label>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="usergender"
                value="male"
                checked={input.usergender === "male"}
                onChange={inputChange}
              />
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                name="usergender"
                value="female"
                checked={input.usergender === "female"}
                onChange={inputChange}
              />
              <label className="form-check-label">Female</label>
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label">City</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-city"></i>
              </span>
              <select
                className="form-select"
                name="usercity"
                value={input.usercity}
                onChange={inputChange}
                required
              >
                <option value="" disabled>Select City</option>
                <option value="Surat">Surat</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Rajkot">Rajkot</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="form-label d-block">Courses</label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                name="courses"
                value="app"
                checked={input.courses.includes("app")}
                onChange={inputChange}
              />
              <label className="form-check-label">App</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                name="courses"
                value="web"
                checked={input.courses.includes("web")}
                onChange={inputChange}
              />
              <label className="form-check-label">Web</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                name="courses"
                value="graphic"
                checked={input.courses.includes("graphic")}
                onChange={inputChange}
              />
              <label className="form-check-label">Graphic</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                name="courses"
                value="seo"
                checked={input.courses.includes("seo")}
                onChange={inputChange}
              />
              <label className="form-check-label">SEO</label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-color text-white">
              <i className="fas fa-paper-plane me-2"></i> Submit
            </button>
          </div>
        </form >
      </div >
    </div >
  );
}
export default App
