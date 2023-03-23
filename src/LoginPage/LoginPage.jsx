import axios from 'axios';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../Utilities/setAuthToken';
import './LoginPage.css';

function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let from = location.state?.from?.pathname || '/';

  function handleSubmit(e) {
    e.preventDefault();

    // move this to api at some point
    axios
      .post('http://localhost:4001/login', { email, password })
      .then((response) => {
        const { token } = response.data;

        setAuthToken(token);
        navigate('/exercises');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const register = () => {};

  return (
    <div className="login-page">
      <h2>Welcome to Music Companion! Please login.</h2>

      <form onSubmit={handleSubmit}>
        <div className="login-form">
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
          <button className="login-button" type="submit">
            Login
          </button>
          <button className="login-button" type="button" onClick={register}>
            New? Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
