import './App.css';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from './Utilities/setAuthToken';
import { useState } from 'react';

function App() {
  const navigate = useNavigate();

  const Logout = () => {
    setAuthToken(null);
    navigate('/login');
  };

  return (
    <div className="App">
      <div className="nav">
        <div className="nav-links">
          <Link to="/exercises/scalar-degrees">Scalar Degree Exercise</Link>
        </div>
        <p>Welcome to Music Companion!</p>
        <button onClick={Logout} type="button">
          Log out
        </button>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
