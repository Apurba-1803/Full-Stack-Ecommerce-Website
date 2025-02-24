import React, { useContext, useState, useRef } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.jpg";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";

import { ShopContext } from "../../Context/ShopContext";

export const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle=(e)=>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="website-logo" />
        <p>Shopper</p>
      </div>
      <IoIosArrowDropdown onClick={dropdown_toggle} className="nav-dropdown"/>
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu("Shop")}>
          <Link style={{ textDecoration: "none", color: "#171717" }} to="/">
            {" "}
            Shop{" "}
          </Link>
          {menu === "Shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Mens")}>
          <Link style={{ textDecoration: "none", color: "#171717" }} to="/Mens">
            {" "}
            Men{" "}
          </Link>{" "}
          {menu === "Mens" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Womens")}>
          <Link
            style={{ textDecoration: "none", color: "#171717" }}
            to="/Womens"
          >
            {" "}
            Women{" "}
          </Link>{" "}
          {menu === "Womens" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Kids")}>
          <Link style={{ textDecoration: "none", color: "#171717" }} to="/Kids">
            {" "}
            Kids{" "}
          </Link>{" "}
          {menu === "Kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
      {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button>:<Link style={{ textDecoration: "none", color: "#171717" }} to="/Login">
          <button>Login</button>
        </Link>}
        
        <Link style={{ textDecoration: "none", color: "#171717" }} to="/Cart">
          <FaCartArrowDown className="nav-cart-icon" />
        </Link>

        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
