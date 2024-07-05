import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleButton, setToggleButton] = useState(false);

  const handleNav = () => {
    setToggleButton(!toggleButton);
  };

  const handleClose = () => {
    setToggleButton(false);
  };

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

        <div className="open_button">
          <button className="toggle_button" onClick={handleNav}>
            {toggleButton ? <IoClose /> : <CiMenuBurger />}
          </button>
        </div>
      </div>

      {toggleButton && (
        <div className="nav_right">
          <div className="nav_link">
            <Link className="link" onClick={handleClose} to="/">Home</Link>
            <Link className="link" onClick={handleClose} to="/about">About</Link>
            <Link className="link" onClick={handleClose} to="/course">Course</Link>
            <Link className="link" onClick={handleClose} to="/contact">Contact</Link>
            {/* <button className="nav_button" onClick={handleClose}>Book Now</button> */}
          </div>
          
        </div>
      )}
    </section>
  );
};

export default Navbar;
