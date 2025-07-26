import './login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) return;

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.success) {
        navigate('/movies');
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Login failed. Please try again later.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-overlay">
        <div className="login-box">
          <h2>Sign In</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Sign In</button>
          </form>

          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <button className="link-button" onClick={() => alert("Support coming soon!")}>Need help?</button>
          </div>

          <button className="google-button">Continue with Google</button>

          <div className="signup-text">
            New to our site?{' '}
            <button className="link-button" onClick={() => navigate('/signup')}>
              Sign up now.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
