import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className=" container contact_container">
      <h1 className="contact_title">Get in Touch</h1>

      <div className="contact_contents">
        <div className="contact_address">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.090884739631!2d84.51234057404933!3d27.621701729266256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994efa83d7df2e3%3A0xae2391f3365cdf46!2sGentlemen%20Barbershop%20%26%20Academy!5e0!3m2!1sen!2snp!4v1718448576067!5m2!1sen!2snp"
            width="600"
            height="450"
            style={{border: "1px"}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="contact_map"
          ></iframe>
        </div>

        <form className="contact_form">
          <div className="form_group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form_group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form_group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit_button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
