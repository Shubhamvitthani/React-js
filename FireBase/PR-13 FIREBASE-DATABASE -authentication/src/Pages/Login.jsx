import React from 'react';
import { auth, googleauth } from '../Firebase';
import { signInWithPopup } from 'firebase/auth';
import './Login.css'; // 👈 Import external CSS

function Login() {
  const handelLogin = async () => {
    try {
      const user = await signInWithPopup(auth, googleauth);
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center min-vh-100 bg-dark text-white">
      <div className="login-card p-5 rounded shadow-lg text-center">
        <h2 className="mb-4 fw-bold">🔐 Google Authentication</h2>
        <p className="text-secondary mb-4">Login using your Google account to continue</p>
        <button onClick={handelLogin} className="btn btn-danger px-4 py-2 fw-semibold">
          🔓 Login with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
