import React from "react";
import "./Opening.css";

const Opening = () => {
  return (
    <div className="container opening">
        <div className="opening_weekdays">
          <span className="monday">
            <h1 className="secondary_font heading_fontsize">MON</h1>
            <p className="paragraph_font">9:00 am - 7:30 pm </p>
          </span>
          <span className="tuesday">
            <h1 className="secondary_font heading_fontsize">TUE</h1>
            <p className="paragraph_font">9:00 am - 7:30 pm </p>
          </span>
          <span className="wednesday">
            <h1 className="secondary_font heading_fontsize">WED</h1>
            <p className="paragraph_font">9:00 am - 7:30 pm </p>
          </span>
          <span className="thursday">
            <h1 className="secondary_font heading_fontsize">THU</h1>
            <p className="paragraph_font">9:00 am - 7:30 pm </p>
          </span>
          <span className="friday">
            <h1 className="secondary_font heading_fontsize">FRI</h1>
            <p className="paragraph_font">9:00 am - 7:30 pm </p>
          </span>
          <span className="saturday">
            <h1 className="secondary_font heading_fontsize">SAT</h1>
            <p className="paragraph_font">Closed</p>
          </span>
          <span className="sunday">
            <h1 className="secondary_font heading_fontsize">SUN</h1>
            <p className="paragraph_font">Closed</p>
          </span>
        </div>
    </div>
  );
};

export default Opening;
