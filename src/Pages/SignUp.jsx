import React from 'react';
import Footer from '../Components/Footer';
import Navigation from '../Components/Navigation';
import left from "../images/left.png";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineMail} from "react-icons/ai";
import { RiLockPasswordLine} from "react-icons/ri";
import {BsCalendarDate} from "react-icons/bs";
import {MdOutlineAccountBox} from "react-icons/md";
import { Link } from "react-router-dom";

// import Typography from '@material-ui/core/Typography';



function SignUp() {
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

  return (
    <div>
      <Navigation/>
      <div className="signup">
        <div className="signup-img">
          <img src={left} alt="phone" style={img}/>
        </div>
        <div className="right-form">
          {/* <h1>Create Buisness Account</h1> */}
          <form action="">
            <MdOutlineAccountBox style={icons}/>
          <h1>Buisness Account </h1>
          {/* <FcBusinessContact/> */}
            <label htmlFor=""> <RxAvatar style={icon}/>
            <br />
              <input type="text" placeholder='Enter Your First Name'/>
            </label><br />

            <label htmlFor=""><RxAvatar style={icon}/>
            <br />
              <input type="text" placeholder='Enter Your Last Name'/>
            </label><br />

            <label htmlFor=""> <AiOutlineMail style={icon}/>
            <br />
              <input type="email" placeholder='Enter Your Email'/>
            </label><br />

            <label htmlFor=""> <RiLockPasswordLine style={icon}/>
            <br />
              <input type="password" placeholder='Enter Your Password'/>
            </label><br />

            {/* <label htmlFor=""> <BsCalendarDate style={icon}/>
            <br />
              <input type="date" placeholder='Enter Your First Name'/>
            </label><br /> */}

            {/* <label htmlFor="">
              <input type="radio" />
              Teams & Conditions Apply
            </label> */}

            <button>Sign Up</button>

            <p> Do you have an account already?
            <Link to="/signin" style={sign}>
            SignIn
          </Link>
            </p> 
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default SignUp;