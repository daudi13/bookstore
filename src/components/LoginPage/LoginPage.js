/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import requestLogin from '../../Database/LoginUser';

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    requestLogin(data);
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
        <h3>Sign in</h3>
        <div className="group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            {...register('email', { required: true, maxLength: 50 })}
          />
        </div>
        <div className="group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            {...register('password', { required: true, minLength: 6 })}
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
          <a href="sign-up">sign up</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
