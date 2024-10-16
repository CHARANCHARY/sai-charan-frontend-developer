import React from 'react';
import { FaTelegramPlane, FaInstagram, FaTwitter, FaFacebookF, FaDiscord } from 'react-icons/fa';
import "../App.css";  
import image from "../images/Frame 43094.png"
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="">
          <img src={image} alt="EthAi Logo" className="logo" /> 
        </div>
        <div className="icons-container">
          <FaTelegramPlane className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaTwitter className="social-icon" />
          <FaFacebookF className="social-icon" />
          <FaDiscord className="social-icon" />
        </div>
      </div>

      <div className="footer-right">
        <h3>“Designed for traders of today, just like you."</h3>
        <div className="flex justify-center items-center">
      <div className="flex items-center backdrop-blur-md border border-[#FBFAF266] rounded-lg overflow-hidden shadow-inner">
        <input
          type="email"
          placeholder="What’s your work email?"
          className="bg-transparent p-3 pl-8 outline-none text-white placeholder-white"
        />
        <button className="bg-blur backdrop-blur-md text-white px-6 py-2 border border-[#FBFAF266] rounded-xl m-1 shadow-[inset_15px_15px_25px_#8BF9E803]">
          Get Started
        </button>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Footer;
