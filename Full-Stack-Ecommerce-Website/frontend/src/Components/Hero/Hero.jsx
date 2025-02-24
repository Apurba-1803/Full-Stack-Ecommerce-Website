import React from "react";
import "./Hero.css";

import { FaArrowRightLong } from "react-icons/fa6";
import { PiHandWavingBold } from "react-icons/pi";
import HeroImg from "../Assets/Hero_img.jpeg";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <PiHandWavingBold
              className="hero-hand-icon-img"
            />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <FaArrowRightLong />
        </div>
      </div>
      <div className="hero-right">
        <img src={HeroImg} alt="" />
      </div>
    </div>
  );
};
