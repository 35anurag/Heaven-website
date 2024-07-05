import React from "react";
import "./Home.css";
import Whoweare from "../../components/Whoweare/Whoweare";
import Provide from "./Provide";
import Opening from "./Opening";
import Pricing from "./Pricing";
// import HomeImg from "../../assets/home.png";

const Home = () => {
  return (
    <section>
      <div className="container home_container">
        <div className="home_heading">
          <h1 className="secondary_font heading">
            Elevate <br /> Your Style
          </h1>
          <p>The ultimate hair experience</p>
        </div>
      </div>
      <Whoweare />
      <Opening />
      <Provide />
      <Pricing />
    </section>
  );
};

export default Home;
