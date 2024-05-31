import React from "react";
import axios from '../Api/httpclient';
import { LoginImg, NetIcon1, NetIcon2 } from "../components/imagepath";
import { Link ,useNavigate} from "react-router-dom";
import { useState,FormEvent } from "react";
import { useAuth } from '../components/auth'

import   logo  from "../assets/img/logo/logo.png";
const Login:React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const auth = useAuth()

  const navigate = useNavigate()
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // Prepare the data to send to the backend
    const formData = new URLSearchParams();
    formData.append('username', email);
    formData.append('password', password);
    formData.append('grant_type', 'password');
    formData.append('client_id', 'login-app');
    formData.append('client_secret', '4NurRgfPV88PKKi9PqfOeuEja2WeaKth');

    try {
      // Send a POST request to your Spring Boot backend
      const response = await axios.post(
        'http://localhost:8080/realms/pfe/protocol/openid-connect/token',
        formData.toString(), // Convert data to URL-encoded string
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      // Check if the request was successful
      if (response.status === 200) {
        // Handle successful login (redirect, update state, etc.)
        console.log('Login successful');
        const token = response.data.access_token;
        console.log(token);
        // Store the token in a cookie with an expiration time (optional)
        //Cookies.set("token", token, { expires: 7 }); // Example: Token expires in 7 days
        localStorage.setItem("token", token);
        auth?.login(email);
        navigate('/');
       
      }
    } catch (error) {
      // Handle any errors that occur during the fetch operation
      console.error('Error:', error);
    }
  };
 


  return (
    <>
      <div className="main-wrapper log-wrap">
        <div className="row">
          {/* Login Banner */}
          <div className="col-md-6 login-bg" style={{ backgroundColor: 'aquamarine' }}>
              <div className="welcome-login">
                <div className="login-banner">
                  <img
                    src={LoginImg}
                    className="img-fluid"
                    alt="Logo"
                  />
                </div>
                <div className="mentor-course text-center">
                  <h2>
                    Welcome to <br />
                    Corilus Digital Library.
                  </h2>
                  <p>
                  Corilus Digital Library is a digital library platform specializing in the healthcare field.
                   It offers courses and educational resources for healthcare professionals, 
                   as well as medical news.
                   Additionally, it provides the opportunity to search for job offers in the healthcare sector.
                  </p>
                </div>
              </div>
           
          </div>
          {/* /Login Banner */}
          <div className="col-md-6 login-wrap-bg">
            {/* Login */}
            <div className="login-wrapper">
              <div className="loginbox">
                <div className="w-100">
                  <div className="img-logo">
                    <img
                      src={logo }
                      className="img-fluid"
                      alt="Logo"
                      style={{ width: '200px', height: '100px' }}
                    />
                    <div className="back-home">
                      <Link to="/">Back to learning</Link>
                    </div>
                  </div>
                  <h1>Sign into Your Account</h1>
                  <form action="/reactjs/instructor-dashboard" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label className="form-control-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email address"
                        id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="on"
                    required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-control-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="on"
                        required
                      />
                    </div>
                   
                    <div className="forgot">
                      <span>
                        <Link className="forgot-link" to="/forgot-password">
                          Forgot Password ?
                        </Link>
                      </span>
                    </div>
                    
                    <div className="d-grid">
                    <button className="btn btn-primary" type="submit">
                  Sign In
                  </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="google-bg text-center">
                <span>
                  <Link to="#">Or sign in with</Link>
                </span>
                <div className="sign-google">
                  <ul>
                    <li>
                      <Link to="#">
                        <img
                          src={NetIcon1}
                          className="img-fluid"
                          alt="Logo"
                        />{" "}
                        Sign In using Google
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img
                          src={NetIcon2}
                          className="img-fluid"
                          alt="Logo"
                        />
                        Sign In using Facebook
                      </Link>
                    </li>
                  </ul>
                </div>
                <p className="mb-0">
                  New User ? <Link to="/signup">Create an Account</Link>
                </p>
              </div>
            </div>
            {/* /Login */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
