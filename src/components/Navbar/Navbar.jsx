import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="container navbar_container">
      <div className="navbar">
        <Link to="/">
          <img src={Logo} width={80} height={80} alt="logo" />
        </Link>

        <div className="navbar_link">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/about">About</Link>
          <Link className="link" to="/course">Course</Link>
          <Link className="link" to="/contact">Contact</Link>
        </div>

        <button className="nav_button">Book Now</button>
      </div>
    </section>
  );
};

export default Navbar;
