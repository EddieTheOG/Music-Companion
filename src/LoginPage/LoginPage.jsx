import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


function LoginPage() {
    let navigate = useNavigate();
    let location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let from = location.state?.from?.pathname || "/";
  
    function handleSubmit(e) {
      e.preventDefault();

    //   fetch('localhost:4001/login', { method: 'POST', body: { email, password }})
    //     .then( (response) => {
    //         console.log(response);
    //     });
        axios.post('http://localhost:4001/login', { email, password } )
        .then( (response) => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
    }
  
    return (
      <div>
        <p>You must log in to view the page at {from}</p>
  
        <form onSubmit={handleSubmit}>
          <label>Username: </label>
            <input name="email" type="text" onChange={(e) => setEmail(e.target.value)} />
          <label>Password: </label>
            <input name="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit">Login</button>
        </form>
      </div>
    );
}

export default LoginPage;