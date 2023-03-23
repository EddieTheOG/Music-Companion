import './App.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { setAuthToken } from './Utilities/setAuthToken';

function App() {
  const navigate = useNavigate();

  const Logout = () => {
    setAuthToken(null);
    navigate('/');
  };

  return (
    <div className="App">
      <div className="nav">
        <div className="nav-links">
          <Link to="/exercises/scalar-degrees">Scalar Degree Exercise</Link>
        </div>
        <button onClick={Logout} type="button">
          Log out
        </button>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
