/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import requestLogin from '../../Database/LoginUser';
import { logUserin } from '../../redux/user/userSlice';

const LoginPage = () => {
  const [errMsg, setErrMsg] = useState('');
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const { state } = useLocation();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const userData = await requestLogin(data);
    if (userData === undefined) {
      setErrMsg('Wrong Email or password');
    } else {
      dispatch(logUserin(userData));
      navigate(state?.path || '/Categories');
    }
  };

  console.log(logUserin.state);

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
        <p className={errMsg ? 'errMsg' : 'offscreen'} aria-live="assertive">
          {errMsg}
        </p>
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
