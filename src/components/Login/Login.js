// import React, { useState } from 'react';
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css';

const Login = () => {
  const [error, setError] = useState(null);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  // const [showPassword, setShowPassword] = useState('password');
  // const handleShow = () => {
  //   if (showPassword === 'password') {
  //     setShowPassword('text')
  //   } else {
  //     setShowPassword('password')
  //   }
  // }
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError('');
        navigate(from, {replace: true});
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      })
  }

  return (
    <div className='form-container'>
      <h2 className='form-title'>Login</h2>
      <form onSubmit={handleSubmit}>
        {/* email */}
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        {/* password */}
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <input className='btn-submit' type="submit" value="Login" />
      </form>
      <p>New to Ema John? <Link to='/signup'>Create a new account</Link></p>
      <span className='text-error'>{error}</span>
    </div>
  );
};

export default Login;