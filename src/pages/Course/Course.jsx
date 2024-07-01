import React from "react";
import "./Course.css"

const Course = () => {
  return (
    <div className="container course_content">
        <h1 className="course_heading">Course Plan</h1>
        <div className="basic_contents">
          <h2 className="basic_contents_heading secondary_font">Basic Course</h2>
          <p className="basic_content_price">RS 1500</p>
          <p className="basic_content_paragraph">
            This course teaches essential skills like hair cutting, shaving, and
            beard trimming for men. Trainees learn to use tools like scissors,
            clippers, and razors and graduate with the knowledge to work in a
            barbershop or salon.
          </p>
          <div className="basic_feature">
            <h2 className="basic_feature_heading">FEATURES</h2>
            <p className="basic_feature_first">6 - 8 weeks</p>
            <p className="basic_feature_second">Hair Cutting & Beard setting (Male)</p>
          </div>
          <button className="basic_button">Book Now</button>
        </div>

        <div className="advance_contents">
          <h2 className="advance_contents_heading secondary_font">Advance Course</h2>
          <p className="advance_content_price">RS 2500</p>
          <p className="advance_content_paragraph">
            This course teaches essential skills like hair cutting, shaving, and
            beard trimming for men. Trainees learn to use tools like scissors,
            clippers, and razors and graduate with the knowledge to work in a
            barbershop or salon.
          </p>
          <div className="advance_feature">
            <h2 className="advance_feature_heading">FEATURES</h2>
            <p className="advance_feature_first">6 - 8 weeks</p>
            <p className="advance_feature_second">Hair Cutting & Beard setting (Male)</p>
          </div>
          <button className="advance_button">Book Now</button>
        </div>

        <div className="master_contents">
          <h2 className="master_contents_heading secondary_font">Master Course</h2>
          <p className="master_content_price">RS 3500</p>
          <p className="master_content_paragraph">
            This course teaches essential skills like hair cutting, shaving, and
            beard trimming for men. Trainees learn to use tools like scissors,
            clippers, and razors and graduate with the knowledge to work in a
            barbershop or salon.
          </p>
          <div className="master_feature">
            <h2 className="master_feature_heading">FEATURES</h2>
            <p className="master_feature_first">6 - 8 weeks</p>
            <p className="master_feature_second">Hair Cutting & Beard setting (Male)</p>
          </div>
          <button className="master_button">Book Now</button>
        </div>
      </div>
  );
};

export default Course;
