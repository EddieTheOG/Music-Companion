import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { setAuthToken } from './Utilities/setAuthToken'

function App() {
  const navigate = useNavigate();
  
  const Logout = () => {
    setAuthToken(null);
    navigate('/');
  }

  return (
    <div className="App">
      <div>
        <Link to="/scalar-degrees">Scalar Degree Exercise</Link>
      </div>
      <button onClick={Logout} type="button">Log out</button>
    </div>
  )
}

export default App;
