import React from "react";
import "./About.css";
import AboutImg from "../../assets/about.jpg"
import Provideabout from "./Provideabout";
import Slider from "./Slider";

const About = () => {
  return (
    <div className="container about">
      <section className="intro">
        <div className="intro-text">
          <h1>About</h1>
          <p>
            Discover the art of grooming at our professional barbershop and
            salon.
          </p>
        </div>
      </section>

      <section className="details">
        <div className="detail-item">
          <h2>Professional Barbershop and Salon</h2>
          <p>
            Dedicated to providing exceptional grooming services and creating a
            welcoming environment.
          </p>
        </div>
        <div className="detail-item">
          <h2>Since 2019</h2>
          <p>
            Committed to providing quality services by adapting and
            incorporating new trends.
          </p>
        </div>
        <div className="detail-item">
          <h2>Satisfied Customers</h2>
          <p>
            Join our community of satisfied customers who trust us for the
            highest quality grooming services.
          </p>
        </div>
      </section>

      <section>
        <img className="intro_image" src={AboutImg} alt="image" />
      </section>

      <section className="intro_text">
        <p>
          We are a premier salon dedicated to providing exceptional beauty
          services that leave our clients looking and feeling their best. Our
          team of skilled barbers and stylists provide personalized services
          that cater to your unique needs and preferences.
        </p>
        <p>
          We offer a wide range of services that enhance your natural beauty and
          leave you feeling confident. Whether you're looking for a quick trim
          or a complete makeover, we have the expertise and experience to help
          you achieve your desired look.
        </p>
      </section>

      <Provideabout />
      <Slider />
    </div>
  );
};

export default About;
