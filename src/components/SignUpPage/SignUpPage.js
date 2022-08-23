/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import signUp from '../../Database/SignUp';
import { logUserin } from '../../redux/user/userSlice';
import Navbar from '../Navbar/Navbar';

const SignUpPage = () => {
  const [errMsg, setErrMsg] = useState('');
  const { register, handleSubmit } = useForm();
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    const newUserData = await signUp(data);
    if (data.password !== data.password_confirmation) {
      setErrMsg('Your passwords do not match');
    } else if (newUserData === undefined) {
      setErrMsg('User already exist use another email');
    } else {
      dispatch(logUserin(newUserData));
      navigate(state?.path || '/App');
    }
  };
  return (
    <>
      <Navbar />
      <div className="auth-container">
        <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
          <p className={errMsg ? 'errMsg' : 'offscreen'} aria-live="assertive">
            {errMsg}
          </p>
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
            <Link to={{ pathname: '/' }}>login</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
