// Signup.js
import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import "../Auth.css"; // Ensure consistent styling for both Signup and Signin

function Signup({ switchToSignin, onClose }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && email && password) {
      setMessage('Signup successful!');
    } else {
      setMessage('Please fill out all fields.');
    }
  };

  const responseMessage = (response) => {
    console.log(response);
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <div className="auth-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <h3>Full Name (First, Last)</h3>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <h3>Email Address</h3>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h3>Password</h3>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit"><h5>Sign Up</h5></button>
      </form>
      <button onClick={switchToSignin}>
        <h4>Already have an account? Sign In</h4>
      </button>
      {message && <p>{message}</p>}
      <br />
      Or:
      <br />
      <br />
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default Signup;
