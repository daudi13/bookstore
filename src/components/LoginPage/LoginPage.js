/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const LoginPage = () => (
  <div className="auth-container">
    <form className="auth-form">
      <h3>Sign in</h3>
      <div className="group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          autoComplete="off"
          placeholder="Enter email"
          required
        />
      </div>
      <div className="group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          autoComplete="off"
          placeholder="Enter password"
          required
        />
      </div>
      <div className="submit button">
        <button type="submit" className="btn btn-primary">
          submit
        </button>
      </div>
      <p className="forgot-password text-right">
        create an account?
        {' '}
        <a href="/sign-up">sign up</a>
      </p>
    </form>
  </div>
);

export default LoginPage;