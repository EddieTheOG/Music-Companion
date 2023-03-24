import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../Utilities/setAuthToken';
import { equals } from 'validator';
import { registerApi } from '../api/UserApi';
// import './RegisterPage.css';

function RegisterPage() {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    registerApi({ email, password, firstName, lastName, confirmPassword })
      .then((token) => {
        setAuthToken(token);
        navigate('/exercises', { state: { isRegistered: true } });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // TO-DO: get validation happening at some point
  return (
    <div className="login-page">
      <h2>Only a few steps to register for Music Companion!</h2>

      <form onSubmit={handleSubmit}>
        <div className="login-form">
          <div className="input-group">
            <label htmlFor="first_name" value="first_name"></label>
            <input
              placeholder="First Name"
              name="first_name"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="last_name" value="last_name"></label>
            <input
              placeholder="Last Name"
              name="last_name"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email" value="email"></label>
            <input
              placeholder="Email"
              name="email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" value="password"></label>
            <input
              placeholder="Password"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword" value="confirmPassword"></label>
            <input
              placeholder="Confirm Password"
              name="confirmPassword"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button className="login-button" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
