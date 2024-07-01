import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container footer">
      <div className="footer_container">
        <div className="footer_left">
          <h1>
            <img src={Logo} width={100} height={100} alt="logo" />
          </h1>
          <p>All Right Reserved</p>
        </div>
        <div className="footer_right">
          <p className="footer_phone">+977 9812234226</p>
          <p className="footer_email">heaven@gmail.com</p>
          <div className="social_media">
            <button className="footer_facebook">
              <FaFacebook />
            </button>
            <button className="footer_instagram">
              <FaInstagram />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
