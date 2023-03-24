import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../api/UserApi';
import { setAuthToken } from '../Utilities/setAuthToken';
import './LoginPage.css';

function LoginPage() {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    loginApi({ email, password })
      .then((token) => {
        setAuthToken(token);
        navigate('/exercises');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // TO-DO:redirect to Register Component
  const register = () => {
    navigate('/register');
  };

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
