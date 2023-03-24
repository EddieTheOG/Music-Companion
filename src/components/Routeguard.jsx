import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';

const RouteGuard = ({ component: Component, ...rest }) => {
  function hasJWT() {
    return localStorage.getItem('token') ? true : false;
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (!hasJWT()) {
      navigate('/login');
    }
  }, []);

  return hasJWT() ? <Component /> : <></>;
};

export default RouteGuard;
