import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './SignIn.css'; // 👈 Create this CSS file

export default function SignIn() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      dispatch({ type: 'SIGN_IN', payload: username });
      navigate('/');
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h3 className="signin-title">🔐 Sign In</h3>
        <form onSubmit={handleLogin}>
          <input
            className="signin-input"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="signin-button" type="submit">🚀 Sign In</button>
        </form>
      </div>
    </div>
  );
}
