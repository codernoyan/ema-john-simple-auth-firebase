import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './SignUp.css';

const SignUp = () => {
  const [error, setError] = useState(null);

  const { createUser } = useContext(AuthContext);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    // console.log(email, password, confirm);
    if (password.length < 6) {
      setError('Password should be 6 characters');
      return;
    }

    if (password !== confirm) {
      setError("Your password doesn't match, ");
      return;
    }
    setError('');

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
    })
  }

  return (
    <>
      <div className='form-container'>
        <h2 className='form-title'>Sign Up</h2>
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
          {/* confirm password */}
          <div className="form-control">
            <label htmlFor="confirm">Confirm Password</label>
            <input type="password" name="confirm" id="confirm" required />
          </div>
          <input className='btn-submit' type="submit" value="Sign Up" />
        </form>
        <p>Already have an account?<Link to='/login'>Login</Link></p>
        <p className='text-error'>{error}</p>
      </div>
    </>
  );
};

export default SignUp;