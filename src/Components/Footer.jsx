import React from "react";
import { Link } from "react-router-dom";
import { GrFacebook } from "react-icons/gr";
import { GrLinkedin} from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  const logo = {
    textDecoration: "none",
    fontSize: "20px",
  };

  const icon = {
    marginRight: "10px",
    fontSize: "20px",
    color: "green",
    cursor: "pointer",
  } 

  return (
    <>
      <div className="footer">
        <div className="left">
            <h3>
              <Link to="/" style={logo}>
                Food<span>App</span>
              </Link>
            </h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit similique nisi laborum et cumque necessitatibus ducimus minus tenetur accusantium expedita!z</p>
            {<GrFacebook style={icon}/>}
            { <GrLinkedin style={icon}/>}
            { <GrTwitter style={icon}/> }
            { <GrInstagram style={icon}/> }
        </div>

        <div className="right">
          <div className="links">
            <h3>Your Account</h3>
            <Link to="/signup" style={logo}>
              Sign Up
            </Link>
            <Link to="/signin" style={logo}>
              <li>Log In</li>
            </Link>
            <Link to="/" style={logo}>
              <li>Help</li> 
            </Link>
          </div>

          <div className="links">
            <h3>Support</h3>
            <Link to="/" style={logo}>
                <li>Help Center</li> 
            </Link>
            <Link to="/" style={logo}>
              <li>Account Info</li>
            </Link>
            <Link to="/" style={logo}>
            <li>About</li>
            </Link>
            <Link to="/" style={logo}>
                Contact Us
            </Link>
          </div>

          <div className="links">
            <h3>Product</h3>
            <Link to="/" style={logo}>
            <li>Updates</li>
            </Link>
            <Link to="/" style={logo}>
              <li>Security</li>
            </Link>
            <Link to="/" style={logo}>
              <li>Beta Test</li>
            </Link>
            <Link to="/" style={logo}>
              <li>Pricing Product</li>
            </Link>
          </div>

          <div className="links">
            <h3>Help & Solutions</h3>
            <Link to="/" style={logo}>
            <li>Food Delivery</li>
            </Link>
            <Link to="/" style={logo}>
            <li>Delivery Product</li>
            </Link>
            <Link to="/" style={logo}>
            <li>Career</li>
            </Link>
            <Link to="/" style={logo}>
            <li>Terms & Conditions</li>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default Footer;
