import { useNavigate } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';

const RouteGuard = ({ component: Component, ...rest }) => {
 
    const navigate = useNavigate();
    function hasJWT() {
        let flag = false;
  
        //check user has JWT token
        localStorage.getItem("token") ? flag=true : flag=false
       
        return flag;
    }
  
    return (
        hasJWT() ? <Component {...props} /> : <LoginPage /> 
    );
 };
  
 export default RouteGuard;