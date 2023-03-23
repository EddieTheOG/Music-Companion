import { useNavigate } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';

const RouteGuard = ({ component: Component, ...rest }) => {
  function hasJWT() {
    return localStorage.getItem('token') ? true : false;
  }

  return hasJWT() ? <Component /> : <LoginPage />;
};

export default RouteGuard;
