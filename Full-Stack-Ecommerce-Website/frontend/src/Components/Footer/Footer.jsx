import React from 'react'
import '../Footer/Footer.css'
import logo from "../Assets/logo.jpg"
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src = {logo} alt=''/>
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
            <FaInstagram style={{width: "25px" , height:"25px"}}/>
            </div>
            <div className="footer-icons-container">
            <FaPinterestP style={{width: "25px" , height:"25px"}}/>
            </div>
            <div className="footer-icons-container">
            <FaWhatsapp style={{width: "25px" , height:"25px"}}/>
            </div>
        </div> 
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2025 - All Rights Reserved.</p>
        </div>
    </div>
  )
}
