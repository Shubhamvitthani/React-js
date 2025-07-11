import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Navbar.css'; // 👈 Make sure this CSS file exists

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector(state => state.auth);

  const handleSignOut = () => {
    dispatch({ type: 'SIGN_OUT' });
    navigate('/');
  };

  return (
    <nav className="custom-navbar">
      <div className="navbar-container">
        <Link className="brand-logo" to="/">🍲 Recipe Book</Link>
        <div className="nav-buttons">
          <Link className="nav-btn" to="/">Home</Link>
          {auth.isAuthenticated ? (
            <>
              <Link className="nav-btn success" to="/add">Add Recipe</Link>
              <button className="nav-btn danger" onClick={handleSignOut}>Sign Out</button>
            </>
          ) : (
            <Link className="nav-btn primary" to="/signin">Sign In</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
