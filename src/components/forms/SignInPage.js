import React from 'react';
import  { useState } from 'react';
import './SignInPage.css';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const navigate =useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic
  };

  return (
    <>
    <div className="signin-container">
      <h1>Welcome Back!</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" onClick={()=>{navigate('/landing_page')}}>Sign In</button>
      </form>
    </div>
    <div className="page-body"></div>
    </>
  );
};

export default SignInPage;
