import React, {useState} from 'react';
import Footer from '../Components/Footer';
import Navigation from '../Components/Navigation';
import left from "../images/left.png";
import { AiOutlineMail} from "react-icons/ai";
import { RiLockPasswordLine} from "react-icons/ri";
import {MdOutlineAccountBox} from "react-icons/md";
import { Link } from "react-router-dom";



export const Login = () => {
    const [token, setToken] = useState(localStorage.getItem('token') || '');
  
    const handleLogin = (token) => {
      setToken(token);
      localStorage.setItem('token', token);
    };
  
    const handleLogout = () => {
      setToken('');
      localStorage.removeItem('token');
    };
  
    return (
      <div>
        {token ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <SignIn onLogin={handleLogin} />
        )}
      </div>
    );
  };
  


function SignIn() {
  const img = {
    width: "500px",
    // height: "400px"
  }

  const icon = {
    fontSize: "25px",
    color: "green",
    margin: "10px",
    marginLeft: "30px",
  }

  const icons = {
    textAlign: "center",
    fontSize: "45px",
    color: "green",
    marginLeft: "10rem",
  }

  const sign = {
    textDecoration: "none",
    color: "green",
    marginLeft: "10px",
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Your Email: ' + email);
    console.log('Your Password: ' + password);
  }
  

  return (
    <div>
      <Navigation/>
      <div className="signup">
        <div className="signup-img">
          <img src={left} alt="phone" style={img}/>
        </div>
        <div className="right-form">
          {/* <h1>Create Buisness Account</h1> */}
          <form action="" onSubmit={handleSubmit}>
            <MdOutlineAccountBox style={icons}/>
          <h1> Enter your details </h1>

            <label htmlFor=""> <AiOutlineMail style={icon}/>
            <br />
              <input type="email"  placeholder='Enter Your Email' onChange={handleEmail}/>
            </label><br />

            <label htmlFor=""> <RiLockPasswordLine style={icon}/>
            <br />
              <input type="password" placeholder='Enter Your Password' onChange={handlePassword}/>
            </label><br />

            {/* <label htmlFor=""> <BsCalendarDate style={icon}/>
            <br />
              <input type="date" placeholder='Enter Your First Name'/>
            </label><br /> */}

            {/* <label htmlFor="">
              <input type="radio" />
              Teams & Conditions Apply
            </label> */}

            <button type='submit'>LogIn</button>

            {/* <button>Click</button> */}

            <p> Do you have an account already?
            <Link to="/signup" style={sign}>
            Sign Up
          </Link>
            </p> 
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default SignIn;