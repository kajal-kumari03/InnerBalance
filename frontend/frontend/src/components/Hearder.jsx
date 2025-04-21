

import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="logoContainer">
        <img src={logo} alt="Relind Logo" className="logoImg" />
      </div>
      <nav className="nav">
        <Link to="/" className="link">Home</Link>
        <Link to="/about" className="link">About</Link>
        <Link to="/login" className="link">Login</Link>
      </nav>
    </header>
  );
};

 

export default Header;