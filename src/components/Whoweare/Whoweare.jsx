import React from "react";
import "./Whoweare.css";
import { Link } from "react-router-dom";
import Who from "../../assets/who.jpg";

const Whoweare = () => {
  return (
    <div className="container home_whoweare">
      <div className="whoweare_topcontent">
        <div className="image_field">
          <img className="image" src={Who} alt="image" />
        </div>
        <div className="whoweare_rightside">
          <p>Who we are?</p>
          <div className="whoweare_contents">
            <h1 className="secondary_font">
              Hair salon at
              <br /> your service since 2019
            </h1>
            <p>
              Discover the art of grooming at our professional barbershop and
              salon, where our talented team of stylists and barbers deliver
              exceptional services in a stylish and inviting environment.
            </p>
          </div>
          <div className="whoweare_link">
            <Link className="whoweare_about" to="/about">
              <p>Know more about us</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whoweare;
