import React from "react";
import { Link } from "react-router-dom";
import SignUp from "../pages/SignUp";

const Navigation = () => {
  const color = {
    color: "green",
    textDecoration: "none",
    fontSize: "15px",
  };

  const nav = {
    margin: "15px",
    textDecoration: "none",
    fontStyle: "bold",
    fontSize: "20px",
  };

  const logo = {
    textDecoration: "none",
  };


  const text = {
    marginTop: "10px",
  }

  return (
    <>
      <nav className="navigation">
        <div className="logo">
          <h3>
            <Link to="/" style={logo}>
              Food<span>App</span>
            </Link>
          </h3>
        </div>
        <div>
          <ul className="navigation-links">
            <Link to="/" style={nav}>
              Home
            </Link>
            <Link to="/food" style={nav}>
              Foods
            </Link>
            <Link to="/buy" style={nav}>
              Buy
            </Link>
            <Link to="/services" style={nav}>
              Service
            </Link>
            <Link to="/blog" style={nav}>
              Support
            </Link>
            <Link to="/blog" style={nav}>
              Blog
            </Link>
          </ul>
        </div>
        <div className="btn">
          <button>
            <Link to="/signup" style={color}>
              Create Account
            </Link>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
