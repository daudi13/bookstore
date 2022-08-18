/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import signUp from '../../Database/SignUp';

const SignUpPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const newUserData = await signUp(data);
    if (newUserData === undefined) {
      
    }
  };
  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
        <h3>Sign up</h3>
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
        <div className="group">
          <label htmlFor="password_confirmation">Password confirmation</label>
          <input
            type="password"
            className="form-control"
            id="password_confirmation"
            {...register('password_confirmation', { required: true, minLength: 6 })}
          />
        </div>
        <div className="submit button">
          <button type="submit" className="btn btn-primary">
            submit
          </button>
        </div>
        <p className="forgot-password text-right">
          have an account?
          {' '}
          <a href="/login">login</a>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
