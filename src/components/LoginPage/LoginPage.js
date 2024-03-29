/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';
import requestLogin from '../../Database/LoginUser';
import { logUserin } from '../../redux/user/userSlice';
import Navbar from '../Navbar/Navbar';

const LoginPage = () => {
  const [errMsg, setErrMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const { state } = useLocation();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    const userData = await requestLogin(data);
    if (userData === undefined) {
      setErrMsg('Wrong Email or password');
      setLoading(false);
    } else {
      dispatch(logUserin(userData));
      navigate(state?.path || '/App');
    }
  };

  return (
    <>
      <Navbar />
      <div className="auth-container">
        <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
          {loading ? <Circles height="30" width="30" color="blue" ariaLabel="three-dots-loading" /> : (
            <p className={errMsg ? 'errMsg' : 'offscreen'} aria-live="assertive">
              {errMsg}
            </p>
          )}
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
            <Link to={{ pathname: 'sign-up' }}>Sign-up</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
