import React, { useEffect,FormEvent } from "react";
import { Link } from "react-router-dom";
import   logo  from "../assets/img/logo/logo.png";
import { LoginImg,  NetIcon1, NetIcon2 } from "../components/imagepath"
import { useState } from "react";
import axios from '../Api/httpclient';
// import "../../../assets/js/jquery-3.6.0.min.js"
import { useNavigate } from "react-router-dom";


const Signup:React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/"); // Redirect to the sign-up page
  };
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // Prepare the data to send to the backend
    const data ={
      email: email,
      password: password,
      firstName:firstname,
      lastName:lastname,
      userName:username
    };
   

    try {
      // Send a POST request to your Spring Boot backend
      const response = await axios.post("http://localhost:1998/User/addUser", data);
console.log(data);
      // Check if the request was successful
      if (response.status === 200) {
        // Handle successful login (redirect, update state, etc.)
        console.log('Login successful');
        const token = response.data.access_token;
        console.log(token);
        // Store the token in a cookie with an expiration time (optional)
        //Cookies.set("token", token, { expires: 7 }); // Example: Token expires in 7 days
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
                  <img src={LoginImg} className="img-fluid" alt="Logo" />
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
                <div className="img-logo">
                  <img src={logo} className="img-fluid" alt="Logo" 
                   style={{ width: '200px', height: '100' }}/>
                  <div className="back-home">
                    <Link to="/">Back to learning</Link>
                  </div>
                </div>
                <h1>Sign up</h1>
                <form onSubmit={handleSubmit}   >
                  <div className="form-group">
                    <label className="form-control-label"> FirstName</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your First Name"
                      id="firstname"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      autoComplete="on"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">UserName</label>
                    <input
                      type="text"
                      id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete="on"
                    required
                      className="form-control"
                      placeholder="Enter your username"
                    />
                  </div> 
                  <div className="form-group">
                    <label className="form-control-label">LastName</label>
                    <input
                      type="text"
                      id="lastname"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      autoComplete="on"
                      required
                      className="form-control"
                      placeholder="Enter your lastname"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label"> Email</label>
                    <input
                     type="text"
                     id="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     autoComplete="on"
                     required
                      className="form-control"
                      placeholder="Enter your Email"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label"> Password</label>
                    <input
                     type="password"
                     id="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     autoComplete="on"
                     required
                      className="form-control"
                      placeholder="Enter your Password"
                    />
                  </div>


                  
                  <div className="d-grid">
                  <button className="btn btn-primary" type="submit"
                    style={{
                      backgroundColor: 'aquamarine',
                      borderColor: 'aquamarine',
                      color: 'Black'
                    }} >
                  Create Account
                  
                  </button>
                  </div>
                </form>
              </div>
              <div className="google-bg text-center st" style={{ backgroundColor: 'Azure' }}>
                <span>
                  <Link to="#">Or sign in with</Link>
                </span>
                <div className="sign-google">
                  <ul>
                    <li>
                      <Link to="#">
                        <img src={NetIcon1} className="img-fluid" alt="Logo" />
                        Sign In using Google
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={NetIcon2} className="img-fluid" alt="Logo" />
                        Sign In using Facebook
                      </Link>
                    </li>
                  </ul>
                </div>
                <p className="mb-0">
                  Already have an account? <Link to="/login">Sign in</Link>
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

export default Signup;