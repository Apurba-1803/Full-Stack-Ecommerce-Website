import React from "react";
import "../Navbar/Navbar.css";
import navlogo from "../../assets/logo.jpg";
import navProfile from "../../assets/navbar-profile.jpeg"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={navlogo} alt="website-logo" />
        <p>Shopper</p>
        
      </div>
      <img src={navProfile} alt="admin-profile" className="nav-profile"/>
    </div>
  );
};

export default Navbar;
